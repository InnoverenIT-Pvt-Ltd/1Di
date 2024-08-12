import React, { useEffect,useState,useRef,useCallback } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from 'axios';
import { base_url,base_url2 } from '../../../Config/Auth';
import styled from "styled-components";
import Tooltip from '@mui/material/Tooltip';
import { Button } from "antd";
import InfiniteScroll from 'react-infinite-scroll-component';
import "../Inventory.scss";
import {  MinusOutlined, PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import InveSuppliesDetailsDrawer from "./InveSuppliesDetailsDrawer";
import { CurrencySymbol } from "../../../Components/Common";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {getMaterialRecommend,LinkInventoryItem,handleSuppliesDetails} from "../InventoryAction";

function MaterialRecommendedCard(props) {
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const carouselRef = useRef(null);
    const observer = useRef();
    const [units, setUnits] = useState({});
    const [rowDatas, setrowDatas] = useState("");

    useEffect(() => {
        props.getMaterialRecommend(page);
    }, [page]);

    const handleLoadMore = () => {
        const PageMapd = props.materialRecommendeds && props.materialRecommendeds.length && props.materialRecommendeds[0].pageCount;
        setTimeout(() => {
            if (props.materialRecommendeds) {
                if (page < PageMapd) {
                    setPage(page + 1);
                    props.getMaterialRecommend(page);
                }
                if (page === PageMapd) {
                    setHasMore(false);
                }
            }
        }, 100);
    }

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
      const itemss= [{
        suppliesName:"The Day"
      }]
    return (
        <div>
         
                 <InfiniteScroll
                 dataLength={props.materialRecommendeds.length} 
                next={handleLoadMore}
                hasMore={hasMore}
                height={"50vh"}
               style={{width:"-webkit-fill-available"}}
               loader={loading?<div class="flex justify-center">Loading...</div>:null}
               endMessage={ <p class="fles text-center font-bold text-xs text-red-500">You have reached the end of page</p>}
               >
                <div className="flex flex-wrap w-full max-sm:justify-between max-sm:flex-col max-sm:items-center justify-center">
                    {props.materialRecommendeds.map(item => (
                        <CardElement>
                              <div 
                       
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
                                                                            <div class=" mt-1 text-xs text-[#1124AA]">
                                                                              SRP - <CurrencySymbol  currencyType={item.suppliesPrices?.[0].currencyName}/> {item.suppliesPrices?.[0].suppliesPriceB2C?.toFixed(2)}
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
                    ))}
                </div>
                </InfiniteScroll>
            
        </div>
    );
}

const mapStateToProps = ({ inventory,auth }) => ({
    materialRecommendeds:inventory.materialRecommendeds,
    userId: auth.userDetails.userId,
    organizationId: auth.userDetails.organizationId,
    suppliesDetailsDrawr:inventory.suppliesDetailsDrawr,
  });
  
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
      {
        getMaterialRecommend,
       LinkInventoryItem,
        handleSuppliesDetails
  
      },
      dispatch
    );
  
  export default connect(mapStateToProps, mapDispatchToProps)(MaterialRecommendedCard);
   ;

const CardElement = styled.div`
   padding: 0 4px;
   margin-top: 0.5rem;
   display: flex;
   justify-content: center;

   @media only screen and (max-width: 600px) {
     display: flex;
     padding: 0;
     margin-top: 1rem;
     justify-content: center;
     width: 100%;
   }
`;
