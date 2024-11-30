import React, { lazy, Suspense } from "react";
import { BundleLoader } from "../../../Components/Placeholder";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyledDrawer } from "../../../Components/UI/Antd";
import InveSuppliesDetails from "./InveSuppliesDetails";


function InveProductsDetailsDrawer  (props) {
    const isSmallScreen = window.innerWidth <= 600;
    const drawerWidth = isSmallScreen ? "90%" : "70%";
    // console.log(props.rowDatas && props.rowDatas.productInfo.productId)
    return (
        <>
            <StyledDrawer
                title={props.rowDatas.suppliesName}
                closable
                destroyOnClose
                width={drawerWidth}
                visible={props.suppliesDetailsDrawr}
                onClose={() => props.handleSuppliesDetails(false)}
                footer={null}
            >
                <Suspense fallback={<BundleLoader />}>
                <InveSuppliesDetails
                productId={props.rowDatas.suppliesId}
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