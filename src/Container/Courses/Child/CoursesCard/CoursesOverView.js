import React, { Component } from "react";
import { Divider, Tooltip } from "antd";
// import { elipsize } from "../../../../Helpers/Function/Functions";
import {
  Title,
  SubTitle,
  MultiAvatar,
  StyledLabel,
} from "../../../../Components/UI/Elements";
// import EditIcon from '@mui/icons-material/Edit';
import moment from "moment";
import { FlexContainer } from "../../../../Components/UI/Layout";
import { ActionIcon } from "../../../../Components/Utils";
class CoursesOverView extends Component {
  render() {
    const {
        course:{
            courseName,
            duration
        },
    //   user: {
       
    //     phoneNo,
    
    //     emailId,
    //     creationDate,
    //     imageId,
    //     language,
    //     dialCode, 
    //     firstName,      
    //   },
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
        <CourseItemRow label="Course" 
         value={courseName}
         />
        <CourseItemRow label="Difficulty Level"
        //  value={`${dialCode} ${phoneNo}`
        //  } 
         />
         <CourseItemRow label="Duration"
         value={duration}
        //  } 
         />
       
        
      </>
    );
  }
}

export default CoursesOverView;

const CourseItemRow = ({ label, value }) => {
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
