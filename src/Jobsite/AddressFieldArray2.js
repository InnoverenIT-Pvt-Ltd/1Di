import React, { Component } from "react";
import { Button, Icon, Tooltip } from "antd";
import { Field } from "formik";
import { EnvironmentOutlined } from '@ant-design/icons';
import { FlexContainer } from "../Components/UI/Layout";
import { InputComponent2 } from "../Components/Forms/Formik/InputComponent2";
import FiledSearchLarge from "./FiledSearchLarge";
import { FormattedMessage } from "react-intl";
class AddressFieldArray extends Component {
//   componentDidMount(){
// this.props.handleHomeStep1(this.props.values);
// console.log("Add1",this.props.values)
//   }
//   componentDidUpdate(Previous,prevP){
//     if(this.props !== prevP){
//     this.props.handleHomeStep1(this.props.values);}
//     console.log("Add2",this.props.values)   
//   }
  render() {
   const { values, translatedMenuItems } = this.props;
    return (
      <div>
        {/* {values &&
          values.loadingAddress.map((address, index) => ( */}
            <div>
              <div  style={{ display: "flex", width: "100%" }}>
          
                  <EnvironmentOutlined
                
                  style={{
                    fontSize: "1.2em",
                    margin: "0px 0.68em 0.42rem",
                    placeSelf: "center",
                  }}
                />
                  <Field
                   // name={`loadingAddress[${index}]`}
                    // label="Location"
                    component={FiledSearchLarge}
                    isColumn
                    options={{}}
                  />
              </div>
             
              <span>
                
                <p
                  style={{
                    fontWeight: "bold",
                    fontStyle: "italic",
                    color: "#1890ff",
                  }}
                >
                   <FormattedMessage
                  id="app.Add"
                  defaultMessage="Add"
                />
                  {/* {translatedMenuItems[1]} */}
                </p>
                <div class="flex justify-between mt-2">
                <div class="flex justify-between w-[48%]">
                  <div style={{ width: "30%" }}>
                    <Field
                      name="address1"
                       label={ <FormattedMessage
                        id="app.address"
                        defaultMessage="address"
                      />}
                      // label={translatedMenuItems[2]}
                     // placeholder="Address"
                      isColumn
                      component={InputComponent2}
                      width={"100%"}
                      inlineLabel  
                    />
                    </div>
                    <div style={{ width: "65%" }}>
                    <Field
                    //  name={`loadingAddress.${index}.street`}
                    name="street"
                    label={ <FormattedMessage
                      id="app.street"
                      defaultMessage="street"
                    />}
                      // label={translatedMenuItems[3]}
                      component={InputComponent2}
                      width={"100%"}
                      isColumn
                      inlineLabel
                    />
                    </div>
                  
                  
                </div>
                <div class="flex justify-between w-[48%]">
                <div style={{ width: "48.5%" }}>
                    <Tooltip title="Use Location feature for easy search ">
                      <Field
                      //  name={`loadingAddress.${index}.city`}
                      name="city"
                         label="City"
                        // label={translatedMenuItems[4]}
                        component={InputComponent2}
                        disabled
                        width={"100%"}
                        isColumn
                        inlineLabel
                      />
                    </Tooltip>
                  </div>
                  <div style={{ width: "48.5%" }}>
                    <Tooltip title="Use Location feature for easy search ">
                      <Field
                      //  name={`loadingAddress.${index}.state`}
                      name="state"
                        label="State/Province"
                        // label={translatedMenuItems[5]}
                        component={InputComponent2}
                        disabled
                        width={"100%"}
                        isColumn
                        inlineLabel
                      />
                    </Tooltip>
                  </div>
                </div>
                </div>
                <FlexContainer justifyContent="space-between">
                  <div style={{ width: "48%" }}>
                    <Tooltip title="Use Location feature for easy search ">
                      <Field
                       // name={`loadingAddress.${index}.country`}
                       name="country"
                        label="Country"
                        // label={translatedMenuItems[6]}
                        disabled
                        component={InputComponent2}
                        isColumn
                        width={"100%"}
                        inlineLabel
                      />
                    </Tooltip>
                  </div>

                  <div style={{ width: "48%" }}>
                    <Tooltip title="Use Location feature for easy search ">
                      <Field
                       // name={`loadingAddress.${index}.pinCode`}
                       name="zipcode"
                        label="Zip code"
                        // label={translatedMenuItems[7]}
                        component={InputComponent2}
                        isColumn
                        width={"100%"}
                        inlineLabel
                      />
                    </Tooltip>
                  </div>
                </FlexContainer>
              </span>
            </div>
          {/* ))} */}
      </div>
    );
  }
}

export default AddressFieldArray;
