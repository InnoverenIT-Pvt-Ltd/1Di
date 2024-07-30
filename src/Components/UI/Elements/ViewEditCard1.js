import React, { Component } from "react";
import { MainWrapper } from "../Layout";

class ViewEditCard1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: "view",
    };
  }
  toggleViewType = () => {
    this.setState((prevState) => {
      if (prevState.viewType === "view") {
        return { viewType: "edit" };
      } else {
        return { viewType: "view" };
      }
    });
  };
  render() {
    return (
      <div style={{boxShadow: "0.01rem 0.01rem 0.12rem 0.01rem"}} class=" rounded-md shadow-2xl border-solid m-1 p-1 max-sm:grid  w-wk  md:" Height={this.props.Height}>
        {this.props.children(this.state, this.toggleViewType)}
      </div>
    );
  }
}

export default ViewEditCard1;