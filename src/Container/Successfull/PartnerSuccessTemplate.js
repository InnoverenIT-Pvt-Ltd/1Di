
import React from "react";
import { CheckCircleFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { FlexContainer } from "../../Components/UI/Layout";
import { Button, Card } from "antd";
 import "./Success.scss";
 import LogoNew from "../../images/Logo_new.png";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { base_url } from "../../Config/Auth";
class PartnerSuccessTemplate extends React.Component {
  render() {
    console.log(this.props.partnerMessage)
  
  return (
  <>
   
    {/* <div className="oderContainer"> */}
    {/* <div class=" w-full">
    <img
          className="big-logo max-sm:w-w130 h-auto md:h-h150 mr-96 w-w200 "
          src={FWLogo}
         
          alt="Tekorero logo"
        />
        </div> */}
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
      <div class=" text-2xl flex w-full justify-center">{this.props.partnerMessage.message}
    
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
  partnerMessage:job.partnerMessage
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




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PartnerSuccessTemplate));



