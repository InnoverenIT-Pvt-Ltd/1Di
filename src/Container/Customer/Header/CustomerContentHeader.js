import React, { Component } from "react";
import { CustomerHeader } from "../../../Components/Utils";
// import CustomerContentHeaderActionLeft from "./CustomerContentHeaderActionLeft";
import CustomerContentHeaderActionRight from "./CustomerContentHeaderActionRight";
import CustomerContentHeaderActionCenter from "./CustomerContentHeaderActionCenter";

class CustomerContentHeader extends Component {
    render() {
       
        return (
            <div>
                <CustomerHeader
                flexdirection={"column"}
                // boxShadowColor= {"null"}
                    // leftComponent={
                    //   <CustomerContentHeaderActionLeft/>
                    // }
                    centerComponent={<CustomerContentHeaderActionCenter/>}
                    // rightComponent={
                    //     <CustomerContentHeaderActionRight/>
                    // }
                    // rightComponent={
                    // <p>jhfhjughj</p>
                    // }
                />
            </div>
        );
    }
}

export default CustomerContentHeader;
