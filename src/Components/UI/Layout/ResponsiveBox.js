import styled from 'styled-components';

const ResponsiveBox = styled.div`
    display: block;
    box-sizing: border-box;
    height: ${props => props.height || 'auto'}
    width: calc(33.333333%);
    &:hover{
      // box-shadow: 0px 4px 10px -0.125em ${props => props.theme.boxShadowColor};
      box-shadow: 0px 5px 10px -0.125em #444;
    }
    @media all and  (min-width: 900px) and (max-width: 1200px ) {
    width: calc(50%);
  } 
     @media all and (max-width: 899px) and (min-width: 700px ) {
      width: calc(100%);
  }
      @media all and (max-width: 699px) and (min-width: 500px ) {
      width: calc(100%);
     /* flex: 0 1 calc(33.333333%); */ */
  } 
     @media all and (max-width: 499px) {
      width: calc(100%);
  }
`
export default ResponsiveBox;