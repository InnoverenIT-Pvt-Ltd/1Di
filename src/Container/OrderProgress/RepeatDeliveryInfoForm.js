import React,{useEffect,useState} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from 'styled-components'
import { Formik, Form, Field, ErrorMessage ,FieldArray } from "formik";
import SearchSelect from "../../Components/Forms/Formik/SearchSelect";
import { Spacer } from "../../Components/UI/Elements";
import * as Yup from "yup";
import { Button,DatePicker,Tooltip } from "antd";
import { InputComponent } from "../../Components/Forms/Formik/InputComponent";
import { FlexContainer } from "../../Components/UI/Layout";
import DeliveryInfoAddressFieldArray from "../../Components/Forms/Formik/DeliveryInfoAddressFieldArray";
import {addrepeatDelivery} from "../Inventory/InventoryAction";
import { Link, useHistory } from "react-router-dom";
import moment from 'moment'; 
import "../Inventory/Inventory.scss";
import { BundleLoader } from "../../Components/Placeholder";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function RepeatDeliveryInfoForm(props) {
  let history = useHistory();

  function handleCallBack() {
    history.push(`/shopName/invopayment`)
  }
  
  // useEffect(() => {
  //   props.getInventoryCartItems(props.userId);
  // }, []);

  const [priority,setpriority]=useState("High");

  const handleButtonClick = (type) => {
    setpriority(type);
    };

  // const addressSchema = Yup.object().shape({
  //   address1: Yup.string().required(''),
  //   city: Yup.string().required(''),
  //   pinCode: Yup.string().required(''),
  //   state: Yup.string().required(''),
  // });

  const addressSchema = Yup.object().shape({
    address1: Yup.string().required('Address is required'),
    // city: Yup.string().required('City is required'),
    // pinCode: Yup.string().required('Pin Code is required'),
    // state: Yup.string().required('State is required'), 
  });

  const validationSchema = Yup.object().shape({
    address: Yup.array()
      .of(addressSchema)
      .min(1, 'At least one address is required') 
      .required(),
    // deliveryDate: Yup.date().required('Delivery Date is required'),
  });

 


  

  return (
    <>
      <Formik
        initialValues={{
          // firstName: "",
          // lastName: "",
          // emailId: "",
          // phoneNo: "",
          // dialCode: "",
       priority: priority,
          address: [
            {
              address1: "",
              city: "",
              pinCode: "",
              state: "",
              latitude: "",
              longitude: "",
            },
          ],
          
        }}
        
        validationSchema={Yup.object().shape({
          address: Yup.array().of(addressSchema).min(1, 'At least one address is required'),
          // deliveryDate: Yup.date().required('Delivery Date is required'),
        })}
        onSubmit={(values, { resetForm }) => {
          const formattedDate = values.deliveryDate ? moment.utc(values.deliveryDate).format('YYYY-MM-DDTHH:mm:ss[Z]') : null;
          props.addrepeatDelivery (
            {
              ...values,
              priority: priority,
              // deliveryDate: formattedDate,
            //   address1: values.address[0].address1,
            //   city: values.address[0].city,
            //   pinCode: values.address[0].pinCode,
            //   state: values.address[0].state,
            //   latitude: values.address[0].latitude,
            //   longitude: values.address[0].longitude,
            },
            // props.invencartItem.orderPhoneId ? props.invencartItem.orderPhoneId:null,
            props.repeatOrderlist.orderPhoneId 
            );
            handleCallBack(); 
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <Spacer marginTop= "2%"  />
                <div style={{ display: "flex",width: "97%", justifyContent: "space-between" }}>
                <div
                style={{
                  // height: "100%",
                  width: "47%",
                }}
              >

               
              </div>

              <div
                style={{
                  // height: "100%",
                  width: "47%",
                }}
              >
                
                </div>
                </div>
               
                <Spacer marginTop= "2%"  />
                <FieldArray
                  name="address"
                  render={(arrayHelpers) => (
                    <DeliveryInfoAddressFieldArray
                      singleAddress
                      arrayHelpers={arrayHelpers}
                      values={values}
                      addressSchema={addressSchema}
                    />
                  )}
                />
                 <div class="font-bold m-[0.1rem-0-0.02rem-0.2rem] text-xs flex flex-col">
                       Priority
                      
                       
                     </div>
                   
                     <div class="flex">
                       <Tooltip title="Urgent">
                         <Button
                           
                            shape="circle"
                           onClick={() => handleButtonClick("High")}
                           style={{
                             backgroundColor:"red",
                                 borderRadius: "50%", 
                                 width: "31px", 
                                 height: "31px",
                                 display:"flex", justifyContent:"center", alignItems:"center"
                           }}
                         >
                          {priority==="High" && (
                            <CheckCircleOutlineIcon className="!text-white text-center text-[1.1rem]" />
                          )}
                         </Button>
                       </Tooltip>
                       &nbsp;
                       <Tooltip title="Normal">
                         <Button
                           
                            shape="circle"
                           onClick={() => handleButtonClick("Low")}
                           style={{
                             backgroundColor:"teal",
                                 borderRadius: "50%", 
                                 width: "31px", 
                                 height: "31px",
                                 display:"flex", justifyContent:"center", alignItems:"center"
                           }}
                         >
                          {priority==="Low" && (
                            <CheckCircleOutlineIcon className="!text-white text-center text-[1.1rem]" />
                          )}
                         </Button>
                       </Tooltip>
                       
                     </div>
                
                <Spacer />
              </div>
              <Spacer />
            </div>
            <Spacer />
            <FlexContainer justifyContent="flex-end">
              {/* <Link to="/shopName/invopayment"> */}
                <Button type="primary"
                htmlType="submit" 
                loading={props.addingRepeatDeliveryInfo}
                >
                  Check Out
                </Button>
              {/* </Link> */}
            </FlexContainer>
          </Form>
        )}
      </Formik>
    </>
  );
}

const mapStateToProps = ({ inventory,myorder,auth }) => ({
  addingRepeatDeliveryInfo: inventory.addingRepeatDeliveryInfo,
  repeatOrderlist: myorder.repeatOrderlist,
  userId: auth.userDetails.userId,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
        addrepeatDelivery,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepeatDeliveryInfoForm);
