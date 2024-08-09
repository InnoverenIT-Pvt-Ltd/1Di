
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
 import { getWitoutPrice } from "../Customer/CustomerAction";
 import { getProductsByProductId } from "../Inventory/InventoryAction";
import styled from "styled-components";
import { Select } from "../../Components/UI/Elements";
import { base_url } from "../../Config/Auth";
import MainTable from "./MainTable";
import { Footer } from "./Footer";
import { CurrencySymbol } from "../../Components/Common";


const { Option } = Select;

function MainCatDetails(props) {
  useEffect(() => {
    props.getProductsByProductId(props.rowDatas.suppliesId);
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
console.log(props.productsByproductId)



    return (
    <>
     <div className="bg-[#F7F8FC]">
 <div className="flex justify-between items-center w-full">
      <div >
        <div>{props.productsByproductId.suppliesName}</div>
        <div>{props.productsByproductId.newSuppliesNo}</div>
    
        <div className='flex items-center justify-center w-[w-wk]'>
        <div className="flex items-center justify-center">
        <div class="text-sm text-black w-16">
         RTL- <CurrencySymbol  currencyType={props.productsByproductId.suppliesPrices?.[0].currencyName}/> {props.productsByproductId ?.suppliesPrices?.[0]?.suppliesPriceB2C}
        </div>
      </div>
      {/* <div className="flex items-center justify-center ml-1">
        <div class="text-sm text-black">
        WSL  {props.productsByproductId ?.suppliesPrices?.[0].suppliesPrice}
       
        </div>
      </div> */}
        </div>
      
      </div>
      <div class=" flex justify-end">
      <img  src={`${base_url}/image/${props.productsByproductId.imageId}`}  className="w-[20rem]" />
     
      </div>
   
    </div>
    <div className="flex w-wk justify-between mt-2 ">
    <div className="flex flex-col border w-[47.5%]">
    <div className=" font-medium">Description </div>
    <div dangerouslySetInnerHTML={{ __html:props.productsByproductId.description? `<p>${props.productsByproductId.description}</p>`: "<p></p>" }} />
    </div>
    <div className="flex flex-col border w-[47.5%]">
    <div className=" font-medium">Description French </div>
    <div dangerouslySetInnerHTML={{ __html: props.productsByproductId.qrCodeNo ?`<p>${props.productsByproductId.qrCodeNo}</p>`: "<p></p>" }} />
    </div>
    </div>
    <div className="cardDs-bottom mt-3">
    <MainTable productsByproductId={props.productsByproductId}/>
   
      </div>
     
   </div>
 <Footer/>
       </>
      
      );


}
const mapStateToProps = ({ customer,auth ,inventory}) => ({
    witoutPrice: customer.witoutPrice,
  fetchingWitoutPrice:customer.fetchingWitoutPrice,
  productsByproductId: inventory.productsByproductId,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getWitoutPrice,
      getProductsByProductId
   
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MainCatDetails);
const Desc= styled.div`
font-size: 1.25rem;
`;

const DescName= styled.div`
  text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    // color:white;
`;


