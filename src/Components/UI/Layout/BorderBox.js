import styled from "styled-components";

const BorderBox = styled.div`
    border: 0.0625em solid ${(props) => props.theme.borderColor};
    border-radius: ${(props) => props.borderRadius || "0.3rem"};
    background: ${(props) => props.theme.borderBoxBgColor || "#eee"}
    box-shadow: 0px 4px 10px -4px  ${(props) => props.theme.boxShadowColor};   
    margin-bottom: 5px; 
`;
export default BorderBox;
