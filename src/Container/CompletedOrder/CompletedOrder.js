import React, { useEffect, useState  } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Button, Input, Popconfirm } from "antd";
import styled from 'styled-components';
import { MainForBroker } from '../../Components/UI/Layout';
import { CheckCircleOutlined } from '@mui/icons-material';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
    handleReviewOfferModal,
    handleAddOrderModal,
    handleOrderedPhoneModal,
    getOrderData,
    confirmButtonClick,
    handlePickUpModal
} from "../MyOrder/MyOrderAction"
import dayjs from "dayjs";
import ReviewOfferModal from '../MyOrder/ReviewOfferModal';
import AddNewOrder from '../MyOrder/Child/AddNewOrder';
import PhoneListModal from '../MyOrder/Child/PhoneListModal';
import AddPickUpModal from '../MyOrder/Child/AddPickUpModal';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { FormattedMessage } from 'react-intl';
const { Search } = Input;

function CompletedOrder(props) {

    const buttonStyle = {
        borderRadius: "1rem",
        fontSize: "1rem",
        color: "#01beee",
        padding: "0.25rem 0.75rem",
        border: "1px solid #e2e2e2",
        fontFamily: 'Poppins'
    }
    useEffect(() => {
        setPageNo(pageNo + 1);
        props.getOrderData(props.userId,pageNo);
    }, [props.userId])
    const [rowDatas, setrowDatas] = useState("");
    const [pageNo, setPageNo] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    function handleRowData(item) {
        setrowDatas(item)
    }
    const handleInfiniteScroll = () => {
        setPageNo(pageNo + 1);
        props.getOrderData(props.userId,pageNo);
         //fetchData(); // Fetch more data when scrolling
      };
      return (
        <>
            <div className=' flex justify-between sticky top-20 z-auto'>
                <div className=" text-xl text-heading font-poppins font-medium ml-8">
                    Welcome To Your Order Board
                </div>

                <div style={{ textAlign: "end" }}>
                    <button
                        className="bg-white  rounded-full font-poppins md:text-lg ml-2 font-bold  md:px-7 py-1 md:shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={() => props.handleAddOrderModal(true)}
                    >
                        + <FormattedMessage
                                   id="app.addneworder"
                                  defaultMessage="addneworder"
                                 />
                    </button>

                    {/* <button
                        className="bg-white  rounded-full font-poppins  md:text-lg ml-4 font-bold  md:px-7 py-1 md:shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onClick={() => props.handlePriceRequestModal(true)}
                    >
                        + Send A Price Request

                    </button> */}
                </div>
            </div>
            <div style={{ marginTop: "5em" }}>
                <MainForBroker >
                <div className=" flex  w-[90%] mt-10 pl-3 bg-transparent font-medium sticky top-0 z-10">
        <div className=" w-[9.9rem] font-normal font-poppins"> <FormattedMessage
                                   id="app.orderdate"
                                  defaultMessage="orderdate"
                                 /></div>
        <div className=" w-[12.5rem] font-normal font-poppins"><FormattedMessage
                                   id="app.pickup"
                                  defaultMessage="pickup"
                                 /></div>
        <div className="  w-[13.2rem] font-normal font-poppins "><FormattedMessage
                                   id="app.delivery"
                                  defaultMessage="delivery"
                                 /></div>
        <div className=" w-[7.7rem] font-normal font-poppins"><FormattedMessage
                                   id="app.deliverydate"
                                  defaultMessage="deliverydate"
                                 /></div>
        <div className=" w-[4.5rem] font-normal font-poppins">  <ShoppingBagIcon /></div>
        <div className="  w-[8.3rem] font-normal font-poppins "><FormattedMessage
                                   id="app.ordernuber"
                                  defaultMessage="ordernuber"
                                 /></div>
        <div className=" w-[6.6rem] font-normal font-poppins"><FormattedMessage
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
                                 /> </div>
        <div className=" w-[1.2rem] font-normal font-poppins"></div>      
      </div>
      <InfiniteScroll
      dataLength={props.orderListData.length} // This is important to prevent reloading the same data
     next={handleInfiniteScroll}
     hasMore={hasMore}
     height={"66vh"}
    style={{width:"-webkit-fill-available"}}
    // loader={props.fetchingLeadsTabData?<p style={{textAlign:"center"}}>Loading More...</p>:null} // Loader to display while loading more data
  initialLoad={true}
      //  loader={props.fetchingRequirementTabData}
    >
                    {props.orderListData.map((item) => {
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
                                <div className="flex rounded-xl  mt-2 bg-white h-[2.75rem] items-center p-1 "
                                style={{
                                    border: "2px solid white "
                                }}>

                                        <div className=" flex   w-[9.1rem] ">                                          
                                            <div class=" text-xs  font-poppins">
                                                {result ? <span
                                                    // className="blink" 
                                                    style={{ color: "red", fontWeight: "600" }}
                                                >New</span> : null}
                                                {/* Order Date:  */}
                                                {`  ${dayjs(item.creationDate).format("DD-MM-YYYY")}`}
                                            </div>
                                            {/* <div class=" text-base  font-poppins">
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
                                        <div className=" flex  w-[10.7rem] ">
                                   <div class=" text-xs  font-poppins flex items-center">
                                          
                                            {country},
                                            &nbsp;
                                            {LocAdd}
                                        </div>

                                </div>
                                <div className=" flex  w-[11.2rem] ">
                               <div class=" text-xs  font-poppins flex items-center">
                                          
                                            {country1},
                                            &nbsp;
                                            {LocAdd1}
                                        </div>

                                </div>
                                <div className=" flex  w-[7.12rem] ">
                    
                    <div class=" text-xs  font-poppins">                     
                        {`  ${dayjs(item.deliveryFromDate).format("DD-MM-YYYY")}`}</div>
                  </div>
                                        <div className=" flex   w-[3.2rem] ">
                                            {/* <div class=" text-base  font-poppins" >
                                                <SmartphoneIcon />
                                            </div> */}

                                            <div
                                                class=" text-xs  font-poppins cursor-pointer text-[#3597b0] font-semibold"
                                               
                                                onClick={() => {
                                                    handleRowData(item);
                                                    props.handleOrderedPhoneModal(true);
                                                    // props.getPhoneDetails(item.orderId);
                                                }}
                                            >
                                                {item.count}
                                            </div>
                                        </div>
                                        <div className=" flex   w-[8.1rem] ">
                                            {/* <div class=" text-base  font-poppins">
                                                Order Number
                                            </div> */}
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
                                                {item.newOrderNo}
                                            </div>
                                        </div>
                                        <div className=" flex   w-[6.2rem] ">
                                            {/* <div class=" text-base  font-poppins">
                                                Expected Price

                                            </div> */}
                                            <div class=" text-base  font-poppins">
                                                Є {item.expectedPrice}
                                            </div>
                                        </div>
                                        <div className=" flex   w-[6.5rem] ">
                                            {/* <div class=" text-base  font-poppins">
                                                Final Price

                                            </div> */}
                                            <div class=" text-base  font-poppins">
                                                Є {item.suggestedPrice}
                                            </div>
                                        </div>
                                        <div className=" flex   w-[6.21rem] ">
                                            {/* <div class=" text-base  font-poppins">
                                                Revised Price

                                            </div> */}
                                            <div class=" text-base  font-poppins">
                                                Є {item.offerPrice}
                                            </div>
                                        </div>
                                        <div className="   w-24 ">
                                            {(item.customerPriceInd === true && item.priceConfirmInd === false) ? (
                                                <Popconfirm
                                                    onConfirm={() => props.confirmButtonClick({
                                                        priceConfirmInd: true,
                                                        orderConfirmedUserId: props.userId,
                                                        orderPhoneId: item.orderId,

                                                    },
                                                        item.orderId,
                                                        props.userId
                                                    )}
                                                    title="Confirm Order?"  okText="Yes" cancelText="No">
                                                    <Button type='primary' style={buttonStyle}>  <FormattedMessage
                                   id="app.confirm"
                                  defaultMessage="confirm"
                                 /></Button>
                                                </Popconfirm>
                                            ) : item.priceConfirmInd === true ? <b class="text-blue-500">Confirmed</b> : null}
                                        </div>
                                        <div className="w-[11.5rem] ">
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
                                        </div>
                                        <div class="flex flex-col">
                                            <div style={{ filter: "drop-shadow(0px 0px 4px rgba(0,0,0,0.1 ))" }} class="rounded-full bg-white w-5 h-5 cursor-pointer">
                                                <EditIcon
                                                    style={{ color: "blue", display: "flex", justifyItems: "center", justifyContent: "center", fontSize: "0.75rem", marginTop: "0.25rem", marginLeft: "0.25rem" }}

                                                />
                                            </div>
                                            <div style={{ filter: "drop-shadow(0px 0px 4px rgba(0,0,0,0.1 ))" }} class="rounded-full bg-red-700 w-5 h-5 mt-1 cursor-pointer">
                                                <DeleteOutlineIcon
                                                    style={{ color: "white", display: "flex", justifyItems: "center", justifyContent: "center", fontSize: "1rem", marginTop: "0.12rem", marginLeft: "0.12rem" }}

                                                />
                                            </div>
                                        </div>
                                        <div className=" flex   ">
                                            <div class=" text-base  font-poppins">
                                                <CheckCircleOutlined
                                                    style={{ color: "blue", display: "flex", justifyItems: "center", justifyContent: "center", fontSize: "0.75rem", marginTop: "0.25rem", marginLeft: "0.25rem" }} />
                                            </div>
                                            <div class=" text-base  font-poppins">
                                                {item.dispatchReceivedDate ? dayjs(item.dispatchReceivedDate).format("DD-MM-YYYY") : null}
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
            <ReviewOfferModal
                handleReviewOfferModal={props.handleReviewOfferModal}
                addreviewOffer={props.addreviewOffer}
            />
            <AddNewOrder
                handleAddOrderModal={props.handleAddOrderModal}
                addOrderModal={props.addOrderModal} />
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
        </>
    );
};

const mapStateToProps = ({ myorder, auth, setting, requirement }) => ({
    addreviewOffer: myorder.addreviewOffer,
    addOrderModal: myorder.addOrderModal,
    orderedPhoneModal: myorder.orderedPhoneModal,
    orderListData: myorder.orderListData,
    userId: auth.userDetails.userId,
    addPickUp: myorder.addPickUp
});
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            handleReviewOfferModal,
            confirmButtonClick,
            handleAddOrderModal,
            handleOrderedPhoneModal,
            getOrderData,
            handlePickUpModal
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(CompletedOrder);
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
