import React, { Component } from "react";
import KoreroLogo from "../../../Assests/Images/Logo_new.png";
import NuboxLogo from "../../../Assests/Images/nuboxnew.jpg";
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
      style={{ width: "4rem",height:"2rem" }} alt="img" />
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