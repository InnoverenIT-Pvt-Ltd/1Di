import React, { useEffect, useState } from "react";
import { FlexContainer, Spacer } from "../../Components/UI/Elements";
import { Button, Icon, Switch, Tooltip, Select } from "antd";
import FWLogo from "../../Assets/Images/logo-shopper.PNG";
import CustomerContentHeader from "../Customer/Header/CustomerContentHeader";
import ContactInformationForm from "./ContactInformationForm";
import { Footer } from "../Container/Customer/Footer";

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
     <Footer/>
    </>
  );
}
