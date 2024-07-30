import React, { Component } from "react";
import { Button, Icon, Tooltip } from "antd";
import { Field,ErrorMessage } from "formik";
import { FlexContainer } from "../../UI/Layout";
import { Spacer, StyledLabel } from "../../UI/Elements";
import FormikPlacesAutoComplete from "./FormikPlacesAutoComplete";
import { InputComponent } from "../Formik/InputComponent";
import { SelectComponent } from "../Formik/SelectComponent";
import * as Yup from "yup";
import "../../../Container/Inventory/Inventory.scss"
class DeliveryInfoAddressFieldArray extends Component {

 
  render() {

    // const addressSchema = Yup.object().shape({
    //     // address1: Yup.string().required(''),
    //     // city: Yup.string().required(''),
    //     // pinCode: Yup.string().required(''),
    //     // state: Yup.string().required(''),

    //     address1: Yup.string().required('Address is required'),
    // city: Yup.string().required('City is required'),
    // pinCode: Yup.string().required('Pin Code is required'),
    // state: Yup.string().required('State is required'), 
    //   });

    console.log(this.props);
    const { arrayHelpers, values, singleAddress,addressSchema } = this.props;
    console.log(singleAddress);
    return (
      <div>
        {values &&
          values.address.map((address, index) => (
            <div style={{ marginTop: "5px" }}>
              <StyledLabel>Location</StyledLabel>
              <div key={index} style={{ display: "flex", width: "100%" }}>
                <Field
                  name={`address[${index}]`}
                  component={FormikPlacesAutoComplete}
                  isColumn
                />
        
                &nbsp;
              
              </div>
            
              <span>
               
                <p style={{ fontSize: "15px", color: "blue" }}>
                  Address input is only allowed using Location feature
                </p>
              
                <Field
                  name={`address.${index}.address1`}
                  label="Address 1"
                  isColumn
                  style={{ height: "1.8rem" }}
                  component={InputComponent}
                  width={"100%"}
                  inlineLabel
                  validate={addressSchema.address1}
                />
              <ErrorMessage name={`address.${index}.address1`} component="div" className="error-message" />
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
                        // validate={addressSchema.state}
                      />
                    </Tooltip>
                    <ErrorMessage name={`address.${index}.state`} component="div" className="error-message" />
                  </div>
                  <div style={{ width: "48.5%" }}>
                    <Tooltip title="Use Location feature for easy search ">
                      <Field
                        name={`address.${index}.city`}
                        label="City"
                        component={InputComponent}
                        width={"100%"}
                        isColumn
                        style={{ height: "1.8rem" }}
                        inlineLabel
                        validate={addressSchema.city}
                      />
                    </Tooltip>
                    <ErrorMessage name={`address.${index}.city`} component="div" className="error-message" />
                    </div>
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
                        // validate={addressSchema.postalCode}
                      />
                    </Tooltip>
                    {/* <ErrorMessage name={`address.${index}.postalCode`} component="div" className="error-message" /> */}
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

export default DeliveryInfoAddressFieldArray;
