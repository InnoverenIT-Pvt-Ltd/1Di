import React, { lazy,Suspense } from "react";
import { BundleLoader } from "../Components/Placeholder";
import { StyledModal } from "../Components/UI/Antd";
import JobEmailForm from "./JobEmailForm";

function AddEmailFormModal (props) {
    
    return(
        <>
        <StyledModal
                    title={"Email"}
                     width="35%"
                    visible={props.addEmailformModal}
                    destroyOnClose
                    maskClosable={false}
                    maskStyle={{ backgroundColor: "rgba(1, 30, 71,0.7)" }}
                    style={{ top: 40 }}
                    onCancel={() => props.handleEmailFormModal(false)}
                    footer={null}
                >
                    <Suspense fallback={<BundleLoader />}>
                        <JobEmailForm />
                    </Suspense>
                </StyledModal>
        </>
    )
}

export default (AddEmailFormModal)