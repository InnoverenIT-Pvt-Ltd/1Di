import React, { useEffect,useState,useRef,useCallback } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { Select } from "../../../Components/UI/Elements";
import Tooltip from '@mui/material/Tooltip';
import { Button } from "antd";
import { BundleLoader } from "../../../Components/Placeholder";
import "../Inventory.scss";
import {getSuppliesList,LinkInventoryItem} from "../InventoryAction";
import { InfoCircleTwoTone,  MinusOutlined, PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import Carousel from "react-elastic-carousel";
import { base_url } from "../../../Config/Auth";

const { Option } = Select;

function MaterialsItemCard(props) {
    const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
    
  const carouselRef = useRef(null);
  const observer = useRef();

  useEffect(() => {
     props.getSuppliesList(page);    
  }, [page]);

  // useEffect(() => {
  //   const fetchList = async (pageNumber) => {
  //     setLoading(true);
  //     try {
  //       await props.getSuppliesList(pageNumber);
  //       setLoading(false);
  //       if (pageNumber + 1 >= props.purchaseList[0]?.pageCount) {
  //         setHasMore(false);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching list:", error);
  //       setLoading(false);
  //     }
  //   };
  //   fetchList(page);
  // }, [page]);

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

  if (props.fetchingPurchaseList) {
    return <BundleLoader />;
  }

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

    <div class="h-[50vh] overflow-auto">

    <CardWrapper>
    <Carousel
    pagination={false}
                     breakPoints={breakPoints}
                    style={{ minHeight: "6em", justifyContent:"center" }}
                      class=" w-2/12  mt-8 ml-10"
                      onNextEnd={next}
                      onPrevEnd={previous}
                    >
                  {props.purchaseList.map((item,index) => {
                     const currentdate = dayjs().format("YYYY/MM/DD");
                     const date = dayjs(item.creationDate).format("YYYY/MM/DD");
                     const isLastElement = index === props.purchaseList.length - 1;
                     return (
                      <CardElement >
                        <div 
                        // ref={isLastElement ? lastProductElementRef : null} 
                        key={item.suppliesId} className="card-element">
                      <div class=" h-[18rem] flex  items-center scale-90 hover:scale-95 ease-in  duration-500 hover:shadow-lg  w-[13rem] flex-shrink-0 overflow-hidden rounded-md border border-gray-200 object-cover object-center max-sm:w-48 flex-grow-3 md:flex-grow-0">
                     
                      <div class=" flex flex-col max-sm:mr-0 md:flex   h-hwk">
                                              {item.imageId ? (
                                                    <div class="object-cover object-center  flex items-center">
                                                     <img
                                                              src={`${base_url}/image/${item.imageId}`} 
                                                              style={{ height: "12.5rem", width: "13rem" }}
                                                          />
                                                         </div>  
                                                        ) : (
                           
                                                        <div className=" text-base h-[12.5rem]  w-[13rem] flex justify-center items-center">Image Not Available</div>
                                                      
                                                    )}
                                                            <div class=" flex w-wk flex-row mt-1 text-[#1124AA] justify-evenly "> 
                                                             
                                                                  <div> {item.newSuppliesNo}  </div>
                                                                  <div > 
                                                                  <Tooltip title={item.suppliesName} placement="top" arrow>
                                                                                              
                                                                                              <div>{item.suppliesName || ""}</div>
                                                                                            </Tooltip>
                                                                     </div>
                                                                     
                                                                  </div>
                                                                  <div className=" flex flex-row justify-evenly"> 
                                                                        <div class=" mt-1 text-xs text-[#1124AA] ">
                                                                              {item.categoryName}
                                                                            </div>
                                                                            <div class=" mt-1 text-xs text-[#1124AA]">
                                                                              {item.subCategoryName}
                                                                            </div> 
                                                                  </div>
                                                              
                                                      
                                                                                                                         
                                                                            <div class="w-40 mt-1 flex  justify-between max-sm:flex items-center">
                                                                            <div class=" flex justify-evenly place-items-baseline flex-col max-sm:w-48  flex-auto ">
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
                                                                                </div>
                                                                          </div>
                  
                                                                          </div>
                                                                          
                                                                          {/* <div class="flex justify-between m-2 w-wk max-sm:w-40 items-baseline md: " >
                                                                              <Desc>{item.description === "null" ? "No Description" : `${item.description}`}</Desc>
                                                                              {item.description === "<div></div>\n" ? null : (
                                                                                <Tooltip
                                                                                  style={{ backgroundColor: "red" }}
                                                                                  title={
                                                                                    <Desc2>{item.description === "null" ? "No Description" : `${item.description}`}</Desc2>
                                                                                  }
                                                                                  placement="top"
                                                                                  arrow
                                                                                >
                                                                                  <span
                                                                                    style={{
                                                                                      cursor: "pointer",
                                                                                    }}
                                                                                  >
                                                                                    
                                                                                    <InfoCircleTwoTone class=" flex items-center"/>
                                                                                  </span>
                                                                                </Tooltip>
                                                                              )}
                                                                            </div> */}
                                                                            
                                                                             
                  
                                         </div>
                                         </div>
                                       </CardElement>
                    );
                  })}
                  </Carousel>
                  {/* {!hasMore && <p className="text-center text-red-500">End of the list.</p>} */}
            </CardWrapper>    
  
   </div>

   </>
  );
}
const mapStateToProps = ({ inventory,auth }) => ({
  purchaseList: inventory.purchaseList,
  fetchingPurchaseList:inventory.fetchingPurchaseList,
  userId: auth.userDetails.userId,
  organizationId: auth.userDetails.organizationId,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getSuppliesList,
      LinkInventoryItem

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

  /* border:2px solid red */
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


