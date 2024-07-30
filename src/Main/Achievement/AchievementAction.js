import * as types from "./AchievementActionTypes";
import axios from "axios";
import moment from "moment";
import { base_url } from "../../Config/Auth";


export const setAchievementViewType = (viewType) => (dispatch) =>
  dispatch({ type: types.SET_ACHIEVEMENT_VIEW_TYPE, payload: viewType });

  export const setSelectedTimeIntervalReport = (selectedTime) => (dispatch) => {
    console.log(selectedTime);
    dispatch({
      type: types.CHANGE_SELECTED_TIME_INTERVAL_REPORT,
      payload: selectedTime,
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
  
  export const getDateWiseListAchievement = (candidateId,endDate,startDate,) => (dispatch) => {
    dispatch({
      type: types.GET_DATE_WISE_ACHIEVEMENT_REQUEST,
    });
    axios
      .get(`${base_url}/hour/candidate/all/hour-list/${candidateId}/website?endDate=${endDate}&startDate=${startDate}&url=talent.tekorero.com`, {
      //  headers: {
      //     Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      //   },
      })
      .then((res) => {
        dispatch({
          type: types.GET_DATE_WISE_ACHIEVEMENT_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: types.GET_DATE_WISE_ACHIEVEMENT_FAILURE,
        });
      });
  };