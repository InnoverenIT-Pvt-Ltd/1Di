import React, { Component } from "react";
import { CustomerHeader } from "../../../Components/Utils";
import { base_url } from "../../../Config/Auth";
import MainHeaderLeft from "./MainHeaderLeft";
import MainHeaderRight from "./MainHeaderRight";

class MainHeader extends Component {
  render() {
    return (
      <div>
        <CustomerHeader 
        // style={{backgroundColor:"lightgrey"}}
          hideInMobile={true}
          fontWeight={"bold"}
          leftComponent={
           
            <MainHeaderLeft/>
          }
          centerComponent={<p style={{ marginTop: "1em" }}></p>}
          rightComponent={<MainHeaderRight/>}
        />
      </div>
    );
  }
}

export default MainHeader;
