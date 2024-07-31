
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

const { Option } = Select;

function InveProductsDetails(props) {
  useEffect(() => {
    props.getProductsById(props.item.productInfo.productId);
  }, []);

//   if (props.fetchingProductsList) {
//     return <BundleLoader />;PD10985606347262024
//   }
const puzzleDescription = `
  Elephants are the largest existing land animals! They are strong, unique in their built, and caring. Watch these
  majestic animals travel with their herd in this 3D, immersive puzzle.
  Each piece is made with great detail and quality craftsmanship doing justice to the vibrant colours that pop out
  (pun intended!) as you assemble this unique illustration. High-quality pieces that don’t break and are easy to fit.
  Develop a new hobby, or engage in some brain training as puzzles are known to stimulate the brain, and improve
  our spatial reasoning, memory, problem-solving abilities and even increase our IQ! Puzzles are also a great way
  to boost the mood, relieve stress and increase self-confidence!
  You can do it yourself, with your family and friends or even use it for gifting!
`;
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 2 },
  { width: 768, itemsToShow: 2, itemToScroll: 2 },
  { width: 1100, itemsToShow: 4, itemToScroll: 4 },
];
  return (
    
    <div className="bg-[#F7F8FC]">
 <div className="flex justify-between items-center w-[44rem]">
      <div >
        <div>{props.item.productInfo.productFullName}</div>
        <div>{props.item.productInfo.newProductId}</div>
        {/* <p><strong>Price:</strong>{props.productsById.price}</p>
        <p><strong>Category:</strong>{props.productsById.categoryName}</p>
        <p><strong>Attribute:</strong> {props.productsById.attributeName}</p>
        <p><strong>Description:</strong> {props.productsById.description}</p> */}
        <div className='flex items-center justify-center w-[w-wk]'>
        <div className="flex items-center justify-center">
        <div class="text-sm text-black w-16">
         USD {props.item.itemSummary.discount}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div class="text-sm text-black">
        USD 
        {props.item.itemSummary.unitPrice}
        </div>
      </div>
        <div className="add-minus-quantity">
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

        </div>
        <div className="flex items-center justify-center">
          <div class="text-sm text-black">
          USD  
          {props.item.itemSummary.totalPrice} 
          </div>

        </div>
       
        </div>
        <div class="mt-2 flex  justify-end w-wk m-1">
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
                  </div>
      </div>
      <div >
      <img  src={`${base_url}/image/${props.item.productInfo.imageId}`}  className="w-[20rem]" />
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
    <div dangerouslySetInnerHTML={{ __html: `<p>${puzzleDescription}</p>` }} />
    
    <div className="cardDs-bottom">
      <CartTable/>
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


