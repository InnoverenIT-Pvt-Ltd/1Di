import React, { useEffect, useState, } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { DeleteOutlined } from "@ant-design/icons";
import { Tooltip, Input, Badge } from "antd";
import { MainForBroker } from '../../Components/UI/Layout';
import {
    getInCompleteOrders
} from "../MyOrder/MyOrderAction"
import dayjs from "dayjs";
import InfiniteScroll from 'react-infinite-scroll-component';
import { FormattedMessage } from 'react-intl';

import BorderColorIcon from "@mui/icons-material/BorderColor";

const { Search } = Input;

function OpenOrdersTable(props) {

    const [pageNo, setPageNo] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    
    useEffect(() => {
        setPageNo(pageNo + 1);
        props.getInCompleteOrders(props.userId,pageNo);
    }, [props.userId]);
    
    const [rowDatas, setrowDatas] = useState("");

    function handleRowData(item) {
        setrowDatas(item)
    }

      const handleInfiniteScroll = () => {
        setPageNo(pageNo + 1);
        props.getInCompleteOrders(props.userId,pageNo);
         //fetchData(); // Fetch more data when scrolling
      };
    
    return (
        <>
            <div style={{ marginTop: "2rem" }}>
                <MainForBroker className='!h-[67vh]' >
                <div className=" flex  w-[90%]  pl-3 bg-transparent font-bold sticky top-0 z-10">
                <div className="  w-[12rem] font-poppins ">
                                  Order #
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
      dataLength={props.IncompletedOrders.length} // This is important to prevent reloading the same data
     next={handleInfiniteScroll}
     hasMore={hasMore}
     height={"54vh"}
    style={{width:"-webkit-fill-available"}}
    loader={props.fetchingInCompletedOrders?<div class="flex justify-center">Loading...</div>:null}
  initialLoad={true}
    >
                    {props.IncompletedOrders.map((item) => {
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
                                        <div className=" flex w-[10rem] ">                                          
                                            <div class=" text-xs font-poppins">
                                                {result ? <span
                                                    // className="blink" 
                                                    style={{ color: "red", fontWeight: "600" }}
                                                >New</span> : null}
                                       
                                                <Badge      
                //                                  count={item.count ? `${item.count}`:""}
                // overflowCount={999} style={{marginRight:"-0.7rem"}}
                >
                                                <div
                                                class=" underline cursor-pointer font-bold text-[#1890ff] text-xs  font-poppins"
                                                // onClick={() => {
                                                //     handleRowData(item);
                                                //     props.handleOrderedPhoneModal(true);
                                     
                                                // }}
                                                >
                                                {item.newOrderNo}
                                            </div>
                                            </Badge>
                                            </div>
                             
                                        </div>
                                        <div className=" flex   w-[9.1rem] ">
                                            <div class=" text-xs text-red-600 font-poppins">
                                            {`  ${dayjs(item.creationDate).format("DD-MM-YYYY")}`}
                                            </div>
                                            
                                            
                                        </div>
                                        <div className=" flex  w-[10.7rem] ">
                                   <div class=" font-normal text-xs   font-poppins flex items-center">
                                          
                                            {country},
                                            &nbsp;
                                            {LocAdd}
                                        </div>

                                </div>
                                <div className=" flex  w-[11.2rem] ">
                               <div class=" font-normal text-xs font-poppins flex items-center">
                                          
                                            {country1},
                                            &nbsp;
                                            {LocAdd1}
                                        </div>

                                </div>
                                <div className=" flex  w-[7.12rem] ">
                    
                    <div class=" font-normal text-xs   font-poppins">                     
                        {`  ${dayjs(item.deliveryFromDate).format("DD-MM-YYYY")}`}</div>
                  </div>
                                 
                                       
                                        <div className=" flex   w-[6.2rem] ">
                                            {/* <div class=" text-base   font-poppins">
                                                Expected Price

                                            </div> */}
                                            <div class=" font-normal text-xs   font-poppins">
                                                Є {item.expectedPrice}
                                            </div>
                                        </div>
                                        <div className=" flex   w-[6.5rem] ">
                                            {/* <div class=" text-base   font-poppins">
                                                Final Price

                                            </div> */}
                                            <div class=" font-normal text-xs   font-poppins">
                                                Є {item.suggestedPrice}
                                            </div>
                                        </div>
                                        <div className=" flex   w-[6.21rem] ">
                                            {/* <div class=" text-base   font-poppins">
                                                Revised Price

                                            </div> */}
                                            <div class=" font-normal text-xs   font-poppins">
                                                Є {item.offerPrice}
                                            </div>
                                        </div>
                                        <div>
                                        
                                            <Tooltip title="Edit">
                                                <BorderColorIcon
                                                    className="!text-base cursor-pointer text-[tomato]"

                                                />
                                                </Tooltip>
                                            </div>
                                            <div>
                                            <Tooltip title="Delete">
                                                <DeleteOutlined
                                                   type="delete"
                                                   className=" !text-base cursor-pointer text-[red]"
                                                />
</Tooltip>
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

const mapStateToProps = ({ myorder, auth,}) => ({
    IncompletedOrders:myorder.IncompletedOrders,
    fetchingInCompletedOrders:myorder.fetchingInCompletedOrders,
    userId: auth.userDetails.userId,
});
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            getInCompleteOrders
        }, 
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(OpenOrdersTable);

