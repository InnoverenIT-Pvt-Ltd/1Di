import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { base_url } from "../../Config/Auth";
import { bindActionCreators } from "redux";
import { Button, Icon, Switch,message } from "antd";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import moment from "moment";
import {
    getCandidateProject,
    
}
    from "../Auth/Planner/PlannerAction"
import { Spacer, StyledLabel } from "../../Components/UI/Elements";
import SearchSelect from "../../Components/Forms/Formik/SearchSelect";
import { InputComponent } from "../../Components/Forms/Formik/InputComponent";
import AddressFieldArray from "../../Components/Forms/Formik/AddressFieldArray";
import { SelectComponent } from "../../Components/Forms/Formik/SelectComponent";
import { DatePicker } from "../../Components/Forms/Formik/DatePicker";
import { TimePicker } from "../../Components/Forms/Formik/TimePicker";
import {
    addTaskHour,
} from "../Task/TaskAction";
import { FlexContainer } from "../../Components/UI/Layout";
import { TextareaComponent } from "../../Components/Forms/Formik/TextareaComponent";
import { StyledPopconfirm } from "../../Components/UI/Antd";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
class TaskHourForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        const {
            candidateId,
            getCandidateProject,
        } = this.props;

        getCandidateProject(candidateId);
       

    }
    render() {
        const {
            addTaskHour,
            startTime,
            endTime,
            rowDataPass,
            startDate,
            endDate
        } = this.props;
        
        const projectOption = this.props.candidateProject.map((item) => {
            return {
                label: `${item.projectName}`,
                // label: `${item.salutation || ""} ${item.firstName ||
                //   ""} ${item.middleName || ""} ${item.lastName || ""}`,
                value: item.projectId,
            };
        });
        return (
            <>
                <Formik
                    enableReinitialize
                    initialValues={{
                        projectName:rowDataPass.projectId,
                        // projectId:rowDataPass.projectId,
                        customerName:rowDataPass.customerName,
                        customerId:rowDataPass.customerId,
                        taskId:rowDataPass.taskId,
                        completeUnit:"",
                        note:"",
                        plannerStartDate:"",
                        endDate: "",
                        // endDate:  moment(rowDataPass.endDate),
                        startTime:startDate || null,
                        endTime:endDate || null,
                        organizationId: this.props.organizationId,
                        candidateId: this.props.candidateId
                    }
                    }
                    onSubmit={(values, { resetForm }) => {
                        
            console.log(values);
            let timeZoneFirst = "GMT+05:30 Kolkata";
            let mytimeZone = timeZoneFirst.substring(4, 10);
            var a = mytimeZone.split(":");
            var timeZoneminutes = +a[0] * 60 + +a[1];
            console.log(timeZoneminutes);
            if (!values.endDate) {
              values.endDate = values.startDate;
            }
            let newStartDate = moment(values.startDate).format("YYYY-MM-DD");
            console.log(newStartDate);
            //Time calculation
            let firstStartTime = moment(values.startTime).format(
              "HH:mm:ss.SSS[Z]"
            ); // getting start time from form input
            console.log(firstStartTime);
            let firstStartHours = firstStartTime.substring(0, 5); // getting only hours and minutes
            console.log(firstStartHours);

            let timeEndPart = firstStartTime.substring(5, 13); // getting seconds and rest
            console.log(timeEndPart);

            var firstStartTimeSplit = firstStartHours.split(":"); // removing the colon
            console.log(firstStartTimeSplit);
            var minutes =
              +firstStartTimeSplit[0] * 60 + +firstStartTimeSplit[1]; // converting hours into minutes
            console.log(minutes);

            var firstStartTimeminutes = minutes - timeZoneminutes; // start time + time zone
            console.log(firstStartTimeminutes);

            let h = Math.floor(firstStartTimeminutes / 60); // converting to hours
            let m = firstStartTimeminutes % 60;
            h = h < 10 ? "0" + h : h;
            m = m < 10 ? "0" + m : m;
            let finalStartTime = `${h}:${m}`;

            let newStartTime = `${finalStartTime}${timeEndPart}`;

            let newEndDate = moment(values.endDate).format("YYYY-MM-DD");
            let firstEndTime = moment(values.endTime).format("HH:mm:ss.SSS[Z]"); // getting start time from form input
            let firstEndHours = firstEndTime.substring(0, 5); // getting only hours and minutes
            var firstEndTimeSplit = firstEndHours.split(":"); // removing the colon
            var endMinutes = +firstEndTimeSplit[0] * 60 + +firstEndTimeSplit[1]; // converting hours into minutes
            console.log(endMinutes);
            var firstEndTimeminutes = Math.abs(endMinutes - timeZoneminutes); // start time + time zone
            console.log(firstEndTimeminutes);
            let hr = Math.floor(firstEndTimeminutes / 60); // converting to hours
            let mi = firstEndTimeminutes % 60;
            hr = hr < 10 ? "0" + hr : hr;
            mi = mi < 10 ? "0" + mi : mi;
            let finalEndTime = `${hr}:${mi}`;

            let newEndTime = `${finalEndTime}${timeEndPart}`;
                

            addTaskHour(

                            {
                                ...values,
                                startDate: moment(values.startDate).toISOString(),
                                // endDate: moment(values.endDate).toISOString(),
                                startTime: 0,
                                endTime: 0,
                                startDate: `${newStartDate}T${newStartTime}`,
                                endDate: `${newEndDate}T${newEndTime}`,
                                startDate: values.startDate,
                                endDate: values.endDate,
                            },
                            this.handleCloseModal
                        )

                        resetForm();
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
                        <Form className="form-background">
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div
                                    style={{
                                        height: "100%",
                                        width: "47%",
                                    }}
                                >
                                    <Spacer />
                                    <FlexContainer justifyContent="space-between">
                                    <div style={{ width: "47%" }}>
                                    <Field
                                        name="customerId"
                                        label="Customer"
                                        isColumn
                                        width={"100%"}
                                        component={InputComponent}
                                        value={values.customerName}
                                        disabled
                                        inlineLabel
                                    />
                                    </div>
                                    <div style={{ width: "47%" }}>
                                    <Field
                                        isRequired
                                        name="projectName"
                                        //label="Topic"
                                        label={
                                            <FormattedMessage
                                                id="app.project"
                                                defaultMessage="Project"
                                            />
                                        }
                                        isColumn
                                        width={"100%"}
                                         component={InputComponent}
                                        // component={SelectComponent}
                                        // disabled={!values.customerId}
                                        value={rowDataPass.projectName}
                                        options={
                                            Array.isArray(projectOption) ? projectOption : []
                                        }
                                        inlineLabel
                                    />
                                    </div>
                                    </FlexContainer>
                                    <Spacer />
                                    <div>
                                        <FlexContainer justifyContent="space-between">
                                            
                                            <div style={{ width: "47%" }}>
                                                {/* <Field
                                                    isRequired
                                                    name="endDate"
                                                    //label="End Time"
                                                    label={
                                                        <FormattedMessage
                                                            id="app.endDate"
                                                            defaultMessage="End Date"
                                                        />
                                                    }
                                                    isColumn
                                                    component={DatePicker}
                                                    value={values.endDate}
                                                    // disabled={!values.customerId}
                                                    inlineLabel
                                                    style={{
                                                        width: "100%",
                                                    }}
                                                /> */}
                                             <Field
                                        name="taskId"

                                        label={
                                            <FormattedMessage
                                                id="app.task"
                                                defaultMessage="Task"
                                            />
                                        }
                                        isColumn
                                        width={"100%"}
                                        component={InputComponent}
                                        value={rowDataPass.taskName}
                                        disabled
                                        inlineLabel
                                    />
    
                                            </div>
                                            <div style={{ width: "47%" }}>
                                               
                                           
                                            <Field
                                                 name="completeUnit"
                                                label="Completed Unit"
                                                //   placeholder="Completed"
                                                    isColumn
                                                    type="text"
                                                    component={InputComponent}
                                                    // use12Hours
                                                    // disabled={!values.customerId}
                                                    inlineLabel
                                                    style={{
                                                        width: "100%",height: "2.8rem",
                                                        borderRadius: "0.4rem"
                                                    }}
                                                />
                                                 </div>
                                        </FlexContainer>
                                       
                                    </div>
                                </div>
                                <div
                                    style={{
                                        height: "100%",
                                        width: "47%",
                                    }}
                                > 
                                  
                                    <FlexContainer justifyContent="space-between">
                                    <div style={{ width: "32%" }}>
                                            <Field
                          name="startDate"
                          label={
                            <FormattedMessage
                              id="app.startTime"
                              defaultMessage="Start Time"
                            />
                          }
                          isColumn
                          component={TimePicker}
                          use12Hours
                          value={values.startDate}
                          inlineLabel
                          style={{
                            flexBasis: "80%",
                            // marginTop: "0.25em",
                            width: "100%",
                          }}
                        />
                                        </div>
                                        <div style={{ width: "32%" }}>
                        <Field
                          // isRequired
                          name="endDate"
                          //label="End Time"
                          label={
                            <FormattedMessage
                              id="app.endTime"
                              defaultMessage="End Time"
                            />
                          }
                          isColumn
                          component={TimePicker}
                          use12Hours
                          value={values.endDate}
                          inlineLabel
                          style={{
                            flexBasis: "80%",
                            // marginTop: "0.25em",
                            width: "100%",
                          }}
                        />
                      </div>
                      <div style={{ width: "32%" }}>
                                            <Field
                                                    isRequired
                                                    name="plannerStartDate"
                                                    // label="Start Time"
                                                    label={
                                                        <FormattedMessage
                                                            id="app.date"
                                                            defaultMessage="Date"
                                                        />
                                                    }
                                                    isColumn
                                                    component={DatePicker}
                                                    value={values.plannerStartDate}
                                                    // disabled={!values.customerId}
                                                    inlineLabel
                                                    style={{
                                                        width: "100%",
                                                        height:"2.2rem",
                                                        borderRadius:"0.3rem"
                                                    }}
                                                />
                                               
                       
                                            </div>
                                    </FlexContainer>
                                    <FlexContainer justifyContent="space-between">
                                           <Field
                    name="note"
                     label="Notes"
                   th={"100%"}
                    isColumn
                    component={TextareaComponent}
                    disabled={!values.customerId}
                    style={{
                         height: "5em",
                         width:"28.3rem"
                      }}
                  />

                                        </FlexContainer>      

                                </div>
                            </div>
                            <Spacer />
                            <FlexContainer justifyContent="flex-end">
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    Loading={this.props.addingTaskHour}
                                >
                                    {/* {isEditing ? "Update" : */}
                                    <FormattedMessage
                                        id="app.create"
                                        defaultMessage="Create"
                                    />
                                    {/* } */}
                                </Button>
                            </FlexContainer>
                        </Form>
                    )}
                </Formik>
            </>
        );
    }
}
const mapStateToProps = ({ auth,task,planner }) => ({
    candidateProject: planner.candidateProject,
    addingTaskHour: task.addingTaskHour,
    candidateId: auth.userDetails.candidateId,
    userId: auth.userDetails.userId,
    organizationId: auth.userDetails.organizationId,
    candidateCustomer:planner.planner,
    candidateTask:planner.candidateTask
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            addTaskHour,
            getCandidateProject
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(TaskHourForm);

