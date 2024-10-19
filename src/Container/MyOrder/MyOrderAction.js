import * as types from "./MyOrderActionType";
import axios from "axios";
import { base_url, base_url2 } from "../../Config/Auth";
import { message } from "antd"
import Swal from 'sweetalert2'

export const handleReviewOfferModal = (typeProps) => (dispatch) => {
  dispatch({
    type: types.HANDLE_REVIEW_OFFER_MODAL,
    payload: typeProps
  })
}
export const handleAddOrderModal = (typeProps) => (dispatch) => {
  dispatch({
    type: types.HANDLE_ADD_ORDER_MODAL,
    payload: typeProps
  })
}

export const handleOrderedPhoneModal = (typeProps) => (dispatch) => {
  dispatch({
    type: types.HANDLE_ORDERED_PHONE_MODAL,
    payload: typeProps
  })
}
export const handleSeeDetailsModal = (typeProps) => (dispatch) => {
  dispatch({
    type: types.HANDLE_SEE_DETAILS_MODAL,
    payload: typeProps
  })
}


export const addOrderForm = (customer,) => (dispatch, getState) => {

  dispatch({
    type: types.ADD_ORDER_REQUEST,
  });

  axios
    .post(`${base_url2}/phoneOrder`, customer, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      console.log(res);


      dispatch({
        type: types.ADD_ORDER_SUCCESS,
        payload: res.data,
      });
      // cb && cb();
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.ADD_ORDER_FAILURE,
        payload: err,
      });
      // cb && cb();
    });
};


export const getPhoneDetails = (orderPhoneId,pageNo) => (dispatch) => {
  dispatch({
    type: types.GET_PHONE_DETAILS_REQUEST,
  });
  axios
    .get(`${base_url2}/phone/phoneDetail/${orderPhoneId}/${pageNo}`, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    // .get(`${base_url}/requirement/all-requirement-detailss/${customerId}`)
    .then((res) => {
      dispatch({
        type: types.GET_PHONE_DETAILS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_PHONE_DETAILS_FAILURE,
        payload: err,
      });
    });
};

export const getOrderData = (userId,pageNo) => (dispatch) => {
  dispatch({
    type: types.GET_ORDER_DATA_REQUEST,
  });
  axios
    .get(`${base_url2}/phoneOrder/repair/contact/${userId}/${pageNo}`, 
      {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    // .get(`${base_url}/requirement/all-requirement-detailss/${customerId}`) 
    .then((res) => {
      dispatch({
        type: types.GET_ORDER_DATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_ORDER_DATA_FAILURE,
        payload: err,
      });
    });
};

export const addPhoneDetails = (customer) => (dispatch, getState) => {

  dispatch({
    type: types.ADD_PHONE_REQUEST,
  });

  axios
    .post(`${base_url2}/excel/import/phone-details`, customer, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      console.log(res);
      // dispatch(getOrderData(userId));
      dispatch({
        type: types.ADD_PHONE_SUCCESS,
        payload: res.data,
      });
      // cb && cb();
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.ADD_PHONE_FAILURE,
        payload: err,
      });
      // cb && cb();
    });
};
export const handlePhoneListOrderNoteModal = (modalProps) => (dispatch) => {
  dispatch({
    type: types.HANDLE_PHONE_LIST_ORDER_NOTE_MODAL,
    payload: modalProps
  })
}
export const addFeedbackNote = (feedback, phoneId) => (dispatch) => {
  axios
    .post(`${base_url2}/feedback`, feedback,{
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      console.log(res);
      dispatch(getNotesInOrder(phoneId));
    })
    .catch((err) => {
      console.log(err);

    });
};
export const getNotesInOrder = (phoneId) => (dispatch) => {
  dispatch({
    type: types.GET_NOTES_LIST_IN_ORDER_REQUEST,
  });
  axios
    .get(`${base_url2}/phone/feedback/phone/${phoneId}`, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_NOTES_LIST_IN_ORDER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_NOTES_LIST_IN_ORDER_FAILURE,
        payload: err,
      });
    });
};
export const confirmButtonClick = (customer, orderId, userId) => (dispatch, getState) => {
  dispatch({
    type: types.CONFIRM_BUTTON_CLICK_REQUEST,
  });

  axios
    .put(`${base_url2}/phoneOrder/updateConfirmBotton/${orderId}`, customer, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.CONFIRM_BUTTON_CLICK_SUCCESS,
        payload: orderId,
      });
      Swal.fire({
        icon: 'success',
        title: 'Order Confimed Succefully',
        showConfirmButton: false,
        timer: 1500
      })
      setTimeout(window.location.reload(true),5000);
      // message.success("Order confirmed by customer !!")
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.CONFIRM_BUTTON_CLICK_FAILURE,
        payload: err,
      });

    });
};
// export const handlePhoneListOrderTaskModal = (modalProps) => (dispatch) => {
//   dispatch({
//       type: types.HANDLE_PHONE_LIST_ORDER_TASK_MODAL,
//       payload: modalProps
//   })
// }
export const handlePickUpModal = (typeProps) => (dispatch) => {
  dispatch({
    type: types.HANDLE_PICK_UP_MODAL,
    payload: typeProps
  })
}
export const addPickUpAddress = (customer, orderId, userId) => (dispatch, getState) => {
  dispatch({
    type: types.ADD_PICKUP_ADDRESS_REQUEST,
  });

  axios
    .put(`${base_url2}/phoneOrder/deliveryAddress/${orderId}`, customer, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      console.log(res);
      // dispatch(getOrderData(userId,0));
      dispatch({
        type: types.ADD_PICKUP_ADDRESS_SUCCESS,
        payload: res.data,
      });
      Swal.fire({
        icon: 'success',
        title: 'Delivery Address has been updated !!',
      });

    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.ADD_PICKUP_ADDRESS_FAILURE,
        payload: err,
      });
    });
};
export const handleStatusOfOrder = (modalProps) => (dispatch) => {
  dispatch({
    type: types.HANDLE_STATUS_OF_ORDER_MODAL,
    payload: modalProps,
  });
};
export const getStatusOfOrder = (orderPhoneId) => (dispatch) => {
  dispatch({
    type: types.GET_STATUS_OF_ORDER_REQUEST,
  });
  axios
    .get(`${base_url2}/phoneOrder/orderStatus/${orderPhoneId}`, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      dispatch({
        type: types.GET_STATUS_OF_ORDER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_STATUS_OF_ORDER_FAILURE,
        payload: err,
      });
    });
};
export const handleFeedbackOrderDrawer = (modalProps) => (dispatch) => {
  dispatch({
    type: types.HANDLE_FEEDBACK_ORDER_DRAWER,
    payload: modalProps,
  });
};

export const postFeedbackOrder = (data,orderId) => (dispatch) => {
  dispatch({
    type: types.POST_FEEDBACK_REQUEST,
  });
  axios
    .post(`${base_url2}/feedback`, data, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      dispatch(getFeedbackOrder(orderId));
      dispatch({
        type: types.POST_FEEDBACK_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.POST_FEEDBACK_FAILURE,
        payload: err,
      });
    });
};
export const getFeedbackOrder = (orderId) => (dispatch) => {

  dispatch({
    type: types.GET_FEEDBACK_REQUEST,
  });

  axios
    .get(`${base_url2}/phoneOrder/feedback/order/${orderId}`, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_FEEDBACK_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_FEEDBACK_FAILURE,
        payload: err,
      });
    });
};
export const handleFeedbackPhoneOrderDrawer = (modalProps) => (dispatch) => {
  dispatch({
    type: types.HANDLE_FEEDBACK_PHONE_ORDER_DRAWER,
    payload: modalProps,
  });
};

export const getOrderCount = (userId,type) => (dispatch) => {
  dispatch({
    type: types.GET_ORDER_COUNT_REQUEST,
  });
  axios
    .get(`${base_url2}/phoneOrder/customerOrder/count/${userId}/${type}`, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      dispatch({
        type: types.GET_ORDER_COUNT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_ORDER_COUNT_FAILURE,
        payload: err,
      });
    });
};

export const getCompleteOrders = (userId,pageNo,type) => (dispatch) => {
  dispatch({
    type: types.GET_COMPLETED_ORDER_REQUEST,
  });
  axios
    .get(`${base_url2}/phoneOrder/contact/completeOrders/${userId}/${pageNo}/${type}`, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      dispatch({
        type: types.GET_COMPLETED_ORDER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_COMPLETED_ORDER_FAILURE,
        payload: err,
      });
    });
};

export const getInCompleteOrders = (userId,pageNo,type) => (dispatch) => {
  dispatch({
    type: types.GET_INCOMPLETED_ORDER_REQUEST,
  });
  axios
    .get(`${base_url2}/phoneOrder/InCompleteContactOrders/${userId}/${pageNo}/${type} `, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      dispatch({
        type: types.GET_INCOMPLETED_ORDER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_INCOMPLETED_ORDER_FAILURE,
        payload: err,
      });
    });
};

export const getCancelOrders = (userId,pageNo,type) => (dispatch) => {
  dispatch({
    type: types.GET_CANCEL_ORDER_REQUEST,
  });
  axios
    .get(`${base_url2}/phoneOrder/ContactCancelOrders/${userId}/${pageNo}/${type} `, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      dispatch({
        type: types.GET_CANCEL_ORDER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_CANCEL_ORDER_FAILURE,
        payload: err,
      });
    });
};

export const getTotalOrders = (userId,pageNo,type) => (dispatch) => {
  dispatch({
    type: types.GET_TOTAL_ORDER_REQUEST,
  });
  axios
    .get(`${base_url2}/phoneOrder/ContactTotalOrders/${userId}/${pageNo},/${type} `, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      dispatch({
        type: types.GET_TOTAL_ORDER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_TOTAL_ORDER_FAILURE,
        payload: err,
      });
    });
};

export const handleOrderOpenDrawer = (modalProps) => (dispatch) => {
  dispatch({
    type: types.HANDLE_ORDER_OPEN_MODAL,
    payload: modalProps
  })
};
export const getTaskByPhoneId = (phoneId) => (dispatch) => {
  dispatch({
    type: types.GET_TASK_BY_PHONEID_REQUEST,
  });
  axios
    .get(`${base_url2}/itemTask/itemTaskDetail/${phoneId}`, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_TASK_BY_PHONEID_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_TASK_BY_PHONEID_FAILURE,
        payload: err,
      });
    });
};

export const handleStarOrderDrawer = (modalProps) => (dispatch) => {
  dispatch({
    type: types.HANDLE_STAR_ORDER_DRAWER,
    payload: modalProps
  })
};

export const getProcureOrderData = (userId,pageNo,type) => (dispatch) => {
  dispatch({
    type: types.GET_PROCURE_ORDER_DATA_REQUEST,
  });
  axios
    .get(`${base_url2}/phoneOrder/orders/${userId}/${pageNo}/${type}`, 
      {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      dispatch({
        type: types.GET_PROCURE_ORDER_DATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_PROCURE_ORDER_DATA_FAILURE,
        payload: err,
      });
    });
};
export const handleItemViewDrawer = (modalProps) => (dispatch) => {
  dispatch({
    type: types.HANDLE_ITEM_VIEW_DRAWER,
    payload: modalProps
  })
};
export const handleStatuShowDrawer = (modalProps) => (dispatch) => {
  dispatch({
    type: types.HANDLE_STATUS_SHOW_DRAWER,
    payload: modalProps
  })
};

export const getProcureQuotation = (userId,pageNo,type) => (dispatch) => {
  dispatch({
    type: types.GET_PROCURE_QUOTATION_REQUEST,
  });
  axios
    .get(`${base_url2}/quotation/order/user/${userId}/${pageNo}/${type}`, 
      {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      dispatch({
        type: types.GET_PROCURE_QUOTATION_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_PROCURE_QUOTATION_FAILURE,
        payload: err,
      });
    });
};

export const getProcureOrderDetails = (orderPhoneId) => (dispatch) => {
  dispatch({
    type: types.GET_PROCURE_ORDER_DETAILS_REQUEST,
  });
  axios
    .get(`${base_url2}/phoneOrder/procure/order/${orderPhoneId}`, 
      {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      dispatch({
        type: types.GET_PROCURE_ORDER_DETAILS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_PROCURE_ORDER_DETAILS_FAILURE,
        payload: err,
      });
    });
};

export const getProcureStatusItem = (orderId) => (dispatch) => {
  dispatch({
    type: types.GET_PROCURE_STATUS_ITEM_REQUEST,
  });
  axios
    .get(`${base_url2}/phoneOrder/orders/status/${orderId}`, 
      {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      dispatch({
        type: types.GET_PROCURE_STATUS_ITEM_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_PROCURE_STATUS_ITEM_FAILURE,
        payload: err,
      });
    });
};

export const getOrderSupplierList = (orderPhoneId) => (dispatch) => {
  dispatch({
    type: types.GET_ORDER_SUPPLIER_LIST_REQUEST,
  });
  axios
    .get(`${base_url2}/phoneOrder/procure/order/${orderPhoneId}`, 
      {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      dispatch({
        type: types.GET_ORDER_SUPPLIER_LIST_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_ORDER_SUPPLIER_LIST_FAILURE,
        payload: err,
      });
    });
};

export const getOdrSupplierItems = (orderPhoneId) => (dispatch) => {
  dispatch({
    type: types.GET_ODR_SUPPLIER_ITEMS_REQUEST,
  });
  axios
    .get(`${base_url2}/suplr/itms/${orderPhoneId}`, 
      {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      dispatch({
        type: types.GET_ODR_SUPPLIER_ITEMS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_ODR_SUPPLIER_ITEMS_FAILURE,
        payload: err,
      });
    });
};
export const getOdrSupplier = (userId,pageNo,type) => (dispatch) => {
  dispatch({
    type: types.GET_ODR_SUPPLIER_REQUEST,
  });
  axios
    .get(`${base_url2}/phoneOrder/suppliersOrders/${userId}/${pageNo}/${type}`, 
      {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      dispatch({
        type: types.GET_ODR_SUPPLIER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_ODR_SUPPLIER_FAILURE,
        payload: err,
      });
    });
};
export const getTopSell = (type) => (dispatch) => {
  dispatch({
    type: types.GET_TOP_SELL_REQUEST,
  });
  axios
    .get(`${base_url2}/phoneOrder/org/getTop-sellingProduct/${type}`, 
      {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      dispatch({
        type: types.GET_TOP_SELL_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_TOP_SELL_FAILURE,
        payload: err,
      });
    });
};
export const getLeastSell = (type) => (dispatch) => {
  dispatch({
    type: types.GET_LEAST_SELL_REQUEST,
  });
  axios
    .get(`${base_url2}/phoneOrder/org/getLeast-sellingProduct/${type}`, 
      {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      dispatch({
        type: types.GET_LEAST_SELL_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_LEAST_SELL_FAILURE,
        payload: err,
      });
    });
};

export const repeatOrder = (orderId,data) => (dispatch, getState) => {
  dispatch({
    type: types.REPEAT_ORDER_REQUEST,
  });
  axios
    .put(`${base_url2}/phoneOrder/repeatOrder/${orderId}`,data,  {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.REPEAT_ORDER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.REPEAT_ORDER_FAILURE,
        payload: err,
      });
    });
};

export const updateOrdrSuplrItems = (data,orderId) => (dispatch) => {
  dispatch({ type: types.UPDATE_ORDR_SUPLR_ITEMS_REQUEST });

  axios
    .put(`${base_url2}/phoneOrder/order/customer/shipping`, data, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })

    .then((res) => {
      dispatch(getProcureStatusItem(orderId));
      dispatch({
        type: types.UPDATE_ORDR_SUPLR_ITEMS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
  
      dispatch({
        type: types.UPDATE_ORDR_SUPLR_ITEMS_FAILURE,
      });
    });
};

export const getOrdrSuppierDetails = (orderId) => (dispatch) => {
  dispatch({
    type: types.GET_ORDR_SUPLR_DETAILS_REQUEST,
  });
  axios
    .get(`${base_url2}/phoneOrder/suppliersOrderItems/${orderId}`, 
      {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      dispatch({
        type: types.GET_ORDR_SUPLR_DETAILS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_ORDR_SUPLR_DETAILS_FAILURE,
        payload: err,
      });
    });
};

export const getSupplierOrdrItemList = (orderId,userId) => (dispatch) => {
  dispatch({
    type: types.GET_SUPPLIER_ORDR_ITEM_LIST_REQUEST,
  });
  axios
    .get(`${base_url2}/phoneOrder/suppliersOrderIteams/${orderId}/${userId}`, 
      {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      dispatch({
        type: types.GET_SUPPLIER_ORDR_ITEM_LIST_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_SUPPLIER_ORDR_ITEM_LIST_FAILURE,
        payload: err,
      });
    });
};