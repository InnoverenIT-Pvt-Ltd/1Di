import React, { useEffect, useState, useMemo, lazy ,Component} from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import moment from "moment";

import { StyledTable } from "../../../Components/UI/Antd";
import {getTaskList} from "../Planner/PlannerAction";
import { Tooltip } from "@mui/material";



class PlannerTable extends Component {

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
       
       const { getTaskList,rowData, hourId } = this.props;
       getTaskList(rowData.hourId);
      //console.log(rowData)
     }


    //  componentWillReceiveProps(nextProps) {
    //     if (
    //       this.props.startDate !== nextProps.startDate ||
    //       this.props.endDate !== nextProps.endDate
    //     ) {
             
    //       const { getDateWiseList, candidateId, startDate, endDate } = nextProps;
    //       getDateWiseList(candidateId, startDate, endDate);
             
    //     }
    //   }
  


//   const {
//     fetchingCustomers,
//     customerByUserId,
//     handleUpdateCustomerModal,
//     updateCustomerModal,
//     fetchingCustomersError,
//     fetchingAllCustomers,
//     user,
//     IconShowhover,
//   } = props;
  // if (fetchingCustomers) {
  //   return <BundleLoader />;
  // }
  render() {
    
  const columns = [
  

    {
        title:"Project",
        width: "15%",
        dataIndex: "projectName",
      },
      {
        title:"Customer",
        width: "15%",
        dataIndex: "customerName",
      },
      {
        title:"Task",
        width: "15%",
        dataIndex: "taskName",
      
      },
      {
        title:"Creation Date",
        width: "15%",
        dataIndex: "creationDate",
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
        width: "15%", 
        dataIndex: "completeUnit",
      },
      {
        title:"Approved Unit",
        width: "15%",
        dataIndex: "approveUnit",
      },
      {
        title:"Status",
        width: "15%",
        dataIndex: "aproveInd",
        render: (name, item, i) => { 
          return (
            <>
            <Tooltip title={item.aproveInd===true?"Approved":"Not Approved"}> 
                <div
                style={{
                  borderRadius: "45%",
                  height: "1.1em",
                  width: "1.1em",
                  backgroundColor: item.aproveInd ===true ?"green":"red",
                }}
              >
              </div>
               </Tooltip>
            {/* {item.aproveInd===true?<h1 class="text-xs">Approved</h1>:<h1 class="text-xs">Not Approverd</h1>} */}
            </>
          );
          }
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
        // rowKey="accountId"
        // rowSelection={rowSelection}
       // rowKey={(record) => record.customerId}
        columns={columns}
        dataSource={this.props.Tasklist}
       // loading={fetchingCustomers || fetchingCustomersError || fetchingAllCustomers}
        // scroll={{ y: 500 }}
        // pagination={false
        //scroll={{ y: tableHeight }}

        pagination={false}
      

      />
     
         

    
     
    </>
  );
    
  
}
}
const mapStateToProps = ({ auth, customer,planner, sector, opportunity,employee }) => ({
    candidateId:auth.userDetails.candidateId,
    endDate: planner.endDate,
    startDate: planner.startDate,
    showDatelist:planner.showDatelist,
    Tasklist:planner.Tasklist,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getTaskList
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(PlannerTable);
