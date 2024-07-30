import React, { Component } from 'react'
import { Button, message } from "antd";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FlexContainer } from '../../../Components/UI/Layout'
import { Spacer, } from '../../../Components/UI/Elements'

function PaymentRightContent(props){

    // if(!props.cart){
    //     return (
    //         message.error("something went wrong")
    //     )
    // }
    const cartData=props.cart.storeCart;
    const cartSummaryData= cartData && cartData.cartSummary
    const finalSubTotalValue=cartSummaryData && cartSummaryData.subTotal;
    const finalgrandTotalValue=cartSummaryData && cartSummaryData.grandTotal;
    const finalshippingValue=cartSummaryData && cartSummaryData.shippingCharge;

    
        return (
            <>
                <h3>SubTotal</h3>
                <FlexContainer justifyContent="flex-end">
                        <div >
                            <span style={{ color: "#3066BE", fontWeight: "600" }}>
                               {finalSubTotalValue} 
                               {/* {cartData && cartData.currencyName} */}
                            
                            <br/>
                                <span style={{color: " rgba(0, 0, 0, 0.5)" }}></span>
                            </span>
                        </div>
                    </FlexContainer>
                <Spacer  marginTop="1.5em" />
                <h3> VAT</h3>
                <FlexContainer justifyContent="flex-end">
                    <div >
                        <span style={{ color: "#3066BE", fontWeight: "600", }}>
                           {finalshippingValue} 
                           {/* {cartData && cartData.currencyName} */}
                        
                        <br/>
                            <span style={{color: " rgba(0, 0, 0, 0.5)" }}></span>
                        </span>
                    </div>
                </FlexContainer>
                <Spacer  marginTop= "1.5em" />
                <hr />
                <h3> Grand Total</h3>
                <FlexContainer justifyContent="flex-end">
                        <div >
                            <span style={{ color: "#3066BE", fontWeight: "600" }}>
                                {finalgrandTotalValue} 
                               {/* {cartData && cartData.currencyName}  */}
                            
                            <br/>
                                <span style={{color: " rgba(0, 0, 0, 0.5)" }}></span>
                            </span>
                        </div>
                    </FlexContainer>
                <hr />
                <Spacer  marginTop= "1.5em" />
               
            </>
        )
    }

const mapStateToProps = ({ courses, auth }) => ({
    // cart: customer.cart,
    // contactId:customer.productInfo.contactId,
    // shopName:customer.shopName,
    cart:courses.cart
  });
  
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {},
        dispatch
    );


export default connect(mapStateToProps, mapDispatchToProps) (PaymentRightContent);
