import styled from "styled-components";

const MainWrapper = styled.div`
/* border:0.0625em solid red ; */
background: #FFFFFF;
box-shadow: 4px 4px 0px rgba(163, 171, 185, 0.5);
border-radius: 10px;
 /* margin: 1em; */
 margin:${(props) => (props.margin ? props.margin : "1em 1em 1em 1em")};
 padding:${(props) => (props.padding ? props.padding : "1em")};
 width:${(props) => (props.width ? props.width : "100%")}
    /* border-radius: 0.1rem;
    box-shadow: 0px 4px 10px -0.125em ${(props) => props.theme.boxShadowColor};
    border: 0.0625em solid ${(props) => props.theme.borderColor}
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    margin: 0.2rem;
    padding: 0.3rem;
    width: 100%;
    
    overflow: auto; */
    @media only screen and (max-width: 600px) {
       width:95%
   }
`;
export default MainWrapper;
