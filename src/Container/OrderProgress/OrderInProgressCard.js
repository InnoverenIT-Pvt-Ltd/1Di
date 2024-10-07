
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
      return (
        <>
            <div className=' flex justify-end sticky top-20 z-auto'>
                {/* <div className=" text-xl text-heading font-poppins font-medium ml-8">
                    Welcome To Your Order Board
                </div> */}
            </div>
            <div className='mt-2'>
            <div class="rounded m-1 max-sm:m-1 p-1 w-[99%] overflow-auto shadow-[4px_0px_9px_3px_] shadow-[#a3abb980] bg-[#eaedf1]">
                <div className=" flex rounded ml-4  max-sm:hidden w-[99%] mt-1 p-1 bg-transparent font-bold sticky top-0 z-10">
        <div className=" w-[8.9rem] font-bold font-poppins"> <FormattedMessage
                                   id="app."
                                  defaultMessage="Order ID"
                                 /></div>
        <div className=" w-[12.5rem] font-bold font-poppins"><FormattedMessage
                                   id="app.created"
                                  defaultMessage="Created"
                                 /></div>
        <div className="  w-[7.2rem] font-bold font-poppins ">Shipping</div>
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
     height={"85vh"}
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
                                <div
                className="flex rounded  bg-white mt-1 h-8 items-center p-1 max-sm:h-[6rem] max-sm:flex-col scale-[0.99] hover:scale-100 ease-in duration-100 shadow  border-solid m-1 leading-3 hover:border  hover:border-[#23A0BE]  hover:shadow-[#23A0BE]  ">
                             
                             <div class="flex max-sm:justify-between max-sm:w-wk items-center">
                                        <div className=" flex   md:w-[9.1rem] ">                                          
                                            <div class=" text-xs  font-poppins">
                                                {item.newOrderNo}
                                                &nbsp;
                                                {result ? <span
                                                    class="blink text-red-600 font-semibold" 
                                                    // style={{ color: "red", fontWeight: "600" }}
                                                >New</span> : null}
                                            </div>
                                            
                                        </div>
                                        <div className=" flex  md:w-[5.7rem] ">
                                   <div class=" text-xs  font-poppins flex items-center">
                                          
                                   {`${dayjs(item.creationDate).format("DD-MM-YYYY")}`}
                                        </div>
                                </div>
                                </div>
                                <div className=" flex  md:w-[15.2rem] ">
                               <div class=" text-xs  font-poppins flex items-center">                                       
                                            {LocAdd}
                                        </div>
                                </div>
                                {/* <div class=" max-sm:justify-between max-sm:w-wk items-center">
                                <div className=" flex  md:w-[18.2rem] ">
                               <div class=" text-xs  font-poppins flex items-center">                                       
                                            {LocAdd}
                                        </div>
                                </div>
                                <div className=" flex  md:w-[16.12rem] ">
                    
                    <div class=" text-xs  font-poppins">  
                            
                      </div>
                  </div>
                  </div> */}
                  
                  <div className=" flex  md:w-[3.2rem] ">                                         
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
                                        <div className=" flex  md:w-[15.2rem] ">
                               <div class=" text-xs  font-poppins flex items-center">                                       
                                            
                                        </div>
                                </div>
                  <div class="flex max-sm:justify-between max-sm:w-wk items-center">
                                        
                                      
                                        <div style={{ filter: "drop-shadow(0px 0px 4px rgba(0,0,0,0.1 ))" }} class="rounded-full bg-white md:w-20 h-5  ml-2 cursor-pointer">
                                            <Button 
                                                type='primary' 
                                                style={{ backgroundColor:"green"}}
                                                onClick={() => {
                                                    props.handleStatuShowDrawer(true);
                                                    handleRowData(item);
                                                }}
                                                >
                                                   Status
                                                    </Button>
                                            {/* <Tooltip title={<FormattedMessage
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
                                                            </Tooltip> */}
                                            </div>

                                        <div className="   md:w-24 ">
                                        <Link to="/repeatOrderInfo">
                                        <Button
                                                type='primary'
                                              onClick={() => {
                                                        props.repeatOrder({ordreId:item.orderId});
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
