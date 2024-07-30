import React, {useState,useEffect} from "react";
// import { Elements } from "react-stripe-elements";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { withRouter } from "react-router-dom";
import {getPaymentId} from "../../../CustomerAction";
import PaymentCheckoutForm from "../Payment/PaymentCheckoutForm";

//production pk
// const stripePromise = loadStripe('pk_live_51LAhLPKXR87JGQ2mbvZttPANWPbRh9p8chyzzqWS87BAykmpgunwMyR6cAWim4CmOI8Ph6qyKMUZXOvrsqWQrJG400VZPXiFaV');
//Uat pk
//  const stripePromise = loadStripe('pk_test_51LAhLPKXR87JGQ2mrDgfc3XSxcxCrDFkWbrhqMHwhDNOp6XZS3murGpQi9Z1UWxMgkj4LSkHa4YKuc4LiW1hD7Fq00LPAwIPu8');
const stripePromise = loadStripe('pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3');

function MyStoreCheckout(props) {
  // const cartData = props.deliveryInfo.storeCart;
  // const cartSummaryData = cartData && cartData.cartSummary;
  // const finalSubTotalValue = cartSummaryData && cartSummaryData.subTotal;
  // const finalgrandTotalValue = cartSummaryData && cartSummaryData.grandTotal;
  // const multiplyValue=finalgrandTotalValue*100
  // useEffect(() => {
  //   const value = localStorage.getItem("cartId");
  //   const final = JSON.parse(value);
  //   let data = {
  //     //   productName:this.props.customer.length && this.props.customer[0].name || "",

  //     cartId: final.cartId,
  //     currency: props.shopName.currencyName,
  //     amount:multiplyValue,
  //   };

  //   props.getPaymentId(data);
  // }, []);
  //  const options={clientSecret:props.paymentDetails.clientSecret}
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };
    return (
      <>
      {/* {props.paymentDetails.clientSecret &&  */}
      <Elements stripe={stripePromise} 
      options={options}
      >
      <PaymentCheckoutForm 
        handleStripeModal={props.handleStripeModal}
      />
    </Elements>
    {/* } */}
    </>
    );
  
}
const mapStateToProps = ({ customer, auth }) => ({
  // cart: customer.cart,
  // contactId:customer.productInfo.contactId,
  // shopName:customer.shopName,
  // deliveryInfo:customer.deliveryInfo,
  // paymentDetails:customer.paymentDetails
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
      {
        getPaymentId
      },
      dispatch
  );

  export default withRouter(connect(mapStateToProps, mapDispatchToProps) (MyStoreCheckout));