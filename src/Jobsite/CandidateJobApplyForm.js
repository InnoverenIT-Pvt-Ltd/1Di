import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Select, Icon, Tag, Switch, Checkbox } from "antd";
import { Formik, Form, FastField, Field, FieldArray } from "formik";
import * as Yup from "yup";
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
  saveCandidateProcess,
  getSectors,
  getLibrarys,
  getIdProofs,
  getDepartments
} from "./JobAction";
import { DaysCompressorWithMonth } from "./DaysCompressorWithMonth";
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
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const CandidateSchema = Yup.object().shape({
  // contactOwner: Yup.string().required("Please Select contact owner"),
  emailId: Yup.string().email("Enter a valid Email").required("Input needed!"),
  firstName: Yup.string().required("Input needed!"),
});

class CandidateJobApplyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      option: "Mobile",
      option1: "Mobile",
      option2: "Work",
      currentOption: "",
      candidate: false,
      availability: true,
      billing: false,
      whiteblue: true,
      checked: true,
      whatsapp: false,
    };
  }
  handleCandidate = (checked) => {
    this.setState({ candidate: checked });
  };
  handleAvailability = (checked) => {
    this.setState({ availability: checked });
  };
  handleWhatsApp = (checked) => {
    this.setState({ whatsapp: checked });
  };
  handlebilling = (checked) => {
    this.setState({ billing: checked });
  };
  handleWhiteBlue = (checked) => {
    this.setState({ whiteblue: checked });
  };
  handleReset = (resetForm) => {
    const { callback } = this.props;
    callback && callback();
    resetForm();
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
  }

  render() {
    const {
      // user: { userId, firstName, lastName,department },
      saveCandidateProcess,
      addingCandidateProcess,
      availableDate,
    } = this.props;

    const sectorOption = this.props.sectors.map((item) => {
      return {
        label: item.sectorName || "",
        value: item.sectorId,
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
    console.log("soid",this.props.setEditingCard.opportunityId)
    return (
      <>
        <Formik
          initialValues={{
            sectorId: "",
            roleTypeId: "",
            workpreference: "Remote",
            partnerId: "",
            sectorName: "",
            partnerName: "",
            sectorDescription: "",
            currentCtc: "",
            salutation: "",
            firstName: "",
            middleName: "",
            lastName: "",
            noticeDetail: "",
            definationId: [],
            countryDialCode: "",
            phoneNumber: "",
            mobileNumber: "",
            countryDialCode1: "",
            emailId: this.props.emailData.email,
            documentId: "",
           
            linkedin: "",
            designationTypeId: "",
            departmentId: "",
            countryDialCode1: "",
            phoneNumber: "",
            notes: "",
            country: "",
            availableDate: availableDate || moment(),
            benifit: "",
            tag_with_company: "",
            billing: 0,
            noticeDetail: "",
            currency: "",
            // userId: ,
            active: true,
            worktype: this.state.billing ? "Permanent" : "Contract",
            whatsapp: this.state.whatsapp ? "Different" : "Same",
            category: this.state.checked
              ? "Both"
              : this.state.whiteblue
              ? "White"
              : "Blue",
            // startDate: moment(),
            dateOfBirth: moment(),
            gender: "",
            nationality: "",
            idProof: "",
            idNumber: "",
            CostType: "",
            address: [
              {
                addressType: "",
                address1: "",
                address2: "",
                town: "",
                street: "",
                city: "",
                postalCode: "",
                country: "",
                latitude: "",
                skills: [],
                longitude: "",
              },
            ],
            opportunityId:this.props.setEditingCard.opportunityId,
            recruitmentId:this.props.setEditingCard.recruitmentId,
            recruitmentProcessId:this.props.setEditingCard.recruitmentProcessId
          }}
          validationSchema={CandidateSchema}
          onSubmit={(values, { resetForm }) => {
            // console.log(values,this.props.responseData&&this.props.responseData.phoneNumbers.length  ?  this.props.responseData.phoneNumbers[0] : "",);

            saveCandidateProcess(
              {
                ...values,
                opportunityId:this.props.setEditingCard.opportunityId,
                recruitmentId:this.props.setEditingCard.recruitmentId,
                recruitmentProcessId:this.props.setEditingCard.recruitmentProcessId
                //     // skills: this.props.responseData ? this.props.responseData.skills : [],
                //     skills:this.props.responseData ? this.props.responseData.skills.concat(values.skills):values.skills||[],
                //     mobileNumber:values.mobileNumber,
                //     linkedin: values.linkedin,
                //     //linkedin: this.props.responseData ? this.props.responseData.linkedInProfile.length && this.props.responseData.linkedInProfile:"",
                //     // emailId:this.props.responseData ? this.props.responseData.emails : "",

                //     active: this.state.availability ? "true" : "false",
                //     worktype: this.state.billing ? "Permanent" : "Contract",
                //     whatsapp: this.state.whatsapp ? "Different" : "Same",
                //     // category: this.state.whiteblue ?"White" : "Blue",
                //     category: this.state.checked ? "Both" : this.state.whiteblue ? "White" : "Blue",
                //     // availableDate: moment(values.availableDate).format(
                //     //   "YYYY-MM-DD"
                //     availableDate: moment(values.availableDate).toISOString(),
                //     // availableDate: `${newavailableDate}T00:00:00Z`,
              },

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
            <Form >
              <Spacer />
              <div style={{ display: "flex", justifyContent: "space-between",height: "70vh", overflow:"scroll",paddingRight: "0.6em" }}>
             
                <Spacer />
                <div style={{width:"100%",display:"flex", justifyContent:"space-between"}}>
                    <div style={{width:"49%",}}>
                    {/* Left */}
                    <div>
                    <FlexContainer flexWrap="no-wrap">
                    <FastField name="imageId" component={Upload} />
                    <div>
                      <FlexContainer justifyContent="space-between">
                        <div style={{ width: "35%" }}>
                        <FastField
                            name="salutation"
                            type="text"
                            width={"100%"}
                            label="Salutation"
                            options={["Mr.", "Ms.", "None"]}
                            component={SelectComponent}
                            inlineLabel
                            isColumn
                          />
                        </div>
                        <div style={{ width: "63%" }}>
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
                      </FlexContainer>
                            <Spacer />
                      <FlexContainer justifyContent="space-between">
                        <div style={{ width: "44%" }}>
                        <FastField
                            name="middleName"
                            label="Middle Name"
                            type="text"
                            width={"100%"}
                            isColumn
                            component={InputComponent}
                            inlineLabel
                          />
                        </div>
                        <div style={{ width: "55%" }}>
                        <FastField
                            name="lastName"
                            label="Last Name"
                            // label={
                            //   <FormattedMessage
                            //     id="app.lastName"
                            //     defaultMessage="Last Name"
                            //   />
                            // }
                            type="text"
                            width={"100%"}
                            padding="1em"
                            isColumn
                            component={InputComponent}
                            inlineLabel
                          />
                        </div>
                      </FlexContainer>
                    </div>
                  </FlexContainer>             
          
                  <FlexContainer >
                    <div style={{ width: "100%" }}>
                      <FastField
                        isRequired
                        type="email"
                        name="emailId"
                        label="Email"
                        className="field"
                        isColumn
                        width={"100%"}
                        component={InputComponent}
                        inlineLabel
                      />
                    </div>
                    
                    
                  </FlexContainer>
                  <Spacer />                  
                  <FlexContainer justifyContent="space-between" >
                    <div style={{ width: "24%" }}>
                      <Field
                        name="countryDialCode"
                        isColumnWithoutNoCreate
                        label="Mobile"
                        selectType="dialCode"
                        width={"100%"}
                        isColumn                        
                        component={SearchSelect}                        
                        inlineLabel
                      />
                    </div>
                    <div style={{ width: "34%" }}>
                      <Field
                        type="text"
                        name="mobileNumber"                        
                        component={InputComponent}
                        inlineLabel
                        width={"100%"}
                        style={{ flexBasis: "30%" }}
                        isColumn
                      />
                    </div>
                    <div style={{ width: "20%" }}>
                      WhatsApp
                      <Switch
                        
                        onChange={this.handleWhatsApp}
                        checked={this.state.whatsapp}
                        checkedChildren="Different"
                        unCheckedChildren="Same"
                      />
                      
                    </div>

                    
                  </FlexContainer>
                  <Spacer />
                  <FlexContainer justifyContent="space-between">
                    <div style={{ width: "100%" }}>
                      {" "}
                      {this.state.whatsapp && (
                        <Field
                          name="countryDialCode1"
                          isColumnWithoutNoCreate
                          selectType="dialCode"
                          label="Phone #"
                          // label={
                          //   <FormattedMessage
                          //     id="app.#phone"
                          //     defaultMessage="Phone #"
                          //   />
                          // }

                          // disabled={!this.state.availability}
                          // component={SearchSelect}
                          component={InputComponent}
                          isColumn
                          style={{
                            // flexBasis: "80%",
                            // marginTop: "0px",
                          }}
                          // width={"100%"}
                          // value={values.availableDate}
                          inlineLabel
                        />
                      )}
                    </div>
                    <div >
                      {this.state.whatsapp && (
                        <FastField
                          name="phoneNumber"
                          //label="Email"
                          // label={
                          //   <FormattedMessage
                          //     id="app.experience"
                          //     defaultMessage="Experience (Years)"
                          //   />
                          // }
                          // className="field"
                          isColumn
                          width={"100%"}
                          style={{ flexBasis: "30%" }}
                          component={InputComponent}
                          inlineLabel
                        />
                      )}
                    </div>
                  </FlexContainer>
                  <Spacer />
                  <FlexContainer justifyContent="space-between">
                    <div style={{ width: "100%" }}>
                      <FastField
                        name="idProof"
                        label="ID Proof"
                        isColumn
                        width={"100%"}
                        component={SelectComponent}
                        options={
                          Array.isArray(IdProofOption) ? IdProofOption : []
                        }
                        inlineLabel
                      />
                    </div>

                    
                  </FlexContainer>
                  <Spacer />
                  <FlexContainer >
                    <div style={{ width: "100%" }}>
                      <FastField
                        name="sectorId"
                        label="Sector"
                        isColumn
                        width={"100%"}
                        component={SelectComponent}
                        // options={[" Accountancy"," Aviation"]}
                        options={
                          Array.isArray(sectorOption) ? sectorOption : []
                        }
                      />
                    </div>

                   
                  </FlexContainer>
                  <Spacer />
                  <FlexContainer justifyContent="space-between">
                    <div style={{ width: "100%" }}>
                      <FastField
                        name="roleTypeId"
                        selectType="roleType"
                        label="Role"      
                        isColumn
                        isColumnWithoutNoCreate
                        width={"100%"}
                        component={SearchSelect}
                        value={values.roleTypeId}
                        inlineLabel
                      />
                    </div>
                  </FlexContainer>
                  <Spacer />
                  {/* <FlexContainer justifyContent="space-between">
                      <div style={{ width: "47%" }}>
                        <FastField
                          name="countryDialCode1"
                          selectType="dialCode"
                          //label="Phone No #"
                          label={<FormattedMessage
                            id="app.countryDialCode1"
                            defaultMessage="Phone No"
                          />}
                          isColumn
                          margintop={"0em"}
                          component={SearchSelect}
                          defaultValue={{
                            value: this.props.user.countryDialCode,
                          }}
                          value={values.countryDialCode1}
                          inlineLabel
                          style={{ flexBasis: "80%" }}
                        />
                      </div>
                      <div style={{ width: "47%" }}>
                        <FastField
                          type="text"
                          name="phoneNumber"
                          // placeholder="Phone #"
                          label={<FormattedMessage
                            id="app.phoneNumber"
                            defaultMessage="Phone #"
                          />}
                          isColumn
                          component={InputComponent}
                          inlineLabel
                          width={"100%"}
                          style={{
                            flexBasis: "80%",
                            height: "2.0625em",
                            marginTop: "0em",
                          }}
                        />
                      </div>
                    </FlexContainer> */}

                  <FlexContainer justifyContent="space-between">
                    <div style={{ width: "100%" }}>
                      <FastField
                        name="designationTypeId"
                        label="Designation"
                        isColumnWithoutNoCreate
                        selectType="designationType"
                        isColumn
                        component={SearchSelect}
                        value={values.designationTypeId}
                        inlineLabel
                      />
                    </div>
                  </FlexContainer>
                  <Spacer />
                  <FlexContainer justifyContent="space-between">
                    <div style={{ width: "100%" }}>
                      <>
                        <Field
                          name="tag_with_company"
                          // selectType="customerList"
                          label="Current Employer"
                          // label={
                          //   <FormattedMessage
                          //     id="company"
                          //     defaultMessage="Company"
                          //   />
                          // }
                          component={InputComponent}
                          isColumn
                          // value={values.customerId}
                          // defaultValue={{ label: firstName, value: documentId }}
                          inlineLabel
                          width={"100%"}
                        />
                      </>
                    </div>

                    
                  </FlexContainer>
                  <Spacer />
                  <FlexContainer justifyContent="space-between">
                    <div style={{ width: "45%" }}>
                      <Field
                        name="dateOfBirth"
                        label="Month of Birth"
                        placeholder="Select"
                        isColumn
                        isColumnWithoutNoCreate
                        component={SelectComponent}
                        options={MONTHS}
                        // value={values.dateOfBirth}
                        style={{ display: "flex" }}
                        // defaultValue={moment("2020-01-01")}
                      />
                    </div>
                    <div style={{ width: "45%" }}>
                      <Field
                        name="date"
                        label="Date of Birth"
                        isColumn
                        isColumnWithoutNoCreate
                        component={SelectComponent}
                        options={DaysCompressorWithMonth(values.dateOfBirth)}
                        // value={values.dateOfBirth}
                        style={{ display: "flex" }}
                        // defaultValue={moment("2020-01-01")}
                      />
                    </div>
                    

                    
                  </FlexContainer>
                </div>
                &nbsp;
                <div>
                  {/* {this.props.responseData && (
                    <>
                      <StyledLabel>Skill set</StyledLabel>
                      <SkillsLoadMore
                        skillList={this.props.responseData.skills}
                      />
                    </>
                  )} */}
                  <Spacer />
                  {/* {this.state.candidate && ( */}
                  <>
                    <Spacer style={{ marginTop: "1em" }} />
                    <FlexContainer>
                      <FlexContainer justifyContent="space-between">
                      
                        <div >
                        <StyledLabel>Applying for</StyledLabel>
                     
                       </div>
                       <div>
                          <Switch
                          checked={this.state.whiteblue}
                          onChange={this.handleWhiteBlue}
                          disabled={this.state.checked}
                          checkedChildren="White collar"
                          unCheckedChildren="Blue collar"
                        />
                        </div>
                        
                        <div>
                        <Checkbox
                          checked={this.state.checked}
                          onChange={() => this.handleChange()}
                          style={{ marginLeft: "auto" }}
                        >                          
                          Both
                        </Checkbox>
                        </div>
                      </FlexContainer>
                    </FlexContainer>
                    <Spacer  />
                    <FlexContainer justifyContent="space-between">

                      

                      <div style={{ width: "47%" }}>
                        <FlexContainer justifyContent="space-between">
                          <StyledLabel>Type</StyledLabel>
                          <Switch
                            checked={this.state.billing}
                            onChange={this.handlebilling}
                            checkedChildren="Permanent"
                            unCheckedChildren="Contract"
                          />
                        </FlexContainer>
                      </div>
                    </FlexContainer>
                    <Spacer style={{ marginTop: "1em" }} />
                    <FlexContainer justifyContent="space-between">
                      <div style={{ width: "100%" }}>
                        {" "}
                        {this.state.availability && (
                          <Field
                            name="availableDate"
                            label="Available from"
                            component={DatePicker}
                            style={{ display: "flex" }}
                            isColumn
                            width={"100%"}
                            value={values.availableDate}
                            inlineLabel
                            disabledDate={(currentDate) => {
                              if (values.availableDate) {
                                if (
                                  moment(currentDate).isBefore(
                                    moment(values.availableDate)
                                  )
                                ) {
                                  return true;
                                } else {
                                  return false;
                                }
                              }
                            }}
                          />
                        )}
                      </div>

                     
                    </FlexContainer>
                    <Spacer style={{ marginTop: "1.25em" }} />
                    <FlexContainer justifyContent="space-between">
                      <div style={{ width: "100%" }}>
                        <Field
                          name="billing"
                          label={this.state.billing ? "Expectation" : "Billing"}
                          width={"100%"}
                          isColumn
                          component={InputComponent}
                        />
                      </div>

                      
                    </FlexContainer>
                  </>
                  <Spacer />
                  <FlexContainer justifyContent="space-between">
                    <div style={{ width: "100%" }}>
                      <FastField
                        // isRequired
                        // type="text"
                        name="currentSalary"
                        label="Current Salary"
                        // label={
                        //   <FormattedMessage
                        //     id="app.currentsalary"
                        //     defaultMessage="Current Salary"
                        //   />
                        // }
                        // className="field"
                        isColumn
                        width={"100%"}
                        component={InputComponent}
                        inlineLabel
                      />
                    </div>

                    
                  </FlexContainer>
                  <Spacer />
                  <FlexContainer justifyContent="space-between">
                    <div style={{ width: "100%" }}>
                      <Field
                        name="benifit"
                        label="Benefits"
                        // label={
                        //   <FormattedMessage
                        //     id="benifit"
                        //     defaultMessage="Benefits"
                        //   />
                        // }
                        component={InputComponent}
                        isColumn
                        width="100%"
                      />
                    </div>

                  
                  </FlexContainer>
                  <Spacer />
                  <FlexContainer>
                    <div style={{ width: "100%" }}>
                      <Field
                        name="noticeDetail"
                        label="Description"
                        // label={
                        //   <FormattedMessage
                        //     id="app.noticeperiodinfo"
                        //     defaultMessage="Notice Period Info"
                        //   />
                        // }
                        isRequired
                        isColumn
                        component={TextareaComponent}
                      />
                    </div>
                  </FlexContainer>
                  
                  
                  
                </div>

                    </div>
                    <div style={{width:"49%"}}>
                      {/* Right */}
                      
                        

                        

                       <div >
                      <Field
                        name="workpreference"
                        label="Work Preference"
                        placeholder="Select"
                        width={"100%"}
                        component={SelectComponent}
                        options={["Remote", "Hybrid", "Office"]}
                        isColumn
                      />

                      
                      {/* <Field
                    name="workpreference"
                    label="Work Preference"
                  // mode
                    placeholder="Select"
                    width={"100%"}
                   component={SelectComponent}
                   options={[
                    " Remote",
                    " Hybrid",
                    " Office"]}
                    defaultValue={r}
                    isColumn
                    // options={Array.isArray(libraryOption) ? libraryOption : []}   
                  /> */}
                       </div>
                       
                       <div >
                        <Field
                          name="nationality"
                          isColumnWithoutNoCreate
                          label="Nationality" 
                          isColumn   
                          width={"100%"}                    
                          selectType="country"                          
                          component={InputComponent}                          
                          inlineLabel
                        />
                       </div>  
                       
                       <div >
                      <FastField
                        type="idNumber"
                        name="idNumber"
                        label="ID Number"
                        // label={
                        //   <FormattedMessage
                        //     id="app.idNumber"
                        //     defaultMessage="ID Number"
                        //   />
                        // }
                        component={InputComponent}
                        inlineLabel
                        width={"100%"}
                        isColumn
                      />
                       </div>  

                       <div >
                      <FastField
                        name="departmentId"
                        label="Department"
                        // isColumnWithoutNoCreate
                        isColumn
                        component={SelectComponent}
                        options={
                          Array.isArray(departmentOption) ? departmentOption : []
                        }
                        inlineLabel
                      />
                       </div> 

                       <div >
                      <FastField
                        type="text"
                        name="linkedin"
                        label="Linkedin "
                        // label={
                        //   <FormattedMessage
                        //     id="app.linkedin"
                        //     defaultMessage="Linkedin"
                        //   />
                        // }
                        isColumn
                        width={"100%"}
                        padding={"5em"}
                        //value={ this.props.responseData.hasOwnProperty("linkedInProfile") ? this.props.responseData.linkedInProfile: ""}
                        component={InputComponent}
                        inlineLabel
                      />
                       </div> 
                       
                      <div>
                      <Field
                        name="skills"
                        label="Skills"
                        mode
                        placeholder="Select"
                        width={"100%"}
                        component={SelectComponent}
                        options={
                          Array.isArray(libraryOption) ? libraryOption : []
                        }
                      />
                      </div> 

                      
                      <div style={{margin:"5%"}}>
                    <FlexContainer justifyContent="space-between">
                      <StyledLabel >Active</StyledLabel>                     
                      <Switch                                              
                        checked={this.state.availability}
                        onChange={this.handleAvailability}
                        // disabled={this.state.availability}
                        checkedChildren="Yes"
                        unCheckedChildren="No"
                      />
                      </FlexContainer>
                      </div>  

                      <div >
                        <FastField
                          name="experience"
                          label="Experience in years"
                          isColumn
                          width={"100%"}
                          component={InputComponent}
                          inlineLabel
                        />
                      </div>  

                      <div>
                        <FastField
                          name="CostType"
                          label="Cost Type"
                          isColumn
                          width={"100%"}
                          component={SelectComponent}
                          options={[
                            "Hourly",
                            "Weekly",
                            "Monthly",
                            "Monthly Salary",
                            "Annual Salary",
                          ]}
                          inlineLabel
                        />
                      </div>    
                      <Spacer style={{ marginTop: "5%" }} />
                     <div >
                      <Field
                        name="currency"
                        isColumnWithoutNoCreate
                        label="
                         Currency"
                        isColumn
                        width={"100%"}
                        selectType="currencyName"
                        isRequired
                        component={SearchSelect}
             
                      />
                    </div> 
                    <Spacer style={{ marginTop: "5%" }} />
                    <div >
                      <FastField
                        name="noticePeriod"
                        label="Notice"
                        // label={
                        //   <FormattedMessage
                        //     id="app.notice"
                        //     defaultMessage="Notice (months)"
                        //   />
                        // }
                        // className="field"
                        isColumn
                        width={"100%"}
                        options={["1", "2", "3", "4", "5", "6", "7", "8"]}
                        component={SelectComponent}
                        inlineLabel
                      />
                    </div>
                    <Spacer style={{ marginTop: "8%" }} />
                    <FieldArray
                    name="address"
                    render={(arrayHelpers) => (
                      <AddressFieldArray
                        singleAddress
                        arrayHelpers={arrayHelpers}
                        values={values}
                      />
                    )}
                  />

                    </div>
                </div>
           </div>
              <Spacer style={{margin:"1%"}}/>
              <FlexContainer justifyContent="center">
                <Button
                  type="primary"
                  htmlType="submit"
                  // icon={<PoweroffOutlined />}
                  Loading={addingCandidateProcess}
                >
                  Apply
                </Button>
                    </FlexContainer>

            </Form>
          )}
        </Formik>
      </>
    );
  }
}

const mapStateToProps = ({ auth, job }) => ({
  addingCandidateProcess: job.addingCandidateProcess,
  sectors: job.sectors,
  librarys: job.librarys,
  idProofs: job.idProofs,
  departments: job.departments,
  emailData:job.emailData,
  setEditingCard:job.setEditingCard,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      saveCandidateProcess,
      getLibrarys,
      getSectors,
      getIdProofs,
      getDepartments
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CandidateJobApplyForm);









