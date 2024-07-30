import React, { Component } from "react";
import { CustomerHeader } from "../../../Components/Utils";
 import CustomerContentHeaderActionLeft from "./CustomerContentHeaderActionLeft";
 import CustomerCartHeaderActionRight from "./CustomercartHeaderActionRight";

class CustomerCartHeader extends Component {
    render() {

        return (
            <div>
                <CustomerHeader
                    boxShadowColor={"null"}
                    flexdirection={"column"}
                     leftComponent={
                         <CustomerContentHeaderActionLeft
                     customer={this.props.customer}
                          />
                     }
                    rightComponent={
                        <CustomerCartHeaderActionRight 
                        customer={this.props.customer}
                        />
                     }
              
                 
                />
            </div>
        );
    }
}

export default CustomerCartHeader;
