import React, { useEffect, useState, } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { DeleteOutlined } from "@ant-design/icons";
import { Tooltip, Input, Badge } from "antd";
import { MainForBroker } from '../../Components/UI/Layout';
import {
    getCompleteOrders
} from "../MyOrder/MyOrderAction"
import dayjs from "dayjs";
import InfiniteScroll from 'react-infinite-scroll-component';
import { FormattedMessage } from 'react-intl';

import BorderColorIcon from "@mui/icons-material/BorderColor";

const { Search } = Input;

function CompleteOrdersTable(props) {

    const [pageNo, setPageNo] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    
    useEffect(() => {
        setPageNo(pageNo + 1);
        props.getCompleteOrders(props.userId,pageNo,"Repair");
    }, [props.userId]);
    
    const [rowDatas, setrowDatas] = useState("");

    function handleRowData(item) {
        setrowDatas(item)
    }
  const handleInfiniteScroll = () => {
        setPageNo(pageNo + 1);
        props.getCompleteOrders(props.userId,pageNo);
         //fetchData(); // Fetch more data when scrolling
      };
    return (
        <>
            <div className='mt-2'>
                <MainForBroker className='!h-[72vh]' >
                <div className=" flex rounded w-[99%]  p-1 bg-transparent font-bold sticky top-0 z-10">
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
      dataLength={props.completedOrders.length} // This is important to prevent reloading the same data
     next={handleInfiniteScroll}
     hasMore={hasMore}
     height={"62vh"}
    style={{width:"-webkit-fill-available"}}
    loader={props.fetchingCompletedOrders ? (
        <div className="flex justify-center">Loading...</div>
      ) : null}
      initialLoad={true}
    >
                   {props.completedOrders.length > 0 ? (
                    props.completedOrders.map((item) => (
                    
                                <div>
                                <div  key={item.orderId} className="flex rounded  mt-1 bg-white h-8 items-center p-1 border-1 border-white">
                              

                                        <div className=" flex   w-[10rem] ">                                          
                                            <div class=" font-normal text-[0.85rem]  font-poppins">
                                                {dayjs().format("YYYY/MM/DD")===dayjs(item.creationDate).format("YYYY/MM/DD") ? <span
                                                    // className="blink" 
                                                    style={{ color: "red", fontWeight: "600" }}
                                                >
                                                    New</span> : null}
                                       
                                                <Badge      
                //                                  count={item.count ? `${item.count}`:""}
                // overflowCount={999} style={{marginRight:"-0.7rem"}}
                >
                                                <div
                                                class=" underline cursor-pointer text-[#1890ff] text-[0.85rem]  font-poppins"
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
                                            <div class=" text-base  font-poppins">
                                            {`  ${dayjs(item.creationDate).format("DD-MM-YYYY")}`}
                                            </div>
                                            
                                            
                                        </div>
                                        <div className=" flex  w-[10.7rem] ">
                                   <div class=" font-normal text-[0.85rem]  font-poppins flex items-center">
                                          
                                   {item.loadingAddress && item.loadingAddress[0].countryAlpha2Code || ""},
                                            &nbsp;
                                         {item.loadingAddress && item.loadingAddress[0].city || ""}
                                        </div>

                                </div>
                                <div className=" flex  w-[11.2rem] ">
                               <div class=" font-normal text-[0.85rem]  font-poppins flex items-center">
                                          
                               {item.unloadingAddress && item.unloadingAddress[0].countryAlpha2Code || ""},
                                            &nbsp;
                                            {item.unloadingAddress && item.unloadingAddress[0].city || ""}
                                        </div>

                                </div>
                                <div className=" flex  w-[7.12rem] ">
                    
                    <div class=" font-normal text-[0.85rem]  font-poppins">                     
                        {`  ${dayjs(item.deliveryFromDate).format("DD-MM-YYYY")}`}</div>
                  </div>
                                 
                                       
                                        <div className=" flex   w-[6.2rem] ">
                                            {/* <div class=" text-base  font-poppins">
                                                Expected Price

                                            </div> */}
                                            <div class=" font-normal text-[0.85rem]  font-poppins">
                                                Є {item.expectedPrice}
                                            </div>
                                        </div>
                                        <div className=" flex   w-[6.5rem] ">
                                            {/* <div class=" text-base  font-poppins">
                                                Final Price

                                            </div> */}
                                            <div class=" font-normal text-[0.85rem]  font-poppins">
                                                Є {item.suggestedPrice}
                                            </div>
                                        </div>
                                        <div className=" flex   w-[6.21rem] ">
                                            {/* <div class=" text-base  font-poppins">
                                                Revised Price

                                            </div> */}
                                            <div class=" font-normal text-[0.85rem]  font-poppins">
                                                Є {item.offerPrice}
                                            </div>
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


                    ))
                ):(
                    <div className="flex justify-center mt-4">
              <p>No completed orders found.</p>
            </div>
                    )}
</InfiniteScroll>

                </MainForBroker >
            </div>
          
        </>
    );
};

const mapStateToProps = ({ myorder, auth,}) => ({
    completedOrders:myorder.completedOrders,
    fetchingCompletedOrders:myorder.fetchingCompletedOrders,
    userId: auth.userDetails.userId,
});
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            getCompleteOrders
        }, 
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(CompleteOrdersTable);

