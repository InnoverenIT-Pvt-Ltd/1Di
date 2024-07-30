import React, { useState, useEffect } from "react";
import { Select } from "antd";
import { Formik, Form, Field,FieldArray } from "formik";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Spacer } from "../Components/UI/Elements";
// import {getCountry} from  "../Containers/Auth/AuthAction";
import { FormattedMessage } from "react-intl";
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
             <div   className="bg-[#DFDFDF] rounded-2xl p-3 border-solid  flex flex-col justify-center mt-3 w-11/12  " >
            <div class=" overflow-x-hidden max-h-[36rem]">
              <div class="p-4 ">
                
                <div className="flex justify-between mt-3">
                 
                  <div  class="w-4/5 flex flex-wrap  flex-col">
                  <div class="flex">
                      <div className=" font-montserrat text-sm  font-semibold w-44">Company Name</div>
                      <div>
                      <Field
                        placeholder={`Company name`}
                        component={InputComponent}
                        value={props.companyName}
                        onChange={props.handleNameStep1}
                        style={{marginLeft:"-3rem"}}
                      />
                    </div>
                    </div>
                    <div class="flex">   
                    <div className="mr-6 font-montserrat text-sm  font-semibold w-[9.4rem]">Registration No</div>
                    <div>
                    <Field
                    
                    isColumn
                    width={"100%"}
                    component={InputComponent}
                    inlineLabel
                    onChange={props.handleStepBusRegNo}
                    value={props.businessRegistration}
                  />
</div>
                    </div>
                    <div class="flex">   
                    <div className="mr-6 font-montserrat text-sm  font-semibold w-[9.4rem]">Phone #</div>
                    <div>
                    <Field
                          // label={props.serviceProviderStep1.phoneNo}
                      // label="Phone"
                      isColumn
                      component={InputComponent}
                      inlineLabel
                      width={"100%"}
                      value={props.phoneNo}
                      // onKeyPress={handleKeyPress}
                      onChange={props.handleStep1Phone}
                    />
                          </div>
                          </div>
                  </div>         </div>
                  <div >
                    <div class="font-semibold text-sm">Billing Address</div>
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
