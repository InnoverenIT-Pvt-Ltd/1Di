import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import JobHeader from '../Jobsite/JobHeader';

const FAQ = () => {
  return (
    <>
     <JobHeader/>
     <div className="max-w-3xl mx-auto p-6 border mt-2 overflow-x-auto h-[91vh]">
    <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions (FAQ)</h1>
    
    {/* Shipping Section */}
    <h2 className="text-2xl font-semibold mt-6 mb-4">Shipping</h2>
    
    <div className="mb-6">
      <h3 className="text-xl font-semibold">Q: When should I expect to receive my 1Di Order?</h3>
      <p>
        Most orders are shipped within 1-3 business days. All orders are shipped via the best available courier service 
        (FedEx, Purolator, Canpar, UPS, Canada Post), and should take 2 to 5 business days to arrive from our facility in 
        Markham, Ontario, Canada.
      </p>
    </div>
    
    <div className="mb-6">
      <h3 className="text-xl font-semibold">Q: How much do I have to pay for shipping?</h3>
      <p>
        Domestic shipping in Canada is $9.99, while shipping is FREE for all orders over $35.
      </p>
    </div>
    
    <div className="mb-6">
      <h3 className="text-xl font-semibold">Q: I'm not in Canada, can I order your brands too?</h3>
      <p>
        No! We ONLY ship nationwide across Canada at this time.
      </p>
    </div>
    
    <div className="mb-6">
      <h3 className="text-xl font-semibold">Q: How can I check the status of my order?</h3>
      <p>
        You should receive an order confirmation email immediately after placing your order, and another 1-2 business 
        days afterward with tracking information. If there is any issue with your order, we'll be sure to let you know 
        right away by email.
      </p>
    </div>
    
    <div className="mb-6">
      <h3 className="text-xl font-semibold">Q: What if I can't find the email with the tracking information?</h3>
      <p>
        Don't worry, you can check the status of your order right on the site! If you have made an account with 1Di.ca 
        before, you can select "Log In" at the top of any page and enter your account credentials to view your Account 
        Summary and all your past and present orders. If you have not created an account with us, do so by selecting 
        "Create account" and use the email address you provided when first completing your order. After creating an account, 
        you will be able to view your order summary.
      </p>
    </div>
    
    <div className="mb-6">
      <h3 className="text-xl font-semibold">Q: I have another question about my order!</h3>
      <p>
        Feel free to send an email to <a href="mailto:sales@1Di.ca" className="text-blue-500 underline">sales@1Di.ca</a> 
        and we'll make sure your order is on the way.
      </p>
    </div>

    {/* Support Section */}
    <h2 className="text-2xl font-semibold mt-6 mb-4">Support</h2>
    
    <div className="mb-6">
      <h3 className="text-xl font-semibold">Q: What if I have a problem with my 1Di Order?</h3>
      <p>
        We’re proud of our products, and if for any reason you are dissatisfied, get in touch with us so we have an 
        opportunity to make it right. We will provide replacement or refund for all damaged goods within 30 days of purchase.
      </p>
    </div>
    
    <div className="mb-6">
      <h3 className="text-xl font-semibold">Q: I LOVE my 1Di Order! You guys rock!</h3>
      <p>
        ...That’s not exactly a question, but we appreciate it! Spread the word on social media (Facebook, Instagram) 
        and feel free to reach out to us at <a href="mailto:sales@1Di.ca" className="text-blue-500 underline">sales@1Di.ca</a>; 
        we love to hear from our customers!
      </p>
    </div>
    
    <div className="mb-6">
      <h3 className="text-xl font-semibold">Q: I have another question you didn't mention.</h3>
      <p>
        Drop us a line at <a href="mailto:sales@1Di.ca" className="text-blue-500 underline">sales@1Di.ca</a> and we'll take a swing at it.
      </p>
    </div>

    {/* Business Inquiries Section */}
    <h2 className="text-2xl font-semibold mt-6 mb-4">Business Inquiries</h2>
    
    <div className="mb-6">
      <h3 className="text-xl font-semibold">Q: I want to sell your Brands in my store! How can I do that?</h3>
      <p>
        We would love to count you among our valued retailers! Email <a href="mailto:sales@1Di.ca" className="text-blue-500 underline">sales@1Di.ca</a> 
        to get connected and setup for a wholesale account.
      </p>
    </div>
  </div>
  </>
  );
}


const mapStateToProps = ({  }) => ({
   
});
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(FAQ);