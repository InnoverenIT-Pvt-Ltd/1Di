import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, message } from "antd";
import { bindActionCreators } from "redux";
import { Formik, Form, Field } from "formik";
import { MainWrapper } from "../Components/UI/Layout";
import { StyledSteps } from "../Components/UI/Antd";
import BusinessIcon from '@mui/icons-material/Business';
import PolicyIcon from '@mui/icons-material/Policy';
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { FlexContainer } from "../Components/UI/Layout";
import RegistrationStep1 from "./RegistrationStep1";
import RegistrationStep2 from "./RegistrationStep2";
import {
    addContact 
  } from "../Container/Auth/AuthAction";
import RegistrationStep3 from "./RegistrationStep3";
const Step = StyledSteps.Step;

class RegistrationStepper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            thirdPageData: {},
            name:"",
            phoneNo:"",
            billingEmail:"",
            address:[],
            email: "",
            phoneNumber: "",
            firstName:"",
            middleName:"",
            lastName:"",
            countryDialCode:"",
            businessRegistration:"",
            extension:"",
            priPolInd:"",
        };
    }
    // handleSubmit = (data) => {
    //     this.setState({ thirdPageData: data });
    //     this.handleComplete();
    // };

    handleNameStep1 = (e) => {
        this.setState({
            name: e.target.value
        });
    };
    handleStep1Phone = (e) => {
        this.setState({
            phoneNo: e.target.value,
        });
    };
    handleAddressStep1 = (data) => {

        this.setState({
            address: data
        });
    };
    handleMoBoStep2 = (e) => {
        this.setState({
            phoneNumber: e.target.value,
        });
    };
    handleDialCodeStep2=(dcode)=>{
        this.setState({
            countryDialCode:dcode
        })
    }
   
    handleStepEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    };
  
    handleStepFirstName = (e) => {
        this.setState({
            firstName: e.target.value
    
        });
    };
    handleStepLastName = (e) => {
        this.setState({
            lastName: e.target.value
        });
    }
    handleStepBusRegNo = (e) => {
        this.setState({
            businessRegistration: e.target.value
        });
    }
    handleStepEmailRegNo = (e) => {
        this.setState({
            billingEmail: e.target.value
        });
    }
    handleStepextension = (e) => {
        this.setState({
            extension: e.target.value
        });
    }
    handleSteppriPolInd = (newValue) => {
        this.setState({ priPolInd: newValue });
      };
    next = () => {
        const current = this.state.current + 1;
        this.setState({ current });
    };

    prev = () => {
        const current = this.state.current - 1;
        this.setState({ current });
    };
    handleComplete = () => {
    
let data={
    name:this.state.name,
    phoneNo: this.state.phoneNo,
    billingEmail:this.state.billingEmail,
    extension:this.state.extension,
    address:this.state.address,
    priPolInd:this.state.priPolInd,
    email:this.state.email,
    phoneNumber:this.state.phoneNumber,
    firstName:this.state.firstName,
    middleName:this.state.middleName,
    lastName:this.state.lastName,
    countryDialCode:this.state.countryDialCode,
    businessRegistration:this.state.businessRegistration,
    source:"SORG26873064191202024"
}
        this.props.addContact(data);
    };

    render() {
        const steps = [
            {
                title: "First",
                content:<RegistrationStep1
                handleNameStep1={this.handleNameStep1}             
                name={this.state.name} 
                handleStep1Phone={this.handleStep1Phone}
                handleStepEmailRegNo={this.handleStepEmailRegNo}
                phoneNo={this.state.phoneNo}
                billingEmail={this.state.billingEmail}
                handleAddressStep1={this.handleAddressStep1}
                address={this.state.address}

                />
            },
            {
                title: "Second",
                content: <RegistrationStep2
                handleStepEmail={this.handleStepEmail}
                handleStepFirstName={this.handleStepFirstName}
                handleStepLastName={this.handleStepLastName}
                handleMoBoStep2={this.handleMoBoStep2}
                handleDialCodeStep2={this.handleDialCodeStep2}
                handleStepBusRegNo={this.handleStepBusRegNo}
                handleStepextension={this.handleStepextension}
                firstName={this.state.firstName}
                extension={this.state.extension}
                email={this.state.email}
                lastName={this.state.lastName}
                countryDialCode={this.state.countryDialCode}
                mobileNo={this.state.mobileNo} 
                businessRegistration={this.state.businessRegistration}
                />,
            },
            {
                title: "Third",
                content: <RegistrationStep3
                priPolInd={this.state.priPolInd}
                handleSteppriPolInd={this.handleSteppriPolInd}
                />,
            },

        ];
        const { current } = this.state;
        return (
            <>
                <StyledSteps current={current}>
                    <Step
                        title={<BusinessIcon style={{ fontSize: "1.37em" }} />}
                        description="Company Info"
                    />
                    <Step
                        title={<UserOutlined style={{ fontSize: "1.37em" }} />}
                        description="Contact Details"
                    />
                  <Step
                        title={< PolicyIcon style={{ fontSize: "1.37em" }} />}
                        description="Privacy Policy"
                    />

                </StyledSteps>
                <div
                    style={{ minHeight: "35vh" }}
                >{steps[current].content}</div>
                <FlexContainer justifyContent="flex-end">
                    <div className="steps-action">
                        {current < steps.length - 1 && (
                            <>
                                {current > 1 ? null : (
                                    <>
                                        <Button
                                            type="primary"
                                            onClick={() => this.next()}
                                           
                                        // disabled={this.props.serachedData === null}
                                        >
                                            Next
                                        </Button>
                                    </>
                                )}
                            </>
                        )}

                        {current > 0 && (
                            <Button  type="primary"
                            style={{ marginTop: "45px" }} onClick={() => this.prev()}>
                                Previous
                            </Button>
                        )}
                       
                            {current === steps.length - 1 && (
                                <>
                                    <div 
                                    className="py-1 px-8 mt-3 shadow-2xl border-solid flex justify-end rounded-[2rem] ml-2   bg-[#586CB3]" style={{ boxShadow: "0.01rem 0.01rem 0.12rem 0.01rem" }}
                                        type="primary"
                                        loading={this.props.addingContact}
                                        onClick={this.state.priPolInd ? () => this.handleComplete() : null
                                            // <>
                                            // {this.state.checked ? this.handleComplete():null}
                                            // </> 
                                            }
                                  
                                    >   <label class="font-semibold text-base cursor-pointer ml-2 font-montserrat flex  h-6 justify-center items-center text-white">
                                        Confirm
                                        
                                        </label>
                                    </div>
                                    </>
                            )}
                    </div>
                  
                </FlexContainer>
            </>
        );
    }
}

const mapStateToProps = ({ auth }) => ({
      addingContact:auth.addingContact,
    
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    addContact
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationStepper);
