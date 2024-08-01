import React, { useEffect, useState } from "react";
import { FlexContainer, Spacer } from "../../Components/UI/Elements";
import { Button, Icon, Switch, Tooltip, Select } from "antd";
import FWLogo from "../../Assets/Images/logo-shopper.PNG";
import CustomerContentHeader from "../Customer/Header/CustomerContentHeader";
import ContactInformationForm from "./ContactInformationForm";

export default function Contact() {
  return (
    <>
      <div>
         <CustomerContentHeader/> 
      </div>
      <div>
        {/* <div style={{ textAlignLast: "center" }}>
          <Spacer />
          <h7>
            <b>Contact Us</b>
          </h7>
          <p>
            Got a question? We would love to hear from you. Send us a message
            and
          </p>
          <p> we'll respond as soon as possible.</p>
        </div> */}

        <div className=" mt-6">
          <ContactInformationForm />
        </div>
      </div>
      <hr class=" mt-24 w-auto ml-0 h-1 mx-auto  bg-black border-0 rounded " />
      <div class="text-sm flex justify-center  text-gray-700 bottom-0 absolute w-wk items-center" >
         © {new Date().getFullYear()} {` `}, 1Di inc.
        
      </div>
    </>
  );
}
