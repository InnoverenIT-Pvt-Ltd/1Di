import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyledSelect} from "../../Components/UI/Antd";
import {
  setSelectedTimeIntervalReport,
  setTimeRangeReport,
} from "../Achievement/AchievementAction";
import TimeInterval from "../../Components/Utils/TimeInterval";
import { FlexContainer } from "../../Components/UI/Layout";


const Option = StyledSelect.Option;

const AchievementActionRight = (props) => {
  return (
    <FlexContainer alignItems="center">
        <TimeInterval
         times={props.dateRangeList}
          handleClick={props.setSelectedTimeIntervalReport}
        />
    </FlexContainer>
  );
};

const mapStateToProps = ({ achievement }) => ({
dateRangeList: achievement.dateRangeList,
});
const mapDispatchToProps = (dispatch) => bindActionCreators({
  setSelectedTimeIntervalReport,
  setTimeRangeReport
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(AchievementActionRight);
