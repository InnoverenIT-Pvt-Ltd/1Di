// import React from 'react';
// import { injectStripe } from 'react-stripe-elements';
// import { PaymentRequestButtonElement } from 'react-stripe-elements';

// class PaymentRequestForm extends React.Component {
//     constructor(props) {
//         super(props);

//         // For full documentation of the available paymentRequest options, see:
//         // https://stripe.com/docs/stripe.js#the-payment-request-object
//         // const paymentRequest = props.stripe.paymentRequest({
//         //     country: 'US',
//         //     currency: 'usd',
//         //     total: {
//         //         label: 'Demo total',
//         //         amount: 1000,
//         //     },
//         // });

//         // paymentRequest.on('token', ({ complete, token, ...data }) => {
//         ////         //     complete('success');
//         // });

//         // paymentRequest.canMakePayment().then((result) => {
//         //     this.setState({ canMakePayment: !!result });
//         // });

//         // this.state = {
//         //     canMakePayment: false,
//         //     paymentRequest,
//         // };
//     }

//     render() {
//         return (
//         // this.state.canMakePayment ? (
//              <PaymentRequestButtonElement
//                 // paymentRequest={this.state.paymentRequest}
//                 className="PaymentRequestButton"
//                 style={{
//                     // For more details on how to style the Payment Request Button, see:
//                     // https://stripe.com/docs/elements/payment-request-button#styling-the-element
//                     paymentRequestButton: {
//                         theme: 'light',
//                         height: '4em',
//                     },
//                 }}
//             />
//         // ) : null;
//         )
//     }
// }
// export default injectStripe(PaymentRequestForm);


import React from "react";
import { PaymentRequestButtonElement } from "react-stripe-elements";
import { injectStripe } from "react-stripe-elements";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";
import { message } from "antd";
import { upiPayment } from "../SmartPay/BuyPassAction";

class PaymentRequestForm extends React.Component {
  constructor(props) {
    super(props);

    // For full documentation of the available paymentRequest options, see:
    // https://stripe.com/docs/stripe.js#the-payment-request-object
    const paymentRequest = props.stripe.paymentRequest({
      country: "GB",
      currency: "gbp",
      total: {
        label: "Demo total",
        amount: 1000
      }
    });
    const { userDetails, user, passVoucher, tempPassDate } = this.props;
    
    const { paymentId } = this.props;

    const { orderAmount } = this.props;
   
    const finalAmmount = parseInt(orderAmount);
   

    paymentRequest.on("token", ({ complete, token, ...data }) => {
      this.props.upiPayment(
        {
          ...user,
          paymentId: paymentId,
          userId: userDetails.userId,
          email: userDetails.email,
          sessionId: userDetails.sessionId,
          adminId: userDetails.adminId,
          contactId: userDetails.contactId,
          firstName: userDetails.firstName,
          lastName: userDetails.lastName,
          orderAmount: orderAmount,
          voucherCode: passVoucher.voucherCode || "",
          usersAllowed: passVoucher.usersAllowed || "",
          passDate: moment(tempPassDate).format("YYYY-MM-DD")
        },
        this.handleCallback
      );
    
      complete("success");
    });

    paymentRequest.canMakePayment().then(result => {
      this.setState({ canMakePayment: !!result });
    });

    this.state = {
      canMakePayment: false,
      paymentRequest
    };
  }
  handleCallback = (status, data) => {
    debugger;
    if (status === "success") {
      this.props.history.push("/userdashboard");
      // this.props.history.push("/userdashboard");
      message.success(data.Message);
    } else {
      // message.error("Some error occoured");
    }
  };
  render() {
    return this.state.canMakePayment ? (
      <PaymentRequestButtonElement
        paymentRequest={this.state.paymentRequest}
        className="PaymentRequestButton"
        style={{
          // For more details on how to style the Payment Request Button, see:
          // https://stripe.com/docs/elements/payment-request-button#styling-the-element
          paymentRequestButton: {
            theme: "light",
            height: "64px"
          }
        }}
      />
    ) : null;
  }
}

const mapStateToProps = ({ pass, auth }) => ({
  upiPayment: pass.upiPayment,
  clientSecret: pass.passDetails.clientSecret,
  userDetails: auth.userDetails,
  tempPassDate: pass.tempPassDate,
  paymentId: pass.passDetails.paymentId,
  orderAmount: pass.passDetails.orderAmount,
  passVoucher: auth.passVoucher
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      upiPayment
    },
    dispatch
  );
export default withRouter(
  injectStripe(connect(mapStateToProps, mapDispatchToProps)(PaymentRequestForm))
);

