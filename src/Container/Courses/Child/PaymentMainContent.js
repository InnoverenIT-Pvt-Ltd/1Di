import React, { Component } from "react";
import {
  FlexContainer,
  MainWrapper,
} from "../../../Components/UI/Layout";
import PaymentLeftContent from "../Child/PaymentLeftContent";
import PaymentRightContent from "../Child/PaymentRightContent";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "../courses.scss";
// import PaymentCenterContent from "./PaymentCenterContent";
import { Tooltip, Input, Button } from "antd";
// import "./Payment.scss";
import { RollbackOutlined } from "@ant-design/icons";
import { createBrowserHistory } from "history";
// import { getDeliveryInfo } from "../../../CustomerAction";
const history = createBrowserHistory();
class PaymentMainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  handleClickEdit = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  handleCancl = () => {
    this.setState({
      visible: false,
    });
  };

//   handleCallback = (data) => {
//     if (data === "success") {
//       this.setState({
//         visible: false,
//       });
//     }
//     const value = localStorage.getItem("cartId");
//     const final = JSON.parse(value);
//     this.props.getDeliveryInfo(final.cartId);
//   };
//   componentDidMount() {
//     const value = localStorage.getItem("cartId");
//     const final = JSON.parse(value);
//     this.props.getDeliveryInfo(final.cartId);
//   }
  render() {
    return (
      <>
        {/* <div style={{ fontWeight: 500, fontSize: "  1.875em",marginLeft: "1em" }}>Choose Payment</div> */}
        <FlexContainer style={{ justifyContent: "center" }}>
          <h1 class="underline max-sm:text-xl md:text-4xl">
            <b>Checkout</b>
          </h1>
        </FlexContainer>

        <div className="box">
          <MainWrapper
             style={{
              background:"#FFFFFF",
              boxShadow:"0.25em 0.25em 0.25em rgba(163, 171, 185, 0.5)",
              borderRadius:"1.25em",
               width:"43%",
              height:"42vh",
              marginLeft:"1.875em",
              border:"none"
            }}
          >
            <PaymentLeftContent />
          </MainWrapper>
          <MainWrapper
          style={{
            background:"#FFFFFF",
            boxShadow:"0.25em 0.25em 0.25em rgba(163, 171, 185, 0.5)",
            borderRadius:"1.25em",
             width:"33%",
            height:"42vh",
            marginLeft:"1.875em",
            border:"none"
          }}
          >
            <PaymentRightContent />
          </MainWrapper>
        </div>
       
      </>
    );
  }
}

const mapStateToProps = ({ customer, auth }) => ({
//   showDeliveryInfo: customer.showDeliveryInfo,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
    //   getDeliveryInfo,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PaymentMainContent);
