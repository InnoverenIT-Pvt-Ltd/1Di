import React, { Component } from "react";
import { Button } from 'antd';
import { Route, Routes, Switch, Link } from "react-router-dom";
import RefundPolicy from "../../../Main/RefundPolicy";

function MainHeaderRight (props) {

    return (
        <>
        <div className=" flex justify-evenly w-wk">
        {/* <div className=" flex">
            <div>
            <select>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>INR</option>
                </select>
            </div>
            <div>
            <select>
                    <option>English</option>
                    <option>French</option>
                    <option>German</option>
                </select>
                </div>
        </div>
            <div>
            Wishlist
            </div> */}
            
            <div className="flex">
            <div className="mr-2">           
            <Link to="/faq">
           FAQ
           </Link>        
            </div> 
            <div className="mr-2">
              
                <Link to="/refund">
            Refund policy
            </Link>
            </div>
            <div className="mr-2">
                <a href="/contactus" target="blank">
                Contact us
                </a>
                </div>
                </div>   
   <div>
    <Button type="primary" style={{cursor:"pointer"}} >
   <a href="/login">
   <label class="text-white cursor-pointer">Login</label>
                
                </a>
                </Button>
                &nbsp;
                <Button type="primary" style={{cursor:"pointer"}} >
   <a href="/registration">
   <label class="text-white cursor-pointer">Register</label>
                </a>
                </Button>
                </div>   
        </div>
        </>
    );
}
export default MainHeaderRight;