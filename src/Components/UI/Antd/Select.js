import Select from "antd/lib/select";
import styled from "styled-components";

const StyledSelect = styled(Select)`
  .ant-input {
    // border-radius: 0.1875em;
    border: 0.0625em solid ${props => props.theme.inputBorderColor};
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    display: block;
    margin: 0.2rem 0;
   // border-radius: 0.3rem;
    height: 1.8125em;
    outline: none;
    box-shadow: 0em 0.25em 0.625em -0.25em ${props => props.theme.boxShadowColor};
    padding: 0.3rem 1rem;
  }
  .ant-select-selection {
    box-shadow: 0em 0.25em 0.625em -0.25em ${props => props.theme.boxShadowColor};
   line-height: 0px;
    border-right: ${props =>
    props.isRequired ? "0.1875em solid #ed260b" : ""} !important;
  }
`;
export default StyledSelect;
