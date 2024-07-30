import React, { useEffect, useState } from "react";
import { Formik,Field } from "formik";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PostJobForm from "./PostJobForm";
import { InputComponent2 } from "../Components/Forms/Formik/InputComponent2";
import { FormattedMessage } from "react-intl";


function HomeStep3(props) {
  
  return (
    <>
 <div class="flex justify-center mt-8">
   <div class="flex w-2/3 justify-center max-sm:w-wk">
          <Formik >
              <PostJobForm >
                <h3 class="max-sm: text-xl md:text-3xl">       
                  <FormattedMessage
                      id="app.how"
                      defaultMessage="how"
                    />
                </h3>
                <Field
                  width={"30%"}
                  component={InputComponent2}
                  //name="noOfItems"
                  isColumn
                  value={props.noOfItems}
                  onChange={props.handleHomeStep3}
                //  isRequired
                />                 
              </PostJobForm>
              </Formik>
        </div>
        </div>
    </>
  );
}

const mapStateToProps = ({ auth, contact }) => ({
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
)(HomeStep3);