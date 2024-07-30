import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { FormattedMessage } from "react-intl";
import { Button } from "antd";
// import { handleMapModal } from "../../ProfileAction";

import axios from "axios";
import { base_url } from "../../../../Config/Auth";
import { InputComponent } from "../../../../Components/Forms/Formik/InputComponent";
import FormikPlacesAutoComplete from "../../../../Components/Forms/Formik/FormikPlacesAutoComplete";
import { StyledModal } from "../../../../Components/UI/Antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Title,
  SubTitle,
  MultiAvatar,
} from "../../../../Components/UI/Elements";
import { FlexContainer } from "../../../../Components/UI/Layout";
import { ActionIcon, Leaflet } from "../../../../Components/Utils";
import { AddressComponent } from "../../../../Components/Common";

// import L from "leaflet";



class ProfileOverviewView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapModalVisible: false,
      addAddressVisible: false,
    };
  }
  handleMapModalVisible = () =>
    this.setState({ mapModalVisible: !this.state.mapModalVisible });
  handleAddAddressVisible = () =>
    this.setState({ addAddressVisible: !this.state.addAddressVisible });

  addAddress = (address) => {
    axios
      .post(`${base_url}/address`, address, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token") || "",
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
    const {
    //   user: { address },
      toggleViewType,
      user,
    } = this.props;
    const { addAddressVisible } = this.state;
    // console.clear()
    console.log(this.props.user);
   
    return (
      <>
        <FlexContainer justifyContent="space-between">
          <FlexContainer
            justifyContent="flex-start"
            flexWrap="nowrap"
            style={{ width: "85%" }}
          >
            <div style={{ width: "20%" }}>
              <MultiAvatar
                 primaryTitle={user.firstName}
                // imageId={user.imageId}
                // imageURL={user.imageURL}
              />
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <FlexContainer flexDirection="column" style={{ width: "80%" }}>
              <Title
                overflow="hidden"
                textOverflow="ellipsis"
                fontSize={"1.375em"}
              >
                {`${user.fullName || ""} `}
              </Title>
            </FlexContainer>
          </FlexContainer>
          <FlexContainer style={{ width: "15%" }} justifyContent="flex-end">
            {/* <ActionIcon
              tooltipTitle="Address"
              iconType="environment"
              handleIconClick={this.handleMapModalVisible}
              size="1em"
            />{" "}
            &nbsp; */}
            {/* <ActionIcon
              tooltipTitle="Address"
              iconType="environment"
              handleIconClick={this.handleMapModalVisible}
              size="1em"
            />{" "} */}
            &nbsp;&nbsp;
            <ActionIcon
              tooltipTitle="Edit"
              iconType="edit"
              handleIconClick={toggleViewType}
              size="1em"
            />
          </FlexContainer>
        </FlexContainer>

        {/* <StyledModal
          title={`${user.name || ""} `}
          width="65%"
          visible={this.state.mapModalVisible}
          maskClosable={false}
          maskStyle={{ backgroundColor: "rgba(1, 30, 71,0.7)" }}
        
          footer={null}
        >
          <>
            <FlexContainer>
              {!address ? (
                <>
             
                  {addAddressVisible && (
                    <AddressField
                      userId={user.userId}
                      addAddress={this.addAddress}
                      handleAddAddressVisible={this.handleAddAddressVisible}
                    />
                  )}
                </>
              ) : null}
              <FlexContainer
                justifyContent="space-between"
                alignItems="flex-start"
                flexWrap="nowrap"
              >
                <div>
                  <div className="product3" style={{ width: "180" }}>
                    {address &&
                      address.map((components, i) => (
                        <AddressComponent
                          key={i}
                          editable
                          editAddressType="user"
                          customerId={user.customerId}
                          components={components}
                        />
                      ))}
                  </div>
                 
                </div>
                <div class="vl"></div>
                
              </FlexContainer>
            </FlexContainer>
          </>
        </StyledModal> */}
      </>
    );
  }
}

const mapStateToProps = ({ profile }) => ({
//   addMapModal: profile.addMapModal,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
    //   handleMapModal,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileOverviewView);

class AddressField extends Component {
  render() {
    const { userId, addAddress, handleAddAddressVisible } = this.props;
    return (
      <>
        <Formik
          enableReinitialize
          initialValues={{
            address: {
              address1: "",
              address2: "",
              street: "",
              town: "",
              city: "",
              state: "",
              country: "",
              postalCode: "",
              latitude: "",
              longitude: "",
            },
          }}
          onSubmit={(values) => {
            console.log(values);
            const newAddress = {
              ...values.address,

              userId: userId,
            };
            console.log(newAddress);
            addAddress(newAddress);
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
              <Form className="form-background">
                <Field
                  name={`address`}
                  label="Work place"
                  component={FormikPlacesAutoComplete}
                  options={{}}
                />
                <Field
                  label="Address1"
                  name="address.address1"
                  component={InputComponent}
                // defaultValue='low'
                />
                <Field
                  label="address2"
                  name="address.address2"
                  component={InputComponent}
                // defaultValue='low'
                />
                <Field
                  label="street"
                  name="address.street"
                  component={InputComponent}
                // defaultValue='low'
                />
                <Field
                  label="town"
                  name="address.town"
                  component={InputComponent}
                // defaultValue='low'
                />
                <Field
                  label="city"
                  name="address.city"
                  component={InputComponent}
                // defaultValue='low'
                />
                <Field
                  label="state"
                  name="address.state"
                  component={InputComponent}
                // defaultValue='low'
                />
                <Field
                  label="country"
                  name="address.country"
                  component={InputComponent}
                // defaultValue='low'
                />
                <Field
                  label="postalCode"
                  name="address.postalCode"
                  component={InputComponent}
                // defaultValue='low'
                />

                <Button type="primary" htmlType="submit">
                  {/* Save */}
                  <FormattedMessage
              id="app.save"
              defaultMessage="Save"
            />
              </Button>
                <Button type="default" onClick={handleAddAddressVisible}>
                  {/* Cancel */}
                  <FormattedMessage
              id="app.cancel"
              defaultMessage="Cancel"
            />
              </Button>
              </Form>
            )}
        </Formik>
      </>
    );
  }
}