import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, message } from "antd";
import { bindActionCreators } from "redux";
import { StyledSteps } from "../../../Components/UI/Antd";
import { FlexContainer } from "../../../Components/UI/Layout";

import HomeStep1 from "./HomeStep1";
import HomeStep2 from "./HomeStep2";

import { withRouter } from "react-router-dom";

//import { register } from "./HomeStepperAction";

const Step = StyledSteps.Step;

class CoursesCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            address: [],
            reqImage:[],
            imageIds:[],
            noOfItems: "",
            thirdPageData: {},
            description: "",
            emailId: "",
            firstName: "",
            lastName: "",
            phoneNo: "",
            duration: "",
            taskId: "",
            dialCode: "+31",
            password:"",
        };
    }

    // handleHomeStep1 = (data) => {

    //     this.setState({
    //         address: data
    //     });
    // };

    // handleHomeStep2 = (e) => {
    //     this.setState({
    //         taskId: e.target.value
    //     });
    // };
    // handleHomeStep3 = (e) => {
    //     this.setState({
    //         noOfItems: e.target.value
    //     });
    // };
    // handleStep1 = (e) => {
    //     this.setState({
    //         duration: e.target.value,
    //     });
    // };
    // handleStep2 = (e) => {
    //     this.setState({
    //         //age: e.target.value,
    //     });
    // };
    // handleStep3 = (e) => {
    //     this.setState({
    //         description: e.target.value,
    //     });
    // };

    // home step 5
    // handleHomeStep5Email = (e) => {
    //     this.setState({
    //         emailId: e.target.value
    //     });
    // };
    // handleHomeStep5Password = (e) => {
    //     this.setState({
    //         password: e.target.value
    //     });
    // };
    // handleHomeStep5FirstName = (e) => {
    //     this.setState({
    //         firstName: e.target.value

    //     });
    // };
    // handleHomeStepLastName = (e) => {
    //     this.setState({
    //         lastName: e.target.value
    //     });
    // };
    // handleHomeStep5Phone = (e) => {
    //     this.setState({
    //         phoneNo: e.target.value,
    //     });
    // };
    // end 


    // handleSubmit = (data) => {
    //     this.setState({ thirdPageData: data });
    //     this.handleComplete();
    // };
  

    // handleSetImage = (imageId) => {
    //     console.log(imageId)
    //     this.setState((prevState) => ({
    //         imageIds: [...prevState.imageIds, imageId],
    //       }),
    //       );
    //   };
      
    // callback = () => {
    //     message.success("Registration Successfull");
    //     this.props.history.push("/requirement");
    //   };
    next = () => {
        const current = this.state.current + 1;
        this.setState({ current });
    };

    prev = () => {
        const current = this.state.current - 1;
        this.setState({ current });
    };
    // handleComplete = () => {
    //     console.log();
    //     let data = {
    //         firstName: this.state.firstName,
    //         emailId: this.state.emailId,
    //         lastName: this.state.lastName,
    //         phoneNo: this.state.phoneNo,
    //         dialCode: this.state.dialCode,
    //         tempId: this.props.tempData.tempId,
    //         password: this.state.password,
           
    //     }
    //     this.props.register(data,this.callback)
    // };

    // allDataSubmit = () => {
    //     console.log(data)
    //     let data = {
    //         address: this.state.address,
    //         reqImage:this.state.imageIds,
    //         taskId:this.state.taskId,
    //         noOfItems: this.state.noOfItems,
    //         duration: this.state.duration,
    //         description: this.state.description,
    //         categoryId: this.props.subCatagoryDetails.categoryId,
    //         subCategoryId: this.props.subCatagoryDetails.subCategoryId,
    //         tempId: this.props.tempData.tempId,
    //     };
    //     this.props.addingHomeStepper(data)
    // }
    render() {
        const steps = [
            {
                title: "1",
                content: <HomeStep1
                   // handleHomeStep1={this.handleHomeStep1}
                //   allDataSubmit={this.allDataSubmit}
                //name={this.state.name}
                />
            },
            {
                title: "2",
                content: <HomeStep2
                    // handleHomeStep2={this.handleHomeStep2}
                    // taskId={this.state.taskId}
                    // subCategoryId={this.props.subCatagoryDetails.subCategoryId}
                />
            },
            
      


        ];
        const { current } = this.state;
        return (
            <>
            <div class="h-full overflow-hidden">
                {/* <div>
                    <Header />
                </div> */}
                <Form>
                    <div class=" flex max-sm: w-11/12 mt-24  md:flex-col">
                        <div class="max-sm: w-12 ml-margin5 md:w-full" >

                        <StyledSteps  current={current}  >
                            <Step 
                            // title={<ShoppingCartOutlined style={{ fontSize: "1.37em" }} />}
                            // title={<i class="fas fa-cube" style={{ fontSize: "1.37em" }}></i>}
                            // type="shopping-cart"
                            //  description="Address"
                            />
                            <Step
                            // title={<UserOutlined style={{ fontSize: "1.37em" }} />}
                            // type="user"
                            // description="PI"
                            />
                           
                           


                        </StyledSteps>
                        </div>
                        <div 
                        //  style={{ minHeight: "40vh" }}
                        >{steps[current].content}</div>
                     

                    </div>
                </Form>
                <div class="max-sm: flex flex-row justify-center mt-5 md:mt-10 ">
                        <div class="max-sm: flex flex-row justify-center" >
                           
                                <div >
                                    {current > 0 && (
                                        <Button 
                                            type="primary"
                                            
                             onClick={() => this.prev()}
                            >
                                            Previous
                                        </Button>
                                    )}

                                </div>
                                <div className="steps-action">
                                    {current < steps.length - 1 && (
                                        <>
                                            {/* {current > 1 ? null : (
                                    <>
                                        <Button
                                            type="primary"
                                            onClick={() => this.next()}
                                            style={{ marginTop: "45px" }}
                                        // disabled={this.props.serachedData === null}
                                        >
                                            Next
                                        </Button>
                                    </>
                                )} */}
                                            <Button class="md: h-20"
                                                type="primary"
                                                onClick={() => {
                                                    this.next();
                                                    // this.allDataSubmit()
                                                }}
                                            >
                                                Next
                                            </Button>
                                        </>
                                    )}
                                </div>

    
                        </div>
                        {/* <div>
                                    {current === steps.length - 1 && (
                                        <>
                                            <Button
                                                type="primary"
                                                onClick={() => this.handleComplete()}
                                            >Complete
                                            </Button>

                                        </>
                                    )}
                                </div> */}
                                </div>
                {/* <div class="w-full max-sm:mt-4 md:absolute bottom-0 ">
                    <OfferFooter />
                </div> */}
                </div>
            </>
        );
    }
}

const mapStateToProps = ({ homeStepper }) => ({
    // subCatagoryDetails: homeStepper.subCatagoryDetails,
    // tempData: homeStepper.tempData,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    // addingHomeStepper,
    // register
}, dispatch);

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(CoursesCart)
);
