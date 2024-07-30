import React, { lazy, Suspense } from "react";
import { StyledDrawer } from "../../Components/UI/Antd";
import { BundleLoader } from "../../Components/Placeholder";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const ProcureStatusShower = lazy(() => import("./ProcureStatusShower"));
const OrderSupplierStatuShower = lazy(() => import("../OrderSupplier/OrderSupplierStatuShower"));

const ProcureStatusShowDrawer = (props) => {
    const isSmallScreen = window.innerWidth <= 600;
    const drawerWidth = isSmallScreen ? "90%" : "70%";
    return (
        <>
            <StyledDrawer
                title={`Status:${props.rowDatas.newOrderNo}`}
                width={drawerWidth}
                visible={props.showStatusDrwr}
                closable
                destroyOnClose
                maskStyle={{ backgroundColor: "rgba(1, 30, 71,0.7)" }}
                onClose={() => props.handleStatuShowDrawer(false)}
                placement="right"
            >
                <Suspense fallback={<BundleLoader />}>
                {props.employee_type==="Supplier" ? 
               <OrderSupplierStatuShower   rowDatas={props.rowDatas}/>
                     :
                     <ProcureStatusShower
                    rowDatas={props.rowDatas}
                     />
                }
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
export default connect(mapStateToProps, mapDispatchToProps)(ProcureStatusShowDrawer);