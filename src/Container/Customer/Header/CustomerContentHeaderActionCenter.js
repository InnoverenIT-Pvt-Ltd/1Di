import React, { useEffect,useState } from "react";
import { Button, Tooltip, Badge,Icon,Input } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import FWLogo from "../../../Assests/Images/Logo_new.png";

const { Search } = Input;

function CustomerContentHeaderActionCenter (props) {

    return (
        <>
        <div class="flex">
          {/* <div>
      <img src={FWLogo} style={{ width: "10em" }} alt="img" />
      </div> */}
        <div>
        <div class = "flex">
 <Input
            placeholder={"Search here..."}
            style={{width:"19rem",marginLeft:"1rem",height:"2rem",marginRight:"0.5rem"}}
            // onChange={(e) => props.handleChange(e)}
            // value={props.currentData}
          />
   
      <Button
      // className="adhBtN"
        type="primary"
        // onClick={() => {
        //   props.searchCustomerName(props.currentData,props.serviceId);
        // }}
      >
         <label class="text-white">
         Submit
        </label>
      </Button>
      </div>
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
    connect(mapStateToProps, mapDispatchToProps)(CustomerContentHeaderActionCenter));


