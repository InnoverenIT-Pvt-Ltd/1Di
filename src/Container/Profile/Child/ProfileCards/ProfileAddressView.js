import React, { Component } from "react";
import { Divider, Tooltip } from "antd";
//import { elipsize } from "../../../../Helpers/Function/Functions";
import {
  Title,
  SubTitle,
  MultiAvatar,
  StyledLabel,
} from "../../../../Components/UI/Elements";
import EditIcon from '@mui/icons-material/Edit';
import moment from "moment";
import { FlexContainer } from "../../../../Components/UI/Layout";
import { ActionIcon } from "../../../../Components/Utils";

class ProfileAddressView extends Component {
    render() {
      console.log(this.props.user)
      const {
        user: {
            address1,
            street,
            city,
            state,
            country,
            pinCode,
            latitude,
            longitude, 
        },
        toggleViewType,
      } = this.props;
      
      return (
        <>
          <FlexContainer justifyContent="flex-end">
            <EditIcon
              tooltipTitle="Edit"
             
              onClick={toggleViewType}
              size="1em"
            />
          </FlexContainer>
          <ProfileItemRow label="Address1" 
           value={address1} 
          />
          <ProfileItemRow label="Street" 
         value={street} 
          />
          <ProfileItemRow label="City" 
           value={city} 
          />
          <ProfileItemRow label="State" 
          value={state} 
          />
          <ProfileItemRow label="Country" 
          value={country}
          />  
          <ProfileItemRow label="PinCode" 
          value={pinCode} 
          />
          
        </>
      );
    }
  }
  
  export default ProfileAddressView;
  
  const ProfileItemRow = ({ label, value }) => {
    return (
      <FlexContainer
        alignItems="center"
        flexWrap="nowrap"
        style={{ margin: "0.4rem" }}
        width="2.5em"
      >
        <SubTitle style={{ color: "#444", fontWeight: 600 }}>{label}</SubTitle>
        <SubTitle
          overflow="hidden"
          textOverflow="ellipsis"
          style={{ marginLeft: "-4rem" }}
        >
          <Tooltip title={value} placement="topLeft">
           
            {value}
          </Tooltip>
        </SubTitle>
      </FlexContainer>
    );
  };
