import React, { useEffect, useState, } from "react";
import { Menu, Icon, Avatar } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import {
  StyledDropdown,
  StyledMenu,
  StyledMenuItem
} from "../Components/UI/Antd";
import { ApplicationWrapper, MainWrapper } from "../Components/UI/Layout";
import { MultiAvatar } from "../Components/UI/Elements";
import { Route, Routes, Switch, Link } from "react-router-dom";




const ProfileMenu = ({ logout, history,userDetails,translatedMenuItems }) => (
  <ApplicationWrapper>
    <MainWrapper>
      <StyledMenu>
     
       
        <StyledMenuItem
          key="1"
          style={{
            marginTop: 0,
            marginBottom: 0,
            paddingTop: 0,
            paddingBottom: 0
            // fontWeight: "bold"
          }}
        >
          <Link to="/changepassword">
           
            Change Password
          </Link>
        </StyledMenuItem>
        <StyledMenuItem
          key="2"
          style={{
            marginTop: 0,
            marginBottom: 0,
            paddingTop: 0,
            paddingBottom: 0
            // fontWeight: "bold"
          }}
        >
          <Link to="/profile">
           
            Address
          </Link>
        </StyledMenuItem>
        <StyledMenuItem
          key="3"
          style={{
            marginTop: 0,
            marginBottom: 0,
            paddingTop: 0,
            paddingBottom: 0
          }}
        >
           <Link to="/login">
           Logout
           
            </Link>
        </StyledMenuItem>
        <Menu.Divider />
      </StyledMenu>
    </MainWrapper>
  </ApplicationWrapper>
);
function ProfileDropdown (props) {
 
    const {
      userDetails:{fullName}
    } = props;
    return (
<>
   
      <StyledDropdown
        overlay={
            // <Link to="/">
            // Logout
            
            //  </Link>
             <ProfileMenu/>
        }
      >
     {/* <Link to="/">
            Logout
            
             </Link> */}

             <Avatar 
              style={{ backgroundColor: "green", verticalAlign: "middle", color: "white",marginRight:"15px",height:"27px",width:"27px" }}
              size="large"
            >
               {/* {`${props.user.firstName} ${props.user.lastName}`} */}
               <div className="-mt-[6px]">{fullName.charAt(0)}</div>
            </Avatar>
          
      </StyledDropdown>

    </>
    );
}

const mapStateToProps = ({ auth }) => ({
  fullName: auth.userDetails.fullName,
  user: auth.userDetails,
  userDetails: auth.userDetails
});
const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProfileDropdown)
);
