import * as types from "../Notification/NotificationActionTypes";
import axios from "axios";
import { base_url } from "../../Config/Auth";
const notificationURL =
  "https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo";
// const notificationURL = 'https://api.myjson.com/bins/qwboy';

export const getPastNotifications = (candidateId) => dispatch => {
  console.log("inside getPastNotifications()");
  dispatch({
    type: types.GET_PAST_NOTIFICATIONS_REQUEST
  });
  return axios
    .get(`${base_url}/previous/notifications/web/${candidateId}?url=talent.tekorero.com`, {
    //   headers: {
    //     Authorization: "Bearer " + sessionStorage.getItem("token") || ""
    //   }
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

export const getPresentNotifications = (candidateId) => dispatch => {
  console.log("inside notification action");
  dispatch({
    type: types.GET_PRESENT_NOTIFICATIONS_REQUEST
  });
  return axios
    .get(`${base_url}/present/notifications/web/${candidateId}?url=talent.tekorero.com`, {
    //   headers: {
    //     Authorization: "Bearer " + sessionStorage.getItem("token") || ""
    //   }
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

