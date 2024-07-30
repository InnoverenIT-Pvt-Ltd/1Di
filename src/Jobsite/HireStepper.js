import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, message } from "antd";
import { bindActionCreators } from "redux";
import { Formik, Form, Field } from "formik";
import { MainWrapper } from "../Components/UI/Layout";
import { StyledSteps } from "../Components/UI/Antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { FlexContainer } from "../Components/UI/Layout";
import AddJobHireForm from "./AddJobHireForm";
import AddJobHireConfirmForm from "./AddJobHireConfirmForm";
import JobCustomerDetailsForm from "./JobCustomerDetailsForm";
const Step = StyledSteps.Step;

class HireStepper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            thirdPageData: {},
        };
    }
    handleSubmit = (data) => {
        this.setState({ thirdPageData: data });
        this.handleComplete();
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
        console.log(this.state.thirdPageData);
    };

    render() {
        const steps = [
            {
                title: "First",
                content: <AddJobHireForm projectOrderId={this.props.projectOrderId} />
            },
            {
                title: "Second",
                content: <AddJobHireConfirmForm projectOrderId={this.props.projectOrderId} />,
            },
            {
                title: "Third",
                content: <JobCustomerDetailsForm projectOrderId={this.props.projectOrderId} />,
            },


        ];
        const { current } = this.state;
        return (
            <>
                <StyledSteps current={current}>
                    <Step
                        // title={<ShoppingCartOutlined style={{ fontSize: "1.37em" }} />}
                        title={<UserOutlined style={{ fontSize: "1.37em" }} />}
                        // type="shopping-cart"
                        description="Step 1"
                    />
                    <Step
                        title={<UserOutlined style={{ fontSize: "1.37em" }} />}
                        // type="user"
                        description="Step 2"
                    />
<Step
                        title={<UserOutlined style={{ fontSize: "1.37em" }} />}
                        // type="user"
                        description="Step 3"
                    />

                </StyledSteps>
                <div
                    style={{ minHeight: "40vh" }}
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
                                            style={{ marginTop: "45px" }}
                                        // disabled={this.props.serachedData === null}
                                        >
                                            Next
                                        </Button>
                                    </>
                                )}
                            </>
                        )}

                        {current > 0 && (
                            <Button style={{ marginTop: "45px" }} onClick={() => this.prev()}>
                                Previous
                            </Button>
                        )}
                    </div>
                </FlexContainer>
            </>
        );
    }
}

const mapStateToProps = ({ quote }) => ({
    //   quotationId:quote.quoteSupplies.quotationId,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HireStepper);
