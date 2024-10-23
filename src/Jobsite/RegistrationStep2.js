import React, { useState, useEffect } from "react";
import { Select } from "antd";
import { Formik, Form, Field,FieldArray } from "formik";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Spacer } from "../Components/UI/Elements";
// import {getCountry} from  "../Containers/Auth/AuthAction";
import { InputComponent } from "../Components/Forms/Formik/InputComponent";
import {getCountries} from "./JobAction";
import { base_url } from "../Config/Auth";
import axios from "axios";
import RegisterAddressFieldArray from "../Components/Forms/Formik/RegisterAddressFieldArray";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  CheckCircleTwoTone,
} from "@ant-design/icons";

const { Option } = Select;

function RegistrationStep2 (props) {

  const [ClientType,setClientType] = useState([])
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


  useEffect(()=>{
    const currentUrl = window.location.href.split('/').slice(0, 3).join('/')
    props.getCountries();
    fetchClientIdList();
  },[])

const dialCode = props.countries.map((item)=> ({
  label: `+${item.country_dial_code}`,
  value: `+${item.country_dial_code}`,
}));

const fetchClientIdList = async () => {
  try {
    const response = await axios.get(`${base_url}/customerType/web`,{
      // headers: {
      //   Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      // },
    });
    setClientType(response.data);
    setLoading(false);
  } catch (error) {
    setError(error);
    setLoading(false);
  }
};
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

          <Form class="w-wk flex justify-center ">
             <div   className="bg-[#DFDFDF] rounded-2xl p-3 border-solid  flex flex-col justify-center mt-3 w-11/12   " >
            <div class=" overflow-x-hidden max-h-[36rem]">
              <div class="p-1">                

                  <div class="flex justify-between mt-2 w-wk">
                  <div class="flex items-center justify-between w-[18rem]">
                  <div class="font-poppins font-semibold text-xs w-44">First Name</div>
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
                             <div>
   {props.fieldErrors2.firstName && (
    <div className="error-message text-[red] font-semibold text-sm">
      {!props.firstName?props.fieldErrors2.firstName:null}
      </div>
  )} 
  </div>
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
                       <div>
   {props.fieldErrors2.lastName && (
    <div className="error-message text-[red] font-semibold text-sm">
      {!props.lastName?props.fieldErrors2.lastName:null}
      </div>
  )} 
  </div> 
                  
  </div>
                             </div>

                             </div>


                             <div class="flex justify-between w-wk mt-2">
                             <div class="flex items-center justify-between w-[18rem]">
                             <div class="flex flex-col ">
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
                                
                  <div class="flex flex-col  ">
                  <div className="input-header1 font-poppins font-semibold text-xs  w-28">Mobile No</div>
                  <div>   
                                    <Field
                                        value={props.phoneNumber}
                                        placeholder={`Mobile #`}
                                        onChange={props.handleMoBoStep2}
                                        component={InputComponent}
                                          style={{ height: "1.8rem"}}
                                    />
                                                     <div>
   {props.fieldErrors2.phoneNumber && (
    <div className="error-message text-[red] font-semibold text-sm">
      {!props.phoneNumber?props.fieldErrors2.phoneNumber:null}
      </div>
  )} 
  </div>       
                                   
</div>
                                </div>
                             </div>
                             <div class="flex items-center justify-between w-[18rem]">
                             <div className="input-header1  font-poppins font-semibold text-xs  w-28"> Extension</div>
                    <div>
                    <Field
                                value={props.extension}
                                placeholder={`Extension`}
                                type="extension"
                                component={InputComponent}
                                onChange={props.handleStepextension}
                                style={{
                                  height: "1.8rem",
                                    // borderRadius: "0.4rem"
                                }}
                            />
                  
                          </div>
                          </div>
                             </div>

                          <div class="flex justify-between w-wk mt-2">
                          <div class="flex flex-row items-center">   
                          <div className=" input-header1  font-poppins font-semibold text-xs w-32">Password</div>
                            <div className="flex">
                            <input 
                            className="border rounded-[0.6rem] block p-1 mb-1 h-[1.8rem]"
                      isColumn
                      // component={InputComponent}
                      inlineLabel
                      value={props.password}
                      type={props.type}
                      onChange={props.handlePassword}
                    />
                    {props.show ? (
                      <EyeOutlined
                        type="eye"
                        onClick={props.handlePWClick}
                        style={{ marginLeft: "-1.25rem",width:"0.8rem" }}
                        size="24"
                      />
                    ) : (
                      <EyeInvisibleOutlined
                        type="eye-invisible"
                        onClick={props.handlePWClick}
                        size="24"
                        style={{ marginLeft: "-1.25rem",width:"0.8rem"}}
                      />
                    )}      
                            </div>
                            <div>
   {props.fieldErrors2.password && (
    <div className="error-message text-[red] font-semibold text-sm">
      {!props.password?props.fieldErrors2.password:null}
      </div>
  )} 
  </div> 
                            </div>
                            </div>

                            <div class="flex justify-between w-wk mt-2">
                            <div class="flex flex-row items-center">   
                          <div className=" input-header1  font-poppins font-semibold text-xs w-32">Confirm Password</div>
                            <div className="flex">
                            <input 
                            className="border rounded-[0.6rem] block p-1 mb-1 h-[1.8rem]"
                      isColumn
                      // component={InputComponent}
                      inlineLabel
                      value={props.confirmPassword}
                      type={props.type2}
                      onChange={props.handleConfirmPassword}
                    />
                    {props.show2 ? (
                      <EyeOutlined
                        type="eye"
                        onClick={props.handleConPwClick}
                        style={{
                          marginLeft: "-1.25rem",width:"0.8rem"
                        }}
                        // style={{ size: 24 }}
                      />
                    ) : (
                      <EyeInvisibleOutlined
                        type="eye-invisible"
                        onClick={props.handleConPwClick}
                        style={{
                           marginLeft: "-1.25rem",width:"0.8rem"
                        }}
              
                      />
                    )}
                    {props.password ===""?null:props.password===props.confirmPassword ? (
                      <CheckCircleTwoTone
                        type="check-circle"
                        theme="twoTone"
                        twoToneColor="#52c41a"
                        size={80}
                        style={{
                          marginRight: "-1.0rem",
                          // marginTop: "0.3em",
                          fontSize: "1.2rem",
                        }}
                      />
                    ) : null}

                       {props.fieldErrors2.confirmPassword && (
    <div className="error-message text-[red] font-semibold text-sm">
      {!props.confirmPassword?props.fieldErrors2.confirmPassword:null}
      </div>
  )} 

{props.confirmPasWrdError &&  (
    <div className="error-message text-[red] font-semibold text-sm">
      {props.confirmPasWrdError}
      </div>
  )} 
                            </div>

                            </div>
                            </div>
                            <div class="flex justify-between w-wk mt-2">
                             <div class="flex items-center">
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
                            <div>
   {props.fieldErrors2.email && (
    <div className="error-message text-[red] font-semibold text-sm">
      {!props.email?props.fieldErrors2.email:null}
      </div>
  )} 
  </div> 
                                               </div>
                             </div>
                          
                             </div>

                           



                             </div>
              
                <Spacer />
              </div>
              </div>
         
          </Form>
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
