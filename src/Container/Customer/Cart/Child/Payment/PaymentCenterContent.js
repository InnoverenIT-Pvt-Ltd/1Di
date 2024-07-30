import React, { useEffect, Suspense, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Formik, Form, Field, FastField, FieldArray } from "formik";
import { InputComponent } from "../../../../../Components/Forms/Formik/InputComponent";
import { Button } from "antd";
import { FlexContainer } from "../../../../../Components/UI/Layout";
import { Popconfirm } from "antd";
import SearchSelect from "../../../../../Components/Forms/Formik/SearchSelect";
import { Spacer } from "../../../../../Components/UI/Elements";
import styled from "styled-components";
import AddressFieldArray from "../../../../../Components/Forms/Formik/AddressFieldArray";
import { UpdateDeliveryInfo, getDeliveryInfo } from "../../../CustomerAction";
import * as Yup from "yup";

const PayCenterSchema = Yup.object().shape({
  // address1: Yup.string().required("Input needed!"),
  emailId: Yup.string().email("Enter a valid Email").required("Input needed!"),
  firstName: Yup.string().required("Input needed!"),
  lastName: Yup.string().required("Input needed!"),
  dialCode: Yup.string().required("Input needed!"),
  // phoneNumber: Yup.string().matches(phoneRegExp, "Enter a valid Phone No").required("Input needed!"),
  // tag_with_company: Yup.string().required("Please Select Company"),
  countryId: Yup.string().required("Input needed!"),
  phoneNo: Yup.string().required("Input needed!"),
  //address: Yup.string().required("Input needed!"),
  // city: Yup.string().required("Input needed!"),
  // country: Yup.string().required("Please select your country!"),
  // pinCode: Yup.string().required("Please select your code!"),
});
function PaymentRightContent(props) {
  const a = props.data && props.data.countryName;
  const b = props.data && props.data.countryId;
  return (
    <>
      <Formik
        initialValues={{
          firstName: props.data && props.data.firstName,
          lastName: props.data && props.data.lastName,
          // props.data && props.data.lastName ,
          // address1: "",
          emailId: props.data && props.data.emailId,
          // city: "",
          // state: "",
          // pinCode: "",
          phoneNo: props.data && props.data.phoneNo,
          dialCode: props.data && props.data.dialCode,
          // country: "",
          countryId: props.data && props.data.countryId,
          address: [
            {
              addressId: props.data && props.data.addressId,
              // addressType: "",
              address1: props.data && props.data.address1,
              // address2: "",
              // town: "",
              // street: "",
              city: props.data && props.data.city,
              pinCode: props.data && props.data.pinCode,
              state: props.data && props.data.state,
              // country: "",
              latitude: "",
              longitude: "",
            },
          ],
        }}
        validationSchema={PayCenterSchema}
        onSubmit={(values, { resetForm }) => {
          const value = localStorage.getItem("cartId");
          const final = JSON.parse(value);
          // const cartId = localStorage.getItem('cartId')

          props.UpdateDeliveryInfo(
            {
              ...values,
              address1: values.address[0].address1,
              city: values.address[0].city,
              pinCode: values.address[0].pinCode,
              state: values.address[0].state,
              latitude: values.address[0].latitude,
              longitude: values.address[0].longitude,
            },
            final.cartId,
            props.handleCallback
          );
          // resetForm();
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <Spacer marginTop="2%" />
                <Box>
                  <Box1>
                    <InputContainer>
                      <Field
                        name="firstName"
                        label="First Name"
                        type="text"
                        placeholder="Enter name"
                        width={"100%"}
                        component={InputComponent}
                        isColumn
                        inlineLabel
                      />
                    </InputContainer>
                    <InputContainer2>
                      <Field
                        name="lastName"
                        label="Last Name"
                        type="text"
                        placeholder="Enter name"
                        width={"100%"}
                        component={InputComponent}
                        isColumn
                        inlineLabel
                        // style={{
                        //   borderRadius: "0.3em",
                        //   flexBasis: "80%"
                        // }}
                      />
                    </InputContainer2>
                  </Box1>
                  <Box1>
                    <InputContainer3>
                      <FastField
                        name="dialCode"
                        label="code"
                        isColumn
                        margintop={"0px"}
                        width={"100%"}
                        selectType="dialCode"
                        component={SearchSelect}
                        isColumnWithoutNoCreate
                        inlineLabel
                      />
                    </InputContainer3>
                    <Spacer />
                    <InputContainer4>
                      <FastField
                        type="mobileNo"
                        name="phoneNo"
                        label="Mobile #"
                        placeholder="Mobile #"
                        component={InputComponent}
                        inlineLabel
                        width={"100%"}
                        isColumn
                        style={
                          {
                            // flexBasis: "80%",
                            // height: "29px",
                          }
                        }
                      />
                    </InputContainer4>
                    <Spacer />
                  </Box1>
                </Box>
                {/* <FlexContainer justifyContent="space-between">
                        <InputContainer >
                          <Field
                            name="firstName"
                            label="First Name"
                            type="text"
                            placeholder="Enter name"
                            width={"100%"}
                            component={InputComponent}
                            isColumn
                            inlineLabel
    
                          />
                        </InputContainer>
                        <InputContainer >
                          <Field
                            name="lastName"
                            label="Last Name"
                            type="text"
                            placeholder="Enter name"
                            width={"100%"}
                            component={InputComponent}
                            isColumn
                            inlineLabel
                          // style={{
                          //   borderRadius: "0.3em",
                          //   flexBasis: "80%"
                          // }}
                          />
                        </InputContainer>
                        <InputContainer>
                          <FastField
                            name="dialCode"
                            label="Country code"
                            isColumn
                            margintop={"0px"}
                            width={"100%"}
                            selectType="dialCode"
                            component={SearchSelect}
                            isColumnWithoutNoCreate
    
                            inlineLabel
                            style={{ flexBasis: "80%" }}
                          />
                        </InputContainer>
                        <InputContainer>
                          <FastField
                            type="mobileNo"
                            name="phoneNo"
                            placeholder="Mobile #"
                            label="Mobile #"
                            component={InputComponent}
                            inlineLabel
                            width={"100%"}
                            isColumn
                            style={{
                              flexBasis: "80%",
                              // height: "29px",
    
                            }}
                          />
                        </InputContainer>
                        <Spacer />
    
                      </FlexContainer> */}

                <Spacer marginTop="2%" />
                <FlexContainer justifyContent="space-between">
                  {/* <div style={{ width: "46%" }}> */}
                  <InputContainer1>
                    <Field
                      name="emailId"
                      label="Email"
                      type="text"
                      placeholder="Enter email"
                      // width={"60%"}
                      component={InputComponent}
                      isColumn
                      inlineLabel
                      //   style={{
                      //     borderRadius: "0.3em"
                      //   }}
                    />
                  </InputContainer1>
                  {/* </div> */}

                  <InputContainer1>
                    <Field
                      name="countryId"
                      // value={values.countryId}
                      label="Country"
                      type="text"
                      width={"100%"}
                      component={SearchSelect}
                      isColumnWithoutNoCreate
                      selectType="country_name"
                      defaultValue={{
                        label: a,
                        value: b,
                      }}
                      isColumn
                      placeholder="Enter country"
                      inlineLabel
                      style={{
                        borderRadius: "0.3em",
                      }}
                    />
                  </InputContainer1>
                </FlexContainer>
                <Spacer marginTop="2%" />
                {/* <FlexContainer justifyContent="space-between"> */}
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
                {/* <div style={{ width: "46%" }}>
                        <Field
                          name="address1"
                          label="Address"
                          type="text"
                          placeholder="Enter address"
                          // width={"60%"}
                          component={InputComponent}
                          isColumn
                          inlineLabel
                        //   style={{
                        //     borderRadius: "0.3em"
                        //   }}
                        />
                      </div>
                        <InputContainer1>
                          <Field
                            name="city"
                            label="City"
                            type="text"
                            width={"100%"}
                            placeholder="Enter city"
                            component={InputComponent}
                            isColumn
                            inlineLabel
                            style={{
                              borderRadius: "0.3em",
                            }}
                          />
                        </InputContainer1> 
                      </FlexContainer>
                      <Spacer marginTop="2%" />
                      <FlexContainer justifyContent="space-between">
                        <InputContainer1>
                          <Field
                            name="state"
                            label="State/Province"
                            placeholder="Enter State/Province"
                            type="text"
                            width={"100%"}
                            component={InputComponent}
                            isColumn
                            inlineLabel
                            style={{
                              borderRadius: "0.3em",
                            }}
                          />
                        </InputContainer1>
                        <InputContainer1>
                          <Field
                            name="pinCode"
                            label="Zip Code"
                            placeholder="Enter pin code"
                            type="text"
                            width={"100%"}
                            component={InputComponent}
                            isColumn
                            inlineLabel
                            style={{
                              borderRadius: "0.3em",
                            }}
                          />
                        </InputContainer1>*/}
                {/* </FlexContainer>  */}
              </div>
              <Spacer />
            </div>
            <Spacer />
            <ButtonBox>
              <Button
                type="primary"
                htmlType="submit"
                loading={props.updatingDeliveryInfo}
              >
                Update
              </Button>
              <Button type="primary" onClick={props.handleCancl}>
                cancel
              </Button>
            </ButtonBox>
          </Form>
        )}
      </Formik>
    </>
  );
}

const mapStateToProps = ({ customer, auth }) => ({
  deliveryInfo: customer.deliveryInfo,
  updatingDeliveryInfo: customer.updatingDeliveryInfo,
  updateDeliveryInfo: customer.updateDeliveryInfo,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      UpdateDeliveryInfo,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentRightContent);

const InputContainer = styled.div`
  width: 45%;

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-right: 5px;
  }
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  @media only screen and (max-width: 600px) {
  }
`;
const InputContainer1 = styled.div`
  width: 47%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
const Box = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const Box1 = styled.div`
  width: 47%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
const InputContainer3 = styled.div`
  width: 31%;

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-right: 5px;
  }
`;
const InputContainer2 = styled.div`
  width: 47%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
const InputContainer4 = styled.div`
  width: 65%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
