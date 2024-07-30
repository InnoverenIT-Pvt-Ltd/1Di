import React from "react";
import { CheckCircleFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { FlexContainer } from "../../Components/UI/Layout";
import { Button } from "antd";

import "./OrderTemplate.scss";

function OrderCancelTemplate(props) {
  return (
    <div className="oderContainer">
      <div className="box center">
        <CheckCircleFilled style={{ fontSize: "6.6875em", color: " #3066BE" }} />
        <h1>Cancellation Confirmed</h1>
        <p>
          Your Order #1111 from Raj Fruits Supplier has been Successfully
          Cancelled.
        </p>
        <FlexContainer justifyContent="center" style={{ width: "100%" }}>
          {/* <Link to="/shopName/ordermaincontent">
            <Button
             className="btnTrack"
            // type="primary"
            >
              Check Status
            </Button>
            </Link>
          &nbsp;&nbsp; */}

          
          <Link to="/shopName/home">
            <Button 
             className="btnShping"
            type="primary">Continue Shopping</Button>
            </Link>
           
          
          
        </FlexContainer>
      </div>
    </div>
  );
}

export default OrderCancelTemplate;
