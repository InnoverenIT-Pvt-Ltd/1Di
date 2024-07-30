import React from "react";
import { FlexContainer } from "../../../Components/UI/Layout";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
import styled from "styled-components";
import { RollbackOutlined } from "@ant-design/icons";
import { createBrowserHistory } from "history";
import { Tooltip, Input, Button } from "antd";
import "./MainHeader.scss";
const history = createBrowserHistory();

const { Search } = Input;

class CustomerContentHeaderActionLeft extends React.Component {
    render() {
       
        return (
            <ContainerWrapper>
            <FlexContainer alignItems="center">
               
            <Tooltip title="Back">
        <RollbackOutlined
          className="BackButton"
          style={{}}
          onClick={() => history.goBack()}
        />
      </Tooltip>
                

            </FlexContainer>
             </ContainerWrapper>
        );
    }
}
// const mapStateToProps = ({ }) => ({

// });
// const mapDispatchToProps = (dispatch) =>
//     bindActionCreators(
//         {
//         },
//         dispatch
//     );
export default CustomerContentHeaderActionLeft;
// connect(mapStateToProps, mapDispatchToProps)(CustomerContentHeaderActionLeft);
const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    margin-bottom: 10px;
  }
`;