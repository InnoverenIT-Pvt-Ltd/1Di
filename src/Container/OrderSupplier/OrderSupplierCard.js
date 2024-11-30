
import React, { useState, useEffect,lazy } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FormattedMessage } from 'react-intl';
import InfiniteScroll from "react-infinite-scroll-component";
import { Tooltip, Input } from "antd";
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import {
    getOdrSupplier,
    handleStatuShowDrawer,
    handleItemViewDrawer
} from "../MyOrder/MyOrderAction";
import dayjs from "dayjs";
import ProcureStatusShowDrawer from "../OrderProgress/ProcureStatusShowDrawer";
const ProcureItemViewDrawer =lazy(()=>import("../OrderProgress/ProcureItemViewDrawer"));



const { Search } = Input;

function OrderSupplierCard(props) {

    useEffect(() => {
        setPageNo(pageNo + 1);
        props.getOdrSupplier(props.userId,pageNo,"procure");
    }, []);

    const [rowDatas, setrowDatas] = useState("");
    const [hasMore, setHasMore] = useState(true);
    const [pageNo, setPageNo] = useState(0);
    function handleRowData(item) {
        setrowDatas(item)
    }
    const handleInfiniteScroll = () => {
        setPageNo(pageNo + 1);
        // props.getOdrSupplier(props.userId,pageNo,"procure");
         //fetchData(); // Fetch more data when scrolling
      };

      const drb=[{
        newOrderNo:'4334'
      }]
      
      function handleRowData(item) {
        setrowDatas(item)
    }

      return (
        <>

<div className=' flex justify-end sticky flex-col z-auto'>
                            <div class="rounded-lg m-5 p-2 w-[98%] overflow-auto shadow-[4px_0px_9px_3px_] shadow-[#a3abb980] bg-[#E3E8EE]">
                                <div className=" flex  w-[98%] p-2 bg-transparent font-bold sticky top-0 z-10">                                         
                        <div className="  w-[12rem] font-poppins ">
                                  Order ID
                                </div>
                                <div className=" w-[12rem]  font-poppins"> <FormattedMessage
                                   id="app.created"
                                  defaultMessage="Created"
                                 /></div>
        {/* <div className=" w-[12.5rem]  font-poppins"><FormattedMessage
                                   id="app.pickup"
                                  defaultMessage="pickup"
                                 /></div> */}
        <div className="  w-[13.2rem]  font-poppins "><FormattedMessage
                                   id="app.delivery"
                                  defaultMessage="delivery"
                                 /></div>
        <div className=" w-[9.7rem]  font-poppins"><FormattedMessage
                                   id="app.items"
                                  defaultMessage="Items"
                                 /></div>
        {/* <div className=" w-[4.5rem]  font-poppins">  <ShoppingBagIcon /></div> */}
    
     
        <div className=" w-[6.6rem]  font-poppins"><FormattedMessage
                                   id="app.status"
                                  defaultMessage="Status"
                                 /> </div>
        {/* <div className=" w-[8.12rem]  font-poppins"><FormattedMessage
                                   id="app.final"
                                  defaultMessage="final"
                                 /> </div>
        <div className=" w-[21.2rem] font-poppins"><FormattedMessage
                                   id="app.revised"
                                  defaultMessage="revised"
                                 /> </div> */}
        <div className=" w-[1.2rem] font-poppins"></div>      
                                    <div className=" md:w-[2rem]"></div>
                 
                                </div>
                                <div class="overflow-y-auto h-[85vh]">
                                    <InfiniteScroll
                                        dataLength={props.odrSupplier.length}
                                        loader={props.fetchingPhoneData ? <div class="flex justify-center">Loading...</div> : null}
                                  
     hasMore={hasMore}
     
                                        height={"65vh"}
                                    >
                                        {props.odrSupplier.map((item) => {
                                             const LocAdd = `${item.unLoadingAddress && item.unLoadingAddress[0].address1 || ""} ${item.unLoadingAddress && item.unLoadingAddress[0].city || ""}
                                             ${item.unLoadingAddress && item.unLoadingAddress[0].state || ""} ${item.unLoadingAddress && item.unLoadingAddress[0].country || ""}
                                             `;
                                             
                                             const currentdate = dayjs().format("YYYY/MM/DD");
                                             const date = dayjs(item.creationDate).format("YYYY/MM/DD");
                                             const result = currentdate === date
                                            return (
                                                <div>
                                                 <div
                className="flex rounded justify-between  bg-white mt-1 h-8 items-center p-1 max-sm:h-[6rem] max-sm:flex-col scale-[0.99] hover:scale-100 ease-in duration-100 shadow  border-solid m-1 leading-3 hover:border  hover:border-[#23A0BE]  hover:shadow-[#23A0BE]  ">
                             
                             <div class="flex max-sm:justify-between max-sm:w-wk items-center">
                                        <div className=" flex border-l-2 border-green-500 bg-[#eef2f9]  md:w-[9.1rem] ">                                          
                                            <div class=" text-xs  font-poppins">
                                                {item.newOrderNo}
                                                &nbsp;
                                                {result ? <span
                                                    class="blink text-red-600 font-semibold" 
                                                    // style={{ color: "red", fontWeight: "600" }}
                                                >New</span> : null}
                                            </div>
                                            
                                        </div>
                                        <div className=" flex bg-[#eef2f9] md:w-[10.7rem] ">
                                   <div class=" text-xs  font-poppins flex items-center">
                                          
                                   {`${dayjs(item.creationDate).format("DD-MM-YYYY")}`}
                                        </div>

                                </div>
                                </div>
                               
                                <div className=" flex bg-[#eef2f9] md:w-[11.2rem] ">
                               <div class=" text-xs  font-poppins flex items-center">                                                                            
                                            {LocAdd}
                                        </div>
                                </div>     
                 
                  <div class="flex max-sm:justify-between max-sm:w-wk items-center">
                                        <div className=" flex bg-[#eef2f9]  md:w-[3.2rem] ">
                                            <div
                                                class=" text-xs font-poppins cursor-pointer text-[#3597b0] font-semibold"                                          
                                                onClick={() => {
                                                    handleRowData(item);
                                                    props.handleItemViewDrawer(true);
                                                    // props.getPhoneDetails(item.orderId);
                                                }}
                                            >
                                                {item.itemCount}
                                            </div>
                                        </div>
                                        <div className=" flexbg-[#eef2f9]   md:w-[8.1rem] ">
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
                                               
                                            </div>
                                        </div>
                                  

                                        <div className=" bg-[#eef2f9]  md:w-24 ">                                        
                                        </div>                                                               
                                            <div style={{ filter: "drop-shadow(0px 0px 4px rgba(0,0,0,0.1 ))" }} class="rounded-full bg-white md:w-5 h-5 cursor-pointer">
                                            <Tooltip title={<FormattedMessage
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
                                                            </Tooltip>
                                            </div>                             
                                </div>
                                    </div>
                                </div>
                                            )
                                        })}
                                    </InfiniteScroll>
                                </div>
                            </div>

                        </div>
                        <ProcureStatusShowDrawer
           rowDatas={rowDatas}
           showStatusDrwr={props.showStatusDrwr}
           handleStatuShowDrawer={props.handleStatuShowDrawer}
           />
            <ProcureItemViewDrawer
           rowDatas={rowDatas}
           viewItemDrwr={props.viewItemDrwr}
           handleItemViewDrawer={props.handleItemViewDrawer}
           />
        </>
    );
};

const mapStateToProps = ({ myorder, auth, }) => ({
    userId: auth.userDetails.userId,
    showStatusDrwr:myorder.showStatusDrwr,
    odrSupplier:myorder.odrSupplier,
    viewItemDrwr: myorder.viewItemDrwr,
});
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            getOdrSupplier,
            handleStatuShowDrawer,
            handleItemViewDrawer
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(OrderSupplierCard);
