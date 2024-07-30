import styled from "styled-components";

const TabsWrapper = styled.div`
width: '100%'
border-radius: 0.3rem;
box-shadow: 0px 4px 10px -2px ${props => props.theme.boxShadowColor};
border: 1px solid ${props => props.theme.borderColor}
background-color: #fff;
color: ${props => props.theme.color};
margin: 0.3rem;
padding: 0.3rem;
height:"300px";
/* overflow: auto; */
`;
export default TabsWrapper;
