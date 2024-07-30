import React, { useEffect, useState,} from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { DeleteOutlined } from "@ant-design/icons";
import { Tooltip, Button, Input, Popconfirm, Badge } from "antd";
import styled from 'styled-components';
import {
    handleReviewOfferModal,
    handleAddOrderModal,
    handleOrderedPhoneModal,
    getOrderData,
    confirmButtonClick,
    handlePickUpModal,
    handleStatusOfOrder,
    handleFeedbackOrderDrawer,
    handleStarOrderDrawer
} from "./MyOrderAction"
import dayjs from "dayjs";
import ReviewOfferModal from './ReviewOfferModal';
import AddNewOrder from './Child/AddNewOrder';
import PhoneListModal from './Child/PhoneListModal';
import AddPickUpModal from './Child/AddPickUpModal';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FormattedMessage } from 'react-intl';
import BorderColorIcon from "@mui/icons-material/BorderColor";
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import StatusOfOrderModal from './StatusOfOrderModal';
import FeedbackOrderDrawer from './Child/FeedbackOrderDrawer';
import StarOrderDrawer from './Child/StarOrderDrawer';
const { Search } = Input;

function MyOrder(props) {

    // const buttonStyle = {
    //     borderRadius: "1rem",
    //     fontSize: "1rem",
    //     color: "white",
    //     padding: "0.25rem 0.75rem",
    //     border: "1px solid #e2e2e2",
    //     fontFamily: 'Poppins'
    // }
    const [pageNo, setPageNo] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [particularRowData, setParticularRowData] = useState({});
    
    useEffect(() => {
        setPageNo(pageNo + 1);
        props.getOrderData(props.userId,pageNo);
    }, [props.userId]);
    
    const [rowDatas, setrowDatas] = useState("");
    function handleRowData(item) {
        setrowDatas(item)
    }
    function handleSetParticularOrderData(item) {
        setParticularRowData(item);
    }
    // const fetchData = () => {

    //     props.getOrderData(props.userId,pageNo)
    //   };
      
      
    //   useEffect(() => {
    //     fetchData();
    //   }, []); // Empty dependency array means it runs only once on mount
     
    const handleLoadMore = () => {
        const PageMapd = props.orderListData && props.orderListData.length &&props.orderListData[0].pageCount
        setTimeout(() => {  
          if  (props.orderListData)
          {
            if (pageNo < PageMapd) {    
                setPageNo(pageNo + 1);
        props.getOrderData(props.userId,pageNo);
                }
                  if (pageNo === PageMapd){
                    setHasMore(false)
                  }
                }
                }, 100);
            }
    const drb = [{expectedPrice:20,
        priceConfirmInd:false
    }]
    return (
        <>
            <div className='flex justify-end sticky top-20 z-auto'>
                <div style={{ textAlign: "end" }}>
                    <Button
                    type="primary"
                        // className="bg-white  rounded-full font-poppins md:text-lg ml-2 font-bold  md:px-7 py-1 md:shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={() => props.handleAddOrderModal(true)}
                    >
                        + <FormattedMessage
                                   id="app.addorder"
                                  defaultMessage="Add
                                  Order"
                                 />
                    </Button>
                    {/* <button
                        className="bg-white  rounded-full font-poppins  md:text-lg ml-4 font-bold  md:px-7 py-1 md:shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onClick={() => props.handlePriceRequestModal(true)}
                    >
                        + Send A Price Request

                    </button> */}
                </div>
            </div>
            <div className=' mt-2'>
            <div class="rounded m-1 max-sm:m-1 p-1 w-[99%] overflow-auto shadow-[4px_0px_9px_3px_] shadow-[#a3abb980] bg-[#eaedf1]">
            <div className=" flex rounded  max-sm:hidden w-[99%] mt-1 p-1 bg-transparent font-bold sticky top-0 z-10">
                <div className="  w-[12rem] font-poppins ">
                                  Order ID
                                </div>
                                <div className=" w-[12rem]  font-poppins"> <FormattedMessage
                                   id="app.created"
                                  defaultMessage="Created"
                                 /></div>
        <div className=" w-[12.5rem]  font-poppins"><FormattedMessage
                                   id="app.pickup"
                                  defaultMessage="pickup"
                                 /></div>
        <div className="  w-[13.2rem]  font-poppins "><FormattedMessage
                                   id="app.delivery"
                                  defaultMessage="delivery"
                                 /></div>
        <div className=" w-[9.7rem]  font-poppins"><FormattedMessage
                                   id="app.deliverydate"
                                  defaultMessage="deliverydate"
                                 /></div>
        {/* <div className=" w-[4.5rem]  font-poppins">  <ShoppingBagIcon /></div> */}    
        <div className=" w-[6.6rem]  font-poppins"><FormattedMessage
                                   id="app.quoted"
                                  defaultMessage="Quoted"
                                 /> </div>
        <div className=" w-[8.12rem]  font-poppins"><FormattedMessage
                                   id="app.final"
                                  defaultMessage="final"
                                 /> </div>
        <div className=" w-[21.2rem] font-poppins"><FormattedMessage
                                   id="app.revised"
                                  defaultMessage="revised"
                                 /> </div>
        <div className=" w-[1.2rem] font-poppins"></div>      
      </div>
    
      <InfiniteScroll
      dataLength={props.orderListData.length} // This is important to prevent reloading the same data
     next={handleLoadMore}
     hasMore={hasMore}
     height={"62vh"}
    style={{width:"-webkit-fill-available"}}
    loader={props.fetchingOrderData?<div class="flex justify-center">Loading...</div>:null}
    endMessage={ <p class="fles text-center font-bold text-xs text-red-500">You have reached the end of page</p>}
    >
                    {
                    props.orderListData
                    .map((item) => {
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
                                <div
                className="flex rounded justify-between  bg-white mt-1 h-8 items-center p-1 max-sm:h-[9rem] max-sm:flex-col scale-[0.99] hover:scale-100 ease-in duration-100 shadow  border-solid m-1 leading-3 hover:border  hover:border-[#23A0BE]  hover:shadow-[#23A0BE]  ">
                              
                              <div class="flex max-sm:justify-between max-sm:w-wk items-center">
                                        <div className=" flex  md:w-[10rem] ">                                          
                                            <div class=" font-bold text-xs font-poppins">
                                                {result ? <span
                                                    // className="blink" 
                                                    style={{ color: "red", fontWeight: "600" }}
                                                >New</span> : null}
                                                {/* Order Date:  */}
                                                <Badge       count={item.count ? `${item.count}`:""}
                overflowCount={999} style={{marginRight:"-0.7rem"}}>
                                                <div
                                                class=" underline cursor-pointer text-[#1890ff] text-xs font-bold font-poppins"
                                                onClick={() => {
                                                    handleRowData(item);
                                                    props.handleOrderedPhoneModal(true);
                                                    // props.getPhoneDetails(item.orderId);
                                                }}>
                                                {item.newOrderNo}
                                            </div>
                                            </Badge>
                                            </div>
                                            {/* <div class=" text-base font-poppins">
                                                <ReactCountryFlag
                                                    countryCode={country}
                                                    svg
                                                    style={{
                                                        width: '1em',
                                                        height: '1em',
                                                    }}
                                                    title={country}
                                                />
                                                &nbsp;
                                                {country}
                                                &nbsp;
                                                {LocAdd}
                                            </div> */}
                                        </div>
                                        <div className=" flex  md:w-[9.1rem] ">
                                            <div class=" text-xs font-poppins">
                                            {`  ${dayjs(item.creationDate).format("DD-MM-YYYY")}`}
                                            </div>
                                            
                                            
                                        </div>
                                        </div>
                                        <div class="flex max-sm:justify-between max-sm:w-wk items-center">
                                        <div className=" flex   md:w-[10.7rem] ">
                                   <div class="  text-xs font-poppins flex items-center">
                                          
                                            {country},
                                            &nbsp;
                                            {LocAdd}
                                        </div>

                                </div>
                                <div className=" flex   md:w-[11.2rem] ">
                               <div class="  text-xs font-poppins flex items-center">
                                          
                                            {country1},
                                            &nbsp;
                                            {LocAdd1}
                                        </div>

                                </div>
                                </div>
                                <div class="flex max-sm:justify-between max-sm:w-wk items-center">
                                <div className=" flex   md:w-[7.12rem] ">
                    
                    <div class="  text-xs font-poppins">                     
                        {`  ${dayjs(item.deliveryFromDate).format("DD-MM-YYYY")}`}</div>
                  </div>
                                 
                                       
                                        <div className=" flex    md:w-[6.2rem] ">                                      
                                                {/* Expected Price     */}

                                            <div class="  text-xs font-poppins">
                                                Є {item.expectedPrice}
                                            </div>
                                        </div>
                                        <div className=" flex    md:w-[6.5rem] ">                                       
                                                {/* Final Price */}
                             
                                            <div class="  text-xs font-poppins">
                                                Є {item.suggestedPrice}
                                            </div>
                                        </div>
                                        </div>
                                        <div class="flex max-sm:justify-between max-sm:w-wk items-center">
                                        <div className=" flex    md:w-[6.21rem] ">                                  
                                                {/* Revised Price */}
                                
                                            <div class="  text-xs font-poppins">
                                                Є {item.offerPrice}
                                            </div>
                                        </div>
                                


                                        <div className=" flex    md:w-[10.21rem] ">

                                            {(item.priceConfirmInd === false) ? (
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
                                                    <Button loading={props.ConfirmingOrderData} type='primary'>  <FormattedMessage
                                   id="app.confirm"
                                  defaultMessage="confirm"
                                 /></Button>
                                                </Popconfirm>
                                            ) : item.priceConfirmInd === true ? <b class="text-blue-500 text-xs font-poppins">Confirmed</b> : null}
                                        </div>
                                        </div>
                                        <div class="flex max-sm:justify-between max-sm:w-wk items-center">
                                        <div className="md:w-[11.5rem] ">
                                            {item.dispatchInspectionInd === 3 ? (
                                                <Button
                                                className="text-xs"
                                                type='primary'
                                                    onClick={() => {
                                                        props.handlePickUpModal(true);
                                                        handleRowData(item);
                                                    }}
                                                >
                                                    <FormattedMessage
                                   id="app.readytodispatch"
                                  defaultMessage="readytodispatch"
                                 /> </Button>
                                            ) : item.dispatchInspectionInd === 4 ? <b class="text-xs font-poppins">Picked Up</b> : null}
                                        </div>
                                        </div>
                                            {/* <Tooltip title={ <div class="  text-xs font-poppins text-white">
                                                {item.dispatchReceivedDate ? dayjs(item.dispatchReceivedDate).format("DD-MM-YYYY") : null}
                                            </div>}>
                                            <div class="  text-xs font-poppins">
                                                <DateRangeIcon
                                                    style={{ color: "blue", display: "flex", justifyItems: "center", justifyContent: "center", fontSize: "0.75rem", marginTop: "0.25rem", marginLeft: "0.25rem" }} />
                                            </div>
                                            </Tooltip> */}
                                       <div class="flex max-sm:justify-between max-sm:w-wk items-center">
                                            <Tooltip title="Feedback">
                                                <NoteAltIcon
                                                    className="!text-[1.1rem] cursor-pointer text-[#4bc076]"
                                                    onClick={() => {
                                                        props.handleFeedbackOrderDrawer(true);
                                                        handleSetParticularOrderData(item);
                                                    }}
                                                />
                                                </Tooltip>
                                      
                                            <div>
                                                            <Tooltip title={<FormattedMessage
                                                                id="app.status"
                                                                defaultMessage="Status"
                                                            />}>
                                                                <EventRepeatIcon

                                                                    className="!text-[1.1rem] cursor-pointer"
                                                                    onClick={() => {
                                                                        props.handleStatusOfOrder(true);
                                                                        handleSetParticularOrderData(item);
                                                                    }}
                                                                />
                                                            </Tooltip>
                                                        </div>
                                                        <div>
                                        
                                        <Tooltip title="">
                                            <StarBorderPurple500Icon
                                                className="!text-[1.1rem] cursor-pointer "
                                               onClick={()=> {props.handleStarOrderDrawer(true)}}
                                            />
                                            </Tooltip>
                                        </div>
                                        <div>            
                                            <Tooltip title="Edit">
                                                <BorderColorIcon
                                                    className="!text-[1.1rem] cursor-pointer text-[tomato]"

                                                />
                                                </Tooltip>
                                            </div>
                                            <div>
                                            <Tooltip title="Delete">
                                                <DeleteOutlined
                                                   type="delete"
                                                   className=" !text-[1.1rem] cursor-pointer text-[red]"
                                                />
</Tooltip>
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
            <ReviewOfferModal
                handleReviewOfferModal={props.handleReviewOfferModal}
                addreviewOffer={props.addreviewOffer}
            />
            <AddNewOrder
                 rowDatas={rowDatas}
                handleAddOrderModal={props.handleAddOrderModal}
                addOrderModal={props.addOrderModal} 
                />
            <PhoneListModal
                rowDatas={rowDatas}
                handleOrderedPhoneModal={props.handleOrderedPhoneModal}
                orderedPhoneModal={props.orderedPhoneModal}
            />
            <AddPickUpModal
                handlePickUpModal={props.handlePickUpModal}
                addPickUp={props.addPickUp}
                rowDatas={rowDatas}
            />
            <StatusOfOrderModal
                    handleStatusOfOrder={props.handleStatusOfOrder}
                    addStatusOfOrder={props.addStatusOfOrder}
                    particularRowData={particularRowData}
                />
                <FeedbackOrderDrawer
                       particularRowData={particularRowData}
                openFeedbackOrDrawer={props.openFeedbackOrDrawer}
                handleFeedbackOrderDrawer={props.handleFeedbackOrderDrawer}
                />
                        <StarOrderDrawer
                       particularRowData={particularRowData}
                clickStrOrDrwr={props.clickStrOrDrwr}
                handleStarOrderDrawer={props.handleStarOrderDrawer}
                />
        </>
    );
};

const mapStateToProps = ({ myorder, auth, setting, requirement }) => ({
    addreviewOffer: myorder.addreviewOffer,
    addOrderModal: myorder.addOrderModal,
    orderedPhoneModal: myorder.orderedPhoneModal,
    orderListData: myorder.orderListData,
    userId: auth.userDetails.userId,
    addPickUp: myorder.addPickUp,
    fetchingUserDetails: auth.fetchingUserDetails,
    fetchingOrderData:myorder.fetchingOrderData,
    addStatusOfOrder: myorder.addStatusOfOrder,
    openFeedbackOrDrawer:myorder.openFeedbackOrDrawer,
    ConfirmingOrderData:myorder.ConfirmingOrderData,
    clickStrOrDrwr:myorder.clickStrOrDrwr,
});
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            handleReviewOfferModal,
            confirmButtonClick,
            handleAddOrderModal,
            handleOrderedPhoneModal,
            getOrderData,
            handlePickUpModal,
            handleStatusOfOrder,
handleFeedbackOrderDrawer,
handleStarOrderDrawer

        }, 
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(MyOrder);
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
