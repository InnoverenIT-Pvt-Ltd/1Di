import React, { Component } from "react";
import { CustomerHeader } from "../../../Components/Utils";
 import CustomerContentHeaderActionLeft from "./CustomerContentHeaderActionLeft";
import CartMainContentHeaderActionRight from "./CartMainContentHeaderActionRight";

class CartMainContentHeader extends Component {
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
                        <CartMainContentHeaderActionRight 
                        // customer={this.props.customer}
                        />
                    }
                // rightComponent={
                // <p>jhfhjughj</p>
                // }
                />
            </div>
        );
    }
}

export default CartMainContentHeader;
