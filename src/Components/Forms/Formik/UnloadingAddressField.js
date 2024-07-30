import React, { Component } from "react";
import { Button, Icon, Tooltip } from "antd";
import { Field } from "formik";
import { FlexContainer } from "../../UI/Layout";
import { Spacer, StyledLabel } from "../../UI/Elements";
import FormikPlacesAutoComplete from "./FormikPlacesAutoComplete";
import { InputComponent } from "../Formik/InputComponent";
import { SelectComponent } from "../Formik/SelectComponent";
class UnLoadingAddressField extends Component {
    render() {
        console.log(this.props);
        const { arrayHelpers, values, singleAddress } = this.props;
        console.log(singleAddress);
        return (
            <div>
                {values &&
                    values.unloadingAddress.map((address, index) => (
                        <div>
                            {/* <StyledLabel style={{ marginTop: "12px" }}>Address</StyledLabel> */}
                            <div key={index} style={{ display: "flex" }}>
                                <Field
                                    name={`unloadingAddress[${index}]`}
                                    // label="Location"
                                    component={FormikPlacesAutoComplete}
                                    isColumn
                                    options={{}}
                                    style={{ height: "29px", marginTop: "0px" }}
                                />
                                {/* <FormikPlacesAutoComplete /> */}
                                &nbsp;
                                <div style={{ marginTop: "7px" }}>
                                    {!singleAddress && (
                                        <Button
                                            type="primary"
                                            htmlType="button"
                                            onClick={() =>
                                                arrayHelpers.push({
                                                    addressType: "",
                                                    address1: "",
                                                    address2: "",
                                                    town: "",
                                                    street: "",
                                                    city: "",
                                                    state: "",
                                                    pinCode: "",
                                                    country: "",
                                                    latitude: "",
                                                    longitude: "",
                                                })
                                            }
                                        >
                                            +
                                        </Button>
                                    )}
                                </div>
                                &nbsp;
                                <div style={{ marginTop: "7px" }}>
                                    {!singleAddress && (
                                        <Button
                                            type="primary"
                                            htmlType="button"
                                            onClick={() => arrayHelpers.remove(index)}
                                        >
                                            -
                                        </Button>
                                    )}
                                </div>
                            </div>
                            {/* {!singleAddress && (
                <Button
                  type="primary"
                  htmlType="button"
                  onClick={() => arrayHelpers.remove(index)}
                >
                  -
                </Button>
              )} */}
                            <span>
                                {/* <Field
                                name={`address[${index}].addressType`}
                                label='Type'
                                component={SelectComponent}
                                options={['Office', 'Communication', 'Headquarters', 'Registered']}
                                inlineLabel
                            /> */}
                                <p style={{ fontSize: "12px" }}>
                                    Address input is only allowed using Location feature
                                </p>
                                <Field
                                    name={`unloadingAddress.${index}.address1`}
                                    label="House No"
                                    isColumn
                                    component={InputComponent}
                                    width={"100%"}
                                    inlineLabel
                                />
                                {/* <Field name={`address.${index}.address2`}
                                label='Address2'
                                component={InputComponent}
                            /> */}
                                <Field
                                    name={`unloadingAddress.${index}.street`}
                                    label="Street"
                                    component={InputComponent}
                                    disabled
                                    width={"100%"}
                                    isColumn
                                    inlineLabel
                                />
                                <Tooltip title="Use Location feature for easy search ">
                                    <Field
                                        name={`unloadingAddress.${index}.city`}
                                        label="City"
                                        component={InputComponent}
                                        disabled
                                        width={"100%"}
                                        isColumn
                                        inlineLabel
                                    />
                                </Tooltip>
                                <FlexContainer justifyContent="space-between">
                                    <div style={{ width: "47%" }}>
                                        <Tooltip title="Use Location feature for easy search ">
                                            <Field
                                                name={`unloadingAddress.${index}.state`}
                                                label="State"
                                                component={InputComponent}
                                                disabled
                                                width={"100%"}
                                                isColumn
                                                inlineLabel
                                            />
                                        </Tooltip>
                                    </div>
                                    <div style={{ width: "47%" }}>
                                        <Tooltip title="Use Location feature for easy search ">
                                            <Field
                                                name={`unloadingAddress.${index}.pinCode`}
                                                label="Pin Code"
                                                component={InputComponent}
                                                isColumn
                                                width={"100%"}
                                                inlineLabel
                                            />
                                        </Tooltip>
                                    </div>
                                </FlexContainer>
                                <Tooltip title="Use Location feature for easy search ">
                                    <Field
                                        name={`unloadingAddress.${index}.country`}
                                        label="Country"
                                        disabled
                                        component={InputComponent}
                                        isColumn
                                        width={"100%"}
                                        inlineLabel
                                    />
                                </Tooltip>
                            </span>
                        </div>
                    ))}
            </div>
        );
    }
}

export default UnLoadingAddressField;

