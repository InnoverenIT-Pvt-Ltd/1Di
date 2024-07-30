import React, { Suspense, Component } from "react";
import { BundleLoader } from "../Components/Placeholder";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Select, Icon, Tag, Switch, Checkbox } from "antd";
import { Formik, Form, FastField, Field, FieldArray } from "formik";
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
import HireStepper from "./HireStepper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    addCandidate,
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
class JobHireForm extends Component {
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
            addCandidate,
            addingCandidate,
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
        // console.log("sec",sectorOption)
        return (
            <>
                <Formik
                    initialValues={{
                        roleTypeId: "",
                        active: true,
                        worktype: this.state.billing ? "Yes" : "No",
                        whatsapp: this.state.whatsapp ? "Yes" : "No",
                        category: this.state.checked
                            ? "Both"
                            : this.state.whiteblue
                                ? "White"
                                : "Blue",


                    }}
                    //validationSchema={CandidateSchema}
                    onSubmit={(values, { resetForm }) => {
                        // console.log(values,this.props.responseData&&this.props.responseData.phoneNumbers.length  ?  this.props.responseData.phoneNumbers[0] : "",);

                        addCandidate(
                            {
                                ...values,
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
                        <Form>
                            <Spacer />
                            <MainWrapper style={{ width: "100%", margin: "auto", padding: "1em" }}>

                                <FlexContainer justifyContent="space-between">
                                    <div style={{ width: "32%" }}>
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
                                        /></div>
                                    <div style={{ width: "32%" }}>
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
                                        /></div>
                                    <div style={{ width: "32%" }}>
                                        <FastField
                                            name="NumberOfCandidate"
                                            label="Number of candidate"
                                            isColumn
                                            width={"100%"}
                                            component={InputComponent}
                                            inlineLabel
                                        />
                                    </div>
                                    <Spacer style={{ margin: "1%" }} />
                                    <FlexContainer justifyContent="flex-end">
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            // icon={<PoweroffOutlined />}
                                            Loading={this.props.addingEmail}
                                        >
                                            Add
                                        </Button>
                                    </FlexContainer>
                                </FlexContainer>
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
    sectors: job.sectors,
    librarys: job.librarys,
    idProofs: job.idProofs,
    departments: job.departments,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            addCandidate,
            getLibrarys,
            getSectors,
            getIdProofs,
            getDepartments
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(JobHireForm);









