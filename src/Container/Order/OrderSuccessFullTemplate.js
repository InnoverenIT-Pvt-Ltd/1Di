import React,{useState} from "react";
import { CheckCircleFilled } from "@ant-design/icons";
import { Link,withRouter } from "react-router-dom";
import { FlexContainer } from "../../Components/UI/Layout";
import { Button } from "antd";
import "./OrderTemplate.scss";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function OrderSuccessfull(props) {

// if(props.addingCODinventory){
//  return <h2>Loading...</h2>
// }

  return (
<>

<div className="oderContainer">
    <div className="box center">
      <CheckCircleFilled style={{ fontSize: "6.6875em", color: "#3066BE" }} />
      <h1>Your Order is Successfull</h1>
      <h3>
      You will receive a confirmation message shortly. For More Details check
          order status on your whatsapp
      </h3>
      <FlexContainer justifyContent="center" style={{ width: "100%" }}>
        <div >
        <Link to="/shopName/track">
          <Button
          // className="btnTrack"
          type="primary" 
          >
            Track Order
          </Button>
          </Link>
        </div>
        &nbsp;&nbsp;
        
        <Link to="/">
          <Button 
          // className="btnShping"
          type="primary"
          >
            Continue Shopping
          </Button>
          </Link>
      
      
      </FlexContainer>
    </div>
  </div>

</>

   
  );
}
const mapStateToProps = ({ inventory, auth }) => ({
  // invencartItem: inventory.invencartItem,
  // addingCODinventory:inventory.addingCODinventory,
  // codInventryorDr:inventory.codInventryorDr,
  // placeOrder:inventory.placeOrder,
  // deliveryInfo:inventory.deliveryInfo,
  // updatingDeliveryInfo:inventory.updatingDeliveryInfo,
  // showDeliveryInfo:inventory.showDeliveryInfo,
  // linkingProductInfo: inventory.linkingProductInfo,
  // productInfo:inventory.productInfo,
  //  cartId:inventory.productInfo.cartId,
  // cartId: inventory.dispatch.length && inventory.dispatch[0].cartId || "",

  userId: auth.userDetails.userId,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
      {
      
      },
      dispatch
  );
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderSuccessfull));
