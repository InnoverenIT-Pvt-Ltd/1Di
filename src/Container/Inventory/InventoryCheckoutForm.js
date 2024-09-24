import React, { useEffect, Suspense, useState } from "react";
import { ElementsConsumer, stripe, PaymentElement } from "@stripe/react-stripe-js";
import { message } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    handleInventoryStripeModal,
    makeInventoryPayment
} from "./InventoryAction";
import "./Inventory.scss";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

class InventoryCheckoutForm extends React.Component {
 
  handleSubmit = async (event) => {
    event.preventDefault();
    const { stripe, elements } = this.props;

    if (!stripe || !elements) {

      return;
    }
    const result = await stripe.confirmPayment({
      elements, 
      
      confirmParams: {
        // return_url: `https://shoppr.pro/${str}/loading/${this.props.stripePaymentId}/${this.props.paymentId}` //Production Url 
        //  return_url: `http://b2b.1di.ca/DRB/invenloading/${this.props.stripePaymentId}/${this.props.paymentId}` //Korero
        // return_url: `http://localhost:3001/DRB/invenloading/${this.props.stripePaymentId}/${this.props.paymentId}` // localhostD
      },
    });

    if (result.error) {
      message.error(result.error.message)
      this.props.handleInventoryStripeModal(false)
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
           {`100`} {"EUR"}
          {/* {`${this.props.finalgrandTotalValue} ${this.props.currency}`} {this.props.invencartItem.cartSummary && this.props.invencartItem.cartSummary.grandTotal}*/}
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
        <InventoryCheckoutForm
          stripe={stripe}
          elements={elements}
          paymentId={props.paymentId}
          stripePaymentId={props.stripePaymentId}
          // deliveryInfo={props.deliveryInfo}
          addiNVEStripeModal={props.addiNVEStripeModal}
          handleInventoryStripeModal={props.handleInventoryStripeModal}
          finalgrandTotalValue={"100"}
          // currency={props.shopName.currencyName}
          confirmedInvnPayment={props.confirmedInvnPayment}
          currency={"EUR"}
          // finalgrandTotalValue={this.props.invencartItem.cartSummary && this.props.invencartItem.cartSummary.grandTotal}
        />
      )}
    </ElementsConsumer>
  );
}
const mapStateToProps = ({ pass, auth, inventory }) => ({
  confirmedInvnPayment: inventory.confirmedInvnPayment,
  // clientSecret: pass.passDetails.clientSecret,
  // userDetails: auth.userDetails,
  // tempPassDate: pass.tempPassDate,
  paymentId: inventory.paymentInventoryDetails.paymentId,
  stripePaymentId: inventory.paymentInventoryDetails.stripePaymentId,
  // shopName: inventory.shopName,
  // deliveryInfo: inventory.showDeliveryInfo,
  addiNVEStripeModal: inventory.addiNVEStripeModal,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
        makeInventoryPayment,
      // buyPass
      handleInventoryStripeModal,
    },
    dispatch
  );
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(InjectedCheckoutForm)
);
