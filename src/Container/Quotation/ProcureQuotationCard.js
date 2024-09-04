import React, { useEffect, useState,} from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import { Tooltip, Input,Button} from "antd";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { MainForBroker } from '../../Components/UI/Layout';
import {
    getProcureQuotation,
} from "../MyOrder/MyOrderAction"
import dayjs from "dayjs";
import InfiniteScroll from 'react-infinite-scroll-component';
import { FormattedMessage } from 'react-intl';
// const ProcureItemViewDrawer =lazy(()=>import("./ProcureItemViewDrawer"));
const { Search } = Input;

function ProcureQuotationCard(props) {

    useEffect(() => {
        // setPageNo(pageNo + 1);
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

      const orderProcureData =[];

      return (
        <>
            <div className='mt-1'>
                <MainForBroker className='!h-[91vh]'>
                <div className=" flex rounded w-[99%] mt-1 p-1 bg-transparent font-bold sticky top-0 z-10">
        <div className=" w-[15.9rem] font-bold font-poppins"> <FormattedMessage
                                   id="app."
                                  defaultMessage="Quotation ID"
                                 /></div>
        <div className=" w-[18.5rem] font-bold font-poppins"><FormattedMessage
                                   id="app.created"
                                  defaultMessage="Created"
                                 /></div>
        <div className="  w-[21.2rem] font-bold font-poppins "><FormattedMessage
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
     height={"79vh"}
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
                               

                                        <div className=" flex w-[9.1rem] ">                                          
                                            <div class=" text-xs  font-poppins">
                                                {result ? <span
                                                    // className="blink" 
                                                    style={{ color: "red", fontWeight: "600" }}
                                                >New</span> : null}
                                                {item.newOrderNo}
                                            </div>
                                        </div>
                                        <div className=" flex  w-[7.12rem] ">
                    
                                         <div class=" text-xs  font-poppins">                     
                                           {`  ${dayjs(item.deliveryFromDate).format("DD-MM-YYYY")}`}
                                           </div>
                                        </div>
                                        <div className=" flex  w-[6.7rem] ">
                                   <div class=" text-xs  font-poppins flex items-center">
                                          
                                            {country},
                                            &nbsp;
                                            {LocAdd}
                                        </div>

                                       </div>
                                         <div className=" flex  w-[6.2rem] ">
                                        <div class=" text-xs  font-poppins flex items-center">
                                                    
                                                        {country1},
                                                        &nbsp;
                                                        {LocAdd1}
                                                    </div>

                                            </div>
                                            
                                        <div className=" flex   w-[3.2rem] ">                                       
                                                {/* <SmartphoneIcon /> */}
                                         
                                            <div
                                                class=" text-xs font-poppins cursor-pointer text-[#3597b0] font-semibold"
                                               
                                                onClick={() => {
                                                    handleRowData(item);
                                                    props.handleItemViewDrawer(true);
                                                    // props.getPhoneDetails(item.orderId);
                                                }}
                                            >
                                                {item.count}
                                            </div>
                                        </div>
                                        
                                  
                                        <div class="flex justify-end  items-center">
                                        <div className="   w-32 ">
                                        <Link to={`shopName/invopayment`}>
                                            <Button type="primary">
                                                Convert to Order
                                                </Button>
                                                </Link>
                                          
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
                                        </div>
                                        

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
    // addreviewOffer: myorder.addreviewOffer,
    // viewItemDrwr: myorder.viewItemDrwr,
    // orderedPhoneModal: myorder.orderedPhoneModal,
    orderProcureQuoatation: myorder.orderProcureQuoatation,
    userId: auth.userDetails.userId,
    // addPickUp: myorder.addPickUp
});
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            getProcureQuotation,
            // handleItemViewDrawer
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(ProcureQuotationCard);
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
