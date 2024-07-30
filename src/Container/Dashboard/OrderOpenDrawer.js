import React, { lazy, Suspense } from "react";
import { StyledDrawer } from "../../Components/UI/Antd";
import { BundleLoader } from "../../Components/Placeholder";
const OpenOrdersTable = lazy(() => import("./OpenOrdersTable"));
const CompleteOrdersTable = lazy(() => import("./CompleteOrdersTable"));
const CancelledOrdersTable = lazy(() => import("./CancelledOrdersTable"));

const OrderOpenDrawer = (props) => {
    //   const { rowDatas,...formProps } = props;
    return (
        <>
            <StyledDrawer
                title={`${props.activeTable === 'open'? "Order Open" : props.activeTable === 'complete' ? "Order Complete" : props.activeTable === 'cancelled' ? "Order Cancel" : ""}`}
                width="70%"
                visible={props.orderedoPENModal}
                closable
                destroyOnClose
                maskStyle={{ backgroundColor: "rgba(1, 30, 71,0.7)" }}
                onClose={() => props.handleOrderOpenDrawer(false)}
                placement="right"
            >
                <Suspense fallback={<BundleLoader />}>
               {props.activeTable === 'open' && <OpenOrdersTable />}
               {/* {props.activeTable === 'complete' && <CompleteOrdersTable />} */}
      {/* {props.activeTable === 'cancelled' && <CancelledOrdersTable />} */}
                </Suspense>
            </StyledDrawer>
        </>
    );
};

export default OrderOpenDrawer;