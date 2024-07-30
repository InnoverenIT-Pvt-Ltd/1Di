import React, { Component } from "react";
import { Button, Icon, Tooltip } from "antd";
import { Field } from "formik";
import { EnvironmentOutlined } from '@ant-design/icons';
import { FlexContainer } from "../../UI/Layout";
import { Spacer, StyledLabel } from "../../UI/Elements";
import FiledSearchLarge from "./FieldSearchLarge";
import { values } from "lodash";
import { InputComponent2 } from "./InputComponent2";
class AddressFieldArray3 extends Component {
    componentDidMount() {
        this.props.handleHomeStep2(this.props.values);
        console.log("Add1", this.props.values.loadingAddress)
    }
    componentDidUpdate(Previous, prevP) {
        if (this.props !== prevP) {
            this.props.handleHomeStep2(this.props.values.loadingAddress);
        }
        console.log("Add2", this.props.values)
    }
    render() {

        const { arrayHelpers, values, singleAddress, handleHomeStep1 } = this.props;
        return (
            <div>
                {values &&
                    values.loadingAddress.map((address, index) => (
                        <div >
                            <div key={index} style={{ display: "flex", width: "100%" }}>
                                {/* <div style={{ width: "5%" }}> */}
                                <EnvironmentOutlined
                                    // type="environment"
                                    style={{
                                        fontSize: "1.2em",
                                        margin: "0px 0.68em 0.42rem",
                                        placeSelf: "center",
                                    }}
                                />
                                {/* </div> */}
                                {/* <div style={{ width: "90%"}}> */}
                                <Field
                                    name={`loadingAddress[${index}]`}
                                    // label="Location"
                                    component={FiledSearchLarge}
                                    isColumn
                                    options={{}}
                                //style={{height:"3rem !important"}} 
                                />
                                {/* </div> */}
                                {/* <FormikPlacesAutoComplete /> */}
                                {/* <div 
                //style={{ marginTop: "0.4375em" }}
                > */}
                                {/* {!singleAddress && (
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
                          postalCode: "",
                          country: "",
                          latitude: "",
                          longitude: "",
                        })
                      }
                    >
                      +
                    </Button>
                  )} */}
                                {/* </div> */}

                                {/* <div 
               // style={{ marginTop: "0.4375em" }}
                > */}
                                {/* {!singleAddress && (
                    <Button
                      type="primary"
                      htmlType="button"
                      onClick={() => arrayHelpers.remove(index)}
                    >
                      -
                    </Button>
                  )} */}
                                {/* </div> */}
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
                                style={{ flexBasis: '80%' }}
                            /> */}
                                <p class="font-bold font-poppins text-blue-400 text-base">Address input is only allowed using Location feature</p>
                                <div class="flex justify-between ml-4">
                                <FlexContainer justifyContent="space-between">
                                    <div style={{ width: "48.5%" }}>
                                        <Field
                                            name={`loadingAddress.${index}.address1`}
                                            label="Address"
                                            isColumn
                                            component={InputComponent2}
                                            style={{ borderRadius: "10px", borderLeft: "8px solid #5986fb" }}
                                            width={"100%"}
                                            inlineLabel
                                        />
                                    </div>
                                    <div style={{ width: "48.5%" }}>
                                        <Field
                                            name={`loadingAddress.${index}.street`}
                                            label="Street"
                                            component={InputComponent2}
                                            style={{ borderRadius: "10px", borderLeft: "8px solid #5986fb" }}
                                            width={"100%"}
                                            isColumn
                                            inlineLabel
                                        />
                                    </div>
                                </FlexContainer>
                                <FlexContainer justifyContent="space-between"style={{marginLeft:"1rem"}}>
                                    <div style={{ width: "48.5%" }}>
                                        <Tooltip title="Use Location feature for easy search ">
                                            <Field
                                                name={`loadingAddress.${index}.city`}
                                                label="City"
                                                component={InputComponent2}
                                                style={{ borderRadius: "10px", borderLeft: "8px solid #5986fb" }}
                                                disabled
                                                width={"100%"}
                                                isColumn
                                                inlineLabel
                                            />
                                        </Tooltip>
                                    </div>
                                    <div style={{ width: "48.5%" }}>
                                        <Tooltip title="Use Location feature for easy search ">
                                            <Field
                                                name={`loadingAddress.${index}.state`}
                                                label="State/Province"
                                                component={InputComponent2}
                                                style={{ borderRadius: "10px", borderLeft: "8px solid #5986fb" }}
                                                disabled
                                                width={"100%"}
                                                isColumn
                                                inlineLabel
                                            />
                                        </Tooltip>
                                    </div>
                                </FlexContainer>
                                </div>
                                <FlexContainer justifyContent="space-between"style={{marginLeft:"1rem"}}>
                                    <div style={{ width: "48.5%" }}>
                                        <Tooltip title="Use Location feature for easy search ">
                                            <Field
                                                name={`loadingAddress.${index}.country`}
                                                label="Country"
                                                disabled
                                                component={InputComponent2}
                                                style={{ borderRadius: "10px", borderLeft: "8px solid #5986fb" }}
                                                isColumn
                                                width={"100%"}
                                                inlineLabel
                                            />
                                        </Tooltip>
                                    </div>

                                    <div style={{ width: "48.5%" }}>
                                        <Tooltip title="Use Location feature for easy search ">
                                            <Field
                                                name={`loadingAddress.${index}.postalCode`}
                                                label="Zip code"
                                                component={InputComponent2}
                                                style={{ borderRadius: "10px", borderLeft: "8px solid #5986fb" }}
                                                isColumn
                                                width={"100%"}
                                                inlineLabel
                                            />
                                        </Tooltip>
                                    </div>
                                </FlexContainer>
                            </span>
                        </div>
                    ))}
            </div>
        );
    }
}

export default AddressFieldArray3;
