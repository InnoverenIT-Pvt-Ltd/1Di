import React, { Suspense } from 'react'
import { StyledDrawer } from '../../../../Components/UI/Antd';
import PoItemTrackingForm from "./PoItemTrackForm"

const PoTrackingModal = (props) => {

    const { addItemLocation, handleItemTrackModal } = props;
    return (
        <>
            <StyledDrawer
                title={`Track - ${props.primaryTitle}`}
                width="60%"
                maskClosable={false}
                destroyOnClose
                visible={addItemLocation}
                maskStyle={{ backgroundColor: "rgba(1, 30, 71,0.7)" }}
                style={{ top: 40 }}
                onClose={() => handleItemTrackModal(false)}
                footer={null}
            >
                <Suspense fallback={"Loading ..."}>
                    <PoItemTrackingForm quotationSupplierSuppliesId={props.quotationSupplierSuppliesId} />
                </Suspense>
            </StyledDrawer>
        </>
    );
}

export default PoTrackingModal
