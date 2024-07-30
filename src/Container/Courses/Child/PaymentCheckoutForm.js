import React, { useEffect, Suspense, useState } from "react";
import { ElementsConsumer, CardElement, stripe, PaymentElement } from "@stripe/react-stripe-js";

// import CardSection from "./CardSection";
import { Button, message } from "antd";
import { Link, useHistory } from "react-router-dom";

//  import { injectStripe } from "react-stripe-elements";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
//   getPaymentId,
  handleStripeModal,
//   makePayment,
} from "../CoursesAction";
import "../courses.scss";
// import { base_url } from "../../../../../Config/Auth";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

class PaymentCheckoutForm extends React.Component {
 
//   handleSubmit = async (event) => {
//     const shopName = this.props.shopName.name;
//     const str = shopName && shopName.replace(/ +/g, "");
//     // We don't want to let default form submission happen here,
//     // which would refresh the page.
//     event.preventDefault();

//     const { stripe, elements } = this.props;

//     if (!stripe || !elements) {
//       // Stripe.js has not yet loaded.
//       // Make  sure to disable form submission until Stripe.js has loaded.
//       return;
//     }
//     const result = await stripe.confirmPayment({
//       //`Elements` instance that was used to create the Payment Element
//       elements, 
      
//       confirmParams: {
//         // return_url: `http://localhost:3000/${str}/loading/${this.props.stripePaymentId}/${this.props.paymentId}`
//       },
//     });

//     if (result.error) {
//       message.error(result.error.message)
//       this.props.handleStripeModal(false)
   
//         const value = localStorage.getItem("cartId");
//         const final = JSON.parse(value);
//         this.props.makePayment({
//                           stripePaymentId:this.props.stripePaymentId,
//                           paymentId: this.props.paymentId,
//                           paymentType: "Stripe",
//                           cartId: final.cartId,
//                           strpePaymentInd:false
//                         }, 
                                  
//         )
//       console.log(result.error.message);
//     } else {
   
//     }
//   };

  render() {
   const { stripe } = this.props;
// console.log(this.props.stripePaymentId)
    return (
      <form 
    //   onSubmit={this.handleSubmit}
      >
<PaymentElement/>
        <button
          type="submit"
        //   disabled={!stripe}
          className="StripePayButton"
        >
          Pay 
          {/* {`${this.props.finalgrandTotalValue} ${this.props.currency}`} */}
        </button>
        {/* </Link> */}
      </form>
    );
  }
}

function InjectedCheckoutForm(props) {
//   const cartData = props.deliveryInfo.storeCart;
//   const cartSummaryData = cartData && cartData.cartSummary;
//   const finalSubTotalValue = cartSummaryData && cartSummaryData.subTotal;
//   const finalgrandTotalValue = cartSummaryData && cartSummaryData.grandTotal;
//   const shopName = props.shopName.name;
//   const str = shopName && shopName.replace(/ +/g, "");
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <PaymentCheckoutForm
          stripe={stripe}
         elements={elements}
        //   paymentId={props.paymentId}
        //   stripePaymentId={props.stripePaymentId}
        //   shopName={props.shopName}
        //   deliveryInfo={props.deliveryInfo}
          addStripeModal={props.addStripeModal}
          handleStripeModal={props.handleStripeModal}
        //   finalgrandTotalValue={finalgrandTotalValue}
        //   currency={props.shopName.currencyName}
        //   str={str}
        //   confirmedPayment={props.confirmedPayment}
          //  handleCallBack={handleCallBack}
        />
      )}
    </ElementsConsumer>
  );
}
const mapStateToProps = ({ pass, auth, courses }) => ({
//   paymentDetails: customer.paymentDetails,
//   confirmedPayment: customer.confirmedPayment,
  // clientSecret: pass.passDetails.clientSecret,
  // userDetails: auth.userDetails,
  // tempPassDate: pass.tempPassDate,
//   paymentId: customer.paymentDetails.paymentId,
//   stripePaymentId: customer.paymentDetails.stripePaymentId,
//   shopName: customer.shopName,
//   deliveryInfo: customer.showDeliveryInfo,
  addStripeModal: courses.addStripeModal,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
    //   makePayment,
    //   // buyPass
    //   getPaymentId,
      handleStripeModal,
    },
    dispatch
  );
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(InjectedCheckoutForm)
);
