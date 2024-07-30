import React, { Component } from "react";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from "react-places-autocomplete";
import _ from "lodash";
import styled from "styled-components";
import { ValidationError, StyledLabel } from "../../UI/Elements";
import { FlexContainer } from "../../UI/Layout";

const StyledInput = styled.input.attrs({
    type: "text",
    size: (props) => (props.small ? 4 : undefined),
})`
width:100%;
  border-radius: 2px;
  border: 0.06em solid ${(props) => props.theme.inputBorderColor};
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  display: block;
  margin: 0 0 0.2rem 0;
  font-family: poppins;
  border-radius: 2rem;
  border-color: #1890ff;
  margin-top: 0.25em;
  outline: none;
  height: 2rem;
  position: relative !important;
  box-shadow: 0px 0.25em 0.62em -0.25em ${(props) => props.theme.boxShadowColor};
  padding: 0.3rem 1rem;
  &:hover {
    box-shadow: 0px 0.25em 0.62em -0.125em ${(props) => props.theme.boxShadowColor};
    border-color: #1890ff;
  }
  ::placeholder {
    color: #888;
    font-family: poppins;
  }
  .form-control {
    position: relative;
  }
  @media only screen and (max-width: 600px) {
    height: 2rem; 
}
`;
/**
 *   z-index: 666;
 position: absolute;
 top: 0;
 right: 0; 
 */
const StyledDropDownContainer = styled.div`
  border-radius: 2px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  box-shadow: 0px 0.25em 0.62em -0.25em ${(props) => props.theme.boxShadowColor};
  position: absolute;
  top: 2.5em;
  width: 14.37em;
  z-index: 1000;
  background-color: white;
  .suggestion-item {
    // background-color: ${(props) => props.theme.backgroundColor};
    padding: 0.3rem;
  }
  .suggestion-item--active {
    background-color: ${(props) => props.theme.boxShadowColor};
    padding: 0.3rem;
  }
`;
const AutoCompleteWrapper = styled.div`
  position: relative;
  width:100%;
`;
const StyledSuggestion = styled.span`
  color: ${(props) => props.theme.color};
`;

class FiledSearchLarge extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            addressDetailsDTO: props.value || "",
        };
    }
    handleChange = (addressDetailsDTO) => {
        console.log(addressDetailsDTO);
        this.setState(() => {
            // this.props.form.setFieldTouched(`${this.state.name}.value`);
            this.props.form.setFieldTouched(`${this.props.field.name}.country`);
            // this.props.form.setFieldValue(this.state.name, { value: address });
            return { addressDetailsDTO };
        });
    };

    handleSelect = (addressDetailsDTO) => {
        //debugger;
        console.log(addressDetailsDTO);
        this.setState({ addressDetailsDTO });
        // this.props.form.resetForm({ country: '',})
        this.props.form.setFieldValue(`${this.props.field.name}.latitude`, "");
        this.props.form.setFieldValue(`${this.props.field.name}.longitude`, "");
        this.props.form.setFieldValue(`${this.props.field.name}.address1`, "");
        // this.props.form.setFieldValue(`${this.props.field.name}.address2`, "");
        this.props.form.setFieldValue(`${this.props.field.name}.street`, "");
        this.props.form.setFieldValue(`${this.props.field.name}.city`, "");
        this.props.form.setFieldValue(`${this.props.field.name}.country`, "");
        this.props.form.setFieldValue(`${this.props.field.name}.state`, "");
        this.props.form.setFieldValue(`${this.props.field.name}.postalCode`, "");
        geocodeByAddress(addressDetailsDTO).then((results) => {
            getLatLng(results[0])
                .then((latLng) => {
                    console.log(latLng);
                    this.props.form.setFieldValue(
                        `${this.props.field.name}.latitude`,
                        latLng.lat
                    );
                    this.props.form.setFieldValue(
                        `${this.props.field.name}.longitude`,
                        latLng.lng
                    );
                })
                .catch((error) => console.log(error));
            console.log(results[0]);
            var addressDetailsDTO = _.get(results[0], "address_components");
            var locality1, locality2, street, city, state, zip, country;
            _.forEach(addressDetailsDTO, (component) => {
                console.log(component);
                let types = _.get(component, "types");
                if (_.includes(types, "street_number")) {
                    locality1 = _.get(component, "long_name");
                    this.props.form.setFieldValue(
                        `${this.props.field.name}.address1`,
                        locality1
                    );
                }
                // if (_.includes(types, 'sublocality_level_1')) {
                //   locality2 = _.get(component, 'long_name');
                //   this.props.form.setFieldValue(`${this.props.field.name}.address2`, locality2);
                // }
                if (_.includes(types, "route")) {
                    street = _.get(component, "long_name");
                    this.props.form.setFieldValue(
                        `${this.props.field.name}.street`,
                        street
                    );
                }
                if (_.includes(types, "locality")) {
                    city = _.get(component, "long_name");
                    this.props.form.setFieldValue(`${this.props.field.name}.city`, city);
                }
                if (_.includes(types, "country")) {
                    country = _.get(component, "long_name");
                    this.props.form.setFieldValue(
                        `${this.props.field.name}.country`,
                        country
                    );
                }

                if (_.includes(types, "administrative_area_level_1")) {
                    state = _.get(component, "long_name");
                    this.props.form.setFieldValue(
                        `${this.props.field.name}.state`,
                        state
                    );
                }
                if (_.includes(types, "postal_code")) {
                    zip = _.get(component, "long_name");
                    this.props.form.setFieldValue(
                        `${this.props.field.name}.postalCode`,
                        zip
                    );
                }
            });
        });
    };

    render() {
        const {
            field: { name, ...field }, // { name, value, onChange, onBlur }
            form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
            classes,
            options,
            label,
            isColumn,
            ...props
        } = this.props;

        const error = errors[name];
        const touch = touched[name];
        if (isColumn) {
            return (
                <>
                    {/* <StyledLabel style={{ marginTop: "0.75em" }}>{label}</StyledLabel> */}
                    <PlacesAutocomplete
                        name={name}
                        id={name}
                        {...props}
                        searchOptions={options || {}}
                        value={this.state.addressDetailsDTO}
                        onChange={this.handleChange}
                        onSelect={this.handleSelect}
                        onError={this.handleError}
                    >
                        {({
                            getInputProps,
                            suggestions,
                            getSuggestionItemProps,
                            loading,
                        }) => (
                            <AutoCompleteWrapper>
                                <StyledInput
                                    {...getInputProps({
                                        placeholder: "Search for street, city...",
                                        className: "location-search-input form-control",
                                    })}
                                />
                                <StyledDropDownContainer className="autocomplete-dropdown-container">
                                    {loading && <div>Loading...</div>}
                                    {suggestions.map((suggestion) => {
                                        const className = suggestion.active
                                            ? "suggestion-item--active"
                                            : "suggestion-item";
                                        // inline style for demonstration purpose
                                        const style = suggestion.active
                                            ? { cursor: "pointer" }
                                            : { cursor: "pointer" };
                                        return (

                                            <div
                                                {...getSuggestionItemProps(suggestion, {
                                                    className,
                                                    style,
                                                })}
                                            >
                                                <StyledSuggestion>
                                                    {suggestion.description}
                                                </StyledSuggestion>
                                            </div>
                                        );
                                    })}
                                </StyledDropDownContainer>
                            </AutoCompleteWrapper>
                        )}
                    </PlacesAutocomplete>
                </>
            );
        }
        return (
            <FlexContainer>
                {/* <FlexContainer alignItems="center">
          <StyledLabel style={{ flexBasis: "20%" }}>{label}</StyledLabel> */}
                <PlacesAutocomplete
                    name={name}
                    id={name}
                    {...props}
                    searchOptions={options || {}}
                    value={this.state.addressDetailsDTO}
                    onChange={this.handleChange}
                    onSelect={this.handleSelect}
                    onError={this.handleError}
                >
                    {({
                        getInputProps,
                        suggestions,
                        getSuggestionItemProps,
                        loading,
                    }) => (
                        <AutoCompleteWrapper>
                            <StyledInput
                                {...getInputProps({
                                    placeholder: "Search location ...",
                                    className: "location-search-input form-control",
                                })}
                            />
                            <StyledDropDownContainer className="autocomplete-dropdown-container">
                                {loading && <div>Loading...</div>}
                                {suggestions.map((suggestion) => {
                                    const className = suggestion.active
                                        ? "suggestion-item--active"
                                        : "suggestion-item";
                                    // inline style for demonstration purpose
                                    const style = suggestion.active
                                        ? { cursor: "pointer" }
                                        : { cursor: "pointer" };
                                    return (
                                        <div
                                            {...getSuggestionItemProps(suggestion, {
                                                className,
                                                style,
                                            })}
                                        >
                                            <StyledSuggestion>
                                                {suggestion.description}
                                            </StyledSuggestion>
                                        </div>
                                    );
                                })}
                            </StyledDropDownContainer>
                        </AutoCompleteWrapper>
                    )}
                </PlacesAutocomplete>
                {/* </FlexContainer> */}
                {/* {_.get(touched, field.name) &&
          _.get(errors, field.name) && <ValidationError>{_.get(errors, field.name)}</ValidationError>} */}
            </FlexContainer>
        );
    }
}

export default FiledSearchLarge;
