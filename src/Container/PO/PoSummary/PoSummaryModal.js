import React, { Suspense } from 'react'
import { StyledDrawer } from '../../../Components/UI/Antd';
import PoSummaryTab from './PoSummaryTab';

const PoSummaryModal = (props) => {

    const { showSummaryList, handlePoSummaryModal } = props;
    return (
        <>
            <StyledDrawer
                title="Summary"
                width="65%"
                maskClosable={false}
                destroyOnClose
                visible={showSummaryList}
                maskStyle={{ backgroundColor: "rgba(1, 30, 71,0.7)" }}
                style={{ top: 40 }}
                onClose={() => handlePoSummaryModal(false)}
                footer={null}
            >
                <Suspense fallback={"Loading ..."}>
                    <PoSummaryTab />
                </Suspense>
            </StyledDrawer>
        </>
    );
}

export default PoSummaryModal
