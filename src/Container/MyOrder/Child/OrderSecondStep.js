import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Tooltip } from "antd";
import * as Yup from "yup";
import { Formik, Form, Field, FastField } from "formik";
import { Spacer } from "../../../Components/UI/Elements";
import { FlexContainer } from "../../../Components/UI/Layout";
import { InputComponent2 } from "../../../Components/Forms/Formik/InputComponent2";
import DragableUpload1 from "../../../Components/DragableUpload1";
const BOQCSchema = Yup.object().shape({
    name: Yup.string().required("Name needed!"),
    // mobileNo: Yup.string().matches(phoneRegExp, 'Mobile number is not valid').min(10, "Too Short").max(10, "Too Large"),

});
function OrderSecondStep(props) {

    const button = {
        border: "1px solid #e1dfdf",
        fontSize: "14px",
        fontWeight: "600",
        marginLeft: "8em",
    }
    return (
        <>
            <Formik
                initialValues={{
                    // excelId: "",
                    userId: props.userId,
                    orderPhoneId: props.orderDetailsId.orderId,
                    
                }}
                validateSchema={BOQCSchema}
            // onSubmit={(values, { resetForm }) => {
            //     props.addBOQUploadForm(
            //         {
            //             ...values,
            //         },
            //         props.projectOrderId
            //     );

            // }}
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
                    <Form class="form-background">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{
                                height: "100%",
                                width: "47%",
                                marginTop: "2em"
                            }}>
                              
                                <div
                                    style={{ margin: "2em 0 0 3em" }}
                                >
                                    <DragableUpload1
            handleSetVideo={props.handleSetVideo}
          />
                                </div>
                            </div>
                            {/* <div style={{ width: "47%", marginTop: "10px" }}>
                                <div>
                                    <Field
                                        name="count"
                                        label="Phone Count"
                                        isRequired
                                        component={InputComponent2}
                                        isColumn
                                        inlineLabel
                                        style={{
                                            width: "100%",
                                            borderRight: "0.18em solid red",
                                        }}
                                    />
                                </div>
                                <div>
                                    <Field
                                        name="count"
                                        label="Status Urgent"
                                        isRequired
                                        component={InputComponent2}
                                        isColumn
                                        inlineLabel
                                        style={{
                                            width: "100%",
                                            borderRight: "0.18em solid red",
                                        }}
                                    />
                                </div>
                                <div>
                                    <Field
                                        name="count"
                                        label="Status Normal"
                                        isRequired
                                        component={InputComponent2}
                                        isColumn
                                        inlineLabel
                                        style={{
                                            width: "100%",
                                            borderRight: "0.18em solid red",
                                        }}
                                    />
                                </div>
                            </div> */}
                        </div>
                      
                    </Form>
                )}
            </Formik>
        </>
    );
}
const mapStateToProps = ({ auth, service }) => ({

});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {

        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderSecondStep);

