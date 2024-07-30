import React, { lazy, Suspense } from "react";
import { StyledDrawer } from "../../../Components/UI/Antd";
import { BundleLoader } from "../../../Components/Placeholder";
const PickUpAddressForm = lazy(() => import("./PickUpAddressForm"))

const AddPickUpModal = (props) => {

    return (
        <>
            <StyledDrawer
                title='Pick Up'
                width="70%"
                visible={props.addPickUp}
                closable
                destroyOnClose
                maskStyle={{ backgroundColor: "rgba(1, 30, 71,0.7)" }}
                onClose={() => props.handlePickUpModal(false)}
                placement="right"
            >
                <Suspense fallback={<BundleLoader />}>
                    <PickUpAddressForm rowDatas={props.rowDatas} />
                </Suspense>
            </StyledDrawer>
        </>
    );
};

export default AddPickUpModal;