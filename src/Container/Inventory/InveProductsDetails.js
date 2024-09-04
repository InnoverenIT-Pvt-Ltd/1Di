
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProductsByProductId } from "./InventoryAction";
import { Link } from "react-router-dom";
import { MultiAvatar, Spacer } from "../../Components/UI/Elements";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { CurrencySymbol } from "../../Components/Common";
import styled from "styled-components";
import { Select } from "../../Components/UI/Elements";
import Tooltip from '@mui/material/Tooltip';
import { BundleLoader } from "../../Components/Placeholder";
import { Button } from "antd";
import {
  DeleteOutlined,
  MinusOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import Carousel from "react-elastic-carousel";
import "./Inventory.scss";
import Appy from "../../Assests/Images/apple.jpg";
import mang from "../../Assests/Images/mango.jpg";
import { base_url } from "../../Config/Auth";
import KoreroLogo from "../../Assests/Images/apple.jpg";
import CartTable from "./CartTable";
import { Footer } from "../Customer/Footer";

const { Option } = Select;

function InveProductsDetails(props) {
  useEffect(() => {
    if (props.productId) {
      console.log('Fetching product details for:', props.productId);
      props.getProductsByProductId(props.productId);
    }
  }, [props.productId]);

//   if (props.fetchingProductsList) {
//     return <BundleLoader />;PD10985606347262024
//   }

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 2 },
  { width: 768, itemsToShow: 2, itemToScroll: 2 },
  { width: 1100, itemsToShow: 4, itemToScroll: 4 },
];
console.log(props.productsByproductId)
  return (
    
    <div className="bg-[#F7F8FC] p-8">
 <div className="flex justify-between items-center w-full">
      <div className="w-[60%]">
      <div className="text-xl font-medium">{props.productsByproductId.suppliesName}</div>
      <div className="text-base font-medium">{props.productsByproductId.newSuppliesNo}</div>
        <div className='flex items-center justify-evenly  mt-3'>
      
      <div className="flex items-center justify-center ">
        <div class="text-sm font-bold text-black">
        WSL- <CurrencySymbol  currencyType={props.productsByproductId.suppliesPrices?.[0].currencyName}/>  {props.productsByproductId ?.suppliesPrices?.[0].suppliesPrice}
        </div>
      </div>
      <div className="flex items-center justify-center ml-1">
        <div class="text-sm font-bold text-black w-16">
        SRP- <CurrencySymbol  currencyType={props.productsByproductId.suppliesPrices?.[0].currencyName}/> {props.productsByproductId ?.suppliesPrices?.[0]?.suppliesPriceB2C}
        </div>
      </div>
        </div>
      </div>
      <div class=" flex justify-end w-[40%]">
      <img  src={`${base_url}/image/${props.productsByproductId.imageId}`}  className="w-[14rem] h-[14rem]" />
      </div> 
    </div>
    <div className="flex w-wk justify-evenly mt-3 ">
    <div className="flex flex-col border box-border h-40 w-[40%]">
    <div className=" font-bold ml-1 mt-1 font-poppins ">Description </div>
    <div className=" font-normal ml-1 font-poppins" dangerouslySetInnerHTML={{ __html: props.productsByproductId.description ?`<p>${props.productsByproductId.description}</p>`:"<p></p>" }} />
    </div>
    <div className="flex flex-col border box-border h-40 w-[40%]">
    <div className=" font-bold ml-1 mt-1 font-poppins">Description in French </div>
   <div className=" font-normal ml-1 font-poppins"
  dangerouslySetInnerHTML={{
    __html: props.productsByproductId.qrCodeNo
      ? `<p>${props.productsByproductId.qrCodeNo}</p>`
      : "<p></p>",
  }}
/>
    </div>
    </div>
    <div className="cardDs-bottom mt-5  flex ">
      <CartTable productsByproductId={props.productsByproductId}/>
      </div>
      <Footer/>
   </div>
  
  
  );
}
const mapStateToProps = ({ inventory,auth }) => ({
    productsByproductId: inventory.productsByproductId,
  fetchingProductsByProductId:inventory.fetchingProductsByProductId,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getProductsByProductId,
   
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


