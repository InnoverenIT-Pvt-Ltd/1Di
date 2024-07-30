import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledActionHeader = styled.div`
    background:${props => props.theme.backgroundColor}; 
    color: ${props => props.theme.color};
    padding: 0.6rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    box-shadow: 0 0.0625em 0.25em 0.0625em${props => props.theme.boxShadowColor};
`
const ActionHeader = (props) => {
    return (
        <StyledActionHeader>
            <div>{props.leftComponent}</div>
            <div>{props.rightComponent}</div>
        </StyledActionHeader>
    )
}
ActionHeader.propTypes = {
    leftComponent: PropTypes.element,
    rightComponent: PropTypes.element
}
export default ActionHeader;