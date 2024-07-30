import React,{useEffect} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from 'styled-components'
import { Formik, Form, Field, FastField,FieldArray } from "formik";
import SearchSelect from "../../../../Components/Forms/Formik/SearchSelect";
import { Spacer } from "../../../../Components/UI/Elements";
import * as Yup from "yup";
import { Button } from "antd";
import { InputComponent } from "../../../../Components/Forms/Formik/InputComponent";
import { FlexContainer } from "../../../../Components/UI/Layout";
import AddressFieldArray from "../../../../Components/Forms/Formik/AddressFieldArray";
import { addDeliveryInfo } from "../../CustomerAction";
import { Link, useHistory } from "react-router-dom";


const CartMainSchema = Yup.object().shape({
  // address1: Yup.string().required("Input needed!"),
  // // emailId: Yup.string()
  // //   .email("Enter a valid Email")
  // //   .required("Input needed!"),
  // firstName: Yup.string().required("Input needed!"),
  // dialCode:Yup.string().required("Please select your code!"),
  // // phoneNumber: Yup.string().matches(phoneRegExp, "Enter a valid Phone No").required("Input needed!"),
  // // tag_with_company: Yup.string().required("Please Select Company"),
  // pinCode: Yup.string().required("Input needed!"),
  // mobileNo: Yup.string().required("Input needed!"),
  // state: Yup.string().required("Input needed!"),
  // city: Yup.string().required("Input needed!"),
  // // country: Yup.string().required("Please select your country!"),
  // pinCode: Yup.string().required("Please select your code!"),
});

function CartMainContentForm(props) {
  // const shopName= props.shopName.name
  // const str = shopName&&shopName.replace(/ +/g, "");
  // console.log(str)
  let history = useHistory();

  function handleCallBack(data) {
    // console.log(data,orderId)
    history.push(`/shopName/payment`)
  }
  
  useEffect(() => {
    //props. getCountries();
  }, []);
  //  const {addDeliveryInfo}=props;
 
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          emailId: "",
          phoneNo: "",
          dialCode: "",
          countryId: "",
          address: [
            {
              address1: "",
              city: "",
              pinCode: "",
              state: "",
              latitude: "",
              longitude: "",
            },
          ],
          
        }}
        // validationSchema={CartMainSchema}
        onSubmit={(values, { resetForm }) => {
          const cartId=sessionStorage.getItem("cartId");
          console.log(cartId);
          props.addDeliveryInfo(

            
            {
              ...values,
              
              address1: values.address[0].address1,
              city: values.address[0].city,
              pinCode: values.address[0].pinCode,
              state: values.address[0].state,
              latitude: values.address[0].latitude,
              longitude: values.address[0].longitude,
            },cartId,handleCallBack 
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <Spacer marginTop= "2%"  />
                <div style={{ display: "flex",width: "97%", justifyContent: "space-between" }}>
                <div
                style={{
                  // height: "100%",
                  width: "47%",
                }}
              >

                {/* <FlexContainer style={{justifyContent: "space-between"}}>
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
                      // style={{
                      //   borderRadius: "0.3em",
                      // }}
                    />
                  </InputContainer >
                  <Spacer />

                  <InputContainer>
                    <Field
                      name="lastName"
                      label="Last Name"
                      type="text"
                      placeholder="Enter name"
                      component={InputComponent}
                      isColumn
                      inlineLabel
                      // style={{
                      //   borderRadius: "0.3em",
                      //   flexBasis: "80%"
                      // }}
                    />
                  </InputContainer>
                  </FlexContainer> */}
              </div>

              <div
                style={{
                  // height: "100%",
                  width: "47%",
                }}
              >
                {/* <FlexContainer style={{justifyContent: "space-between"}}>
                  <InputContainer3>
                      <FastField
                        name="dialCode"
                        label="Mobile #"
                        isColumn
                        margintop={"0px"}
                        width={"100%"}
                         selectType="dialCode"
                        component={SearchSelect}
                        isColumnWithoutNoCreate
                        inlineLabel
                        // style={{ flexBasis: "80%" }}
                      />
                    </InputContainer3>
                    <Spacer />
                    <InputContainer4>
                      <FastField
                        type="mobileNo"
                        name="mobileNo"
                        placeholder="Phone #"
                        component={InputComponent}
                        inlineLabel
                        width={"100%"}
                        isColumn
                        style={{
                          // flexBasis: "80%",
                          // height: "29px",
                      
                        }}
                      />
                    </InputContainer4>
                  </FlexContainer> */}
                </div>
                </div>
                {/* <Spacer marginTop= "2%"  /> */}
                {/* <InputContainer5>
                <Field
                      name="countryId"
                      // value={values.countryId}
                      label="Country"
                      type="text"
                      width={"100%"}
                      component={SearchSelect}
                      isColumnWithoutNoCreate
                      selectType="country_name"
                      isColumn
                      placeholder="Enter country"
                      inlineLabel
                      style={{
                        borderRadius: "0.3em",
                      }}
                    />
                </InputContainer5> */}
                <Spacer marginTop= "2%"  />
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
                <Spacer />
              </div>
              <Spacer />
            </div>
            <Spacer />
            <FlexContainer justifyContent="flex-end">
              {/* <Link to="/shopName/payment"> */}
                <Button type="primary"
                htmlType="submit" 
                loading={props.addingDeliveryInfo}
                >
                  Next
                </Button>
              {/* </Link> */}
            </FlexContainer>
          </Form>
        )}
      </Formik>
    </>
  );
}

const mapStateToProps = ({ customer,auth }) => ({
  addingDeliveryInfo: customer.addingDeliveryInfo,
  countries: auth.countries,
  fetchingCountries: auth.fetchingCountries,
  shopName:customer.shopName
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addDeliveryInfo,
     // getCountries
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartMainContentForm);
const InputContainer = styled.div`
 
  width: 45%;
  
  @media only screen and (max-width: 600px) {
    width: 100%;
    
  }
`
const InputContainer2 = styled.div`
 
  width: 47%;
  
  @media only screen and (max-width: 600px) {
    width: 100%;
    
  }
`
const InputContainer3 = styled.div`
 
  width: 28%;
  
  @media only screen and (max-width: 600px) {
    width: 100%;
    
  }
`
const InputContainer4 = styled.div`
 
  width: 65%;
  
  @media only screen and (max-width: 600px) {
    width: 100%;
    
  }
`
const InputContainer5 = styled.div`
 
  width: 97%;
  
  @media only screen and (max-width: 600px) {
    width: 100%;
    
  }
`