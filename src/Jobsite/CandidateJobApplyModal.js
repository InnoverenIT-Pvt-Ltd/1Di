import React, { lazy,Suspense } from "react";
import { BundleLoader } from "../Components/Placeholder";
import { StyledModal } from "../Components/UI/Antd";
import CandidateJobApplyForm from "./CandidateJobApplyForm";

function CandidateJobApplyModal (props) {
    return(
        <>
        <StyledModal
                    title={"Apply"}
                     width="60%"
                    visible={props.addCandidateApply}
                    destroyOnClose
                    maskClosable={false}
                    maskStyle={{ backgroundColor: "rgba(1, 30, 71,0.7)" }}
                    style={{ top: 40 }}
                    onCancel={() => props.handleCandidateApplyModal(false)}
                    footer={null}
                >
                    <Suspense fallback={<BundleLoader />}>
                        <CandidateJobApplyForm />
                    </Suspense>
                </StyledModal>
        </>
    )
}

export default (CandidateJobApplyModal)