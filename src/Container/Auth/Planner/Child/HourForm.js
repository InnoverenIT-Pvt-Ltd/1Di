import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { base_url } from "../../../../Config/Auth";
//import LazySelect from "../../../../Components/Forms/Formik/LazySelect";
import { bindActionCreators } from "redux";
import { Button, Icon, Switch } from "antd";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { Spacer, StyledLabel } from "../../../../Components/UI/Elements";
import SearchSelect from "../../../../Components/Forms/Formik/SearchSelect";
import { InputComponent } from "../../../../Components/Forms/Formik/InputComponent";
import AddressFieldArray from "../../../../Components/Forms/Formik/AddressFieldArray";
import { SelectComponent } from "../../../../Components/Forms/Formik/SelectComponent";
import { DatePicker } from "../../../../Components/Forms/Formik/DatePicker";
import { TimePicker } from "../../../../Components/Forms/Formik/TimePicker";
import {
    getCandidateProject,
    addHour,
    getCandidateCustomer,
    getCandidateTask
}
    from "../PlannerAction"
// import {
//   addHour,
//   // deleteEvent,
//   // updateEvent,
//   // handleEventModal,
// } from "../../Event/EventAction";
// import { handleChooserModal } from "../../Planner/PlannerAction";
import { FlexContainer } from "../../../../Components/UI/Layout";
import { TextareaComponent } from "../../../../Components/Forms/Formik/TextareaComponent";
import { StyledPopconfirm } from "../../../../Components/UI/Antd";
// import { getEmployeelist } from "../../Employees/EmployeeAction";
// import { getEvents } from "../../Settings/Event/EventAction";
// import CandidateClearbit from "../../../Components/Forms/Autocomplete/CandidateClearbit";
// import { setClearbitCandidateData } from "../../Candidate/CandidateAction";
// yup validation scheme for creating a opportunity


class HourForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reminder: true,
        };
    }
    //   handleCallback = () => {
    //     const { handleChooserModal, handleEventModal, callback } = this.props;
    //     handleChooserModal(false);
    //     handleEventModal(false);
    //     callback && callback();
    //   };
    //   handleReminderChange = (checked) => {
    //     this.setState({
    //       reminder: checked,
    //     });
    //   };
    //   componentDidMount() {
    //     this.props.getCandidateProject(this.props.candidateId);

    //   }
    componentDidMount() {
        const {
            candidateId,
            getCandidateProject,
            getCandidateCustomer,
            getCandidateTask
        } = this.props;

        getCandidateProject(candidateId);
        getCandidateCustomer(candidateId);
        getCandidateTask(candidateId);

    }

    render() {
       
         
        console.log(this.props.startDate)
        const projectData = this.props.candidateProject.map((item) => {
            
            return {
                label: `${item.customerName}`,
                // label: `${item.salutation || ""} ${item.firstName ||
                //   ""} ${item.middleName || ""} ${item.lastName || ""}`,
                value: item.customerId,
                
            };
            
        });

        const projectOption = this.props.candidateProject.map((item) => {
            return {
                label: `${item.projectName}`,
                // label: `${item.salutation || ""} ${item.firstName ||
                //   ""} ${item.middleName || ""} ${item.lastName || ""}`,
                value: item.projectId,
            };
        });
        const taskOption = this.props.candidateTask.map((item) => {
            return {
                label: `${item.taskName}`,
                // label: `${item.salutation || ""} ${item.firstName ||
                //   ""} ${item.middleName || ""} ${item.lastName || ""}`,
                value: item.taskId,
            };
        });
    //    function taskOption(filterOptionKey, filterOptionValue) {
    //         const taskOption =
    //           this.props.candidateTask.length &&
    //           this.props.candidateTask
    //             .filter((option) => {
    //               if (option.customerId === filterOptionValue && option.probability !== 0) {
    //                 return option;
    //               }
    //             })
    //             .map((option) => ({
    //               label: option.taskName || "",
    //               value: option.taskId,
    //             }));
        
    //         return taskOption;
    //       }
        const {
            addHour,
            startDate,
            endDate,
            plannerStartDate,
            startTime,
            endTime,

        } = this.props;
        // console.log(defaultAccounts);
        return (
            <>
                <Formik
                    enableReinitialize
                    initialValues={{

                        projectName: "",
                       // plannerStartDate: "",
                        customerName:"",
                        customerId:"",
                        taskId:"",
                        completeUnit:"",
                        note:"",
                        plannerStartDate:startDate || moment(),
                        endDate: "",
                        organizationId: this.props.organizationId,
                        // userId:this.props.userId,
                        candidateId: this.props.candidateId




                    }
                    }
                    // validationSchema={EventSchema}
                    onSubmit={(values, { resetForm }) => {
                        console.log(values);

                        let timeZoneFirst = "GMT+05:30 Kolkata";


                        let mytimeZone = timeZoneFirst.substring(4, 10);
                        console.log(mytimeZone);

                        var a = mytimeZone.split(":");
                        console.log(a);
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
                        console.log(finalStartTime);

                        let newStartTime = `${finalStartTime}${timeEndPart}`;
                        console.log(newStartTime);

                        let newEndDate = moment(values.endDate).format("YYYY-MM-DD");
                        let firstEndTime = moment(values.endTime).format("HH:mm:ss.SSS[Z]"); // getting start time from form input
                        console.log(firstEndTime);
                        let firstEndHours = firstEndTime.substring(0, 5); // getting only hours and minutes
                        console.log(firstEndHours);

                        var firstEndTimeSplit = firstEndHours.split(":"); // removing the colon
                        console.log(firstEndTimeSplit);
                        var endMinutes = +firstEndTimeSplit[0] * 60 + +firstEndTimeSplit[1]; // converting hours into minutes
                        console.log(endMinutes);
                        var firstEndTimeminutes = Math.abs(endMinutes - timeZoneminutes); // start time + time zone
                        console.log(firstEndTimeminutes);
                        let hr = Math.floor(firstEndTimeminutes / 60); // converting to hours
                        console.log(hr);
                        let mi = firstEndTimeminutes % 60;
                        console.log(hr);
                        hr = hr < 10 ? "0" + hr : hr;
                        mi = mi < 10 ? "0" + mi : mi;
                        let finalEndTime = `${hr}:${mi}`;
                        console.log(finalEndTime);
                        console.log(timeEndPart);
                        console.log(`${finalEndTime}${timeEndPart}`);

                        let newEndTime = `${finalEndTime}${timeEndPart}`;
                        //let newEndTime = moment(values.endTime).format("HH:mm:ss.SSS[Z]");

                     



                        addHour(

                            {
                                ...values,
                            //    startDate: `${newStartDate}T${newStartTime}`,
                            //       endDate: `${newEndDate}T${newEndTime}`,

                                startDate: startDate || moment(),
                                endDate: endDate || moment(),
                                //   startTime: 0,
                                //   endTime: 0,
                            },
                            this.props.candidateId,
                            this.handleCallback
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
                            <div style={{ display: "flex", justifyContent: "space-between ", }}>
                                <div
                                    style={{
                                        height: "100%",
                                        width: "47%",
                                    }}
                                >
                                    <Spacer />

                                    <Field
                                        isRequired
                                        name="customerId"
                                        label="Customer"
                                    
                                        isColumn
                                        width={"100%"}
                                        // component={InputComponent}
                                        component={SelectComponent}
                                        value={!values.customerId}
                                        options={
                                            Array.isArray(projectData) ? projectData : []
                                        }
                                        inlineLabel
                                    />


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
                                        // component={InputComponent}
                                        component={SelectComponent}
                                        disabled={!values.customerId}
                                        options={
                                            Array.isArray(projectOption) ? projectOption : []
                                        }
                                        inlineLabel
                                    />
                        

                                    <Spacer />
                                    <div>
                                       

                                        <FlexContainer justifyContent="space-between">
                                            <div style={{ width: "100%" }}>
                                            <Field
                                        isRequired
                                        name="taskId"

                                        label={
                                            <FormattedMessage
                                                id="app.task"
                                                defaultMessage="Task"
                                            />
                                        }
                                        isColumn
                                        width={"100%"}
                                        component={SelectComponent}
                                        disabled={!values.customerId}
                                        options={
                                            Array.isArray(taskOption) ? taskOption : []
                                        }
                                        inlineLabel
                                    />

                                                {/* <Field
                                                    isRequired
                                                    // name="startDate"
                                                     label="Task"
                                                  
                                                    isColumn
                                                    component={InputComponent}
                                                    // use12Hours
                                                    // value={values.startDate}
                                                    inlineLabel
                                                    style={{
                                                        width: "100%",
                                                    }}
                                                /> */}
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
                         width:"26em"
                      }}
                  />

                                        </FlexContainer>
                                    </div>


                                    <Spacer />


                                </div>
                                    <div
                                    style={{
                                        height: "100%",
                                        width: "47%",
                                    }}
                                >
     <Field
                          isRequired
                          name="plannerStartDate"
                          //label="Start "
                          label={
                            <FormattedMessage
                              id="app.startDate"
                              defaultMessage="Start Date"
                            />
                          }
                          isColumn
                          component={DatePicker}
                          value={values.plannerStartDate}
                          disabled
                          inlineLabel
                          style={{
                            width: "100%",
                            height:"1.8rem",
                            borderRadius:"0.3rem"
                          }}
                        />
                         <FlexContainer justifyContent="space-between">
                                            <div style={{ width: "47%" }}>
                                                <Field
                                                    isRequired
                                                    name="startDate"
                                                    // label="Start Time"
                                                    label={
                                                        <FormattedMessage
                                                            id="app.startTime"
                                                            defaultMessage="Start Time"
                                                        />
                                                    }
                                                    isColumn
                                                    component={TimePicker}
                                                    use12Hours
                                                    disabled={!values.customerId}
                                                    inlineLabel
                                                    style={{
                                                        width: "100%",
                                                    }}
                                                />
                                            </div>
                                            <div style={{ width: "47%" }}>
                                                <Field
                                                    isRequired
                                                    name="endDate"
                                                    //label="End Time"
                                                    label={
                                                        <FormattedMessage
                                                            id="app.endtime"
                                                            defaultMessage="End Time"
                                                        />
                                                    }
                                                    isColumn
                                                    component={TimePicker}
                                                    use12Hours
                                                    disabled={!values.customerId}
                                                    inlineLabel
                                                    style={{
                                                        width: "100%",
                                                    }}
                                                />
                                            </div>
                                        </FlexContainer>
                                        <div >
                                                <Field
                                                 name="completeUnit"
                                                label="Completed "
                                                  placeholder="Units"
                                                    isColumn
                                                    type="text"
                                                    component={InputComponent}
                                                    // use12Hours
                                                    disabled={!values.customerId}
                                                    inlineLabel
                                                    style={{
                                                        width: "100%",height: "1.8rem",
                                                        borderRadius: "0.4rem"
                                                    }}
                                                />
                       
                                            </div>
                                </div>
                            </div>
                            <Spacer />
                            <FlexContainer justifyContent="flex-end">
                                {/* {isEditing && ( */}
                                {/* <>
                    <StyledPopconfirm
                      title="Do you want to delete?"
                     // onConfirm={() => deleteEvent(prefillEvent.eventId)}
                    >
                      <Button
                        type="danger"
                        htmlType="submit"
                        //Loading={deletingEvent}
                      >
                        <FormattedMessage
                          id="app.delete"
                          defaultMessage="Delete"
                        />
                      </Button>
                    </StyledPopconfirm>
                  </> */}
                                {/* )} */}
                                <div class="flex justify-end">
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    Loading={this.props.addingPlannerHour}
                                >
                                    {/* {isEditing ? "Update" : */}
                                    <FormattedMessage
                                        id="app.create"
                                        defaultMessage="Create"
                                    />
                                    {/* } */}
                                </Button>
                                </div>
                            </FlexContainer>
                        </Form>
                    )}
                </Formik>
            </>
        );
    }
}
const mapStateToProps = ({ auth, event, employee, events, candidate, planner }) => ({
    //   addingEvent: event.addingEvent,
    //   updatingEvent: event.updatingEvent,
    //addingPlannerHour:events.addingPlannerHour
    candidateProject: planner.candidateProject,
    addingPlannerHour: planner.addingPlannerHour,
    candidateId: auth.userDetails.candidateId,
    userId: auth.userDetails.userId,
    organizationId: auth.userDetails.organizationId,
    candidateCustomer:planner.planner,
    candidateTask:planner.candidateTask


    //   deletingEvent: event.deleteEvent,
    //   employees: employee.employees,
    //   events: events.events,
    //   candidateId: candidate.clearbitCandidate.candidateId,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            getCandidateProject,
            addHour,
            getCandidateCustomer,
            getCandidateTask,
            //   addEvent,
            //   deleteEvent,
            //   updateEvent,
            //   handleChooserModal,
            //   handleEventModal,
            //   getEmployeelist,
            //   getEvents,
            //   setClearbitCandidateData
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(HourForm);
