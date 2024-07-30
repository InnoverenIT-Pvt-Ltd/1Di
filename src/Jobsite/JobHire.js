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
class JobHireForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
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
        // this.props.getLibrarys();
        // this.props.getSectors();
        // this.props.getIdProofs();
        // this.props.getDepartments();
    }

    render() {
        const {
            // user: { userId, firstName, lastName,department },
            addCandidate,
        } = this.props;
        // console.log("sec",sectorOption)
        return (
            <>
                <Formik
                    initialValues={{}}
                    //validationSchema={CandidateSchema}
                    onSubmit={(values, { resetForm }) => {
                        // console.log(values,this.props.responseData&&this.props.responseData.phoneNumbers.length  ?  this.props.responseData.phoneNumbers[0] : "",);
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
                        <Form style={{ marginTop: "7%" }}>

                            <Spacer />
                            <Spacer style={{ marginTop: "2em" }} />

                            <MainWrapper
                                style={{ width: "50%", margin: "auto", padding: "1em" }}
                            ><Suspense fallback={<BundleLoader />}>
                                    <HireStepper
                                    //projectOrderId={this.props.projectOrderId} 
                                    />
                                </Suspense>
                                <Spacer />
                            </MainWrapper>
                            <Spacer style={{ margin: "1%" }} />
                        </Form>
                    )}
                </Formik>
            </>
        );
    }
}

const mapStateToProps = ({ auth, job }) => ({
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {},
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(JobHireForm);









