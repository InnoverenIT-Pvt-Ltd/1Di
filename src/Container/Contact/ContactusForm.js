import React, { useEffect,useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, } from "antd";
import { FormattedMessage } from "react-intl";
import { Formik, Form, Field, FieldArray, FastField,setFieldValue  } from "formik";
import * as Yup from "yup";
import SearchSelect from "../../Components/Forms/Formik/SearchSelect1";
import AddressFieldArray from "../../Components/Forms/Formik/AddressFieldArray";
import {
  addContact, 
  setClearbitData,
//   getCrm
} from "../Auth/AuthAction";
import { TextareaComponent } from "../../Components/Forms/Formik/TextareaComponent";
import { InputComponent } from "../../Components/Forms/Formik/InputComponent";
import ProgressiveImage from "../../Components/Utils/ProgressiveImage";
import ClearbitImage from "../../Components/Forms/Autocomplete/ClearbitImage";
import { MainWrapper } from "../../Components/UI/Elements";

// yup validation scheme for creating a account
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
// const LeadsSchema = Yup.object().shape({
//   firstName: Yup.string().required("Input needed!"),
//   email: Yup.string().required("Input needed!").email("Enter a valid Email"),
//   phoneNumber:Yup.string().matches(phoneRegExp, 'Phone number is not valid').min(8,"Minimum 8 digits").max(10,"Number is too long")
// });

function ContactusForm (props) {
  
 const handleReset = (resetForm) => {
    resetForm();
  };
 
  useEffect(()=> {
// props. getCrm();
  },[]);

  const {
    addingContact,
    addContact,
    clearbit,
    setClearbitData,
  } = props;

    return (
      <>
        <Formik
          // enableReinitialize
          initialValues={{ 
            url: "",
            email: "",
            phoneNumber: "",
            firstName:"",
            middleName:"",
            lastName:"",
           
            countryDialCode:"",
            address: [
              {
                address1: "",
                address2: "",
                street: "",
                city: "",
                state: "",
                postalCode: "",
              },
            ],

          }}
        //   validationSchema={LeadsSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            addContact(
              {
                ...values,
                // companyName: "",
                
              },
            //   props.userId,
            );
            resetForm()

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
            <div class="overflow-y-auto h-[34rem] overflow-x-hidden max-sm:h-[30rem]">
            <Form class="flex justify-center ">
              <MainWrapper>
            <div class="font-bold m-[0.1rem-0-0.02rem-0.2rem] text-lg flex flex-col">Contact us </div>
            <div class="">
                    {clearbit && clearbit.hasOwnProperty("logo") && (
                      <ProgressiveImage
                        preview={
                          "http://pluspng.com/img-png/twitter-logo-png-twitter-logo-png-256.png"
                        }
                        image={clearbit.logo}
                        width={140}
                        height={150}
                        borderRadius={25}
                        padding={15}

                      />
                    )}
                    {clearbit && clearbit.hasOwnProperty("logo") ? (
                      <a
                        href="https://clearbit.com"
                        target="_blank"
                        style={{ fontSize: 13, marginLeft: 5 }}
                      >
                        Logos provided by Clearbit
                      </a>
                    ) : null}
                  </div> 
             <div class="flex justify-between w-[55rem] mt-12  max-sm:flex-col" > 
             
                <div class=" h-full w-w47.5 max-sm:w-wk"   >
                  <div class=" flex  flex-nowrap">
                    {/* <div> <FastField name="imageId" component={PostImageUpld} /></div> */}
                   
                    <div>
                      <div class=" flex justify-between max-sm:flex-col">
                        {/* <div class=" w-2/5 max-sm:w-full">
                          <Field
                            name="salutation"
                            label={
                              <FormattedMessage
                                id="app.salutation"
                                defaultMessage="Salutation"
                              />
                            }
                            options={["Mr.", "Ms.", "None"]}
                            component={SelectComponent}
                            inlineLabel
                            isColumn
                          />
                        </div> */}
                        <div class=" w-wk max-sm:w-full ">
                          <FastField
                            isRequired
                            name="firstName"
                            // label="First Name"
                            label={
                              <FormattedMessage
                                id="app.firstName"
                                defaultMessage="First Name"
                              />
                            }
                            type="text"
                            width={"100%"}
                            isColumn
                            component={InputComponent}
                            inlineLabel
                          />
                        </div>
                      </div>                  
                      <div class=" flex justify-between max-sm:flex-col">
                        <div class=" w-2/5 max-sm:w-full">
                          <FastField
                            name="middleName"
                            //label="Middle Name"
                            label={
                              <FormattedMessage
                                id="app.middleName"
                                defaultMessage="Middle"
                              />
                            }
                            type="text"
                            width={"100%"}
                            isColumn
                            component={InputComponent}
                            inlineLabel
                          />
                        </div>
                        <div class=" w-1/2 max-sm:w-full">
                          <FastField
                            name="lastName"
                            //label="Last Name"
                            label={
                              <FormattedMessage
                                id="app.lastName"
                                defaultMessage="Last Name"
                              />
                            }
                            type="text"
                            width={"100%"}
                            isColumn
                            component={InputComponent}
                            inlineLabel
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Field
                    isRequired
                    name="email"
                    type="text"
                    label={
                      <FormattedMessage id="app.email" defaultMessage="Email" />
                    }
                    isColumn
                    width={"100%"}
                    component={InputComponent}
                    inlineLabel
                  /> 
                               
                  <div class=" flex justify-between">
                    <div class="  max-sm:w-[35%]">
                   
                      <FastField
                        name="countryDialCode"
                        selectType="dialCode"
                        component={SearchSelect}
                        isColumnWithoutNoCreate
                        label={
                          <FormattedMessage
                            id="app.phone"
                            defaultMessage="Dial Code"
                          />
                        }
                        isColumn
                        inlineLabel
                      />
                  
                    </div>
                    <div class=" w-8/12">
                    <div class="m-[0.1rem_0_0.02rem_0.2rem] text-xs flex flex-col font-bold ">
                      <FastField
                        type="text"
                        name="phoneNumber"
                        label="Phone No"
                        isColumn
                        component={InputComponent}
                        inlineLabel
                        width={"100%"}
                      />
                      </div>
                    </div>
                  </div>
              
                  <div class=" mt-3">
                  <Field
                  
                    name="companyName"
                    type="text"
                    label={
                      <FormattedMessage id="app.company" defaultMessage="Company" />
                    }
                    isColumn
                    width={"100%"}
                    component={InputComponent}
                    // setClearbitData={props.setClearbitData}
                    // component={ClearbitImage}
                    // accounts={accounts}
                    inlineLabel
                  />
                  </div>
                  <div class="m-[0.1rem_0_0.02rem_0.2rem] text-xs flex flex-col font-bold ">
                  <Field
                    name="url"
                    type="text"
                    label={<FormattedMessage id="app." defaultMessage="URL" />}
                    isColumn
                    width={"100%"}
                    component={InputComponent}
                    inlineLabel
                  />
                  </div>
                </div>
                <div class=" h-3/4 w-w47.5 max-sm:w-wk">
 
                  <div class=" mt-3">
                  <FieldArray
                    name="address"
                    label="Address"
                    render={(arrayHelpers) => (
                      <AddressFieldArray
                        arrayHelpers={arrayHelpers}
                        values={values}
                      />
                    )}
                  />
                  </div>
                </div>
              </div>
            
              <div class="flex justify-end  w-wk bottom- md:absolute">
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={addingContact}
                >
                  <FormattedMessage id="app.update" defaultMessage="Update" />
                  {/*                     
                    Create */}
                </Button>
              </div>
              </MainWrapper>
            </Form>
            </div>
          )}
        </Formik>
      </>
    );
}

const mapStateToProps = ({ auth, leads }) => ({
  addingContact: auth.addingContact,
   clearbit: auth.clearbit,
//   user: auth.userDetails,
//   userId: auth.userDetails.userId,
//   fullName: auth.userDetails.fullName,

});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
       addContact,
      setClearbitData,

    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ContactusForm);
