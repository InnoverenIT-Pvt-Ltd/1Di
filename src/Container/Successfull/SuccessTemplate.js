
import React from "react";
import { CheckCircleFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { FlexContainer } from "../../Components/UI/Layout";
import { Button, Card } from "antd";
 import "./Success.scss";
 import FWLogo from "../../images/stwlogo.png";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LogoNew from "../../images/Logo_new.png";
import { base_url } from "../../Config/Auth";
class SuccessTemplate extends React.Component {
  render() {
    console.log(this.props.candidateMessage)
  
  return (
  <>
   
    {/* <div className="oderContainer"> */}
    <div>
        <img
              className="big-logo"
              src={LogoNew}
              style={{ width: 100 }}
              alt="Tekorero logo"
            />
            </div>
    <div class=" flex  flex-col items-center " >
      <CheckCircleFilled style={{ fontSize: "3rem", color: "#3066BE" }} />
      <div class=" flex justify-center" >
      <div class=" text-2xl flex w-2/5 justify-center">{this.props.candidateMessage.message}
    
      </div>
      </div>
      <div class=" flex justify-center mt-4 w-full" >
        <div className="btnTrck">
          <Button
          className="btnTrack"
          // type="primary"
          >
          Contact Us
          </Button>
          {/* </Link> */}
        </div>
        &nbsp;&nbsp;
        <div>
        
    
        <Link to="/">
          <Button 
          className="btnShping"
          type="primary"
          >
            Home 
          </Button>
          </Link>
          </div>
      
      
      </div>
    </div>
   
  {/* </div> */}
</>
  );
}
}

const mapStateToProps = ({ customer, auth ,job}) => ({
  candidateMessage:job.candidateMessage
  // paymentId: customer.paymentDetails.stripePaymentId,
  // shopName:customer.shopName,
  // confirmedPayment:customer.confirmedPayment

});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
      {
        // getShopName
        //  addPlaceOrder
      },
      dispatch
  );




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SuccessTemplate));



