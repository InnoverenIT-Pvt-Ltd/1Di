import React, { Component } from "react";
import { CustomerHeader } from "../../../Components/Utils";
// import CustomerContentHeaderActionLeft from "./CustomerContentHeaderActionLeft";
import PaymentMainContentHeaderActionRight from "./PaymentMainContentHeaderActionRight";

class PaymentMainContentHeader extends Component {
    render() {

        return (
            <div>
                <CustomerHeader
                    boxShadowColor={"null"}
                    flexdirection={"column"}
                    // leftComponent={
                    //     <CustomerContentHeaderActionLeft
                    //     // customer={this.props.customer}
                    //      />
                    // }
                    rightComponent={
                        <PaymentMainContentHeaderActionRight 
                        // customer={this.props.customer}
                        />
                    }
                // rightComponent={
                // <p>Hii r</p>
                // }
                />
            </div>
        );
    }
}

export default PaymentMainContentHeader;
