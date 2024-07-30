import React, { useEffect, useState, useMemo, lazy ,Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";
import { StyledTable } from "../../Components/UI/Antd";
import {getTaskName} from "../Task/TaskAction";
import { Tooltip } from "@mui/material";
class TaskNameTable extends Component {

    constructor() {
        super();
        var today = new Date(),
        date =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate();
    
      this.state = {
        date: date,
      };
    }

    componentDidMount() {
       
       const { getTaskName,rowDataPass,candidateId } = this.props;
       getTaskName(candidateId,rowDataPass.taskId);
     }
  
  render() {
    
  const columns = [
  

    {
        title:"Project",
        width: "12%",
        dataIndex: "projectName",
      },
      {
        title:"Customer",
        width: "12%",
        dataIndex: "customerName",
      },
      {
        title:"Start Date",
        width: "12%",
        dataIndex: "PlannerStartDate",
        render: (text, item) => {
         // const availableDate = moment(item.startDate).format("ll");
          return (
            <>
              {item.startDate === null ? (
                "No Data"
              ) : (
                <span>{moment(item.startDate).format("l")}</span>
              )}
            </>
          );
        },
      },
      {
        title:"Complete Unit",
        width: "10%", 
        dataIndex: "completeUnit",
      },
      {
        title:"Note",
        width: "20%",
        dataIndex: "note",
      },
      {
        title:"Approved Unit",
        width: "10%",
        dataIndex: "aproveUnit",
      },
      {
        title:"Remark",
        width: "15%",
        dataIndex: "remark",
      },
     
  ];
    
//   if (fetchingCustomersError) {
//     return <APIFailed />;
//   }
  const tab = document.querySelector(".ant-layout-sider-children");
  const tableHeight = tab && tab.offsetHeight * 0.75;
  return (
    <>   
      <StyledTable
        columns={columns}
        dataSource={this.props.TaskName}
        pagination={false}

      />
     
    </>
  );
    
  
}
}
const mapStateToProps = ({ auth, task,planner }) => ({
    candidateId:auth.userDetails.candidateId,
    endDate: planner.endDate,
    startDate: planner.startDate,
    showDatelist:planner.showDatelist,
    TaskName:task.TaskName,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getTaskName
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(TaskNameTable);
