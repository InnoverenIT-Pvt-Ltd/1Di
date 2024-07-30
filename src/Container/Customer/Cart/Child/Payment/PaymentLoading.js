
import React, { useEffect } from "react";
import "../../../../Main/MainApp.scss";
import {makePayment} from "../../../CustomerAction";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import {message } from "antd";
// import { useSearchParams } from 'react-router-dom';

function PaymentLoading(props) {
  function handleCallback (status, data,data1) {
    if (status === "success") {
      console.log("",status, data,data1)
      const pic = data1.replace(/ +/g, "");
      console.log("str",pic)
        message.success("Payment Successfull");
       props.history.push(`/${pic}/ordersucess/${data}`);
        } 
        else if(status === 'status failed'){
          console.log("ddsh",data)
          const shnm=data.replace(/ +/g, "");
          console.log("drbpay",shnm)
          message.error("Payment Failed");
          props.history.push(`/${shnm}/payment`);}
        else {
          message.error("Payment Failed");
        }
      };       
      // const [searchParams] = useSearchParams();
    useEffect(()=>{
      const location =window.location.href
      console.log(location);
      const statusData = location.split("&")[2];
      const finalStatus = statusData.split("=")[1];
      console.log(finalStatus);
        const value = localStorage.getItem("cartId");
        const final = JSON.parse(value);
        props.makePayment({
                          stripePaymentId:props.match.params.stripePaymentId,
                          paymentId: props.match.params.paymentId,
                          paymentType: "Stripe",
                          cartId: final.cartId,
                          strpePaymentInd:finalStatus=== "failed" ? false :true,
                        },
                        handleCallback
        );
        //  fetch(`${base_url}/Stripe/makepaymentNewCard`, {
        //         method: "POST",
        //         headers: { "Content-Type": "application/json" },
        
        //         body: JSON.stringify({
        //           // paymentMethodId: result.paymentMethod.id,
        //           paymentId: this.props.match.params.paymentId,
        //           paymentType: "Stripe",
        //           cartId: final.cartId,
        //         }),
        //       });
    },[])
    console.log("payment1",props.paymentDetails)
  //  const shnm=props.confirmedPayment.name
  //  console.log("payment2",shnm)
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "4.68em 1.25em",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "400px",
            // height: "400px",
            padding: "0.31em 1.25em",
            /* border-radius: "50%"; */
            // boxShadow: " 0 0.81em 1.68em -0.31em rgba(50, 50, 93, 0.25)",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // margin-bottom: 0.62em;
            // margin-top: 0.62em;
          }}
        >
                     <div>
            <div className="animateContainer">
              <div className="circleCell" />
              <div className="circleCell" />
              <div className="circleCell" />
            </div>
          </div>
          We are now processing your payment. Almost done !
        </div>
      </div>
    </>
  );
}
  const mapStateToProps = ({ customer, auth }) => ({
    paymentId: customer.paymentDetails.paymentId,
    stripePaymentId:customer.paymentDetails.stripePaymentId,
    shopName:customer.shopName,
    confirmedPayment:customer.confirmedPayment,

  
  });
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            makePayment
        },
        dispatch
    );
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PaymentLoading));