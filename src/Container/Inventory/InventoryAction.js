import * as types from "./InventoryActionType";
import { base_url, base_url2 } from "../../Config/Auth";
import axios from "axios";
import moment from "moment";
import Swal from 'sweetalert2';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export const getProducts = (pageNo,currencyId) => (dispatch) => {
    dispatch({
      type: types.GET_PROFESSIONALDUCTS_REQUEST,
    });
    axios
      .get(`${base_url2}/product/productList/pagewise/${pageNo}/${currencyId}`,
      // .get(`${base_url2}/product/productList/pagewise/${pageNo}`,
        {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token") || "",
          },
        })
      .then((res) => {
        console.log(res);
        dispatch({
          type: types.GET_PROFESSIONALDUCTS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
        dispatch({
          type: types.GET_PROFESSIONALDUCTS_FAILURE,
          payload: err,
        });
      });
  };
  export const getAllProductCatagory = () => (dispatch) => {
    dispatch({
      type: types.GET_ALL_PRODUCT_CATEGORY_REQUEST,
    });
    axios
      .get(`${base_url2}/product/allProductCatagory`, {
        // headers: {
        //   Authorization: "Bearer " + sessionStorage.getItem("token") || "",
        // },
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: types.GET_ALL_PRODUCT_CATEGORY_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
        dispatch({
          type: types.GET_ALL_PRODUCT_CATEGORY_FAILURE,
          payload: err,
        });
      });
  };

  export const getAllSuppliesCatagory = () => (dispatch) => {
    dispatch({
      type: types.GET_ALL_SUPPLIES_CATEGORY_REQUEST,
    });
    axios
      // .get(`${base_url2}/supplies/allSuppliesCatagory`, {
        .get(`${base_url2}/supplies/allSuppliesBrand`, {
        // headers: {
        //   Authorization: "Bearer " + sessionStorage.getItem("token") || "",
        // },
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: types.GET_ALL_SUPPLIES_CATEGORY_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
        dispatch({
          type: types.GET_ALL_SUPPLIES_CATEGORY_FAILURE,
          payload: err,
        });
      });
  };

  export const handleUploadInventoryDrawer = (modalProps) => (dispatch) => {
    dispatch({
      type: types.HANDLE_UPLOAD_INVENTORY_DRAWER,
      payload: modalProps,
    });
  };

    export const uploadInventoryDoc = (data) => (dispatch) => {
    dispatch({ type: types.UPLOAD_UPLOAD_INVENTORY_REQUEST });
    axios
      .post(`${base_url2}/excel/inventoryProduct`, data, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token") || "",
        },
      })
      .then((res) => {
        dispatch({
          type: types.UPLOAD_UPLOAD_INVENTORY_SUCCESS,
          payload: res.data,
        });
        Swal.fire({
          icon: 'success',
          title: 'Uploaded Successfully',
        })
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: types.UPLOAD_UPLOAD_INVENTORY_FAILURE,
          payload: err,
        });
      });
  };


  export const LinkInventoryItem = (data) => (dispatch,getState) => {
 const userId=getState().auth.userDetails.userId;
    dispatch({ type: types.LINK_INVENTORY_ITEM_REQUEST });
    axios
      .post(`${base_url2}/quotation/protal/procure/order`, data, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token") || "",
        },
      })
  
      .then((res) => {
        dispatch(getInventoryCartItemsCount(userId));
        dispatch(getInventoryCartItems(userId));
        console.log(res);
        // const orderPhoneId= res.data.cartIteams[0].orderPhoneId
        // localStorage.setItem("orderPhoneId",orderPhoneId);
        // console.log(orderPhoneId);
        dispatch({
          type: types.LINK_INVENTORY_ITEM_SUCCESS,
          payload: res.data,
        });
        Swal.fire({
          icon: 'success',
          title: 'Added to cart',
        })
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: types.LINK_INVENTORY_ITEM_FAILURE,
        });
      });
  };

  export const getInventoryCartItems =(userId)=>(dispatch)=>{
    dispatch({
      type: types.GET_INVENTORY_CART_ITEMS_REQUEST,
    });
    axios
      .get(`${base_url2}/quotation/protal/procure/getCart/${userId}`, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token") || "",
        },
      })
      .then((res) => {
        console.log(res);
          const orderPhoneId= res.data.orderPhoneId
        localStorage.setItem("orderPhoneId",orderPhoneId);
        console.log(orderPhoneId);
        dispatch({
          type: types.GET_INVENTORY_CART_ITEMS_SUCCESS,
          payload: res.data,
        });
       
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: types.GET_INVENTORY_CART_ITEMS_FAILURE,
          payload: err,
        });
      });
  };

  export const getStripeInd =()=>(dispatch)=>{
    dispatch({
      type: types.GET_STRIPE_IND_REQUEST,
    });
    axios
      .get(`${base_url}/paymentMode/activated`, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token") || "",
        },
      })
      .then((res) => {
        console.log(res);    
        dispatch({
          type: types.GET_STRIPE_IND_SUCCESS,
          payload: res.data,
        });
       
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: types.GET_STRIPE_IND_FAILURE,
          payload: err,
        });
      });
  };

  export const addInventoryDeliveryInfo = (data,quotationId,cb) => (dispatch) => {
    dispatch({
      type: types.ADD_INVENTORY_DELIVERY_INFO_REQUEST,
    });
    axios
      .post(`${base_url2}/quotation/protal/procure/address/${quotationId}`, data,{
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token") || "",
        },
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: types.ADD_INVENTORY_DELIVERY_INFO_SUCCESS,
          payload: res.data
        })
        cb && cb("sucess")
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: types.ADD_INVENTORY_DELIVERY_INFO_FAILURE,
          payload: err,
        })
        cb&&cb()
      })
  }
  
  export const handleInventoryStripeModal = (modalProps) => dispatch => {
    dispatch({
        type: types.HANDLE_INVENTORY_STRIPE_MODAL,
        payload: modalProps
    })
  }
  export const addInventoryPaymentId = (data, cb) => dispatch => {
    dispatch({
      type: types.ADD_INVENTORY_PAYMENT_ID_REQUEST
    });
  
    axios
      .post(`${base_url}/stripe/makePayment`, data, { headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },})
      .then(res => {
     
        dispatch({
          type: types.ADD_INVENTORY_PAYMENT_ID_SUCCESS,
          payload: res.data
        });
        cb && cb("success");
      })
      .catch(err => {
    
        dispatch({
          type: types.ADD_INVENTORY_PAYMENT_ID_FAILURE,
          payload: err
        });
        cb && cb("error");
      });
  };
  export const makeInventoryPayment = (data,cb) => dispatch => {
    dispatch({
        type: types.MAKE_INVENTORY_PAYMENT_REQUEST,
    })
   
     axios.post(`${base_url2}/api/v1/stripe/confirmPayment`,data ,{
     headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token") || "",
        },
      })
     
        .then(res => {
          
            dispatch({
                type: types.MAKE_INVENTORY_PAYMENT_SUCCESS,
                payload: res.data
            })
            
            if (res.data.message === 'status failed') {
              cb && cb('status failed');
              console.log("act", res.data.name);
          } else {
              cb && cb('success', res.data.orderId);
  
              // Example usage of data.stripePaymentInd, assuming it's valid
              console.log(data.stripePaymentInd && localStorage.removeItem('orderPhoneId') );
          }
        })
          
        .catch(err => {
  
            dispatch({
                type: types.MAKE_INVENTORY_PAYMENT_FAILURE,
                payload: err
            })
            cb && cb('error')
        })};

        export const getInventoryCartItemsCount =(userId)=>(dispatch)=>{
          dispatch({
            type: types.GET_INVENTORY_CART_ITEMS_COUNT_REQUEST,
          });
          axios
            .get(`${base_url2}/quotation/protal/procure/getCartCount/${userId}`, {
              headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token") || "",
              },
            })
            .then((res) => {
              console.log(res);
              dispatch({
                type: types.GET_INVENTORY_CART_ITEMS_COUNT_SUCCESS,
                payload: res.data,
              });
             
            })
            .catch((err) => {
              console.log(err);
              dispatch({
                type: types.GET_INVENTORY_CART_ITEMS_COUNT_FAILURE,
                payload: err,
              });
            });
        };

        export const updateCartPlus = (data) => (dispatch) => {
          dispatch({ type: types.UPDATE_CART_PLUS_REQUEST });
        
          axios
            .put(`${base_url2}/quotation/protal/procure/cartUnitEdit`, data, {
              headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token") || "",
              },
            })
        
            .then((res) => {
             
              dispatch({
                type: types.UPDATE_CART_PLUS_SUCCESS,
                payload: res.data,
              });
            })
            .catch((err) => {
          
              dispatch({
                type: types.UPDATE_CART_PLUS_FAILURE,
              });
            });
        };

        

        export const deleteCartItem = (cartItemId) => (dispatch,getState) => {
          const userId=getState().auth.userDetails.userId;
          dispatch({
            type: types.DELETE_CART_ITEM_REQUEST,
          });
          axios
            .delete(`${base_url2}/quotation/protal/procure/cartUnitDelete/${cartItemId}`,{
              headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token") || "",
              },
            })
            .then((res) => {
              dispatch(getInventoryCartItemsCount(userId));
        //       const a=res.data.storeCart.hasOwnProperty('cartItems');
        //       console.log(a)
        //       let finalvalue=null
        // if (a){
        //   finalvalue=res.data 
        // } else {
        //   console.log("else")
        //   finalvalue={storeCart:{...res.data.storeCart,cartItems:[]}}
        // }
        // const value = localStorage.getItem('cartId') 
        //      history.push (final.shopName)
        //      if (a){
        //       message.success("Item Deleted Successfully")
        //      } else
        //      {
        //       window.location.reload()
        //      }
              dispatch({
                type: types.DELETE_CART_ITEM_SUCCESS,
              payload: cartItemId,
              });
            })
            .catch((err) => {
             
              dispatch({
                type: types.DELETE_CART_ITEM_FAILURE,
                payload: err,
              });
            });
        };

        export const codInventoryOrder = (data,cb) => (dispatch) => {
          dispatch({ type: types.ADD_COD_INVENTORY_REQUEST });
        
          axios
            .post(`${base_url2}/payment/protal/prosess `, data, {
              headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token") || "",
              },
            })
        
            .then((res) => {
              console.log("resp",res)
          // if(res.data){
          //   const orderPhoneId = localStorage.getItem("orderPhoneId");
          //   localStorage.removeItem('orderPhoneId') 
          // }      
          dispatch({
                type: types.ADD_COD_INVENTORY_SUCCESS,
                payload: res.data,
              });
              cb && cb ("success")
            })
            .catch((err) => {
              console.log("errr",err,err && err.response && err.response.data.error)
              dispatch({
                type: types.ADD_COD_INVENTORY_FAILURE,
              });
              cb && cb ("error",err && err.response && err.response.data.error)
            });
        };       

        export const getAllInventorySupplierItems =(orgId)=>(dispatch)=>{
          dispatch({
            type: types.GET_ALL_INVENTORY_SUPPLIER_ITEMS_REQUEST,
          });
          axios
            .get(`${base_url2}/supplier/all/published/inventorysuppliers/${orgId}`, {
              headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token") || "",
              },
            })
            .then((res) => {
              console.log(res);
              dispatch({
                type: types.GET_ALL_INVENTORY_SUPPLIER_ITEMS_SUCCESS,
                payload: res.data,
              });
             
            })
            .catch((err) => {
              console.log(err);
              dispatch({
                type: types.GET_ALL_INVENTORY_SUPPLIER_ITEMS_FAILURE,
                payload: err,
              });
            });
        };

        export const getAllSupplierItems =(orgId)=>(dispatch)=>{
          dispatch({
            type: types.GET_ALL_SUPPLIER_ITEMS_REQUEST,
          });
          axios
            .get(`${base_url2}/supplier/all/published/suppliers/${orgId}`, {
              headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token") || "",
              },
            })
            .then((res) => {
              console.log(res);
              dispatch({
                type: types.GET_ALL_SUPPLIER_ITEMS_SUCCESS,
                payload: res.data,
              });
             
            })
            .catch((err) => {
              console.log(err);
              dispatch({
                type: types.GET_ALL_SUPPLIER_ITEMS_FAILURE,
                payload: err,
              });
            });
        };

        export const getSuppliesList = (pageNo) => (dispatch) => {
          dispatch({
            type: types.GET_SUPPLIES_LIST_REQUEST,
          });
          axios
            .get(`${base_url2}/supplies/publishSupplies/${pageNo}`, {
              headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token") || "",
              },
            })
            .then((res) => {
              console.log(res);
              dispatch({
                type: types.GET_SUPPLIES_LIST_SUCCESS,
                payload: res.data,
              });
            })
            .catch((err) => {
              console.log(err);
              dispatch({
                type: types.GET_SUPPLIES_LIST_FAILURE,
                payload: err,
              });
            });
        };
        
        export const getSuplrInventorylist = (userId,pageNo) => (dispatch) => {
          dispatch({
            type: types.GET_SUPLR_INVENTORY_LIST_REQUEST,
          });
          axios   
            .get(`${base_url2}/supplier/inventory/supplier/portal/${userId}/${pageNo}`, {
              headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token") || "",
              },
            })
            .then((res) => {
              console.log(res);
              dispatch({
                type: types.GET_SUPLR_INVENTORY_LIST_SUCCESS,
                payload: res.data,
              });
            })
            .catch((err) => {
              console.log(err);
              dispatch({
                type: types.GET_SUPLR_INVENTORY_LIST_FAILURE,
                payload: err,
              });
            });
        };       


        export const updateCartItemDate = (data) => (dispatch) => {
          dispatch({ type: types.UPDATE_CART_ITEM_DATE_REQUEST });
        
          axios
            .put(`${base_url2}/quotation/portal/procure/saveDeliveryDate`, data, {
              headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token") || "",
              },
            })
        
            .then((res) => {
             
              dispatch({
                type: types.UPDATE_CART_ITEM_DATE_SUCCESS,
                payload: res.data,
              });
            })
            .catch((err) => {
          
              dispatch({
                type: types.UPDATE_CART_ITEM_DATE_FAILURE,
              });
            });
        };

        export const handleAddSuplrInventory = (modalProps) => (dispatch) => {
          dispatch({
            type: types.HANDLE_ADD_SUPLR_INVENTORY_DRAWER,
            payload: modalProps,
          });
        };

        export const addSupplrInventory = (customer) => (dispatch, getState) => {
          dispatch({
            type: types.ADD_SUPLR_INVENTORY_REQUEST,
          });
        
          axios
            .post(`${base_url2}/supplier/inventory/supplier`, customer, {
              headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token") || "",
              },
            })
            .then((res) => {
             // dispatch(getInventorylist(userId,"0"))
              Swal.fire({
                icon: 'success',
                title: 'list added',
              })
              dispatch({
                type: types.ADD_SUPLR_INVENTORY_SUCCESS,
                payload: res.data,
              });
            })
            .catch((err) => {
              console.log(err);
              dispatch({
                type: types.ADD_SUPLR_INVENTORY_FAILURE,
                payload: err,
              });
              //cb && cb();
            });
        };

        export const getBrand = (category) => (dispatch) => {
          dispatch({
              type: types.GET_BRAND_REQUEST,
          });
          axios
              .get(`${base_url2}/product/brandName/${category}`, 
              {
                  headers: {
                      Authorization: "Bearer " + sessionStorage.getItem("token") || "",
                  },
              })
              .then((res) => {
                  console.log(res);
                  dispatch({
                      type: types.GET_BRAND_SUCCESS,
                      payload: res.data,
                  });
              })
              .catch((err) => {
                  console.log(err);
                  dispatch({
                      type: types.GET_BRAND_FAILURE,
                      payload: err,
                  });
              });
        };
        
        export const getModel = (category,brand) => (dispatch) => {
          dispatch({
              type: types.GET_MODEL_REQUEST,
          });
          axios
              .get(`${base_url2}/product/modelName/${category}/${brand}`,
               {
                  headers: {
                      Authorization: "Bearer " + sessionStorage.getItem("token") || "",
                  },
              })
              .then((res) => {
                  console.log(res);
                  dispatch({
                      type: types.GET_MODEL_SUCCESS,
                      payload: res.data,
                  });
              })
              .catch((err) => {
                  console.log(err);
                  dispatch({
                      type: types.GET_MODEL_FAILURE,
                      payload: err,
                  });
              });
        };     

        export const getAllProductList = (category,brand,model) => (dispatch) => {
          dispatch({
            type: types.GET_ALL_PRODUCT_LIST_REQUEST,
          });
          axios
            .get(`${base_url2}/product/attributeName/${category}/${brand}/${model}`, 
            {
              headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token") || "",
              },
            })
            .then((res) => {
              console.log(res);
              dispatch({
                type: types.GET_ALL_PRODUCT_LIST_SUCCESS,
                payload: res.data,
              });
            })
            .catch((err) => {
              console.log(err);
              dispatch({
                type: types.GET_ALL_PRODUCT_LIST_FAILURE,
                payload: err,
              });
            });
        };      

        export const getLocationList = (orgId) => (dispatch) => {
          dispatch({
            type: types.GET_LOCATION_LIST_REQUEST,
          });
          axios
            .get(`${base_url}/locationDetails/getLocationDetailsList/${orgId}`, {
              headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token") || "",
              },
            })
            .then((res) => {
              console.log(res);
              dispatch({
                type: types.GET_LOCATION_LIST_SUCCESS,
                payload: res.data,
              });
            })
            .catch((err) => {
              console.log(err);
              dispatch({
                type: types.GET_LOCATION_LIST_FAILURE,
                payload: err,
              });
            });
        };      

        export const getSaleCurrency = () => (dispatch) => {
          dispatch({
            type: types.GET_SALE_CURRENCY_REQUEST,
          });
          axios
            .get(`${base_url}/currencies/sales`, {
              headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token") || "",
              },
            })
            .then((res) => {
              console.log(res);
              dispatch({
                type: types.GET_SALE_CURRENCY_SUCCESS,
                payload: res.data,
              });
            })
            .catch((err) => {
              console.log(err);
              dispatch({
                type: types.GET_SALE_CURRENCY_FAILURE,
                payload: err,
              });
            });
        };
     
        export const handleProductDetails = (modalProps) => (dispatch) => {
          dispatch({
            type: types.HANDLE_PRODUCTS_DETAILS_DRAWER,
            payload: modalProps,
          });
        };

        export const handleSuppliesDetails = (modalProps) => (dispatch) => {
          dispatch({
            type: types.HANDLE_SUPPLIES_DETAILS_DRAWER,
            payload: modalProps,
          });
        };

        export const getProductsByProductId = (productId) => (dispatch) => {
          dispatch({
            type: types.GET_PRODUCTS_BY_PRODUCTID_REQUEST,
          });
          axios
            .get(`${base_url2}/product/bothSuppliesAndProduct/${productId}`, {
              headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token") || "",
              },
            })
            .then((res) => {
              console.log(res);
              dispatch({
                type: types.GET_PRODUCTS_BY_PRODUCTID_SUCCESS,
                payload: res.data,
              });
            })
            .catch((err) => {
              console.log(err.response);
              dispatch({
                type: types.GET_PRODUCTS_BY_PRODUCTID_FAILURE,
                payload: err,
              });
            });
        };
        export const getSuppliesBySuppliestId = (productId) => (dispatch) => {
          dispatch({
            type: types.GET_SUPPLIES_BY_PRODUCTID_REQUEST,
          });
          axios
            .get(`${base_url2}/supplies/bothSuppliesAndProduct/${productId}`,)
            .then((res) => {
              console.log(res);
              dispatch({
                type: types.GET_SUPPLIES_BY_PRODUCTID_SUCCESS,
                payload: res.data,
              });
            })
            .catch((err) => {
              console.log(err.response);
              dispatch({
                type: types.GET_SUPPLIES_BY_PRODUCTID_FAILURE,
                payload: err,
              });
            });
        };
        export const getFeaturedMaterials = (pageNo) => (dispatch) => {
          dispatch({
            type: types.GET_FEATURED_MATERIALS_REQUEST,
          });
          axios
            .get(`${base_url2}/supplies/featuredSupplies/${pageNo}`,
              {
                headers: {
                  Authorization: "Bearer " + sessionStorage.getItem("token") || "",
                },
              })
            .then((res) => {
              console.log(res);
              dispatch({
                type: types.GET_FEATURED_MATERIALS_SUCCESS,
                payload: res.data,
              });
            })
            .catch((err) => {
              console.log(err.response);
              dispatch({
                type: types.GET_FEATURED_MATERIALS_FAILURE,
                payload: err,
              });
            });
        };

        export const getMaterialRecommend = (pageNo) => (dispatch) => {
          dispatch({
            type: types.GET_MATERIAL_RECOMMEND_REQUEST,
          });
          axios
            .get(`${base_url2}/supplies/recomendededSupplies/${pageNo}`, {
              // headers: {
              //   Authorization: "Bearer " + sessionStorage.getItem("token") || "",
              // },
            })
            .then((res) => {
              console.log(res);
              dispatch({
                type: types.GET_MATERIAL_RECOMMEND_SUCCESS,
                payload: res.data,
              });
            })
            .catch((err) => {
              console.log(err);
              dispatch({
                type: types.GET_MATERIAL_RECOMMEND_FAILURE,
                payload: err,
              });
            });
        };
        
        export const generateQuatation = (data,quotationId,cb) => (dispatch) => {
          dispatch({ type: types.GENERATE_QUOTATION_REQUEST });
        
          axios
            .put(`${base_url2}/quotation/protal/procure/address/${quotationId}`,data, {
              headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token") || "",
              },
            })
        
            .then((res) => {
              console.log("resp",res)
       
          dispatch({
                type: types.GENERATE_QUOTATION_SUCCESS,
                payload: res.data,
              });
              cb && cb ("success")
            })
            .catch((err) => {
              console.log("errr",err,err && err.response && err.response.data.error)
              dispatch({
                type: types.GENERATE_QUOTATION_FAILURE,
              });
              cb && cb ("error",err && err.response && err.response.data.error)
            });
        };       