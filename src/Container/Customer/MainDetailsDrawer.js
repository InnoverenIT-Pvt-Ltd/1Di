import React, { lazy, Suspense } from "react";
import { StyledDrawer } from "../../Components/UI/Antd";
import { BundleLoader } from "../../Components/Placeholder";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MainCatDetails from "./MainCatDetails";

const MainDetailsDrawer = (props) => {
    const isSmallScreen = window.innerWidth <= 600;
    const drawerWidth = isSmallScreen ? "90%" : "70%";
   // console.log(props.rowDatas && props.rowDatas.productInfo.productId)
    // console.log(props.newData && props.newData.phoneTaskId)
    return (
        <>
            <StyledDrawer
                title={props.rowDatas.categoryName}
                width={drawerWidth}
                visible={props.catagoryDetailsDrawr}
                closable
                destroyOnClose
                maskStyle={{ backgroundColor: "rgba(1, 30, 71,0.7)" }}
                onClose={() => props.handleCatagoryDetails(false)}
                placement="right"
            >
                <Suspense fallback={<BundleLoader />}>
                <MainCatDetails
                     rowDatas={props.rowDatas}
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
export default connect(mapStateToProps, mapDispatchToProps)(MainDetailsDrawer);