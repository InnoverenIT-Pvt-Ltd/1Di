import React, { useEffect, useState, useMemo, lazy } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Tooltip, Icon, Button, Input, Popconfirm, Modal,Badge } from "antd";
import styled from 'styled-components';
import dayjs from "dayjs";
import NextPlanIcon from '@mui/icons-material/NextPlan';
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import { MultiAvatar } from "../../Components/UI/Elements";
import { MainForBroker } from '../../Components/UI/Layout';
import {
    getOdrSupplierItems,
    updateOrdrSuplrItems
} from "../MyOrder/MyOrderAction";
import InfiniteScroll from 'react-infinite-scroll-component';
import { FormattedMessage } from 'react-intl';

function OrderSupplierItemCard (props) {
  
const [pageNo, setPageNo] = useState(0);
const [hasMore, setHasMore] = useState(true);
const [date, setDate] = useState('');

const handleDateChange = (e,item) => {
  setDate(e.target.value);
  let data={
    // productId:item.productInfo.productId,
    // orderId:props.invencartItem.orderPhoneId,
    deliveryDate:e.target.value
  }
  props.updateOrdrSuplrItems(data);
};

useEffect(()=>{
    props.getOdrSupplierItems(props.userId);
},[]);


const [RowData, setRowData] = useState("");

function handleSetRowData(item) {
    setRowData(item);
}

const datacrd=[]

    return (
        <>
             <div> 
                      

               
                        <div className='mt-2'>
                <MainForBroker className='!h-[72vh]'>
                <div className=" flex rounded w-[99%] mt-1 p-1 bg-transparent font-bold sticky top-0 z-10">
                <div className=" md:w-[0.5rem]"></div>
                        <div className=" md:w-[11rem]"><FormattedMessage id="app.ite" defaultMessage="Item"/></div>
                        <div className=" md:w-[5.4rem]"><FormattedMessage id="app.priceunit" defaultMessage="Price/Unit "/></div>
                        <div className=" md:w-[5.4rem]"><FormattedMessage id="app.units" defaultMessage="Units "/></div>
                        <div className=" md:w-[12rem]"><FormattedMessage id="app.procreid#" defaultMessage="Procure ID"/></div>
                        <div className=" md:w-[6.01rem]">Created</div>
                        <div className=" md:w-[6rem]"><FormattedMessage id="app.delivery" defaultMessage="Delivery"/></div>
                        <div className=" md:w-[5rem]"><FormattedMessage id="app.location" defaultMessage="Location"/></div>
            
                       {props.userDetails.moduleMapper.tradingInd === true ? 
                       <>
                     
                        <div className=" md:w-[3.8rem] "><FormattedMessage id="app.owner" defaultMessage="Owner"/></div>
                        <div className=" md:w-[5rem]"><FormattedMessage id="app.tradeid" defaultMessage="Trade ID"/></div>
                        <div className=" md:w-[5.4rem]"><FormattedMessage id="app.priceunit" defaultMessage="Price/Unit "/></div>
                        <div className=" md:w-[5.4rem]"><FormattedMessage id="app.unit" defaultMessage="Unit "/></div>
                        <div className=" md:w-[5.4rem]"><FormattedMessage id="app.shippingdate" defaultMessage="Shipping Date"/></div>
                        </>
                        :null}
                        <div className="md:w-[1rem]"></div>
      </div>
      <InfiniteScroll
      dataLength={datacrd.length} 
    //  next={handleInfiniteScroll}
     hasMore={hasMore}
     height={"62vh"}
    style={{width:"-webkit-fill-available"}}
    // loader={props.fetchingLeadsTabData?<p style={{textAlign:"center"}}>Loading More...</p>:null} // Loader to display while loading more data
  initialLoad={true}
      //  loader={props.fetchingRequirementTabData}
    >
                    {datacrd.map((item) => {
                       const currentDate = dayjs().format("DD/MM/YYYY");
                       const date = dayjs(item.creationDate).format("DD/MM/YYYY");
                       const diff = Math.abs(
                         dayjs().diff(dayjs(item.lastRequirementOn), "days")
                       );
                      
                       return (
                         <div key={item.iteamId}>
                         <div className="flex rounded  mt-1 bg-white h-8 items-center p-1 border border-white">
           <div>

           </div>
                             <div class="flex">
                             <div className=" flex font-medium flex-col w-wk items-center   max-sm:w-full">
                             <div className="flex items-center max-sm:w-full">
                                 <div className=" flex font-medium items-center  md:w-[12rem] max-sm:w-full  ">
                                                                 {item.category} {item.brand} {item.model} {item.attribute}
                                                               </div>
                                                               <div className=" flex font-medium  md:w-[4.22rem] max-sm:flex-row w-full max-sm:justify-between ">
                 
                 <div class=" text-xs text-cardBody font-semibold  font-poppins">
            
                                 <div className="font-normal text-sm text-cardBody font-poppins">
                                   <div> {item.price}</div>
                                 </div>
                               </div>
             </div>
             <div className=" flex font-medium  md:w-[4rem] max-sm:flex-row w-full max-sm:justify-between ">
                 
                 <div class=" text-xs text-cardBody font-semibold  font-poppins">
                                 <div className="font-normal text-sm text-cardBody font-poppins">
                                   <div> {item.unit}</div>
                                 </div>
                               </div>
             </div>
                                   <div class="max-sm:w-full  items-center md:w-[12.02rem]">
                                     <Tooltip>
                                     <div class="max-sm:w-full  justify-between md: flex flex-row text-sm">                      
                                           <span
                                                                               class="underline cursor-pointer text-[#1890ff]"
                                                                               onClick={() => {
                                                                                //    handleSetParticularOrderData(item);
                                                                                //    props.handleProcureOrderModal(true);
                                                                               }}
                                                                           >{item.iteamId} 
                                                                           </span>
                                                                           <span> {date === currentDate ? (
                                                                             <span className="text-xs text-[tomato] font-bold">
                                                                               New
                                                                             </span>
                                                                           ) : null} </span>
                                       
                                       
                                       </div>
                                     </Tooltip>
                                   </div>
                                 </div>
                               </div>
           
                               <div class="flex flex-row items-center md:w-[8rem] max-sm:flex-row w-full max-sm:justify-between">
                             
                                 
                             <div class="max-sm:w-full justify-between flex md:flex-col text-sm">
                             {dayjs(item.deliveryDate).format("DD/MM/YYYY")}
           
                                   </div>
           
                          
                           </div>
                             </div>
                             <div class="flex">
                               <div className=" flex font-medium flex-col  md:w-[10.01rem] max-sm:flex-row w-full max-sm:justify-between ">
                                 <div class="text-cardBody font-poppins text-sm">
           
                                 {`${(item.loadingAddress && item.loadingAddress.length && item.loadingAddress[0].city) || ""}, ${(item.loadingAddress && item.loadingAddress.length && item.loadingAddress[0].country) || ""}
                    
                   `}
                                 </div>
                               </div>
                               <div className=" flex font-medium flex-col  md:w-[10.051rem] max-sm:flex-row w-full max-sm:justify-between ">
                                 <div class="text-cardBody font-poppins text-sm">
           
                                {/* {item.currencyName} */}
                                 </div>
                               </div>
                               <div className=" flex font-medium flex-col  md:w-[10.051rem] max-sm:flex-row w-full max-sm:justify-between ">
                                 <div class="text-cardBody font-poppins text-sm">
           
                                {item.currencyName} {item.price}
                                 </div>
                               </div>
                             </div>
                             <div class="flex flex-row items-center md:w-[4.03rem] max-sm:flex-row w-full max-sm:justify-between">
                               <div>
                                 <MultiAvatar
                                   primaryTitle={item.userName}
                                   imageURL={item.imageURL}
                                   imgWidth={"1.8rem"}
                                   imgHeight={"1.8rem"}
                                 />
                               </div>
                             </div>
                           
                             <div class="flex flex-row items-center md:w-[8.03rem] max-sm:flex-row w-full max-sm:justify-between">
                               <div>
                               {/* {editsuppliesId === item.iteamId ? (
                                  <Input
                                  style={{ width: "3rem" }}
                                  value={item.tradeId}
                                  onChange={(e) => handleInputChange(e.target.value, item.key, 'tradeId')}
                                />
                                  
                               ) : (
                                 <div className="font-normal text-sm text-cardBody font-poppins">
                                   <div> {item.tradeId}</div>
                                 </div>
                               )}
                              */}
                               </div>
                             </div>
                             <div className=" flex font-medium  md:w-[3rem] max-sm:flex-row w-full max-sm:justify-between ">
                 
                 <div class=" text-xs text-cardBody font-semibold  font-poppins">
                              {/* {editsuppliesId === item.iteamId ? (
                                  <Input
                                  style={{ width: "3rem" }}
                                  value={item.tradePrice}
                                  onChange={(e) => handleInputChange(e.target.value, item.key, 'tradePrice')}
                                />
                                  
                               ) : (
                                 <div className="font-normal text-sm text-cardBody font-poppins">
                                   <div> {item.tradePrice}</div>
                                 </div>
                               )} */}
                               </div>
             </div>
             <div className=" flex font-medium  md:w-[4.22rem] max-sm:flex-row w-full max-sm:justify-between ">
                 
                 {/* <div class=" text-xs text-cardBody font-semibold  font-poppins">
                              {editsuppliesId === item.iteamId ? (
                                  <Input
                                  style={{ width: "3rem" }}
                                  value={item.tradeUnit}
                                  onChange={(e) => handleInputChange(e.target.value, item.key, 'tradeUnit')}
                                />
                                  
                               ) : (
                                 <div className="font-normal text-sm text-cardBody font-poppins">
                                   <div> {item.tradeUnit}</div>
                                 </div>
                               )}
                               </div> */}
             </div>
             <div className=" flex font-medium  md:w-[4.22rem] max-sm:flex-row w-full max-sm:justify-between ">
             <input
          type="date"
          value={date}
          onChange={(e) => handleDateChange(e, props.item)}
          class="border border-black rounded"
        />
                 {/* <div class=" text-xs text-cardBody font-semibold  font-poppins">
                              {editsuppliesId === item.iteamId ? (
                                  <Input
                                  style={{ width: "3rem" }}
                                  value={item.tradeUnit}
                                  onChange={(e) => handleInputChange(e.target.value, item.key, 'tradeUnit')}
                                />
                                  
                               ) : (
                                 <div className="font-normal text-sm text-cardBody font-poppins">
                                   <div> {item.tradeUnit}</div>
                                 </div>
                               )}
                               </div> */}
             </div>
                             <div >
                                 <Tooltip title="Notes">
                                   <NoteAltIcon
                                    className=" !text-icon cursor-pointer text-green-800"
                                     onClick={() => {
                                    //    handleSetParticularOrderData(item);
                                    //    handleProcureNotesDrawerModal(true);
                                    
                                     }}
                                    
                                   />
                                 </Tooltip>
                               </div>
             <div className=" flex font-medium  md:w-[2rem] max-sm:flex-row w-full max-sm:justify-between ">
               {/* {editsuppliesId === item.iteamId ? (
                                   <>
                                 <Button 
                                 type="primary"
                                 loading={props.updatingProcures}
                                 onClick={() => handleSave(item)}>
                                   Save
                                 </Button>
                                   <Button 
                                    type="primary"
                                   onClick={() => handleCancelClick(item.iteamId)} className="ml-[0.5rem]">
                                   Cancel
                                 </Button>
                                 </>
                                 
                               ) : (
                                 <EditIcon
                                 className="!text-icon cursor-pointer text-[tomato] flex justify-center items-center mt-1 ml-1"
                                   tooltipTitle="Edit"
                                   iconType="edit"
                                   onClick={() => handleEditClick(item.iteamId)}
                                 />
                               )} */}
               </div>
                           </div>
                         </div>
                       );
                     })}
</InfiniteScroll>
                </MainForBroker >
            </div>
                
            </div>
            
        </>
    );
}
const mapStateToProps = ({ myorder,auth}) => ({
    // phonListNoteModal: myorder.phonListNoteModal,
    odrSupplierItems:myorder.odrSupplierItems,
    userId: auth.userDetails.userId,
    userDetails: auth.userDetails,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            getOdrSupplierItems,
            updateOrdrSuplrItems,
            // handleFeedbackPhoneOrderDrawer,

        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderSupplierItemCard);

