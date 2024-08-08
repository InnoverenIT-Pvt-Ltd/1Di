import React, { useEffect,useState, useRef,lazy } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import Tooltip from '@mui/material/Tooltip';
import { base_url } from '../../Config/Auth';
import { Button } from "antd";
import { InfoCircleTwoTone,  
    MinusOutlined,
    PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import {getSuppliesCList,handleCatagoryDetails} from "./CustomerAction";
import { BundleLoader } from '../../Components/Placeholder';
import InfiniteScroll from 'react-infinite-scroll-component';
import MainDetailsDrawer from './MainDetailsDrawer';

function MaterialAllCard (props) {
  const [units, setUnits] = useState({});
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [rowDatas, setrowDatas] = useState("");
    useEffect(() => {
     props.getSuppliesCList(page);
    }, []);
    function handleRowData(item) {
      setrowDatas(item)
  }
    const carouselRef = useRef(null);
  
    const next = () => {
      carouselRef.current.next();
    };
  
    const previous = () => {
      carouselRef.current.prev();
    };
  
    // if (props.fetchingPurchaseListC) {
    //   return <BundleLoader />;
    // }
  
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 500, itemsToShow: 2 },
      { width: 768, itemsToShow: 4, itemToScroll: 4 },
      { width: 1100, itemsToShow: 6, itemToScroll: 6 },
    ];
    
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
          const handleLoadMore = () => {
            const callPageMapd = props.purchaseListC && props.purchaseListC.length &&props.purchaseListC[0].pageCount
            setTimeout(() => {
        
              if  (props.purchaseListC)
              {
                if (page < callPageMapd) {
                  setPage(page + 1);
                  props.getSuppliesCList(page);
              }
              if (page === callPageMapd){
                setHasMore(false)
              }
            }
            }, 100);
          };
    // const handleInfiniteScroll = () => {
    //   setPage(page + 1);
    //   props.getSuppliesCList(page);
    // };
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
    
        <div >
        <InfiniteScroll
        dataLength={props.purchaseListC.length}
        next={handleLoadMore}
        hasMore={hasMore}
        height={"40vh"}
        style={{ width: "-webkit-fill-available" }}
        loader={props.fetchingPurchaseListC ? <div className="flex justify-center">Loading...</div> : null}
        //initialLoad={true}
      >
        <CardWrapper>
            {/* <Carousel
        pagination={false}
                         breakPoints={breakPoints}
                        style={{ justifyContent:"center" }}
                          class=" w-2/12  mt-8 ml-10"
                        > */}

                      {props.purchaseListC.map((item) => {
                         const currentdate = dayjs().format("YYYY/MM/DD");
                         const date = dayjs(item.creationDate).format("YYYY/MM/DD");
                        return (
                          <CardElement >
                          <div class=" flex flex-col items-center max-sm:mr-0 md:flex   h-hwk border">
                                              {item.imageId ? (
                                                    <div class=" flex items-center">
                                                     <img
                                                              src={`${base_url}/image/${item.imageId}`} 
                                                              style={{ height: "6.5rem", width: "7rem" }}
                                                          />
                                                         </div>  
                                                        ) : (
                           
                                                        <div className="flex items-center text-xs h-[6.5rem]  w-[7rem] ">Image Not Available</div>
                                                      
                                                    )}
                                                            <div class=" flex w-wk flex-row mt-1 text-xs text-[#1124AA] justify-evenly cursor-pointer "> 
                                                             
                                                                  <div> {item.newSuppliesNo}  </div>
                                                                  <div > 
                                                                  <Tooltip title={item.suppliesName} placement="top" arrow>
                                                                                              
                                                                                              <div 
                                                                                               onClick={() => {
              props.handleCatagoryDetails(true);
              handleRowData(item);
            }} >{item.suppliesName || ""}</div>
                                                                                            </Tooltip>
                                                                     </div>
                                                                     
                                                                  </div>
                                                                  <div className=" flex flex-row justify-around w-full mt-1"> 
                                                                        <div class="  text-xs text-[#1124AA] ">
                                                                              {item.categoryName}
                                                                            </div>
                                                                            <div class=" text-xs text-[#1124AA]">
                                                                              {item.subCategoryName}
                                                                            </div> 
                                                                  </div>
                                                              
                                                                  <div className=" flex flex-row justify-around"> 
                                                                        <div class=" mt-1 text-xs text-[#1124AA] ">
                                                                            WSL -  {item.discounts?.[0]?.allowedDiscount}
                                                                            </div>
                                                                            <div class=" mt-1 text-xs text-[#1124AA]">
                                                                              RTL - {item.suppliesPrices?.[0].suppliesPrice}
                                                                            </div> 
                                                                  </div>
                                                                                                                         
                                                                            <div class="w-40 mt-1 flex  justify-between max-sm:flex items-center">
                                                                            {/* <div class=" flex justify-evenly place-items-baseline flex-col max-sm:w-48  flex-auto ">
                                                                            <div className="add-minus-quantity">
                                                                          <span

                                                                          >
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
                                                                           <div className="  cursor-pointer ml-2"
                                                                                 onClick={() =>
                                                                                    handleAddToCart(
                                                                                      item.suppliesId
                                                                    
                                                                                    )
                                                                                  }
                                                                                >
                                                                                    <Button type="primary" >
                                                                                     Add
                                                                                </Button>
                                                                                </div> */}
                                                                          </div>
                  
                                                                          </div>
                                           </CardElement>
                        );
                      })}
                      {/* </Carousel> */}
                    
                </CardWrapper>    
                </InfiniteScroll>
       </div>
       <MainDetailsDrawer
       rowDatas={rowDatas}
       handleCatagoryDetails={props.handleCatagoryDetails}
       catagoryDetailsDrawr={props.catagoryDetailsDrawr}
      />
       </>
      );
    }
    const mapStateToProps = ({ customer,auth }) => ({
      purchaseListC: customer.purchaseListC,
      fetchingPurchaseListC:customer.fetchingPurchaseListC,
      catagoryDetailsDrawr: customer.catagoryDetailsDrawr
    //   userId: auth.userDetails.userId,
    //   organizationId: auth.userDetails.organizationId,
    });
    
    const mapDispatchToProps = (dispatch) =>
      bindActionCreators(
        {
          getSuppliesCList,
          handleCatagoryDetails
        },
        dispatch
      );
    
    export default connect(mapStateToProps, mapDispatchToProps)(MaterialAllCard);

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
   padding: 0 10px;
   margin-top: 2.5em;
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
  width: 7rem;
  height: 7rem;
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