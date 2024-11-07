import * as types from "../Notification/NotificationActionTypes";
import axios from "axios";
import { hrWeb } from "../../Config/Auth";
const notificationURL =
  "https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo";
// const notificationURL = 'https://api.myjson.com/bins/qwboy';

export const getPastNotifications = (userId) => dispatch => {
  console.log("inside getPastNotifications()");
  dispatch({
    type: types.GET_PAST_NOTIFICATIONS_REQUEST
  });
  return axios
    .get(`${hrWeb}/previous/notifications/${userId}`, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || ""
      }
    })
    .then(res => {
      console.log(res);
      dispatch({
        type: types.GET_PAST_NOTIFICATIONS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: types.GET_PAST_NOTIFICATIONS_FAILURE,
        payload: err
      });
    });
};

export const getPresentNotifications = (userId) => dispatch => {
  console.log("inside notification action");
  dispatch({
    type: types.GET_PRESENT_NOTIFICATIONS_REQUEST
  });
  return axios
    .get(`${hrWeb}/present/notifications/${userId}`, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || ""
      }
    })
    .then(res => {
      console.log(res);
      dispatch({
        type: types.GET_PRESENT_NOTIFICATIONS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: types.GET_PRESENT_NOTIFICATIONS_FAILURE,
        payload: err
      });
    });
};

export const updateNotifcation = (notificationId, data, cb) => dispatch => {
  console.log(data);
  dispatch({ type: types.UPDATE_NOTIFICATION_BY_ID_REQUEST });
  axios
    .patch(
      `${hrWeb}/notification/${notificationId}`,
      { ...data },
      {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token") || ""
        }
      }
    )
    .then(res => {
      console.log(res);
      dispatch({
        type: types.UPDATE_NOTIFICATION_BY_ID_SUCCESS,
        payload: res.data
      });
      cb && cb("success", res.data);
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: types.UPDATE_NOTIFICATION_BY_ID_FAILURE,
        payload: err
      });
      cb && cb("error");
    });
};
export const getNotificationsCount = (userId) => dispatch => {
  dispatch({
    type: types.GET_NOTIFICATIONS_COUNT_REQUEST,
  });
  return axios
    .get(`${hrWeb}/notification/count/${userId}`, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || ""
      }
    })
    .then(res => {
      console.log(res);
      dispatch({
        type: types.GET_NOTIFICATIONS_COUNT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: types.GET_NOTIFICATIONS_COUNT_FAILURE,
        payload: err
      });
    });
};
