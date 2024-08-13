import React, { useState, useEffect } from "react";
import { Select } from "antd";
import { Formik, Form, Field,FieldArray } from "formik";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Spacer } from "../Components/UI/Elements";
// import {getCountry} from  "../Containers/Auth/AuthAction";
import { InputComponent } from "../Components/Forms/Formik/InputComponent";
import AddressFieldArray from "../Components/Forms/Formik/AddressFieldArray";
import {getCountries} from "./JobAction";

const { Option } = Select;
function RegistrationStep2 (props) {

  useEffect(()=>{
    props.getCountries();
  },[])

const dialCode = props.countries.map((item)=> ({
  label: `+${item.country_dial_code}`,
  value: `+${item.country_dial_code}`,
}));

  return (
    <>
      <Formik
      initialValues={{ 

        
      }}
     
        onSubmit={(values, { resetForm }) => {
          console.log(values);
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
        <div class=" h-[63vh]">
          <Form class="w-wk flex justify-center ">
             <div   className="bg-[#DFDFDF] rounded-2xl p-3 border-solid  flex flex-col justify-center mt-3 w-11/12   " >
            <div class=" overflow-x-hidden max-h-[36rem]">
              <div class="p-4 ">                
              <div class="flex flex-col w-wk">
                  <div class="flex justify-between mt-2 w-wk">
                  <div class="flex items-center justify-between w-[18rem]">
                  <div class="font-poppins font-semibold text-xs w-28 ">First Name</div>
                  <div class="">
                        <Field
                                placeholder={`First Name`}
                                component={InputComponent}
                                onChange={props.handleStepFirstName}
                                value={props.firstName} 
                                style={{
                                  height: "1.8rem",
                                    // borderRadius: "0.4rem"
                                }}
                            />
                           </div>
                             </div>
                             <div class="flex items-center justify-between w-[18rem]">      
                             <div class="w-28 font-poppins font-semibold text-xs  ">Last Name</div>
                             <div class="">
                <Field
                      placeholder="Last Name"
                      inlineLabel
                      style={{
                        height: "1.8rem",
                          // borderRadius: "0.4rem"
                      }}
                      component={InputComponent}
                      value={props.lastName}
                      onChange={props.handleStepLastName}
                    />
                     
                  
  </div>
                             </div>
                             </div>
                             <div class="flex justify-between w-wk mt-2">
                             <div class="flex items-center justify-between w-[18rem]">
                <div className="input-header1  font-poppins font-semibold text-xs  w-28">  Email </div>
                        <div>
                        <Field
                                value={props.email}
                                placeholder={`Email`}
                                type="email"
                                component={InputComponent}
                                onChange={props.handleStepEmail}
                                style={{
                                  height: "1.8rem",
                                    // borderRadius: "0.4rem"
                                }}
                            />
                           
                                               </div>
                             </div>
                            <Spacer />
                            <div class="flex items-center justify-between w-[18rem]">
                {/* <div className="input-header1 font-poppins font-semibold text-xs w-28"> {props.Cteptwos.confirmEmail}</div> */}
                {/* <div>
                        <Field
                                 value={props.confirmEmailId}
                                 placeholder={`${props.Cteptwos.confirmEmail}`}
                                type="email"
                                component={InputComponent}
                                onChange={props.handleConfirmEmailId}
                            />
    </div> */}
                             </div>
                             </div>
                             <div class="flex justify-between w-wk mt-2">
                            
                            <Spacer />
                            <div class="flex items-center justify-between w-[18rem]">
                            {/* <div className="input-header1 font-poppins font-semibold text-xs  w-28">{props.Cteptwos.repeatPassword}</div> */}
                             </div>
                             </div>
                             <div class="flex justify-between w-1/2 mt-2">
                             <div class="flex flex-col items-center justify-between w-[18rem]">
                             <div class=" font-poppins font-semibold text-xs w-28 ">Dial Code</div>
                             <div>
                    <Select
                      placeholder="Select code"
                      inlineLabel
                   
                      value={props.countryDialCode}
                      onChange={props.handleDialCodeStep2}
                      style={{ height: "1rem",width:"5rem"}}
                    >
                      {/* <Option value={"+91"}>{"+91"}</Option>
                      <Option value={"+31"}>{"+31"}</Option> */}
                      {dialCode.map((item) => {
                                    return <Option value={item.value}>{item.label}</Option>;
                                })}
                    </Select>
                    
                   </div>
                  </div>
                                
                  <div class="flex flex-col  items-center justify-between w-[18rem]">
                  <div className="input-header1 font-poppins font-semibold text-xs  w-28">Mobile No</div>
                  <div>   
                                    <Field
                                        value={props.mobileNo}
                                        placeholder={`Mobile #`}
                                        onChange={props.handleMoBoStep2}
                                        component={InputComponent}
                                          style={{ height: "1.8rem"}}
                                    />
                                   
</div>
                                </div>
                            </div>
                             </div>       
          
              
                <Spacer />
              </div>
              </div>
            </div>
          </Form>
          </div>
        )}
      </Formik>
    </>
  );
}

const mapStateToProps = ({job }) => ({
  countries: job.countries,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
getCountries

}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationStep2);
