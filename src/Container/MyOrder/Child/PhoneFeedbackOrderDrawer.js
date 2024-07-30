import React, {  Suspense } from "react";
import { StyledDrawer } from "../../../Components/UI/Antd";
import { BundleLoader } from "../../../Components/Placeholder";
import PhoneFeedbackOrderForm from "./PhoneFeedbackOrderForm";

function PhoneFeedbackOrderDrawer (props) {
   
        const {
            openFeedbackpHnOrDrawer,
            handleFeedbackPhoneOrderDrawer,

            ...formProps
        } = props;
        return (
            <>
                <StyledDrawer
                    title="Feedback"
                    width="60%"
                    visible={openFeedbackpHnOrDrawer}
                    destroyOnClose
                    maskClosable={false}
                    onClose={() => handleFeedbackPhoneOrderDrawer(false)}
                    footer={null}
                    style={{marginTop:"3rem"}}
                >
                    <Suspense fallback={<BundleLoader />}>
                        <PhoneFeedbackOrderForm />
                    </Suspense>
                </StyledDrawer>
            </>
        );    
}

export default PhoneFeedbackOrderDrawer;
