import React, { Component,lazy} from "react";
import { FlexContainer } from "../../../../Components/UI/Layout";
const CoursesOverviewCard =lazy(()=> import("../CoursesCard/CoursesOverviewCard"));
const CoursesAssignedCard =lazy(()=> import("../CoursesCard/CoursesAssignedCard"));

class CourseDetailLeft extends Component {
  render() {
    const { course } = this.props;
    return (
      <>
        <FlexContainer flexDirection="column" style={{ display: "block" }}>
          <CoursesOverviewCard  
           course={course}
          />
          <CoursesAssignedCard  />
          
        </FlexContainer>
      </>
    );
  }
}
export default CourseDetailLeft;
