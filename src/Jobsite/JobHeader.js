import React, { Component } from "react";
import { ActionHeader } from "../Components/Utils";
   import JobHeaderRight from './JobHeaderRight';
import JobHeaderLeft from "./JobHeaderLeft";

class JobHeader extends Component {
  render() {
    const { setJobViewType, viewType } = this.props;
    return (
      <div class="bg-white">
        <ActionHeader
          leftComponent={
            <JobHeaderLeft
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

export default JobHeader;
