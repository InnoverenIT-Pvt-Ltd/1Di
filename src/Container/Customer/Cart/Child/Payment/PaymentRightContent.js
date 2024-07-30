import React, { Component } from 'react'
import { Spacer,FlexContainer } from '../../../../../Components/UI/Elements'

function PaymentRightContent(props){

    // const cartData=props.cart.storeCart;
    // const cartSummaryData= cartData && cartData.cartSummary
    // const finalSubTotalValue=cartSummaryData && cartSummaryData.subTotal;
    // const finalgrandTotalValue=cartSummaryData && cartSummaryData.grandTotal;
    // const finalshippingValue=cartSummaryData && cartSummaryData.shippingCharge;

   
        return (
            <>
            <h3>SubTotal</h3>
            <FlexContainer justifyContent="flex-end">
                    <div >
                        <span style={{ color: "#3066BE", fontWeight: "600" }}>
                           {/* {finalSubTotalValue} */}
                        
                        <br/>
                            <span style={{color: " rgba(0, 0, 0, 0.5)" }}></span>
                        </span>
                    </div>
                </FlexContainer>
            <Spacer  marginTop="1.5em" />
            <h3> Delivery Fee</h3>
            <FlexContainer justifyContent="flex-end">
                <div >
                    <span style={{ color: "#3066BE", fontWeight: "600",fontSize:"1.3em" }}>
                       {/* {finalshippingValue}
                     */}
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
                           {/* {finalgrandTotalValue} */}
                        
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



export default PaymentRightContent;
