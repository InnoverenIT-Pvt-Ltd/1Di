
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProductsById } from "./InventoryAction";
import { Link } from "react-router-dom";
import { MultiAvatar, Spacer } from "../../Components/UI/Elements";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { CurrencySymbol } from "../../Components/Common";
import styled from "styled-components";
import { Select } from "../../Components/UI/Elements";
import Tooltip from '@mui/material/Tooltip';
import { BundleLoader } from "../../Components/Placeholder";
import { Button } from "antd";
import Carousel from "react-elastic-carousel";
import "./Inventory.scss";
import Appy from "../../Assests/Images/apple.jpg";
import mang from "../../Assests/Images/mango.jpg";
import { base_url } from "../../Config/Auth";

const { Option } = Select;

function InveProductsDetails(props) {
  useEffect(() => {
    props.getProductsById(props.item.productInfo.productId);
  }, []);

//   if (props.fetchingProductsList) {
//     return <BundleLoader />;PD10985606347262024
//   }

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 2 },
  { width: 768, itemsToShow: 2, itemToScroll: 2 },
  { width: 1100, itemsToShow: 4, itemToScroll: 4 },
];
  return (
    
    <div>
 <div className="cardDs">
      <div className="cardDs-left">
        <img src={`${base_url}/image/${props.productsById.imageId}`} className="main-image" />
      </div>
      <div className="cardDs-right">
        <h2>{props.productsById.productFullName}</h2>
        <p><strong>Price:</strong>{props.productsById.price}</p>
        <p><strong>Category:</strong>{props.productsById.categoryName}</p>
        <p><strong>Attribute:</strong> {props.productsById.attributeName}</p>
        <p><strong>Description:</strong> {props.productsById.description}</p>
      </div>
      {/* <div className="cardDs-bottom">
 

         <Carousel showThumbs={false}>
          {carouselImages.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`carousel-${index}`} />
            </div>
          ))}
        </Carousel> 
      </div> */}
    </div>
    
    <div className="cardDs-bottom">
    <div class="border-[0.5rem] rounded overflow-auto">
      <Carousel
    // ref={carouselRef}
    pagination={false}
    breakPoints={breakPoints}
    style={{ minHeight: "6em", justifyContent: "center" }}
    class="w-2/12 mt-8 ml-margin10"
                   >
                     <img src={Appy} class="h-52 w-[50%]"/> 
                     <img src={mang} class="h-52 w-[50%]"/>
                     <img src={Appy} class="h-52 w-[50%]"/>
                     <img src={mang} class="h-52 w-[50%]"/>
                   </Carousel>
                   </div>
        {/* <Carousel showThumbs={false}>
          {carouselImages.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`carousel-${index}`} />
            </div>
          ))}
        </Carousel> */}
      </div>
   
   </div>
  
  );
}
const mapStateToProps = ({ inventory,auth }) => ({
    productsById: inventory.productsById,
  fetchingProductsById:inventory.fetchingProductsById,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getProductsById,
   
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(InveProductsDetails);
const Desc= styled.div`
font-size: 1.25rem;
`;

const DescName= styled.div`
  text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    // color:white;
`;


