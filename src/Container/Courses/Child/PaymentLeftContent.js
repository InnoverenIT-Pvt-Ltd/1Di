import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
 import PaymentModal from "../Child/PaymentModal"
import { bindActionCreators } from 'redux';
import {handleStripeModal} from "../CoursesAction"
import { Radio, Input, Space, Button } from "antd";
// import COD from "../../../../../Assets/Images/cod.png";
// import stripe1 from "../../../../../Assets/Images/stripe.png";
// import pay from "../../../../../Assets/Images/Payment.png";
import { FlexContainer } from "../../../Components/UI/Layout";
import { Spacer } from "../../../Components/UI/Elements";

// import { addPlaceOrder ,handleStripeModal} from "../../../CustomerAction";

class PaymentLeftContent extends React.Component {
  state = {
    value: 1,
  };

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
 

  handleAddPlaceOrder = () => {
    const value = localStorage.getItem('cartId')
    const final=JSON.parse(value)
  
  let data={
     
      
      cartId: final.cartId,
      mode:this.state.value,
      
      
      
    }


 
  

}

  render() {
    const {
      handleStripeModal,
      addStripeModal,
     
    } = this.props;
    const cartData=this.props.cart.storeCart;
    const cartSummaryData= cartData && cartData.cartSummary
    const finalSubTotalValue=cartSummaryData && cartSummaryData.subTotal;
    const finalgrandTotalValue=cartSummaryData && cartSummaryData.grandTotal;
    // const countryData=this.props.showDeliveryInfo.storeCart
    // const cartShippingData= countryData && countryData.shippingAddress && countryData.shippingAddress.countryName;
  
    // const shopName= this.props.shopName.name
    // const str = shopName&&shopName.replace(/ +/g, "");
    const { value } = this.state;
    // const { value } = this.state;
    // if (this.props.updatingDeliveryInfo){
    //   return <p>Loading</p>
    // }
    return (
      <>
       <br />
        <Radio.Group onChange={this.onChange} value={value}>
       
          
          <div class="flex justify-between items-baseline">
          <Radio.Group onChange={this.onChange} value={value}>
            <Radio value={"Stripe"} checked={true}>
            <div class="flex">
             
                {/* <img src={stripe1} alt="stripe1" style={{
                   width:"5.25em",
                   }} /> */} <div style={{  
                  fontWeight:"800",
                  fontSize:"1.3em" ,
                  color:"blue" 
                }}>
                Stripe
              </div>
              
               
                <Button type="primary" 
                // shape="round" 
                style={{ backgroundColor: "#0073c8", marginLeft: "0.62em",borderRadius:"0.3rem"  }} 
                 onClick={() => { handleStripeModal(true); }}
                >
               Checkout
               </Button>
            
              </div>
              <div>
              <p>
                <h3>Credit and Debit Card payments such as Mastercard, Visa, American Express, iDEAL, Apple Pay, Google Pay, Klarna and much more.</h3>
              </p>
            </div>
            </Radio>

            <Radio value={"Stripe"} checked={true}>
            <div class="flex">
             
                {/* <img src={stripe1} alt="stripe1" style={{
                   width:"5.25em",
                   }} /> */} <div style={{  
                  fontWeight:"800",
                  fontSize:"1.3em" ,
                  color:"blue" 
                }}>
                COD
              </div>
              
               
                <Button type="primary" 
                // shape="round" 
                style={{ backgroundColor: "#0073c8", marginLeft: "0.62em",borderRadius:"0.3rem"  }} 
                onClick={()=>this.handleAddPlaceOrder()}
                //  onClick={() => { handleStripeModal(true); }}
                >
               Checkout
               </Button>
            
              </div>
              <div>
            
            </div>
            </Radio>
            </Radio.Group>
            </div>
           
            <Spacer style={{ marginBottom: "6em" }} />

           <FlexContainer justifyContent="space-between"style={{display:"flex" , alignItems:"center" }}> 
        
          </FlexContainer>
         
          <FlexContainer justifyContent="flex-end">
          {/* <Link to="/shopName/ordersucess"> */}
        
          </FlexContainer>
          <br />
          <br />
        </Radio.Group>
      
       
        <PaymentModal
        addStripeModal={addStripeModal}
        handleStripeModal={handleStripeModal}
        // currency={this.props.shopName.currencyName}
        total={finalSubTotalValue}
        
      />
      </>
      
    );
  
  }
 


}

const mapStateToProps = ({ courses, auth }) => ({

//   placedOrderData:customer.placedOrderData,
  addStripeModal: courses.addStripeModal,
  cart:courses.cart,
//   shopName:customer.shopName,
//   placeOrder:customer.placeOrder,
//   deliveryInfo:customer.deliveryInfo,
//   updatingDeliveryInfo:customer.updatingDeliveryInfo,
//   showDeliveryInfo:customer.showDeliveryInfo,
  
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
      {
        //  addPlaceOrder,
         handleStripeModal,
       
      },
      dispatch
  );


export default connect(mapStateToProps, mapDispatchToProps)(PaymentLeftContent);
