import React, { Component } from 'react'
import { Spacer,FlexContainer } from '../../Components/UI/Elements'

function InvoPaymentRight(props){

    // const cartData=props.cart.storeCart;
    // const cartSummaryData= cartData && cartData.cartSummary
    // const finalSubTotalValue=cartSummaryData && cartSummaryData.subTotal;
    // const finalgrandTotalValue=cartSummaryData && cartSummaryData.grandTotal;
    // const finalshippingValue=cartSummaryData && cartSummaryData.shippingCharge;

   console.log(props.invencartItem)
        return (
            <>
          
           
                    <div className='flex mt-8 ' >
                    <div className='w-wk'>SubTotal</div>
                        <span className='text-[#3066BE] font-semibold flex justify-end w-wk' >
                        {props.invencartItem.length > 0 && 
                        <>
                        (
                            {Number(props.invencartItem.cartSummary && props.invencartItem.cartSummary.subTotal).toFixed(2)}
                    )
                    </>}
                        {props.repeatDeliveryInfo.length > 0 && 
                        <>
                        (
                        {Number(props.repeatDeliveryInfo && props.repeatDeliveryInfo.cartSummary && props.repeatDeliveryInfo.cartSummary.grandTotal).toFixed(2)} 
                        )
                        </>}
                           
                        
                        <br/>
                            <span className='text-black'></span>
                        </span>
                    </div>
            
            {/* <Spacer  marginTop="1.5em" />
            <h3> Delivery Fee</h3>
            <FlexContainer justifyContent="flex-end">
                <div >
                    <span style={{ color: "#3066BE", fontWeight: "600",fontSize:"1.3em" }}>
                    {props.invencartItem.cartSummary && props.invencartItem.cartSummary.shippingCharge}
                    <br/>
                        <span style={{color: " rgba(0, 0, 0, 0.5)" }}></span>
                    </span>
                </div>
            </FlexContainer> */}
           
            <hr />
           
          
                    <div className='flex mt-6 ' >
                    <div className='w-wk'> Grand Total</div>
                    <span className='text-[#3066BE] font-semibold flex justify-end w-wk' >
                    {props.invencartItem.length > 0 && 
                        <>
                        (
                        {Number(props.invencartItem.cartSummary && props.invencartItem.cartSummary.grandTotal).toFixed(2)}
                    )
                    </>}
                        {props.repeatDeliveryInfo.length > 0 && 
                        <>
                        (
                        {Number(props.repeatDeliveryInfo && props.repeatDeliveryInfo.cartSummary && props.repeatDeliveryInfo.cartSummary.grandTotal).toFixed(2)} 
                        )
                        </>}
                        <br/>
                        <span className='text-black'></span>
                        </span>
                    </div>
               
            <hr />
           
           
        </>
        )
    }



export default InvoPaymentRight;
