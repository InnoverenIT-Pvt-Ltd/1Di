import React, { useEffect, useState } from "react";
import { Checkbox, Input, Select } from "antd";
import { Formik, Form, Field } from "formik";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import PostJobForm from "./PostJobForm";
import { Spacer } from "../Components/UI/Elements";
import { FormattedMessage } from "react-intl";

const { Option } = Select;

function HomeStep5(props) {





 
 
 

  return (
    <>
      <Formik>
         <Form>
     <div class="flex justify-center mt-8">
              <div class="flex w-2/3 justify-center items-center max-sm:w-wk">
          <PostJobForm width="100%" style={{height:"47vh"}}>
            <h3 class="max-sm:text-base md:text-3xl ">
              {/* {translatedMenuItems[0]} */}
              
              <FormattedMessage
                      id="app.crt"
                      defaultMessage="crt"
                    /> 
            </h3>
           
            <Spacer />
            <div class="max-sm: w-wk md:w-3/4">
              <Input
                value={props.emailId}
                placeholder="Email"
                type="email"
                width={"100%"}
               // onChange={props.handleHomeStep5Email}
              />
              <Spacer />

              <Input
                width={"100%"}
                placeholder="First Name"
               // onChange={props.handleHomeStep5FirstName}
                value={props.firstName}
              />
              <Spacer />

              <Input
                width={"100%"}
                placeholder="Last Name"
              //  onChange={props.handleHomeStepLastName}
                value={props.lastName}
              />
              <Spacer />
              <div style={{ width: "100%" }}>
                
                <Select
                  // placeholder="Select Language"
                  inlineLabel
                  width={"100%"}
                  value={props.language}
                //  onChange={props.handleLanguageStep5}
                >
                <Option value=""><label class="font-normal text-base  text-gray-300">Select Language</label></Option>
                                  {/* {languageNameOption.map((item) => {
                    return <Option value={item.value}>{item.label}</Option>;
                  })} */}
                </Select>
              </div>
              <div>
             
                 {/* <div className="set_password">
                    <div class="max-sm:w-full md:w-full mt-2">
                      <Field
                        width={"100%"}
                        type={props.type}
                        // label={translatedMenuItems[8]}
                        label="Password"
                        placeholder="Password"
                        component={props.InputComponent}
                        //onChange={props.handleHomeStep5Password}
                        value={props.password}
                      />
                    </div>
                    {props.show ? (
                      <EyeOutlined
                        type="eye"
                        onClick={props.handleClick}
                        style={{ marginTop: "1.25em", marginLeft: "0.25rem" }}
                        size="24"
                      />
                    ) : (
                      <EyeInvisibleOutlined
                        type="eye-invisible"
                        onClick={props.handleClick}
                        size="24"
                        style={{ marginTop: "1.5em", marginLeft: "0.25rem" }}
                      />
                    )}
                  </div> */}
              </div>
             
              <div class=" flex justify-between mt-5">
                <div style={{ width: "29%" }}>
               
                    
                     
  <div class="relative">
    <input
      type="text"
      value="+31"
      class="w-full border  h-8 border-gray-300 p-2 text-gray-600 cursor-not-allowed"
      disabled
    />
  </div>

                     
                </div>
                <div style={{ width: "70%" }}>
                  <Input
                    value={props.phoneNo}
                    
                    placeholder="Phone #"
                    //onChange={props.handleHomeStep5Phone}
                   // onKeyPress={handleKeyPress}
                    width={"100%"}
                   
                  />
                </div>
              </div>
            
            </div>
           <div class="mt-2">
            <Checkbox
              value={props.checked}
             // onChange={props.handleCheckBoxChange}
            >
              <span>
                By registering, you agree to our&nbsp;
                {/* {translatedMenuItems[2]}                                               */}
                <a
                  href="/terms"
                  target="blank"
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  {/* {translatedMenuItems[3]} */}
                  Terms and Conditions 
                </a>{" "}
                and&nbsp;
                <a
                  href="/privacy"
                  target="blank"
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  {/* {translatedMenuItems[3]} */}
                   Privacy Policy
                </a>{" "}
              </span>
            </Checkbox>
            </div>
          </PostJobForm>
        </div>
        </div>
        </Form>
        </Formik>
    </>
  );
}

const mapStateToProps = ({ auth }) => ({
  country: auth.country,
  showLANG: auth.showLANG,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(HomeStep5);
