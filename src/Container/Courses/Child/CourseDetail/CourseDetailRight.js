import React, { Component, lazy } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
const CoursesDetailTab = lazy(() => import("../CoursesCard/CoursesDetailTab"));

class CoursesDetailRight extends Component {
  render() {
    console.log(this.props.customer);
    console.log(this.props.course);

    return (
      <div style={{ width: "100%" }}>
        <CoursesDetailTab 
        course={this.props.course}
        // customer={this.props.customer}
         />
      </div>
    );
  }
}
const mapStateToProps = ({}) => ({});
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesDetailRight);
