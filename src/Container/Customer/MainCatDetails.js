
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
 import { getWitoutPrice } from "../Customer/CustomerAction";
import styled from "styled-components";
import { Select } from "../../Components/UI/Elements";
import { base_url } from "../../Config/Auth";
import MainTable from "./MainTable";


const { Option } = Select;

function MainCatDetails(props) {
  useEffect(() => {
    props.getWitoutPrice(props.rowDatas.suppliesId);
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
console.log(props.witoutPrice)


return (
    <>
{props.witoutPrice.map((item) => {
   
    return (
    <>
        <div className="bg-[#F7F8FC]">
     <div className="flex justify-between items-center w-[44rem]">
          <div >
            <div>{item .suppliesName}</div>
            <div>{item.newSuppliesNo}</div>
            
            <div className='flex items-center justify-center w-[w-wk]'>
            <div className="flex items-center justify-center">
           
    
            </div>
           
            </div>
           
          </div>
          <div >
          <img  src={`${base_url}/image/${item.imageId}`}  className="w-[20rem]" />
         
          </div>
          
        </div>
        <div dangerouslySetInnerHTML={{ __html: `<p>${item.description}</p>` }} />
        
       
          <hr class=" mt-4 w-auto ml-0 h-1 mx-auto  bg-black border-0 rounded " />
          <div class="text-sm flex justify-center  text-gray-700 bottom-0 absolute w-wk items-center" >
             © {new Date().getFullYear()} {` `}  1Di inc
          </div>
       </div>
       </>
      
      );
 })}
  <div className="cardDs-bottom">
          <MainTable witoutPrice={props.witoutPrice}/>
        
          </div>
 </>
);
}
const mapStateToProps = ({ customer,auth }) => ({
    witoutPrice: customer.witoutPrice,
  fetchingWitoutPrice:customer.fetchingWitoutPrice,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getWitoutPrice,
   
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


