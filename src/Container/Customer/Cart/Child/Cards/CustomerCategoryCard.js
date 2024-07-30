import React, { useEffect,useState } from "react";
import { Button, Tooltip, Badge,Icon,Input } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import {UnorderedListOutlined} from "@ant-design/icons";
import { base_url } from "../../../../../Config/Auth";
import { MultiAvatar } from "../../../../../Components/UI/Elements";

function CustomerCategoryCard (props) {
   
    const catgrys=[
        {
            cId:"1",
            cName:"Clothings"
        },
        {
            cId:"2",
            cName:"Electronics"
        },
        {
            cId:"3",
            cName:"Health & Beauty"
        },
        {
            cId:"4",
            cName:"Watches"
        },

    ]
    const {handleActiveClick,activeClick,categoriesPrds}=props;
    return (
        <>
        <div>
        <div class="w-72 pl-3 ">
<div class="bg-[#fdd922] text-[#333]-500 text-[20px] p-5 tracking-[0.2px]" 
style={{borderRadius: "10px 10px 0px 0px"}} >
  <UnorderedListOutlined />  Categories
    </div> 
    {categoriesPrds.map((item,i)=>{
        return (
            <>
<div class="border border-b-[#eaeaea] bg-[#e5dddd] p-5 text-base tracking-[0.2px] flex  items-center"
//  style={{color: activeClick === item.cName ? 'red' : 'green'}}
//  onClick={() => {
//     handleActiveClick(activeClick===item.cName)
//    }}
>
      <MultiAvatar
                                imageId={item.imageId ? item.imageId : ''}
                                imgHeight={"1.8rem"}
                                imgWidth={"1.8rem"}
                                imgRadius={20}
                            />  &nbsp;&nbsp;
                            
                            {item.categoryName}
    </div>
            </>
        )
    })}
    {/* <div class=" border border-b-[#eaeaea] bg-[#e5dddd]">
        Clothings
    </div>
    <div class="border border-b-[#eaeaea] bg-[#e5dddd]">
        Electronics
    </div> */}
    </div>
    </div>
        </>
    );

}
const mapStateToProps = ({ customer, auth }) => ({
    // viewType:customer.viewType,  
    // serviceUser:auth.serviceDetails,
    // serviceId:auth.serviceDetails.serviceId,
    // serviceDetails:auth.serviceDetails,
    // recordData:customer.recordData
  });
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
      {
        // setCustomerViewType,
        // searchCustomerName,
        // getAllCustomer,
        // getRecords
      },
      dispatch
    );
  
  export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(CustomerCategoryCard));


