import { Button } from "antd";
import { Spacer } from "../../../Components/UI/Elements";
import Discounticon from "../../../Assests/Images/discount.svg"; 
import React, { Component } from 'react'
import "../../Customer/Customer.scss";
import { FlexContainer,MainWrapper } from '../../../Components/UI/Elements';
import { Link } from "react-router-dom";

function CouponCard(props) {
    return (
      <div style={{ height:"38.75em", marginLeft:"3em"}}> 
      <div style={{ display: "flex", marginTop: "1.5em" }}>
      {/* <img src={Discounticon} alt="icon" />
      <div style={{  marginLeft: "0.8em" }}>
                <h2>
                <b>Coupons & Offers</b>
                </h2>
      </div> */}
      </div>
      
      
        
            <Spacer style={{ marginTop: "1.5em" }}/>
            <h3> Subtotal</h3>
            <FlexContainer justifyContent="flex-end">
                        <div >
                            <span style={{ color: "#3066BE", fontWeight: "600" }}>
                                $350
                            
                            <br/>
                                <span style={{color: " rgba(0, 0, 0, 0.5)" }}></span>
                            </span>
                        </div>
                    </FlexContainer>
            <Spacer style={{ marginTop: "1.5em" }}/>
            
            <h3> Delivery Fee</h3>
            <FlexContainer justifyContent="flex-end">
                        <div >
                            <span style={{ color: "#3066BE", fontWeight: "600" }}>
                                $50
                            
                            <br/>
                                <span style={{color: " rgba(0, 0, 0, 0.5)" }}></span>
                            </span>
                        </div>
                    </FlexContainer>
            <Spacer style={{ marginTop: "1.5em" }}/>
            <hr/>
            <h3> Grand Total</h3>
            <FlexContainer justifyContent="flex-end">
                        <div >
                            <span style={{ color: "#3066BE", fontWeight: "600" }}>
                                $250
                            
                            <br/>
                                <span style={{color: " rgba(0, 0, 0, 0.5)" }}></span>
                            </span>
                        </div>
                    </FlexContainer>
            <Spacer style={{ marginTop: "1.5em" }}/>
            <hr/>
            <Spacer style={{ marginTop: "1.5em" }}/>
            {/* <h3>Average local delivery time:4-24 hours</h3> */}
            <Spacer style={{ marginTop: "8.5em" }}/>
            <div style={{textAlign: "center"}}>
            <Link to="/shopName/cart">
            <Button style={{ background: "#3066BE",  color: "white"}}>
                Continue
            </Button>
            </Link>
               </div>
               </div>  
    );
  }
  
  export default CouponCard;
  
