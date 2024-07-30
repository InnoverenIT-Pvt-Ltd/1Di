import React, { useState, lazy } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
const OrderSupplierHeader = lazy(()=>import("./OrderSupplierHeader"));
const OrderSupplierItemCard = lazy(()=>import("./OrderSupplierItemCard"));
const OrderSupplierCard = lazy(()=>import("./OrderSupplierCard"));
const OrderSupplierJumpStart=lazy(()=>import("./OrderSupplierJumpStart"));

function OrderSupplier (props) {

    const [clickedTab,setClickedTab]= useState("order");

      return (
        <>
<OrderSupplierHeader
clickedTab={clickedTab}
setClickedTab={setClickedTab}
/>

<OrderSupplierJumpStart/>

{clickedTab === "order" ? (
    <OrderSupplierCard/>
  
) : clickedTab === "trade" ?
 
<OrderSupplierItemCard/> 
: null
}
 
        </>
    );
};

const mapStateToProps = ({ myorder, auth, setting, requirement }) => ({
    // addreviewOffer: myorder.addreviewOffer,
    // addOrderModal: myorder.addOrderModal,
    // orderedPhoneModal: myorder.orderedPhoneModal,
    // orderListData: myorder.orderListData,
    // userId: auth.userDetails.userId,
    // addPickUp: myorder.addPickUp
});
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            // handleReviewOfferModal,
            // confirmButtonClick,
            // handleAddOrderModal,
            // handleOrderedPhoneModal,
            // getOrderData,
            // handlePickUpModal
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(OrderSupplier);

