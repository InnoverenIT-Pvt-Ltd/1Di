import React, { useEffect,useState,useRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { MultiAvatar } from "../../../Components/UI/Elements";
import { CurrencySymbol } from "../../../Components/Common";
import styled from "styled-components";
import { Select } from "../../../Components/UI/Elements";
import Tooltip from '@mui/material/Tooltip';
import { BundleLoader } from "../../../Components/Placeholder";
import {Button} from "antd";
import Image from '../../../Components/UI/Elements/Image';
import "../Inventory.scss";
import {getAllProductCatagory} from "../InventoryAction";
import { InfoCircleTwoTone,  DeleteOutlined,
  MinusOutlined,
  PlusOutlined } from "@ant-design/icons";
import moment from "moment";
import Carousel from "react-elastic-carousel";
import { base_url } from "../../../Config/Auth";

const { Option } = Select;

function CategoriesListCard (props) {

  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
   props.getAllProductCatagory();
  }, []);

  const carouselRef = useRef(null);

  const next = () => {
    carouselRef.current.next();
  };

  const previous = () => {
    carouselRef.current.prev();
  };

  if (props.fetchingAllProductsCategory) {
    return <BundleLoader />;
  }

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 5, itemToScroll: 5 },
    { width: 1100, itemsToShow: 8, itemToScroll: 8 },
  ];
  return (

  <div class="mt-3">
<div class="text-black font-semibold">Categories</div> 
<div class="h-48 border-[0.5rem] rounded overflow-auto">

<CardWrapper>
<Carousel
                     breakPoints={breakPoints}
                    style={{ minHeight: "6em", justifyContent:"center" }}
                      class=" w-2/12  mt-8 ml-10"
                    >
                  {props.allproductsCategory.map((item) => {
                    return (
                      <CardElement >

                        <div className="flex  w-44 h-28  hover:scale-100 ease-in  duration-500 hover:shadow-lg overflow-hidden rounded-md border border-gray-200 object-cover object-center  ">
                          <div class="flex  flex-col items-center md:w-60 mx-2 my-2">
                        <div class=" w-20 h-20" >
                          {item.imageId ? (
                            <div className=" sm:h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 md:h-20 max-w-screen-md ">
                            <div   className=" h-20 w-20  object-cover object-center hover:shadow-lg">
                            <img  src={`${base_url}/image/${item.imageId}`} alt=""
                                            />
                            </div>
                            </div>
                          ) : (
                           
                              <div className=" text-base">Image Not Available</div>
                           
                          )}
                        </div>

                        <CardDescription>
                        
                          <Tooltip title={item.categoryName} placement="top" arrow>
                            <div class="text-base font-bold ">{item.categoryName || ""}</div>
                          </Tooltip>

                        </CardDescription>

                        </div>
                        </div>
                      </CardElement>
                    );
                  })}
                  </Carousel>
                </CardWrapper>
  
   </div>
</div>
  );
}
const mapStateToProps = ({ inventory,auth }) => ({

  fetchingAllProductsCategory:inventory.fetchingAllProductsCategory,
  allproductsCategory: inventory.allproductsCategory,
  userId: auth.userDetails.userId,
  organizationId: auth.userDetails.organizationId,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {

      getAllProductCatagory,


    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesListCard);
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

   padding: 0 10px;
   margin-top: 1.5rem;
  display: flex;
    justify-content: center;
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


