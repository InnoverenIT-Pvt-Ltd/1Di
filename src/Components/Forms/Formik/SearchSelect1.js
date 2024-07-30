import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyledCreatable, StyledCreatable1, StyledLabel } from "../../UI/Elements";
import { FlexContainer } from "../../UI/Layout";
import { functions, get, uniqBy } from "lodash";
import ValidationError from "../../UI/Elements/ValidationError";
import {getDesignations,getRoles,getCurrency,getCountries} from "../../../Jobsite/JobAction";
// // import { candidateReducer } from "../../../Containers/Candidate/CandidateReducer";
// // import { getTasks } from "../../../Containers/Settings/Task/TaskAction";
// // import { getExpenses } from "../../../Containers/Settings/Expense/ExpenseAction";
// // import { getEvents } from "../../../Containers/Settings/Event/EventAction";
// // import { getDepartments } from "../../../Containers/Settings/Department/DepartmentAction";
// // import { getEducations } from "../../../Containers/Settings/Educations/EducationAction";
// // import { getRoles } from "../../../Containers/Settings/Category/Role/RoleAction"
class SearchSelect1 extends Component {
  componentDidMount() {
    // const id = "PRIN8195435358122020" = this.props;
    const {
      getCurrency,
      getRoles,
      getDesignations,
      selectType,
      getCountries
    } = this.props;


if (selectType === "country" || "dialCode") {
  getCountries();
}
if (selectType === "currencyName") {
  getCurrency();
}
    if (selectType === "roleType") {
      getRoles();
    }

    if (selectType === "designationType") {
      getDesignations();
    }

  }
  handleChange = (
    option,
    field,
    setFieldValue,
    fillAnother,
    setFieldTouched
  ) => {
    this.props.changeCallback && this.props.changeCallback(option);
    if (this.props.selectType === "product") {
      console.log(fillAnother, option);
      console.log(setFieldValue);
      this.props.changeCallback(option);
      console.log(fillAnother[0], option.category);
      // setTimeout(() => {
      //     setFieldValue(fillAnother[0], option.category)
      //     setFieldValue(fillAnother[1], option.baseCost)
      //     setFieldValue(fillAnother[2], option.currency)
      //     setFieldValue(fillAnother[3], option.subCategory)
      // }, 1)
      // setFieldTouched(fillAnother[0], true)
    }
    if (this.props.isMulti) {
      const arr = [];
      option.map((item) => {
        arr.push(item.value);
      });
      setFieldValue(field.name, arr);
    } else {
      setFieldValue(field.name, option.value);
      if (Array.isArray(fillAnother)) {
        setFieldValue(fillAnother[0], option.latitude);
        setFieldValue(fillAnother[1], option.longitude);
      } else {
        setFieldValue(fillAnother, option.countryCurrencyCode);
      }
    }
  };

  handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.topcis
    this.props.onBlur(this.props.name, true);
  };
  handleCreate = (option) => {
  };

  setDefaultValue = (options) => {
    const { defaultValue } = this.props;
    if (defaultValue) {
      if (Array.isArray(defaultValue)) {
        console.log("array default value", defaultValue);
        return defaultValue;
      } else {
        console.log(defaultValue);
        if (!defaultValue.hasOwnProperty("label")) {
          const newDefaultValue =
            options && options.find((l) => l.value === defaultValue.value);
          return newDefaultValue;
        } else {
          console.log("default value", defaultValue);
          return [defaultValue];
        }
      }
    } else {
      return [];
    }
  };
  render() {
//     // console.log(this.props)
    const {
//       sectors,
    job,
      designations,
      roles,
isColumnWithoutNoCreate,
      timeZone,
      level,
      deliveryUsers,
      delivery,
      stages,
      isColumn,
      process,
      countries,
      currencies,
      products,
      selectType,
      defaultValue,
      placeholder,
      width,
      isShadow,
      Left,
      margintop,
      label,
      menuPlacement,
      isRequired,
      isDisabled,
      fillAnother,
      accountId,
      leadsAccounts,
      filterOption,
      notLinked,
      noLabel,
      inlineLabel,
      allProcessStages,
      tasks,
      expenses,
      events,
      form: { touched, errors, setFieldValue, setFieldTouched },
      field,
      ...rest
    } = this.props;

    let options = null;

//     // if (selectType === "department") {
//     //   options = department
//     //     .sort((a, b) => (a.department_name < b.department_name ? -1 : 1))
//     //     .map((item, i) => ({
//     //       value: item.department_name,
//     //       label: item.department_name,
//     //       color: "#FF8B00",
//     //     }));

    if (selectType === "country") {
      debugger;
      options = countries.map((item, i) => ({
        value: item.countryAlpha3Code,
        label: item.countryName,
        flag: item.countryFlag,
        countryDialCode: item.countryDialCode,
        countryCurrencyCode: item.countryCurrencyCode,
        latitude: Number(item.latitude),
        longitude: Number(item.longitude),
        color: "#FF8B00",
      }));
    }
    
    if (selectType === "currencyName") {
      debugger;
      options = currencies

        .map((item, i) => ({
          value: item.currencyName,
          label: item.currencyName,
          color: "#FF8B00",
        }));
    }


    if (selectType === "dialCode") {
      options = countries.map((item, i) => ({
        label: `+${item.country_dial_code}`,
        value: `+${item.country_dial_code}`,
      }));
      options = uniqBy(options, "value");
    }
//     // if (selectType === "timeZone") {
//     //   options = timeZone.map((item, i) => ({
//     //     label: `${item.zone_name}`,
//     //     value: `${item.zone_name}`,
//     //   }));
//     //   // options.filter((item, i) => options.indexOf())
//     //   options = uniqBy(options, "value");
//     //   // const customOption = ({ label, value }) => <h3>{`${label}-----${value}`}</h3>
//     // }

//     // if (selectType === "sectorName") {
//     //   debugger;
//     //   options = sectors
//     //     // .sort((a, b) => (a.sourceName < b.sourceName ? -1 : 1))
//     //     .map((item, i) => ({
//     //       value: item.sectorId,
//     //       label: item.sectorName,
//     //       color: "#FF8B00",
//     //     }));

//     //   // const customOption = ({ label, value }) => <h3>{`${label}----${value}`}</h3>
//     // }
    if (selectType === "designationType") {
      debugger;
      options = designations
        // .sort((a, b) => (a.sourceName < b.sourceName ? -1 : 1))
        .map((item, i) => ({
          value: item.designationTypeId,
          label: item.designationType,
          color: "#FF8B00",
        }));
    }
    if (selectType === "roleType") {
      debugger;
      options = roles
        // .sort((a, b) => (a.sourceName < b.sourceName ? -1 : 1))
        .map((item, i) => ({
          value: item.roleTypeId,
          label: item.roleType,
          color: "#FF8B00",
        }));
    }

//     // if (selectType === "educationType") {
//     //   debugger;
//     //   options = educations
//     //     // .sort((a, b) => (a.sourceName < b.sourceName ? -1 : 1))
//     //     .map((item, i) => ({
//     //       value: item.educationTypeId,
//     //       label: item.educationType,
//     //       color: "#FF8B00",
//     //     }));

//     //   // const customOption = ({ label, value }) => <h3>{`${label}----${value}`}</h3>
//     // }

//     // if (selectType === "taskType") {
//     //   debugger;
//     //   options = tasks
//     //     // .sort((a, b) => (a.sourceName < b.sourceName ? -1 : 1))
//     //     .map((item, i) => ({
//     //       value: item.taskTypeId,
//     //       label: item.taskType,
//     //       color: "#FF8B00",
//     //     }));
//     // }

//     // if (selectType === "expenseType") {
//     //   debugger;
//     //   options = tasks
//     //     // .sort((a, b) => (a.sourceName < b.sourceName ? -1 : 1))
//     //     .map((item, i) => ({
//     //       value: item.expenseTypeId,
//     //       label: item.expenseType,
//     //       color: "#FF8B00",
//     //     }));
//     // }
//     // if (selectType === "functionType") {
//     //   debugger;
//     //   options = functions
//     //     // .sort((a, b) => (a.sourceName < b.sourceName ? -1 : 1))
//     //     .map((item, i) => ({
//     //       value: item.functionTypeId,
//     //       label: item.functionType,
//     //       color: "#FF8B00",
//     //     }));
//     // }

//     // if (selectType === "eventType") {
//     //   debugger;
//     //   options = events
//     //     // .sort((a, b) => (a.sourceName < b.sourceName ? -1 : 1))
//     //     .map((item, i) => ({
//     //       value: item.eventTypeId,
//     //       label: item.eventType,
//     //       color: "#FF8B00",
//     //     }));
//     // }

//     // if (selectType === "departmentName") {
//     //   debugger;
//     //   options = departments
//     //     // .sort((a, b) => (a.sourceName < b.sourceName ? -1 : 1))
//     //     .map((item, i) => ({
//     //       value: item.departmentId,
//     //       label: item.departmentName,
//     //       color: "#FF8B00",
//     //     }));

//     //   // const customOption = ({ label, value }) => <h3>{`${label}----${value}`}</h3>
//     // }
    if (isColumnWithoutNoCreate) {
      // The searchselect without create component will work on calling ( isColumnWithoutNoCreate)
      return (
        <>
          {!noLabel && (
            <StyledLabel style={{ flexBasis: "20%" }}>{label}</StyledLabel>
          )}
          <StyledCreatable1
            classNamePrefix="sales"
            label={placeholder}
            formatCreateLabel={() => undefined}
            isRequired={isRequired}
            placeholder={placeholder}
            options={options}
            menuPlacement={menuPlacement}
            width={width}
            isShadow={isShadow}
            Left={Left}
            margintop={margintop}
            name={field.name}
            isMulti={this.props.isMulti || false}
            {...field}
            {...rest}
            onChange={(option) =>
              this.handleChange(
                option,
                field,
                setFieldValue,
                fillAnother,
                setFieldTouched
              )
            }
            isCreatable={false}
            onCreateOption={this.handleCreate}
            defaultValue={this.setDefaultValue(options)}
            isDisabled={isDisabled}
            // isLoading={
            //   fetchingAllUserByOraganizationId ||
            //   fetchingOnlySalesUsers ||
            //   fetchingContacts ||
            //   fetchingAccounts ||
            //   fetchingOpportunities ||
            //   fetchingStages ||
            //   fetchingSources ||
            //   fetchingCountries 
            //   // ||
            //   // fetchingCurrencies
            // }
            // defaultValue={defaultValue ? [{
            //     value: defaultValue.value,
            //     label: options.find(option => {
            //         console.log('000000000000000000000000000000000')
            //         console.log(option)
            //         console.log(defaultValue)
            //         if (option.value === defaultValue.value) {
            //             console.log(option.label)
            //             return option.label
            //         }else{
            //             return 'asdads'
            //         }

            //     })
            // }] : ''}
            // defaultValue={defaultValue ? Array.isArray(defaultValue) && defaultValue.find(option => option.value === field.value) : ''}
            value={
              options
                ? options.find((option) => option.value === field.value)
                : ""
            }
            onBlur={() => setFieldTouched(field.name, true)}
          />

          {/* <AddUserModal addUserModal={this.props.addUserModal} handleUserModal={this.props.handleUserModal}/> */}

          {get(touched, field.name) && get(errors, field.name) && (
            <ValidationError>{get(errors, field.name)}</ValidationError>
          )}
        </>
      );
    }

    return (
      <>
        <FlexContainer>
          <FlexContainer alignItems="center" flexWrap={inlineLabel && "nowrap"}>
            {!noLabel && (
              <StyledLabel style={{ flexBasis: "20%" }}>{label}</StyledLabel>
            )}
            <StyledCreatable1
              classNamePrefix="sales"
              label={placeholder}
              isRequired={isRequired}
              menuPlacement={menuPlacement} // menuPlacement={"top"}
              placeholder={placeholder}
              options={options}
              isShadow={isShadow}
              width={width}
              Left={Left}
              margintop={margintop}
              name={field.name}
              isMulti={this.props.isMulti || false}
              {...field}
              {...rest}
              onChange={(option) =>
                this.handleChange(
                  option,
                  field,
                  setFieldValue,
                  fillAnother,
                  setFieldTouched
                )
              }
              isCreatable={false}
              onCreateOption={this.handleCreate}
              defaultValue={this.setDefaultValue(options)}
              isDisabled={isDisabled}
              // isLoading={
              //   fetchingAllUserByOraganizationId ||
              //   fetchingContacts ||
              //   fetchingOnlySalesUsers ||
              //   fetchingAccounts ||
              //   fetchingOpportunities ||
              //   fetchingStages ||
              //   fetchingSources ||
              //   fetchingCountries
              //   // fetchingCurrencies
              // }
              // defaultValue={defaultValue ? [{
              //     value: defaultValue.value,
              //     label: options.find(option => {
              //         console.log('000000000000000000000000000000000')
              //         console.log(option)
              //         console.log(defaultValue)
              //         if (option.value === defaultValue.value) {
              //             console.log(option.label)
              //             return option.label
              //         }else{
              //             return 'asdads'
              //         }

              //     })
              // }] : ''}
              // defaultValue={defaultValue ? Array.isArray(defaultValue) && defaultValue.find(option => option.value === field.value) : ''}
              value={
                options
                  ? options.find((option) => option.value === field.value)
                  : ""
              }
              onBlur={() => setFieldTouched(field.name, true)}
            />
          </FlexContainer>
        </FlexContainer>
   {/* <AddUserModal addUserModal={this.props.addUserModal} handleUserModal={this.props.handleUserModal}/> */}

      {get(touched, field.name) && get(errors, field.name) && (
          <ValidationError>{get(errors, field.name)}</ValidationError>
        )}
      </>
    );
  }
}


const mapStateToProps = ({ designations,job  }) => ({
  countries: job.countries,
  currencies: job.currencies,
  designations: job.designations,
  roles: job.roles,
 
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      
      getRoles,
      getDesignations,
      getCurrency,
      getCountries
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(SearchSelect1);
