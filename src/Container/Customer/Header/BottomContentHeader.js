
import React, { Component } from "react";
import { CustomerHeader } from "../../../Components/Utils";
// import BottomContentHeaderActionRight from "./CustomerContentHeaderActionRight";
import BottomContentHeaderActionLeft from "./BottomContentHeaderActionLeft";

class BottomContentHeader extends Component {
    render() {
       
        return (
            <div>
                <CustomerHeader
                flexdirection={"column"}
                // boxShadowColor= {"null"}
                    leftComponent={
                      <BottomContentHeaderActionLeft 
                      handleActiveClick={this.props.handleActiveClick} 
                      activeClick={this.props.activeClick}
                      categoriesPrds={this.props.categoriesPrds}
                      fetchingCategories={this.props.fetchingCategories}
                      />
                    }
                    // centerComponent={<CustomerContentHeaderActionCenter/>}
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

export default BottomContentHeader;
