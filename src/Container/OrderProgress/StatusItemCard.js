import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FormattedMessage } from 'react-intl';
import { Button} from "antd";
import { base_url2 } from "../../Config/Auth";
import axios from 'axios';
import dayjs from "dayjs";

function StatusItemCard (props) {
  
const [pageNo, setPageNo] = useState(0);
const [hasMore, setHasMore] = useState(true);


useEffect(()=>{
    // props.getProcureStatusItem(props.rowDatas.orderId);
},[]);


const [RowData, setRowData] = useState("");

function handleSetRowData(item) {
    setRowData(item);
}
const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const ReceiveClick = async (item) => {
   const receiveInd = true;

    try {
      const result = await axios.put(`${base_url2}/phoneOrder/receiveOrder/${props.rowDatas.orderId}/${item.productId}/${receiveInd}`,{
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token") || "",
        },
      });
      setResponse(result.data);
      console.log(result.data);
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };

  const [CancelItem, setCancelItem] = useState(null);
  const [errorC, setErrorC] = useState(null);

  const CancelItemRequest = async (item) => {
    try {
      const respoCancel = await axios.post(`${base_url2}/phoneOrder/cancelOrder/${item.itemId}`,{},
       { headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token") || "",
        },
      });
      setCancelItem(respoCancel.data);
      console.log(respoCancel.data);
    } catch (errorC) {
      setErrorC(errorC);
      console.error(errorC);
    }
  };

    return (
        <>
             <div> 
                      
             <div className=' flex  sticky flex-col z-auto'>
             <div class="rounded m-1 max-sm:m-1 p-1 w-[99%] overflow-auto shadow-[4px_0px_9px_3px_] shadow-[#a3abb980] bg-[#eaedf1]">
             <div className=" flex rounded ml-4  max-sm:hidden w-[99%] mt-1 p-1 bg-transparent font-bold sticky  z-10">
             <div className=" md:w-[11.5rem]"><FormattedMessage
                                        id="app.name"
                                        defaultMessage="Name"
                                    /></div>
                                     <div className=" md:w-[9.51rem]"><FormattedMessage
                                       id="app."
                                        defaultMessage="Category"
                                    /></div>
                                        <div className=" md:w-[5.52rem]"><FormattedMessage
                                       id="app."
                                        defaultMessage="Attribute"
                                    /></div>
                                    <div className=" md:w-[6.5rem]"><FormattedMessage
                                       id="app.itemid"
                                        defaultMessage="Item ID"
                                    /></div>
                                     <div className=" md:w-[6.1rem]"><FormattedMessage
                                        id="app.units"
                                        defaultMessage="Units"
                                    /></div>
                                    <div className=" md:w-[5.1rem]"><FormattedMessage
                                        id="app.shipped"
                                        defaultMessage="Shipped"
                                    /></div>
                                    <div className="md:w-[6.2rem]"><FormattedMessage
                                        id="app.trackingid"
                                        defaultMessage="Tracking ID "
                                    /></div>
        
                                    {/* <div className=" md:w-[6.5rem]"><FormattedMessage
                                        id="app.price"
                                        defaultMessage="Price"
                                    /></div> */}
                        
                                   
                                    <div className=" md:w-8"></div>
                 
                                </div>
                               <div>
                                    {/* <InfiniteScroll
                                        dataLength={props.orderProcureDetails.length}
                                        loader={props.fetchingProcureOrderDetails ? <div class="flex justify-center">Loading...</div> : null}
                                  
     hasMore={hasMore}
     
                                        height={"65vh"}
                                    > */}
                                        {props.statusItems.orderItemInfo && props.statusItems.orderItemInfo.map((item) => {
                                            const currentdate = dayjs().format("YYYY/MM/DD");
                                            return (
                                                <div>
                                                    <div
                className="flex rounded justify-between  bg-white mt-1 h-8 items-center p-1 max-sm:h-[5rem] max-sm:flex-col scale-[0.99] hover:scale-100 ease-in duration-100 shadow  border-solid m-1 leading-3 hover:border  hover:border-[#23A0BE]  hover:shadow-[#23A0BE]  ">
                                                         <div class="flex max-sm:justify-between max-sm:w-wk items-center">
                                                            <div className=" flex   md:w-[12rem] max-sm:flex-row max-sm:justify-between  ">
                                                                <div class=" text-xs font-bold   font-poppins">
                                                                    {item.productFullName}
                                                                </div>
                                                            </div>

                                                            <div className=" flex   md:w-[10.23rem] max-sm:flex-row  max-sm:justify-between  ">
                                                                <div title={item.category}
                                                                 class=" text-xs font-bold text-cardBody font-poppins truncate max-w-[9rem]">
                                                                    {item.category} 
                                                                </div>

                                                            </div>
                                                            <div className=" flex   md:w-[4.5rem] max-sm:flex-row  max-sm:justify-between  ">
                                                                <div class=" text-xs font-bold   font-poppins">
                                                                    {item.attribute}
                                                                </div>
                                                            </div>
                                                            <div className=" flex   md:w-[8rem] max-sm:flex-row  max-sm:justify-between  ">
                                                                <div class=" text-xs font-bold   font-poppins">
                                                                    {item.newProductId}
                                                                </div>
                                                            </div>
                                                            <div className=" flex   md:w-[5rem] max-sm:flex-row  max-sm:justify-between  ">
                                                                <div class=" text-xs font-bold   font-poppins">
                                                                    {item.unit}
                                                                </div>
                                                            </div>
                                                            <div className=" flex   md:w-[5rem] max-sm:flex-row  max-sm:justify-between  ">
                                                                <div class=" text-xs font-bold   font-poppins">
                                                                {item.shippingDate} 
                                                                </div>
                                                        
                                                            </div>
                                                            
                                                            <div className=" flex   md:w-[5rem] max-sm:flex-row  max-sm:justify-between  ">
                                                                <div class=" text-xs font-bold   font-poppins">
                                                                {item.shippingNo} 
                                                                </div>
                                                        
                                                            </div>
                                                            </div>
                                                            {/* {item.shippingDate !== currentdate} */}
                                                            <div class="flex max-sm:justify-between max-sm:w-wk items-center">                                                 
                                                            <Button type="primary"
                                                            onClick={() =>
                                                                ReceiveClick(item)}
                                                            >
                                                Receive
                                                </Button>
                                                        </div>
                                                        <div class="flex max-sm:justify-between max-sm:w-wk items-center">                                                 
                                                            <Button type="primary"
                                                            onClick={() =>
                                                                CancelItemRequest(item)}
                                                            >
                                                Cancel
                                                </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                    
                                            )
                                        })}
                                    {/* </InfiniteScroll> */}
                                </div>
                            </div>

                        </div>
               
        </div>
                
            
            
        </>
    );
}
const mapStateToProps = ({ myorder}) => ({
    // phonListNoteModal: myorder.phonListNoteModal,
    // orderProcureDetails:myorder.orderProcureDetails,
    // openFeedbackpHnOrDrawer:myorder.openFeedbackpHnOrDrawer,
    // fetchingPhoneData:myorder.fetchingPhoneData
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            // getProcureStatusItem,
            // handlePhoneListOrderNoteModal,
            // handleFeedbackPhoneOrderDrawer,

        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StatusItemCard);

