import styled from 'styled-components';

const PostJobForm = styled.div`
    //border-radius: 0.3rem;
    //box-shadow: 0em 0.25em 0.625em -0.125em ${props => props.theme.boxShadowColor};
    //border: 0.0625em solid ${props => props.theme.borderColor}
     background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    padding: 0.3rem;
    width: -moz-available;          /* WebKit-based browsers will ignore this. */
    width: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
    width: fill-available;
    overflow: auto; 

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: 0.5rem;
  }

`
export default PostJobForm;