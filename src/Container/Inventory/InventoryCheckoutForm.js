import React, { useEffect, Suspense, useState } from "react";
import { ElementsConsumer, stripe, PaymentElement } from "@stripe/react-stripe-js";
import { message } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    handleInventoryStripeModal
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
    const mapamount=this.props.invencartItem.cartSummary.grandTotal *100;
    const fixmapamount= mapamount.toFixed(2);
    const amount=fixmapamount
    const result = await stripe.confirmPayment({
      elements, 
      
      confirmParams: {
         return_url: `http://b2b.1di.ca.s3-website.us-east-2.amazonaws.com/DRB/invenloading/${this.props.stripePaymentId}/${this.props.paymentId}/${amount}` //1Di
        // return_url: `http://localhost:3000/DRB/invenloading/${this.props.stripePaymentId}/${this.props.paymentId}/${amount}` // localhostD
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
console.log(this.props.invencartItem.cartSummary.grandTotal)

    return (
      <form onSubmit={this.handleSubmit}>
<PaymentElement/>
        <button
          type="submit"
          disabled={!stripe}
          className="StripePayButton"
        >
            
          {`Pay ${this.props.invencartItem.cartSummary.grandTotal.toFixed(2)} ${"EUR"}`}
          {/* {`${this.props.finalgrandTotalValue} ${this.props.currency}`} {this.props.invencartItem.cartSummary && this.props.invencartItem.cartSummary.grandTotal}*/}
        </button>
        {/* </Link> */}
      </form>
    );
  }
}

function InjectedCheckoutForm(props) {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <InventoryCheckoutForm
          stripe={stripe}
          elements={elements}
          paymentId={props.paymentId}
          stripePaymentId={props.stripePaymentId}
          addiNVEStripeModal={props.addiNVEStripeModal}
          handleInventoryStripeModal={props.handleInventoryStripeModal}
          finalgrandTotalValue={"100"}
          invencartItem={props.invencartItem}
          confirmedInvnPayment={props.confirmedInvnPayment}
          currency={"EUR"}
       
        />
      )}
    </ElementsConsumer>
  );
}
const mapStateToProps = ({ pass, auth, inventory }) => ({
  confirmedInvnPayment: inventory.confirmedInvnPayment,
  paymentId: inventory.paymentInventoryDetails.paymentId,
  stripePaymentId: inventory.paymentInventoryDetails.stripePaymentId,
  addiNVEStripeModal: inventory.addiNVEStripeModal,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      // buyPass
      handleInventoryStripeModal,
    },
    dispatch
  );
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(InjectedCheckoutForm)
);
