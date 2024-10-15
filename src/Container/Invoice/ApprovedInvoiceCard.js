
import React, { useEffect, useState,} from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Input, } from "antd";
import { MainForBroker } from '../../Components/UI/Layout';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FormattedMessage } from 'react-intl';
import { base_url2 } from "../../Config/Auth";
import axios from 'axios';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import jsPDF from "jspdf";
import "jspdf-autotable";

const { Search } = Input;

function ApprovedInvoiceCard(props) {

    const [rowDatas, setrowDatas] = useState("");
    const [hasMore, setHasMore] = useState(true);
    const [pageNo, setPageNo] = useState(0);

    const [drb, setDrb] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
        setLoading(true); 
        try {
            const response = await axios.get(`${base_url2}/dummy/repair/contact/${props.userId}/${pageNo}`,{
                headers: {
                  Authorization: "Bearer " + sessionStorage.getItem("token") || "",
                },
              }); 
            if (response.drb.length === 0) {
                setHasMore(false); 
            }
            setDrb(prevData => [...prevData, ...response.drb]); 
        } catch (error) {
            setError(error); 
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false); 
        }
    };

    fetchData();
}, [pageNo]);

    function handleRowData(item) {
        setrowDatas(item)
    }

    const handleInfiniteScroll = () => {
        setPageNo(pageNo + 1);
        // props.getOrderData(props.userId,pageNo);
         //fetchData(); // Fetch more data when scrolling
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
    
        doc.save('ApproveInvoice.pdf');
      };

      return (
        <>

            <div className='mt-2'>
                <MainForBroker className='!h-[72vh]'>
                <div className=" flex rounded  w-[99%] mt-1 p-1 bg-transparent font-bold sticky top-0 z-10">
        <div className=" w-[9.9rem] font-bold font-poppins"> <FormattedMessage
                                   id="app.invoice"
                                  defaultMessage="Invoice ID"
                                 /></div>
                                     <div className=" w-[9.9rem] font-bold font-poppins"> <FormattedMessage
                                   id="app.orderid"
                                  defaultMessage="Order ID"
                                 /></div>
        <div className=" w-[12.5rem] font-bold font-poppins"><FormattedMessage
                                   id="app.date"
                                  defaultMessage="Date"
                                 /></div>
        <div className="  w-[13.2rem] font-bold font-poppins "><FormattedMessage
                                   id="app.amount"
                                  defaultMessage="Amount"
                                 /></div>
                                  <div className="  w-[13.2rem] font-bold font-poppins "><FormattedMessage
                                   id="app.payment"
                                  defaultMessage="Payment"
                                 /></div>
        <div className=" w-[7.7rem] font-bold font-poppins"><FormattedMessage
                                   id="app.status"
                                  defaultMessage="Status"
                                 /></div>
       
        <div className=" w-[1.2rem] font-normal font-poppins"></div>      
      </div>
      <InfiniteScroll
      dataLength={drb.length} 
    //  next={handleInfiniteScroll}
     hasMore={hasMore}
     height={"62vh"}
    style={{width:"-webkit-fill-available"}}
    // loader={props.fetchingLeadsTabData?<p style={{textAlign:"center"}}>Loading More...</p>:null} // Loader to display while loading more data
  initialLoad={true}
      //  loader={props.fetchingRequirementTabData}
    >
                    {drb.map((item) => {
                      
                        return (
                            <>
                                <div>
                                <div className="flex rounded  mt-1 bg-white h-8 items-center p-1 border border-white ">
                                        <div className=" flex   w-[9.1rem] ">                                                                            
                                        </div>
                                        <div className=" flex  w-[10.7rem] ">
                                   <div class=" text-xs font-poppins flex items-center">
                                        </div>
                                </div>
                                <div className=" flex  w-[11.2rem] ">
                               <div class=" text-xs font-poppins flex items-center">    
                                        </div>

                            </div>
                                <div className=" flex  w-[7.12rem] ">
                                               
                      </div>
                                    </div>

                                    <div class="w-6">
        <span onClick={() => exportPDFAnnexure()}>
            <PictureAsPdfIcon className="!text-icon"/>
                           </span>
          </div> 
                                </div>

                            </>

                        )
                    })}
</InfiniteScroll>
                </MainForBroker >
            </div>
           
        </>
    );
};

const mapStateToProps = ({ myorder, auth, setting, requirement }) => ({
    userId: auth.userDetails.userId,
});
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {

        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(ApprovedInvoiceCard);
