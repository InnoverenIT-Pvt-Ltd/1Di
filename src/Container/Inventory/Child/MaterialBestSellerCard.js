
import React, { useEffect,useState,useRef,useCallback } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from 'axios';
import {base_url, base_url2 } from '../../../Config/Auth';
// import { CardElement } from './MaterialsItemCard'; // Import the styled CardElement
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
import {LinkInventoryItem,handleSuppliesDetails} from "../InventoryAction";

function MaterialBestSellerCard (props) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const carouselRef = useRef(null);
    const observer = useRef();
    const [units, setUnits] = useState({});
    const [rowDatas, setrowDatas] = useState("");

    useEffect(() => {
        const type="procure";
        const limit="20";
const endDate=props.endDate;
const startDate=props.startDate;
        const fetchBestSellerData = async () => {
            try {
                setLoading(true);

                const response = await axios.get(`${base_url2}/phoneOrder/org/getTop-sellingProduct/${type}/${limit}?endDate=2024-08-01T00:00:00.000Z&startDate=2024-08-12T11:31:59.319Z`,{
                    headers: {
                        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
                      },
                });
                setItems(prevItems => [...prevItems, ...response.data.items || []]);
            } catch (error) {
                console.error("Error fetching best seller data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBestSellerData();
    }, []);

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
        <div>
            {loading ? <div>Loading...</div> : (
                <div className="flex flex-wrap w-full max-sm:justify-between max-sm:flex-col max-sm:items-center justify-center">
                    {items.map(item => (
                        <CardElement key={item.suppliesId}>
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
            )}
        </div>
    );
};

const mapStateToProps = ({ inventory,auth,planner }) => ({
    userId: auth.userDetails.userId,
    organizationId: auth.userDetails.organizationId,
    suppliesDetailsDrawr:inventory.suppliesDetailsDrawr,
    endDate: planner.endDate,
    startDate: planner.startDate,
  });
  
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
      {
       LinkInventoryItem,
        handleSuppliesDetails
  
      },
      dispatch
    );
  
  export default connect(mapStateToProps, mapDispatchToProps)(MaterialBestSellerCard); ;
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