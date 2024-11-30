import React,{useState} from "react";
import { CheckCircleFilled } from "@ant-design/icons";
import { Link,withRouter } from "react-router-dom";
import { FlexContainer } from "../../Components/UI/Layout";
import { Button } from "antd";
import "../Order/OrderTemplate.scss";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function Showmessage(props) {
  const responseData = props.location.state?.responseData || {};
  const orderId = responseData.orderId || "";
if(props.addingCODinventory){
 return <h2>Loading...</h2>
}

  return (
<>
{/* {props.responseData.lengh === 0 ? <h2>Payment Error</h2>: */}
<div className="flex flex-col  items-center justify-center h-[50vh] ">
    
      <CheckCircleFilled style={{ fontSize: "6.6875em", color: "#3066BE" }} />
      <div class = "text-lg">
         Order placed successfully  &nbsp;
        {orderId}
      </div>
      <h3>
      You will receive a confirmation message shortly. For More Details check
          order status on your whatsapp
      </h3>
      <div className=" mt-4 flex justify-center items-center w-[100%]" >
        <div >
        <Link to="/orderinprogree">
          <Button
          // className="btnTrack"
          type="primary" 
          >
            Order Status
          </Button>
          </Link>
        </div>
        &nbsp;&nbsp;
        
        <Link to="/inventory">
          <Button 
          // className="btnShping"
          type="primary"
          >
            Continue Shopping
          </Button>
          </Link>
      
      
      </div>
    
  </div>
{/* } */}
</>

   
  );
}
const mapStateToProps = ({ inventory, auth }) => ({
  invencartItem: inventory.invencartItem,
  addingCODinventory:inventory.addingCODinventory,
  codInventryorDr:inventory.codInventryorDr,
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Showmessage));
