import React, { Component } from "react";
import { StyledDatePicker } from "../../UI/Antd";
import moment from "moment";

class EditableDatePicker extends Component {
  render() {
    const {
      name,
      value,
      placeholder,
      defaultValue,

      handleChange,
      width,

      isRequired,
      ...rest
    } = this.props;
    console.log(defaultValue);
    console.log(value);
    return (
      <>
        <StyledDatePicker
          allowClear={false}
          isRequired={isRequired}
          width={width}
          // format="YYYY-MM-DD HH:mm:ss"
          defaultValue={moment(defaultValue)}
          onChange={(date, dateString) =>
            handleChange(name, moment(dateString))
          }
          value={moment(value)}

        // {...rest}
        // onBlur={() => setFieldTouched(field.name, true)}
        />
      </>
    );
  }
}

export default EditableDatePicker;
