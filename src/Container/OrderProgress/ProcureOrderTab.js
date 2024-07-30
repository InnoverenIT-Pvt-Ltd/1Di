import React, { useEffect, useState, useMemo, lazy } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Tooltip, Icon, Button, Input, Popconfirm, Modal,Badge } from "antd";
import styled from 'styled-components';
import OrderInProgressCard from './OrderInProgressCard';
import ProcureQuotationCard from './ProcureQuotationCard';


function ProcureOrderTab (props) {

    const [clickedTab,setClickedTab]= useState("order");


   
    return (
      <>
<div class="flex mt-4">
    <div class=" flex items-center bg-[burlywood] border rounded-md p-[0.3rem]" >
         <span 
        onClick={() => setClickedTab("order")} 
        style={{
          color:clickedTab === "order" && "fuchsia",
          cursor:"pointer"
        }}
        >
        Order
        </span>
      
&nbsp;&nbsp;
        <span 
        onClick={() => setClickedTab("quotation")} 
        style={{
          color:clickedTab === "quotation" && "fuchsia",
          cursor:"pointer"
        }}
        >
          Quotation
        </span>
      

    </div>

    </div>

{clickedTab === "order" ? (
      <OrderInProgressCard/>
) : clickedTab === "quotation" ?
<h1>Hii</h1>
: null
}
       </>
    )
}

const mapStateToProps = ({ myorder, auth, setting, requirement }) => ({

});
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {

        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(ProcureOrderTab);
