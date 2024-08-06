import React from "react";
import { Tooltip } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { RollbackOutlined } from "@ant-design/icons";
import { Formik, Form, FastField } from "formik";
import { InputComponent } from "../../../../../Components/Forms/Formik/InputComponent";
import { StyledLabel } from "../../../../../Components/UI/Elements";
import {
  FlexContainer,
  MainWrapper,
} from "../../../../../Components/UI/Layout";
import { addTrackOrder } from "../../../CustomerAction";
import { Link, useHistory } from "react-router-dom";
import { Button } from "antd";
// import TrackTable from "./TrackTable";
import MainHeader from "../../../Header/MainHeader";
import styled from 'styled-components'
import CustomerContentHeader from "../../../Header/CustomerContentHeader";


function Track(props) {
  let history = useHistory();

  function handleCallBack(data,orderId) {
    // history.push(`/AlbertVliet/ordermaincontent/${orderId}`)
    history.push(`/AlbertVliet/ordermaincontent`)
  }
  // const str = shopName&&shopName.replace(/ +/g, "");
  return (
    <>
      <MainHeader />
      

      <Formik
        initialValues={{
          orderId: "",
        }}
        onSubmit={(values, { resetForm }) => {
          props.addTrackOrder({
            ...values,
          }, handleCallBack);
          resetForm();
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

            <Form>

<div className="flex flex-col  items-center justify-center h-[50vh] ">
              <MainWrapper style={{width:"100%"}}>

                <h1>Track Order</h1>
                <hr />

               
                <InputContainer>
                    <div style={{width: "30%"}}>
                      <FastField
                        component={InputComponent}
                        name="orderId"
                        label="Order Id"
                        //   placeholder="Col$ 0"
                        isColumn
                      />
                    </div>
                    </InputContainer>
                 
               
                    <ButtonContainer>
                  <div >
                    <Button  
                    type="primary"
                      htmlType="submit"
                      // loading={props.trackingOrder}
                    >
                      Submit
                    </Button>
                  </div>
                    &nbsp;&nbsp;

                    <div>
                    <Link to={`/`}>
                      <Button type="primary">
                        Continue Shopping
                      </Button>
                      </Link>
                    </div>

                    </ButtonContainer>


              </MainWrapper>
              </div>
            
            </Form>
          )}
      </Formik>



    </>
  );
}
const mapStateToProps = ({ customer }) => ({
  trackingOrder: customer.trackingOrder,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addTrackOrder,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(Track);
const ButtonContainer = styled.div`
  display:flex;
  justify-content:flex-end
  @media only screen and (max-width: 600px) {
    justify-content:center
  }
`
const InputContainer = styled.div`
  display:flex;
  justify-content:center
`