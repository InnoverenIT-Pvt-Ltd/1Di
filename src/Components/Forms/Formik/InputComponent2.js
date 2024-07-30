import React from "react";
import { get } from "lodash";
import {ValidationError, StyledLabel } from "../../UI/Elements";
import TextInput2  from "../../UI/Elements/TextInput2";
import { FlexContainer } from "../../UI/Layout";
// const Option = SelectInput.Option;
export const InputComponent2 = ({
  field,
  form,
  label,
  layout,
  Left,
  isColumn,
  labelWidth,
  isRequired,
  isShadow,
  isDisabled,
  form: { touched, errors, validateOnChange },
  noLabel,
  inlineLabel,
  ...props
}) => {
  if (isColumn) {
    return (
      <>
        {!noLabel && (
          <StyledLabel style={{ flexBasis: labelWidth || "20%" }}>
            {label}
          </StyledLabel>
        )}
        <TextInput2
        // style={{ height: "1.89rem" }}
          layout={"vertical"}
          {...field}
          {...props}
          Left={Left}
          validateOnChange={false}
          isRequired={isRequired}
          isShadow={isShadow}
          isDisabled={isDisabled}
        />

        {get(touched, field.name) && get(errors, field.name) && (
          <ValidationError>{get(errors, field.name)}</ValidationError>
        )}
      </>
    );
  }
  return (
    <>
      <FlexContainer>
        <FlexContainer alignItems="center" flexWrap={inlineLabel && "nowrap"}>
          {!noLabel && (
            <StyledLabel style={{ flexBasis: labelWidth || "20%" }}>
              {label}
            </StyledLabel>
          )}

          <TextInput2
          style={{ height: "1.89em" }}
            layout={"vertical"}
            {...field}
            {...props}
            Left={Left}
            isShadow={isShadow}
            validateOnChange={false}
            isRequired={isRequired}
            isDisabled={isDisabled}
          />
        </FlexContainer>
      </FlexContainer>
      {get(touched, field.name) && get(errors, field.name) && (
        <ValidationError >{get(errors, field.name)}</ValidationError>
      )}
    </>
  );
};
