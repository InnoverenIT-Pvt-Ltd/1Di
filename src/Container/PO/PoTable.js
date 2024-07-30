import React, { useEffect } from 'react'
import { getAllPurchaseOrder, handlePoTrackModal, handlePoSummaryModal } from "./PoAction"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { StyledTable } from '../../Components/UI/Antd'
import { MultiAvatar } from '../../Components/UI/Elements'
import { CurrencySymbol, Link } from '../../Components/Common'
import { MapRounded, SummarizeOutlined } from '@mui/icons-material'
import PoSummaryModal from './PoSummary/PoSummaryModal'
import PoTrackingModal from './PoTrackingMap/PoTrackingModal'
import { Tooltip } from 'antd'
const PoTable = (props) => {
    useEffect(() => {
        props.getAllPurchaseOrder()
    }, [])
    const columns = [
        {
            title: "",
            width: "1%",
        },
        {
            title: "PO #",
            width: "8%",
            dataIndex: "poNumber",
            render: (text, item) => {
                return (
                    <Link
                        toUrl={`/po/${item.quotationSupplierSuppliesId}`}
                        title={`${item.poNumber}`}
                    />
                )
            }
        },
        {
            title: "Inquiry #",
            dataIndex: "quotationId",
            width: "10%",
        },
        {
            title: "Created By",
            render: (text, item) => {
                return <>
                    {/* <Tooltip title={`${item.userName} ${moment(item.creationDate).format("lll")} `}> */}

                    <span>
                        <MultiAvatar
                            primaryTitle={`${item.userName}`}
                            imgWidth={"2.1em"}
                            imgHeight={"2.1em"}
                        />
                        &nbsp;
                    </span>
                    {/* </Tooltip> */}
                </>;
            },
            width: "7%",
        },

        {
            title: "Ship To",
            dataIndex: "shipToLocationName",
            width: "7%",

        },
        {
            title: "Bill To",
            dataIndex: "billToLocationName",
            width: "7%",

        },
        {
            title: "Supplier",
            dataIndex: "supplierName",
            width: "8%",
        },


        {
            title: "Total Amount",
            dataIndex: "poTotalAmount",
            width: "7%",
            render: (text, item) => {
                return (
                    <><CurrencySymbol currencyType={"INR"} />{item.poTotalAmount}</>
                )
            }
            // editable: true,
        },
        {
            title: "GRN #",
            dataIndex: "grn",
            width: "10%",
            // editable: true,
        },

        {
            title: "Status",
            dataIndex: "stepStatus",
            width: "10%",
            render: (text, item) => {
                return (
                    <><b>{item.stepStatus}</b></>
                )
            }
        },
        {
            title: "",
            width: "3%",
            render: (text, item) => {
                return (
                    <>
                        <Tooltip title="Summary">
                            <span
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    props.handlePoSummaryModal(true)
                                }}
                            >
                                <SummarizeOutlined />
                            </span>
                        </Tooltip>
                    </>
                )
            }
        },
        {
            title: "",
            width: "3%",
            render: (text, item) => {
                return (
                    <>
                        <Tooltip title="Track">
                            <span
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    props.handlePoTrackModal(true)
                                }}
                            >
                                <MapRounded />
                            </span>
                        </Tooltip>
                    </>
                )
            }
        }

    ];
    console.log(props.poList)
    return (
        <>
            {true && (
                <StyledTable
                    dataSource={props.poList}
                    columns={columns}
                    pagination={false}
                    loading={props.fetchingPoList}
                // sticky={true}
                />
            )}
            <PoTrackingModal
                showTrackingOrderItem={props.showTrackingOrderItem}
                handlePoTrackModal={props.handlePoTrackModal} />
            <PoSummaryModal
                handlePoSummaryModal={props.handlePoSummaryModal}
                showSummaryList={props.showSummaryList}
            />
        </>
    )
}

const mapStateToProps = ({ po }) => ({
    poList: po.poList,
    fetchingPoList: po.fetchingPoList,
    showSummaryList: po.showSummaryList,
    showTrackingOrderItem: po.showTrackingOrderItem
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            getAllPurchaseOrder,
            handlePoTrackModal,
            handlePoSummaryModal
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(PoTable);