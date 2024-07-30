import React, { lazy, Suspense } from "react";
import { StyledDrawer } from "../../Components/UI/Antd";
import { BundleLoader } from "../../Components/Placeholder";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const ProcureItemView = lazy(() => import("./ProcureItemView"));
const OrderSupplierItemViewer = lazy(() => import("../OrderSupplier/OrderSupplierItemViewer"));

const ProcureItemViewDrawer = (props) => {
    const isSmallScreen = window.innerWidth <= 600;
    const drawerWidth = isSmallScreen ? "90%" : "70%";
    return (
        <>
            <StyledDrawer
                title={`Order No - ${props.rowDatas.newOrderNo}`}
                width={drawerWidth}
                visible={props.viewItemDrwr}
                closable
                destroyOnClose
                maskStyle={{ backgroundColor: "rgba(1, 30, 71,0.7)" }}
                onClose={() => props.handleItemViewDrawer(false)}
                placement="right"
            >
                <Suspense fallback={<BundleLoader />}>
                {props.employee_type==="Supplier" ? 
               <OrderSupplierItemViewer   rowDatas={props.rowDatas}/>
                     :
                    <ProcureItemView
                    rowDatas={props.rowDatas}
                     />}

                </Suspense>
            </StyledDrawer>
        </>
    );
};
const mapStateToProps = ({ myorder, auth }) => ({
    employee_type:auth.userDetails.employee_type

});
const mapDispatchToProps = (dispatch) => bindActionCreators({


},dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ProcureItemViewDrawer);
