import React, { lazy, Suspense } from "react";
import { StyledDrawer } from "../../Components/UI/Antd";
import { BundleLoader } from "../../Components/Placeholder";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const InveProductsDetails = lazy(() => import("./InveProductsDetails"));
// const OrderSupplierStatuShower = lazy(() => import("../OrderSupplier/OrderSupplierStatuShower"));

const InveProductsDetailsDrawer = (props) => {
    const isSmallScreen = window.innerWidth <= 600;
    const drawerWidth = isSmallScreen ? "90%" : "70%";
    return (
        <>
            <StyledDrawer
                title={props.item.productInfo.productFullName}
                width={drawerWidth}
                visible={props.productDetailsDrawr}
                closable
                destroyOnClose
                maskStyle={{ backgroundColor: "rgba(1, 30, 71,0.7)" }}
                onClose={() => props.handleProductDetails(false)}
                placement="right"
            >
                <Suspense fallback={<BundleLoader />}>
                <InveProductsDetails
                item={props.item}
                />
                </Suspense>
            </StyledDrawer>
        </>
    );
};

const mapStateToProps = ({ myorder, auth }) => ({
    employee_type:auth.userDetails.employee_type

});
const mapDispatchToProps = (dispatch) => bindActionCreators({


}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(InveProductsDetailsDrawer);