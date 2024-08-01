import React, {Component,useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import ReactDOM from "react-dom";
import { Link,withRouter } from "react-router-dom";
import { Radio, Input, Space, Button } from "antd";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import stripe from "../../Assests/Images/Stripe-Emblem.png";
import Razorpay from "../../Assests/Images/razorpay.png";
import pay from "../../Assests/Images/cashShake.svg";
import { FlexContainer, Spacer } from "../../Components/UI/Elements";
import { handleInventoryStripeModal,codInventoryOrder,getInventoryCartItems} from "./InventoryAction";
import axios from 'axios';
import PaymentInventoryModal from "./PaymentInventoryModal";
import PayChecktInventoryModal from "./PayChecktInventoryModal";

const InvoPaymentLeft = ({ userId, invencartItem, addiNVEStripeModal, handleInventoryStripeModal, codInventoryOrder, getInventoryCartItems, addingCODinventory }) => {
  const [value, setValue] = useState(1);
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);
  const history = useHistory();

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const handlePayByCheck = () => {
    openModal(); // This opens the modal when "Pay by Check" button is clicked
  };
  // useEffect(() => {
  //   getInventoryCartItems(userId);
  // }, [userId]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      setIsRazorpayLoaded(true);
    };
    script.onerror = () => {
      console.error("Razorpay SDK failed to load.");
    };
    document.body.appendChild(script);
  }, []);


  // const handlePayment = () => {
  //   if (!isRazorpayLoaded) {
  //     console.error("Razorpay SDK not loaded.");
  //     return;
  //   }

   
  //   const paymentData = {
  //     // key: "rzp_test_1DP5mmOlF5G5ag", // Razorpay Test Key ID
  //     key:"rzp_test_wX8b6V6Y3BuNSo",
  //     amount: 50000, // amount in the smallest currency unit (e.g., 50000 paise = INR 500)
  //     currency: "INR",
  //     name: "Acme Corp",
  //     description: "Test Transaction",
  //     image: "https://example.com/your_logo",
  //     // order_id: "order_9A33XWu170gUtm", // Remove order ID for testing
  //     handler: function (response) {
  //       alert("Payment ID: " + response.razorpay_payment_id);
  //       alert("Signature: " + response.razorpay_signature);
  //     },
  //     prefill: {
  //       name: "Gaurav Kumar",
  //       email: "gaurav.kumar@example.com",
  //       contact: "9999999999",
  //     },
  //     notes: {
  //       address: "Razorpay Corporate Office",
  //     },
  //     theme: {
  //       color: "#F37254",
  //     },
  //   };

  //   const razorpay = new window.Razorpay(paymentData);
  //   razorpay.open();
  // };



  // const handlePayment = async () => {
  //   if (!isRazorpayLoaded) {
  //     console.error("Razorpay SDK not loaded.");
  //     return;
  //   }

    
  //   const response = await fetch("https://develop.tekorero.com/testHr/api/v1/razorpay/order", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({ 
      
  //     currency: "INR",
  // orderId: "",
  // razorPayAmount: "5000",
  // razorpayOrderId: "",
  // razorpayPaymentId: "",
  // razorpaySignature: ""
  //     })
  //   });
  //   const order = await response.json();

  //   const paymentData = {
  //     key: "rzp_test_wX8b6V6Y3BuNSo",
  //     amount: 50000, 
  //     currency: "INR",
  //     name: "Acme Corp",
  //     description: "Test Transaction",
  //     image: "https://example.com/your_logo",
  //     order_id: order,
  //     handler: function (response) {
  //       alert("Payment ID: " + response.razorpay_payment_id);
  //       alert("Signature: " + response.razorpay_signature);

  //       // Verify payment on the server
  //       fetch("https://develop.tekorero.com/testHr/api/v1/razorpay/verify", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json"
  //         },
  //         body: JSON.stringify({
  //           // order_id: order.id,
  //           razorpaySignature:"",
  //           razorpayPaymentId: response.razorpay_payment_id,
  //           razorpaySignature: response.razorpay_signature
  //         })
  //         // body:{}
  //       }).then(res => res.json())
  //         .then(data => {
  //           if (data.receipt === "order_rcptid_11") {
  //             alert("Payment verified successfully");
  //           } else {
  //             alert("Payment verification failed");
  //           }
  //         });
  //     },
  //     prefill: {
  //       name: "Gaurav Kumar",
  //       email: "gaurav.kumar@example.com",
  //       contact: "9999999999",
  //     },
  //     notes: {
  //       address: "Razorpay Corporate Office",
  //     },
  //     theme: {
  //       color: "#F37254",
  //     },
  //   };

  //   const razorpay = new window.Razorpay(paymentData);
  //   razorpay.open();
  // };
  // const handlePayment = async () => {
  //   if (!isRazorpayLoaded) {
  //     console.error("Razorpay SDK not loaded.");
  //     return;
  //   }
  
  //   try {
  //     const response = await fetch("https://develop.tekorero.com/testHr/api/v1/razorpay/order", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({ 
  //         currency: "INR",
  //         orderId: "",
  //         razorPayAmount: "5000",
  //         razorpayOrderId: "",
  //         razorpayPaymentId: "",
  //         razorpaySignature: ""
  //       })
  //     });
  
  //     const order = await response.json();
  
  //     const paymentData = {
  //       key: "rzp_test_wX8b6V6Y3BuNSo",
  //       amount: 50000,
  //       currency: "INR",
  //       name: "Acme Corp",
  //       description: "Test Transaction",
  //       image: "https://example.com/your_logo",
  //       order_id: order,  // This line seems problematic
  //       handler: function (response) {
  //         alert("Payment ID: " + response.razorpay_payment_id);
  //         alert("Signature: " + response.razorpay_signature);
  
  //         fetch("https://develop.tekorero.com/testHr/api/v1/razorpay/verify", {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json"
  //           },
  //           body: JSON.stringify({
  //             razorpaySignature: response.razorpay_signature,
  //             razorpayPaymentId: response.razorpay_payment_id,
  //           })
  //         }).then(res => res.json())
  //           .then(data => {
  //             if (data.receipt === "order_rcptid_11") {
  //               alert("Payment verified successfully");
  //             } else {
  //               alert("Payment verification failed");
  //             }
  //           });
  //       },
  //       prefill: {
  //         name: "Gaurav Kumar",
  //         email: "gaurav.kumar@example.com",
  //         contact: "9999999999",
  //       },
  //       notes: {
  //         address: "Razorpay Corporate Office",
  //       },
  //       theme: {
  //         color: "#F37254",
  //       },
  //     };
  
  //     const razorpay = new window.Razorpay(paymentData);
  //     razorpay.open();
  //   } catch (error) {
  //     console.error("Error processing payment:", error);
  //   }
  // };



  const handlePayment = async () => {
    if (!isRazorpayLoaded) {
      console.error("Razorpay SDK not loaded.");
      return;
    }
  
    try {
      console.log("Creating order...");
      const orderResponse = await axios.post("https://develop.tekorero.com/testHr/api/v1/razorpay/order", {
        currency: "INR",
        orderId: "",
        razorPayAmount: "5000",
        razorpayOrderId: "",
        razorpayPaymentId: "",
        razorpaySignature: ""
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      const order = orderResponse.data;
      console.log("Order created:", order);
  
      const paymentData = {
        key: "rzp_test_wX8b6V6Y3BuNSo",
        amount: 50000,
        currency: "INR",
        name: "Acme Corp",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order, // Ensure this is the actual order ID
        handler: async function (response) {
          console.log("Payment response:", response);
          // alert("Payment ID: " + response.razorpay_payment_id);
          // alert("Signature: " + response.razorpay_signature);
  
          // Verify payment on the server
          try {
            console.log("Verifying payment...");
            const verifyResponse = await axios.post("https://develop.tekorero.com/testHr/api/v1/razorpay/verify", {
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
              
              razorpayOrderId:response.razorpay_order_id,

            }, {
              headers: {
                "Content-Type": "application/json"
              }
            });
  
            const data = verifyResponse.data;
            console.log("Verification response:", data);
  
            if (data.status === "success") {
              alert("Payment verified successfully");
            } else {
              alert("Payment verification failed");
            }
          } catch (verifyError) {
            console.error("Payment verification error:", verifyError);
            alert("Payment verification failed");
          }
        },
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#F37254",
        },
      };
  
      const razorpay = new window.Razorpay(paymentData);
      razorpay.open();
    } catch (orderError) {
      console.error("Order creation error:", orderError);
    }
  };
  


 
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const handleAddPlaceOrder = (status) => {
    history.push("/shopName/invOrdersuccess");
    let data = {
      amount: invencartItem.cartSummary.grandTotal ? invencartItem.cartSummary.grandTotal : 0,
      quotationId: invencartItem.orderPhoneId ? invencartItem.orderPhoneId:null,
      type: "Cod",
    };
    codInventoryOrder(data);
  };

  return (
    <>
      <br />
      <Radio.Group onChange={onChange} value={value}>
        <FlexContainer justifyContent="space-between" style={{ display: "flex", alignItems: "center" }}>
          <Radio value={"Stripe"}>
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <img style={{ width: "5rem" }} alt="pay" src={stripe} />
              <Button
                type="primary"
                style={{ backgroundColor: "#0073c8", marginLeft: "0.62em", borderRadius: "0.3rem" }}
                onClick={() => { handleInventoryStripeModal(true); }}
              >
                Checkout
              </Button>
            </div>
            <div>
              <h3>Credit and Debit Card payments such as Mastercard, Visa, American Express, iDEAL, Apple Pay, Google Pay, Klarna and much more.</h3>
            </div>
          </Radio>
        </FlexContainer>
        <Spacer style={{ marginBottom: "50px" }} />
        <FlexContainer justifyContent="space-between" style={{ display: "flex", alignItems: "center" }}>
          <Radio value={"Cash on Delivery"}>
            <div style={{ alignItems: "baseline", justifyContent: "space-evenly" }}>
              <img style={{ width: "4.25em" }} alt="pay" src={pay} />
              Pay on Delivery (Cash)
              <Button
                type="primary"
                onClick={() => handleAddPlaceOrder()}
                loading={addingCODinventory}
              >
                Place Order
              </Button>
              <div>
                <h3 style={{ marginLeft: "16.25em" }}>pay in cash or pay in per at the time of delivery</h3>
              </div>
            </div>
          </Radio>
        </FlexContainer>
        <FlexContainer justifyContent="space-between" style={{ display: "flex", alignItems: "center" }}>
          <Radio value={"Razorpay"}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-evenly" }}>
              <img style={{ width: "5rem" }} alt="pay" src={Razorpay} />
              <Button
                type="primary"
                style={{ backgroundColor: "#0073c8", marginLeft: "0.62em", borderRadius: "0.3rem" }}
                onClick={handlePayment} disabled={!isRazorpayLoaded}
              >
                Checkout
              </Button>
            </div>
            <div>
              <h3>Credit and Debit Card payments</h3>
            </div>
          </Radio>
        </FlexContainer>
        <FlexContainer justifyContent="space-between" style={{ display: "flex", alignItems: "center" }}>
          <Radio value={"pay by check"}>
            <div className="mt-4" style={{ alignItems: "baseline", justifyContent: "space-evenly" }}>
              {/* <img style={{ width: "4.25em" }} alt="pay" src={pay} /> */}
              Pay by Check
              <Button
                type="primary"
                onClick={handlePayByCheck}
                
              >
                Pay by Check
              </Button>
              
            </div>
          </Radio>
        </FlexContainer>
        <br />
        <br />
      </Radio.Group>
      <PaymentInventoryModal
      invencartItem={invencartItem}
        addiNVEStripeModal={addiNVEStripeModal}
        handleInventoryStripeModal={handleInventoryStripeModal}
      />
      <PayChecktInventoryModal
       invencartItem={invencartItem}
       modalVisible={modalVisible}
       closeModal={closeModal}
       handlePayByCheck={handlePayByCheck}
      />
    </>
  );
};

const mapStateToProps = ({ inventory, auth }) => ({
  // invencartItem: inventory.invencartItem,
  addiNVEStripeModal: inventory.addiNVEStripeModal,
  userId: auth.userDetails.userId,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      codInventoryOrder,
      handleInventoryStripeModal,
      // getInventoryCartItems
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(InvoPaymentLeft);


