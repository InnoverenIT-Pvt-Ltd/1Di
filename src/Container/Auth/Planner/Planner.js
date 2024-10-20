import React, { Component, Suspense, lazy, useState } from "react";
import { StyledModal } from "../../../Components/UI/Antd";
import PlannerHeader from "./Child/PlannerHeader";
// import TimeZoneForm from "./TimeZoneForm";
import { connect } from "react-redux";
import { Modal, Button } from "antd";
import { bindActionCreators } from "redux";
import { setPlannerViewType } from "./PlannerAction";
import { BundleLoader } from "../../../Components/Placeholder";
import { set } from "lodash";

const PlannerTable = lazy(() => import("../Planner/PlannerTable"));
const PlannerCalendar = lazy(() => import("./Child/PlannerCalendar"));

function Planner(props) {
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
    setPlannerViewType,
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
      <PlannerHeader
        setPlannerViewType={setPlannerViewType}
        viewType={viewType}
        // currentUser={currentUser}
        // handleUserData={handleUserData}
      />
        <Suspense fallback={<BundleLoader />}>
          {props.viewType === "dashboard" ? 
           <PlannerCalendar /> :
            props.viewType === "table" ? 
            <PlannerTable/>:
            null}
            

        </Suspense>
       
    </React.Fragment>
  );
}

const mapStateToProps = ({ auth,planner }) => ({
//   timeZone: auth.userDetails && auth.userDetails.timeZone,
  viewType: planner.viewType,

});
const mapDispatchToProps = (dispatch) => bindActionCreators({
   setPlannerViewType,
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Planner);
