import React, { Component, Suspense, lazy, useState } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "antd";
import { bindActionCreators } from "redux";
import { setAchievementViewType } from "./AchievementAction";
import { set } from "lodash";
import AchivementTable from "./AchivementTable";
import AchievementHeader from "./AchievementHeader";
import { BundleLoader } from "../../Components/Placeholder";


function Achievement(props) {
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
    setAchievementViewType,
    viewType,
  } = props;
  return (
    <React.Fragment>
      <AchievementHeader
        setAchievementViewType={setAchievementViewType}
        viewType={viewType}
      />
        <Suspense fallback={<BundleLoader />}>
          {props.viewType === "table" ? 
           <AchivementTable /> :
            null}
            

        </Suspense>
       
    </React.Fragment>
  );
}

const mapStateToProps = ({ auth,achievement }) => ({
//   timeZone: auth.userDetails && auth.userDetails.timeZone,
  viewType: achievement.viewType,

});
const mapDispatchToProps = (dispatch) => bindActionCreators({
   setAchievementViewType,
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Achievement);
