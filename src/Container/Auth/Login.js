import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import LogoNew from "../../images/Logo_new.png";
import Button from "antd/lib/button";
import { login, generateOtpByEmail, validateOtp } from "./AuthAction";
import { Input } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import CandidateJobApplyModal from "../../Jobsite/CandidateJobApplyModal";
import {
  handleCandidateApplyModal,
  handleEmailFormModal,
} from "../../Jobsite/JobAction";
import {
  AuthContainer,
  FlexContainer,
  MainWrapper,
} from "../../Components/UI/Layout";
import { Spacer, ValidationError } from "../../Components/UI/Elements";
import { InputComponent } from "../../Components/Forms/Formik/InputComponent";

// /**
//  * yup validation scheme for set Password
//  */
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Input needed !"),
  password: Yup.string().required("Enter password"),
});
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loading: false,
      render: false,
      otp: false,
    };
  }
  submit = (values) => {
    // this.enterLoading();
    this.props.login(values, this.props.history);
  };
  InputComponent = ({ field, form: { touched, errors }, ...props }) => (
    <div>
      <div>
        <Input {...field} {...props} />
      </div>
      {touched[field.name] && errors[field.name] && (
        <ValidationError>{errors[field.name]}</ValidationError>
      )}
    </div>
  );
  componentDidMount() {
    this.timeoutHandle = setTimeout(() => {
      // Add your logic for the transition
    }, 5000);

    console.log("inside cDM login");
    console.log(this.props);
    const params = this.props.match.params;
    if (params.email && params.password) {
      this.setState({
        email: params.email,
        password: params.password,
      });
    }
  }
  componentWillUnmount() {
    clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
  }
  render() {
    console.log(this.props);
    return (
      <>


       <div class="flex flex-col items-center">
            {/* <img
              className="big-logo"
              src={LogoNew}
              style={{ width: 200 }}
              alt="Tekorero logo"
            /> */}
            <br />
            <div className="w-full border shadow-2xl" >
              <Formik
                enableReinitialize
                initialValues={{
                  email: this.state.email || "",
                  password: this.state.password || "",
                  otp: ""
                }}
                validationSchema={LoginSchema}
                onSubmit={(values) => {
                  this.submit(values);
                }}
              >
                {({ errors, touched, isSubmitting, values }) => (
                  <Form className="form-background p-3  rounded w-[95%]">
                    <div class=" flex flex-col items-center"  >
                      <div className="text-xl font-semibold">Sign in or create an account</div>
                      <div className="text-base font-semibold mt-2">Enter your email to sign in or create an account</div>
                      <div className="w-full mt-2">
                        <Field
                          name="email"
                          type="email"
                          placeholder="Email"
                          style={{ width: "100%", height: "2.5em" }}
                          component={this.InputComponent}
                        />
                      </div>
                      <div className="w-full mt-2">
                        <Field
                          name="password"
                          type="password"
                          placeholder="Password"
                          style={{ width: "100%", height: "2.5em" }}
                          component={this.InputComponent}

                        />
                      </div>
                      <div className="w-full mt-3">
                        <Button
                          type="primary"
                          htmlType="submit"
                          Loading={isSubmitting}
                          style={{ width: "100%", height: "2.5em",color:"#1124AA" }}
                        >
                          <label className="text-white">Log In</label>
                        </Button>
                      </div>
                      <div className="w-full mt-2 text-sm flex flex-row">By using 1Di, you agree to the  
                     <div className="text-[#1075D3]">terms of service</div>  
                      and 
                      <div className="text-[#1075D3]">privacy policy.</div> 
                      </div>
                      <div className="flex justify-between w-wk mt-2">
                      <div className="text-[#1075D3] text-sm font-medium"><Link to="/forgotPassword">Forgot Password</Link></div>
                      <div className="text-[#1075D3] font-medium flex flex-row items-center">
                        <div className="font-medium  text-sm text-black mr-1">Dont have account </div>
                        <Link to="/registration">
                        Register</Link> ?</div>
                      </div>
                    </div>

                  </Form>
                )}
              </Formik>
              <CandidateJobApplyModal
                addCandidateApply={this.props.addCandidateApply}
                handleCandidateApplyModal={this.props.handleCandidateApplyModal}
              />
            </div>
            <Spacer />

            {/* <div
              className="footer1"
              style={{
                textAlign: "center",
                position: "absolute",
                bottom: 0,
              }}
            >
              © {new Date().getFullYear()}, {` `} UNBOXED, All rights
              reserved.
            </div> */}
          </div>
      </>
    );
  }
}

const mapStateToProps = ({ auth, job }) => ({
  addEmailformModal: job.addEmailformModal,
  addCandidateApply: job.addCandidateApply,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      login,
      generateOtpByEmail,
      handleCandidateApplyModal,
      handleEmailFormModal,
      validateOtp,
    },
    dispatch
  );
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
