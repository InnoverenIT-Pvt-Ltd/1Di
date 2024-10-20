import React, { Component, useEffect,useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Switch, Checkbox } from "antd";
import Upload from "../../Components/Forms/Formik/Upload";
import { Formik, Form, Field, FieldArray, FastField } from "formik";
import * as Yup from "yup";
import { AuthContainer, FormWrapper, Input } from "../Auth/styled";
// import { getAllCustomerEmployeelist } from "../../Employees/EmployeeAction";
import { StyledLabel } from "../../Components/UI/Elements";
import { Spacer } from "../../Components/UI/Elements";
import SearchSelect from "../../Components/Forms/Formik/SearchSelect";
import AddressFieldArray2 from "../../Components/Forms/Formik/AddressFieldArray2";
import PostImageUpld from "../../Components/Forms/Formik/PostImageUpld";
import { TextareaComponent } from "../../Components/Forms/Formik/TextareaComponent";
import { InputComponent } from "../../Components/Forms/Formik/InputComponent";
import { SelectComponent } from "../../Components/Forms/Formik/SelectComponent";
import ProgressiveImage from "../../Components/Utils/ProgressiveImage";
import ClearbitImage from "../../Components/Forms/Autocomplete/ClearbitImage";
// import { Listbox, Transition } from '@headlessui/react'
import {addContact,getSources,setClearbitData} from "../Customer/CustomerAction";
import { MainWrapper } from "../../Components/UI/Layout";
// yup validation scheme for creating a account
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const LeadsSchema = Yup.object().shape({
  firstName: Yup.string().required("Input needed!"),
  email: Yup.string().required("Input needed!").email("Enter a valid Email"),
  // phoneNumber:Yup.string().required("Input needed!").matches(phoneRegExp, 'Phone number is not valid').min(8,"Minimum 8 digits").max(10,"Number is too long")
});

function ContactInformationForm (props) {
  
 const handleReset = (resetForm) => {
    resetForm();
  };
 
  useEffect(()=> {
// props.getAllCustomerEmployeelist();
props. getSources();
  },[]);

    const {
      accounts,
      user,
      userId,
      // user: { userId, firstName },
      isEditing,
      prefillAccount,
      addingContact,
      addContact,
      clearbit,
      setClearbitData,
    } = props;

    const [defaultOption, setDefaultOption] = useState("Working");
    const [selected, setSelected] = useState(defaultOption);
    // const selectedOption = props.allCustomerEmployeeList.find((item) => item.fullName === selected);
    const selectedOption ="Working"
    return (
      <>
     
        <Formik
          // enableReinitialize
          initialValues={{
           
            
            url: "",
            // sectorId: "",
            email: "",
            phoneNumber: "",
            fullName:"",
            // userId: props.userId,
            notes: "",
            businessRegistration: "",
            // assignedTo: selectedOption ? selectedOption.employeeId:userId,
            // department: "",
            salutation:"",
            firstName:"",
            middleName:"",
            lastName:"",
            proposalValue:"",
            // opportunityName:"",
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
          validationSchema={LeadsSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            addContact(
              {
                ...values,
                companyName: "",
                // assignedTo: selectedOption ? selectedOption.employeeId:userId,
              },
              props.userId,
          () =>{ handleReset(resetForm);
              }
            );
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
            <div class="">
            <div class="">
            <Form className="form-background">
       
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
             <div class="flex justify-evenly  pr-2 max-sm:flex-col" >
                   
                <div class=" h-full w-w47.5 max-sm:w-wk"   >
                  <div class=" flex  flex-nowrap">
                    <div> <FastField name="imageId" component={Upload}/></div>
                    <div>
                      <div class=" flex justify-between max-sm:flex-col">
                        <div class=" w-2/5 max-sm:w-full">
                          <Field
                            name="salutation"
                            label="Salutation"
                            options={["Mr.", "Ms.", "None"]}
                            component={SelectComponent}
                            inlineLabel
                            isColumn
                          />
                        </div>
                        <div class=" w-1/2 max-sm:w-full ">
                          <FastField
                            isRequired
                            name="firstName"
                            label="First Name"
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
                            label="Middle"
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
                            label="Last Name"
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
                    name="email"
                    type="text"
                    label="Email" 
                    isColumn
                    width={"100%"}
                    component={InputComponent}
                    inlineLabel
                  /> 
                               
                  <div class=" flex justify-between">
                    <div class=" w-3/12 max-sm:w-[35%]">
                   
                      <FastField
                        name="countryDialCode"
                        selectType="dialCode"
                        isColumnWithoutNoCreate
                        label="Dial Code"
                        isColumn
                        component={SearchSelect}
                        value={values.countryDialCode1}
                        inlineLabel
                      />
                  
                    </div>
                    <div class=" w-8/12">
                    <StyledLabel>
                      <FastField
                        type="text"
                        name="phoneNumber"
                        label="Phone No"
                        isColumn
                        component={InputComponent}
                        inlineLabel
                        width={"100%"}
                      />
                      </StyledLabel>
                    </div>
                  </div>
                  <Spacer />
                  <StyledLabel>
                  <Field
                    isRequired
                    name="companyName"
                    type="text"
                    label="Company" 
                    isColumn
                    width={"100%"}
                    setClearbitData={props.setClearbitData}
                    component={ClearbitImage}
                    accounts={accounts}
                    inlineLabel
                  />
                  </StyledLabel>
                  <StyledLabel>
                  <Field
                    name="url"
                    type="text"
                    label="URL"
                    isColumn
                    width={"100%"}
                    component={InputComponent}
                    inlineLabel
                  />
                  </StyledLabel>
                         
                  <Spacer />
                  {/* <div class=" flex justify-between">
                   <div class=" w-1/2">
                      <FastField
                        name="sectorId"
                        isColumnWithoutNoCreate
                        selectType="sectorName"
                        label="Sector"
                        isColumn
                        component={SearchSelect}
                        value={values.sectorId}
                      />
                    
                    </div>
                    <div class=" w-2/5">
                          <FastField
                            name="source"
                            type="text"
                            label="Source"
                            isColumnWithoutNoCreate
                            selectType="sourceName"
                            component={SearchSelect}
                            value={values.source}
                            inlineLabel
                            className="field"
                            isColumn
                          />
                        </div>
                    </div> */}
                  <Spacer/>
                 
                    <div class=" flex justify-between max-sm:flex-col">
                    <div class=" w-1/2 max-sm:w-wk">
                    <StyledLabel>
                      <Field
                        name="vatNo"
                        type="text"
                        label="VAT Number"  
                        isColumn
                        width={"100%"}
                        component={InputComponent}
                        inlineLabel
                      />
                      </StyledLabel>
                    </div>
                    <div class="">
                    <StyledLabel>
                      <Field
                        name="businessRegistration"
                        type="text"
                        label="Business Registration#"
                        isColumn
                        width={"100%"}
                        component={InputComponent}
                        inlineLabel
                      />
                      </StyledLabel>
                    </div>
                  </div>
                  <Spacer />
                </div>
                <div class=" h-3/4 w-w47.5 max-sm:w-wk " 
                >
                   {/* <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block font-semibold text-[0.75rem]">Assigned to</Listbox.Label>
          <div className="relative">
              <Listbox.Button  style={{boxShadow: "rgb(170, 170, 170) 0px 0.25em 0.62em"}} className="relative w-full leading-4 cursor-default border border-gray-300 bg-white py-0.5 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                {selected}
              </Listbox.Button>
              {open && (
                <Listbox.Options
                  static
                  className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                >
                  {props.crmAllData.map((item) => (
                    <Listbox.Option
                      key={item.employeeId}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-3 pr-9 ${
                          active ? "text-white bg-indigo-600" : "text-gray-900"
                        }`
                      }
                      value={item.empName}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <span
                              className={`ml-3 block truncate ${
                                selected ? "font-semibold" : "font-normal"
                              }`}
                            >
                              {item.empName}
                            </span>
                          </div>
                          {selected && (
                            <span
                              className={`absolute inset-y-0 right-0 flex items-center pr-4 ${
                                active ? "text-white" : "text-indigo-600"
                              }`}
                            >
                              
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          )}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              )}
            </div>
        </>
      )}
    </Listbox> */}
             
                  <Spacer />
                  <StyledLabel>
                  <FieldArray
                    name="address"
                    label="Address"
                    render={(arrayHelpers) => (
                      <AddressFieldArray2
                        arrayHelpers={arrayHelpers}
                        values={values}
                      />
                    )}
                  />
                  </StyledLabel>
                  
                 <Spacer />
                  <Field
                    name="notes"
                    label="Notes" 
                    width={"100%"}
                    isColumn
                    component={TextareaComponent}
                  />
                </div>
              </div>
              <Spacer />
              <div class="flex justify-center">
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={addingContact}
                >
          
                                      
                    Create
                </Button>
              </div>
    
            </Form>
            </div>
            </div>
          )}
        </Formik>

       
      </>
    );
}

const mapStateToProps = ({ auth, customer,employee }) => ({
  addingContact: customer.addingContact,
  sources:customer.sources,
  addingContactError: customer.addingContactError,
   clearbit: customer.clearbit,
//   user: auth.userDetails,
//   allCustomerEmployeeList:employee.allCustomerEmployeeList,
//   userId: auth.userDetails.userId,
//   fullName: auth.userDetails.fullName
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
        addContact,
        getSources,
      setClearbitData,
    //    getAllCustomerEmployeelist,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ContactInformationForm);
