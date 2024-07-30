import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledCustomerHeader = styled.div`
font-weight:${props => props ? props.fontWeight : null};
background:#157ed2;
height: 8%;
margin: 0 1%;    
margin-bottom: 14px
padding: 0.3rem 1rem;
display: flex;
line-height: 34px;
 /* position:sticky !important; */
 /* top:80px; */
justify-content: space-between;
align-items: center;
align-content: center;
// border-radius: 0.2rem;
// box-shadow: 0 0.0625em 0.25em 0${props => props.theme.boxShadowColor};
@media only screen and (max-width: 600px) {
    justify-content: ${props => props.hideIn ? "center" : "space-between"};
    flex-direction:${props => props.flexdirection ? props.flexdirection : "row"}
}

`

const BottomHeader = (props) => {
  const { fontWeight, flexdirection } = props

  return (
    <StyledCustomerHeader boxShadowColor={props.boxShadowColor} fontWeight={fontWeight}
      flexdirection={flexdirection}
      hideIn={props.hideInMobile}>
      <LeftComponentStyle hideIn={props.hideInMobile}>{props.leftComponent}</LeftComponentStyle>
      <div>{props.centerComponent}</div>
      <div>{props.centerComponent1}</div>
      <div>{props.rightComponent}</div>
    </StyledCustomerHeader>
  )
}
BottomHeader.propTypes = {
  leftComponent: PropTypes.element,
  centerComponent: PropTypes.element,
  centerComponent1: PropTypes.element,
  rightComponent: PropTypes.element
}

export default BottomHeader;




const LeftComponentStyle = styled.div`
display:block;
@media only screen and (max-width: 600px) {
    display:${props => props.hideIn ? "none" : "block"}
}
    `