import React,{useState} from "react";
import { CheckCircleFilled } from "@ant-design/icons";
import { Link,withRouter } from "react-router-dom";
import { FlexContainer } from "../../Components/UI/Layout";
import { Button } from "antd";
import "../Order/OrderTemplate.scss";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function InventoryQuoatationSuccess(props) {

// if(props.generatingQuotation){
//  return <h2>Loading...</h2>
// }

  return (
<>
{/* {props.generatedQuotation.lengh === 0 ? <h2>Error</h2>: */}
<div className="flex flex-col  items-center justify-center h-[50vh] ">
    
      <CheckCircleFilled style={{ fontSize: "6.6875em", color: "#3066BE" }} />
      <div class = "text-lg">
    Quotation generated successfully  &nbsp;
        {props.generatedQuotation.orderId || ""}
      </div>
      <h3>
      You will receive a confirmation message shortly. For more details click on Quotation tab.
      </h3>
      <div className=" mt-4 flex justify-center items-center w-[100%]" >
        <div >
        <Link to="/quoatation">
          <Button
          // className="btnTrack"
          type="primary" 
          >
            Go to Quotation
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

</>

   
  );
}
const mapStateToProps = ({ inventory, auth }) => ({
  invencartItem: inventory.invencartItem,
  generatingQuotation:inventory.generatingQuotation,
  generatedQuotation:inventory.generatedQuotation,
  userId: auth.userDetails.userId,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
      {
      
      },
      dispatch
  );
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InventoryQuoatationSuccess));
