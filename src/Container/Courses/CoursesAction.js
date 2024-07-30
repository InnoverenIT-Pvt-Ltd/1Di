import * as types from "./CoursesActionTypes";
import axios from "axios";
import moment from "moment";
import { message } from "antd"; 
import { base_url, assessment_url} from "../../Config/Auth";



export const setCoursesViewType = (viewType) => (dispatch) =>
  dispatch({ type: types.SET_COURSES_VIEW_TYPE, payload: viewType });



 



  export const handleStripeModal = (modalProps) => dispatch => {
    dispatch({
        type: types.HANDLE_STRIPE_MODAL,
        payload: modalProps
    })
  }







 


 



 

 


 
