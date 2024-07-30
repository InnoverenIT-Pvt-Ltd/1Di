
// import React, { useState, useEffect } from 'react';
// import { Formik, Form, Field } from 'formik';
// import AddressFieldArray1 from "../../../Components/Forms/Formik/AddressFieldArray1";
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { Input } from 'antd';
// import { TimePicker } from 'antd';
// import dayjs from 'dayjs';
// import AddressFieldArray3 from '../../../Components/Forms/Formik/AddressFieldArray3';

// function OrderFirstStep(props) {

//     const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));

//     const [selectedTime, setSelectedTime] = useState(null);

//     const [payload, setPayload] = useState(null);
//     const timeFormat = 'hh:mm A';

//     return (
//         <Formik
//             initialValues={{

//                 loadingAddress: [
//                     {
//                         address1: "",
//                         addressId: "",
//                         state: "",
//                         city: "",
//                         pinCode: "",
//                         countryId: "",
//                         latitude: "",
//                         longitude: "",
//                         country: "",
//                     },
//                 ],

//                 unloadingAddress: [
//                     {
//                         address1: "",
//                         addressId: "",
//                         state: "",
//                         city: "",
//                         pinCode: "",
//                         countryId: "",
//                         latitude: "",
//                         longitude: "",
//                         country: "",
//                     },
//                 ],
//             }}
//         // onSubmit={(values, { resetForm }) => {
//         //     props.addOrderForm(values, () => {
//         //         resetForm();
//         //     });
//         // }}
//         >
//             {({ values, handleChange }) => (
//                 <Form class="flex flex-wrap bg-white">
//                     <div class="w-wk p-4">


//                         <div class="flex mt-4 p-0 justify-between">
//                             {/* <div className="input-container" style={{ marginBottom: '10px', width: '39em', borderLeft: '12px solid #5986fb' }}> */}
//                             {/* <div className="input-header">Loading Address</div> */}

//                             <div style={{ width: "47.5%" }}>
//                                 <div class="text-base font-medium font-sansSerif">
//                                     Pickup Address
//                                 </div>
//                                 <Field
//                                     width={"30%"}
//                                     // component={InputComponent2}
//                                     name="loadingAddress"
//                                     isColumn
//                                     //style={{height:"3rem"}} 
//                                     //  isRequired
//                                     render={(arrayHelpers) => (
//                                         <AddressFieldArray1
//                                             singleAddress
//                                             arrayHelpers={arrayHelpers}
//                                             values={values}
//                                             handleHomeStep1={props.handleHomeStep1}
//                                         />
//                                     )}
//                                 />
//                             </div>
//                             {/* </div> */}

//                             {/* <div style={{width:"47.5%"}}>
//                                 <div class="text-base font-medium font-sansSerif">
//                                     Delivery Address
//                                 </div>
//                                 <Field
//                                     width={"30%"}
//                                     // component={InputComponent2}
//                                     name="unloadingAddress"
//                                     isColumn
//                                     //style={{height:"3rem"}} 
//                                     //  isRequired
//                                     render={(arrayHelpers) => (
//                                         <AddressFieldArray3
//                                             singleAddress
//                                             arrayHelpers={arrayHelpers}
//                                             values={values}
//                                             handleHomeStep2={props.handleHomeStep2}
//                                         />
//                                     )}
//                                 />

//                             </div> */}
//                         </div>

//                         {/* Rest of the form fields */}
//                         {/* ... */}

//                         <div style={{ padding: '0 2px', marginTop: "14px" }}>
//                             <div className="input-container" style={{ marginBottom: '10px', borderLeft: '12px solid #5986fb' }}>
//                                 <div className="input-header font-sansSerif text-lg font-medium">Pickup Date</div>


//                                 <Field
//                                     as={Input}
//                                     type="date"
//                                     className="input-field"
//                                     name="availableDate"
//                                     value={props.availableDate}
//                                     onChange={(e) => {
//                                         const newAvailableDate = e.target.value;
//                                         const today = new Date().toISOString().split('T')[0];

//                                         if (newAvailableDate >= today) {
//                                             props.handleAvailableDate(e);

//                                             if (props.deliveryDate < newAvailableDate) {
//                                                 props.handleDeliveryDate({ target: { value: '' } });
//                                             }
//                                         } else {
//                                             console.log("Selected date should be from today onwards.");
//                                         }
//                                     }}
//                                     min={new Date().toISOString().split('T')[0]}
//                                     placeholder="Select available date"
//                                 />


//                             </div>

//                             <div className="input-container" style={{ marginBottom: '10px', marginLeft: '6px', borderLeft: '12px solid #5986fb' }}>
//                                 <div className="input-header font-sansSerif text-lg font-medium">Delivery Date</div>
//                                 <Field
//                                     as={Input}
//                                     type="date"
//                                     className="input-field"
//                                     name="deliveryDate"
//                                     value={props.deliveryDate}
//                                     onChange={props.handleDeliveryDate}
//                                     min={props.availableDate}
//                                     placeholder="Select delivery date"
//                                 />
//                             </div>
//                         </div>

//                         {/* <div style={{ padding: '0 2px', marginTop: "14px" }}>
//                             <div className="input-container" style={{ marginBottom: '10px', borderLeft: '12px solid #5986fb' }}>
//                                 <TimePicker.RangePicker
//                                     format="HH:mm"
//                                     showNow={false}
//                                  value={props.selectedTimeRange}
//                                  onChange={props.handleTimeChange}
//                                 />
//                           </div>

//                             <div className="input-container" style={{ marginBottom: '10px', marginLeft: '6px', borderLeft: '12px solid #5986fb' }}>
//                                 <TimePicker.RangePicker
//                                     style={{ width: "25em", margin: "-4px" }}
//                                     format="HH:mm"
//                                     showNow={false}
//                             value={props.selectedDeliveryTimeRange}
//                                 onChange={props.handleDeliveryTimeChange}
//                                 />
//                             </div>
//                         </div>
 
//  */}
//                         <div className="input-container" style={{ borderLeft: '12px solid #5986fb', width: "349px" }}>
//                             <div style={{ flex: '2' }} className="input-header font-sansSerif text-lg font-medium">
//                                 Payment Terms(days)
//                             </div>
//                             <select
//                                 className="input-field"
//                                 name="paymentTerms"
//                                 value={props.paymentTerms}
//                                 onChange={props.handlePaymentTerms}
//                             // placeholder="Enter payment terms"
//                             >
//                                 <option disabled value="">Select payment terms</option>
//                                 <option value={7}>7</option>
//                                 <option value={15}>15</option>
//                                 <option value={30}>30</option>
//                                 <option value={30}>45</option>
//                                 <option value={30}>60</option>
//                                 <option value={30}>75</option>
//                                 <option value={30}>90</option>
//                             </select>
//                         </div>
//                     </div>


//                     <div style={{ marginBottom: '10px', marginLeft: "8px" }}>

//                         <div className="input-container" style={{ height: '8em' }}>
//                             <textarea
//                                 className="input-field"
//                                 name="comments"
//                                 value={props.comments}
//                                 onChange={props.handleComments}
//                                 placeholder="Enter comments" />
//                         </div>
//                     </div>
//                 </Form>
//             )}
//         </Formik>
//     );
// }

// const mapStateToProps = ({ homeStepper, auth, requirement }) => ({
//     userId: auth.userDetails.userId,
//     // orderDetailsId: distributor.orderDetailsId,
// });

// const mapDispatchToProps = (dispatch) =>
//     bindActionCreators(
//         {
//         },
//         dispatch
//     );

// export default connect(mapStateToProps, mapDispatchToProps)(OrderFirstStep);



import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DatePicker } from "../../../Components/Forms/Formik/DatePicker";
import * as Yup from "yup";
import { StyledLabel } from '../../../Components/UI/Elements';
import { SelectComponent } from '../../../Components/Forms/Formik/SelectComponent';
import { InputComponent } from "../../../Components/Forms/Formik/InputComponent";
import { TextareaComponent } from '../../../Components/Forms/Formik/TextareaComponent';
import { Button, message } from 'antd';
import { getCurrency } from "../../../Jobsite/JobAction";
import { FormattedMessage } from 'react-intl';
import { addOrderForm } from '../MyOrderAction'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import AddressFieldArray3 from '../../../Components/Forms/Formik/AddressFieldArray3';
const FormSchema = Yup.object().shape({
    advancePayment: Yup.string().required("Input needed!"),
    contactPersonId: Yup.string().required("Input needed!"),
    orderCurrencyId: Yup.string().required("Input needed!"),
})
function OrderFirstStep(props) {
    // const contactOption = props.contactDistributor.map((item) => {
    //     return {
    //         value: item.contactPersonId,
    //         label: `${item.firstName || ""} ${item.lastName || ""}`
    //     }
    // })
    useEffect(() => {
        // props.getContactDistributorList(props.distributorId)
        props.getCurrency();
    }, [])

    const [priority, setPriority] = useState("High")

    function handleButtonClick(type) {
        console.log(type)
        setPriority(type)
    }
    const currencyOption = props.currencies.map((item) => {
        return {
            label: item.currency_name || "",
            value: item.currency_id,
        };
    });
    return (
        <Formik
            initialValues={{
                availabilityDate: "",
                deliveryDate: "",
                // contactPersonId: "",
                // contactPersonId: "COIG32382053775282024",
                paymentInTerms: "",
                // customPayment: "",
                comments: "",
                awbNo: "",
                orderSource: "customerPortal" ,
                orderCurrencyId: "",
                // deliverToBusinessInd: "",
                // fullLoadTruckInd: "",
                // privateInd: "",
                advancePayment: 50,
            //    distributorId: "",
                // distributorId: "DS98757230819282024",
                userId: props.userId,
                orderId: "",
                // priority: priority || "",
                loadingAddress: [
                    {
                        address1: "",
                        address2: "",
                        addressId: "",
                        state: "",
                        city: "",
                        pinCode: "",
                        countryId: "",
                        latitude: "",
                        longitude: "",
                        country: "",
                    },
                ],

                unloadingAddress: [
                    {
                        address1: "",
                        addressId: "",
                        state: "",
                        city: "",
                        pinCode: "",
                        countryId: "",
                        latitude: "",
                        longitude: "",
                        country: "",
                    },
                ],

            }}

            // validationSchema={FormSchema}
            onSubmit={(values, { resetForm }) => {
                // console.log(priority)

                if (values.advancePayment < 100) {
                    props.addOrderForm({
                        ...values,
                        // priority: priority || "",
                        paymentInTerms: values.paymentInTerms === "Custom" ? values.customPayment : values.paymentInTerms,

                    }, props.distributorId);
                } else {
                    message.success("Advance payment should be less than 100")
                }
            }}
        >
            {({ values, handleChange }) => (
                <div class="overflow-y-auto h-[60vh] overflow-x-hidden max-sm:h-[30rem]">
                    <Form>
                        <div class="flex justify-between">

                        <div class="w-[30rem]">
                            <div class="justify-between flex mt-3">
                                <div class="w-48">
                                    <Field
                                        name="paymentInTerms"
                                        label="Payment Terms (in Days)"
                                        isColumn
                                        inlineLabel
                                        component={SelectComponent}
                                        options={["7", "15", "21", "30", "45", "60", "75", "90", "Custom"]}
                                    />
                                </div>
                                {values.paymentInTerms === "Custom" && <div class="w-48">
                                    <Field
                                        label={
                                            <FormattedMessage
                                                id="app.Custom Payment"
                                                defaultMessage="Custom Payment"
                                            />
                                        }
                                        name="customPayment"
                                        component={InputComponent}
                                        inlineLabel
                                        width={"100%"}
                                        isColumn
                                    />
                                </div>}
                                <div class="w-48">
                                    <Field
                                        width={"100%"}
                                        name="advancePayment"
                                        label="Advance Payment(%)"
                                        isColumn
                                        inlineLabel
                                        component={InputComponent}
                                    />
                                </div>
                               
                                {/* <div class="w-48">
                                    <Field
                                        label="Contact Person"
                                        name="contactPersonId"
                                        placeholder="Value"
                                        component={InputComponent}
                                        // component={SelectComponent}
                                        // options={Array.isArray(contactOption) ? contactOption : []}
                                        inlineLabel
                                        width={"100%"}
                                        isColumn
                                    />
                                </div> */}
                            </div>

                            <div class="justify-between flex mt-2">
                                
                                <div class="w-48">
                                    <Field
                                        name="orderCurrencyId"
                                        label="Currency"
                                        isColumn
                                        inlineLabel
                                        // component={InputComponent}
                                        component={SelectComponent}
                                        options={Array.isArray(currencyOption) ? currencyOption : []}
                                    />
                                </div>
                                <div class="w-48">
                                    <Field
                                        label="Air Way Bill"
                                        name="awbNo"
                                        component={InputComponent}
                                        inlineLabel
                                        width={"100%"}
                                        isColumn
                                    />
                                </div>
                               

                            </div>
                            <div class="justify-between flex mt-2">
                            <div class="w-48">
                                    <Field
                                        name="deliveryDate"
                                        label="Delivery Date "
                                        isColumn
                                        inlineLabel
                                        component={DatePicker}
                                        value={values.deliveryDate}
                                        className="w-wk"

                                    />
                                </div>

                                <div class="w-48">
                                    <Field
                                        name="availabilityDate"
                                        label="Pickup Date "
                                        isColumn
                                        inlineLabel
                                        component={DatePicker}
                                        value={values.availabilityDate}
                                        className="w-wk"
                                    />
                                </div>
                            </div>
                            <div class="mt-2 flex justify-between">
                                <div class="w-wk">
                                    <Field
                                        name="comments"
                                        label="Notes"
                                        width={"100%"}
                                        isColumn
                                        component={TextareaComponent}
                                    />
                                </div>
                               
                                {/* <div class="w-[40%]  ml-8 mt-8">
                                    <StyledLabel><FormattedMessage
                                        id="app.priority"
                                        defaultMessage="Priority"
                                    /></StyledLabel>
                                    <div class="justify-between flex">
                                        <div>
                                            <Tooltip title={<FormattedMessage
                                                id="app.high"
                                                defaultMessage="High"
                                            />}>
                                                <Button
                                                    // type="primary"
                                                    shape="circle"
                                                    icon={<ExclamationCircleOutlined style={{ fontSize: '0.1875em' }} />}
                                                    onClick={() => handleButtonClick("High")}
                                                    style={{
                                                        backgroundColor:
                                                            priority === "High"
                                                                ? "red"
                                                                : "white",
                                                        borderRadius: "50%",
                                                        width: "31px",
                                                        height: "31px"
                                                    }}
                                                />
                                            </Tooltip>
                                            &nbsp;
                                            <Tooltip title={<FormattedMessage
                                                id="app.medium"
                                                defaultMessage="Medium"
                                            />}>
                                                <Button
                                                    // type="primary"
                                                    shape="circle"
                                                    icon={<ExclamationCircleOutlined style={{ fontSize: '0.1875em' }} />}
                                                    onClick={() => handleButtonClick("Medium")}
                                                    style={{
                                                        backgroundColor:
                                                            priority === "Medium"
                                                                ? "Orange"
                                                                : "white",
                                                        borderRadius: "50%",
                                                        width: "31px",
                                                        height: "31px"
                                                    }}
                                                />
                                            </Tooltip>
                                            &nbsp;
                                            <Tooltip title={<FormattedMessage
                                                id="app.low"
                                                defaultMessage="Low"
                                            />}>
                                                <Button
                                                    // type="primary"
                                                    shape="circle"
                                                    icon={<ExclamationCircleOutlined style={{ fontSize: '0.1875em' }} />}
                                                    onClick={() => handleButtonClick("Low")}
                                                    style={{
                                                        backgroundColor:
                                                            priority === "Low"
                                                                ? "teal"
                                                                : "white",
                                                        borderRadius: "50%",
                                                        width: "31px",
                                                        height: "31px"
                                                    }}
                                                ></Button>
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div> */}
                           
                            </div>
                        </div>
                            <div className="w-[28rem]">
                            <StyledLabel><h3> <FormattedMessage
                                id="app.pickupaddress"
                                defaultMessage="Pickup Address"
                            /></h3></StyledLabel>

                            <FieldArray
                                name="loadingAddress"
                                render={(arrayHelpers) => (
                                    <AddressFieldArray3
                                        singleAddress
                                        arrayHelpers={arrayHelpers}
                                        values={values}
                                        handleHomeStep2={props.handleHomeStep2}
                                    />
                                )}
                            />
                            </div>
                            
                        </div>
                        <div class="flex justify-end  w-wk bottom-2">
                                    <Button
                                        className="bg-[#3695cd] text-white text-xs pt-0 pr-3"
                                        htmlType="Submit"
                                        loading={props.addingOrder}
                                    >
                                        <FormattedMessage
                                            id="app.save"
                                            defaultMessage="Save"
                                        />

                                    </Button>

                                </div>
                    </Form>
                </div>
            )}
        </Formik>
    );
}

const mapStateToProps = ({ myorder, auth, job }) => ({
    // contactDistributor: distributor.contactDistributor,
    orderDetailsId: myorder.orderDetailsId,
    userId: auth.userDetails.userId,
    currencies: job.currencies,
    addingOrder: myorder.addingOrder
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            addOrderForm,
            getCurrency,
            // getContactDistributorList
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(OrderFirstStep);