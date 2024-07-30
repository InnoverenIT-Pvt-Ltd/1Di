import React, { useEffect, Suspense, useState } from "react";
import { ElementsConsumer, stripe, PaymentElement } from "@stripe/react-stripe-js";
import { message } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  handleStripeModal,
} from "../../../CustomerAction";
import "./Payment.scss";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

class PaymentCheckoutForm extends React.Component {
 
  handleSubmit = async (event) => {
    // const shopName = this.props.shopName.name;
    // const str = shopName && shopName.replace(/ +/g, "");
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    const { stripe, elements } = this.props;

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make  sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements, 
      
      confirmParams: {   
        return_url: `http://localhost:3000/loading/3433/6565`
      },
    });
    if (result.error) {
      message.error(result.error.message)
      this.props.handleStripeModal(false)
   
        // const value = localStorage.getItem("cartId");
        // const final = JSON.parse(value);
        this.props.makePayment({
                          // stripePaymentId:this.props.stripePaymentId,
                          // paymentId: this.props.paymentId,
                          paymentType: "Stripe",
                          // cartId: final.cartId,
                          strpePaymentInd:false
                        }, 
                                  
        )
      console.log(result.error.message);
    } else {
   
    }
  };

  render() {
    const { stripe } = this.props;
// console.log(this.props.stripePaymentId)
    return (
      <form onSubmit={this.handleSubmit}>
<PaymentElement/>
        <button
          type="submit"
          disabled={!stripe}
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
  // const cartData = props.deliveryInfo.storeCart;
  // const cartSummaryData = cartData && cartData.cartSummary;
  // const finalSubTotalValue = cartSummaryData && cartSummaryData.subTotal;
  // const finalgrandTotalValue = cartSummaryData && cartSummaryData.grandTotal;
  // const shopName = props.shopName.name;
  // const str = shopName && shopName.replace(/ +/g, "");
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <PaymentCheckoutForm
          stripe={stripe}
          elements={elements}
          // paymentId={props.paymentId}
          // stripePaymentId={props.stripePaymentId}
          // shopName={props.shopName}
          // deliveryInfo={props.deliveryInfo}
          addStripeModal={props.addStripeModal}
          handleStripeModal={props.handleStripeModal}
          // finalgrandTotalValue={finalgrandTotalValue}
          // currency={props.shopName.currencyName}
          // str={str}
          // confirmedPayment={props.confirmedPayment}
          //  handleCallBack={handleCallBack}
        />
      )}
    </ElementsConsumer>
  );
}
const mapStateToProps = ({ pass, auth, customer }) => ({
  // paymentDetails: customer.paymentDetails,
  // confirmedPayment: customer.confirmedPayment,
  // clientSecret: pass.passDetails.clientSecret,
  // userDetails: auth.userDetails,
  // tempPassDate: pass.tempPassDate,
  // paymentId: customer.paymentDetails.paymentId,
  // stripePaymentId: customer.paymentDetails.stripePaymentId,
  // shopName: customer.shopName,
  // deliveryInfo: customer.showDeliveryInfo,
  addStripeModal: customer.addStripeModal,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      // makePayment,
      // buyPass
      handleStripeModal,
    },
    dispatch
  );
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(InjectedCheckoutForm)
);
