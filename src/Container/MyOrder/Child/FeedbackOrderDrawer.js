import React, {  Suspense } from "react";
import { StyledDrawer } from "../../../Components/UI/Antd";
import { BundleLoader } from "../../../Components/Placeholder";
import FeedbackOrderForm from "./FeedbackOrderForm";

function FeedbackOrderDrawer (props) {
   
        const {
            openFeedbackOrDrawer,
            handleFeedbackOrderDrawer,
            particularRowData,
            ...formProps
        } = props;
        return (
            <>
                <StyledDrawer
                    title="Feedback"
                    width="60%"
                    visible={openFeedbackOrDrawer}
                    destroyOnClose
                    maskClosable={false}
                    onClose={() => handleFeedbackOrderDrawer(false)}
                    footer={null}
                    style={{marginTop:"3rem"}}
                >
                    <Suspense fallback={<BundleLoader />}>
                        <FeedbackOrderForm particularRowData={particularRowData} />
                        {/* <FeedbackOrderCard particularRowData={particularRowData}/> */}
                    </Suspense>
                </StyledDrawer>
            </>
        );    
}

export default FeedbackOrderDrawer;
