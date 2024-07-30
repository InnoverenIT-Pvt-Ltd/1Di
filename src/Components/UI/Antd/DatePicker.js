import DatePicker from "antd/lib/date-picker";
import styled from "styled-components";

const StyledDatePicker = styled(DatePicker)`
  .ant-input {
    //width:100%;
    // border-radius: 0.6rem;
     border: 0.0625em solid ${props => props.theme.inputBorderColor};
     border: 0.0625em solid gainsboro;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    display: block;
    // margin: 0.2rem 0;
   // border-radius: 0.6rem;
    outline: none;
    height: 2.8rem;
    border-right: ${props => (props.isRequired ? "0.1875em solid #ed260b" : "")};
   // padding: 0.3rem 1rem;
   &:hover{
    box-shadow: 0em 0.25em 0.625em -0.25em ${props => props.theme.boxShadowColor};
    //border: 0.0625em solid #1890ff;
    // box-shadow: 0em 0.25em 0.625em -0.125em  ${props => props.theme.boxShadowColor};
    }
  ::placeholder {
       color: #737373;
      font-family:Calibri (Body);
      font-size: 17px;
      padding-left:1rem;
  }
    width: ${props => (props ? props.width : "100%")};
  }
  @media only screen and (max-width:600px) {
    height: 2rem;
 }
`;
export default StyledDatePicker;
