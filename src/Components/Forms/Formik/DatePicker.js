import React from "react";
import { get } from "lodash";
import moment from "moment";

import { StyledDatePicker } from "../../UI/Antd";
import { ValidationError, StyledLabel } from "../../UI/Elements";
import { FlexContainer } from "../../UI/Layout";
export const DatePicker = ({
  value,
  defaultValue,
  field,
  label,
  isRequired,
  width,
  height,
  isColumn,
  noLabel,
  inlineLabel,
  form: { setFieldValue, setFieldTouched, touched, errors },
  ...props
}) => {
  const deadline = "2018-12-20T07:37:50.886Z";

  if (isColumn) {
    return (
      <>
        {!noLabel && (
          <StyledLabel style={{ flexBasis: label || "20%" }}>
            {label}
          </StyledLabel>
        )}
        <StyledDatePicker
        className="verify"
          allowClear={false}
          {...field}
          {...props}
          width={width}
          isRequired={isRequired}
          onChange={(date, dateString) =>
            setFieldValue(field.name, moment(dateString))
          }
          defaultValue={defaultValue}
          value={value}
          // style={{
          // width:"100%",
          // height:"2.8rem",
          // borderRadius:"0.6rem",
          // fontFamily:"Calibri (Body)"}}
          
          onBlur={() => setFieldTouched(field.name, false)}
        />

        {get(touched, field.name) && get(errors, field.name) && (
          <ValidationError style={{ marginTop: "0.3125em" }}>
            {get(errors, field.name)}
          </ValidationError>
        )}
      </>
    );
  }
  return (
    <>
      <FlexContainer>
        <FlexContainer alignItems="center" flexWrap={inlineLabel && "nowrap"}>
          {!noLabel && (
            <StyledLabel style={{ flexBasis: "20%" }}>{label}</StyledLabel>
          )}
          <StyledDatePicker
            allowClear={false}
            {...field}
            {...props}
            width={width}
            isRequired={isRequired}
            onChange={(date, dateString) =>
              setFieldValue(field.name, moment(dateString))
            }
            value={value}
            // height="2.375em"
            onBlur={() => setFieldTouched(field.name, true)}
          />
        </FlexContainer>
      </FlexContainer>

      {get(touched, field.name) && get(errors, field.name) && (
        <ValidationError>{get(errors, field.name)}</ValidationError>
      )}
    </>
  );
};

// import React from "react";
// import { get } from "lodash";
// import moment from "moment";

// import { StyledDatePicker } from "../../UI/Antd";
// import { ValidationError, StyledLabel } from "../../UI/Elements";
// import { FlexContainer } from "../../UI/Layout";
// export const DatePicker = ({
//   value,
//   field,
//   label,
//   isRequired,
//   noLabel,
//   inlineLabel,
//   form: { setFieldValue, setFieldTouched, touched, errors, height, width },
//   ...props
// }) => {
//   return (
//     <>
//       <FlexContainer>
//         <FlexContainer alignItems="center" flexWrap={inlineLabel && "nowrap"}>
//           {!noLabel && (
//             <StyledLabel style={{ flexBasis: "20%" }}>{label}</StyledLabel>
//           )}
//           <StyledDatePicker
//             allowClear={false}
//             {...field}
//             {...props}
//             isRequired={isRequired}
//             onChange={(date, dateString) =>
//               setFieldValue(field.name, moment(dateString))
//             }
//             value={value}
//             // height={height}
//             width={width}
//             onBlur={() => setFieldTouched(field.name, true)}
//           />
//         </FlexContainer>
//       </FlexContainer>
//       {get(touched, field.name) && get(errors, field.name) && (
//         <ValidationError>{get(errors, field.name)}</ValidationError>
//       )}
//     </>
//   );
// };
