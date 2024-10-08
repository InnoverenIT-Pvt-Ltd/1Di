import React, { useEffect,useState,useRef,useCallback } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { Select } from "../../Components/UI/Elements";
import Tooltip from '@mui/material/Tooltip';
import { Button } from "antd";
import InfiniteScroll from 'react-infinite-scroll-component';
import { BundleLoader } from "../../Components/Placeholder";
import "./Inventory.scss";
import {getFeaturedMaterials,LinkInventoryItem} from "./InventoryAction";
import { InfoCircleTwoTone,  MinusOutlined, PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import Carousel from "react-elastic-carousel";
import { base_url } from "../../Config/Auth";

const { Option } = Select;

function MaterialsItemCard(props) {
    const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [rowDatas, setrowDatas] = useState(""); 
  // const carouselRef = useRef(null);
  // const observer = useRef();

  useEffect(() => {
     props.getFeaturedMaterials(page);    
  }, []);

  // useEffect(() => {
  //   const fetchList = async (pageNumber) => {
  //     setLoading(true);
  //     try {
  //       await props.getFeaturedMaterials(pageNumber);
  //       setLoading(false);
  //       if (pageNumber + 1 >= props.featuredMaterials[0]?.pageCount) {
  //         setHasMore(false);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching list:", error);
  //       setLoading(false);
  //     }
  //   };
  //   fetchList(page);
  // }, [page]);
  const handleLoadMore = () => {
    const callPageMapd = props.featuredMaterials && props.featuredMaterials.length &&props.featuredMaterials[0].pageCount
    setTimeout(() => {  
      if  (props.featuredMaterials)
      {
        if (page < callPageMapd) {    
    setPage(page + 1);
            props.getFeaturedMaterials(page);
            }
              if (page === callPageMapd){
                setHasMore(false)
              }
            }
            }, 100);
  }
 

  // const lastProductElementRef = useCallback(node => {
  //   if (loading) return;
  //   if (observer.current) observer.current.disconnect();
  //   observer.current = new IntersectionObserver(entries => {
  //     if (entries[0].isIntersecting && hasMore) {
  //       setPage(prevPage => prevPage + 1);
  //     }
  //   });

  //   if (node) observer.current.observe(node);
  // }, [loading, hasMore]);

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
  //  const next = () => {
  //       if (carouselRef.current) {
  //         carouselRef.current.next();
  //       }
  //     };
    
  //     const previous = () => {
  //       if (carouselRef.current) {
  //         carouselRef.current.prev();
  //       }
  //       if (page > 0) {
  //         setPage(prevPage => prevPage - 1);
  //         setHasMore(true); // Allow fetching more pages again
  //       }
  //     };

  // if (props.fetchingFeaturedMaterials) {
  //   return <BundleLoader />;
  // }

  // const breakPoints = [
  //   { width: 1, itemsToShow: 1 },
  //   { width: 500, itemsToShow: 2 },
  //   { width: 768, itemsToShow: 4, itemToScroll: 4 },
  //   { width: 1100, itemsToShow: 6, itemToScroll: 6 },
  // ];

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

// const drb = [
//     {
//         "suppliesId": "SUP57727089906232024",
//         "categoryName": "microwave",
//         "subCategoryName": "battery",
//         "suppliesName": "Microwave",
//         "attributeName": "10",
//         "subAttributeName": "watt",
//         "price": 0.0,
//         "tax": 0.0,
//         "quantity": 0,
//         "creationDate": "2024-07-23T05:38:45.737Z",
//         "active": true,
//         "hsn": "4444",
//         "catalogInd": false,
//         "mainInd": false,
//         "cost": 0.0,
//         "suppliesPrice": 0.0,
//         "suppliesSearchName": "null Microwave microwave battery 10 watt",
//         "manufactureId": "MFG376257492305232024",
//         "supplierSuppliesPrice": 0.0,
//         "supplierSuppliesInd": false,
//         "purchaseValue": 0.0,
//         "unitsReceived": 0,
//         "unitsDamaged": 0,
//         "transferInd": false,
//         "poConvertInd": false,
//         "totalUnits": 0,
//         "openingUnits": 0,
//         "units": 0,
//         "amount": 0.0,
//         "pageCount": 1,
//         "listCount": 4,
//         "dataCount": 50,
//         "uniqueIdInd": false,
//         "fifoInd": false,
//         "newSuppliesNo": "000023072024",
//         "modifiedAt": "2024-08-01T07:44:57.823Z",
//         "publishInd": true,
//         "suppliesPriceB2C": 0.0,
//         "height": 0.0,
//         "weight": 0.0,
//         "length": 0.0,
//         "width": 0.0,
//         "featureInd": false
//     },
//     {
//         "suppliesId": "SUP4815964312232024",
//         "imageId": "IMG46061257835232024",
//         "categoryName": "Generator",
//         "subCategoryName": "Disel",
//         "suppliesName": "Generator",
//         "attributeName": "100",
//         "subAttributeName": "ml",
//         "price": 0.0,
//         "tax": 0.0,
//         "quantity": 0,
//         "creationDate": "2024-07-23T05:25:17.811Z",
//         "active": true,
//         "hsn": "666",
//         "catalogInd": false,
//         "mainInd": false,
//         "cost": 0.0,
//         "suppliesPrice": 0.0,
//         "netWeight": "1000",
//         "suppliesSearchName": "null Generator Generator Disel 100 ml",
//         "manufactureId": "MFG528274896156232024",
//         "supplierSuppliesPrice": 0.0,
//         "supplierSuppliesInd": false,
//         "purchaseValue": 0.0,
//         "unitsReceived": 0,
//         "unitsDamaged": 0,
//         "transferInd": false,
//         "poConvertInd": false,
//         "totalUnits": 0,
//         "openingUnits": 0,
//         "units": 0,
//         "amount": 0.0,
//         "pageCount": 1,
//         "listCount": 4,
//         "dataCount": 50,
//         "uniqueIdInd": false,
//         "fifoInd": false,
//         "newSuppliesNo": "000023072024",
//         "publishInd": true,
//         "suppliesPriceB2C": 0.0,
//         "height": 0.0,
//         "weight": 0.0,
//         "length": 0.0,
//         "width": 0.0,
//         "featureInd": false
//     },
//     {
//         "suppliesId": "SUP28005149390242024",
//         "categoryName": "Invertor",
//         "subCategoryName": "invertor",
//         "suppliesName": "invertor",
//         "attributeName": "100mah",
//         "subAttributeName": "MAH",
//         "price": 0.0,
//         "tax": 0.0,
//         "quantity": 0,
//         "creationDate": "2024-06-24T09:14:04.622Z",
//         "active": true,
//         "hsn": "887",
//         "catalogInd": false,
//         "mainInd": false,
//         "cost": 0.0,
//         "suppliesPrice": 0.0,
//         "netWeight": "10000",
//         "netUnit": "kg",
//         "suppliesSearchName": "null invertor Invertor invertor 100mah MAH",
//         "manufactureId": "MFG914540174153242024",
//         "supplierSuppliesPrice": 0.0,
//         "supplierSuppliesInd": false,
//         "purchaseValue": 0.0,
//         "unitsReceived": 0,
//         "unitsDamaged": 0,
//         "transferInd": false,
//         "poConvertInd": false,
//         "totalUnits": 0,
//         "openingUnits": 0,
//         "units": 0,
//         "amount": 0.0,
//         "pageCount": 1,
//         "listCount": 4,
//         "dataCount": 50,
//         "uniqueIdInd": false,
//         "fifoInd": true,
//         "newSuppliesNo": "000024062024",
//         "modifiedAt": "2024-06-25T10:34:49.579Z",
//         "publishInd": true,
//         "suppliesPriceB2C": 0.0,
//         "height": 0.0,
//         "weight": 0.0,
//         "length": 0.0,
//         "width": 0.0,
//         "featureInd": false
//     },
//     {
//         "suppliesId": "SUP84617134139152024",
//         "categoryName": "sssss",
//         "subCategoryName": "ssds",
//         "suppliesName": "ddddf",
//         "attributeName": "dd",
//         "subAttributeName": "ddd",
//         "price": 0.0,
//         "tax": 0.0,
//         "description": "iuuhgfds",
//         "quantity": 0,
//         "creationDate": "2024-04-15T04:19:47.353Z",
//         "active": true,
//         "hsn": "1255",
//         "catalogInd": false,
//         "mainInd": false,
//         "cost": 0.0,
//         "currency": "CU33",
//         "suppliesPrice": 0.0,
//         "netWeight": "222",
//         "grossWeight": "222",
//         "grossUnit": "kg",
//         "netUnit": "g",
//         "suppliesSearchName": "null ddddf sssss ssds dd ddd",
//         "manufactureId": "MFG364333187336152024",
//         "supplierSuppliesPrice": 0.0,
//         "supplierSuppliesInd": false,
//         "purchaseValue": 0.0,
//         "unitsReceived": 0,
//         "unitsDamaged": 0,
//         "transferInd": false,
//         "poConvertInd": false,
//         "totalUnits": 0,
//         "openingUnits": 0,
//         "units": 0,
//         "amount": 0.0,
//         "reorder": "236",
//         "pageCount": 1,
//         "listCount": 4,
//         "dataCount": 50,
//         "uniqueIdInd": true,
//         "fifoInd": true,
//         "publishInd": true,
//         "suppliesPriceB2C": 0.0,
//         "height": 0.0,
//         "weight": 0.0,
//         "length": 0.0,
//         "width": 0.0,
//         "featureInd": false
//     }
// ]
// console.log("drbbb")
  return (
    <>
   
  
   <div class="text-sm justify-start text-black font-bold font-poppins mt-3">Featured</div>
  
   
    {/* <CardWrapper> */}
    {/* <Carousel
    pagination={false}
                     breakPoints={breakPoints}
                    style={{ minHeight: "6em", justifyContent:"center" }}
                      class=" w-2/12  mt-8 ml-10"
                      onNextEnd={next}
                      onPrevEnd={previous}
                    > */}
                    <InfiniteScroll
      dataLength={props.featuredMaterials.length} 
     next={handleLoadMore}
     hasMore={hasMore}
     height={"32vh"}
    style={{width:"-webkit-fill-available"}}
    loader={props.fetchingFeaturedMaterials?<div class="flex justify-center">Loading...</div>:null}
    endMessage={ <p class="fles text-center font-bold text-xs text-red-500">You have reached the end of page</p>}
    >
        <div class="flex flex-wrap w-full max-sm:justify-between max-sm:flex-col max-sm:items-center justify-center">
                  {props.featuredMaterials.map((item,index) => {
                     const currentdate = dayjs().format("YYYY/MM/DD");
                     const date = dayjs(item.creationDate).format("YYYY/MM/DD");
                     const isLastElement = index === props.featuredMaterials.length - 1;
                     return (
                    
                      <div  key={item.suppliesId} class=" h-[13rem] flex  items-center scale-90 hover:scale-95 ease-in  duration-500 hover:shadow-lg  w-[12.6rem] flex-shrink-0 overflow-hidden rounded-md border border-gray-200 max-sm:w-48 flex-grow-3 md:flex-grow-0">
                     
                      <div class=" flex flex-col max-sm:mr-0 md:flex   h-hwk">
                                              {item.imageId ? (
                                                    <div class="object-cover object-center  flex items-center">
                                                     <img
                                                              src={`${base_url}/image/${item.imageId}`} 
                                                              style={{ height: "6.5rem", width: "13rem" }}
                                                          />
                                                         </div>  
                                                        ) : (
                           
                                                        <div className=" text-xs h-[6.5rem] text-center w-[13rem] flex justify-center items-center">Image Not Available</div>
                                                      
                                                    )}
                                                     <div className=" flex justify-around flex-row w-full "> 
                                                                            <div class=" mr-3 text-xs text-[#1124AA]">
                                                                            WSL {item.suppliesPrices?.[0].suppliesPrice.toFixed(2)}
                                                                            {/* <CurrencySymbol  currencyType={item.suppliesPrices?.[0].currencyName}/> {item.suppliesPrices?.[0].suppliesPrice.toFixed(2)} */}
                                                                            </div> 
                                                                 
                                                    
                                                                            <div class=" mr-3 text-xs text-[#1124AA]">
                                                                              SRP {item.suppliesPrices?.[0].suppliesPriceB2C.toFixed(2)}
                                                                               {/* <CurrencySymbol  currencyType={item.suppliesPrices?.[0].currencyName}/> {item.suppliesPrices?.[0].suppliesPriceB2C.toFixed(2)} */}
                                                                            </div> 
                                                                            </div>
                                                                  <div class=" flex w-wk p-1 flex-col  text-xs text-[#1124AA] justify-evenly cursor-pointer "> 
                                                             
                                                                  {/* <div class=" flex justify-center"> {item.newSuppliesNo}  </div> */}
                                                                  <div > 
                                                                  <Tooltip title={item.suppliesName} placement="top" arrow>
                                                                                              
                                                                                              <div class="cursor-pointer"
                                                                                                onClick={() => {
                                                                                                  // props.handleSuppliesDetails(true);
                                                                                                  handleRowData(item);
                                                                                                }} 
                                                                                              >{item.suppliesName || ""}</div>
                                                                                            </Tooltip>
                                                                     </div>
                                                                     
                                                                  </div>
                                                                  <div className="flex justify-start w-wk ml-1"> 
                                                                        <div class=" mt-1 text-xs text-[#1124AA] truncate max-w-[150px] "title={item.categoryName}>
                                                                              {item.categoryName}
                                                                            </div>
                                                                            
                                                                            <div class=" mt-1 text-xs text-[#1124AA]">
                                                                              {item.subCategoryName}
                                                                            </div> 
                                                                  </div>
                                                                 
                                                      
                                                                                                                         
                                                                            <div class="mt-1 flex justify-evenly max-sm:flex items-center ">
                                                                            <div class=" flex  max-sm:w-48  ">
                                                                            <div className="add-minus-quantity">
                                                                          <span >
                                                                                <MinusOutlined onClick={() => handleDecrement(item.suppliesId)}/>
                                                                          </span>
                                                                        
                                                                          <input 
                                                                          className=" flex justify-end"
                                                                          type="number"  
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
                                     
                    );
                  })}
                  </div>
                  </InfiniteScroll>
                  {/* </Carousel> */}
                  
                  {/* {!hasMore && <p className="text-center text-red-500">End of the list.</p>} */}
            {/* </CardWrapper>  */}
          
  
   
   </>
  );
}
const mapStateToProps = ({ inventory,auth }) => ({
  featuredMaterials: inventory.featuredMaterials,
  fetchingFeaturedMaterials:inventory.fetchingFeaturedMaterials,
  userId: auth.userDetails.userId,
  organizationId: auth.userDetails.organizationId,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getFeaturedMaterials,
      LinkInventoryItem,
      // handleSuppliesDetails
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


