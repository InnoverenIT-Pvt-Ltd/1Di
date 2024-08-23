import React, {useState,useEffect} from "react";
// import { Elements } from "react-stripe-elements";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { withRouter } from "react-router-dom";
 
import PaymentCheckoutForm from "../Child/PaymentCheckoutForm";
//production pk
// const stripePromise = loadStripe('pk_live_51LAhLPKXR87JGQ2mbvZttPANWPbRh9p8chyzzqWS87BAykmpgunwMyR6cAWim4CmOI8Ph6qyKMUZXOvrsqWQrJG400VZPXiFaV');
//Uat pk
 const stripePromise = loadStripe('pk_test_51PqCWlIMpvH6thpXhGRrnLxBQcEJJ0yl9YvCSzFZy8hX1Q1XIdMXM8fM1ar43dlv9uC4IJPkWIsP7dimrUklQMyc007c8UddvV');

function MyStoreCheckout(props) {
  const cartData = props.cart.storeCart;
  const cartSummaryData = cartData && cartData.cartSummary;
  const finalSubTotalValue = cartSummaryData && cartSummaryData.subTotal;
  const finalgrandTotalValue = cartSummaryData && cartSummaryData.grandTotal;
  const multiplyValue=finalgrandTotalValue*100

   const options={clientSecret:props.paymentDetails.clientSecret}
//    console.log("stt",options)
    return (
      <>
       {props.paymentDetails.clientSecret &&  
      <Elements stripe={stripePromise} 
      options={options}
      >
      <PaymentCheckoutForm 
        handleStripeModal={props.handleStripeModal}
      />
    </Elements>
     } 
    </>
    );
  
}
const mapStateToProps = ({ courses, auth }) => ({
   cart: courses.cart,
//   contactId:customer.productInfo.contactId,
//   shopName:customer.shopName,
//   deliveryInfo:customer.deliveryInfo,
//   paymentDetails:customer.paymentDetails
paymentDetails:courses.paymentDetails
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
      {

      },
      dispatch
  );

  export default withRouter(connect(mapStateToProps, mapDispatchToProps) (MyStoreCheckout));