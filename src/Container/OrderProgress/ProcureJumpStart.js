import React, {useEffect,useState} from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { JumpStartBox,JumpStartBox1,JumpStartBox2,JumpStartBox3 } from "../../Components/UI/Elements";
// import {getOrderCount,handleOrderOpenDrawer} from "../MyOrder/MyOrderAction";
// import OrderOpenDrawer from "./OrderOpenDrawer";
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';

function ProcureJumpStart (props) {
  // const [activeTable, setActiveTable] = useState('open');

  useEffect(()=>{
// props.getOrderCount(props.userId,"Repair");
  },[]);

  // const handleOrderOpenDrawer = (table) => {
  //   setActiveTable(table);
  //   props.handleOrderOpenDrawer(true); 
  // };

    return (
      <>
         <div className=" flex flex-col">
      <div class=" flex flex-row w-full" >
        <div class=" flex w-full max-sm:flex-col" >
          
          <div class="w-full md:w-1/2 xl:w-1/3 p-2">
                     
                     <div class={`bg-gradient-to-b from-[#bbf7d082] to-green-100 border-b-4 border-[#16a34a87]
                     ${props.activeTable ==='open' ? "border-[2px] border-[red]":""}
                     rounded-lg shadow-xl p-1 h-[5rem] w-wk flex items-center`}>
                         <div class="flex flex-row items-center text-xs">
                             <div class="flex-shrink pr-3">
                                 <div class="rounded-full p-2 bg-green-600"><DynamicFeedIcon className="text-white"/></div>
                             </div>
                             <JumpStartBox
              noProgress
              title={<FormattedMessage
                  id="app.ordersopen"
                  defaultMessage="Orders Open"
              />}
              jumpstartClick={()=> props.handleOrderOpenDrawer('open')}
              cursorData={"pointer"}
              // borderD={props.activeTable ==='open' ? "4px solid red":""}
            //   value={props.orderinDashboard.totalOrder}
            // isLoading={props.fetchingorderDetails}
            />
                         </div>
                     </div>
                 
                 </div> 
                 <div class="w-full md:w-1/2 xl:w-1/3 p-2">
                       
                       <div class={`bg-gradient-to-b from-[#fbcfe887] to-pink-100 border-b-4 border-[#ec48998f] 
                       rounded-lg shadow-xl p-1 h-[5rem] w-wk flex items-center ${props.activeTable ==='complete' ? "border-[2px] border-[red]":""}`}>
                           <div class="flex flex-row items-center text-xs">
                               <div class="flex-shrink pr-3">
                                   <div class="rounded-full p-2 bg-pink-600"><DynamicFeedIcon className="text-white"/></div>
                               </div>
                               <JumpStartBox
             noProgress
             title={<FormattedMessage
                 id="app.orderscompleted"
                 defaultMessage="Orders Completed"
             />}
 
             jumpstartClick={()=>props.handleOrderOpenDrawer('complete')}
             cursorData={"pointer"}
            //  borderD={props.activeTable ==='complete' ? "4px solid red":""}
            // value={ props.orderinDashboard.pendingOrder}
            isLoading={props.fetchingorderDetails}
            />
                           </div>
                       </div>
                    
                   </div>  
                    
                <div class="w-full md:w-1/2 xl:w-1/3 p-2">
                       
                       <div class={`bg-gradient-to-b from-[#fef08a70] to-yellow-100 border-b-4 border-[#ca8a0494] 
                       rounded-lg shadow-xl p-1 h-[5rem] w-wk flex items-center ${props.activeTable ==='shipped' ? "border-[2px] border-[red]":""}`}>
                           <div class="flex flex-row items-center text-xs">
                               <div class="flex-shrink pr-3">
                                   <div class="rounded-full p-2 bg-yellow-600"><DynamicFeedIcon className="text-white"/></div>
                               </div>
                               <JumpStartBox
                noProgress
                title={<FormattedMessage
                    id="app.ordersshipped"
                    defaultMessage="Orders Shipped"
                />}
                jumpstartClick={() => props.handleOrderOpenDrawer('shipped')}
                // borderD={props.activeTable ==='cancelled' ? "4px solid red":""}
                cursorData={"pointer"}
            // value={props.orderinDashboard.completeOrder}
            isLoading={props.fetchingorderDetails}
            />
                           </div>
                       </div>
                     
                   </div>  
                   
                   <div class="w-full md:w-1/2 xl:w-1/3 p-2">
                      
                      <div class={`bg-gradient-to-b from-[#bfdbfe7a] to-blue-100 border-b-4 border-[#3b82f699] rounded-lg 
                      shadow-xl p-1 h-[5rem] w-wk flex items-center ${props.activeTable ==='cancelled' ? "border-[2px] border-[red]":""}`}>
                          <div class="flex flex-row items-center text-xs">
                              <div class="flex-shrink pr-3">
                                  <div class="rounded-full p-2 bg-blue-600"><DynamicFeedIcon className="text-white"/></div>
                              </div>
                              <JumpStartBox
                              noProgress
                              title={<FormattedMessage
                                  id="app.orderscancelled"
                                  defaultMessage="Orders Cancelled"
                              />}
                              jumpstartClick={() => props.handleOrderOpenDrawer('cancelled')}
                              // borderD={props.activeTable ==='cancelled' ? "4px solid red":""}
                              cursorData={"pointer"}
                            //   value={props.orderinDashboard.cancelOrder}
                            // isLoading={props.fetchingorderDetails}
                            />
                          </div>
                      </div>      
                  </div>
          </div>
          
        </div>
        </div>

      {/* <OrderOpenDrawer
      activeTable={activeTable}
      orderedoPENModal={props.orderedoPENModal}
      handleOrderOpenDrawer={props.handleOrderOpenDrawer}
      /> */}
      </>
     
    );
  }
const mapStateToProps = ({ myorder, auth }) => ({
  user: auth.userDetails,
  userId: auth.userDetails.userId,
//   orderListCount:myorder.orderListCount,
//   fetchingOrderCount:myorder.fetchingOrderCount,
//   orderedoPENModal:myorder.orderedoPENModal,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
 
    //   getOrderCount,
      // handleOrderOpenDrawer
    //   getJumpInvestor4list,
    //   handlePitchQualifiedDrawer,
    //   handlePitchAddedDrawer,
    //   handleDealClosedDrawer

    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProcureJumpStart);
