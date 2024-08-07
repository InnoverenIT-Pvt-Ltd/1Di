import React, {Suspense, lazy,useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BundleLoader } from "../../Components/Placeholder";
import InventoryHeader from "./InventoryHeader";
import {getInventoryCartItems} from "./InventoryAction";
import LoginSearchedData from "./LoginSearchedData";
const InventoryItemsCard=lazy(()=>import("./Child/InventoryItemsCard"));
const AllInventorySupplierCard=lazy(()=>import("./Child/AllInventorySupplierCard"));
const MaterialsItemCard =lazy(()=>import("./Child/MaterialsItemCard"));
const CategoriesListCard = lazy(()=>import("./Child/CategoriesListCard"));

function Inventory (props) {

  useEffect(()=>{
    props.getInventoryCartItems(props.userId);
      },[]);

  if (props.fetchingInventoryCartItems)
    {
      return <BundleLoader/>
    }

  return (
    <React.Fragment>
        {props.investorSerachedData.length > 0 ? (
    <LoginSearchedData
    investorSerachedData={props.investorSerachedData}
    />
  ) : (  
    <div className="overflow-x-auto h-[75vh] md:h-[89vh] scroller overflow-y-hidden">
    <div className="relative bg-[#1124AA] text-white w-wk">
     <InventoryHeader/>
     </div>
        <Suspense fallback={<BundleLoader />}>
        <CategoriesListCard/>
        {/* <div class="mt-5">
   <div class="text-base text-black font-bold font-poppins">Products</div>
           <InventoryItemsCard invencartItem={props.invencartItem}/> 
           </div> */}
           <div class="mt-2">
           {/* <div class="text-base text-black font-bold font-poppins">Materials and Spares</div> */}
<MaterialsItemCard invencartItem={props.invencartItem}/>
</div>
{/* <div class="mt-5">
{props.userDetails.moduleMapper.tradingInd === true && (
  <>
           <p>Products from our Suppliers</p>
<AllInventorySupplierCard invencartItem={props.invencartItem}/>
</>
)}
</div> */}
        </Suspense>
       </div>
         )} 
       <hr class="  w-auto ml-0 h-1 mx-auto  bg-black border-0 rounded " />
      <div class="text-sm flex justify-center  text-gray-700 bottom-0 absolute w-wk items-center" >
         © {new Date().getFullYear()} {` `}, 1Di inc.
        
      </div>  
    </React.Fragment>
  );
}

const mapStateToProps = ({ inventory, auth,customer }) => ({
  invencartItem: inventory.invencartItem,
  userId: auth.userDetails.userId,
 fetchingInventoryCartItems:inventory.fetchingInventoryCartItems,
 userDetails:auth.userDetails,
 investorSerachedData: customer.investorSerachedData

});
const mapDispatchToProps = (dispatch) => bindActionCreators({
  getInventoryCartItems,

}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
