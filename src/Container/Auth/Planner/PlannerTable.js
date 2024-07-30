import React, { useEffect, useState, useMemo, lazy ,Component, Suspense} from "react";
import { connect } from "react-redux";
import { Tooltip } from 'antd';
import { bindActionCreators } from "redux";
import moment from "moment";
// import { elipsize } from '../../../Helpers/';
import { StyledTable } from "../../../Components/UI/Antd";
import {getDateWiseList,handleAddJobDetailtModal} from "../Planner/PlannerAction";
import TaskTable from "./TaskTable";
import AddtaskModal from "./AddtaskModal";



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
        subTableVisible: false,
        rowData:{},

      };
    }
    handleRowData=(data)=>{
      this.setState({
        subTableVisible: !this.state.subTableVisible,
        rowData:data
      })
    }
    componentDidMount() {
       
       const { getDateWiseList, userId, startDate, endDate } = this.props;
       getDateWiseList(userId,  startDate, endDate);
      
     }


     componentWillReceiveProps(nextProps) {
        if (
          this.props.startDate !== nextProps.startDate ||
          this.props.endDate !== nextProps.endDate
        ) {
             
          const { getDateWiseList, userId, startDate, endDate } = nextProps;
          getDateWiseList(userId, startDate, endDate);
             
        }
      }
  


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
    console.log("data",this.props.userId);
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
      
        render: (name, item, i) => {
          return (
          
          
              <>
                  <span
                  onClick={() => {
                    this.props.handleAddJobDetailtModal(true);
                    this.handleRowData(item)
                    //this.props.setCurrentOpportunityRecruitMentData(item);
                  }}
                   style={{
                    color:
                      this.state.subTableVisible && item.taskName === this.state.rowData.taskName
                        ? "orange"
                        : "blue",
                    cursor: "pointer",
                  }}
                >
                           {item.taskName }
                </span>
              </>
          
          );
         
        }, 
      },
      {
        title:"Hours",
        width: "15%",
        dataIndex: "hour",
      },

      {
        title:"Date",
        width: "15%",
        dataIndex: "startDate",
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
        title:"Billing Rate",
        width: "15%", 
        dataIndex: "billingAmount",
      },
      {
        title:"Billed",
        width: "15%",
        dataIndex: "finalBillableAmount",
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
        dataSource={this.props.showDatelist}
       // loading={fetchingCustomers || fetchingCustomersError || fetchingAllCustomers}
        // scroll={{ y: 500 }}
        // pagination={false
        //scroll={{ y: tableHeight }}

        pagination={false}
      

      />
     
         
     <Suspense fallback={"Loading"}>
        
        <AddtaskModal
       rowData={this.state.rowData}
        handleAddJobDetailtModal={this.props.handleAddJobDetailtModal}
        addjobDetailModal={this.props.addjobDetailModal}
        
        />
     
    </Suspense>
    
     
    </>
  );
    
  
}
}
const mapStateToProps = ({ auth, customer,planner, sector, opportunity,employee }) => ({
    userId:auth.userDetails.userId,
    endDate: planner.endDate,
    startDate: planner.startDate,
    addjobDetailModal:planner.addjobDetailModal,
    showDatelist:planner.showDatelist
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
        getDateWiseList,
        handleAddJobDetailtModal
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(PlannerTable);
