import React, { lazy, Suspense } from "react";
import { StyledDrawer } from "../../../Components/UI/Antd";
import { BundleLoader } from "../../../Components/Placeholder";
const NewOrderStepper = lazy(() => import("./NewOrderStepper"))

const AddNewOrder = (props) => {
   
    return (
        <>
            <StyledDrawer
                title="Add Order"
                width="70%"
                visible={props.addOrderModal}
                closable
                destroyOnClose
                maskStyle={{ backgroundColor: "rgba(1, 30, 71,0.7)" }}
                onClose={() => props.handleAddOrderModal(false)}
                style={{marginTop:"3rem"}}
                placement="right"
            >
                <Suspense fallback={<BundleLoader />}>
                    <NewOrderStepper      />
                </Suspense>
            </StyledDrawer>
        </>
    );
};

export default AddNewOrder;