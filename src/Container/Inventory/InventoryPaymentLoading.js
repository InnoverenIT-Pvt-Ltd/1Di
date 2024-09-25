
import React, { useEffect } from "react";
import "../../Main/MainApp.scss";
import {makeInventoryPayment,getInventoryCartItems} from "./InventoryAction";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import {message } from "antd";
// import { useSearchParams } from 'react-router-dom';

function InventoryPaymentLoading(props) {

  useEffect(()=>{
 props.getInventoryCartItems(props.userId);
  },[]);

  function handleCallback (status, data,data1) {
    if (status === "success") {
        message.success("Payment Successfull");
       props.history.push(`/shopName/invOrdersuccess`);
        } 
        else if(status === 'status failed'){
          message.error("Payment Failed");
          // props.history.push(`/shopName/invopayment`);
        }
        else {
          message.error("Payment Failed");
        }
      };       
    useEffect(()=>{
      const location =window.location.href
      console.log(location);
      const statusData = location.split("&")[2];
      const finalStatus = statusData.split("=")[1];
      console.log(finalStatus);
      const orderPhoneId = localStorage.getItem("orderPhoneId");
     props.makeInventoryPayment
        ({
          amount:props.match.params.amount,
                          stripePaymentId:props.match.params.stripePaymentId,
                          paymentId: props.match.params.paymentId,
                          paymentType: "Stripe",
                          cartId: props.invencartItem.orderPhoneId ? props.invencartItem.orderPhoneId : orderPhoneId,
                          stripePaymentInd:finalStatus=== "failed" ? false :true,
                          status: finalStatus,
                          userId:props.userId,
                          quotationId: props.invencartItem.orderPhoneId ? props.invencartItem.orderPhoneId : orderPhoneId,
                        },
                        handleCallback
                      ); 
      
    },[]);

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
  const mapStateToProps = ({ inventory, auth }) => ({
    paymentId: inventory.paymentInventoryDetails.paymentId,
    stripePaymentId:inventory.paymentInventoryDetails.stripePaymentId,
    confirmedInvnPayment:inventory.confirmedInvnPayment,
    invencartItem: inventory.invencartItem,
    userId: auth.userDetails.userId,
    fetchingInventoryCartItems:inventory.fetchingInventoryCartItems,
  
  });
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            makeInventoryPayment,
            getInventoryCartItems
        },
        dispatch
    );
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InventoryPaymentLoading));