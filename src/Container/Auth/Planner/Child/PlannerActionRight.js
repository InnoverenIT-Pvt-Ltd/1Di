import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Popover, Select, Button, Switch } from "antd";
// import Button from "antd/lib/button";
import Icon from "antd/lib/icon";
import TimeInterval from "../../../../Components/Utils/TimeInterval";
import { FlexContainer } from "../../../../Components/UI/Layout";
import { TextInput } from "../../../../Components/UI/Elements";

import { StyledSelect ,StyledRangePicker} from "../../../../Components/UI/Antd";
import {
  setSelectedTimeIntervalReport,
  setTimeRangeReport,

} from "../PlannerAction";
import PlannerSharedForm from "./PlannerSharedForm";

const Option = StyledSelect.Option;

const PlannerActionRight = (props) => {
  return (
    <FlexContainer alignItems="center">
      <PlannerSharedForm/>
        <TimeInterval
         times={props.dateRangeList}
          handleClick={props.setSelectedTimeIntervalReport}
        />
        {/* <Popover>
          <StyledRangePicker
            style={{width:"35%"}}
            onChange={(range) => {
              props.setTimeRangeReport(range[0], range[1]);
              console.log(range);
            }}

          />
        </Popover> */}
    </FlexContainer>
  );
};

const mapStateToProps = ({ planner }) => ({
  // userType: auth.userDetails && auth.userDetails.userType,
//   userType: auth.userDetails,

dateRangeList: planner.dateRangeList,



});
const mapDispatchToProps = (dispatch) => bindActionCreators({
  setSelectedTimeIntervalReport,
  setTimeRangeReport
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(PlannerActionRight);
