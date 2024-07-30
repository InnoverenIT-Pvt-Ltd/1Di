import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: #1890ff;
  cursor: pointer;
  // font-size: 0.9rem;
  &:hover {
    color: #0d5ca5;
    text-decoration: underline;
  }
`;
const StyledAnchorLink = styled.a`
  color: #1890ff;
  cursor: pointer;
  font-size: 0.9rem;
  &:hover {
    color: #1890ff;
    text-decoration: underline;
  }
`;
function Link_({ toUrl, title, isAnchorLink, target }) {
    console.log(toUrl, title, isAnchorLink, target);
    return (
        <>
            {isAnchorLink ? (
                <StyledAnchorLink href={"toUrl" || "#"} target={target}>
                    {title || ""}
                </StyledAnchorLink>
            ) : (
                <StyledLink to={toUrl || "/"}>{title || ""}</StyledLink>
            )}
        </>
    );
}
Link_.propTypes = {
    toUrl: PropTypes.string,
    title: PropTypes.string,
    isAnchorLink: PropTypes.bool,
    target: PropTypes.string,
};
export default Link_;
