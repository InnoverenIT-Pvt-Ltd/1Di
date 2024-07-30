import React, { useEffect, useState, useMemo, lazy } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Tooltip, Avatar,Badge } from "antd";
import TocIcon from '@mui/icons-material/Toc';
import TableViewIcon from '@mui/icons-material/TableView';

function OrderSupplierActionLeft (props) {

   
    return (
      <>
<div class="flex">
    <div class=" flex items-center" >
    <Tooltip title="Orders View">
                        <Badge size="small"
                            // count={props.recordData.distributor || 0}
                        >
                            <span class=" mr-1 text-sm cursor-pointer"
                                onClick={() => props.setClickedTab("order")} 
                                style={{
                                  color:props.clickedTab === "order" && "fuchsia",
                                  cursor:"pointer"
                                }}
                            >
                                <Avatar style={{ background: props.clickedTab === "order" ? "#f279ab" : "#4bc076" }}>
                                    <TableViewIcon className="text-white !text-icon" /></Avatar>

                            </span>
                        </Badge>
                    </Tooltip>
    <Tooltip title="Trade View">
                        <Badge size="small"
                            // count={props.recordData.distributor || 0}
                        >
                            <span class=" mr-1 text-sm cursor-pointer"
                                onClick={() => props.setClickedTab("trade")} 
                                style={{
                                  color:props.clickedTab === "trade" && "fuchsia",
                                  cursor:"pointer"
                                }}
                            >
                                <Avatar style={{ background: props.clickedTab === "trade" ? "#f279ab" : "#4bc076" }}>
                                    <TocIcon className="text-white !text-icon" /></Avatar>

                            </span>
                        </Badge>
                    </Tooltip>
                    
        
      

    </div>

    </div>


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

export default connect(mapStateToProps, mapDispatchToProps)(OrderSupplierActionLeft);
