import * as types from "./AuthTypes.js";
import { base_url, login_url, base_url2 } from "../../Config/Auth";
import axios from "axios";
import { message, notification } from "antd";
import Swal from 'sweetalert2';

import { createBrowserHistory } from "history";

import moment from "moment";
let history = createBrowserHistory();

// const history = createBrowserHistory();



// export const login = ( userName,otp , history, cb) => (dispatch) => {
//   dispatch({
//     type: types.LOGIN_REQUEST,
//   });
//   axios
//     .post(`${login_url}/api/v1/otp/validateOtp`, {
//       username: userName,
//       otp: otp,
//     })
//     .then((res) => {
//       // message.success('Welcome to FokusWork, great to have you here.')
//       console.log(res);
//       sessionStorage.setItem("token", res.data.token);

//       //dispatch(getUserDetails(res.data.token));

//       history.push("/jobVendor");
//       dispatch({
//         type: types.LOGIN_SUCCESS,
//         payload: res.data,
//       });
//       cb && cb("success");
//     })
//     .catch((err) => {
//       console.log(err && err.response && err.response.data);
//       cb && cb("failure");

//       if (
//         err &&
//         err.response &&
//         err.response.data ===
//         "You have entered an invalid username or password "
//       ) {
//         message.error("You have entered an invalid username or password ");
//       } else {
//         message.error(err.response.data);
//         console.log(err);
//         history.push({
//           pathname: "/",
//         });
//       }
//       dispatch({
//         type: types.LOGIN_FAILURE,
//         payload: err,
//       });
//     });
// };

export const login = ({ email, password }, history, cb) => (dispatch) => {
  dispatch({
    type: types.LOGIN_REQUEST,
  });
  axios
    .post(`${login_url}/token/generate-token`, {
      username: email,
      password: password,
      userType: "User"
    })
    .then((res) => {
      // message.success('Welcome to FokusWork, great to have you here.')
      console.log(res);
      sessionStorage.setItem("token", res.data.token);
      dispatch(getUserDetails(res.data.token));
      // history.push("/dashboard");

      if (res.data.userType === "Customer" || res.data.userType === "external" || res.data.userType ===  null || res.data.userType==="Distributor") {
        history.push("/dashboard");
      } else if (res.data.userType === "Supplier") {
        history.push("/orderSupplier");
      }
     else if (res.data.userType === "employee") {
      history.push("/dashboard");
    }
      
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: res.data,
      });
      cb && cb("success");
    })
    .catch((err) => {
      console.log(err && err.response && err.response.data);
      cb && cb("failure");

      if (
        err &&
        err.response &&
        err.response.data ===
        "You have entered an invalid username or password "
      ) {
        message.error("You have entered an invalid username or password ");
      } else {
        message.error(err.response.data);
        console.log(err);
        history.push({
          pathname: "/login",
        });
      }
      dispatch({
        type: types.LOGIN_FAILURE,
        payload: err,
      });
    });
};

export const generateOtpByEmail = (data, cb) => (dispatch) => {
  console.log(data);
  dispatch({ type: types.GENERATE_OTP_BY_EMAIL_REQUEST });
  axios
    .post(`${base_url}/otp/generateOTP`, data)
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GENERATE_OTP_BY_EMAIL_SUCCESS,
        payload: res.data,
      });
      // message.error(res.data.status === false ?
      //   res.data.message:res.data.message)
      res.data.status === false ? message.error(res.data.message) : message.success(res.data.message)

      cb && cb(res.data);
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.GENERATE_OTP_BY_EMAIL_FAILURE });
    });
  cb && cb();
};

export const validateOtp = (data) => (dispatch) => {
  console.log(data);
  dispatch({ type: types.VALIDATE_OTP_BY_EMAIL_REQUEST });
  axios
    .post(`${base_url}/otp/validateOtp`, data)
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.VALIDATE_OTP_BY_EMAIL_SUCCESS,
        payload: res.data,
      });
      message.success(res.data.status)
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.VALIDATE_OTP_BY_EMAIL_FAILURE });
    });
};


export const getUserDetails = (token) => (dispatch) => {
  dispatch({
    type: types.GET_USER_DETAILS_REQUEST,
  });
  axios
    .get(`${base_url}/employee/profile`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((res) => {
      console.log(res);
      sessionStorage.setItem("userDetails", JSON.stringify(res.data));
      dispatch({
        type: types.GET_USER_DETAILS_SUCCESS,
        payload: res.data,
      });


      // dispatch(setFiscalTimeIntervalReport(res.data));
      // dispatch(setFiscalTimeIntervalTeam(res.data));
      // dispatch(setFiscalTimeIntervalViewport(res.data));

      // dispatch(setFiscalTimeInterval(res.data));

      // dispatch(getLoginDetails(res.data.userId));
    })
    .catch((err) => {
      // message.error("Oops, something went wrong during getting user details.");
      console.log(err);
      // history.push({
      //   pathname: "/",
      // });
      dispatch({
        type: types.GET_USER_DETAILS_FAILURE,
        payload: err,
      });
    });
};





export const getachivement = (candidateId, endDate, startDate) => (dispatch) => {
  //console.log(employeeId);
  dispatch({
    type: types.GET_ACHIVEMENT_REQUEST,
  });
  axios
    .get(`${base_url}/hour/candidate/total/complete-unit/${candidateId}/website?endDate=${endDate}&startDate=${startDate}&url=talent.tekorero.com`, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_ACHIVEMENT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_ACHIVEMENT_FAILURE,
        payload: err,
      });
    });
};

export const handlAchievementDrawerModal = (modalProps) => (dispatch) => {
  dispatch({
    type: types.HANDLE_ACHIEVEMENT_DRAWER_MODAL,
    payload: modalProps,
  })
}

export const setClearbitData = (data) => (dispatch) => {
  dispatch({
    type: types.SET_CLEARBIT_DATA,
    payload: data,
  });
};

export const addContact = (data) => (dispatch) => {
  dispatch({ type: types.ADD_CONTACT_DETAILS_REQUEST });

  axios
    .post(`${base_url}/leads/website?url=talent.tekorero.com`, data)

    .then((res) => {
      Swal.fire({
        icon: 'success',
        title: 'Thank you for reaching out to us!',
      });
      dispatch({
        type: types.ADD_CONTACT_DETAILS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Somenthing went wrong!',
      });
      dispatch({
        type: types.ADD_CONTACT_DETAILS_FAILURE,
      });
    });
};