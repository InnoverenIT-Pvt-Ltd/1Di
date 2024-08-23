import React, { Component } from "react";
import KoreroLogo from "../../../Assests/Images/Logo_new.png";
import { Link } from "react-router-dom";

function MainHeaderLeft (props) {

    return (
        <>
                 
        <div className=" flex">
        <Link to="/">
        <div>
      <img 
        //   src={NuboxLogo}
           src={KoreroLogo}
      style={{ width: "4vw",height:"5vh" }} alt="img" />
      </div>
      </Link>
            {/* <div>
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
                </div> */}
        </div>
        </>
    );
}
export default MainHeaderLeft;