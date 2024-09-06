import * as types from "./CustomerActionTypes";
import { base_url,base_url2 } from "../../Config/Auth";
import axios from "axios";
import { createBrowserHistory } from "history";
import { message } from "antd";
const history = createBrowserHistory();

export const getCancelOrder = (orderId,data) => (dispatch) => {
  dispatch({
    type: types.GET_CANCEL_ORDER_REQUEST,
  });
  axios
    .put(`${base_url2}/cart/cartProductLink}`, data,{
    })
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_CANCEL_ORDER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_CANCEL_ORDER_FAILURE,
        payload: err,
      });
    });
};


export const addPlaceOrder = (data,cartId) => (dispatch) => {
  dispatch({ type: types.ADD_PLACE_ORDER_REQUEST });

  axios
    .post(`${base_url2}/cart/cartProductLink/{cartId}} `, data, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })

    .then((res) => {
      console.log(res);
       sessionStorage.removeItem("cartId")
      dispatch({
        type: types.ADD_PLACE_ORDER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.ADD_PLACE_ORDER_FAILURE,
      });
    });
};

//FillDeliveryInformation post
export const addDeliveryInfo = (data,cartId,cb) => (dispatch) => {
  dispatch({
    type: types.ADD_DELIVERY_INFO_REQUEST,
  });
  axios
    .post(`${base_url2}/checkout/cart/attachshippingAddress/${cartId}`, data)
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.ADD_DELIVERY_INFO_SUCCESS,
        payload: res.data
      })
      cb && cb("sucess",res.data.length&&res.data[0].cartId)
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.ADD_DELIVERY_INFO_FAILURE,
        payload: err,
      })
      cb&&cb()
    })
}

//trackOrder
export const addTrackOrder = (data, cb) => (dispatch) => {
  dispatch({
    type: types.TRACK_ORDER_STATUS_REQUEST,
  });
  axios.post(`${base_url2}/order/trackOrder`, data)
    .then((res) => {
      
      console.log(res);

      dispatch({
        // history.push("/shopName/ordermaincontent");
        type: types.TRACK_ORDER_STATUS_SUCCESS,
        payload: res.data
      })
      // history.push("/shopName/ordermaincontent")
      cb && cb("sucess",res.data.orderId)
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.TRACK_ORDER_STATUS_FAILURE,
        payload: err,
      })
      cb && cb()
    })
}

// trackOrderStatus

export const getOrderStatus = (orderId) => (dispatch) => {
  dispatch({
    type: types.GET_ORDER_STATUS_REQUEST,
  });
  axios
    .get(`${base_url2}/order/trackOrder/${orderId}`, {
    })
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_ORDER_STATUS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_ORDER_STATUS_FAILURE,
        payload: err,
      });
    });
};

export const getCustomerProductList = (pageNo) => (dispatch) => {
  dispatch({
    type: types.GET_CUSTOMER_LIST_REQUEST,
  });
  axios
    // .get(`${base_url2}/product/publishProduct `, 
      .get(`${base_url2}/product/AllproductWAZ/pagewise/${pageNo}`, 
    //   {
    //   headers: {
    //     Authorization: "Bearer " + sessionStorage.getItem("token") || "", 
    //   },
    // }
  )
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_CUSTOMER_LIST_SUCCESS,
        payload: res.data,
      });
      // window.location.path()
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_CUSTOMER_LIST_FAILURE,
        payload: err,
      });
    });
};
export const getCountryName = () => (dispatch) => {
  dispatch({
    type: types.GET_COUNTRY_NAME_REQUEST,
  });
  axios
    .get(`${base_url2}/countries/website?url=talent.tekorero.com`, {
    })
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_COUNTRY_NAME_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_COUNTRY_NAME_FAILURE,
        payload: err,
      });
    });
};

export const inputCustomerProductDataSearch = (name) => (dispatch) => {
  dispatch({
    type: types.INPUT_CUSTOMER_PRODUCT_SEARCH_DATA_REQUSET,
  });
  axios
    // .get(`${base_url2}/CUSTOMER/PRODUCT_details/${name}`, {
    //   headers: {
    //     Authorization: "Bearer " + sessionStorage.getItem("token") || "",
    //   },
    // })
    .then((res) => {
      if (res.data.CUSTOMERIPRODUCT_d) {
        console.log(res.data);
        // dispatch(getAllLatestContactsForLazyLoading(res.data));
      }

      dispatch({
        type: types.INPUT_CUSTOMER_PRODUCT_SEARCH_DATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.INPUT_CUSTOMER_PRODUCT_SEARCH_DATA_FAILURE,
        payload: err,
      });
    });
};

export const LinkProductInfo = (data) => (dispatch) => {
  dispatch({ type: types.LINK_PRODUCT_INFO_REQUEST });

  axios
    .post(`${base_url2}/cart/cartProductLink `, data, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })

    .then((res) => {
      console.log(res);
      sessionStorage.setItem("cartId",res.data.storeCart.cartId)
      dispatch({
        type: types.LINK_PRODUCT_INFO_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.LINK_PRODUCT_INFO_FAILURE,
      });
    });
};

export const getCartItems =(cartId)=>(dispatch)=>{
  dispatch({
    type: types.GET_CART_ITEMS_REQUEST,
  });
  axios
    .get(`${base_url2}/cart/cartProductLink/${cartId}`, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
    })
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_CART_ITEMS_SUCCESS,
        payload: res.data,
      });
     
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_CART_ITEMS_FAILURE,
        payload: err,
      });
    });
};

export const getShopImage = () => (dispatch) => {

  dispatch({
    type: types.GET_PRODUCT_BY_ID_REQUEST,
  });
  axios
    .get(`${base_url2}/organization/image`)
    .then((res) => {
      dispatch({
        type: types.GET_SHOP_IMAGE_SUCCESS,
        payload: res.data,
      });
      // window.location.path()
     
    })
    .catch((err) => {

      dispatch({
        type: types.GET_SHOP_IMAGE_FAILURE,
        payload: err,
      });
    });
};

export const getProductById = (id)=>(dispatch)=>{
  dispatch ({
    type:types.GET_PRODUCT_BY_ID_REQUEST,
  });
  axios
  .get(`${base_url2}/product/${id}`)
  .then((res) => {
    dispatch({
      type: types.GET_PRODUCT_BY_ID_SUCCESS,
      payload: res.data,
    });
  })
  .catch((err) => {
    dispatch({
      type: types.GET_PRODUCT_BY_ID_FAILURE,
      payload: err,
    });
  });
};

export const getCategories = () => (dispatch) => {

  dispatch({
    type: types.GET_CATEGORIES_REQUEST,
  });
  axios
    .get(`${base_url2}/product/allProductCatagory`)
    .then((res) => {
      dispatch({
        type: types.GET_CATEGORIES_SUCCESS,
        payload: res.data,
      });
      // window.location.path()
     
    })
    .catch((err) => {

      dispatch({
        type: types.GET_CATEGORIES_FAILURE,
        payload: err,
      });
    });
};
export const addContact = (data) => (dispatch) => {
  dispatch({ type: types.ADD_CONTACT_DETAILS_REQUEST });

  axios
    .post(`${base_url2}/leads/website?url=talent.tekorero.com`, data, {
    })

    .then((res) => {
  
      // sessionStorage.removeItem("cartId")
      dispatch({
        type: types.ADD_CONTACT_DETAILS_SUCCESS,
        payload: res.data,
      });
      message.success("Your Info has been Saved!")
    })
    .catch((err) => {
    
      dispatch({
        type: types.ADD_CONTACT_DETAILS_FAILURE,
      });
    });
};

export const getSources = () => (dispatch) => {
  dispatch({
    type: types.GET_SOURCE_REQUEST,
  });
  axios
  .get(`${base_url2}/sector/website?url=talent.tekorero.com`, {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("token") || "",
    },
  })
    
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_SOURCE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_SOURCE_FAILURE,
        payload: err,
      });
    });
};

export const setClearbitData = (data) => (dispatch) => {
  dispatch({
    type: types.SET_CLEARBIT_DATA,
    payload: data,
  });
};

export const handleStripeModal = (modalProps) => dispatch => {
  dispatch({
      type: types.HANDLE_STRIPE_MODAL,
      payload: modalProps
  })
}
export const getPaymentId = (data, cb) => dispatch => {
  dispatch({
    type: types.GET_PAYMENT_ID_REQUEST
  });

  axios
    .post(`${base_url}/Stripe/makePayment`, data, {})
    .then(res => {
   
      dispatch({
        type: types.GET_PAYMENT_ID_SUCCESS,
        payload: res.data
      });
      cb && cb("success");
    })
    .catch(err => {
  
      dispatch({
        type: types.GET_PAYMENT_ID_FAILURE,
        payload: err
      });
      cb && cb("error");
    });
};

export const getProductByCategoryId = (brandId) => (dispatch) => {
  dispatch({
    type: types.GET_PRODUCT_BY_CATEGORY_ID_REQUEST,
  });
  axios
    .get(`${base_url2}/supplies/supplies/brand/${brandId}`)
    .then((res) => {
      dispatch({
        type: types.GET_PRODUCT_BY_CATEGORY_ID_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
     
      dispatch({
        type: types.GET_PRODUCT_BY_CATEGORY_ID_FAILURE,
        payload: err,
      });
    });
};

export const getSuppliesCList = (pageNo) => (dispatch) => {
  dispatch({
    type: types.GET_SUPPLIES_LIST_C_REQUEST,
  });
  axios
    .get(`${base_url2}/supplies/all-supplies/${pageNo}`)
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_SUPPLIES_LIST_C_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_SUPPLIES_LIST_C_FAILURE,
        payload: err,
      });
    });
};

export const getAllInventorySupplierItemCs =()=>(dispatch)=>{
  dispatch({
    type: types.GET_ALL_INVENTORY_SUPPLIER_ITEMS_C_REQUEST,
  });
  axios
    .get(`${base_url2}/supplier/all-published/inventorysuppliers`)
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_ALL_INVENTORY_SUPPLIER_ITEMS_C_SUCCESS,
        payload: res.data,
      });
     
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_ALL_INVENTORY_SUPPLIER_ITEMS_C_FAILURE,
        payload: err,
      });
    });
};

export const getAllSupplierItemCs =()=>(dispatch)=>{
  dispatch({
    type: types.GET_ALL_SUPPLIER_ITEMS_C_REQUEST,
  });
  axios
    .get(`${base_url2}/supplier/all-published/suppliers`)
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_ALL_SUPPLIER_ITEMS_C_SUCCESS,
        payload: res.data,
      });
     
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_ALL_SUPPLIER_ITEMS_C_FAILURE,
        payload: err,
      });
    });
};

export const getWitoutPrice =(productId)=>(dispatch)=>{
  dispatch({
    type: types.GET_WITHOUT_PRICE_REQUEST,
  });
  axios
    .get(`${base_url2}/product/WOPR/bothSuppliesAndProduct/${productId}`)
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_WITHOUT_PRICE_SUCCESS,
        payload: res.data,
      });
     
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_WITHOUT_PRICE_FAILURE,
        payload: err,
      });
    });
};

export const handleCatagoryDetails = (modalProps) => (dispatch) => {
  dispatch({
    type: types.HANDLE_CATAGORY_DETAILS_DRAWER,
    payload: modalProps,
  });
};

export const searchInvestorName = (name) => (dispatch) => {
  dispatch({
    type: types.GET_INVESTOR_SEARCH_REQUEST,
  });
  axios
    // .get(`${base_url2}/supplies/suppliesName/${name}`,
    .get(`${base_url2}/supplies/search/${name}`,

       {
      // headers: {
      //   Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      // },
    })
    .then((res) => {
    
      dispatch({
        type: types.GET_INVESTOR_SEARCH_SUCCESS,
        payload: res.data,
      });
    }
    )
    .catch((err) => {
      dispatch({
        type: types.GET_INVESTOR_SEARCH_FAILURE,
        payload: err,
      });
    });
}; 

export const ClearReducerDataOfInvestor = () => (dispatch) => {
  dispatch({
    type: types.HANDLE_CLAER_REDUCER_DATA_INVESTOR,
  });
};