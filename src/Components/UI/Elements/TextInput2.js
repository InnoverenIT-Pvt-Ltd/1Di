import styled from "styled-components";

const TextInput2 = styled.input.attrs({
    type: "text",
    size: props => (props.small ? 4 : undefined)
})`
height: 1.5rem;
border:0.0625em solid #d9d9d9;
background-color: ${props => props.theme.backgroundColor};
color: ${props => props.theme.color};
//box-shadow:${props => (props.isShadow ? "" : "0 0.25em 0.62em #aaa")} ; 
display: block;
margin: 0 0 0.42rem 0;
font-size:0.75rem;
font-family: poppins;
outline: none;
width:${props => (props ? props.width : "100%")};
//height:${props => (false ? props.height : "1.58rem")};
Left:${props => props.Left || "auto"}
padding: 0 0 0 0.7em;
border-right: ${props => (props.isRequired ? "0.1875em solid #ed260b" : "")};
&:hover{
 box-shadow: 0 0.25em 0.62em #aaa;
 border: 0.0625em solid #1890ff;
 }
::placeholder {
 color: #bfbebb;
 font-family: poppins;
}
@media only screen and (max-width:480px) {
  height: 2rem;
  width: -webkit-fill-available;
  
         
       }
   `;
export default TextInput2;
