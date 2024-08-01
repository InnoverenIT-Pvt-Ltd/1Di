import React, {Suspense, lazy,useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BundleLoader } from "../../Components/Placeholder";
import InventoryHeader from "./InventoryHeader";
import {getInventoryCartItems} from "./InventoryAction";
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
    <div className="overflow-x-auto h-[38rem] md:h-[42rem] scroller">
    <div className="relative bg-[#1124AA] text-white w-wk">
     <InventoryHeader/>
     </div>
        <Suspense fallback={<BundleLoader />}>
        <CategoriesListCard/>
        {/* <div class="mt-5">
   <div class="text-base text-black font-bold font-poppins">Products</div>
           <InventoryItemsCard invencartItem={props.invencartItem}/> 
           </div> */}
           <div class="mt-5">
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
    </React.Fragment>
  );
}

const mapStateToProps = ({ inventory, auth }) => ({
  invencartItem: inventory.invencartItem,
  userId: auth.userDetails.userId,
 fetchingInventoryCartItems:inventory.fetchingInventoryCartItems,
 userDetails:auth.userDetails

});
const mapDispatchToProps = (dispatch) => bindActionCreators({
  getInventoryCartItems,

}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
