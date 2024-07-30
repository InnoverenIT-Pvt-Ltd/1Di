// import React from "react";
// import {
//   CardNumberElement,
//   CardExpiryElement,
//   CardCVCElement,
//   PostalCodeElement,
//   CardElement,
// } from "react-stripe-elements";
// import "./Stripe.scss";
// import { Checkbox } from "antd";
// //  import PaymentRequestForm from "../Payment/PaymentRequestForm";

// class CardSection extends React.Component {
//   render() {
//     return (
//       <div>
//         {/* <PaymentRequestForm /> */}
//         <br />

//         <label>
//           Card details
//          <CardElement style={{ base: { fontSize: "1.25em" } }} /> 
//         </label>
//         {/* 
//         <Checkbox
//           checked={this.props.rememberMe}
//           onChange={this.props.handleRememberMeChange}
//         >
//           <label>Remember Me</label>
//         </Checkbox> */}
//       </div>
//     );
//   }
// }

// export default CardSection;

import React from 'react';
import {CardElement} from '@stripe/react-stripe-js';
// import './Styles.css'
import "./Stripe.scss";
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};
function CardSection() {
  return (
    <label>
      Card details
      <CardElement options={CARD_ELEMENT_OPTIONS} />
    </label>
  );
};
export default CardSection;
