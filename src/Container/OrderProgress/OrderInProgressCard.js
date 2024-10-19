
import React, { useEffect, useState, lazy } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import { Tooltip, Button, Input } from "antd";
import styled from 'styled-components';
import {
    getProcureOrderData,
    handleItemViewDrawer,
    handleStatuShowDrawer,
    repeatOrder
} from "../MyOrder/MyOrderAction"
import dayjs from "dayjs";
import InfiniteScroll from 'react-infinite-scroll-component';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import jsPDF from "jspdf";
import "jspdf-autotable";

const ProcureItemViewDrawer =lazy(()=>import("./ProcureItemViewDrawer"));
const ProcureStatusShowDrawer =lazy(()=>import("./ProcureStatusShowDrawer"));

const { Search } = Input;

function OrderInProgressCard(props) {

    useEffect(() => {
        props.getProcureOrderData(props.userId,pageNo,"procure");
    }, [])
    const [rowDatas, setrowDatas] = useState("");
    const [hasMore, setHasMore] = useState(true);
    const [pageNo, setPageNo] = useState(0);
    function handleRowData(item) {
        setrowDatas(item)
    }
    const handleInfiniteScroll = () => {
        setPageNo(pageNo + 1);
        props.getProcureOrderData(props.userId,pageNo,"procure");
      };

      const exportPDFAnnexure = () => {
        const doc = new jsPDF();
    
        // Add the header details
        doc.text('1 Di Inc.', 20, 20);
        doc.text('21A-81 Northern Heights Drive', 20, 30);
        doc.text('Richmond Hill ON L4B 4C9', 20, 40);
        doc.text('+14162780878', 20, 50);
        doc.text('sales@1di.ca', 20, 60);
        doc.text('GST/HST Registration No.: 71265570', 20, 70);
    
        // Add title
        doc.setFontSize(26);
        doc.setTextColor(0, 128, 128); // Teal color
        doc.text('ORDER', 105, 90, { align: 'center' });
    
        // Billing & Shipping Info
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0); // Black color
        doc.text('BILL TO', 20, 110);
        doc.text('Robert Cowman', 20, 120);
        doc.text('FG Bradley\'s Fairview', 20, 130);
        doc.text('1800 Sheppard Ave E. Fairview', 20, 140);
        doc.text('Mall, Unit 2045', 20, 150);
        doc.text('Toronto Ontario M2J 5A7', 20, 160);
    
        doc.text('SHIP TO', 105, 110);
        doc.text('Robert Cowman', 105, 120);
        doc.text('FG Bradley\'s Fairview', 105, 130);
        doc.text('1800 Sheppard Ave E. Fairview', 105, 140);
        doc.text('Avenue E', 105, 150);
        doc.text('Mall, Unit 2045', 105, 160);
        doc.text('Toronto Ontario M2J 5A7', 105, 170);
    
        // Invoice Details
        doc.text('INVOICE', 160, 110);
        doc.text('1361', 160, 120);
        doc.text('DATE', 160, 130);
        doc.text('30/08/2024', 160, 140);
        doc.text('DUE DATE', 160, 150);
        doc.text('29/09/2024', 160, 160);
        doc.text('TERMS Net', 160, 170);
        doc.text('30', 160, 180);
    
        // Ship Details
        doc.text('SHIP DATE', 20, 190);
        doc.text('30/08/2024', 20, 200);
        doc.text('SHIP VIA', 60, 190);
        doc.text('MIKE DROPOFF', 60, 200);
        doc.text('SALES REP', 120, 190);
        doc.text('Tracy Sales', 120, 200);
        doc.text('PURCHASE ORDER #', 170, 190);
        doc.text('BO-TM9456525', 170, 200);
    
        // Order Table
        doc.autoTable({
          head: [['SKU', 'DESCRIPTION', 'QTY', 'RATE', 'AMOUNT']],
          body: [
            ['KES477', '477 | Jumbo Foam D20', '36', '12.50', '450.00'],
          ],
          startY: 210,
          theme: 'striped',
          headStyles: { fillColor: [140, 190, 230], textColor: [0, 128, 128] },
        });
    
        // Subtotal, Tax, Total
        doc.text('SUBTOTAL', 130, doc.previousAutoTable.finalY + 20);
        doc.text('450.00', 180, doc.previousAutoTable.finalY + 20);
        doc.text('HST (ON) @ 13%', 130, doc.previousAutoTable.finalY + 30);
        doc.text('58.50', 180, doc.previousAutoTable.finalY + 30);
        doc.text('TOTAL', 130, doc.previousAutoTable.finalY + 40);
        doc.text('508.50', 180, doc.previousAutoTable.finalY + 40);
        doc.text('BALANCE DUE', 130, doc.previousAutoTable.finalY + 50);
        doc.setFontSize(22);
        doc.setFont('bold');
        doc.text('CAD 508.50', 180, doc.previousAutoTable.finalY + 50);
    
        // Tax Summary
        doc.setFontSize(14);
        doc.setFont('normal');
        doc.text('TAX SUMMARY', 20, doc.previousAutoTable.finalY + 70);
        doc.autoTable({
          head: [['RATE', 'TAX', 'NET']],
          body: [['HST (ON) @ 13%', '58.50', '450.00']],
          startY: doc.previousAutoTable.finalY + 80,
          theme: 'striped',
          headStyles: { fillColor: [140, 190, 230], textColor: [0, 128, 128] },
        });
    
        // Footer
        doc.text(
          'Please send all EFT remittance to Sales@1Di.ca',
          105,
          280,
          { align: 'center' }
        );
    
        doc.save('Orders.pdf');
      };

      return (
        <>
            <div className=' flex justify-end sticky top-20 z-auto'>
                {/* <div className=" text-xl text-heading font-poppins font-medium ml-8">
                    Welcome To Your Order Board
                </div> */}
            </div>
            <div className='mt-2'>
            <div class="rounded m-1 max-sm:m-1 p-1 w-[99%] overflow-auto shadow-[4px_0px_9px_3px_] shadow-[#a3abb980] bg-[#eaedf1]">
                <div className=" flex rounded  max-sm:hidden w-[99%] mt-1 p-1 bg-transparent font-bold sticky top-0 z-10">
        <div className=" w-[9.9rem] font-bold font-poppins"> <FormattedMessage
                                   id="app."
                                  defaultMessage="Order ID"
                                 /></div>
        <div className="w-[13.5rem] font-bold font-poppins"><FormattedMessage
                                   id="app.date"
                                  defaultMessage="Date"
                                 /></div>
        <div className="w-[20.2rem] font-bold font-poppins "><FormattedMessage
                                   id="app.delivery"
                                  defaultMessage="delivery"
                                 /></div>
        <div className=" w-[7.7rem] font-bold font-poppins"><FormattedMessage
                                   id="app.items"
                                  defaultMessage="Items"
                                 /></div>
        {/* <div className=" w-[4.5rem] font-normal font-poppins">  <ShoppingBagIcon /></div> */}
        {/* <div className="  w-[8.3rem] font-normal font-poppins "><FormattedMessage
                                   id="app.shipped"
                                  defaultMessage="Shipped"
                                 />
                                 </div> */}
        {/* <div className=" w-[6.6rem] font-normal font-poppins"><FormattedMessage
                                   id="app.expected"
                                  defaultMessage="expected"
                                 /> </div>
        <div className=" w-[8.12rem] font-normal font-poppins"><FormattedMessage
                                   id="app.final"
                                  defaultMessage="final"
                                 /> </div>
        <div className=" w-[21.2rem] font-normal font-poppins"><FormattedMessage
                                   id="app.revised"
                                  defaultMessage="revised"
                                 /> </div> */}
        <div className=" w-[1.2rem] font-normal font-poppins"></div>      
      </div>
      <InfiniteScroll
      dataLength={props.orderProcureData.length} // This is important to prevent reloading the same data
     next={handleInfiniteScroll}
     hasMore={hasMore}
     height={"76vh"}
    style={{width:"-webkit-fill-available",scrollbarWidth:"thin"}}
    loader={props.fetchingProcureOrderData?<p style={{textAlign:"center"}}>Loading...</p>:null} // Loader to display while loading more data
  initialLoad={true}
      //  loader={props.fetchingRequirementTabData}
    >
                    {props.orderProcureData.map((item) => {
                        const LocAdd = `${item.unLoadingAddress && item.unLoadingAddress[0].address1 || ""} ${item.unLoadingAddress && item.unLoadingAddress[0].city || ""}
                        ${item.unLoadingAddress && item.unLoadingAddress[0].state || ""} ${item.unLoadingAddress && item.unLoadingAddress[0].country || ""}
                        `;
                        
                        const currentdate = dayjs().format("YYYY/MM/DD");
                        const date = dayjs(item.creationDate).format("YYYY/MM/DD");
                        const result = currentdate === date
                        return (
                            <>

                                <div>
                                <div className="flex rounded justify-between  bg-white mt-1 h-8 items-center p-1 max-sm:h-[6rem] max-sm:flex-col scale-[0.99] hover:scale-100 ease-in duration-100 shadow  border-solid m-1 leading-3 hover:border  hover:border-[#23A0BE]  hover:shadow-[#23A0BE]  ">
                             
                             <div class="flex max-sm:justify-between max-sm:w-wk items-center">
                                        <div className=" flex border-l-2 border-green-500 bg-[#eef2f9] h-8  md:w-[9.1rem] ">                                          
                                            <div class=" text-xs  font-poppins">
                                                {item.newOrderNo}
                                                &nbsp;
                                                {result ? <span
                                                    class="blink text-red-600 font-semibold" 
                                                    // style={{ color: "red", fontWeight: "600" }}
                                                >New</span> : null}
                                            </div>
                                            
                                        </div>
                                        <div className=" flex bg-[#eef2f9] h-8 md:w-[10.7rem] ">
                                   <div class=" text-xs  font-poppins flex items-center">
                                          
                                   {`${dayjs(item.creationDate).format("DD-MM-YYYY")}`}
                                        </div>
                                </div>
                                </div>
                                <div class="flex bg-[#eef2f9]  max-sm:justify-between max-sm:w-wk items-center">
                                <div className=" flex h-8 md:w-[22rem] ">
                               <div class=" text-xs  font-poppins flex items-center">                                       
                                            {LocAdd}
                                        </div>
                                </div>
                                
                  </div>
                  <div class="flex max-sm:justify-between max-sm:w-wk items-center">
                                        <div className=" flex h-8 bg-[#eef2f9]  md:w-[3.2rem] ">                                         
                                            <div
                                                class=" text-xs   font-poppins cursor-pointer text-orange-700 font-semibold"
                                               
                                                onClick={() => {
                                                    handleRowData(item);
                                                    props.handleItemViewDrawer(true);                               
                                                }}
                                            >
                                                {item.itemCount}
                                            </div>
                                        </div>
                                        <div className=" flex h-8 bg-[#eef2f9]  md:w-[8.1rem] ">
                                             {/* Order Number */}                                      
                                            <div
                                                class=" text-base  font-poppins"
                                            // onClick={() => {
                                            //     props.handleOrderedPhoneModal(true);
                                            //     props.getPhoneDetails(item.orderId);
                                            // }}
                                            // style={{
                                            //     cursor: "pointer",
                                            //     color: "#042E8A",
                                            //   }}
                                            >
                                               
                                            </div>
                                        </div>
                                  

                                        <div className=" bg-[#eef2f9] h-8  md:w-24 ">
                                        <Link to="/repeatOrderInfo">
                                        <Button
                                                type='primary'
                                              onClick={() => {
                                                        props.repeatOrder(item.orderId);
                                                        handleRowData(item);
                                                    }}
                                                >
                                                    Repeat Order
                                                    </Button>
                                                    </Link>
                                            {/* {(item.customerPriceInd === true && item.priceConfirmInd === false) ? (
                                                <Popconfirm
                                                    onConfirm={() => props.confirmButtonClick({
                                                        priceConfirmInd: true,
                                                        orderConfirmedUserId: props.userId,
                                                        orderPhoneId: item.orderId,

                                                    },
                                                        item.orderId,
                                                        props.userId
                                                    )}
                                                    title="Confirm Order?" okText="Yes" cancelText="No">
                                                    <Button type='primary' style={buttonStyle}>  <FormattedMessage
                                   id="app.confirm"
                                  defaultMessage="confirm"
                                 /></Button>
                                                </Popconfirm>
                                            ) : item.priceConfirmInd === true ? <b class="text-blue-500">Confirmed</b> : null} 
                                              {item.dispatchInspectionInd === 3 ? (
                                                <Button
                                                type='primary'
                                                    style={buttonStyle}
                                                    onClick={() => {
                                                        props.handlePickUpModal(true);
                                                        handleRowData(item);
                                                    }}
                                                >
                                                    <FormattedMessage
                                   id="app.readytodispatch"
                                  defaultMessage="readytodispatch"
                                 /> </Button>
                                            ) : item.dispatchInspectionInd === 4 ? <b>Picked Up</b> : null}
                                             */}
                                        </div>
                                   
                                      
                                            <div style={{ filter: "drop-shadow(0px 0px 4px rgba(0,0,0,0.1 ))" }} class="rounded-full bg-white  md:w-5 h-5 cursor-pointer">
                                            <Tooltip title={<FormattedMessage
                                                                id="app.status"
                                                                defaultMessage="Status"
                                                            />}>
                                                                <EventRepeatIcon

                                                                    className="!text-base cursor-pointer"
                                                                    onClick={() => {
                                                                        props.handleStatuShowDrawer(true);
                                                                        handleRowData(item);
                                                                    }}
                                                                />
                                                            </Tooltip>
                                            </div>
                                            {/* <div style={{ filter: "drop-shadow(0px 0px 4px rgba(0,0,0,0.1 ))" }} class="rounded-full bg-red-700 w-5 h-5 mt-1 cursor-pointer">
                                            <NoteAltIcon
                                                    className="!text-base cursor-pointer text-[tomato]"
                                                    onClick={() => {
                                                        props.handleStatuShowDrawer(true);
                                                        handleSetParticularOrderData(item);
                                                    }}
                                                />

                                            </div> */}
                                                <div class="w-6">
        <span onClick={() => exportPDFAnnexure()}>
            <PictureAsPdfIcon className="!text-icon text-[red]"/>
                           </span>
          </div>
                                     
                                  
</div>
                                    </div>

                                </div>

                            </>

                        )
                    })}
</InfiniteScroll>
                </div >
            </div>
           <ProcureItemViewDrawer
           rowDatas={rowDatas}
           viewItemDrwr={props.viewItemDrwr}
           handleItemViewDrawer={props.handleItemViewDrawer}
           />
                     <ProcureStatusShowDrawer
           rowDatas={rowDatas}
           showStatusDrwr={props.showStatusDrwr}
           handleStatuShowDrawer={props.handleStatuShowDrawer}
           />
            
        </>
    );
};

const mapStateToProps = ({ myorder, auth, setting, requirement }) => ({
    addreviewOffer: myorder.addreviewOffer,
    viewItemDrwr: myorder.viewItemDrwr,
    orderedPhoneModal: myorder.orderedPhoneModal,
    orderProcureData: myorder.orderProcureData,
    userId: auth.userDetails.userId,
    addPickUp: myorder.addPickUp,
    showStatusDrwr:myorder.showStatusDrwr,
    fetchingProcureOrderData:myorder.fetchingProcureOrderData,
    repeatingOrderSuccess:myorder.repeatingOrderSuccess
});
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            getProcureOrderData,
            handleItemViewDrawer,
            handleStatuShowDrawer,
            repeatOrder
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(OrderInProgressCard);
const CatgryName = styled.div`
  font-size: 1rem;
  color: black;
    font-weight: 600;
    white-space: nowrap;
    @media only screen and (max-width: 600px) {
      width: 99%;
      font-size: 0.8rem;
  // text-overflow: ellipsis;
    white-space: nowrap;
    // overflow: hidden;
    }
`;
const SubCatgryName = styled.div`
  font-size: 1rem;
  color: black;
    font-weight: 600;
    white-space: nowrap;
    @media only screen and (max-width: 600px) {
      width: 85%;
      font-size: 0.8rem;
    white-space: nowrap;
    }
`;
