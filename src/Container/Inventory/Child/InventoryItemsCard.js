import React, { useEffect,useState,useRef,useCallback } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { Select } from "../../../Components/UI/Elements";
import Tooltip from '@mui/material/Tooltip';
import { BundleLoader } from "../../../Components/Placeholder";
import "../Inventory.scss";
import {getProducts,getAllProductCatagory,LinkInventoryItem,updateCartPlus} from "../InventoryAction";
import { InfoCircleTwoTone, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import Carousel from "react-elastic-carousel";
import { base_url } from "../../../Config/Auth";

const { Option } = Select;

function InventoryItemsCard(props) {
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    
    const carouselRef = useRef(null);
    const observer = useRef();

  useEffect(() => {
   props.getAllProductCatagory();
  }, []);
useEffect(() => {
    const fetchList = async (pageNumber) => {
      setLoading(true);
      try {
        await props.getProducts(pageNumber, "CU008");
        setLoading(false);
        if (pageNumber + 1 >= props.products[0]?.pageCount) {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error fetching list:", error);
        setLoading(false);
      }
    };
    fetchList(page);
  }, [page]);

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

  const handleQuantityChange = (event, productId) => {
    const newUnit = parseInt(event.target.value, 10);
    if (!isNaN(newUnit) && newUnit >= 1) {
      setUnits((prevUnits) => ({
        ...prevUnits,
        [productId]: newUnit,
      }));
    }
  };

  const handleIncrement = (productId) => {
    console.log('Increment clicked for productId:', productId);
    setUnits(prevUnits => ({
        ...prevUnits,
        [productId]: (prevUnits[productId] || 1) + 1,
    }));
};

const handleDecrement = (productId) => {
  console.log('Decrement clicked for productId:', productId);
    setUnits(prevUnits => {
        const currentUnits = prevUnits[productId] || 1;
        return {
            ...prevUnits,
            [productId]: currentUnits > 1 ? currentUnits - 1 : 1,
        };
    });
};

  


  if (props.fetchingProducts) {
    return <BundleLoader />;
  }

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 4, itemToScroll: 4 },
    { width: 1100, itemsToShow: 5, itemToScroll: 5 },
  ];

  const handleAddToCart = (productId) => { 
        let data={
           
          iteamsDTO: {
              currency:"CU008",
              productType:"product",
              productId:productId,
              unit: units[productId] || 1,
            },
          
            orderPhoneId:props.invencartItem.orderPhoneId ? props.invencartItem.orderPhoneId :null ,
            userId:props.userId,
            orgId:props.organizationId
            
          }
  
        props.LinkInventoryItem(data);
      }
   
      

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
    
console.log("hiiO",props.invencartItem.orderPhoneId, "QNN-",units)
  return (
    <>

    <div class="h-[24rem] overflow-auto">

    <CardWrapper>
    <Carousel
    // ref={carouselRef}
    pagination={false}
    breakPoints={breakPoints}
    style={{ minHeight: "6em", justifyContent: "center" }}
    class="w-2/12 mt-8 ml-margin10"
    onNextEnd={next}
    onPrevEnd={previous}
                   >
                  {props.products.map((item,index) => {
                     const currentdate = dayjs().format("YYYY/MM/DD");
                     const date = dayjs(item.creationDate).format("YYYY/MM/DD");
                     const isLastElement = index === props.products.length - 1;
                     return (
                      <CardElement >
                        <div ref={isLastElement ? lastProductElementRef : null} key={item.productId} className="card-element">
    <div class=" h-[18rem] flex-col flex bg-stone-100 items-center scale-90 hover:scale-95 ease-in  duration-500 hover:shadow-lg  w-[18rem] flex-shrink-0 overflow-hidden rounded-md border border-gray-200 object-cover object-center max-sm:w-48 flex-grow-3 md:flex-grow-0">
    <div class="mt-1"> 
    <Tooltip title={item.productFullName} placement="top" arrow>
                                 
                                 <Header>{item.productFullName || ""}</Header>
                               </Tooltip>
    </div>
    <div class="max-sm:mr-0 md:flex  my-2 h-hwk">
                                  <div class="object-cover object-center  flex items-center">
                                    <div>
                                <img
                                            src={`${base_url}/image/${item.imageId}`} alt=""
                                            style={{ height: "7rem", width: "7rem" }}
                                        />
                                         <h3>{item.newProductNo} </h3>  
                                         </div>
                                                          </div>  
                                                                                                       
                                                          <div class="w-40  flex justify-between max-sm:flex items-center  flex-col">
                                                          <div class=" flex justify-evenly place-items-baseline flex-col max-sm:w-48  flex-auto ">
                                                          <div className="add-minus-quantity">
          <span

          >
                 <MinusOutlined onClick={() => handleDecrement(item.productId)}/>
          </span>
        
          <input type="number"  
           value={units[item.productId] || 1}
           onChange={(event) => handleQuantityChange(event, item.productId)}
          min="1" 
          step="1" 
          />
         
          <span

          >
          <PlusOutlined onClick={() => handleIncrement(item.productId)} />
          </span>

        </div>
           
                          
                                                     
                                                                </div>
                                                          <h3 class=" mt-2 h-4 font-bold text-xs ">
                                                            {item.categoryName}
                                                          </h3>
                                                          <h3 class=" mt-2 h-4 font-bold text-xs ">
                                                            {item.subCategoryName}
                                                          </h3> 
                                                        </div>

                                                        </div>
                                                        
                                                        <div class="flex justify-between m-2 w-wk max-sm:w-40 items-baseline md: " >
                                                            <Desc> {item.description === "null" ? "No Description" : `${item.description}`}</Desc>
                                                            {item.description === "<h3></h3>\n" ? null : (
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
                                                          </div>
                                                          <div class="mt-px flex  justify-end w-wk m-1">
                       <div className=" py-1 px-4 bg-slate-100 border-2 border-blue-300 hover:bg-ShopBlue cursor-pointer"
                                                                
                                          
                                                                onClick={() =>
                                                                  handleAddToCart(
                                                                    item.productId
                                                                  )
                                                                }
                                                              >
                                                                  <label class=" text-gray-700 font-light text-base  flex  justify-center items-center hover:text-white cursor-pointer">
                                                            Add +
                                                              </label>
                                                              </div>
</div>
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
  products: inventory.products,
  fetchingProducts:inventory.fetchingProducts,
  fetchingAllProductsCategory:inventory.fetchingAllProductsCategory,
  allproductsCategory: inventory.allproductsCategory,
  userId: auth.userDetails.userId,
  // locationId: auth.userDetails.locationId,
  organizationId: auth.userDetails.organizationId,
  linkInvntoryItems:inventory.linkInvntoryItems
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getProducts,
      getAllProductCatagory,
      LinkInventoryItem,
      updateCartPlus

    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(InventoryItemsCard);
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