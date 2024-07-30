import React, { Component,Suspense,lazy } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//  import { getCourseDetailsById } from "../../CoursesAction";
import { FlexContainer, MainWrapper } from "../../../../Components/UI/Layout";
import { withRouter } from "react-router";
import { BundleLoader } from "../../../../Components/Placeholder";
const CourseDetailRight=lazy(()=> import("./CourseDetailRight"));
const CourseDetailLeft=lazy(()=> import("./CourseDetailLeft"));
const CourseDetailHeader=lazy(()=> import("./CourseDetailHeader"));

class CourseDetail extends Component {
  componentDidMount() {
    //this.props.getCourseDetailsById(this.props.match.params.courseId);
  }
  render() {
     const { course, fetchingCourseDetailsById } = this.props;
    return (
      <>
        <>
          <CourseDetailHeader />
          {fetchingCourseDetailsById ? (
            <MainWrapper>
              <BundleLoader />
            </MainWrapper>
          ) : (
              <FlexContainer>
                <Suspense fallback={"Loading..."}>
                  <FlexContainer flexWrap="no-wrap" style={{ width: "100%" }}>
                    <div style={{ width: "25%" }}>
                      <CourseDetailLeft 
                      
                      course={course}
                       />
                    </div>
                    <div style={{ width: "75%" }}>
                      <CourseDetailRight 
                   course={course}
                       />
                    </div>
                  </FlexContainer>
                </Suspense>
              </FlexContainer>
             )} 
        </>
      </>
    );
  }
}
const mapStateToProps = ({ courses }) => ({
//   fetchingCustomerDetailsById: customer.fetchingCustomerDetailsById,
//   customer: customer.customer,
fetchingCourseDetailsById:courses.fetchingCourseDetailsById,
course:courses.course
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
       // getCourseDetailsById
    //   getCustomerDetailsById,
    },
    dispatch
  );

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CourseDetail)
);
