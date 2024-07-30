import React, { Component } from "react";
import { Divider, Tooltip } from "antd";
// import { elipsize } from "../../../../Helpers/Function/Functions";
import {
  Title,
  SubTitle,
  MultiAvatar,
  StyledLabel,
} from "../../../../Components/UI/Elements";
import EditableInput from "../../../../Components/Forms/Edit/EditableInput";
// import EditIcon from '@mui/icons-material/Edit';
import moment from "moment";
import { FlexContainer } from "../../../../Components/UI/Layout";
import { ActionIcon } from "../../../../Components/Utils";
import { InputComponent } from "../../../../Components/Forms/Formik/InputComponent";
class ProfileDistanceView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
    };
  }

  handleChange = (name, value) => {
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value,
      },
    });
  };
  render() {
    const {
      user: {
       
        preferredDistance,
    
        emailId,
        creationDate,
        imageId,
        language,
        dialCode, 
        firstName,      
      },
      toggleViewType,
    } = this.props;
    
    return (
      <>
        <FlexContainer justifyContent="flex-end">
          {/* <EditIcon
            tooltipTitle="Edit"
            // iconType="edit"
            onClick={toggleViewType}
            size="1em"
          /> */}
        </FlexContainer>
        {/* <ProfileItemRow label="Name" value={firstName} /> */}
      
        <ProfileItemRow label="Distance" 
     
         />
      
           <EditableInput
              value={preferredDistance}
            // defaultValue={organizationUrl}
            handleChange={this.handleChange}
            // name={"organizationUrl"}
            // placeholder={"Website"}
            // value={this.state.fields.organizationUrl}
            width="100%"
          />
       
       
        
      </>
    );
  }
}

export default ProfileDistanceView;

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
          {/* {elipsize(value, 27)} */}
          {value}
        </Tooltip>
      </SubTitle>
    </FlexContainer>
  );
};
