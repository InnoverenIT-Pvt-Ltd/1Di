
import React, { Component } from "react";
import { CustomerHeader } from "../../../Components/Utils";
// import BottomContentHeaderActionRight from "./CustomerContentHeaderActionRight";
import BottomContentHeaderActionLeft from "./BottomContentHeaderActionLeft";

class BottomContentHeader extends Component {
    render() {
       
        return (
            <div>
                <div className=" bg-white h-8 m-1 p-1 flex justify-center items-center ">
                      <BottomContentHeaderActionLeft 
                      handleActiveClick={this.props.handleActiveClick} 
                      activeClick={this.props.activeClick}
                      categoriesPrds={this.props.categoriesPrds}
                      fetchingCategories={this.props.fetchingCategories}
                      />
                </div>
            </div>
        );
    }
}

export default BottomContentHeader;
