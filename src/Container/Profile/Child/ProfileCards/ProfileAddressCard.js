import React, { Component } from 'react';
import AddressFieldArray from '../../../../Components/Forms/Formik/AddressFieldArray';
import { FieldArray } from "formik";
import { FormattedMessage } from "react-intl";
import { Formik, Form, Field } from "formik";
import { Button, Tooltip } from "antd";
import { FlexContainer } from "../../../../Components/UI/Layout";
import { InputComponent } from "../../../../Components/Forms/Formik/InputComponent";
import FormikPlacesAutoComplete from "../../../../Components/Forms/Formik/FormikPlacesAutoComplete";
import { ViewEditCard } from "../../../../Components/UI/Elements";
import ProfileAddressView from "./ProfileAddressView";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ViewEditCard1 from '../../../../Components/UI/Elements/ViewEditCard1';

class ProfileAddressCard extends Component {
constructor(props){
  super(props);
  this.state={
    
  }
}
    render() {
     
      const { toggleViewType ,user} = this.props;
    // console.log(user);
        return (
            <div >
               <ViewEditCard1>
               {({ viewType }, toggleViewType) => (
                        viewType === 'view' ? (
                          <ProfileAddressView 
                           user={user.address&&user.address.length&&user.address[0]}
                          toggleViewType={toggleViewType}
                          />
                           ):( 
                        <AddressField
                    //   customerId={user.customerId}
                    //   user={user.addressDetailsDTO}
                    //   updateCustomerById={this.props.updateCustomerById}
                      toggleViewType={toggleViewType}
                    />)
                               
                    )}
               
               </ViewEditCard1>
           
                    </div>
        )
    }
}

class AddressField extends Component {

  render() {
    const { userId, addAddress, toggleViewType } = this.props;
    return (
      <>
        <Formik
          enableReinitialize
          initialValues={{
            addressDetailsDTO:
            [
               {
                // props.shopDetails.addresses && props.shopDetails.addresses.length ? props.shopDetails.addresses[0].address1:""
            //   address1: this.props.user.address1 || "",
            //   // address2: "",
            //   street:this.props.user.street || "",
            //   // town: "",
            //   city: this.props.user.city || "",
            //   state: this.props.user.state || "",
            //   country: this.props.user.country || "",
            //   pinCode:this.props.user.pinCode || "",
            //   latitude: "",
            //   longitude: "",
            },
          ]
          }}
        //   onSubmit={(values) => {
        //     console.log(values);
        //     // const newAddress = {
        //     //   ...values.address,
        //     // };
        //     this.props.updateCustomerById(values);
        //     toggleViewType()
        //   }}
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
            <Form>
              <div style={{width:"55%"}}>
              <Field
               
                 label="Work place"
               
                component={FormikPlacesAutoComplete}
                options={{}}
              /></div>
              <Field
                 label="Address1"
                
                // name="addressDetailsDTO[0].address1"
                component={InputComponent}
              // defaultValue='low'
              />
             
              <Field
                 label="street"
               
                // name="addressDetailsDTO[0].street"
                component={InputComponent}
              // defaultValue='low'
              />
            
              <Field
                 label="city"
                
                // name="addressDetailsDTO[0].city"
                component={InputComponent}
              // defaultValue='low'
              />
              <Field
            label="state"
                
                // name="addressDetailsDTO[0].state"
                component={InputComponent}
              // defaultValue='low'
              />
              <Field
                label="country"
               
                // name="addressDetailsDTO[0].country"
                component={InputComponent}
              // defaultValue='low'
              />
              <Field
                label="postalCode"
                // label={<FormattedMessage
                //   id="app.pincode"
                //   defaultMessage="Pin Code"
                // />}
                // name="addressDetailsDTO[0].pinCode"
                component={InputComponent}
              // defaultValue='low'
              />
            <FlexContainer justifyContent="flex-end" marginRight="1.25em">
              <Button type="primary" htmlType="submit">
                Save
              
              </Button>
              &nbsp;
              <Button type="default" 
              onClick={toggleViewType}
              >
                Cancel
               
              </Button>
              </FlexContainer>
            </Form>
          )}
        </Formik>
      </>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
//   updatingUserById: auth.updatingUserById,
//   updatingUserByIdError: auth.updatingUserByIdError,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
    //   updateCustomerById,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(ProfileAddressCard);
