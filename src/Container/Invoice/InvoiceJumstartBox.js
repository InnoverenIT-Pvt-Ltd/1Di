import React, {useEffect,useState} from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { JumpStartBox,JumpStartBox1,JumpStartBox2,JumpStartBox3 } from "../../Components/UI/Elements";
// import {getOrderCount,handleOrderOpenDrawer} from "../MyOrder/MyOrderAction";
// import OrderOpenDrawer from "./OrderOpenDrawer";

function InvoiceJumstartBox (props) {
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
       <div class=" flex flex-row w-full" >
        <div class=" flex w-full max-sm:flex-col" >
        {/* <div class="flex w-wk">
          <JumpStartBox
            noProgress
            title={<FormattedMessage
              id="app.ordersAdded"
              defaultMessage="Orders Added"
            />}
            // jumpstartClick={()=>handlePitchQualifiedDrawer(true)}
            cursorData={"pointer"}
            // value={ props.jumstartOrderCount.totalOrder}
            // isLoading={props.fetchingJumpOrderCount}
          />

          <JumpStartBox1
            noProgress
            title={<FormattedMessage
                id="app.ordersopen"
                defaultMessage="Orders Open"
            />}
            // jumpstartClick={()=>handlePitchAddedDrawer(true)}
            cursorData={"pointer"}
            // value={ props.jumstartOrderCount.pendingOrder}
            // isLoading={props.fetchingJumpOrderCount}
          />
</div> */}
<div class="flex w-wk">
<JumpStartBox1
            noProgress
            title={<FormattedMessage
                id="app.ordersopen"
                defaultMessage="Invoice Open"
            />}
            jumpstartClick={()=> props.handleOrderOpenDrawer('open')}
            cursorData={"pointer"}
            borderD={props.activeTable ==='open' ? "4px solid red":""}
            // value={ props.orderListCount.pendingOrder}
            // isLoading={props.fetchingOrderCount}
          />
          <JumpStartBox2
            noProgress
            title={<FormattedMessage
                id="app.orderscompleted"
                defaultMessage="Invoice Paid"
            />}

            jumpstartClick={()=>props.handleOrderOpenDrawer('complete')}
            cursorData={"pointer"}
            borderD={props.activeTable ==='complete' ? "4px solid red":""}
            // value={ props.orderListCount.completeOrder}
            // isLoading={props.fetchingOrderCount}
          />
          <JumpStartBox3
            noProgress
            title={<FormattedMessage
                id="app.orderscancelled"
                defaultMessage="Invoice Cancelled"
            />}
            jumpstartClick={() => props.handleOrderOpenDrawer('cancelled')}
            borderD={props.activeTable ==='cancelled' ? "4px solid red":""}
            cursorData={"pointer"}
            // value={ props.orderListCount.cancelOrder}
            // isLoading={props.fetchingOrderCount}
          />
           <JumpStartBox
            noProgress
            title={<FormattedMessage
                id="app.ordersapproved"
                defaultMessage="Invoice Approved"
            />}
            jumpstartClick={() => props.handleOrderOpenDrawer('approved')}
            borderD={props.activeTable ==='approved' ? "4px solid red":""}
            cursorData={"pointer"}
            // value={ props.orderListCount.cancelOrder}
            // isLoading={props.fetchingOrderCount}
          />
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
)(InvoiceJumstartBox);
