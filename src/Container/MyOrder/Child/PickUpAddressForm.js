import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Formik, Form, Field, FastField, FieldArray } from "formik";
import { FlexContainer } from "../../../Components/UI/Layout";
import { DatePicker } from "../../../Components/Forms/Formik/DatePicker";
import UnLoadingAddressField from "../../../Components/Forms/Formik/UnloadingAddressField";
import { Button } from "antd";
import { addPickUpAddress } from "../MyOrderAction"
import moment from "moment";

function PickUpAddressForm(props) {
    const buttonStyle = {
        borderRadius: "1rem",
        fontSize: "1rem",
        color: "#01beee",
        padding: "0.25rem 0.75rem"
    }
    return (
        <>
            <Formik
                enableReinitialize
                initialValues={{
                    pickupInd: true,
                    dispatchInspectionInd: 4,
                    pickupDeliveryDate: moment(),
                    unloadingAddress: [
                        {
                            addressType: "",
                            address1: "",
                            address2: "",
                            addressId: props.rowDatas.unloadingAddress &&
                                props.rowDatas.unloadingAddress[0].addressId || "",
                            town: "",
                            street: "",
                            city: "",
                            pinCode: "",
                            country: "",
                            county: "",
                            latitude: "",
                            longitude: "",
                            location: "",
                            state: "",
                        },
                    ],
                }}

                onSubmit={(values, { resetForm }) => {
                    props.addPickUpAddress(
                        {
                            ...values,
                            unloadingUserId: props.userId,
                            orderId: props.rowDatas.orderId
                        },
                        props.rowDatas.orderId,
                        props.userId
                    );
                    resetForm();
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
                    <Form>

                        <div style={{ width: "47%" }}>
                            <FieldArray
                                name="unloadingAddress"
                                render={(arrayHelpers) => (
                                    <UnLoadingAddressField
                                        singleAddress
                                        arrayHelpers={arrayHelpers}
                                        values={values}
                                    />
                                )}
                            />
                        </div>

                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <Button
                                htmlType="submit"
                                style={buttonStyle}
                                loading={props.addingPickUpAddress}
                            >
                                Submit
                            </Button>
                        </div>


                    </Form>
                )}
                {/*  */}
            </Formik>
        </>
    );
}

const mapStateToProps = ({ auth, myorder }) => ({
    addingPickUpAddress: myorder.addingPickUpAddress,
    userId: auth.userDetails.userId
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            addPickUpAddress
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PickUpAddressForm);
