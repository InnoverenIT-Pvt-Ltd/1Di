import React, { useEffect, useState,} from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import { Tooltip, Input,Button} from "antd";
import { withRouter,useHistory  } from "react-router-dom";
import styled from 'styled-components';
import { MainForBroker } from '../../Components/UI/Layout';
import {
    getProcureQuotation,   handleItemViewDrawer,
} from "../MyOrder/MyOrderAction";
import { codInventoryOrder } from '../Inventory/InventoryAction';
import dayjs from "dayjs";
import InfiniteScroll from 'react-infinite-scroll-component';
import { FormattedMessage } from 'react-intl';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import jsPDF from "jspdf";
import "jspdf-autotable";
import ProcureQuotationItemViewDrawer from '../OrderProgress/ProcureQuotationItemViewDrawer';
import { base_url2 } from '../../Config/Auth';

const { Search } = Input;

function ProcureQuotationCard(props) {
    const history = useHistory();

    useEffect(() => {
        props.getProcureQuotation(props.userId,pageNo,"procure");
    }, [props.userId])
    
    const [rowDatas, setrowDatas] = useState("");
    const [hasMore, setHasMore] = useState(true);
    const [pageNo, setPageNo] = useState(0);
    function handleRowData(item) {
        setrowDatas(item)
    }
    const handleInfiniteScroll = () => {
        setPageNo(pageNo + 1);
        props.getProcureQuotation(props.userId,pageNo,"procure");
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
    
        doc.save('Quotation.pdf');
      };

      const handleConvert = (item) =>{
        props.codInventoryOrder({
            amount: item.amount,
            quotationId: item.quotationId,
            type: "Cod",
            orderProcess:"checkout"
        });
        history.push(`/shopName/invOrdersuccess`);
      }
    
      return (
        <>
            <div className='mt-1'>
                <MainForBroker className='!h-[91vh]'>
                <div className=" flex rounded w-[99%] mt-1 p-1 bg-transparent font-bold sticky top-0 z-10">
        <div className=" w-[15.9rem] font-bold font-poppins"> <FormattedMessage
                                   id="app."
                                  defaultMessage="Quotation ID"
                                 /></div>
        <div className=" w-[17rem] font-bold font-poppins"><FormattedMessage
                                   id="app.created"
                                  defaultMessage="Created"
                                 /></div>
        <div className="w-[12rem] font-bold font-poppins "><FormattedMessage
                                   id="app.delivery"
                                  defaultMessage="delivery"
                                 /></div>
                   
        <div className=" w-[7.7rem] font-bold font-poppins"><FormattedMessage
                                   id="app.items"
                                  defaultMessage="Items"
                                 /></div>
      
        <div className=" w-[1.2rem] font-normal font-poppins"></div>      
      </div>
      <InfiniteScroll
      dataLength={props.orderProcureQuoatation.length} // This is important to prevent reloading the same data
     next={handleInfiniteScroll}
     hasMore={hasMore}
     height={"76vh"}
    style={{width:"-webkit-fill-available"}}
    // loader={props.fetchingLeadsTabData?<p style={{textAlign:"center"}}>Loading More...</p>:null} // Loader to display while loading more data
  initialLoad={true}
      //  loader={props.fetchingRequirementTabData}
    >
                    {props.orderProcureQuoatation.map((item) => {
                     const LocAdd = `${item.loadingAddress && item.loadingAddress[0].city || ""}`;
                     const LocAdd1 = `${item.unloadingAddress && item.unloadingAddress[0].city || ""}`;
                     const country = `${item.loadingAddress && item.loadingAddress[0].countryAlpha2Code || ""}`
                     const country1 = `${item.unloadingAddress && item.unloadingAddress[0].countryAlpha2Code || ""}`
                     const currentdate = dayjs().format("YYYY/MM/DD");
                     const date = dayjs(item.creationDate).format("YYYY/MM/DD");
                     const result = currentdate === date
                     return (
                         <>
                           <div>
                             <div className="flex rounded justify-between  mt-1 bg-white h-8 items-center p-1 border border-white ">
                            

                                     <div className=" flex border-l-2 border-green-500 bg-[#eef2f9] h-8 w-[9.1rem] ">                                          
                                         <div class=" text-xs  font-poppins">
                                            
                                             {item.newOrderNo}   {result ? <span
                                                 // className="blink" 
                                                 style={{ color: "red", fontWeight: "600" }}
                                             >New</span> : null}
                                         </div>
                                     </div>
                                     <div className=" flex bg-[#eef2f9] h-8 w-[7.12rem] ">
                 
                                      <div class=" text-xs  font-poppins">                     
                                        {`  ${dayjs(item.deliveryFromDate).format("DD-MM-YYYY")}`}
                                        </div>
                                     </div>
                                      <div className=" flex bg-[#eef2f9] h-8 w-[6.2rem] ">
                                     <div class=" text-xs  font-poppins flex items-center">
                                                 
                                                     {country1}
                                                     &nbsp;
                                                     {LocAdd1}
                                                 </div>

                                         </div>
                                         
                                     <div className=" flex  bg-[#eef2f9] h-8 w-[3.2rem] ">                                       
                                             {/* <SmartphoneIcon /> */}
                                      
                                         <div
                                             class=" text-xs font-poppins cursor-pointer text-[#3597b0] font-semibold"
                                            
                                             onClick={() => {
                                                 handleRowData(item);
                                                 props.handleItemViewDrawer(true);
                                             }}
                                         >
                                            {item.itemCount}
                                         </div>
                                     </div>
                                     
                               
                                     <div class="flex justify-end  items-center">
                                     <div className=" bg-[#eef2f9] h-8  w-32 ">
                                     {/* <Link to={`shopName/invopayment`}> */}
                                         <Button type="primary" onClick={() => {
                                                        handleConvert(item);
                                                        // handleRowData(item);
                                                    }}>
                                             Convert to Order
                                             </Button>
                                             {/* </Link> */}
                                       
                                     </div>
                                   
                                   
                                         <div >
                                         {/* <Tooltip title={<FormattedMessage
                                                             id="app.status"
                                                             defaultMessage="Feedback"
                                                         />}>
                                                             <EventRepeatIcon

                                                                 className="!text-base cursor-pointer"
                                                                 // onClick={() => {
                                                                 //     props.handleStatusOfOrder(true);
                                                                 //     handleSetParticularOrderData(item);
                                                                 // }}
                                                             />
                                                         </Tooltip> */}
                              {/* <Button 
                                             type='primary' 
                                             style={{ backgroundColor:"green"}}
                                             // onClick={() => {
                                             //     props.handleStatuShowDrawer(true);
                                             //     handleRowData(item);
                                             // }}
                                             >
                                                Status
                                                 </Button> */}
                                         </div>
                                         {/* <div style={{ filter: "drop-shadow(0px 0px 4px rgba(0,0,0,0.1 ))" }} class="rounded-full  w-5 h-5 mt-1 cursor-pointer">
                                         <NoteAltIcon
                                                 className="!text-base cursor-pointer text-green-600"
                                                 // onClick={() => {
                                                 //     props.handleFeedbackOrderDrawer(true);
                                                 //     handleSetParticularOrderData(item);
                                                 // }}
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
                </MainForBroker >
            </div>
          
            <ProcureQuotationItemViewDrawer
           rowDatas={rowDatas}
           viewItemDrwr={props.viewItemDrwr}
           handleItemViewDrawer={props.handleItemViewDrawer}
           /> 
            
        </>
    );
};

const mapStateToProps = ({ myorder, auth, setting, requirement }) => ({
    // addreviewOffer: myorder.addreviewOffer,
    viewItemDrwr: myorder.viewItemDrwr,
    // orderedPhoneModal: myorder.orderedPhoneModal,
    orderProcureQuoatation: myorder.orderProcureQuoatation,
    userId: auth.userDetails.userId,
    // addPickUp: myorder.addPickUp

});
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            getProcureQuotation,
            handleItemViewDrawer,
            codInventoryOrder
        },
        dispatch
    );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProcureQuotationCard));

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
