// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Button } from "antd";
// import { bindActionCreators } from "redux";
// import { StyledSteps } from "../../../Components/UI/Antd";
// import { UserOutlined } from "@ant-design/icons";
// import { FlexContainer } from "../../../Components/UI/Layout";
// import OrderFirstStep from "./OrderFirstStep";
// import OrderSecondStep from "./OrderSecondStep";

// const Step = StyledSteps.Step;

// class NewOrderStepper extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             current: 0,
//             thirdPageData: {},
//         };
//     }
//     handleSubmit = (data) => {
//         this.setState({ thirdPageData: data });
//         this.handleComplete();
//     };
//     next = () => {
//         const current = this.state.current + 1;
//         this.setState({ current });
//     };

//     prev = () => {
//         const current = this.state.current - 1;
//         this.setState({ current });
//     };
//     handleComplete = () => {
//         console.log(this.state.thirdPageData);
//     };

//     render() {
//         const steps = [
//             {
//                 title: "Order",
//                 content: <OrderFirstStep />
//             },
//             {
//                 title: "Phone Details",
//                 content: <OrderSecondStep />,
//             },

//         ];
//         const { current } = this.state;
//         return (
//             <>
//                 <StyledSteps current={current}>
//                     <Step
//                         // title={<ShoppingCartOutlined style={{ fontSize: "1.37em" }} />}
//                         title={<i class="fas fa-cube" style={{ fontSize: "1.37em" }}></i>}
//                         // type="shopping-cart"
//                         description="Order"
//                     />
//                     <Step
//                         title={<UserOutlined style={{ fontSize: "1.37em" }} />}
//                         // type="user"
//                         description="Phone"
//                     />

//                 </StyledSteps>
//                 <div
//                     style={{ minHeight: "40vh" }}
//                 >{steps[current].content}</div>
//                 <FlexContainer justifyContent="flex-end">
//                     <div className="steps-action">
//                         {current < steps.length - 1 && (
//                             <>
//                                 {current > 1 ? null : (
//                                     <>
//                                         <Button
//                                             type="primary"
//                                             onClick={() => this.next()}
//                                             style={{ marginTop: "7px" }}
//                                         // disabled={this.props.serachedData === null}
//                                         >
//                                             Proceed
//                                         </Button>
//                                     </>
//                                 )}
//                             </>
//                         )}

//                         {current > 0 && (
//                             <Button style={{ marginTop: "2px" }} onClick={() => this.prev()}>
//                                 Back
//                             </Button>
//                         )}
//                     </div>
//                 </FlexContainer>
//             </>
//         );
//     }
// }

// const mapStateToProps = ({ quote }) => ({
//     //   quotationId:quote.quoteSupplies.quotationId,
// });

// const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(NewOrderStepper);



import React, { useState, useEffect } from 'react';
import {
  UserOutlined,
  CarOutlined,
  DollarOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import { Steps, Button, message } from 'antd';
import OrderFirstStep from "./OrderFirstStep";
 import OrderSecondStep from "./OrderSecondStep";
//import OderDetailsForm from '../DistributorOrderTab/OderDetailsForm';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import CardDetailsForm from './CardDetailsForm';
 import { addOrderForm ,addPhoneDetails} from '../MyOrderAction';
 import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Route, Redirect, withRouter } from "react-router-dom";
// import { addOrderForm, addCarDetails, addOrderPriceDetails,getGeneratePrice } from "./RequirementAction"
import { StyledSteps } from '../../../Components/UI/Antd';
// import moment from 'moment-timezone';

const { Step } = Steps;

const NewOrderStepper = (props) => {
  // State for form data and current step
  const buttonStyle = {
    borderRadius: "1rem",
    fontSize: "1rem",
    color: "#01beee",
    padding: "0.25rem 0.75rem",
    border:"1px solid"
  }
  const [currentStep, setCurrentStep] = useState(0);


  const [selectedCarCount, setSelectedCarCount] = useState("");
  const [deliveryDate, setDeliveryDate] = useState('');
  const [availableDate, setAvailableDate] = useState('');
  const [comments, setComments] = useState('');
  const [unloadingAddress, setUnLoadingAddress] = useState([]);
  const [paymentTerms, setPaymentTerms] = useState("");
  const [suggestedPrice, setSuggestedPrice] = useState('');
  const [expectedPrice, setExpectedPrice] = useState('');
  const [selectedTimeRange, setSelectedTimeRange] = useState([]);
  const [selectedDeliveryTimeRange, setSelectedDeliveryTimeRange] = useState([]);


  const [address, setAddress] = useState([]);

  const [isFullTruckLoad, setIsFullTruckLoad] = useState(false);
  const [isDeliverToBusiness, setIsDeliverToBusiness] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [videoId, setVideoId] = useState("");



  const [selectedValue, setSelectedValue] = useState(null);
  const [formData, setFormData] = useState([]);
  const options = Array.from({ length: 12 }, (_, index) => index + 1);
  const handleSetVideo = (newVideoId) => {
    setVideoId(newVideoId);
  };

  const handleDropdownChange = (event) => {
    const newValue = Number(event.target.value);
    setSelectedValue(newValue);

    if (newValue > formData.length) {
      // Add new rows if needed
      const newRowsToAdd = newValue - formData.length;
      setFormData(prevData => [
        ...prevData,
        ...Array.from({ length: newRowsToAdd }, () => ({
          make: '',
          model: '',
          type: '',
          VIN: '',
          condition: '',
          hasWarranty: ''
        }))
      ]);
    } else {
      // Trim array if selected value is decreased
      setFormData(prevData => prevData.slice(0, newValue));
    }
  };

  const handleTimeChange = (timeRange) => {
    setSelectedTimeRange(timeRange);
    console.log('Selected time range:', timeRange.map(time => time.format('HH:mm')).join(' - '));
  };

  const handleDeliveryTimeChange = (timeRange) => {
    setSelectedDeliveryTimeRange(timeRange);
    //console.log('Selected time range:', timeRange.map(time => time.format('HH:mm')).join(' - '));
  };

  const timeRange = selectedTimeRange.map((item) => {
    return item.format('HH:mm')
  })

  const timeDeliveryRange = selectedDeliveryTimeRange.map((item) => {
    return item.format('HH:mm')
  })





  const handleChange = (rowIndex, field, value) => {
    const updatedFormData = [...formData];
    updatedFormData[rowIndex][field] = value;
    setFormData(updatedFormData);
  };

  const handleFormSubmit = () => {
    console.log('Stored Form Data:', formData);
    // Here you can perform any further actions with the form data
  };

  useEffect(() => {
    console.log('Form Data Updated:', formData);
  }, [formData]);

  const handleHomeStep1 = (data) => {
    setAddress(data);
  };

  const handleHomeStep2 = (data) => {
    setUnLoadingAddress(data);
  };


  console.log("order1", props.orderDetailsId)
  // Handler for removing a car


  // Handlers for form fields changes
  const handleDeliveryDate = (event) => {
    setDeliveryDate(event.target.value);
  };

  const handleAvailableDate = (event) => {
    setAvailableDate(event.target.value);
  };

  const handleCarCountChange = (event) => {
    setSelectedCarCount(parseInt(event.target.value));
  };

  const handlePaymentTerms = (e) => {
    setPaymentTerms(e.target.value);
  };
  const handleSuggested = (e) => {
    setSuggestedPrice(e.target.value);
  };
  const handleExpected = (e) => {
    setExpectedPrice(e.target.value);
  };

  // const handleloadingAddress = (e) => {
  //   setLoadingAddress(e.target.value)
  // };

  // const handleUnloadingAddress = (e) => {
  //   setUnLoadingAddress(e.target.value)
  // };

  const handleComments = (e) => {
    setComments(e.target.value)
  };

  const handleCallBack = (data) => {
    props.history.push(`/requirement`);
  };
  const handleGeneratePrice = () => {
    props.getGeneratePrice()
    // props.history.push(`/requirement`);
  };

  console.log("video", videoId)

  const handleSubmitStep1 = () => {
    // const availabilityDate = "2023-08-10T00:00:00.000+05:30";
    // let data = {
    //   loadingAddress: address,
    //   // loadingAddress: loadingAddress,
    //   // noOfCars: selectedCarCount,
    //   deliveryDate: `${deliveryDate}T20:00:00Z`,
    //   availabilityDate: `${availableDate}T20:00:00Z`,
    //   pickupFromTime: timeRange[0],
    //   pickupToTime: timeRange[1],
    //   deliveryFromTime: timeDeliveryRange[0],
    //   deliveryToTime: timeDeliveryRange[1],
    //   // paymentInTerms: (parseInt(paymentTerms)),
    //   unloadingAddress: unloadingAddress,
    //   comments: comments,
    //   //   orderId:"",
    //   deliverToBusinessInd: "",
    //   fullLoadTruckInd: "",
    //   privateInd: "",
    //   //   customerId:props.customerId,
    //   deliveryDate: `${deliveryDate}T20:00:00Z`,
    //   availabilityDate: `${availableDate}T20:00:00Z`,
    //   paymentInTerms: paymentTerms,
    //   unloadingAddress: unloadingAddress,
    //   comments: comments,
    //   orderId: "",
    //   deliverToBusinessInd: "",
    //   fullLoadTruckInd: "",
    //   privateInd: "",
    //   ///distributorId:props.distributorId,
    //   userId:props.userId


    // };
    //  props.addOrderForm(data);

    // Move to the next step (Step 2) after handling Step 1 submission
    handleNext();
  };

  const handleSubmitStep2 = () => {
    let data = {

      orderPhoneId: props.orderDetailsId.orderId,
      excelId: videoId,
      userId: props.userId,
      orderPhoneId: props.orderDetailsId.orderId,
      //   customerId:props.customerId,
      //   noOfCars: selectedValue,
    };
     props.addPhoneDetails(data, props.userId);

    // Move to the next step (Step 3) after handling Step 2 submission
    handleNext();
  };

  const callback = () => {
    this.props.handleOrderTab(false)
  }

  // Steps configuration
  const stepsData = [
    {
      title: 'Order',
      icon: <UserOutlined />,
      content: <OrderFirstStep
        // handleUnloadingAddress={handleUnloadingAddress}
        unloadingAddress={unloadingAddress}
        // handleloadingAddress={handleloadingAddress}
        // loadingAddress={loadingAddress}
        handleCarCountChange={handleCarCountChange}
        handleDeliveryTimeChange={handleDeliveryTimeChange}
        selectedDeliveryTimeRange={selectedDeliveryTimeRange}
        selectedTimeRange={selectedTimeRange}
        handleTimeChange={handleTimeChange}
        selectedCarCount={selectedCarCount}
        handleDeliveryDate={handleDeliveryDate}
        deliveryDate={deliveryDate}
        handleAvailableDate={handleAvailableDate}
        availableDate={availableDate}
        handlePaymentTerms={handlePaymentTerms}
        paymentTerms={paymentTerms}
        handleComments={handleComments}
        comments={comments}
        isFullTruckLoad={isFullTruckLoad}
        setIsFullTruckLoad={setIsFullTruckLoad}
        isDeliverToBusiness={isDeliverToBusiness}
        setIsDeliverToBusiness={setIsDeliverToBusiness}
        isPrivate={isPrivate}
        setIsPrivate={setIsPrivate}
        orderDetailsId={props.orderDetailsId}

        handleSuggested={handleSuggested}
        handleExpected={handleExpected}
        suggestedPrice={suggestedPrice}
        expectedPrice={expectedPrice}

        handleHomeStep1={handleHomeStep1}
        handleHomeStep2={handleHomeStep2}
      />,
      handleSubmit: handleSubmitStep1,
    },
    {
      title: 'Add Items',
      icon: <ShoppingBagIcon
        style={{ color: "blue" }}
      />,
      content: <OrderSecondStep
        handleSetVideo={handleSetVideo}
        handleDropdownChange={handleDropdownChange}
        selectedValue={selectedValue}
        handleGeneratePrice={handleGeneratePrice}
        generatePrice={props.generatePrice}
        options={options}
        formData={formData}
        handleChange={handleChange}
        orderDetailsId={props.orderDetailsId}
      // cars={cars}
      // handleCarChange={handleCarChange}
      // handleAddCar={handleAddCar}
      // handleRemoveCar={handleRemoveCar}

      />,
      handleSubmit: handleSubmitStep2,
    },
    // {
    //   title: 'Step 3',
    //   icon: <DollarOutlined />,
    //   content: <GeneratePriceForm
    //     handleNext={handleNext}
    //     // handleSuggested={handleSuggested}
    //     // handleExpected={handleExpected}
    //     // suggestedPrice={suggestedPrice}
    //     // expectedPrice={expectedPrice}
    //   />,
    //   handleSubmit: handleSubmitStep3,

    // },
  ];



  // Handlers for navigation
  const handleNext = () => {
    if (currentStep === stepsData.length - 1) {
      console.log('Form submission complete!');
      return;
    }
    setCurrentStep((prevStep) => prevStep + 1);
  };







  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      <StyledSteps current={currentStep}>
        {stepsData.map((step, index) => (
          <Step key={index} title={step.title} icon={step.icon} />
        ))}
      </StyledSteps>
      <div style={{ marginTop: 16 }}>{stepsData[currentStep].content}</div>
      <div style={{ float: 'right' }}>
        {currentStep > 0 && 
         <div class="flex justify-end mt-3 w-wk bottom-2 mr-2 md:absolute">
        <Button style={buttonStyle} onClick={handlePrevious}>Previous</Button>
        </div>
        }

       <div class="flex justify-end mt-3 w-wk bottom-2 mr-2 md:absolute">
       {/* {props.orderDetailsId.orderId &&  */}
        <Button
          style={buttonStyle}
          // type="primary"
          onClick={() => {
            // Call the relevant handleSubmit function for the current step
            stepsData[currentStep].handleSubmit();
            //  setCurrentStep((prevStep) => prevStep + 1);
          }}
        //   disabled={!isStepDataValid()}
        >
          {currentStep === stepsData.length - 1 ? 'Finish' : 'Proceed'}
        </Button>
{/* } */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ homeStepper, auth, distributor,myorder }) => ({
  //   addingOrder: requirement.addingOrder,
  //   generatePrice:requirement.generatePrice,
  orderDetailsId: myorder.orderDetailsId,
  userId: auth.userDetails.userId,
  
  //    orderDetailsId: requirement.orderDetailsId
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
   addOrderForm,
   addPhoneDetails
//   addCarDetails,
  //   getGeneratePrice,
  //   addOrderPriceDetails
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewOrderStepper));
