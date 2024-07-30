import React, { lazy, Suspense } from "react";
import { StyledDrawer } from "../../Components/UI/Antd";
import { BundleLoader } from "../../Components/Placeholder";
const ReviewOfferForm = lazy(() => import("./ReviewOfferForm"))

const ReviewOfferModal = (props) => {
    //   const { rowDatas,...formProps } = props;
    return (
        <>
            <StyledDrawer
                title="Order Details"
                width="70%"
                visible={props.addreviewOffer}
                closable
                destroyOnClose
                maskStyle={{ backgroundColor: "rgba(1, 30, 71,0.7)" }}
                onClose={() => props.handleReviewOfferModal(false)}
                placement="right"
            >
                <Suspense fallback={<BundleLoader />}>
                    <ReviewOfferForm />
                </Suspense>
            </StyledDrawer>
        </>
    );
};

export default ReviewOfferModal;