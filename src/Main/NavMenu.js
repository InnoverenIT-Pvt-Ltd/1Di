import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Menu, Icon, Popover, Badge } from "antd";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
//import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';



const SubMenu = Menu.SubMenu;

class NavMenu extends React.Component {
  state = {
    collapsed: false,
  };

  render() {
    const { serviceUser, customerUser } = this.props;
    console.log("Oppo", this.props.opportunityRecord);
    const { user } = this.props;
    let path = window.location.href.split("/")[3];
    console.log("path", path);
    return (
      <div style={{ marginLeft: this.props.collapsed ? "0" : "-1.1875em", }}>
        <Menu
          defaultSelectedKeys={["/" + path]}
          defaultOpenKeys={[]}
          mode="inline"
          // theme={this.props.theme}
          theme="light"
          inlineCollapsed={this.props.collapsed}
          style={{ backgroundColor: "white" }}
        >
         
            <Menu.Item key="/profile">
              <Link to="/profile">
{/* 
                <DirectionsWalkIcon 
                // icon={solid("person-walking-arrow-right")}
                 /> */}
              
                <span  style={{ paddingLeft: "1em" }}>
                  Profile
                </span>
              </Link>
            </Menu.Item>
         


            <Menu.Item key="/planner">
              <Link to="/planner">
{/* 
                <DirectionsWalkIcon 
                // icon={solid("person-walking-arrow-right")}
                 /> */}
              
                <span  style={{ paddingLeft: "1em" }}>
                  Planner
                </span>
              </Link>
            </Menu.Item>
       
    
       
       
       
        
       
        
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, opportunity, requirement }) => ({
//   role: auth.userDetails.role,
//   customerUser: auth.userDetails,
//   userDetails: auth.userDetails,
//   serviceDetails: auth.serviceDetails,
//   serviceUser: auth.serviceDetails,
//   department: auth.userDetails.department,
  user: auth.userDetails,
  //opportunityRecord:opportunity.opportunityRecord,
  // requirementRecord:requirement.requirementRecord,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      // getOpportunityRecord
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);
