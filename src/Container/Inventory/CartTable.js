// import React, { useEffect, useState,} from 'react'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import NoteAltIcon from '@mui/icons-material/NoteAlt';
// import { DeleteOutlined } from "@ant-design/icons";
// import { Tooltip, Button, Input, Popconfirm, Badge } from "antd";
// import styled from 'styled-components';
// import dayjs from "dayjs";
// import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import { FormattedMessage } from 'react-intl';
// import BorderColorIcon from "@mui/icons-material/BorderColor";
// import EventRepeatIcon from '@mui/icons-material/EventRepeat';
// const { Search } = Input;

// function MyOrder(props) {

//     // const buttonStyle = {
//     //     borderRadius: "1rem",
//     //     fontSize: "1rem",
//     //     color: "white",
//     //     padding: "0.25rem 0.75rem",
//     //     border: "1px solid #e2e2e2",
//     //     fontFamily: 'Poppins'
//     // }
//     const [pageNo, setPageNo] = useState(0);
//     const [hasMore, setHasMore] = useState(true);
//     const [particularRowData, setParticularRowData] = useState({});
    
//     // useEffect(() => {
//     //     setPageNo(pageNo + 1);
//     //     props.getOrderData(props.userId,pageNo);
//     // }, [props.userId]);
    
//     const [rowDatas, setrowDatas] = useState("");
//     function handleRowData(item) {
//         setrowDatas(item)
//     }
//     function handleSetParticularOrderData(item) {
//         setParticularRowData(item);
//     }
   
//     const handleLoadMore = () => {
//         const PageMapd = props.orderListData && props.orderListData.length &&props.orderListData[0].pageCount
//         setTimeout(() => {  
//           if  (props.orderListData)
//           {
//             if (pageNo < PageMapd) {    
//                 setPageNo(pageNo + 1);
//         props.getOrderData(props.userId,pageNo);
//                 }
//                   if (pageNo === PageMapd){
//                     setHasMore(false)
//                   }
//                 }
//                 }, 100);
//             }
//     const drb = [{expectedPrice:20,
//         priceConfirmInd:false
//     }]
//     return (
//         <>          
    
//             <div class="rounded m-1 max-sm:m-1 p-1 w-[99%] overflow-auto shadow-[4px_0px_9px_3px_] shadow-[#a3abb980] bg-[#eaedf1]">
//             <div className=" flex rounded  max-sm:hidden w-[99%] mt-1 p-1 bg-transparent font-bold sticky top-0 z-10">              
//          <div className=" w-[16rem]  font-poppins"> Completed puzzle dimension</div>
//         <div className=" w-[8.5rem]  font-poppins">Piece count</div>
//         <div className="  w-[8.2rem]  font-poppins ">Packaging</div>
//         <div className=" w-[6.7rem]  font-poppins">Age group</div>   
//         <div className=" w-[11.6rem]  font-poppins">Package dimension</div>
//         <div className=" w-[6.12rem]  font-poppins">Weight </div>
//                     {/* {
//                     props.orderListData
//                     .map((item) => {
//                         const LocAdd = `${item.loadingAddress && item.loadingAddress[0].city || ""}`;
//                         const LocAdd1 = `${item.unloadingAddress && item.unloadingAddress[0].city || ""}`;
//                         const country = `${item.loadingAddress && item.loadingAddress[0].countryAlpha2Code || ""}`
//                         const country1 = `${item.unloadingAddress && item.unloadingAddress[0].countryAlpha2Code || ""}`
//                         const currentdate = dayjs().format("YYYY/MM/DD");
//                         const date = dayjs(item.creationDate).format("YYYY/MM/DD");
//                         const result = currentdate === date
//                         return (
//                             <>

//                                 <div>
//                                 <div
//                 className="flex rounded justify-between  bg-white mt-1 h-8 items-center p-1 max-sm:h-[9rem] max-sm:flex-col scale-[0.99] hover:scale-100 ease-in duration-100 shadow  border-solid m-1 leading-3 hover:border  hover:border-[#23A0BE]  hover:shadow-[#23A0BE]  ">
                              
//                               <div class="flex max-sm:justify-between max-sm:w-wk items-center">
//                                         <div className=" flex  md:w-[10rem] ">                                          
//                                             <div class=" font-bold text-xs font-poppins">
//                                                 {result ? <span
                                                  
//                                                     style={{ color: "red", fontWeight: "600" }}
//                                                 >New</span> : null}
                                               
//                                                 <Badge       count={item.count ? `${item.count}`:""}
//                 overflowCount={999} style={{marginRight:"-0.7rem"}}>
//                                                 <div
//                                                 class=" underline cursor-pointer text-[#1890ff] text-xs font-bold font-poppins"
//                                                 onClick={() => {
//                                                     handleRowData(item);
//                                                     props.handleOrderedPhoneModal(true);
                                                   
//                                                 }}>
//                                                 {item.newOrderNo}
//                                             </div>
//                                             </Badge>
//                                             </div>
                                            
//                                         </div>
//                                         <div className=" flex  md:w-[9.1rem] ">
//                                             <div class=" text-xs font-poppins">
//                                             {`  ${dayjs(item.creationDate).format("DD-MM-YYYY")}`}
//                                             </div>
                                            
                                            
//                                         </div>
//                                         </div>
//                                         <div class="flex max-sm:justify-between max-sm:w-wk items-center">
//                                         <div className=" flex   md:w-[10.7rem] ">
//                                    <div class="  text-xs font-poppins flex items-center">
                                          
//                                             {country},
//                                             &nbsp;
//                                             {LocAdd}
//                                         </div>

//                                 </div>
//                                 <div className=" flex   md:w-[11.2rem] ">
//                                <div class="  text-xs font-poppins flex items-center">
                                          
//                                             {country1},
//                                             &nbsp;
//                                             {LocAdd1}
//                                         </div>

//                                 </div>
//                                 </div>
//                                 <div class="flex max-sm:justify-between max-sm:w-wk items-center">
//                                 <div className=" flex   md:w-[7.12rem] ">
                    
//                     <div class="  text-xs font-poppins">                     
//                         {`  ${dayjs(item.deliveryFromDate).format("DD-MM-YYYY")}`}</div>
//                   </div>
                                 
                                       
//                                         <div className=" flex    md:w-[6.2rem] ">                                      
                                               

//                                             <div class="  text-xs font-poppins">
//                                                 Є {item.expectedPrice}
//                                             </div>
//                                         </div>
//                                         <div className=" flex    md:w-[6.5rem] ">                                       
                                               
                             
//                                             <div class="  text-xs font-poppins">
//                                                 Є {item.suggestedPrice}
//                                             </div>
//                                         </div>
//                                         </div>
//                                         <div class="flex max-sm:justify-between max-sm:w-wk items-center">
//                                         <div className=" flex    md:w-[6.21rem] ">                                  
                                                
                                
//                                             <div class="  text-xs font-poppins">
//                                                 Є {item.offerPrice}
//                                             </div>
//                                         </div>
                                


//                                         <div className=" flex    md:w-[10.21rem] ">

//                                             {(item.priceConfirmInd === false) ? (
//                                                 <Popconfirm
//                                                     onConfirm={() => props.confirmButtonClick({
//                                                         priceConfirmInd: true,
//                                                         orderConfirmedUserId: props.userId,
//                                                         orderPhoneId: item.orderId,

//                                                     },
//                                                         item.orderId,
//                                                         props.userId
//                                                     )}
//                                                     title="Confirm Order?" okText="Yes" cancelText="No">
//                                                     <Button loading={props.ConfirmingOrderData} type='primary'>  <FormattedMessage
//                                    id="app.confirm"
//                                   defaultMessage="confirm"
//                                  /></Button>
//                                                 </Popconfirm>
//                                             ) : item.priceConfirmInd === true ? <b class="text-blue-500 text-xs font-poppins">Confirmed</b> : null}
//                                         </div>
//                                         </div>
//                                         <div class="flex max-sm:justify-between max-sm:w-wk items-center">
//                                         <div className="md:w-[11.5rem] ">
//                                             {item.dispatchInspectionInd === 3 ? (
//                                                 <Button
//                                                 className="text-xs"
//                                                 type='primary'
//                                                     onClick={() => {
//                                                         props.handlePickUpModal(true);
//                                                         handleRowData(item);
//                                                     }}
//                                                 >
//                                                     <FormattedMessage
//                                    id="app.readytodispatch"
//                                   defaultMessage="readytodispatch"
//                                  /> </Button>
//                                             ) : item.dispatchInspectionInd === 4 ? <b class="text-xs font-poppins">Picked Up</b> : null}
//                                         </div>
//                                         </div>
                                           
//                                        <div class="flex max-sm:justify-between max-sm:w-wk items-center">
//                                             <Tooltip title="Feedback">
//                                                 <NoteAltIcon
//                                                     className="!text-[1.1rem] cursor-pointer text-[#4bc076]"
//                                                     onClick={() => {
//                                                         props.handleFeedbackOrderDrawer(true);
//                                                         handleSetParticularOrderData(item);
//                                                     }}
//                                                 />
//                                                 </Tooltip>
                                      
//                                             <div>
//                                                             <Tooltip title={<FormattedMessage
//                                                                 id="app.status"
//                                                                 defaultMessage="Status"
//                                                             />}>
//                                                                 <EventRepeatIcon

//                                                                     className="!text-[1.1rem] cursor-pointer"
//                                                                     onClick={() => {
//                                                                         props.handleStatusOfOrder(true);
//                                                                         handleSetParticularOrderData(item);
//                                                                     }}
//                                                                 />
//                                                             </Tooltip>
//                                                         </div>
//                                                         <div>
                                        
//                                         <Tooltip title="">
//                                             <StarBorderPurple500Icon
//                                                 className="!text-[1.1rem] cursor-pointer "
//                                                onClick={()=> {props.handleStarOrderDrawer(true)}}
//                                             />
//                                             </Tooltip>
//                                         </div>
//                                         <div>            
//                                             <Tooltip title="Edit">
//                                                 <BorderColorIcon
//                                                     className="!text-[1.1rem] cursor-pointer text-[tomato]"

//                                                 />
//                                                 </Tooltip>
//                                             </div>
//                                             <div>
//                                             <Tooltip title="Delete">
//                                                 <DeleteOutlined
//                                                    type="delete"
//                                                    className=" !text-[1.1rem] cursor-pointer text-[red]"
//                                                 />
// </Tooltip>
//                                         </div>
//                                         </div>
//                                    </div>
//                                 </div>
//                             </>
//                         )
//                     })} */}

//                 </div >
//             </div>
           
//         </>
//     );
// };

// const mapStateToProps = ({ myorder, auth, setting, requirement }) => ({
//     addreviewOffer: myorder.addreviewOffer,
//     addOrderModal: myorder.addOrderModal,
//     orderedPhoneModal: myorder.orderedPhoneModal,
//     orderListData: myorder.orderListData,
//     userId: auth.userDetails.userId,
//     addPickUp: myorder.addPickUp,
//     fetchingUserDetails: auth.fetchingUserDetails,
//     fetchingOrderData:myorder.fetchingOrderData,
//     addStatusOfOrder: myorder.addStatusOfOrder,
//     openFeedbackOrDrawer:myorder.openFeedbackOrDrawer,
//     ConfirmingOrderData:myorder.ConfirmingOrderData,
//     clickStrOrDrwr:myorder.clickStrOrDrwr,
// });
// const mapDispatchToProps = (dispatch) =>
//     bindActionCreators(
//         {
           

//         }, 
//         dispatch
//     );

// export default connect(mapStateToProps, mapDispatchToProps)(MyOrder);
// const CatgryName = styled.div`
//   font-size: 1rem;
//   color: black;
//     font-weight: 600;
//     white-space: nowrap;
//     @media only screen and (max-width: 600px) {
//       width: 99%;
//       font-size: 0.8rem;
//   // text-overflow: ellipsis;
//     white-space: nowrap;
//     // overflow: hidden;
//     }
// `;
// const SubCatgryName = styled.div`
//   font-size: 1rem;
//   color: black;
//     font-weight: 600;
//     white-space: nowrap;
//     @media only screen and (max-width: 600px) {
//       width: 85%;
//       font-size: 0.8rem;
//     white-space: nowrap;
//     }
// `;
import React from 'react';
const CartTable = ({  }) => {
    const data = {
        "Completed puzzle dimension": '24x18 inch / 60x45 cm',
        "Piece count": "500pc",
        "Packaging":"Set-Up Box",
        "Age group": '6+',
        "Package dimension": '12x8x2 inch / 30x20x5 cm',
        "Weight": '0.56lb'
      };
  return (
    <table className="min-w-full border-collapse border border-gray-200">
      <tbody>
        {Object.keys(data).map((key) => (
          <tr key={key} className="bg-gray-50 odd:bg-white">
            <th className="p-2 text-left font-medium text-gray-600 border border-gray-200">{key}</th>
            <td className="p-2 border border-gray-200">{data[key]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;