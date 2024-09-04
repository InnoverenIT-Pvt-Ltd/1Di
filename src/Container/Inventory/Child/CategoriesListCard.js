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
import {getAllSuppliesCatagory} from "../InventoryAction";
import { InfoCircleTwoTone,  DeleteOutlined,
  MinusOutlined,
  PlusOutlined } from "@ant-design/icons";
import moment from "moment";
import Carousel from "react-elastic-carousel";
import { base_url } from "../../../Config/Auth";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Visibility } from "@mui/icons-material";

const { Option } = Select;

function CategoriesListCard (props) {

  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
   props.getAllSuppliesCatagory();
  }, []);



  const carouselRef = useRef(null);

  const next = () => {
    carouselRef.current.next();
  };

  const previous = () => {
    carouselRef.current.prev();
  };

  if (props.fetchingAllSuppliesCategory) {
    return <BundleLoader />;
  }

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 5, itemToScroll: 5 },
    { width: 1100, itemsToShow: 8, itemToScroll: 8 },
  ];
  return (

  <div class="w-wk   self-center">
<div class="text-black font-bold">Catalog</div> 

<div class="  items-center   rounded ">

<CardWrapper>
<Carousel
                     pagination={false}
                     breakPoints={breakPoints}
                    style={{ minHeight: "4rem", justifyContent:"center"}}
                      class=" w-2/12  mt-3 ml-10"
                    >
                  {props.allSuppliesCategory.map((item) => {
                    return (
                      <CardElement >

                        <div onClick={() => props.handleActiveClick(item.categoryId)} 
        style={{
          color:props.activeClick === item.categoryId && "Blue",
          cursor:"pointer"
        }} className="flex  w-44 h-24  hover:scale-100 ease-in  duration-500 hover:shadow-lg overflow-hidden rounded-md border border-gray-200 ">
                          <div class="flex  flex-col items-center md:w-60 mr-3 ml-3">
                        <div class=" w-16 h-16 text-center" >
                          {item.imageId ? (
                            <div className=" flex items-center sm:h-16 w-16 flex-shrink-0 overflow-hidden rounded-md  md:h-20 max-w-screen-md ">
                            <div   className=" flex items-center h-16 w-16   hover:shadow-lg">
                            <img  src={`${base_url}/image/${item.imageId}`} alt=""
                                            />
                            </div>
                            </div>
                          ) : (
                           
                              <div className=" flex text-[0.65rem] h-16 w-16 items-center">Image Not Available</div>
                           
                          )}
                        </div>

                        <div >
                        
                          <Tooltip title={item.categoryName} placement="top" arrow>
                            <div class="text-[0.65rem] font-bold ">{item.categoryName || ""}</div>
                          </Tooltip>

                        </div>

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

  fetchingAllSuppliesCategory:inventory.fetchingAllSuppliesCategory,
  allSuppliesCategory: inventory.allSuppliesCategory,
  userId: auth.userDetails.userId,
  organizationId: auth.userDetails.organizationId,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {

      getAllSuppliesCatagory,


    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesListCard);

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
  //  margin-top: 1.5rem;
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

