import React, {useEffect,useState } from "react";
import { Formik, Form, Field } from "formik";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PostJobForm from "./PostJobForm";
import AddressFieldArray2 from "./AddressFieldArray2";
import { InputComponent2 } from "../Components/Forms/Formik/InputComponent2";
import { FormattedMessage } from "react-intl";

function HomeStep1(props) {



  return (
    <>
      <Formik
        initialValues={{

          
        }}
        onSubmit={(values) => {
          console.log(values);
          props.allDataSubmit(
            {
              ...values,
            },
           
          );
        }}
      >
        {({
          errors,
          touched,
          isSubmitting,
          setFieldValue,
          setFieldTouched,
          values,
          ...rest
        }) => (
          <Form className="flex justify-center mt-8">
            <div class="w-3/4 flex justify-center max-sm:w-wk">
            <PostJobForm >
              <h3 class="max-sm:w-56 text-base md:text-3xl w-wk">
               
                <FormattedMessage
                  id="app.wht"
                  defaultMessage="wht"
                />
                {/* {translatedMenuItems[0]} */}
                </h3> 
              <div class="max-sm: w-full">
              <Field
                width={"30%"}
                component={InputComponent2}
                name="loadingAddress"
                isColumn
                //style={{height:"3rem"}} 
                //  isRequired
                render={(arrayHelpers) => (
                  <AddressFieldArray2
                    singleAddress
                    arrayHelpers={arrayHelpers}               
                    values={values}
                    handleHomeStep1={props.handleHomeStep1}
                  />
                  
                )}
              />
              </div>             
            </PostJobForm>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

const mapStateToProps = ({ homeStepper }) => ({
  
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
     
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeStep1);