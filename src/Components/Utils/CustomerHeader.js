import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledCustomerHeader = styled.div`
font-weight:${props => props ? props.fontWeight : null};
background:white;
height: 3rem;
margin: 0 1%;    
padding: 0.3rem 1rem;
display: flex;
line-height: 34px;
justify-content: space-between;
align-items: center;
align-content: center;
@media only screen and (max-width: 600px) {
    justify-content: ${props => props.hideIn ? "center" : "space-between"};
    flex-direction:${props => props.flexdirection ? props.flexdirection : "row"}
}

`

const CustomerHeader = (props) => {
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
CustomerHeader.propTypes = {
  leftComponent: PropTypes.element,
  centerComponent: PropTypes.element,
  centerComponent1: PropTypes.element,
  rightComponent: PropTypes.element
}

export default CustomerHeader;




const LeftComponentStyle = styled.div`
display:block;
@media only screen and (max-width: 600px) {
    display:${props => props.hideIn ? "none" : "block"}
}
    `