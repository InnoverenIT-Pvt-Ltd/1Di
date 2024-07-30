import * as types from "./PlannerActionTypes";
import axios from "axios";
import moment from "moment";
import { base_url } from "../../../Config/Auth";


export const setPlannerViewType = (viewType) => (dispatch) =>
  dispatch({ type: types.SET_PLANNER_VIEW_TYPE, payload: viewType });

// /**
//  * set planner startDate and endDate on drag of calendar
//  */
export const setPlannerDate = (date) => (dispatch) => {
  const formattedDate = {
    startDate: moment(date.start, "YYYY-MM-DD"),
    endDate: moment(date.end, "YYYY-MM-DD"),
    startTime: moment(date.start, "HH:mm:ss"),
    endTime: moment(date.end, "HH:mm:ss"),
  };
  console.log("*******)()()()(", formattedDate);
  dispatch({
    type: types.SET_PLANNER_DATE,
    payload: formattedDate,
  });
};


export const setTimeRangeReport = (startDate, endDate) => (dispatch) => {
  dispatch({
    type: types.SET_TIME_INTERVAL_REPORT,
    payload: {
      startDate: moment(startDate).toISOString(),
      endDate: moment(endDate).toISOString(),
    },
  });
};


export const setSelectedTimeIntervalReport = (selectedTime) => (dispatch) => {
  console.log(selectedTime);
  dispatch({
    type: types.CHANGE_SELECTED_TIME_INTERVAL_REPORT,
    payload: selectedTime,
  });
};

// /**
//  * set startDate/endDate and startTime/endTime
//  */
// export const setDateTime = (dateTime) => (dispatch) => {
//   dispatch({
//     type: types.SET_DATE_AND_TIME,
//     payload: dateTime,
//   });
// };
/**
 *handle which of one (call, event, task ) form modal to show on calendar drag
 */
export const handleChooserModal = (modalForm) => (dispatch) => {
  dispatch({
    type: types.HANDLE_CHOOSER_MODAL,
    payload: modalForm,
  });
};
/**
 *handle the modal open close when a calender event is selected
 */
// export const handleViewEditModal = (modalProps) => (dispatch) => {
//   dispatch({
//     type: types.HANDLE_VIEW_EDIT_MODAL,
//     payload: modalProps,
//   });
// };
// /**
//  *show modal to choose which modal to open(call, event , task)
//  */
// export const setFormModalType = (type) => (dispatch) => {
//   dispatch({
//     type: types.SET_FORM_MODAL_TYPE,
//     payload: type,
//   });
// };

// // export const getsharePlannerUsers = (cb) => (dispatch, getState) => {
// //   const { employeeId } = getState("auth").auth.employeeDetails;
// //   dispatch({
// //     type: types.GET_PLANNER_USERS_REQUEST,
// //   });

// //   axios
// //     .get(`${base_url}/partner/ShareUsers`, {
// //       headers: {
// //         Authorization: "Bearer " + sessionStorage.getItem("token") || "",
// //       },
// //     })
// //     .then((res) => {
// //       console.log(res);
// //       dispatch({
// //         type: types.GET_PLANNER_USERS_SUCCESS,
// //         payload: res.data,
// //       });
// //       cb && cb("success");
// //     })
// //     .catch((err) => {
// //       console.log(err);
// //       dispatch({
// //         type: types.GET_PLANNER_USERS_FAILURE,
// //         payload: err,
// //       });
// //       cb && cb("failure");
// //     });
// // };

// export const getPlannerPermissionsList = () => (dispath) => {
//   dispath({ type: types.GET_PERMISSIONS_LIST_REQUEST });
//   axios
//     .get(`${base_url}/permission/type?type=${"planner"}`, {
//       headers: {
//         Authorization: "Bearer " + sessionStorage.getItem("token") || "",
//       },
//     })
//     .then((res) => {
//       dispath({
//         type: types.GET_PERMISSIONS_LIST_SUCCESS,
//         payload: res.data,
//       });
//     })
//     .catch((err) => {
//       dispath({
//         type: types.GET_PERMISSIONS_LIST_FAILURE,
//         payload: err,
//       });
//     });
// };

// export const sharePlannerPermission = (data, userId) => (
//   dispatch,
//   getState
// ) => {
//   // const { userId } = getState("auth").auth.userDetails;
//   dispatch({
//     type: types.SHARE_PLANNER_PERMISSION_REQUEST,
//   });

//   axios
//     .post(`${base_url}/permission/details`, data, {
//       headers: {
//         Authorization: "Bearer " + sessionStorage.getItem("token") || "",
//       },
//     })
//     .then((res) => {
//       // console.log(res);
//       // dispatch(getOpportunityListByUserId(userId));
//       // dispatch(getRecords(userId));
//       dispatch({
//         type: types.SHARE_PLANNER_PERMISSION_SUCCESS,
//         payload: res.data,
//       });
//       //  cb && cb("success");
//     })
//     .catch((err) => {
//       console.log(err);
//       dispatch({
//         type: types.SHARE_PLANNER_PERMISSION_FAILURE,
//         payload: err,
//       });
//       //  cb && cb("failure");
//     });
// };


export const getCandidateProject = (candidateId) => (dispatch) => {
  dispatch({
    type: types.GET_CANDIDATE_PROJECT_REQUEST,
  });
  axios
  .get(`${base_url}/recriutment/web/project-name/${candidateId}?url=talent.tekorero.com`, {
    // headers: {
    //   Authorization: "Bearer " + sessionStorage.getItem("token") || "",
    // },
  })
    
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_CANDIDATE_PROJECT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_CANDIDATE_PROJECT_FAILURE,
        payload: err,
      });
    });
};


export const addHour = (opportunity,candidateId, cb) => (dispatch, getState) => {
  const userId = getState().auth.userDetails.userId;
  dispatch({
    type: types.ADD_PLANNER_HOUR_REQUEST,
  });
  axios
    .post(`${base_url}/hour/save/website?url=talent.tekorero.com`, opportunity, {
      // headers: {
      //   Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      // },
    })
    .then((res) => {
      console.log(res);
       dispatch(getHourListByUserId(candidateId));
      dispatch({
        type: types.ADD_PLANNER_HOUR_SUCCESS,
        payload: res.data,
      });
      cb();
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.ADD_PLANNER_HOUR_FAILURE,
        payload: err,
      });
    });
};




export const getDateWiseList = (userId,endDate,startDate,) => (dispatch) => {
  dispatch({
    type: types.GET_DATE_WISE_REPORT_REQUEST,
  });
  axios
    .get(`${base_url}/todo/planner/${userId}?endDate=${endDate}&startDate=${startDate}`, {
     headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      dispatch({
        type: types.GET_DATE_WISE_REPORT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_DATE_WISE_REPORT_FAILURE,
      });
    });
};


export const getTaskList = (hourId) => (dispatch) => {
  dispatch({
    type: types.GET_TASK_LIST_REQUEST,
  });
  axios
    .get(`${base_url}/hour/candidate/task/${hourId}/website?url=talent.tekorero.com`, {
    //  headers: {
    //     Authorization: "Bearer " + sessionStorage.getItem("token") || "",
    //   },
    })
    .then((res) => {
      dispatch({
        type: types.GET_TASK_LIST_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_TASK_LIST_FAILURE,
      });
    });
};


export const getCandidateCustomer = (candidateId) => (dispatch) => {
  dispatch({
    type: types.GET_CANDIDATE_CUSTOMER_REQUEST,
  });
  axios
  .get(`${base_url}/recriutment/web/project-name/customer/${candidateId}?url=talent.tekorero.com`, {
    // headers: {
    //   Authorization: "Bearer " + sessionStorage.getItem("token") || "",
    // },
  })
    
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_CANDIDATE_CUSTOMER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_CANDIDATE_CUSTOMER_FAILURE,
        payload: err,
      });
    });
};


export const addLeaves = (opportunity, cb) => (dispatch, getState) => {
  const userId = getState().auth.userDetails.userId;
  dispatch({
    type: types.ADD_PLANNER_LEAVES_REQUEST,
  });
  axios
    .post(`${base_url}/employee/leave/website?url=talent.tekorero.com`, opportunity, {
      // headers: {
      //   Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      // },
    })
    .then((res) => {
      console.log(res);

      dispatch({
        type: types.ADD_PLANNER_LEAVES_SUCCESS,
        payload: res.data,
      });
      cb();
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.ADD_PLANNER_LEAVES_FAILURE,
        payload: err,
      });
    });
};


export const getCandidateTask = (candidateId) => (dispatch) => {
  dispatch({
    type: types.GET_CANDIDATE_TASK_REQUEST,
  });
  axios
  .get(`${base_url}/task/candidate/web/${candidateId}?url=talent.tekorero.com`, {
    // headers: {
    //   Authorization: "Bearer " + sessionStorage.getItem("token") || "",
    // },
  })
    
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_CANDIDATE_TASK_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_CANDIDATE_TASK_FAILURE,
        payload: err,
      });
    });
};

export const handleAddJobDetailtModal = (modalProps) => (dispatch) => {
  dispatch({
    type: types.HANDLE_ADD_JOB_DETAIL_MODAL,
    payload: modalProps,
  });
};

export const getHourListByUserId = (userId,endDate,startDate) => (dispatch) => {
  dispatch({
    type: types.GET_HOUR_LIST_BY_USER_ID_REQUEST,
  });
  axios
    .get(`${base_url}/todo/planner/${userId}?endDate=${endDate}&startDate=${startDate}`, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_HOUR_LIST_BY_USER_ID_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_HOUR_LIST_BY_USER_ID_FAILURE,
        payload: err,
      });
    });
};

export const getDepartmentList = (orgId) => (dispath) => {
  dispath({ type: types.GET_DEPARTMENT_LIST_REQUEST });
  axios
    .get(`${base_url}/department/accesss/${orgId}`, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      dispath({
        type: types.GET_DEPARTMENT_LIST_SUCCESS,
        payload: res.data,
      });

    })
    .catch((err) => {
      dispath({
        type: types.GET_DEPARTMENT_LIST_FAILURE,
        payload: err,
      });
    });
};

export const getDepartmentRoleData = (departmentId) => (dispatch) => {

  dispatch({
    type: types.GET_DEPARTMENT_ROLE_DATA_REQUEST,
  });
  axios
    .get(`${base_url}/roleType/department/${departmentId}`, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_DEPARTMENT_ROLE_DATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err.response);
      dispatch({
        type: types.GET_DEPARTMENT_ROLE_DATA_FAILURE,
        payload: err,
      });
    });
};
export const getUserbyIDs = (departmentId,roletypetypeId) => (dispatch) => {
  dispatch({
    type: types.GET_USER_BY_IDS_REQUEST,
  });
  axios
    .get(`${base_url}/employee/active/user/${departmentId}/${roletypetypeId}`, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_USER_BY_IDS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err.response);
      dispatch({
        type: types.GET_USER_BY_IDS_FAILURE,
        payload: err,
      });
    });
};