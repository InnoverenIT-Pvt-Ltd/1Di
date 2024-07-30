import React, { Component,lazy } from "react";
import { ActionHeader } from "../../../../Components/Utils";
const CourseDetailActionLeft =lazy(()=> import("./CourseDetailActionLeft"));

class CourseDetailHeader extends Component {
  render() {
    return (
      <div>
        <ActionHeader
          leftComponent={<CourseDetailActionLeft />}
          rightComponent={<></>}
        />
      </div>
    );
  }
}

export default CourseDetailHeader;
