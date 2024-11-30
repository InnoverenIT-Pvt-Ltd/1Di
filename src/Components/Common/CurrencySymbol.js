import React, { Component } from "react";
import PropTypes from "prop-types";

class CurrencySymbol extends Component {
  render() {
    const { currencyType } = this.props;
    return (
      <>
        {currencyType === "USD" && (
          <span style={{ fontSize: "12px" }}>US&#36;</span>
        )}
        {currencyType === "EUR" && (
          <span style={{ fontSize: "12px" }}>&euro;</span>
        )}
        {currencyType === "GBP" && (
          <span style={{ fontSize: "12px" }}>&#163;</span>
        )}
        {currencyType === "INR" && (
          <span style={{ fontSize: "12px" }}>&#x20b9; </span>
        )}
        {currencyType === "AUD" && (
          <span style={{ fontSize: "12px" }}>AU&#36; </span>
        )}
        {currencyType === "CAD" && (
          <span style={{ fontSize: "12px"}}>CA&#36; </span>
        )}
        {currencyType === "SGD" && (
          <span style={{ fontSize: "12px" }}>SG&#36; </span>
        )}
      </>
    );
  }
}
CurrencySymbol.propTypes = {
  currencyType: PropTypes.string.isRequired,
};
export default CurrencySymbol;
