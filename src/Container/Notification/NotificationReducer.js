import * as types from "../Notification/NotificationActionTypes";

const initialState = {
  isError: false,
  error: {},
  isFetching: false,

  fetchingPastNotifications: false,
  fetchingPastNotificationsError: false,
  pastNotifications: [],

  updatingNotification: false,
  updatingNotificationError: false,

  fetchingPresentNotifications: false,
  fetchingPresentNotificationsError: false,
  presentNotifications: [],

  fetchingFutureNotifications: false,
  fetchingFutureNotificationsError: false,
  futureNotifications: []
};
export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING_NOTIFICATIONS:
      return { ...state, isFetching: true };
    case types.GET_PAST_NOTIFICATIONS_REQUEST:
      return { ...state, fetchingPastNotifications: true };
    case types.GET_PAST_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        fetchingPastNotifications: false,
        pastNotifications: action.payload
      };
    case types.GET_PAST_NOTIFICATIONS_FAILURE:
      return {
        ...state,
        fetchingPastNotifications: false,
        fetchingPastNotificationsError: true
      };

    case types.GET_PRESENT_NOTIFICATIONS_REQUEST:
      return { ...state, fetchingPresentNotifications: true };
    case types.GET_PRESENT_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        fetchingPresentNotifications: false,
        presentNotifications: action.payload
      };
    case types.GET_PRESENT_NOTIFICATIONS_FAILURE:
      return {
        ...state,
        fetchingPresentNotifications: false,
        fetchingPresentNotificationsError: true
      };


    
    default:
      return state;
  }

  return state;
};
