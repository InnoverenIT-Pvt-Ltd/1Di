import React, { lazy, Suspense } from "react";
import { BundleLoader } from "../../Components/Placeholder";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyledDrawer } from "../../Components/UI/Antd";
import OrderIDrawerCard from "./OrderIDrawerCard";


function OrderIDrawer  (props) {
    const isSmallScreen = window.innerWidth <= 600;
    const drawerWidth = isSmallScreen ? "90%" : "70%";
    // console.log(props.rowDatas && props.rowDatas.productInfo.productId)
    return (
        <>
            <StyledDrawer
                title={props.rowDatas.newOrderNo}
                closable
                destroyOnClose
                width={drawerWidth}
                visible={props.OrderIdDrawer}
                onClose={() => props.setOrderIdDrawer(false)}
                footer={null}
            >
                <Suspense fallback={<BundleLoader />}>
                <OrderIDrawerCard
   rowDatas={props.rowDatas}
   OrderIdDrawer={props.OrderIdDrawer} 
   setOrderIdDrawer={props.setOrderIdDrawer}
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
export default connect(mapStateToProps, mapDispatchToProps)(OrderIDrawer);