import { Button ,message} from 'antd'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
import { Spacer,FlexContainer } from '../../../../Components/UI/Elements'

function CartMainContentRight(props) {
    // if(!props.cart){
    //     return (
    //         message.error("something went wrong")
    //     )
    // }
    
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
                <Spacer  marginTop= "1.5em" />
                <h3> Delivery Fee</h3>
                <FlexContainer justifyContent="flex-end">
                        <div >
                            <span style={{ color: "#3066BE", fontWeight: "600" }}>
                               {/* {finalshippingValue} */}
                            
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
                <div style={{textAlign: "center"}}>
                <Link to="/shopName/payment">
                {/* <Button style={{ background: "#3066BE",  color: "white" }}>
                    Continue
                </Button> */}
                </Link>
                </div>
            </>
        )
    }


const mapStateToProps = ({ customer, auth }) => ({
    // cart: customer.cart,
    // contactId:customer.productInfo.contactId,
    // shopName:customer.shopName
  });
  
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        { },
        dispatch
    );


export default connect(mapStateToProps, mapDispatchToProps) (CartMainContentRight);
