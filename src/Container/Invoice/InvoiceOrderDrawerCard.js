
import React, { useEffect, useState,} from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Input, } from "antd";
import dayjs from "dayjs";
import { MainForBroker } from '../../Components/UI/Layout';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FormattedMessage } from 'react-intl';
import { base_url2 } from "../../Config/Auth";
import axios from 'axios';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import jsPDF from "jspdf";
import "jspdf-autotable";

const { Search } = Input;

function InvoiceOrderDrawerCard(props) {

    const [rowDatas, setrowDatas] = useState("");
    const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  const [data1, setData1] = useState([]);
  const [loading1, setLoading1] = useState(false);
   


  useEffect(() => {
    const fetchData1 = async () => {
        try {
          const response = await axios.get(`${base_url2}/invoice/b2bInvoiceItemList/${props.userId}/${props.rowDatas.procureOrderInvoiceId}`,{
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token") || "",
            },
          });
          setData1(response.data);
          setLoading1(false);
        } catch (error) {
          setError(error);
          setLoading1(false);
        }
      };

    fetchData1();
}, []);


    function handleRowData(item) {
        setrowDatas(item)
    }

      return (
        <>

<div className='mt-2'>
                <MainForBroker className='!h-[72vh]'>
                <div className=" flex rounded  w-[99%] mt-1 p-1 bg-transparent font-bold sticky top-0 z-10">
                                     <div className=" w-[9.9rem] font-bold font-poppins"> <FormattedMessage
                                   id="app.orderid"
                                  defaultMessage="Order ID"
                                 /></div>
        <div className=" w-[12.5rem] font-bold font-poppins"><FormattedMessage
                                   id="app.date"
                                  defaultMessage="Date"
                                 /></div>
        <div className="  w-[10.2rem] font-bold font-poppins "><FormattedMessage
                                   id="app.amount"
                                  defaultMessage="Amount"
                                 /></div>
                                 
        <div className=" w-[7.7rem] font-bold font-poppins"><FormattedMessage
                                   id="app.status"
                                  defaultMessage="Status"
                                 /></div>
        <div className="  w-[13.2rem] font-bold font-poppins "><FormattedMessage
                                   id="app.payment"
                                  defaultMessage="Payment"
                                 /></div>
        <div className=" w-[1.2rem] font-normal font-poppins"></div>      
      </div>
                     {data1.map((item) => {
                      
                      return (
                          <>
                              <div>
                              <div className="flex rounded border-l-2 border-green-500 bg-[#eef2f9] mt-1 h-8 items-center p-1 ">
                                      <div className=" flex bg-[#eef2f9] w-[10.7rem] ">
                                 <div class=" text-xs font-poppins flex items-center">
                                 {item.newOrderNo}  
                                      </div>
                              </div>
                              <div className=" text-xs font-poppins flex items-center  bg-[#eef2f9] w-[11.2rem] ">
                             <div class=" text-xs font-poppins flex items-center"> 
                             {`${dayjs(item.creationDate).format("DD-MM-YYYY")}`} 
                                      </div>

                          </div>
                          <div className=" text-xs font-poppins flex items-center bg-[#eef2f9]  w-[11.12rem] ">
                              CA$ {Number(item.totalValue).toFixed(2)} 
                    </div>
                              <div className=" text-xs font-poppins flex items-center bg-[#eef2f9] w-[5.12rem] ">
                              {item.paidInd ? "Paid" :"Unpaid"} 
                    </div>
                    <div className=" text-xs font-poppins flex items-center bg-[#eef2f9]  w-[5.12rem] ">
                                          {/* {item.paym}    */}
                    </div>

                    <div class="w-6">
                    <a
              href={`${base_url2}/customer/pdf/${item.orderId}`}
            target="_blank"
            >
            <PictureAsPdfIcon className="!text-icon text-[red]"/>
                           </a>
          </div>
                                  </div>

                                  
                              </div>

                          </>

                      )
                  })}
{/* </InfiniteScroll> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceOrderDrawerCard);
