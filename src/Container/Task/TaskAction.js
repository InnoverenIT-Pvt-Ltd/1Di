import * as types from "./TaskActionTypes";
import { base_url } from "../../Config/Auth";
import axios from "axios";
import { message } from "antd";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

export const getTaskByCandidateId=(candidateId)=>(dispatch)=>
{
  dispatch({
    type:types.GET_TASK_BY_CANDIDATE_ID_REQUEST,
  });  
  axios.get(`${base_url}/task/candidate/web/${candidateId}?url=talent.tekorero.com`)
  .then((res)=>{
    dispatch({
        type:types.GET_TASK_BY_CANDIDATE_ID_SUCCESS,
        payload:res.data,
    });
  })
  .catch((err)=>{
    dispatch({
        type:types.GET_TASK_BY_CANDIDATE_ID_FAILURE,
    });
  });
};

export const handleTaskDrawerModal =(modalProps)=>(dispatch)=>{
  dispatch({
    type:types.HANDLE_TASK_DRAWER_MODAL,
    payload:modalProps,
  })
}
export const handleNoteDrawerModal =(modalProps)=>(dispatch)=>{
  dispatch({
    type:types.HANDLE_NOTE_DRAWER_MODAL,
    payload:modalProps,
  })
}
export const handlTaskNameDrawerModal =(modalProps)=>(dispatch)=>{
  dispatch({
    type:types.HANDLE_TASKNAME_DRAWER_MODAL,
    payload:modalProps,
  })
}
export const updateTaskStatus = (data,candidateId,taskId) => (dispatch) => {
  dispatch({
    type: types.UPDATE_TASK_STATUS_REQUEST,
  });
  axios
    .put(`${base_url}/task/candidate/web/status/${candidateId}/${taskId}?url=talent.tekorero.com`,data,{})
    .then((res) => {
      dispatch({
        type: types.UPDATE_TASK_STATUS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.UPDATE_TASK_STATUS_FAILURE,
        payload: err,
      });
    });
};
export const addTaskHour = (data, cb) => (dispatch) => {
  dispatch({
    type: types.ADD_TASK_HOUR_REQUEST,
  });
  axios
    .post(`${base_url}/hour/save/website?url=talent.tekorero.com`, data)
    .then((res) => {
      console.log(res);

      dispatch({
        type: types.ADD_TASK_HOUR_SUCCESS,
        payload: res.data,
      });
      cb();
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.ADD_TASK_HOUR_FAILURE,
        payload: err,
      });
    });
};

export const addNote = (note, cb) => (dispatch) => {
  dispatch({ type: types.ADD_OPPORTUNITY_NOTES_REQUEST });
  axios
    .post(`${base_url}/task/comment/save/website?url=talent.tekorero.com`, note, {
      // headers: {
      //   Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      // },
    })
    .then((res) => {
      dispatch({
        type: types.ADD_OPPORTUNITY_NOTES_SUCCESS,
        payload: res.note,
      });
      console.log(res);
      cb && cb();
    })
    .catch((err) => {
      dispatch({
        type: types.ADD_OPPORTUNITY_NOTES_FAILURE,
        payload: err,
      });
      console.log(err);
      cb && cb();
    });
};

export const getNotesListByOpportunityId = (taskId) => (dispatch) => {
  dispatch({
    type: types.GET_NOTES_LIST_BY_OPPORTUNITY_ID_REQUEST,
  });
  axios
    .get(`${base_url}/task/task-comment/all/list/website/${taskId}?url=talent.tekorero.com`, {
      // headers: {
      //   Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      // },
    })
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_NOTES_LIST_BY_OPPORTUNITY_ID_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_NOTES_LIST_BY_OPPORTUNITY_ID_FAILURE,
        payload: err,
      });
    });
};

export const getTaskName = (candidateId,taskId) => (dispatch) => {
  dispatch({
    type: types.GET_TASK_NAME_REQUEST,
  });
  axios
    .get(`${base_url}/hour/candidate/${candidateId}/${taskId}/website?url=talent.tekorero.com`, {
     
    })
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_TASK_NAME_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_TASK_NAME_FAILURE,
        payload: err,
      });
    });
};