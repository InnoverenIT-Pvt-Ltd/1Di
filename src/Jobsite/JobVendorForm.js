import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Select, Icon, Tag, Switch, Checkbox } from "antd";
import { Formik, Form, FastField, Field, FieldArray } from "formik";
import * as Yup from "yup";
import { Route, Redirect, withRouter } from "react-router-dom";
import { MainWrapper, Spacer } from "../Components/UI/Elements";
import DragableUpload from "../Components/Forms/Formik/DragableUpload";
import AddressFieldArray from "../Components/Forms/Formik/AddressFieldArray";
import { InputComponent } from "../Components/Forms/Formik/InputComponent";
import { SelectComponent } from "../Components/Forms/Formik/SelectComponent";
import Upload from "../Components/Forms/Formik/Upload";
import { StyledLabel } from "../Components/UI/Elements";
import { FlexContainer } from "../Components/UI/Layout";
import { TextareaComponent } from "../Components/Forms/Formik/TextareaComponent";
import { DatePicker } from "../Components/Forms/Formik/DatePicker";
import moment from "moment";
import { addPartner, getSectors,getLibrarys } from "./JobAction";
import SearchSelect1 from "../Components/Forms/Formik/SearchSelect1";

const { Option } = Select;
/**
 * yup validation scheme for creating a contact
 */
 const PartnerSchema = Yup.object().shape({
  partnerName: Yup.string().required("Input required!"),
  countryDialCode: Yup.string().required("Input required!"),
  phoneNo: Yup.string().required("Input required!"),
  url: Yup.string().required("Input required!"),
  // address: Yup.string().required("Input required!"),
  sectorId: Yup.string().required("Input required!"),
  email:Yup.string().email("Enter a valid Email").required("Input needed!"),
});

class JobVendorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      documentStatus: false,
      checkeds: false,
      responseData:null,
    };
  }
  handleDocumentStatus = (checked) => {
    this.setState({ documentStatus: checked });
  };

  handleCallBack=(data)=> {
    this.props.history.push(`/partnerSuccess`);
  }

  handleChange = () => {
    this.setState({
      checkeds: !this.state.checkeds,
    });
    console.log(this.state.checkeds);
  };
 handleResponseData=(data)=>{
    this.setState({responseData:data})
  }
  handleReset = (resetForm) => {
    const { callback } = this.props;
    callback && callback();
    resetForm();
  };

  componentDidMount() {
    this.props.getSectors();
    this.props.getLibrarys();
  }
  render() {
    const {
      accounts,
      user,
      // user: { userId, firstName },
      isEditing,
      prefillAccount,
      addingPartner,
      addPartner,
      clearbit,
      setClearbitData,
    } = this.props;

    const sectorOption = this.props.sectors.map((item) => {
      return {
        label: item.sectorName || "",
        value: item.sectorId,
      };
    });

    const skillOption = this.props.sectors.map((item) => {
      return {
        label: `${item.sectorName}`,
        value: item.sectorId,
      };
    });

    return (
      <>
        <Formik
          // enableReinitialize
          initialValues={{
            
            partnerName: "",
            definationId:"",
            sectorDescription: "",
            url: "",
            countryDialCode: "",
            // email: "",
             //country: "",
            phoneNo: "",
            // userId: this.props.userId,
            notes: "",
            taxRegistrationNumber: "",
            businessRegistrationNumber: "",
            bankName: "",
           
            accountNumber: "",
            documentId:"",
            email:"",
            status: this.state.documentStatus ? "true" : "false",
            
            contactMapper:
              {
              emailId : "",
              firstName: "",
              lastName: "",
              phoneNumber: "",
             
              },

            address: [
              {
                address1: "",
                address2: "",
                street: "",
                city: "",
                state: "",
                postalCode: "",
                
                country: "",
              },
            ],
          }}
          validationSchema={PartnerSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            addPartner(
              {
                ...values,
               
                status: this.state.documentStatus ? "true" : "false",
                sectorId: values.sectorId,
                tncInd:this.state.checkeds?true:false
              },
              this.handleCallBack,
              //   this.props.userId,
              () => this.handleReset(resetForm)
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
            <Form class=" max-sm:w-11/12 -mt-56 m-auto md:mt-0 w-3/4  ">
              <MainWrapper class="max-sm: w-4/5"   style={{ width: "91%", margin: "auto", height:"82rem",background: "#3737a7" }}
                
              >
                  <div class=" max-sm:flex flex-col m-auto w-11/12 md:w-w77 mt-margin10 ml-auto mr-auto">
                <span style={{color:"White",fontFamily:"sans-serif"}}>Fill in the form!</span>
                <Spacer />
                <hr/>
                {/* <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                > */}
                  <div class="max-sm:flex flex-col items-center" >
                    {/* Left */}
                    {/* <h2><b>Register Company here</b></h2> */}
                    <div>
                      <div class="max-sm:w-60 md:w-w19 ">
                      <Field
                        //isRequired
                        name="partnerName"
                        type="text"
                        // label="Company Name"
                        placeholder="Company name*"
                        isColumn
                        width={"100%"}
                        component={InputComponent}
                        inlineLabel
                      />
                      </div>
                      <FlexContainer >
                      <div class="max-sm:w-60 md:w-w19">
                          <FastField
                            //isRequired
                            type="email"
                            //name="contactMapper.emailId"
                            name="email"
                            // label="Email"
                            className="field"
                            placeholder="Email*"
                            isColumn
                            width={"100%"}
                            component={InputComponent}
                            inlineLabel
                          />
                        </div>
                      </FlexContainer>
                      <FlexContainer justifyContent="space-between">
                      <div class="max-sm:w-20 -mt-6  md:mt-0 w-24 ">
                          <FastField
                            name="countryDialCode"
                            isColumnWithoutNoCreate
                            selectType="dialCode"
                            // label="Phone#"
                            placeholder="Dial"
                            width={"100%"}
                            isColumn
                            component={SearchSelect1}
                          />
                        </div>
                        <div class="max-sm:-mt-1 w-36  md:w-48">
                          <FastField
                            type="text"
                            name="phoneNo"
                            placeholder="Phone Number"
                            isColumn
                            component={InputComponent}
                            inlineLabel
                            width={"100%"}
                          />
                        </div>
                      </FlexContainer>
                      {/* <FlexContainer>
                        <div style={{ width: "100%" }}>
                          <FastField
                            isRequired
                            type="email"
                            name="email"
                            label="Email"
                            className="field"
                            isColumn
                            width={"100%"}
                            component={InputComponent}
                            inlineLabel
                          />
                        </div>
                      </FlexContainer> */}
                      {/* <Spacer /> */}
                      <FlexContainer>
                      <div class="max-sm:w-60 md:w-w19">
                          <FastField
                            name="url"
                            type="text"
                            // label="URL"
                            placeholder="Website URL"
                            isColumn
                            width={"100%"}
                            component={InputComponent}
                            inlineLabel
                          />
                        </div>
                      </FlexContainer>
                      <Spacer />
                  
                      {/* <FlexContainer>
                        <div style={{ width: "100%" }}>
                          <FastField
                            name="sectorId"
                            // label="Sector"
                            placeholder="Sector"
                            isColumn
                            width={"100%"}
                            component={SelectComponent}
                            // options={[" Accountancy"," Aviation"]}
                            options={
                              Array.isArray(sectorOption) ? sectorOption : []
                            }
                          />
                        </div>
                      </FlexContainer> */}
                      <Spacer />

                    </div>
               
                    <div class="max-sm:w-60 md:w-w19">
                    <FieldArray
                      name="address"
                      //value={values.address}
                      render={(arrayHelpers) => (
                        <AddressFieldArray
                          singleAddress
                          arrayHelpers={arrayHelpers}
                          values={values}

                        />
                      )}
                    />
                    
                    </div>
                    
                  {/* </div>
                  <div style={{ width: "47%" }}> */}
        
                  {/* <h2><b>Contact Person</b></h2> */}
                      {/* <FlexContainer justifyContent="space-between">
                        <div style={{ width: "45%" }}>
                          <FastField
                            name="contactMapper.firstName"
                            isColumnWithoutNoCreate 
                            // label="First Name"
                            placeholder="First Name"
                            width={"100%"}
                            isColumn
                            component={InputComponent}
                          />
                        </div>
                        <div style={{ width: "45%" }}>
                          <FastField
                            name="contactMapper.lastName"
                            isColumn
                            // label="LastName"
                            placeholder="Last Name"
                            component={InputComponent}
                            inlineLabel
                            width={"100%"}
                          />
                        </div>
                      </FlexContainer> */}
                          {/* <Spacer/>
                          <FlexContainer justifyContent="space-between">
                        <div style={{ width: "27%" }}>
                          <FastField
                            name="countryDialCode"
                            isColumnWithoutNoCreate
                            selectType="dialCode"
                            // label="Mobile#"
                            placeholder="Mobile#"
                            width={"100%"}
                            isColumn
                            component={SearchSelect}
                          />
                        </div>
                        <div style={{ width: "70%" }}>
                          <FastField
                            type="text"
                            name="contactMapper.phoneNumber"
                            placeholder="Phone Number"
                            isColumn
                            component={InputComponent}
                            inlineLabel
                            width={"100%"}
                          />
                        </div>
                      </FlexContainer>
                      <Spacer/> */}

                      
                   
                       <div class="w-auto max-sm:w-60 mt-6 md:mt-6">
                        
                        <Field
                        name="sectorId"
                        isColumnWithoutNoCreate
                        placeholder="Sector"
                        //selectType="name"
                        width={"100%"}
                        isColumn                        
                        component={SelectComponent}
                        options={Array.isArray(skillOption) ? skillOption : []}                   
                        inlineLabel
                      />
                       
                      </div>
                    {/* <FlexContainer justifyContent="space-between">
                      <div style={{ width: "47%" }}>
                        <Field
                          name="taxRegistrationNumber"
                          type="text"
                          label="Tax Reg#"
                          isColumn
                          width={"100%"}
                          component={InputComponent}
                          inlineLabel
                        />
                      </div>
                      <div style={{ width: "47%" }}>
                        <Field
                          name="businessRegistrationNumber"
                          type="text"
                          label="Business Reg#"
                          isColumn
                          width={"100%"}
                          component={InputComponent}
                          inlineLabel
                        />
                      </div>
                    </FlexContainer>
                    <Spacer />
                    <FlexContainer justifyContent="space-between">
                      <div style={{ width: "47%" }}>
                        <Field
                          name="bankName"
                          type="text"
                          label="Bank Name"
                          isColumn
                          width={"100%"}
                          component={InputComponent}
                          inlineLabel
                        />
                      </div>
                      <div style={{ width: "47%" }}>
                        <Field
                          name="accountNumber"
                          type="text"
                          label="Account #"
                          isColumn
                          width={"100%"}
                          component={InputComponent}
                          inlineLabel
                        />
                      </div>
                    </FlexContainer> */}
                   
                  
                    <div class=" mt-4 max-sm:mt-0 flex flex-col ">
                    <label class="text-white mt-6"style={{fontFamily:"sans-serif"}}>Upload presentation</label>  
                    <DragableUpload
                   handleResponseData={this.handleResponseData}
                  />
                  </div>
                    <Spacer marginTop="1rem"/>
                    {/* <StyledLabel>Status</StyledLabel>
                    &nbsp;&nbsp;
                    <Switch
                      checked={this.state.documentStatus}
                      onChange={this.handleDocumentStatus}
                      checkedChildren="Approved"
                      unCheckedChildren="Not Approved"
                    /> */}
                    <div class="max-sm:mt-8">
                    <Checkbox
                      // disabled={this.props.validOtp === ""}
                      // disabled={true}
                      checkeds={this.state.checkeds}
                      onChange={this.handleChange}
                    >
                      <a href="https://axisdigitaal.com/privacyverklaring"target="_blank" style={{color:"white",fontFamily:"sans-serif"}}>I have read & agree to the<u> privacy policy.</u></a>
                    </Checkbox>
              </div>

                  </div>
                  <div 
              >              <Spacer marginTop="1rem"/>
                <Button
                  type="primary"
                  htmlType="submit"
                  // icon={<PoweroffOutlined />}
                  Loading={addingPartner}
                  className={"vendorBtn"}
                >
                 <label style={{fontFamily:"sans-serif"}}> Send</label>
                </Button>
                </div>
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


const mapStateToProps = ({ job }) => ({
  addingCandidate: job.addingCandidate,
  sectors: job.sectors,
  librarys:job.librarys,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addPartner,
      getLibrarys,
      getSectors,
    },
    dispatch
  );
  export default withRouter (connect(mapStateToProps, mapDispatchToProps)(JobVendorForm));

