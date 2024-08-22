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
import { CurrencySymbol } from "../../../Components/Common";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MaterialRecommendedCard from './MaterialRecommendedCard';
import MaterialBestSellerCard from './MaterialBestSellerCard';

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

  const [sortOrder, setSortOrder] = useState('asc'); 
  const [sortedList, setSortedList] = useState([]);

  const [selectedValue, setSelectedValue] = useState('default');

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
     props.getSuppliesList(page);    
  }, [page]);

useEffect(() => {
      const sorted = [...props.purchaseList].sort((a, b) => {
        const nameA = a.categoryName ? a.categoryName.toUpperCase() : "";
        const nameB = b.categoryName ? b.categoryName.toUpperCase() : "";
        return sortOrder === "asc" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
      });
      setSortedList(sorted);
    }, [props.purchaseList, sortOrder]);

    const handleSortChange = (order) => {
      setSortOrder(order);
    };

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

    <div className="flex justify-between items-center">
    <div  class="font-bold" >
                      Products 
                    </div>
                    <div className='flex items-center'>
                    <div className='mr-12'>Filter:</div>
    <Select
        style={{ width: '10rem' }}
        defaultValue="default"
        onChange={handleChange}
      >
        <Option value="default">Select</Option>
        <Option value="recommend">Recommend</Option>
        <Option value="bestSeller">Best Seller</Option>
      </Select>
      </div>
      <div className='flex items-center'>
      <div className='mr-12'>Sort by:</div>
        <SortButton
            onClick={() => handleSortChange("asc")}
            active={sortOrder === "asc"}
          >
            <FilterAltIcon/> A-Z
          </SortButton>
          <SortButton
            onClick={() => handleSortChange("desc")}
            active={sortOrder === "desc"}
          >
            <FilterAltIcon/> Z-A
          </SortButton>
          </div>
      </div>
      {selectedValue === 'default' &&
                     <InfiniteScroll
      dataLength={sortedList.length} 
     next={handleLoadMore}
     hasMore={hasMore}
     height={"50vh"}
    style={{width:"-webkit-fill-available"}}
    loader={props.fetchingPurchaseList?<div class="flex justify-center">Loading...</div>:null}
    endMessage={ <p class="fles text-center font-bold text-xs text-red-500">You have reached the end of page</p>}
    >
       <div class="flex flex-wrap w-full max-sm:justify-between max-sm:flex-col max-sm:items-center justify-center">
                  {sortedList.map((item,index) => {
                     const currentdate = dayjs().format("YYYY/MM/DD");
                     const date = dayjs(item.creationDate).format("YYYY/MM/DD");
                     const isLastElement = index === sortedList.length - 1;
                     return (
                     
                      <CardElement >
                        <div 
                        // ref={isLastElement ? lastProductElementRef : null} 
                        key={item.suppliesId} className="card-element">
                      <div class=" h-[19rem] flex  items-center scale-90 hover:scale-95 ease-in  duration-500 hover:shadow-lg  w-[12.6rem] flex-shrink-0 overflow-hidden rounded-md border border-gray-200 max-sm:w-48 flex-grow-3 md:flex-grow-0">
                     
                      <div class=" flex flex-col max-sm:mr-0 md:flex   h-hwk">
                                              {item.imageId ? (
                                                    <div class="object-cover object-center  flex items-center">
                                                     <img
                                                              src={`${base_url}/image/${item.imageId}`} 
                                                              style={{ height: "12.5rem", width: "13rem" }}
                                                          />
                                                         </div>  
                                                        ) : (
                           
                                                        <div className=" text-base h-[9.5rem] text-center w-[13rem] flex justify-center items-center">Image Not Available</div>
                                                      
                                                    )}
                                                     <div className=" flex justify-end flex-row w-full "> 
                                                                            <div class=" mr-3 text-xs text-[#1124AA]">
                                                                              SRP -  {item.suppliesPrice} CA$
                                                                            </div> 
                                                                  </div>
                                                                  <div class=" flex w-wk p-1 flex-col  text-xs text-[#1124AA] justify-evenly cursor-pointer "> 
                                                             
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
                                                                 
                                                      
                                                                                                                         
                                                                            <div class="mt-1 flex  justify-between max-sm:flex items-center p-4">
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
}
{selectedValue === 'recommend' && <MaterialRecommendedCard invencartItem={props.invencartItem}/>}
{selectedValue === 'bestSeller' && <MaterialBestSellerCard invencartItem={props.invencartItem}/>}
  
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
const SortButton = styled.button`
  background-color: ${(props) => (props.active ? '#007bff' : '#f8f9fa')};
  color: ${(props) => (props.active ? '#fff' : '#007bff')};
  border: 1px solid #007bff;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: ${(props) => (props.active ? '#0056b3' : '#e2e6ea')};
  }
`;


