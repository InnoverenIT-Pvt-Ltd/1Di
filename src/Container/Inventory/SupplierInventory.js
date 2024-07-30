import React, {Suspense, lazy, useState,useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BundleLoader } from "../../Components/Placeholder";
import InventoryHeader from "./InventoryHeader";
import {handleAddSuplrInventory} from "./InventoryAction";
import AddSuplrInventoryDrawer from "./AddSuplrInventoryDrawer";

const SupplierInventoriesCard=lazy(()=>import("./Child/SupplierInventoriesCard"));

function SupplierInventory (props) {

  useEffect(()=>{
    // props.getInventoryCartItems(props.userId);
      },[]);



  return (
    <React.Fragment>
    
     <InventoryHeader addSuplrInventoryDrwr={props.addSuplrInventoryDrwr} handleAddSuplrInventory={props.handleAddSuplrInventory}/>
        <Suspense fallback={<BundleLoader />}>

<div class="mt-3">
           <p>Products from our Suppliers</p>
<SupplierInventoriesCard/>
</div>

<AddSuplrInventoryDrawer 
addSuplrInventoryDrwr={props.addSuplrInventoryDrwr}
handleAddSuplrInventory={props.handleAddSuplrInventory}
/>
        </Suspense>
       
    </React.Fragment>
  );
}

const mapStateToProps = ({ inventory, auth }) => ({
//   invencartItem: inventory.invencartItem,
  userId: auth.userDetails.userId,
 fetchingInventoryCartItems:inventory.fetchingInventoryCartItems,
 addSuplrInventoryDrwr:inventory.addSuplrInventoryDrwr

});
const mapDispatchToProps = (dispatch) => bindActionCreators({
  handleAddSuplrInventory

}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(SupplierInventory);
