import React, { Component } from "react";
import { Button, Icon, Tooltip } from "antd";
import { Field } from "formik";
import { FlexContainer } from "../../UI/Layout";
import { Spacer, StyledLabel } from "../../UI/Elements";
import FormikPlacesAutoComplete from "./FormikPlacesAutoComplete";
import { InputComponent } from "./InputComponent";
import { SelectComponent } from "./SelectComponent";

class RegisterAddressFieldArray extends Component {

  componentDidMount(){
    this.props.handleAddressStep1(this.props.values.address);

      }
      componentDidUpdate(Previous,prevP){
        if(this.props !== prevP){
        this.props.handleAddressStep1(this.props.values.address);}
        console.log("Add2",this.props.values)   
      }

  render() {
    console.log(this.props);
    const { arrayHelpers, values, singleAddress,handleAddressStep1 } = this.props;
    console.log(singleAddress);
    return (
      <div>
        {values &&
          values.address.map((address, index) => (
            <div style={{ marginTop: "5px" }}>            
              <div key={index} style={{ display: "flex", width: "100%" }}>
                <Field
                  name={`address[${index}]`}
                  // label="Location"
                  component={FormikPlacesAutoComplete}
                  isColumn
                />
                {/* <FormikPlacesAutoComplete /> */}
                &nbsp;
                {/* <div style={{ marginTop: "7px" }}>
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
                          // pinCode: "",
                          postalCode:"",
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
                </div> */}
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
                {/* <Spacer style={{ marginBottom: "15px" }} /> */}
                <p style={{ fontSize: "15px", color: "blue" }}>
                  Address input is only allowed using Location feature
                </p>
                {/* <Spacer style={{ marginBottom: "15px" }} /> */}
                <Field
                  name={`address.${index}.address1`}
                  label="Address 1"
                  isColumn
                  style={{ height: "1.8rem" }}
                  component={InputComponent}
                  width={"100%"}
                  inlineLabel
                />
                {/* <Field name={`address.${index}.address2`}
                                label='Address2'
                                component={InputComponent}
                            /> */}
                <Field
                  name={`address.${index}.street`}
                  label="Street"
                  component={InputComponent}
                  disabled
                  width={"100%"}
                  style={{ height: "1.8rem" }}
                  isColumn
                  inlineLabel
                />
                <FlexContainer justifyContent="space-between">
                  <div style={{ width: "48.5%" }}>

                    <Tooltip title="Use Location feature for easy search ">
                      <Field
                        name={`address.${index}.state`}
                        label="State"
                        component={InputComponent}
                        disabled
                        width={"100%"}
                        isColumn
                        inlineLabel
                        style={{ height: "1.8rem" }}
                      />
                    </Tooltip>
                  </div>
                  <div style={{ width: "48.5%" }}>
                    <Tooltip title="Use Location feature for easy search ">
                      <Field
                        name={`address.${index}.city`}
                        label="City"
                        component={InputComponent}
                        disabled
                        width={"100%"}
                        isColumn
                        style={{ height: "1.8rem" }}
                        inlineLabel
                      />
                    </Tooltip></div>
                </FlexContainer>
                <FlexContainer justifyContent="space-between">
                  <div style={{ width: "48.5%" }}>
                    <Tooltip title="Use Location feature for easy search ">
                      <Field
                        name={`address.${index}.country`}
                        label="Country"
                        disabled
                        component={InputComponent}
                        isColumn
                        width={"100%"}
                        style={{ height: "1.8rem" }}
                        inlineLabel
                      />
                    </Tooltip>
                  </div>
                  <div style={{ width: "48.5%" }}>
                    <Tooltip title="Use Location feature for easy search ">
                      <Field
                        name={`address.${index}.postalCode`}
                        label="Pin Code"
                        component={InputComponent}
                        isColumn
                        style={{ height: "1.8rem" }}
                        width={"100%"}
                        inlineLabel
                      />
                    </Tooltip>
                  </div>
                </FlexContainer>
                <Spacer />
              </span>
            </div>
          ))}
      </div>
    );
  }
}

export default RegisterAddressFieldArray;
