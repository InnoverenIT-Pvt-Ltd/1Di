import React, { Component, Suspense, lazy, useState } from "react";
import { StyledModal } from "../../Components/UI/Antd";
import CoursesHeader from "./Child/CoursesHeader";
// import TimeZoneForm from "./TimeZoneForm";
import { connect } from "react-redux";
import { Modal, Button } from "antd";
import { bindActionCreators } from "redux";
// import PlannerTable from "../Planner/PlannerTable"
 import { setCoursesViewType } from "./CoursesAction";
import { BundleLoader } from "../../Components/Placeholder";
import { set } from "lodash";
import CoursesCard from "../Courses/Child/CoursesCard"
import  CoursesCart from "../Courses/Child/CoursesCart"
import SelectedCources from "./Child/CoursesCard/SelectedCources";



function Courses(props) {
  const [visible, setVisible] = useState(false);
  const [currentUser,setCurrentUser] = useState("");

  function handleUserData(data){
setCurrentUser(data)
  }

  function showModal() {
    setVisible(true);
  }

  function handleOk(e) {
    setVisible(false);
  }

  function handleCancel(e) {
    setVisible(false);
  }
  function handleCallback() {
    setVisible(false);
  }
  const {
    setCoursesViewType,
    viewType,
  } = props;
  return (
    <React.Fragment>
      {/* {!props.timeZone && ( */}
        {/* <StyledModal
          width={"30vw"}
          bodyPadding={"0em"}
          title={null}
          visible={true}
          onOk={handleOk}
          footer={null}
          onCancel={handleCancel}
          maskClosable={false}
        >
          <TimeZoneForm callback={handleCallback} />
        </StyledModal> */}
      {/* )} */}
      <CoursesHeader
    setCoursesViewType={setCoursesViewType}
     viewType={viewType}
        // currentUser={currentUser}
        // handleUserData={handleUserData}
      />
        <Suspense fallback={<BundleLoader />}>
          {props.viewType === "card" ? 
           <CoursesCard /> :
           props.viewType === "select" ? 
           <SelectedCources/>:

            props.viewType === "cart" ? 
            <CoursesCart/>:

           
            null}
         

        </Suspense>
       
    </React.Fragment>
  );
}

const mapStateToProps = ({ auth,courses }) => ({
//   timeZone: auth.userDetails && auth.userDetails.timeZone,
  viewType: courses.viewType,

});
const mapDispatchToProps = (dispatch) => bindActionCreators({
    setCoursesViewType
   //setPlannerViewType,
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Courses);
