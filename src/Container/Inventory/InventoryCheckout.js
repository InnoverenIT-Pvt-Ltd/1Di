import React, {useState,useEffect} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe,Stripe} from '@stripe/stripe-js';
import { withRouter } from "react-router-dom";
import {addInventoryPaymentId} from "./InventoryAction";
import InventoryCheckoutForm from "./InventoryCheckoutForm";
import { BundleLoader } from "../../Components/Placeholder";

//pk
const stripePromise = loadStripe("pk_test_51Pg4N4F9t5MfjsIZrPxRRnon7ENfinC1pcSx6aRw0prlk3qODgIAgXcRXel0NaoI38idFEUDI21QcrL0eNh8Sndf00t7yiYS6E");
                                  

function InventoryCheckout(props) {

  useEffect(() => {
    let data = {
      cartId: props.invencartItem.orderPhoneId ? props.invencartItem.orderPhoneId :null,
      currency: "EUR",
      // amount:props.invencartItem.cartSummary && props.invencartItem.cartSummary.grandTotal,
      amount:"100",
    };

    props.addInventoryPaymentId(data);
  }, []);

  // if (props.addingInventoryPaymentId){
  //   return <BundleLoader/>
  // }
   const options={clientSecret:props.paymentInventoryDetails.clientSecret}
  // const options = {clientSecret:'sk_test_tR3PYbcVNZZ796tH88S4VQ2u'}
  // const options1 = {clientSecret:'sk_test_51LRswhSFbuOpicuJ3F8q6G1nrPfecPZqWyoP2ZPEAkXjiwmaSXymkqg2j3SsMK0nMOOURK7UvRWeRvYp21KMjy7200Cd0l13lU'}
  
  console.log("clt",options);

    return (
      <>
      {props.paymentInventoryDetails.clientSecret && 
      <Elements stripe={stripePromise} 
      options={options}
      >
      <InventoryCheckoutForm 
        handleInventoryStripeModal={props.handleInventoryStripeModal}
      />
    </Elements>
 } 
    </>
    );
  
}
const mapStateToProps = ({ inventory, auth }) => ({
  addingInventoryPaymentId: inventory.addingInventoryPaymentId,
  // contactId:inventory.productInfo.contactId,
  // shopName:inventory.shopName,
  // deliveryInfo:inventory.deliveryInfo,
  paymentInventoryDetails:inventory.paymentInventoryDetails
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
      {
        addInventoryPaymentId
      },
      dispatch
  );

  export default withRouter(connect(mapStateToProps, mapDispatchToProps) (InventoryCheckout));