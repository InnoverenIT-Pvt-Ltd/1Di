import React, {useEffect,useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Input, message } from "antd";
import { withRouter } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  CheckCircleTwoTone,
} from "@ant-design/icons";
import { Spacer } from "../Components/UI/Elements"; 

import { ValidationError, Title, SubTitle } from "../Components/UI/Elements";
import Button from "antd/lib/button";
// import { customerChangePassword, generateOtpByEmail, validateOtp } from "./AuthAction";
// import Swal from "sweetalert2";

const ChangePasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required("Required")
    .min(8, "password should be min 8 character ")
    .max(50, "password should be max 50 character !"),
  confirmPassword: Yup.string()
    .required("Enter password")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});
function CustomerChangePassword (props) {
  const {translateText}=props;
  const [type,setType]=useState("password");
  const [type1,setType1]=useState("password");
  const [show,setShow]=useState(Boolean());
  const [show1,setShow1]=useState(Boolean());
 

function handleClick() {
  setType(type === "text" ? "password" : "text")
  setShow(!show)
}
function handleClick1 () {
   setType1(type1 === "text" ? "password" : "text")
      setShow1(!show1)
    }
 const InputComponent = ({ field, form: { touched, errors }, ...props }) => (
    <div>
      <Input {...field} {...props} />
      {touched[field.name] && errors[field.name] && (
        <ValidationError>{errors[field.name]}</ValidationError>
      )}
    </div>
  );
//   useEffect(()=>
//   {
//     console.log("inside cDM login");
//   },[]) 
//  const callback = () => {
//       //  window.location.reload()
//       Swal.fire({
//         text: "You have successfully changed your password!",
//         icon: "success",
//         showConfirmButton: false,
//         timer: 1500
//       });
//        props.history.push("/requirement")
//   };

 

    return (
      <>
       <div class="md:flex items-center w-wk">
       <div class="md: flex w-full flex-col items-center"
          >
            <div class=" rounded-md shadow-2xl border-solid  max-sm:w-11/12 mt-margin33 md:mt-margin5 w-1/4 p-1  ">
              <Title>Change Password </Title>
              <SubTitle>Its a good idea to use a strong password</SubTitle>
              <Spacer />
              <Formik
                initialValues={{
                  password: "",
                  confirmPassword: "",

                }}
                validationSchema={ChangePasswordSchema}
                onSubmit={(values) => {
                  console.log(values);
                 props.customerChangePassword(
                    {
                      password: values.password,
                      emailId: props.username,
                    },
                    props.userId,
                    //callback
                  );
                }}
              >
                {({ errors, touched, values, isSubmitting }) => (
                   <Form >
                   <div className="set_password">
                     <div class="max-sm:w-full md:w-full">
           
                       <Field
                         name="password"
                         type={type}
                          placeholder="New password"
                       
                         component={InputComponent}
                         style={{ border: "1px solid lightgrey", boxShadow: "rgb(220 216 216) 2px 2px 2px" }}
                       />
                     </div>
                     {/* {show ? (
                       <EyeOutlined
                         type="eye"
                         onClick={handleClick}
                         style={{ marginLeft: "-1.25em", marginTop: "0.75em" }}
                         size="24"
                       />
                     ) : (
                       <EyeInvisibleOutlined
                         type="eye-invisible"
                         onClick={handleClick}
                         size="24"
                         style={{ marginLeft: "-1.25em", marginTop: "0.75em" }}
                       />
                     )} */}
                   </div>
                   <Spacer style={{ marginBottom: "1rem" }} />
                   <div style={{ display: "flex", justifyContent:"space-between"}}>
                     <div style={{ width: "100%" }}>
                       <Field
                         name="confirmPassword"
                         type={type1}
                         placeholder="Confirm password"
                         
                         component={InputComponent}
                         style={{ border: "1px solid lightgrey", boxShadow: "rgb(220 216 216) 2px 2px 2px" }}

                       />
                     </div>
                     {/* {show1 ? (
                       <EyeOutlined
                         type="eye"
                         onClick={handleClick1}
                         style={{
                           marginLeft: "-3.25em",
                           marginTop: "0.75em",
                         }}

                       />
                     ) : (
                       <EyeInvisibleOutlined
                         type="eye-invisible"
                         onClick={handleClick1}
                         style={{
                           marginLeft: "-3.25em",
                           marginTop: "0.75em",
                         }}
                       />
                     )} */}
                     {values.password.length &&
                       values.password === values.confirmPassword ? (
                       <CheckCircleTwoTone
                         type="check-circle"
                         theme="twoTone"
                         twoToneColor="#52c41a"
                         size={80}
                         style={{
                           marginLeft: "1.5em",
                           marginTop: "0.45em",
                           fontSize: "1.5625em",
                         }}
                       />
                     ) : null}
                  </div>
                   <Spacer />
                    <Button
                      type="primary"
                      htmlType="submit"
                      Loading={props.customerChangingPassword}
                      style={{ width: " -webkit-fill-available", height: "2.5em" }}
                    >
                   Save Password
                    </Button>
                  </Form>
                )}
              </Formik>
              <br />
            </div>
          </div>
          </div>
      </>
    );
}
const mapStateToProps = ({ auth }) => ({
//   customerChangingPassword: auth.customerChangingPassword,
//   customerChangingPasswordError: auth.customerChangingPasswordError,
//   username: auth.serviceDetails.email,
//   customerId:auth.serviceDetails.customerId,
 // userId:auth.serviceDetails.userId,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
    //   customerChangePassword,
    //   generateOtpByEmail,
    //   validateOtp
    },
    dispatch
  );
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomerChangePassword));