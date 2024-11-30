import React, { lazy, Suspense } from "react";
import { BundleLoader } from "../../Components/Placeholder";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyledDrawer } from "../../Components/UI/Antd";
import InvoiceOrderDrawerCard from "./InvoiceOrderDrawerCard";


function InvoiceOrderDrawer  (props) {
    const isSmallScreen = window.innerWidth <= 600;
    const drawerWidth = isSmallScreen ? "90%" : "70%";
    // console.log(props.rowDatas && props.rowDatas.productInfo.productId)
    return (
        <>
            <StyledDrawer
                title={props.rowDatas.invoiceId}
                closable
                destroyOnClose
                width={drawerWidth}
                visible={props.openInvoiceDrawer}
                onClose={() => props.setopenInvoiceDrawer(false)}
                footer={null}
            >
                <Suspense fallback={<BundleLoader />}>
                <InvoiceOrderDrawerCard
   rowDatas={props.rowDatas}
   openInvoiceDrawer={props.openInvoiceDrawer} 
   setopenInvoiceDrawer={props.setopenInvoiceDrawer}
                />
                </Suspense>
            </StyledDrawer>
        </>
    );
};

const mapStateToProps = ({ inventory, auth }) => ({


});
const mapDispatchToProps = (dispatch) => bindActionCreators({


}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(InvoiceOrderDrawer);