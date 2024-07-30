import React, { Component } from "react";
import { ActionHeader } from "../Components/Utils";
import BeforeLoginHeaderLeft from "./BeforeLoginHeaderLeft";

class BeforeLoginHeader extends Component {
  render() {
    const { setJobViewType, viewType } = this.props;
    return (
      <div >
        <ActionHeader
          leftComponent={
            <BeforeLoginHeaderLeft
              setJobViewType={setJobViewType}
              viewType={viewType}
            />
          }
            //  rightComponent={<JobHeaderRight/>}

        />
       
      
     
      </div>
    );
  }
}

export default BeforeLoginHeader;
