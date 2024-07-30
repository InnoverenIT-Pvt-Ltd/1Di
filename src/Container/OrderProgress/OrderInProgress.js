
import React, { useEffect, useState, useMemo, lazy,Suspense } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Tooltip, Icon, Button, Input, Popconfirm, Modal,Badge } from "antd";
import styled from 'styled-components';
import ProcureJumpStart from './ProcureJumpStart';
import { BundleLoader } from "../../Components/Placeholder";

const OrderInProgressCard = lazy(()=>import("./OrderInProgressCard"));
const CompleteOrderInProgressCard = lazy(()=>import("./CompleteOrderInProgressCard"));
const CancelledOrderInProgressCard = lazy(()=>import("./CancelledOrderInProgressCard"));

function OrderInProgress (props) {
    const [activeTable, setActiveTable] = useState('open');

    const handleOrderOpenDrawer = (table) => {
      setActiveTable(table);
      console.log("Active Table:", table);
    };
   
      return (
        <>
           <ProcureJumpStart activeTable={activeTable}
      handleOrderOpenDrawer={handleOrderOpenDrawer}/>
           
           <Suspense fallback={<BundleLoader />}>
      {activeTable === 'open' && <OrderInProgressCard/> }
      {activeTable === 'complete' && <CompleteOrderInProgressCard />}
      {activeTable === 'cancelled' && <CancelledOrderInProgressCard />}
</Suspense>
         
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderInProgress);

