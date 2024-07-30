
import React, { useEffect, useState, useMemo, Suspense,lazy } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Tooltip, Icon, Button, Input, Popconfirm, Modal,Badge } from "antd";
import styled from 'styled-components';
import InvoiceJumstartBox from './InvoiceJumstartBox';
import { BundleLoader } from '../../Components/Placeholder';


const OpenInvoiceCard = lazy(()=>import("./OpenInvoiceCard"));
const CompleteInvoiceCard = lazy(()=>import("./CompleteInvoiceCard"));
const CancelledInvoiceCard = lazy(()=>import("./CancelledInvoiceCard"));
const ApprovedInvoiceCard = lazy(()=>import("./ApprovedInvoiceCard"));

function Invoice (props) {
    const [activeTable, setActiveTable] = useState('open');

    const handleOrderOpenDrawer = (table) => {
      setActiveTable(table);
      console.log("Active Table:", table);
    };
   
      return (
        <>
        <InvoiceJumstartBox  activeTable={activeTable}
      handleOrderOpenDrawer={handleOrderOpenDrawer}/>
       
       <Suspense fallback={<BundleLoader />}>
      {activeTable === 'open' &&  <OpenInvoiceCard/>  }
      {activeTable === 'complete' && <CompleteInvoiceCard />}
      {activeTable === 'cancelled' && <CancelledInvoiceCard />}
      {activeTable === 'approved' && <ApprovedInvoiceCard />}
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

export default connect(mapStateToProps, mapDispatchToProps)(Invoice);

