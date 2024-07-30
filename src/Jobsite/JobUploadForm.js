import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Select, Icon, Tag, Switch, Checkbox } from "antd";
import { Formik, Form, FastField, Field, FieldArray } from "formik";
import * as Yup from "yup";
import { Route, Redirect, withRouter } from "react-router-dom";
import DragableUpload from "../Components/Forms/Formik/DragableUpload";
import { MainWrapper, Spacer } from "../Components/UI/Elements";
import { ShowOrCollapse } from "../Components/Common";
import SearchSelect from "../Components/Forms/Formik/SearchSelect";
import AddressFieldArray from "../Components/Forms/Formik/AddressFieldArray";
import { InputComponent } from "../Components/Forms/Formik/InputComponent";
import { SelectComponent } from "../Components/Forms/Formik/SelectComponent";
import Upload from "../Components/Forms/Formik/Upload";
import { StyledLabel } from "../Components/UI/Elements";
import { FlexContainer } from "../Components/UI/Layout";
import { TextareaComponent } from "../Components/Forms/Formik/TextareaComponent";
import { DatePicker } from "../Components/Forms/Formik/DatePicker";
import moment from "moment";
import {
  addCandidate,
  getSectors,
  getLibrarys,
  getRolesName,
  getIdProofs,
  getDepartments
} from "./JobAction";
import { DaysCompressorWithMonth } from "./DaysCompressorWithMonth";
import SearchSelect1 from "../Components/Forms/Formik/SearchSelect1";
import SearchSelect2 from "../Components/Forms/Formik/SearchSelect2";
import dayjs from "dayjs";
// import SkillsLoadMore from "./CandidateTable/SkillsLoadMore";
const { Option } = Select;
/**
 * yup validation scheme for creating a contact
 */
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const CandidateSchema = Yup.object().shape({
  // contactOwner: Yup.string().required("Please Select contact owner"),
  //email: Yup.string().email("Enter a valid Email").required("Input needed!"),
  firstName: Yup.string().required("Input needed!"),
  lastName: Yup.string().required("Input needed!"),
  mobileNumber: Yup.string().required("Input needed!"),
  countryDialCode: Yup.string().required("Input needed!"),
  emailId: Yup.string().required("Input needed!"),
  roleTypeId: Yup.string().required("Input needed!"),
  workpreference: Yup.string().required("Input needed!"),
  dateOfBirth: Yup.string().required("Input needed!"),
  experience: Yup.string().required("Input needed!"),
  // documentId: Yup.string().required("Input needed!"),
  country: Yup.string().required("Input needed!"),
  // address: Yup.string().required("Input needed!"),
});

class JobUploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      option: "Mobile",
      option1: "Mobile",
      option2: "Work",
      currentOption: "",
      data: "",
      candidate: false,
      responseData: null,
      availability: true,
      billing: false,
      whiteblue: true,
      checked: false,
      whatsapp: false,
    };
  }
  handleCandidate = (checked) => {
    this.setState({ candidate: checked });
  };
  handleCallBack = (data) => {
    this.props.history.push(`/success`);
    console.log("pushed")
  }
  handleAvailability = (checked) => {
    this.setState({ availability: checked });
  };
  handleWhatsApp = (checked) => {
    this.setState({ whatsapp: checked });
  };
  handlebilling = (checked) => {
    this.setState({ billing: checked });
  };
  handleResponseData = (data) => {
    this.setState({ responseData: data })
  }
  handleWhiteBlue = (checked) => {
    this.setState({ whiteblue: checked });
  };
  handleSetData = (data) => {
    this.setState({ data: data });
  };

  handleReset = (resetForm) => {
    const { callback } = this.props;
    callback && callback();
    resetForm();
    console.log("hello");
  };
  handleClick = (option) => {
    ////debugger;
    this.setState({
      currentOption: option,
    });
    console.log(this.state.option);
    console.log(this.state.currentOption);
  };
  handleFieldClik() {
    this.setState({
      disabled: !this.state.disabled,
      visible: !this.state.visible,
    });
  }

  handleChange = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  onChange = (value) => {
    console.log(value);
    this.setState({
      option: value,
    });
  };
  onChange1 = (value) => {
    console.log(value);
    this.setState({
      option1: value,
    });
  };
  onChange2 = (value) => {
    ////debugger;
    console.log(value);
    this.setState({
      option2: value,
    });
  };

  componentDidMount() {
    // const { getLibrarys,organizationId,} = this.props;
    // console.log();
    this.props.getLibrarys();
    this.props.getSectors();
    this.props.getIdProofs();
    this.props.getDepartments();
    this.props.getRolesName();
  }

  render() {
    //console.log("test1",this.state.data&&this.state.data.emails.length&&this.state.data.emails[0])
    // console.log("test3",this.state.responseData)
    console.log("test4", this.props.parseData)
    // console.log(this.state.responseData&&this.state.responseData.emails.length &&
    //               this.state.responseData.emails[0])
    // console.log("test2",this.state.data.emails.length &&
    // this.state.data.emails[0])
    const {
      // user: { userId, firstName, lastName,department },
      addCandidate,
      addingCandidate,
      dateOfBirth,
      availableDate,
    } = this.props;

    const sectorOption = this.props.sectors.map((item) => {
      return {
        label: item.sectorName || "",
        value: item.sectorId,
      };
    });

    // const rolesNameOption = this.props.rolesname.map((item) => {
    //   return {
    //     label: `${item.roleType}`,
    //     value: item.roleTypeId,
    //   };
    // });

    const rolesNameOption = this.props.rolesname.map((item) => {
      return {
        label: `${item.roleType}`,
        value: item.roleTypeId,
      };
    });



    const libraryOption = this.props.librarys.map((item) => {
      return {
        label: item.name || "",
        value: item.name,
      };
    });
    const IdProofOption = this.props.idProofs.map((item) => {
      return {
        label: item.IdProofType || "",
        value: item.idProofTypeId,
      };
    });
    const departmentOption = this.props.departments.map((item) => {
      return {
        label: item.departmentName || "",
        value: item.departmentId,
      };
    });
    // console.log("sec",sectorOption)
    return (
      <>
        <Formik
          enableReinitialize
          initialValues={{
            skills: this.props.parseData.skills
              ? this.props.parseData.skills.length &&
              this.props.parseData.skills
              : "",

            firstName: "",
            lastName: "",
            countryDialCode: "",
            // experience:"",

            mobileNumber: this.props.parseData.phoneNumbers
              ? this.props.parseData.phoneNumbers.length &&
              this.props.parseData.phoneNumbers[0]
              : "",
            emailId: this.props.parseData.emails
              ? this.props.parseData.emails.length &&
              this.props.parseData.emails[0]
              : "",

            country: "",






          }}
          validationSchema={CandidateSchema}
          onSubmit={(values, { resetForm }) => {
            // console.log(values,this.props.responseData&&this.props.responseData.phoneNumbers.length  ?  this.props.responseData.phoneNumbers[0] : "",);

            addCandidate(
              {
                ...values,
                roleTypeId: values.roleTypeId,
                workpreference: values.workpreference,
                dateOfBirth: dateOfBirth || dayjs(),
                experience: parseFloat(values.experience),
                tAndCInd: this.state.checked ? true : false

              },
              this.handleCallBack,
              () => this.handleReset(resetForm)
            );
          }}
        >
          {({
            values,
            errors,
            touched,
            isSubmitting,
            setFieldValue,
            setFieldTouched,
          }) => (
            <Form className="form-background max-sm:w-11/12 -mt-28 m-auto md:mt-0 w-3/4" >


              <MainWrapper

                style={{ width: "91%", margin: "auto", background: "#3737a7", height: "30rem" }}
              >


                <div class=" max-sm:flex flex-col m-auto w-11/12 md:w-w75 mt-margin10 ml-auto mr-auto">
                  <span style={{ color: "White", fontFamily: "sans-serif" }}>Contact Us To Know More!</span>
                  <Spacer />
                  <hr />
                  <div>
                    <div>

                      {/* <FastField name="imageId" component={Upload} /> */}
                      <div>
                        <FlexContainer>

                          <div style={{ width: "100%" }}>
                            <FastField
                              //isRequired
                              name="firstName"
                              placeholder="First Name*"
                              type="text"
                              width={"100%"}
                              isColumn
                              component={InputComponent}
                              inlineLabel
                            />
                          </div>
                        </FlexContainer>

                        <FlexContainer>
                          <div style={{ width: "100%" }}>
                            <FastField
                              name="lastName"
                              placeholder="Last Name"
                              // label="Last Name"
                              // label={
                              //   <FormattedMessage
                              //     id="app.lastName"
                              //     defaultMessage="Last Name"
                              //   />
                              // }
                              type="text"
                              width={"100%"}
                              isColumn
                              component={InputComponent}
                              inlineLabel
                            />
                          </div>
                        </FlexContainer>
                      </div>

                      <FlexContainer >
                        <div style={{ width: "100%" }}>
                          <Field
                            //isRequired
                            type="email"
                            name="emailId"
                            value={values.emailId}
                            // label="Email"
                            placeholder="Email*"
                            //className="field"
                            isColumn
                            width={"100%"}
                            component={InputComponent}
                            inlineLabel
                          />
                        </div>
                      </FlexContainer>
                      <FlexContainer justifyContent="space-between" >
                        <div class="max-sm:w-20 -mt-6  md:mt-0 w-24 ">
                          <FastField
                            name="countryDialCode"
                            isColumnWithoutNoCreate
                            // label="Mobile"
                            placeholder="Dial"
                            selectType="dialCode"
                            value={values.countryDialCode}
                            isColumn
                            component={SearchSelect1}
                            inlineLabel
                          />
                        </div>
                        <div class="max-sm:-mt-1 w-36 md:w-48 ">
                          <FastField
                            type="text"
                            name="mobileNumber"
                            value={values.mobileNumber}
                            placeholder="Mobile Number"
                            component={InputComponent}
                            inlineLabel
                            width={"100%"}
                            isColumn
                          />
                        </div>
                        {/* <div style={{ width: "20%" }}>
                      WhatsApp
                      <Switch
                        
                        onChange={this.handleWhatsApp}
                        checked={this.state.whatsapp}
                        checkedChildren="Different"
                        unCheckedChildren="Same"
                      />
                      
                    </div> */}


                      </FlexContainer>

                    </div>

                    <div >
                      <Checkbox
                        // disabled={this.props.validOtp === ""}
                        // disabled={true}
                        checked={this.state.checked}
                        onChange={this.handleChange}
                      ><a href="https://axisdigitaal.com/privacyverklaring" target="_blank" style={{ color: "white", fontFamily: "sans-serif" }}>I have read & agree to the<u> privacy policy.</u></a>

                      </Checkbox>
                    </div>
                  </div>
                  <Spacer marginTop="1rem" />
                  <Button
                    type="primary"
                    htmlType="submit"
                    // icon={<PoweroffOutlined />}
                    Loading={addingCandidate}
                    className={"profileBtn"}
                    style={{ fontFamily: "sans-serif", }}
                  >
                    Submit
                  </Button>
                  {/* </div> */}
                  {/* </div> */}
                </div>
              </MainWrapper>

            </Form>
          )}
        </Formik>
      </>
    );
  }
}

const mapStateToProps = ({ auth, job }) => ({
  addingCandidate: job.addingCandidate,
  parseData: job.parseData,
  sectors: job.sectors,
  rolesname: job.rolesname,
  librarys: job.librarys,
  idProofs: job.idProofs,
  countries: job.countries,
  departments: job.departments,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addCandidate,
      getLibrarys,
      getRolesName,
      getSectors,
      getIdProofs,
      getDepartments
      // getAllPartnerListByUserId,
      // getContactById,
      // addLinkContactByOpportunityId,
      // getCurrency,
    },
    dispatch
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JobUploadForm));
































