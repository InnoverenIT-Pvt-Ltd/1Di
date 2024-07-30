import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Radio, Input, Space, Button } from "antd";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import stripe from "../../../../../Assests/Images/Stripe-Emblem.png";
import Razorpay from "../../../../../Assests/Images/razorpay.png";
import pay from "../../../../../Assests/Images/cashShake.svg";
import { FlexContainer, Spacer } from "../../../../../Components/UI/Elements";
import { addPlaceOrder ,handleStripeModal} from "../../../CustomerAction";
import PaymentModal from "../Payment/PaymentModal"

class PaymentLeftContent extends React.Component {
  state = {
    value: 1,
  };

  onChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  handleAddPlaceOrder = () => {
    const value = localStorage.getItem('cartId')
    const final=JSON.parse(value)
  
  let data={
     
      
      // cartId: final.cartId,
      // mode:this.state.value,
      

      
    }

    this.props.addPlaceOrder(data,final.cartId,{mode:this.state.value});


}

  render() {
    const { value } = this.state;
    return (
      <>
        <br />
        <Radio.Group onChange={this.onChange} value={value}>
          
          <FlexContainer justifyContent="space-between"style={{display:"flex" , alignItems:"center"}}>
          <Radio.Group onChange={this.onChange} value={value}>
            <Radio value={"Stripe"}>
            <div style={{display:"flex", alignItems:"baseline",}}>
           
             
           {/* <div style={{  
               fontWeight:"800",
               fontSize:"1.3em" ,
               color:"blue" 
             }}>
             Stripe
           </div> */}
           <img
                style={{  width:"5rem"}}
                alt="pay"
                src={stripe}
                />
            
             <Button type="primary" 
             // shape="round" 
             style={{ backgroundColor: "#0073c8", marginLeft: "0.62em",borderRadius:"0.3rem"  }} 
             onClick={() => { this.props.handleStripeModal(true); }}>
            Checkout
            </Button>
         
           </div>
           <div>
           <p>
             <h3>Credit and Debit Card payments such as Mastercard, Visa, American Express, iDEAL, Apple Pay, Google Pay, Klarna and much more.</h3>
           </p>
         </div>
      
            </Radio>
            </Radio.Group>
            </FlexContainer>
            <Spacer style={{ marginBottom: "50px" }} />

          <FlexContainer justifyContent="space-between" style={{display:"flex" , alignItems:"center" }}>
          <Radio.Group onChange={this.onChange} value={value}>
            <Radio value={"Cash on Delivery"} >
                <div style={{ alignItems:"baseline", justifyContent:"space-evenly"}}>
              <img
                style={{  width:"4.25em"}}
                alt="pay"
                src={pay}
                />
            Pay on Delivery (Cash)
            <Link to="/shopName/ordersucess">
            <Button
            type="primary"  
            >
              Place Order
            </Button>
          </Link>

            <div>
                <p>
                <h3 style={{marginLeft: "16.25em"}}>pay in cash or pay in per at the time of delivery</h3>
                </p>
            </div>
            </div>
            </Radio>
            <FlexContainer justifyContent="space-between"style={{display:"flex" , alignItems:"center"}}>
          <Radio.Group onChange={this.onChange} value={value}>
            <Radio value={"Razopay"}>
            <div style={{display:"flex", alignItems:"baseline", justifyContent:"space-evenly"}}>
            {/* <div style={{  
               fontWeight:"800",
               fontSize:"1.3em" ,
               color:"blue" 
             }}>
             Razorpay
           </div> */}
            <img
                style={{  width:"5rem"}}
                alt="pay"
                src={Razorpay}
                />
            
             <Button type="primary" 
             // shape="round" 
             style={{ backgroundColor: "#0073c8", marginLeft: "0.62em",borderRadius:"0.3rem"  }} 
            //  onClick={() => { this.props.handleStripeModal(true); }}
             >
            Checkout
            </Button>
            </div>
           <div>
           <p>
             <h3>Credit and Debit Card payments</h3>
           </p>
        
         </div>
            </Radio>
            </Radio.Group>
            </FlexContainer>
            </Radio.Group>
          </FlexContainer>
         
          <br />
          <br />
        </Radio.Group>
        <PaymentModal
        addStripeModal={this.props.addStripeModal}
        handleStripeModal={this.props.handleStripeModal}
        // currency={this.props.shopName.currencyName}
        // total={finalSubTotalValue}
        
      />
      </>
    );
  }
}
const mapStateToProps = ({ customer, auth }) => ({
  // customer: customer.customer,
  // placedOrderData:customer.placedOrderData,
  addStripeModal: customer.addStripeModal,
  // shopName:customer.shopName,
  // placeOrder:customer.placeOrder,
  // deliveryInfo:customer.deliveryInfo,
  // updatingDeliveryInfo:customer.updatingDeliveryInfo,
  // showDeliveryInfo:customer.showDeliveryInfo,
  // linkingProductInfo: customer.linkingProductInfo,
  // productInfo:customer.productInfo,
  //  cartId:customer.productInfo.cartId,
  // cartId: customer.dispatch.length && customer.dispatch[0].cartId || "",

  // userId: auth.userDetails.userId,
  // productId:products.products.productId
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
      {
         addPlaceOrder,
         handleStripeModal
      },
      dispatch
  );


export default connect(mapStateToProps, mapDispatchToProps)(PaymentLeftContent);

