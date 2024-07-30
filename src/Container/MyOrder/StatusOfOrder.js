import React,{useEffect,useState} from "react";
import { Button, Steps } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import {getStatusOfOrder} from "./MyOrderAction";

function StatusOfOrder(props) {

    useEffect(()=>{
        props.getStatusOfOrder(props.particularRowData.orderId);
    },[]);



    return (
        <>
    <div class="bg-white">
        <Steps
            direction="vertical"
            current={1}
            items={[
                {
                    title: <FormattedMessage
                        id="app.ordercreated"
                        defaultMessage="Order Created"
                    />,
                    status: <FormattedMessage
                        id="app.progress"
                        defaultMessage="progress"
                    />,
                    description: <>
                        <b>On {moment(props.statusOrders.creationDate).format("DD-MM-YYYY")} By {props.statusOrders.contactPersonName}</b>
                    </>
                },
                {
                    title: 'Collections',
                    status: <>
                        {props.statusOrders.qcStartInd === 0 ? 'wait'
                            : props.statusOrders.qcStartInd === 1 &&
                                props.statusOrders.qcStartInd === 2 ? 'progress' : null
                        }</>,
                    description:
                        <>

                            <div className=' flex justify-around w-[45rem]'>
                                <Button
                                    type='primary'
                                    onClick={() => {
                                        props.handlePaidModal(true);
                                    }}
                                >
                                    Receive Payment
                                </Button>
                                {
                                    props.statusOrders.qcStartInd === 0 ?
                                        <Button
                                            loading={props.startingQcInStatus}
                                            type='primary'
                                            onClick={() => props.startQCStatus({
                                                orderPhoneId: props.statusOrders.orderId || "",
                                                qcStartInd: 1,
                                                qcStartUserId: props.userId
                                            },
                                                props.distributorId
                                            )}
                                        >
                                            Approve QC
                                        </Button>
                                        : <b> QC approved on {moment(props.statusOrders.qcStartDate).format("DD-MM-YYYY")}
                                            By {props.statusOrders.qcStartUser}</b>},
                                <b>Advance as per Order - {props.statusOrders.advancePayment} % </b>
                                <b>Received - {props.statusOrders.receivePayment || 0} % </b>
                            </div>

                        </>
                },
                {
                    title: 'Order Pick Up',
                    status: 'progress',
                    description: <>
                        {props.statusOrders.transferInd !== 0 &&
                            <b>By {props.statusOrders.orderPickUpUser} On {moment(props.statusOrders.orderPickUpDate).format("DD-MM-YYYY")} </b>
                        }
                    </>
                },

                {
                    title: 'Warehouse',
                    status: 'progress',
                    description: <>
                        {/* {props.particularRowData.transferInd === 2 && */}
                        <b>Arrived at {props.statusOrders.locationDetailsViewDTO
                            && props.statusOrders.locationDetailsViewDTO.name || ""} on
                            &nbsp;{moment(props.statusOrders.inventoryReceiveDate).format("DD-MM-YYYY")},
                            Received by {props.statusOrders.inventoryReceiveUser} |
                            Inspection started by {props.statusOrders.startInspectionUserName} on
                            &nbsp;{moment(props.statusOrders.startInspectionDate).format("DD-MM-YYYY")} |
                            Inspection completed by {props.statusOrders.stopInspectionUserName} on
                            &nbsp;{moment(props.statusOrders.stoptInspectionDate).format("DD-MM-YYYY")}
                        </b>
                        {/* } */}
                    </>
                },
                {
                    title: 'QC',
                    status: 'progress',
                    // status: <>
                    //     {
                    //         props.particularRowData.qcStartInd === 3 && 'finish'
                    //     }</>,
                    //qc completed msg on date and user who assign technician                   
                    description:
                        <>
                            {/* <Button
                                        type='primary'
                                        // onClick={() => props.startQCStatus({
                                        //     orderPhoneId: props.particularRowData.orderId || "",
                                        //     qcStartInd: 1,
                                        //     qcStartUserId: props.userId
                                        // },
                                        //     props.distributorId
                                        // )}
                                    >
                                        Start QC     </Button> */}
                            <b>{(props.statusOrders.qcStartInd === 2 || props.statusOrders.qcStartInd === 3) &&
                                (
                                    <>
                                        Assigned by {props.statusOrders.orderAssignUser} on {moment(props.statusOrders.orderAssignDate).format("DD-MM-YYYY")}
                                    </>
                                )}
                                &nbsp;{props.statusOrders.qcStartInd === 3 && (
                                    <>
                                        | Started on {moment(props.statusOrders.orderQcStartTime).format("DD-MM-YYYY")} | Completed on {moment(props.statusOrders.orderQcEndTime).format("DD-MM-YYYY")}
                                    </>
                                )}
                            </b>
                        </>
                },

                {
                    title: 'Order Commercial Confirmation',
                    // start repair button after click show repair started
                    status: <>
                        {props.statusOrders.qcRepairInd === 0 ? 'wait'
                            : props.statusOrders.qcRepairInd === 1 ||
                                props.statusOrders.qcRepairInd === 2 ? 'progress' : null
                        }</>,
                    description:
                        <>
                            {props.statusOrders.priceConfirmInd && <b>
                                Confirmed on {moment(props.statusOrders.orderConfirmedDate).format("DD-MM-YYYY")} by {props.statusOrders.orderConfirmedUser || " "}
                                <Button
                                    type='primary'
                                    onClick={() => {
                                        props.handlePaymentHistory(true)
                                    }}
                                >Show Payment</Button>
                            </b>
                            }
                            {/* props.statusOrders.qcRepairInd === 1 && props.particularRowData.qcRepairInd === 2 ?
                                        <b>Qc Repair Started</b> : props.particularRowData.qcRepairInd === 3 ? <b>Qc Repair Completed</b> : null */}
                        </>
                },
                {
                    title: 'Repair',
                    // after complete show repair completed on date and user
                    status: <>
                        {
                            props.statusOrders.qcRepairInd === 3 && 'progress'
                        }</>,
                    description:
                        <>
                            {
                                props.statusOrders.priceConfirmInd && props.statusOrders.qcRepairInd === 0 ?
                                    (<Button
                                        loading={props.startRepairingInStatus}
                                        type='primary'
                                        onClick={() => props.startRepairInStatus({
                                            qcRepairInd: 1,
                                            orderPhoneId: props.statusOrders.orderId || "",
                                            qcRepairUserId: props.userId,
                                            repairReason: "",
                                            repairReasonInd: true
                                        }, props.distributorId)}
                                    >
                                        Start Repair</Button>)
                                    : !props.statusOrders.repairReasonInd && props.statusOrders.qcRepairInd === 0 && props.statusOrders.qcStartInd === 3 ?
                                        (<Button
                                            type='primary'
                                            onClick={() => {
                                                props.handleRepairReason(true)
                                            }}
                                        // onClick={() => props.startRepairInStatus({
                                        //     qcRepairInd: 1,
                                        //     repairReason: "",
                                        //     repairReasonInd: true,
                                        //     orderPhoneId: props.particularRowData.orderId || "",
                                        //     qcRepairUserId: props.userId
                                        // }, props.distributorId)}
                                        >
                                            Start Repair Without Approve
                                        </Button>
                                        ) :
                                        <b>{(props.statusOrders.qcRepairInd === 2 || props.statusOrders.qcRepairInd === 3) &&
                                            (<>
                                                Assigned by {props.statusOrders.orderRepairAssignUser} on {moment(props.statusOrders.orderRepairAssignDate).format("DD-MM-YYYY")}
                                            </>)}
                                            &nbsp;   {props.statusOrders.qcRepairInd === 3 &&
                                                (<> | Started on {moment(props.statusOrders.orderRepairStartTime).format("DD-MM-YYYY")} | Completed on {moment(props.statusOrders.orderRepairEndTime).format("DD-MM-YYYY")}
                                                </>)}
                                        </b>
                            }

                        </>
                },

                {
                    title: 'Packing',
                    // after packed button on enabled level
                    status: 'progress',
                    description: <>
                        {props.statusOrders.dispatchInspectionInd === 3 &&
                            <b>Packed By {props.statusOrders.packedBy} On {moment(props.statusOrders.packedDate).format("DD-MM-YYYY")}</b>
                        }
                    </>
                },
                {
                    title: 'Schedule PickUp',
                    // after customer pickup order (after delivery address)
                    status: <>
                        {props.statusOrders.pickupInd === false ? 'wait' : 'finish'}</>,
                    description: <>
                        {props.statusOrders.pickupInd && <b>Scheduled for {props.statusOrders.unloadingAddresses && props.statusOrders.unloadingAddresses[0].city || ""} On {moment(props.statusOrders.unloadingDate).format("DD-MM-YYYY")} by {props.statusOrders.unloadingUser}</b>}
                    </>
                },
                {
                    title: 'Order Dispatch',
                    status: 'progress',

                },
                {
                    title: 'Customer Feedback',
                    status: 'progress',

                },
            ]}
        />
        {/* <StartRepairReasonModal
            particularRowData={props.particularRowData}
            handleRepairReason={props.handleRepairReason}
            showRepairReasonModal={props.showRepairReasonModal} />
        <ShowPaymentHistoryModal
            particularRowData={props.particularRowData}
            handlePaymentHistory={props.handlePaymentHistory}
            showPaymentHistoryModal={props.showPaymentHistoryModal}
        />
        <PaidButtonModal
            addPaidButtonModal={props.addPaidButtonModal}
            handlePaidModal={props.handlePaidModal}
            particularRowData={props.particularRowData}
        /> */}
    </div>
    </>
    );
}

const mapStateToProps = ({ myorder, auth }) => ({
    userId: auth.userDetails.userId,
    // addPaidButtonModal: distributor.addPaidButtonModal,
    // showRepairReasonModal: distributor.showRepairReasonModal,
    // showPaymentHistoryModal: distributor.showPaymentHistoryModal,
    // startingQcInStatus: distributor.startingQcInStatus,
    statusOrders: myorder.statusOrders,
    // distributorId: distributor.distributorDetailsByDistributorId.distributorId,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            // startQCStatus,
            // startRepairInStatus,
            // handlePaymentHistory,
            // handleRepairReason,
            getStatusOfOrder
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(StatusOfOrder);
