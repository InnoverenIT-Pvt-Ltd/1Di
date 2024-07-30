import React, { lazy, Suspense, Component } from "react";

import { FormattedMessage } from 'react-intl';
import { StyledDrawer } from "../../Components/UI/Antd";
import { BundleLoader } from "../../Components/Placeholder";
import StatusOfOrder from "./StatusOfOrder";

class StatusOfOrderModal extends Component {
    render() {
        const {
            addStatusOfOrder,
            handleStatusOfOrder,
            particularRowData,
            ...formProps
        } = this.props;
        return (
            <>
                <StyledDrawer
                    title={<div class="flex items-center">
                        <FormattedMessage id="app.statusoforder" defaultMessage="Status of Order #" /> -
                        {particularRowData.newOrderNo}
                    </div>}
                    width="60%"
                    visible={addStatusOfOrder}
                    destroyOnClose
                    maskClosable={false}
                    onClose={() => handleStatusOfOrder(false)}
                    footer={null}
                    style={{marginTop:"3rem"}}
                >
                    <Suspense fallback={<BundleLoader />}>
                        <StatusOfOrder particularRowData={particularRowData} />
                    </Suspense>
                </StyledDrawer>
            </>
        );
    }
}

export default StatusOfOrderModal;
