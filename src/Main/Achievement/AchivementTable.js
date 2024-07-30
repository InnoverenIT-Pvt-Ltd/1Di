import React, { Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";
import {getDateWiseListAchievement} from "../Achievement/AchievementAction";
import { StyledTable } from "../../Components/UI/Antd";
import { BundleLoader } from "../../Components/Placeholder";

class AchivementTable extends Component {

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
       
       const { getDateWiseListAchievement, candidateId, startDate, endDate } = this.props;
       getDateWiseListAchievement(candidateId,  startDate, endDate);
      
     }


     componentWillReceiveProps(nextProps) {
        if (
          this.props.startDate !== nextProps.startDate ||
          this.props.endDate !== nextProps.endDate
        ) {
             
          const { getDateWiseListAchievement, candidateId, startDate, endDate } = nextProps;
          getDateWiseListAchievement(candidateId, startDate, endDate);
             
        }
      }
  



  render() {
      const {
        fetchingDatewiseAchievement,
        fetchingDatewiseAchievementError
  } = this.props;
  if (fetchingDatewiseAchievement) {
    return <BundleLoader />;
  }
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
        title:"Date",
        width: "15%",
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
        // rowKey="accountId"
        // rowSelection={rowSelection}
       // rowKey={(record) => record.customerId}
        columns={columns}
        dataSource={this.props.showAchievement}
        loading={fetchingDatewiseAchievement || fetchingDatewiseAchievementError}
        // scroll={{ y: 500 }}
        // pagination={false
        //scroll={{ y: tableHeight }}

        pagination={false}
      

      />
     
    </>
  );
    
  
}
}
const mapStateToProps = ({ auth, achievement}) => ({
    candidateId:auth.userDetails.candidateId,
    endDate: achievement.endDate,
    startDate: achievement.startDate,
    showAchievement:achievement.showAchievement,
    fetchingDatewiseAchievement:achievement.fetchingDatewiseAchievement,
    fetchingDatewiseAchievementError:achievement.fetchingDatewiseAchievementError
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getDateWiseListAchievement,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(AchivementTable);
