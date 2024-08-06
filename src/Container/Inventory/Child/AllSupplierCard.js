import React, { useEffect,useState,useRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { Select } from "../../../Components/UI/Elements";
import Tooltip from '@mui/material/Tooltip';
import { BundleLoader } from "../../../Components/Placeholder";
import "../Inventory.scss";
import {getAllSupplierItems,LinkInventoryItem} from "../InventoryAction";
import { InfoCircleTwoTone } from "@ant-design/icons";
import dayjs from "dayjs";
import Carousel from "react-elastic-carousel";
import { base_url } from "../../../Config/Auth";

const { Option } = Select;

function AllSupplierCard(props) {
    const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
   props.getAllSupplierItems(props.organizationId);
  },[]);

  const carouselRef = useRef(null);

  const next = () => {
    carouselRef.current.next();
  };

  const previous = () => {
    carouselRef.current.prev();
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

  const handleAddPlusClick = (productId) => {
  
        
        let data={
           
          iteamsDTO: {
            
              // "attribute": "string",
              // "brandId": "string",
              // "category": "string",
              // "currency": "string",
              // "gb": "string",
              // "location": "string",
              // "modelId": "string",
              // "orderPhoneId": "string",
              // "price": 0,
              // "quality": "string",
              // "specs": "string",
              productId:productId,
              unit:1
            },
          
            orderPhoneId:null,
            userId:props.userId,
            orgId:props.organizationId
            
          }
  
        props.LinkInventoryItem(data);
      }
  return (
    <>

    <div class="h-80 overflow-auto">

    <CardWrapper>
    <Carousel
    pagination={false}
                     breakPoints={breakPoints}
                    style={{ minHeight: "6em", justifyContent:"center" }}
                      class=" w-2/12  mt-8 ml-margin10"
                    >
                  {props.allSupplierItems.map((item) => {
                     const currentdate = dayjs().format("YYYY/MM/DD");
                     const date = dayjs(item.creationDate).format("YYYY/MM/DD");
                    return (
                      <CardElement >
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
                                                                            {/* <div class="flex-col w-wk flex max-sm:flex items-center mb-[0.7rem]">
                                                                              Color{" "}
                                                                            {item.colourDTO &&
                                                                              item.colourDTO.length &&
                                                                              item.colourDTO[0].colour ? (
                                                                                <Select placeholder="Select"
                                                                                onChange={this.handleColor}>
                                                                                  {item.colourDTO &&
                                                                                    item.colourDTO.length &&
                                                                                    item.colourDTO.map((item) => {
                                                                                      return (
                                                                                        <Option value={item.colour}
                                                                                        >
                                                                                          {item.colour}{" "}
                                                                                        </Option>
                                                                                      );
                                                                                    })}
                                                                                </Select>
                                                                              ) : ( 
                                                                                <Select
                                                                                  defaultValue="No Option"
                                                                                  disabled
                                                                                ></Select>
                                                                               )} 
                                                                            </div>
                                                                            <div class="flex-col w-wk flex max-sm:flex items-center mb-[0.7rem]">
                                          Size
                                          <Select
                                                defaultValue="No Option"
                                                disabled
                                              ></Select>
                                            </div>            */}
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
                                                                              <Desc
                                                                                dangerouslySetInnerHTML={{
                                                                                  __html: item.description,
                                                                                }}
                                                                              ></Desc>
                                                                              {item.description === "<h3></h3>\n" ? null : (
                                                                                <Tooltip
                                                                                  style={{ backgroundColor: "red" }}
                                                                                  title={
                                                                                    <Desc2
                                                                                      dangerouslySetInnerHTML={{
                                                                                        __html: item.description,
                                                                                      }}
                                                                                    ></Desc2>
                                                                                  }
                                                                                  placement="top"
                                                                                  arrow
                                                                                >
                                                                                  <span
                                                                                    style={{
                                                                                      cursor: "pointer",
                                                                                    }}
                                                                                  >
                                                                                    {/* <InfoCircleFilled /> */}
                                                                                    <InfoCircleTwoTone class=" flex items-center"/>
                                                                                  </span>
                                                                                </Tooltip>
                                                                              )}
                                                                            </div>
                                                                            <div class="mt-px flex  justify-end w-wk m-1">
                                         <div className=" py-1 px-4 bg-slate-100 border-2 border-blue-300 hover:bg-ShopBlue cursor-pointer"
                                                                                  
                                                            
                                                                                  onClick={() =>
                                                                                    handleAddPlusClick(
                                                                                      item.productId,
                                                                                      // item.merchantDetailsId
                                                                                    )
                                                                                  }
                                                                                >
                                                                                    <label class=" text-gray-700 font-light text-base  flex  justify-center items-center hover:text-white cursor-pointer">
                                                                              Add +
                                                                                </label>
                                                                                </div>
                  </div>
                                         </div>
                                       </CardElement>
                    );
                  })}
                  </Carousel>
            </CardWrapper>    
  
   </div>
   
   </>
  );
}
const mapStateToProps = ({ inventory,auth }) => ({
    allSupplierItems: inventory.allSupplierItems,
  fetchingProducts:inventory.fetchingProducts,
  fetchingAllProductsCategory:inventory.fetchingAllProductsCategory,
  userId: auth.userDetails.userId,
  // locationId: auth.userDetails.locationId,
  organizationId: auth.userDetails.organizationId,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      LinkInventoryItem,
      getAllSupplierItems

    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AllSupplierCard);
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


