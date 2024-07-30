import styled from "styled-components";

const StyledTextarea = styled.textarea.attrs({
  type: 'text',
  size: props => (props.small ? 4 : undefined),
})`
    width: 100%;
    min-height: 7.5em;
   // border-radius: 0.6rem;
    border: 0.0625em solid gainsboro;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    display: block;
    // margin: 0.3rem 0;
   // border-radius: 0.6rem;
    outline: none;
    box-shadow: 0em 0.25em 0.625em -0.25em  ${props => props.theme.boxShadowColor};
    padding: 0.3rem 1rem;
   &:hover{
    box-shadow: 0em 0.25em 0.625em -0.125em  ${props => props.theme.boxShadowColor};
    border: 0.0625em solid #1890ff;
    }
    ::placeholder {
      color: #737373;
      font-family:Calibri (Body);
      padding:0.5rem 0 1rem 0;
    }
   `
export default StyledTextarea;