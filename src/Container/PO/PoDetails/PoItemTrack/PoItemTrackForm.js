import React, { useEffect } from 'react'
import AddressFieldArray from "../../../../Components/Forms/Formik/AddressFieldArray";
import { FieldArray, Form, Formik } from 'formik';
import MapItemWiseTrack from './MapItemWiseTrack';
import { Button } from 'antd';
import { getlocationDetailsForPo } from "../../PoAction"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const PoItemTrackForm = (props) => {
    useEffect(() => {
        props.getlocationDetailsForPo(props.quotationSupplierSuppliesId)
    }, [props.quotationSupplierSuppliesId])
    return (
        <>
            <Formik
                initialValues={{

                    address: [
                        {
                            addressType: "",
                            address1: "",
                            address2: "",
                            town: "",
                            street: "",
                            city: "",
                            pinCode: "",
                            country: "",
                            latitude: "",
                            longitude: "",
                        },
                    ],
                    billToAddress: [{}],
                    addressId: "",
                    imageId: "",

                }}
            // validationSchema={CustomerSchema}
            // onSubmit={(values, { resetForm }) => {

            // }}
            >
                {({
                    values,
                    errors,
                    touched,
                    isSubmitting,
                    setFieldValue,
                    setFieldTouched,
                }) => (
                    <Form class="form-background">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ width: "48%" }}>
                                <div>
                                    <FieldArray
                                        name="address"
                                        render={(arrayHelpers) => (
                                            <AddressFieldArray
                                                singleAddress
                                                arrayHelpers={arrayHelpers}
                                                values={values}
                                            />
                                        )}
                                    />
                                </div>
                                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </div>
                            <div style={{ width: "48%", marginTop: "10px" }}>
                                <MapItemWiseTrack />
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2%" }}>
                            <div style={{ width: "49%", backgroundColor: "#d9d9d9", minHeight: "20vh", padding: "1%" }}>
                                <div style={{ fontWeight: "600" }}> SHIP TO</div>
                                <div>
                                    {`${props.poLocationDetails.billAddresses && props.poLocationDetails.billAddresses[0].city || ""},
                                        ${props.poLocationDetails.billAddresses && props.poLocationDetails.billAddresses[0].street || ""},
                                        ${props.poLocationDetails.billAddresses && props.poLocationDetails.billAddresses[0].state || ""},
                                        ${props.poLocationDetails.billAddresses && props.poLocationDetails.billAddresses[0].country || ""},
                                        ${props.poLocationDetails.billAddresses && props.poLocationDetails.billAddresses[0].pinCode || ""}`}
                                </div>
                            </div>
                            <div style={{ width: "49%", backgroundColor: "#d9d9d9", minHeight: "20vh", padding: "1%" }}>
                                <div style={{ fontWeight: "600" }}>BILL TO</div>
                                <div>
                                    {`${props.poLocationDetails.shipAddresses && props.poLocationDetails.shipAddresses[0].city || ""},
                                        ${props.poLocationDetails.shipAddresses && props.poLocationDetails.shipAddresses[0].street || ""},
                                        ${props.poLocationDetails.shipAddresses && props.poLocationDetails.shipAddresses[0].state || ""},
                                        ${props.poLocationDetails.shipAddresses && props.poLocationDetails.shipAddresses[0].country || ""},
                                        ${props.poLocationDetails.shipAddresses && props.poLocationDetails.shipAddresses[0].pinCode || ""}`}


                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}
const mapStateToProps = ({ po, auth }) => ({
    poLocationDetails: po.poLocationDetails
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            getlocationDetailsForPo
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(PoItemTrackForm);


