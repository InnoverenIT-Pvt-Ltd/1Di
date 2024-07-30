import React, { Component } from "react";
import { Button } from 'antd';

function MainHeaderRight (props) {

    return (
        <>
        <div className=" flex justify-evenly w-96">
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
            
            <div>
                <a href="/contactus" target="blank">
                Contact us
                </a>
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