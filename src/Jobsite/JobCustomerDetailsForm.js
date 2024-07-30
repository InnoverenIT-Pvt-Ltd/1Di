import React, { useEffect } from "react";
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
import {addCustDetails} from "./JobAction";

function JobCustomerDetailsForm (props) {

return (
<>
<Formik
initialValues={{
    prodectName:"",
    customerName:"",
    emailId:"",
    startDate: moment(),
    duration:"",
}}
onSubmit={(values, { resetForm }) => {
    let newStartDate = moment(values.startDate).format("YYYY-MM-DD");
    props.addCustDetails
    (
        {
            ...values,
            startDate: `${newStartDate}T20:00:00Z`,
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
<FastField
                          name="prodectName"
                          label="Project Name"
                          isColumn
                          width={"100%"}
                          style={{ flexBasis: "30%" }}
                          component={InputComponent}
                          inlineLabel
                        />
                        <FastField
                          name="customerName"
                          label="Customer Name"
                          isColumn
                          width={"100%"}
                          style={{ flexBasis: "30%" }}
                          component={InputComponent}
                          inlineLabel
                        />
                        <FastField
                          name="duration"
                          label="Duration"
                          isColumn
                          width={"100%"}
                          style={{ flexBasis: "30%" }}
                          component={InputComponent}
                          inlineLabel
                        />
                        <Field
                    name="startDate"
                    label="Start Date"
                    // label={
                    //   <FormattedMessage
                    //     id="app.startdate"
                    //     defaultMessage="Start Date"
                    //   />
                    // }
                    component={DatePicker}
                    width={"100%"}
                    value={values.startDate}
                    isColumn
                    inlineLabel
                  />
                  <FlexContainer justifyContent="flex-end">
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            // icon={<PoweroffOutlined />}
                                            Loading={props.addingCustomerDetails}
                                        >
                                            Add
                                        </Button></FlexContainer>
                        </Form>
     )}                   
</Formik>
</>
    );

}

const mapStateToProps = ({ auth, job }) => ({
  addingCustomerDetails:job.addingCustomerDetails
  });
  
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
      {
        addCustDetails
      },
      dispatch
    );
  
  export default connect(mapStateToProps, mapDispatchToProps)(JobCustomerDetailsForm);
  
  
