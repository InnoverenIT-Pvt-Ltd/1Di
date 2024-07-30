import React, { useEffect, useState,useMemo,lazy } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { base_url } from "../../../Config/Auth";

import { FlexContainer } from "../../../Components/UI/Layout";
import { StyledSelect } from "../../../Components/UI/Antd";


const Option = StyledSelect.Option;

class TestActionLeft extends React.Component {
 
  render() {
   
    return (
      <FlexContainer alignItems="center">
    
      </FlexContainer>
    );
  }
}

const mapStateToProps = ({ auth, team, account }) => ({
//   userId: auth.userDetails.userId,
//   role: auth.userDetails.role,
//   user: auth.userDetails,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
    },
    dispatch
  );
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TestActionLeft)
);
