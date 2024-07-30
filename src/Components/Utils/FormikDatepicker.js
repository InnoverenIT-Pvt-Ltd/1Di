import React from "react";
import moment from 'moment';
import { DatePicker } from "antd";

export default  ({ value, field, label, isRequired, noLabel, inlineLabel, form: { setFieldValue, setFieldTouched, touched, errors }, ...props }) => {
    return (
        <>
            <DatePicker
                allowClear={false}
                {...field}
                {...props}
                isRequired={isRequired}
                onChange={(date, dateString) => setFieldValue(field.name, moment(dateString))}
                value={value}
                onBlur={() => setFieldTouched(field.name, true)}
            />
        </>
    )
};