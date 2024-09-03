import React, { useState, useEffect } from "react";
import { Select } from "antd";
import { Formik, Form, Field,FieldArray } from "formik";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Spacer } from "../Components/UI/Elements";
import { InputComponent } from "../Components/Forms/Formik/InputComponent";
import RegisterAddressFieldArray from "../Components/Forms/Formik/RegisterAddressFieldArray";


const { Option } = Select;
function RegistrationStep1 (props) {
  useEffect(()=>{
    // props.getCountry();
  },[])



  return (
    <>
      <Formik
      initialValues={{ 

        address: [
          {
            address1: "",
            address2: "",
            street: "",
            city: "",
            state: "",
            postalCode: "",
            type:"billing"
          },
        ],
      }}
     
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          // resetForm()

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
        
          <Form class="w-wk flex justify-center">
             <div   className="bg-[#DFDFDF] rounded p-1 border-solid  flex flex-col justify-center mt-1 w-[42rem] " >
            <div class=" overflow-x-hidden max-h-[35rem]">
              <div class="p-1">
                
                <div className="flex justify-between mt-1">
                 
                  <div  class="w-4/5   items-center justify-around ">
                  <div class="flex flex-row  ">
                      <div className=" font-poppins text-sm  font-semibold w-44">Company Name</div>
                      <div>
                      <Field
                        placeholder={`Company name`}
                        component={InputComponent}
                        value={props.companyName}
                        onChange={props.handleNameStep1}
                        style={{
                        height: "1.8rem"                          
                      }}
                      />
                    </div>
                    </div>
                    <div class="flex flex-row items-center">   
                    <div className=" font-poppins text-sm  font-semibold w-44">Registration No</div>
                    <div>
                    <Field
                    
                    isColumn
                    // width={"100%"}
                    component={InputComponent}
                    inlineLabel
                    onChange={props.handleStepBusRegNo}
                    value={props.businessRegistration}
                    style={{
                      height: "1.8rem",
                        // borderRadius: "0.4rem"
                    }}
                  />
                  </div>
                    </div>
                    <div class="flex flex-row items-center">   
                    <div className=" font-poppins text-sm  font-semibold w-44">Phone #</div>
                    <div>
                    <Field
                          // label={props.serviceProviderStep1.phoneNo}
                      // label="Phone"
                      isColumn
                      component={InputComponent}
                      inlineLabel
                      // width={"100%"}
                      value={props.phoneNo}
                      // onKeyPress={handleKeyPress}
                      onChange={props.handleStep1Phone}
                      style={{
                        height: "1.8rem",
                          // borderRadius: "0.4rem"
                      }}
                    />
                          </div>
                          </div>
                          <div class="flex flex-row items-center">   
                    <div className=" font-poppins text-sm  font-semibold w-44">Email</div>
                    <div>
                    <Field 
                      isColumn
                      component={InputComponent}
                      inlineLabel 
                      value={props.billingEmail}
                      onChange={props.handleStepEmailRegNo}
                      style={{
                        height: "1.8rem", 
                      }}
                    />
                          </div>
                          </div>
                  </div>       
                  </div>
                  <div >
                    <div class="font-semibold text-sm mt-2">Billing Address</div>
                  <FieldArray 
                    name="address"              
                    render={(arrayHelpers) => (
                      <RegisterAddressFieldArray
                        arrayHelpers={arrayHelpers}
                        values={values}
                        handleAddressStep1={props.handleAddressStep1}
                      />
                    )}
                  />
                  </div>
              
                <Spacer />
              </div>
              </div>
            </div>
          </Form>
          
        )}
      </Formik>
    </>
  );
}

const mapStateToProps = ({auth }) => ({
});

const mapDispatchToProps = (dispatch) => bindActionCreators({


}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationStep1);
