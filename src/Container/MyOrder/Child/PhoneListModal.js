import React, { lazy, Suspense } from "react";
import { StyledDrawer } from "../../../Components/UI/Antd";
import { BundleLoader } from "../../../Components/Placeholder";
const PhoneListInOrder = lazy(() => import("./PhoneListInOrder"))

const PhoneListModal = (props) => {
    //   const { rowDatas,...formProps } = props;
    console.log(props.rowDatas)
    return (
        <>
            <StyledDrawer
                title={`Order ID ${props.rowDatas.newOrderNo}`}
                width="70%"
                visible={props.orderedPhoneModal}
                closable
                destroyOnClose
                maskStyle={{ backgroundColor: "rgba(1, 30, 71,0.7)" }}
                onClose={() => props.handleOrderedPhoneModal(false)}
                placement="right"
            >
                <Suspense fallback={<BundleLoader />}>
                    <PhoneListInOrder
                    rowDatas={props.rowDatas}
                     />
                </Suspense>
            </StyledDrawer>
        </>
    );
};

export default PhoneListModal;