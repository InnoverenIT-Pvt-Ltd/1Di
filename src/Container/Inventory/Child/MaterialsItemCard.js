import React, { useEffect,useState,useRef,useCallback } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { Select } from "../../../Components/UI/Elements";
import Tooltip from '@mui/material/Tooltip';
import { Button } from "antd";
import InfiniteScroll from 'react-infinite-scroll-component';
import { BundleLoader } from "../../../Components/Placeholder";
import "../Inventory.scss";
import {getSuppliesList,LinkInventoryItem,handleSuppliesDetails} from "../InventoryAction";
import {  MinusOutlined, PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { base_url,base_url2 } from "../../../Config/Auth";
import axios from 'axios';
import InveSuppliesDetailsDrawer from "./InveSuppliesDetailsDrawer";
const { Option } = Select;

function MaterialsItemCard(props) {
    const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const carouselRef = useRef(null);
  const observer = useRef();

  const [error, setError] = useState(null);
  const [data, setData] = useState({});
  const [rowDatas, setrowDatas] = useState("");

  useEffect(() => {
     props.getSuppliesList(page);    
  }, [page]);


  const handleLoadMore = () => {
    const PageMapd = props.purchaseList && props.purchaseList.length &&props.purchaseList[0].pageCount
    setTimeout(() => {  
      if  (props.purchaseList)
      {
        if (page < PageMapd) {    
            setPage(page + 1);
    props.getSuppliesList(page);
            }
              if (page === PageMapd){
                setHasMore(false)
              }
            }
            }, 100);
        }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${base_url2}/supplies/publish/count`);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const lastProductElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });

    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  const [units, setUnits] = useState({});

  function handleRowData(item) {
    setrowDatas(item)
}
  const handleQuantityChange = (event, suppliesId) => {
    const newUnit = parseInt(event.target.value, 10);
    if (!isNaN(newUnit) && newUnit >= 1) {
      setUnits((prevUnits) => ({
        ...prevUnits,
        [suppliesId]: newUnit,
      }));
    }
  };

  const handleIncrement = (suppliesId) => {
    setUnits(prevUnits => ({
      ...prevUnits,
      [suppliesId]: (prevUnits[suppliesId] || 1) + 1,
  }));
  };

  const handleDecrement = (suppliesId) => {
    setUnits(prevUnits => {
      const currentUnits = prevUnits[suppliesId] || 1;
      return {
          ...prevUnits,
          [suppliesId]: currentUnits > 1 ? currentUnits - 1 : 1,
      };
  });
  };
   const next = () => {
        if (carouselRef.current) {
          carouselRef.current.next();
        }
      };
    
      const previous = () => {
        if (carouselRef.current) {
          carouselRef.current.prev();
        }
        if (page > 0) {
          setPage(prevPage => prevPage - 1);
          setHasMore(true); // Allow fetching more pages again
        }
      };

  // if (props.fetchingPurchaseList) {
  //   return <BundleLoader />;
  // }

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 4, itemToScroll: 4 },
    { width: 1100, itemsToShow: 6, itemToScroll: 6 },
  ];

  const handleAddToCart = (suppliesId) => { 
        let data={
           
          iteamsDTO: {
              productType:"material",
              productId:suppliesId,
              unit: units[suppliesId] || 1,
            },
          
            orderPhoneId:props.invencartItem.orderPhoneId ? props.invencartItem.orderPhoneId :null,
            userId:props.userId,
            orgId:props.organizationId
            
          }
  
        props.LinkInventoryItem(data);
      }
  return (
    <>
    <div class="flex justify-end">
    <div class="text-base text-black font-bold font-poppins w-32">Items: {data.count}</div>
    </div>

    <div >

  
 
                     <InfiniteScroll
      dataLength={props.purchaseList.length} 
     next={handleLoadMore}
     hasMore={hasMore}
     height={"50vh"}
    style={{width:"-webkit-fill-available"}}
    loader={props.fetchingPurchaseList?<div class="flex justify-center">Loading...</div>:null}
    endMessage={ <p class="fles text-center font-bold text-xs text-red-500">You have reached the end of page</p>}
    >
       <div class="flex flex-wrap w-full max-sm:justify-between max-sm:flex-col max-sm:items-center justify-center">
                  {props.purchaseList.map((item,index) => {
                     const currentdate = dayjs().format("YYYY/MM/DD");
                     const date = dayjs(item.creationDate).format("YYYY/MM/DD");
                     const isLastElement = index === props.purchaseList.length - 1;
                     return (
                     
                      <CardElement >
                        <div 
                        // ref={isLastElement ? lastProductElementRef : null} 
                        key={item.suppliesId} className="card-element">
                      <div class=" h-[19rem] flex  items-center scale-90 hover:scale-95 ease-in  duration-500 hover:shadow-lg  w-[14rem] flex-shrink-0 overflow-hidden rounded-md border border-gray-200 max-sm:w-48 flex-grow-3 md:flex-grow-0">
                     
                      <div class=" flex flex-col max-sm:mr-0 md:flex   h-hwk">
                                              {item.imageId ? (
                                                    <div class="object-cover object-center  flex items-center">
                                                     <img
                                                              src={`${base_url}/image/${item.imageId}`} 
                                                              style={{ height: "12.5rem", width: "13rem" }}
                                                          />
                                                         </div>  
                                                        ) : (
                           
                                                        <div className=" text-base h-[12.5rem] text-center w-[13rem] flex justify-center items-center">Image Not Available</div>
                                                      
                                                    )}
                                                            <div class=" flex w-wk cursor-pointer flex-row mt-1 text-[#1124AA] justify-evenly "> 
                                                             
                                                                  <div> {item.newSuppliesNo}  </div>
                                                                  <div > 
                                                                  <Tooltip title={item.suppliesName} placement="top" arrow>
                                                                                              
                                                                                              <div class="cursor-pointer"
                                                                                                onClick={() => {
                                                                                                  props.handleSuppliesDetails(true);
                                                                                                  handleRowData(item);
                                                                                                }} 
                                                                                              >{item.suppliesName || ""}</div>
                                                                                            </Tooltip>
                                                                     </div>
                                                                     
                                                                  </div>
                                                                  <div className=" flex flex-row justify-around"> 
                                                                        <div class=" mt-1 text-xs text-[#1124AA] truncate max-w-[100px] "title={item.categoryName}>
                                                                              {item.categoryName}
                                                                            </div>
                                                                            
                                                                            <div class=" mt-1 text-xs text-[#1124AA]">
                                                                              {item.subCategoryName}
                                                                            </div> 
                                                                  </div>
                                                                  <div className=" flex flex-row justify-around"> 
                                                                        <div class=" mt-1 text-xs text-[#1124AA] ">
                                                                            WSL -  {item.suppliesPrices?.[0].suppliesPrice?.toFixed(2)}
                                                                            </div>
                                                                            <div class=" mt-1 text-xs text-[#1124AA]">
                                                                              SRP - {item.suppliesPrices?.[0].suppliesPriceB2C?.toFixed(2)}
                                                                            </div> 
                                                                  </div>
                                                      
                                                                                                                         
                                                                            <div class="mt-1 flex  justify-between max-sm:flex items-center">
                                                                            <div class=" flex  max-sm:w-48  ">
                                                                            <div className="add-minus-quantity">
                                                                          <span >
                                                                                <MinusOutlined onClick={() => handleDecrement(item.suppliesId)}/>
                                                                          </span>
                                                                        
                                                                          <input  type="number"  
                                                                          value={units[item.suppliesId] || 1}
                                                                          onChange={(event) => handleQuantityChange(event, item.suppliesId)}
                                                                          min="1" 
                                                                          step="1"  />
                                                                        
                                                                          <span

                                                                          >
                                                                            <PlusOutlined onClick={() => handleIncrement(item.suppliesId)}/>
                                                                            </span>

                                                                          </div>
           
                          
                                             
                                                                           </div>
                                                                           <div className="  cursor-pointer "
                                                                                 onClick={() =>
                                                                                    handleAddToCart(
                                                                                      item.suppliesId
                                                                    
                                                                                    )
                                                                                  }
                                                                                >
                                                                                    <Button type="primary" >
                                                                                     Add
                                                                                </Button>
                                                                                </div>
                                                                          </div>
                  
                                                                          </div>
                                                                          
                                                                          
                                                                            
                                                                             
                  
                                         </div>
                                         </div>
                                       </CardElement>
                               
                    );
                  })}
                  </div>
                  </InfiniteScroll>
                  
  
   </div>
<InveSuppliesDetailsDrawer
      suppliesDetailsDrawr={props.suppliesDetailsDrawr}
      handleSuppliesDetails={props.handleSuppliesDetails}
      rowDatas={rowDatas}
      />
   </>
  );
}
const mapStateToProps = ({ inventory,auth }) => ({
  purchaseList: inventory.purchaseList,
  fetchingPurchaseList:inventory.fetchingPurchaseList,
  userId: auth.userDetails.userId,
  organizationId: auth.userDetails.organizationId,
  suppliesDetailsDrawr:inventory.suppliesDetailsDrawr,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getSuppliesList,
      LinkInventoryItem,
      handleSuppliesDetails

    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MaterialsItemCard);
const MainWrapper = styled.div`
  /* */
  margin: 0px 20px;
  @media only screen and (max-width: 600px) {
  }
`;
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  @media only screen and (max-width: 600px) {
    justify-content: center;
    flex-direction: column;
  }
`;
const CardElement = styled.div`

  /* border:2px solid orange */
   padding: 0 4px;
   margin-top: 0.5rem;
  display: flex;
    justify-content: center;
  /* margin:0px 20px; */
  @media only screen and (max-width: 600px) {
    display: flex;
    padding:0;
    margin-top: 1rem;
    justify-content: center;
    width: 100%;
  }
`;
const CardDescription1 = styled.div`
  @media only screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

  }
`;
const CardDescription = styled.div`
  @media only screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
const CardImage = styled.div`
  margin: auto;
  width: 5rem;
  height: 5rem;
  @media only screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
const WithOutImage = styled.div`
  margin: auto;
  width: 10em;
  height: 10em;
  display: flex;
  align-items: center;
  flex-direction:column @media only screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const Header = styled.div`
  text-overflow: ellipsis;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  height: 2em;
  font-size: 1.3em;
  font-family: Poppins;
  font-weight: 700;
  @media only screen and (max-width: 600px) {
    text-overflow: ellipsis;

white-space: nowrap;
overflow: hidden;
height: 2em;
font-size: 1.3em;
font-family: Poppins;
font-weight: 700;
width:100%
text-align:center
  }
`;
const Desc = styled.p`
  height: 1.5em;
  overflow: hidden;
  padding: 1%;
  text-align: center;
`;
const Desc2 = styled.p`
  height: 60px;
  overflow: auto;
  color: white;
  padding: 3%;
  text-align: center;
`;

const Price = styled.div`
  height: 1.5em;
  font-weight: 700;
  font-family: Poppins;
  font-size: 1em;
`;
const Price1 = styled.div`
  height: 3.5em;
  font-weight: 700;
  font-family: Poppins;
  font-size: 1em;
  display: grid;
  width: -webkit-fill-available;
  place-items: baseline;
  white-space: pre;
`;
const Price2 = styled.div`
  height: 1.5em;
  font-weight: 700;
  font-family: Poppins;
  font-size: 1em;
  text-decoration-line: line-through;
`;
const Size = styled.div`
  height: 2.5em;
  font-weight: 700;
  font-family: Poppins;
  font-size: 1em;
  display: grid;
  width: -webkit-fill-available;
  place-items: baseline;
  white-space: pre;
`;


