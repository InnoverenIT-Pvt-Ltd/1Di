import React, {  Suspense } from "react";
import { StyledDrawer } from "../../../Components/UI/Antd";
import { BundleLoader } from "../../../Components/Placeholder";
import StarOrderDrawerForm from "./StarOrderDrawerForm";

function StarOrderDrawer (props) {
   
        const {
            clickStrOrDrwr,
            handleStarOrderDrawer,
            particularRowData,
            ...formProps
        } = props;
        return (
            <>
                <StyledDrawer
                    title="Rating"
                    width="60%"
                    visible={clickStrOrDrwr}
                    destroyOnClose
                    maskClosable={false}
                    onClose={() => handleStarOrderDrawer(false)}
                    footer={null}
                    style={{marginTop:"3rem"}}
                >
                    <Suspense fallback={<BundleLoader />}>
                        <StarOrderDrawerForm particularRowData={particularRowData} />
                    </Suspense>
                </StyledDrawer>
            </>
        );    
}

export default StarOrderDrawer;
