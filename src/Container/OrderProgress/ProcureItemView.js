import React, { useState, useEffect,lazy } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FormattedMessage } from 'react-intl';
import InfiniteScroll from "react-infinite-scroll-component";
import {getProcureOrderDetails,  repeatOrder} from "../MyOrder/MyOrderAction";
import {  Button } from "antd";
import dayjs from "dayjs";
import { base_url2 } from "../../Config/Auth";
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProcureItemView (props) {
  
const [pageNo, setPageNo] = useState(0);
const [hasMore, setHasMore] = useState(true);


useEffect(()=>{
    props.getProcureOrderDetails(props.rowDatas.orderId);
},[]);


const [RowData, setRowData] = useState("");

function handleSetRowData(item) {
    setRowData(item);
}
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
             <Link to="/repeatOrderInfo">
             <Button
                                                type='primary'
                                              onClick={() => {
                                                        props.repeatOrder();
                                                       
                                                    }}
                                                >
                                                    Repeat Order
                                                    </Button>  
                                                    </Link>
                                                    <div className=' flex justify-end sticky flex-col z-auto'>
<div class="rounded m-1 max-sm:m-1 p-1 w-[99%] overflow-auto shadow-[4px_0px_9px_3px_] shadow-[#a3abb980] bg-[#eaedf1]">
<div className=" flex rounded  max-sm:hidden w-[99%] mt-1 p-1 bg-transparent font-bold sticky top-0 z-10">
                                    <div className=" md:w-[10rem]"><FormattedMessage
                                        id="app.name"
                                        defaultMessage="Name"
                                    /></div>
                                    <div className="md:w-[6.2rem]"><FormattedMessage
                                        id="app.brand"
                                        defaultMessage="Brand"
                                    /></div>
                                    <div className=" md:w-[4.5rem]"><FormattedMessage
                                        id="app.model"
                                        defaultMessage="Model"
                                    /></div>
                                    <div className=" md:w-[5rem]"><FormattedMessage
                                        id="app.category"
                                        defaultMessage="Category"
                                    /></div>
                                    <div className=" md:w-[6.5rem]"><FormattedMessage
                                        id="app.attribute"
                                        defaultMessage="Attribute"
                                    /></div>
        
                                    <div className=" md:w-[5.3rem]"><FormattedMessage
                                        id="app.price"
                                        defaultMessage="Price"
                                    /></div>
                         <div className=" md:w-[6.5rem]"><FormattedMessage
                                        id="app.units"
                                        defaultMessage="Units"
                                    /></div>
                                   
                                    <div className=" md:w-[2rem]"></div>
                 
                                </div>
                              
                                    <InfiniteScroll
                                        dataLength={props.orderProcureDetails.length}
                                        loader={props.fetchingProcureOrderDetails ? <div class="flex justify-center">Loading...</div> : null}
                                        hasMore={hasMore}
                                        height={"85vh"}
                                    >
                                        {props.orderProcureDetails.map((item) => {
                                            return (
                                                <div>
                                                   <div
                className="flex rounded justify-between  bg-white mt-1 h-8 items-center p-1 max-sm:h-[6rem] max-sm:flex-col scale-[0.99] hover:scale-100 ease-in duration-100 shadow  border-solid m-1 leading-3 hover:border  hover:border-[#23A0BE]  hover:shadow-[#23A0BE]  ">
                                                         <div class="flex max-sm:justify-between max-sm:w-wk items-center">
                                                            <div className="font-medium  border-l-2 border-green-500 bg-[#eef2f9] h-8 md:w-[10rem] max-sm:flex-row  max-sm:justify-between  ">
                                                                <div class=" text-xs text-cardBody font-poppins truncate max-w-[9rem]">
                                                                    {item.productFullName}
                                                                </div>
                                                            </div>
                                                            
                                                            <div className=" flex font-medium bg-[#eef2f9] h-8  md:w-[6rem] max-sm:flex-row  max-sm:justify-between  ">
                                                                <div class=" text-xs text-cardBody font-poppins">
                                                                {item.brand}
                                                                </div>

                                                            </div>
                                                            <div className=" flex font-medium bg-[#eef2f9] h-8 md:w-[5rem] max-sm:flex-row  max-sm:justify-between  ">
                                                                <div class=" text-xs text-cardBody font-poppins">
                                                                {item.model}
                                                                </div>

                                                            </div>
                                                            {/* <div className=" flex font-medium   md:w-[6rem] max-sm:flex-row  ">
                                                                <div class=" text-xs text-cardBody font-poppins">
                                                                {item.model} 
                                                                </div>
                                                            </div> */}
                                                            
                                                            <div className=" flex font-medium bg-[#eef2f9] h-8  md:w-[5rem] max-sm:flex-row  max-sm:justify-between  ">
                                                                <div class=" text-xs text-cardBody font-poppins truncate max-w-[9rem]">
                                                                    {item.category}
                                                                </div>
                                                            </div>
                                                         
                                                           
                                                            <div className=" flex font-medium bg-[#eef2f9] h-8  md:w-[7rem] max-sm:flex-row  max-sm:justify-between  ">
                                                                <div class=" text-xs text-cardBody font-poppins">
                                                                    {item.attribute} 
                                                                </div>
                                                            </div>
                                                    
                                                            <div className=" flex font-medium bg-[#eef2f9] h-8  md:w-[5rem] max-sm:flex-row  max-sm:justify-between  ">
                                                                <div class=" text-xs text-cardBody font-poppins">
                                                                    {item.price} 
                                                                </div>
                                                            </div>     
                                                            <div className=" flex font-medium bg-[#eef2f9] h-8  md:w-[5rem] max-sm:flex-row  max-sm:justify-between  ">
                                                                <div class=" text-xs text-cardBody font-poppins">
                                                                    {item.unit} 
                                                                </div>
                                                            </div>   
                                                            </div> 
                                                            <Button
                                                type='primary'
                                                onClick={() => {
                                                    CancelItemRequest(item)
                                                        }}
                                                >
                                                    Cancel Order
                                                    </Button>  
                                                        </div>

                                                    </div>
                                       
                                            )
                                        })}
                                    </InfiniteScroll>
                               
                            </div>

                        </div>
               
        
                
            </div>
            
        </>
    );
}
const mapStateToProps = ({ myorder}) => ({
    // phonListNoteModal: myorder.phonListNoteModal,
    orderProcureDetails:myorder.orderProcureDetails,
    // openFeedbackpHnOrDrawer:myorder.openFeedbackpHnOrDrawer,
    fetchingProcureOrderDetails:myorder.fetchingProcureOrderDetails
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            getProcureOrderDetails,
            repeatOrder
            // handlePhoneListOrderNoteModal,
            // handleFeedbackPhoneOrderDrawer,

        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProcureItemView);

