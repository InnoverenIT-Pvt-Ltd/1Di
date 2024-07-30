import React, { useState } from 'react';
import { Steps, Button } from 'antd';
import JobHeader from './JobHeader';
import HomeStep1 from './HomeStep1';
import HomeStep3 from './HomeStep3';
import Step1 from './Step1';
import Step2 from './Step2';
import HomeStep5 from './HomeStep5';
import Homestep6 from './Homestep6';
import Homestep7 from './Homestep7';

const { Step } = Steps;

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const steps = [
    {
      title: '',
      content: <HomeStep1/>,
    },
    {
      title: '',
      content: <HomeStep3/>,
    },
    {
      title: '',
      content: <Step1/>,
    },
    {
      title: '',
      content: <Step2/>,
    },
    {
        title: '',
        content: <HomeStep5/>,
      },
      {
        title: '',
        content: <Homestep6/>,
      },
      {
        title: '',
        content: <Homestep7/>,
      },
  ];

  return (
    <div class="flex justify-center">
    <div class="w-[75rem]">
        <JobHeader/>
        <div class="flex justify-center h-[90vh] border-[#d3d3d3] border-2">
        <div class="mt-28 w-[60rem]">
      <Steps current={currentStep}>
        {steps.map((step, index) => (
          <Step key={index} title={step.title} />
        ))}
      </Steps>

      <div className="steps-content">{steps[currentStep].content}</div>
<div class="flex justify-center">
      <div className="steps-action flex justify-center w-[12rem]">
        {currentStep < steps.length - 1 && (
          <Button  type="secondary" onClick={nextStep}>
            Next
          </Button>
        )}
        {currentStep === steps.length - 1 && (
          <Button  type="secondary" onClick={() => alert('Order Created!')}>
            Create Order
          </Button>
        )}
        {currentStep > 0 && (
          <Button type="tertiary" style={{ margin: '0 8px' }} onClick={prevStep}>
            Previous
          </Button>
        )}
        </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Stepper;
