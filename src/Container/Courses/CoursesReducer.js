import * as types from './CoursesActionTypes'
import dayjs from "dayjs";




const initialState = {
    viewType: "card",

    fetchingCourseCard:false,
    fetchingCourseCardError:false,

    fetchingTopics:false,
    fetchingTopicsError:false,
    topics:[],

    courseCard:[],

    fetchingSelcted: false,
    fetchingSelctedError: false,
    selcted:[],
    
    fetchingCourseDetailsById: false,
  fetchingCourseDetailsByIdError: false,
  course: {},

  linkingProductInfo: false,
  linkingProductInfoError: false,
  productInfo: [],

  addingPlaceOrder:false,
  addingPlaceOrderError:false,

  addStripeModal:false,

  addingPaymentId:false,
  addingPaymentIdError:false,
  paymentDetails:{},


  fetchingCartList: false,
  fetchingCartListError: false,
  cart: {},
}


export const coursesReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.SET_COURSES_VIEW_TYPE:
            return { ...state, viewType: action.payload };


          

   

    



     


         

          
            case types.HANDLE_STRIPE_MODAL:
              return { ...state, addStripeModal: action.payload };


              





        default:
    return state;

    }
};