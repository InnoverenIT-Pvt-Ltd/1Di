import React, { Suspense } from 'react'
import { StyledDrawer } from '../../../Components/UI/Antd';
import PoTrackingForm from './PoTrackingForm';

const PoTrackingModal = (props) => {

    const { showTrackingOrderItem, handlePoTrackModal } = props;
    return (
        <>
            <StyledDrawer
                title="Tracking "
                width="60%"
                maskClosable={false}
                destroyOnClose
                visible={showTrackingOrderItem}
                maskStyle={{ backgroundColor: "rgba(1, 30, 71,0.7)" }}
                style={{ top: 40 }}
                onClose={() => handlePoTrackModal(false)}
                footer={null}
            >
                <Suspense fallback={"Loading ..."}>
                    <PoTrackingForm />
                </Suspense>
            </StyledDrawer>
        </>
    );
}

export default PoTrackingModal
