import React, { useState, useEffect, useMemo } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Button,
  Switch,
  Icon,
  Tooltip,
  Popconfirm,
  Checkbox,
  message,
  Select
} from "antd";
import { 
  getDepartmentList,
  getDepartmentRoleData,
  getUserbyIDs,
  getHourListByUserId,
} from "../PlannerAction";



const { Option } = Select;

function PlannerSharedForm(props) {

  const [selectedDep,setselectedDep]= useState("");
  const [selectDepRole,setselectDepRole]= useState("");
  const [selectedUser,setSelectedUser]= useState("");

  useEffect(() => {
    props.getDepartmentList(props.organizationId);
  }, []);

function SelectDepartment (value) {
  console.log("chooD-",value,"dep-",selectedDep)
  setselectedDep(value)
  console.log("depp-",value)
  props.getDepartmentRoleData(value)
}
function SelectDepartmentRole (value) {
  console.log("chooDR-",value,"depR-",selectDepRole)
  setselectDepRole(value)
  console.log("depRR-",selectDepRole)
  props.getUserbyIDs(selectedDep,value)
}

function SelectUser (value) {
  setSelectedUser(value);
  console.log("depRR-",selectedUser)
  props.getHourListByUserId(value,props.endDate,props.startDate)
}

  return (
    <>
    <div>
                  <Select
                    style={{ width: 100, height:"2rem" }}
                    value={selectedDep}
                    onChange={(value) => SelectDepartment(value)}
                 >
                    {props.departmentList.map((a) => (
                      <Option key={a.id} value={a.departmentId
                      }>{a.departmentName}</Option>
                    ))}
                  </Select>
                </div>
                <div>
                  <Select
                    style={{ width: 100,height:"2rem" }}
                    value={selectDepRole}
                    onChange={(value) => SelectDepartmentRole(value)}
                    // disabled={!fieldEnabled.brand}
                 >
                    {props.departmentRoleData.map((a) => (
                      <Option key={a.roleTypeId} value={a.roleTypeId}>{a.roleType}</Option>
                    ))}
                  </Select>
                  </div>
                  <div>
                  <Select
                    style={{ width: 100,height:"2rem" }}
                    value={selectedUser}
                    onChange={(value) => SelectUser(value)}
                    // disabled={!fieldEnabled.brand}
                 >
                    {props.USerByIds.length ===0 ? "" : props.USerByIds.map((a) => (
                      <Option key={a.employeeId} value={a.employeeId}>{a.empName}</Option>
                    ))}
                  </Select>
                  </div>

    </>
  );
}

const mapStateToProps = ({ planner,auth }) => ({
   addingSharingPlanner: planner.addingSharingPlanner,
   userId:auth.userDetails.userId,
  departmentList: planner.departmentList,
  organizationId:auth.userDetails.organizationId,
  departmentRoleData: planner.departmentRoleData,
  fetchingDepartmentList: planner.fetchingDepartmentList,
fetchingDepartmentRoleData: planner.fetchingDepartmentRoleData,
USerByIds:planner.USerByIds,
endDate: planner.endDate,
startDate: planner.startDate,

});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getDepartmentList,
      getDepartmentRoleData,
      getUserbyIDs,
      getHourListByUserId
      
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PlannerSharedForm);
