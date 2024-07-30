import styled from 'styled-components';

const MainWrapper2 = styled.div`
    border-radius: 0.5rem;
    box-shadow: 4px 0px 9px 3px rgba(163, 171, 185, 0.5);
    border: none;
    background: #FFFFFF;
    color: ${props => props.theme.color};
    margin: 1rem;
    padding: 1.2rem;
    width: 46vw;
    min-height:39vh;
    float: right;
    // width: -moz-available;          /* WebKit-based browsers will ignore this. */
    // width: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
    // width: fill-available;
    overflow: auto;
`
export default MainWrapper2;