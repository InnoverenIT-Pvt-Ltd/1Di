import React, { useEffect,useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";
import { Tooltip,Button } from "antd";
import {
    handleUploadInventoryDrawer,
    getInventoryCartItemsCount
} from "./InventoryAction";
import { FileExcelOutlined } from "@ant-design/icons";
import UploadInventoryDrawer from "./UploadInventory/UploadInventoryDrawer";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import cart1 from "../../Assests/Images/cart1.png";
import TimeInterval from "../../Components/Utils/TimeInterval";
import { StyledSelect ,StyledRangePicker} from "../../Components/UI/Antd";
import {
  setSelectedTimeIntervalReport,
  setTimeRangeReport,
} from "../Auth/Planner/PlannerAction";

const Option = StyledSelect.Option;

function InventoryActionRight (props) {

  useEffect(()=>{
  props.getInventoryCartItemsCount(props.userId)
  },[]);


console.log("fffff",props.employee_type)
    return (
      <>

        <div class="flex items-center">
        {/* <TimeInterval
         times={props.dateRangeList}
          handleClick={props.setSelectedTimeIntervalReport}
        /> */}

        {props.employee_type === "Customer"  && 
        <div>
        <Link to="/shopName/inventorycart">
              <div className="cart-icon ">
                <ShoppingCartIcon style={{color:"white"}} class="w-8 h-8 text-white"/>
                <p>
                  {props.invencartItemCount.productCount}
                  {/* {props.linkInvntoryItems.productCount ? `${props.invencartItemCount.productCount}` : 
                  `${props.invencartItemCount.productCount}`=== "" ? `${props.invencartItemCount.productCount}`:"" } */}
                  </p> 
                &nbsp;
              </div>
            </Link>
            </div>
            }

{props.employee_type==="Supplier" && (
  <Button type="primary" onClick={()=> { props.handleAddSuplrInventory(true)}}>
    Add
  </Button>
)}
          {/* <Tooltip placement="left" title="Upload">
            <Button
              type="primary"
              ghost
              onClick={() => props.handleUploadInventoryDrawer(true)}
            >
              Upload
            </Button>
          </Tooltip> */}

        </div>
        
        <UploadInventoryDrawer
          handleUploadInventoryDrawer={props.handleUploadInventoryDrawer}
          uploadInvodrwr={props.uploadInvodrwr}
        />
      </>
    );
}

const mapStateToProps = ({ inventory, auth,planner }) => ({
  uploadInvodrwr: inventory.uploadInvodrwr,
  linkInvntoryItems:inventory.linkInvntoryItems,
  invencartItemCount:inventory.invencartItemCount,
  userId: auth.userDetails.userId,
  employee_type:auth.userDetails.employee_type,
dateRangeList: planner.dateRangeList,

});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      handleUploadInventoryDrawer,
      getInventoryCartItemsCount,
      setSelectedTimeIntervalReport,
      setTimeRangeReport
    },
    dispatch
  );
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InventoryActionRight));
