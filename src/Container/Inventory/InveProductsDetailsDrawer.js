import React, { lazy, Suspense } from "react";
import { StyledDrawer } from "../../Components/UI/Antd";
import { BundleLoader } from "../../Components/Placeholder";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const InveProductsDetails = lazy(() => import("./InveProductsDetails"));
// const OrderSupplierStatuShower = lazy(() => import("../OrderSupplier/OrderSupplierStatuShower"));

function InveProductsDetailsDrawer  (props) {
    const isSmallScreen = window.innerWidth <= 600;
    const drawerWidth = isSmallScreen ? "90%" : "70%";

    return (
        <>
            <StyledDrawer
                title={props.productsByproductId.suppliesName}
                closable
                destroyOnClose
                width={drawerWidth}
                visible={props.productDetailsDrawr}
                onClose={() => props.handleProductDetails(false)}
                footer={null}
            >
                <Suspense fallback={<BundleLoader />}>
                <InveProductsDetails
    //                 setqn={props.setqn}
    //                 qn={props.qn}
    //                 handleDec={props.handleDec}
    //   handleInc={props.handleInc}
    //             item={props.item}
                productId={props.rowDatas && props.rowDatas.productInfo.productId}
                />
                </Suspense>
            </StyledDrawer>
        </>
    );
};

const mapStateToProps = ({ inventory, auth }) => ({
    employee_type:auth.userDetails.employee_type,
    productsByproductId:inventory.productsByproductId

});
const mapDispatchToProps = (dispatch) => bindActionCreators({


}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(InveProductsDetailsDrawer);