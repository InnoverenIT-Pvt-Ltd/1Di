
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
      <div >
      <div className="text-xl font-medium">{props.productsByproductId.suppliesName}</div>
      <div className="text-xl font-medium">{props.productsByproductId.newSuppliesNo}</div>
        {/* <p><strong>Price:</strong>{props.productsByproductId.price}</p>
        <p><strong>Category:</strong>{props.productsByproductId.categoryName}</p>
        <p><strong>Attribute:</strong> {props.productsByproductId.attributeName}</p>
        <p><strong>Description:</strong> {props.productsByproductId.description}</p> */}
        <div className='flex items-center  w-[w-wk] mt-3'>
        <div className="flex items-center justify-center mr-2">
      <div class="text-sm font-bold text-black">
        WSL  {props.productsByproductId ?.suppliesPrices?.[0].suppliesPrice}
       
        </div>
      </div>
        <div className="flex items-center justify-center">
        <div class="text-sm font-bold text-black">
         SRP {props.productsByproductId ?.suppliesPrices?.[0]?.suppliesPriceB2C}
        </div>
      </div>
     
        {/* <div className="add-minus-quantity">
          <span
           onClick={()=>{
               props.setqn(props.item)
               props.handleDec(props.item)
           }}
          >
                 <MinusOutlined style={{color:"black"}} />
          </span>
        {props.updatingPlusCart ? "Loading" :
          <input type="text" placeholder={props.qn.quantity && props.item.cartItemId === props.qn.cartItemId
              ? props.qn.quantity
              : props.item.quantity
          }
          />
        } 
          <span
           onClick={()=>{
            props.setqn(props.item)
         props.handleInc(props.item)}}
          >
          <PlusOutlined  style={{color:"black"}}/>
          </span>

        </div> */}
        {/* <div className="flex items-center justify-center">
          <div class="text-sm text-black">
          USD  
          {props.productsByproductId.cost} 
          </div>

        </div> */}
       
        </div>
        {/* <div class="mt-2 flex  justify-end w-wk m-1">
                                         <div className=" py-1 rounded-lg px-24 bg-slate-100 border-2 border-blue-300 hover:bg-ShopBlue cursor-pointer"
                                                                                  
                                                            
                                                                                  // onClick={() =>
                                                                                  //   handleAddToCart(
                                                                                  //     item.suppliesId
                                                                    
                                                                                  //   )
                                                                                  // }
                                                                                >
                                                                                    <label class="text-black  font-light text-base  flex  justify-center items-center hover:text-white cursor-pointer">
                                                                                    Add to cart 
                                                                                </label>
                                                                                </div>
                  </div> */}
      </div>
      <div class=" flex justify-end">
      <img  src={`${base_url}/image/${props.productsByproductId.imageId}`}  className="w-[20rem]" />
      {/* <img 
        //   src={NuboxLogo}
           src={KoreroLogo}
      style={{ width: "11rem",height:"7rem" }} alt="img" /> */}
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
    <div className="flex w-wk justify-evenly mt-6">
    <div className="flex flex-col border box-border h-40 w-[27rem]">
    <div className=" font-medium ml-1">Description </div>
    <div className=" font-normal ml-1" dangerouslySetInnerHTML={{ __html: `<p>${props.productsByproductId.description}</p>` }} />
    </div>
    <div className="flex flex-col border box-border h-40 w-[27rem]">
    <div className=" font-medium ml-1">Description in French</div>
    <div className=" font-normal ml-1" dangerouslySetInnerHTML={{ __html: `<p>${props.productsByproductId.qrCodeNo}</p>` }} />
    </div>
    </div>
    <div className="cardDs-bottom  mt-5  flex ">
      <CartTable productsByproductId={props.productsByproductId}/>
    {/* <div class="border-[0.5rem] rounded overflow-auto">
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
                   </div> */}
        {/* <Carousel showThumbs={false}>
          {carouselImages.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`carousel-${index}`} />
            </div>
          ))}
        </Carousel> */}
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


