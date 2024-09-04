import React, {useState,useEffect} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe,Stripe} from '@stripe/stripe-js';
import { withRouter } from "react-router-dom";
import {addInventoryPaymentId} from "./InventoryAction";
import InventoryCheckoutForm from "./InventoryCheckoutForm";
import { BundleLoader } from "../../Components/Placeholder";

//production pk
// const stripePromise = loadStripe('pk_live_51LAhLPKXR87JGQ2mbvZttPANWPbRh9p8chyzzqWS87BAykmpgunwMyR6cAWim4CmOI8Ph6qyKMUZXOvrsqWQrJG400VZPXiFaV');
// const stripePromise = loadStripe('pk_test_51MHMyeLUPUCPutTHmfURN9aHilVqsmPDU8gQIt2nndD3iRrOwAobmFh567r34xIjzqSRexw6muNUuPGgYxBOZv1J00WHxEDkln');
// const stripePromise = loadStripe("pk_test_51LRswhSFbuOpicuJq6ti4dl3PQIJuWGBSkYNfdO7BUNuLNOJxNhJwQBZ0C3mII8vqqZJirp1ZS3JAnsYiobWdTI1009cMzEibq");
const stripePromise = loadStripe("pk_test_51PqCWlIMpvH6thpXhGRrnLxBQcEJJ0yl9YvCSzFZy8hX1Q1XIdMXM8fM1ar43dlv9uC4IJPkWIsP7dimrUklQMyc007c8UddvV");
                                  

function InventoryCheckout(props) {
  // const cartData = props.deliveryInfo.storeCart;
  // const cartSummaryData = cartData && cartData.cartSummary;
  // const finalSubTotalValue = cartSummaryData && cartSummaryData.subTotal;
  // const finalgrandTotalValue = cartSummaryData && cartSummaryData.grandTotal;
  // const multiplyValue=finalgrandTotalValue*100

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