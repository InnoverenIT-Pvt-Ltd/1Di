import React, { useEffect,useState } from "react";
import { Button, Tooltip, Badge,Input } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { BundleLoader } from "../../../Components/Placeholder";

const BottomContentHeaderActionLeft = (props) => {



//   useEffect(() => {
//     if (props.viewType === "card") {
//       props.getRecords(props.userId);
//     } else if (props.viewType === "table") {
//       props.getRecords(props.userId);
//     } else if (props.viewType === "dashboard") {
//       props.getCategoryRecords("blue");
//     }

//     if (transcript) {
//       console.log(">>>>>>>", transcript);
//       props.setCurrentData(transcript);
//     }
//   }, [props.viewType, props.userId, transcript]);
   
  const {user,categoriesPrds,handleActiveClick,activeClick}=props;
 

  return (
    <>
    <div class="flex">
    {categoriesPrds.map((item,i)=>{
      return (
          <>
    <div class=" flex items-center" key={i}>
    <span 
        onClick={() => handleActiveClick(item.categoryId)} 
        style={{
          color:activeClick === item.categoryId && "White",
          cursor:"pointer"
        }}
        >
          {item.categoryName}
        </span>
&nbsp;&nbsp;
         {/* <span 
        onClick={() => handleActiveClick("Home")} 
        style={{
          color:activeClick === "Home" && "White",
          cursor:"pointer"
        }}
        >
          Home
        </span>
&nbsp;&nbsp;
        <span 
        onClick={() => handleActiveClick("Clothing")} 
        style={{
          color:activeClick === "Clothing" && "white",
          cursor:"pointer"
        }}
        >
          Clothings
        </span>
        &nbsp;&nbsp;
        <span 
        onClick={() => handleActiveClick("Electronics")} 
        style={{
          color:activeClick === "Electronics" && "white",
          cursor:"pointer"
        }}
        >
          Electronics
        </span>
        &nbsp;&nbsp;
        <span 
        onClick={() => handleActiveClick("Health&Beauty")} 
        style={{
          color:activeClick === "Health&Beauty" && "white",
          cursor:"pointer"
        }}
        >
          Health & Beauty
        </span>
        &nbsp;&nbsp;
        <span 
        onClick={() => handleActiveClick("Watches")} 
        style={{
          color:activeClick === "Watches" && "white",
          cursor:"pointer"
        }}
        >
          Watches
        </span> */}

    </div>
    </>
        )
    })}
   </div>
   </>
  );
};
const mapStateToProps = ({ customer, auth, candidate }) => ({
//   user: auth.userDetails,
//   recordData: customer.recordData,
//   recordCategoryData: customer.recordCategoryData,
//   recordCategoryDataBlue: customer.recordCategoryDataBlue,
//   Candidatesort: candidate.Candidatesort,
//   userId: auth.userDetails.userId,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
    //   inputCustomerDataSearch,
    //   getRecords,
    //   getCategoryRecords,
    //   getCustomerListByUserId
    },
    dispatch
  );

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BottomContentHeaderActionLeft)
);
