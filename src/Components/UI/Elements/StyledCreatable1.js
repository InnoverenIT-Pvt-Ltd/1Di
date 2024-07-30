import { Creatable } from "react-select";
import styled from "styled-components";
const StyledCreatable1 = styled(Creatable)`
    flex: 1 1;
    //width: ${(props) => props.width || "19.2rem"};
    height:1.8125em;
    min-height:1.8125em;
.sales__control{
    /* width: 25em; */
   height: 2.8rem;
    min-height:1.8125em;  
    width:5.2rem; 
    //width: ${(props) => props.width || "auto"};
    // border-radius: 0.1875em;
    border: 0.0625em solid ${(props) => props.theme.inputBorderColor};
    background-color: ${(props) => props.theme.backgroundColor};
    menuPlacement:${(props) => (props.menuPlacement ? "top" : "")}
    color: ${(props) => props.theme.color};
    border-radius: 0.6rem;
    border: 0.0625em solid gainsboro;
    @media only screen and (max-width:640px) {
        height: 2rem;
    width: 5rem;
    margin-top: 1.25rem;
     }
    outline: none;
    box-shadow:${(props) => (props.isShadow ? "" : "0em 0.25em 0.625em -0.25em #aaa")} ; 
    //  box-shadow: 0em 0.25em 0.625em -0.25em  ${(props) =>
        props.theme.boxShadowColor}; 
    // border-right: ${(props) => (props.isRequired ? "0.1875em solid #ed260b" : "")};
    Left:${(props) => props.Left || "auto"}
    margin-top:${(props) => props.margintop || "auto"}
   &:hover{
    box-shadow: 0em 0.25em 0.625em -0.125em  ${(props) => props.theme.boxShadowColor};
    border: 0.0625em solid #1890ff;
    }
    ::placeholder {
        color: #737373;
        font-family:Calibri (Body);
    }
    }
    .sales__placeholder{
        color: hsl(0,0%,50%);
        margin-left: 2px;
        margin-right: 2px;
        position: absolute;
        top: 42%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        box-sizing: border-box;
        
        
    }
    .sales__indicator-separator{
        margin-top:0px
    }
    .sales__dropdown-indicator{
        padding: 0px 5px 3px;
        align-self: auto;
        
    }
    .sales__single-value{
        top: 33%;
    }
.sales__menu{
    width: ${(props) => props.width || "100%"};
    height: 38;
    background-color: ${(props) => props.theme.applicationBackground};
    color: ${(props) => props.theme.color};
 // border-radius: 0.3rem;
    
    outline: none;
    // border:0.0625em solid red
    /* box-shadow: 0em 0.25em 0.625em -0.25em  ${(props) =>
        props.theme.boxShadowColor}; */
    }
.sales__menu-list{
    /* background-color: ${(props) => props.theme.applicationBackground}; */
    color: ${(props) => props.theme.color};
    /* border-radius: 0.3rem;
    height: 38;
    outline: none;
    menuPlacement=auto;
    box-shadow: 0em 0.25em 0.625em -0.25em  ${(props) => props.theme.boxShadowColor}; */
    /* &:hover{
        color: #666;
    } */
    }
.sales__option{
    /* background-color: ${(props) => props.theme.backgroundColor}; */
    color: ${(props) => props.theme.color};
    /* border-radius: 0.3rem;
    height: 38;
    menuPlacement=auto;
    outline: none;
    box-shadow: 0em 0.25em 0.625em -0.25em  ${(props) => props.theme.boxShadowColor}; */
    &:hover{
        color: #222;
    }

   
`;
export default StyledCreatable1;
