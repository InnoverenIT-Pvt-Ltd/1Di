import React, { useState, useEffect,lazy } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FileDoneOutlined } from "@ant-design/icons";
import { FormattedMessage } from 'react-intl';
import FeedIcon from '@mui/icons-material/Feed';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import { getPhoneDetails, handlePhoneListOrderNoteModal,handleFeedbackPhoneOrderDrawer } from "../MyOrderAction";
import PhoneListOrderNoteModal from "./PhoneListOrderNoteModal";
import PhoneListOrderTaskTable from "./PhoneListOrderTaskTable";
import PhoneListOrderNoteModalForm from "./PhoneListOrderNoteModalForm";
import InfiniteScroll from "react-infinite-scroll-component";
import { PrintOutlined } from "@mui/icons-material";
import { Button, Tooltip } from "antd";
import { SubTitle } from "../../../Components/UI/Elements";
import ButtonGroup from "antd/lib/button/button-group";
import PhoneFeedbackOrderDrawer from "./PhoneFeedbackOrderDrawer";

// const QRCodeModal = lazy(() => import("../../../Components/UI/Elements/QRCodeModal.js"));

function PhoneListInOrder(props) {
  
const [pageNo, setPageNo] = useState(0);
const [hasMore, setHasMore] = useState(true);
const [showTask, setshowTask] = React.useState(false);
const [showTask1, setshowTask1] = React.useState(false);
const [currentSId, setCurrentSId] = useState("");
const [expand, setExpand] = useState(false);
const [phoneId, setphoneId] = useState("");
const [active, setActive] = useState("To Start");
const [spares, setspares] = useState(false);

useEffect(()=>{
    // setPageNo(pageNo + 1);
    props.getPhoneDetails(props.rowDatas.orderId,pageNo);
},[]);

function handleExpand(phoneId) {
    setExpand(!expand);
    setspares(false)
    setphoneId(phoneId);
}
function handlePhoneListOrderTask(){
    setshowTask(!showTask)
}
function handlePhoneListOrderTask1(){
    setshowTask1(!showTask1)
}
const [RowData, setRowData] = useState("");

function handleSetRowData(item) {
    setRowData(item);
}
function StatusIcon({ type, size, indStatus, iconType, tooltip, status, id, onClick, phoneId }) {
    const start = type;
    console.log(start);
    //////debugger;
    if (status === type) {
        size = "30px";
    } else {
        size = "16px";
    }
    return (
        <Tooltip title={tooltip}>
            <Button
                ghost={status !== type}
                style={{
                    padding: "6px",
                    borderColor: "transparent",
                    color: indStatus === type ? "orange" : "grey",
                }}
                onClick={onClick}
            >
                <i className={`fas ${iconType}`} style={{ fontSize: "1rem" }}></i>
            </Button>
        </Tooltip>
    );
}
const handleInfiniteScroll = () => {
    setPageNo(pageNo + 1);
    props.getPhoneDetails(props.rowDatas.orderId,pageNo);
  };

    return (
        <>
             <div>
                

                   
              
                     
                          
               
                          {/* <div>
                                    <div className="flex justify-between mt-4 mr-4"
                                        style={{ borderBottom: "3px dotted #515050" }}>

                                     
                                      

                                        <div className=" flex font-medium flex-col  w-20 ">
                                            <h4 class=" text-base text-cardBody font-poppins" >
                                                Company
                                            </h4>

                                            <h4
                                                class=" text-base text-cardBody font-poppins"
                                                style={{
                                                    cursor: "pointer",
                                                    color: "#01beee"
                                                }}
                                                // onClick={() => props.handleOrderedPhoneModal(true)}
                                            >
                                                {item.company}
                                              
                                            </h4>
                                        </div>
                                        <div className=" flex font-medium flex-col  w-32 ">
                                            <h4 class=" text-base text-cardBody font-poppins">
                                              Model
                                            </h4>
                                            <h4 
                                            class=" text-base text-cardBody font-poppins">
                                                {item.model}
                                               
                                            </h4>
                                        </div>
                                        <div className=" flex font-medium flex-col  w-32 ">
                                            <h4 class=" text-base text-cardBody font-poppins">
                                              IMEI
                                            </h4>
                                            <h4 
                                            class=" text-base text-cardBody font-poppins">
                                             
                                               
                                            </h4>
                                        </div>
                                       <div>
                                       <Tooltip title="Note">
                                      <StickyNote2Icon
                                      onClick={() => {
             
                                        handlePhoneListOrderTask1(true);
                                    }}
                                     />
                                     </Tooltip>
                                       </div>
                                       <div>
                                       <Tooltip title="Task">
                 <FileDoneOutlined style={{ color: "black" }} type="file-done" 
                  
                    onClick={() => {
                        //handleSetRowData(item);
                        handlePhoneListOrderTask(true);
                    }}
                  />
      
                </Tooltip>
                                       </div>

                                      
                                       
                                    </div>

                                </div> */}
<div className=' flex  sticky  z-auto'>
                            <div class="rounded m-1 p-1 w-[99%] overflow-auto shadow-[4px_0px_9px_3px_] shadow-[#a3abb980] bg-[#E3E8EE]">
                                <div className=" flex  w-[99%] p-1 bg-transparent font-bold sticky  z-10">
                                    <div className=" md:w-[4.2rem]"><FormattedMessage
                                        id="app.brand"
                                        defaultMessage="Brand"
                                    /></div>
                                    <div className=" md:w-[4.5rem]"><FormattedMessage
                                        id="app.model"
                                        defaultMessage="Model"
                                    /></div>
                                    <div className="md:w-[6.2rem]"><FormattedMessage
                                        id="app.IMEI"
                                        defaultMessage="IMEI"
                                    /></div>
                                    <div className=" md:w-[3.2rem]"><FormattedMessage
                                        id="app.os"
                                        defaultMessage="OS"
                                    /></div>
                                    <div className=" md:w-[4rem]"><FormattedMessage
                                        id="app.gb"
                                        defaultMessage="GB"
                                    /></div>
                                    <div className=" md:w-[5rem]"><FormattedMessage
                                        id="app.color"
                                        defaultMessage="Color"
                                    /></div>
                                    <div className=" md:w-[5.1rem]"><FormattedMessage
                                        id="app.condition"
                                        defaultMessage="Condition"
                                    /></div>
                                    {/* <div className=" md:w-[6.8rem]"><FormattedMessage
                                        id="app.expectedprice"
                                        defaultMessage="Expected Price"
                                    /></div> */}
                                    <div className=" md:w-[6.5rem]"><FormattedMessage
                                        id="app.totalhours"
                                        defaultMessage="Total Hours"
                                    /></div>
                                    {/* <div className=" md:w-[6.3rem]"><FormattedMessage
                                        id="app.totalcost"
                                        defaultMessage="Total Cost"
                                    /></div> 
                                     <div className=" md:w-[6.3rem]"><FormattedMessage
                                        id="app.finalprice"
                                        defaultMessage="Final Price"
                                    /></div> */}
                                    {/* <div className=" md:w-[7rem]"><FormattedMessage
                                        id="app.qc"
                                        defaultMessage="QC"
                                    /></div> */}
                                    <div className=" md:w-[6rem]"><FormattedMessage
                                        id="app.issue"
                                        defaultMessage="Issue"
                                    /></div>
                                    <div className=" md:w-[2rem]"></div>
                                    {/* <div className=" md:w-[1rem]"></div>
                                    <div className=" md:w-[1rem]"></div>
                                    <div className=" md:w-[1rem]"></div> */}
                                </div>
                                <div class="overflow-y-auto h-[79vh]">
                                    <InfiniteScroll
                                        dataLength={props.phoneListData.length}
                                        loader={props.fetchingPhoneData ? <div class="flex justify-center">Loading...</div> : null}
                                        // next={handleInfiniteScroll}
     hasMore={hasMore}
     
                                        height={"79vh"}
                                    >
                                        {props.phoneListData.map((item) => {
                                            return (
                                                <div>
                                                    <div className="flex rounded  mt-1 bg-white h-8 items-center p-1 " >
                                                        <div class="flex">
                                                            <div className=" flex font-medium   md:w-[4rem] max-sm:flex-row w-full max-sm:justify-between  ">
                                                                <div class=" text-xs text-cardBody font-poppins">
                                                                    {item.company}
                                                                </div>
                                                            </div>

                                                            <div className=" flex font-medium   md:w-[4.5rem] max-sm:flex-row w-full max-sm:justify-between  ">
                                                                <div class=" text-xs text-cardBody font-poppins">
                                                                    {item.model}
                                                                </div>

                                                            </div>
                                                            <div className=" flex font-medium   md:w-[4.5rem] max-sm:flex-row w-full max-sm:justify-between  ">
                                                                <div class=" text-xs text-cardBody font-poppins">
                                                                    {item.imei}
                                                                </div>
                                                            </div>
                                                            <div className=" flex font-medium   md:w-[4.5rem] max-sm:flex-row w-full max-sm:justify-between  ">
                                                                <div class=" text-xs text-cardBody font-poppins">
                                                                    {item.os}
                                                                </div>
                                                            </div>
                                                            <div className=" flex font-medium   md:w-[4.5rem] max-sm:flex-row w-full max-sm:justify-between  ">
                                                                <div class=" text-xs text-cardBody font-poppins">
                                                                    {item.gb}
                                                                </div>
                                                            </div>
                                                            <div className=" flex font-medium   md:w-[5rem] max-sm:flex-row w-full max-sm:justify-between  ">
                                                                <div class=" text-xs text-cardBody font-poppins">
                                                                    {item.color}
                                                                </div>
                                                            </div>
                                                            <div className=" flex font-medium   md:w-[5rem] max-sm:flex-row w-full max-sm:justify-between  ">
                                                                <div class=" text-xs text-cardBody font-poppins">
                                                                    {item.condition} 
                                                                </div>
                                                            </div>
                                                            {/* <div className=" flex font-medium   md:w-[8.2rem] max-sm:flex-row w-full max-sm:justify-between  ">
                                                                <div class=" text-xs text-cardBody font-poppins">
                                                                    {item.expectedPrice}
                                                                </div>
                                                            </div> */}
                                                            <div className=" flex font-medium   md:w-[5rem] max-sm:flex-row w-full max-sm:justify-between  ">
                                                                <div class=" text-xs text-cardBody font-poppins">
                                                                    {item.totalhours} 
                                                                </div>
                                                            </div>
                                                            {/* <div className=" flex font-medium   md:w-[6rem] max-sm:flex-row w-full max-sm:justify-between  ">
                                                                <div class=" text-xs text-cardBody font-poppins">
                                                                    {item.totalExtraCost}
                                                                </div>
                                                            </div>
                                                            <div className=" flex font-medium   md:w-[5.8rem] max-sm:flex-row w-full max-sm:justify-between  ">
                                                                <div class=" text-xs text-cardBody font-poppins">
                                                                    {item.totalPrice}
                                                                </div>
                                                            </div> */}
                                                            {/* <div className=" flex font-medium   md:w-[6rem] max-sm:flex-row w-full max-sm:justify-between  ">
                                                                <div class=" text-xs text-cardBody font-poppins">
                                                                    <ButtonGroup>
                                                                        <StatusIcon
                                                                            color="blue"
                                                                            type="To Start"
                                                                            iconType="fa-hourglass-start"
                                                                            tooltip="To Start"
                                                                            status={active}
                                                                            id={item.phoneId}
                                                                            indStatus={item.qcStatus}
                                                                            phoneId={RowData.phoneId}

                                                                        />
                                                                        <StatusIcon
                                                                            type="In Progress"
                                                                            iconType="fa-hourglass-half"
                                                                            tooltip="In Progress"
                                                                            id={item.phoneId}
                                                                            indStatus={item.qcStatus}
                                                                            phoneId={RowData.phoneId}
                                                                            status={active}

                                                                        />
                                                                        <StatusIcon
                                                                            type="Complete"
                                                                            iconType="fa-hourglass"
                                                                            tooltip="Complete"
                                                                            status={active}
                                                                            id={item.phoneId}
                                                                            indStatus={item.qcStatus}
                                                                            phoneId={RowData.phoneId}

                                                                        />
                                                                    </ButtonGroup>
                                                                </div>
                                                            </div> */}
                                                            <div className=" flex font-medium   md:w-[5rem] max-sm:flex-row w-full max-sm:justify-between  ">
                                                                <div class=" text-xs text-cardBody font-poppins">
                                                                    {item.issue} 
                                                                </div>
                                                            </div>
                                                  
                                                           
                                                                <div>
                                                                    <Tooltip title={<FormattedMessage
                                                                        id="app.spare"
                                                                        defaultMessage="Spare"
                                                                    />}>
                                                                        <PrecisionManufacturingIcon
                                                                            style={{ color: spares && item.phoneId === RowData.phoneId ? "red" : "black" }}
                                                                            className="!text-[1.1rem] cursor-pointer"
                                                                            onClick={() => {
                                                                                handleSetRowData(item);
                                                                                // hanldeSpare();
                                                                            }}
                                                                        />

                                                                    </Tooltip>
                                                                </div>
                                                                <div>
                                                                    <Tooltip title={<FormattedMessage
                                                                        id="app.task"
                                                                        defaultMessage="Task"
                                                                    />}>
                                                                        <FormatListBulletedIcon
                                                                            className="!text-[1.1rem] cursor-pointer"
                                                                            style={{ color: expand && item.phoneId === RowData.phoneId ? "red" : "black" }}
                                                                            onClick={() => {
                                                                                handlePhoneListOrderTask();
                                                                                handleSetRowData(item);
                                                                                handleExpand(item.phoneId);
                                                                            }}
                                                                        />
                                                                    </Tooltip>

                                                                </div>
                                                         
                                                           
                                                           
                                                                
                                                                <div>
                                                                    <Tooltip title={<FormattedMessage
                                                                        id="app.Notes"
                                                                        defaultMessage="Notes"
                                                                    />}>
                                                                        <NoteAltIcon
                                                                            className="!text-[1.1rem] cursor-pointer text-[#4bc076]"
                                                                            onClick={() => {
                                                                                handleSetRowData(item);
                                                                                props.handlePhoneListOrderNoteModal(true);
                                                                            }}
                                                                        />
                                                                    </Tooltip>

                                                                </div>
                                                           
                                                         
                                                                <div class=" text-xs text-cardBody font-poppins">
                                                                    <Tooltip title={<FormattedMessage
                                                                        id="app.Print"
                                                                        defaultMessage="Print"
                                                                    />}>
                                                                        <PrintOutlined
                                                                            // onClick={handlePrint}
                                                                            className="!text-[1.1rem] cursor-pointer"
                                                                        />
                                                                    </Tooltip>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </InfiniteScroll>
                                </div>
                            </div>

                        </div>
                        {/* <div class=" flex justify-end">
                            <Button
                                type="primary"
                                // onClick={handlePrint}
                                >
                                Print</Button>
                        </div>           */}
        


             
                {showTask &&(
<PhoneListOrderTaskTable  RowData={RowData}/>
                )}
                {showTask1 &&(
 <PhoneListOrderNoteModalForm rowData={props.rowData} />
                )}
            </div>
            <PhoneListOrderNoteModal
            RowData={RowData}
phonListNoteModal={props.phonListNoteModal}
            handlePhoneListOrderNoteModal={props.handlePhoneListOrderNoteModal}
            />
<PhoneFeedbackOrderDrawer
openFeedbackpHnOrDrawer={props.openFeedbackpHnOrDrawer}
handleFeedbackPhoneOrderDrawer={props.handleFeedbackPhoneOrderDrawer}

/>
        </>
    );
}
const mapStateToProps = ({ myorder}) => ({
    phonListNoteModal: myorder.phonListNoteModal,
    phoneListData:myorder.phoneListData,
    openFeedbackpHnOrDrawer:myorder.openFeedbackpHnOrDrawer,
    fetchingPhoneData:myorder.fetchingPhoneData
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            getPhoneDetails,
            handlePhoneListOrderNoteModal,
            handleFeedbackPhoneOrderDrawer,

        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhoneListInOrder);

