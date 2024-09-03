import React, { useState, useEffect } from "react";
import { Select } from "antd";
import { Formik, Form, Field,FieldArray } from "formik";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {getCountries} from "./JobAction";

const { Option } = Select;
function RegistrationStep3 (props) {

  useEffect(()=>{
    props.getCountries();
  },[])

const dialCode = props.countries.map((item)=> ({
  label: `+${item.country_dial_code}`,
  value: `+${item.country_dial_code}`,
}));

  return (
    <>
      <Formik
      initialValues={{ 

        
      }}
     
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm()

        }}
      >
        
        {({
          errors,
          touched,
          isSubmitting,
          setFieldValue,
          setFieldTouched,
          values,
          ...rest
        }) => (
        <div class=" h-[63vh]">
          <Form class="w-wk flex justify-center ">
             <div   className="bg-[#DFDFDF] rounded-2xl p-3 border-solid  flex flex-col justify-center mt-3 w-11/12   " >
             <div className="max-w-3xl mx-auto p-6 border mt-2 overflow-x-auto h-[60vh]">
      <h1 className="text-3xl font-bold mb-4 font-poppins">Refund Policy</h1>
      <p className="mb-4">
        We have a 30-day return policy, which means you have 30 days after receiving your item to request a return.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">Eligibility for a Return</h2>
      <p className="mb-4">
        To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">How to Start a Return</h2>
      <p className="mb-4">
        To start a return, you can contact us at <a href="mailto:sales@1Di.ca" className="text-blue-500 underline">sales@1Di.ca</a>. Please note that returns will need to be sent to the following address: 
        <br />1Di Inc. 
        <br />81 Northern Heights Drive. Unit 21A. 
        <br />Richmond Hill, ON. L4B4C9. Canada.
      </p>
      <p className="mb-4">
        If your return is accepted, we’ll send you a return shipping label, as well as instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted.
      </p>
      <p className="mb-4">
        You can always contact us for any return question at <a href="mailto:sales@1Di.ca" className="text-blue-500 underline">sales@1Di.ca</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Damages and Issues</h2>
      <p className="mb-4">
        Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Exceptions / Non-returnable Items</h2>
      <p className="mb-4">
        Certain types of items cannot be returned, like perishable goods (such as food, flowers, or plants), custom products (such as special orders or personalized items), and personal care goods (such as beauty products). We also do not accept returns for hazardous materials, flammable liquids, or gases. Please get in touch if you have questions or concerns about your specific item.
      </p>
      <p className="mb-4">
        Unfortunately, we cannot accept returns on sale items or gift cards.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Exchanges</h2>
      <p className="mb-4">
        The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Refunds</h2>
      <p className="mb-4">
        We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method within 10 business days. Please remember it can take some time for your bank or credit card company to process and post the refund too.
      </p>
      <p className="mb-4">
        If more than 15 business days have passed since we’ve approved your return, please contact us at <a href="mailto:sales@1Di.ca" className="text-blue-500 underline">sales@1Di.ca</a>.
      </p>
      
    </div>
    <div>
    <input
  type="checkbox"
  checked={props.priPolInd} 
  onChange={(e) => props.handleSteppriPolInd(e.target.checked)}
/>
      <label>Click me!</label>
    </div>
            </div>
          </Form>
          </div>
        )}
      </Formik>
    </>
  );
}

const mapStateToProps = ({job }) => ({
  countries: job.countries,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
getCountries

}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationStep3);
