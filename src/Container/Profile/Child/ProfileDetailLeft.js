import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FlexContainer } from "../../../Components/UI/Layout";
import ProfileOverviewCard from "./ProfileCards/ProfileOverviewCard";
import ProfileStatsCard from "./ProfileCards/ProfileStatsCard";
import ProfileAddressCard from "./ProfileCards/ProfileAddressCard";
import ProfileDistanceCard from "./ProfileCards/ProfileDistanceCard";
class ProfileDetailLeft extends Component {
  render() {
     const { userDetails } = this.props;
    // console.log(userDetails);
    return (
      <div class="max-sm:w-80 flex flex-col h-full" >
        {/* <ProfileOverviewCard 
         user={userDetails} 
        /> */}
         {/* <ProfileDistanceCard 
         user={userDetails} 
        /> */}
   
        {/* <ProfileStatsCard 
         user={userDetails}
         /> */}
        <ProfileAddressCard 
         user={userDetails}
        />
       
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => ({
  userDetails: auth.userDetails,
});
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetailLeft);