import * as types from "./PoActionType";
import moment from "moment";

const initialState = {
    fetchingPoList: false,
    fetchingPoListError: false,
    poList: [],

    showTrackingOrderItem: false,

    showSummaryList: false,

    fetchingPoListDetails: false,
    fetchingPoListDetailsError: false,
    poDetails: [],

    showTrackingOrderItem: false,

    fetchinpoStageDetailsError: false,
    fetchinpoStageDetails: false,
    poStageDetails: [],

    addItemLocation: false,

    fetchingLocationDetailsForPO: false,
    fetchingLocationDetailsForPOError: false,
    poLocationDetails: [],

    fetchinpoDetailsList: false,
    fetchinpoDetailsListError: false,
    poDetailsList: []
};

export const poReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.GET_ALL_PURCHASE_ORDER_REQUEST:
            return { ...state, fetchingPoList: true };
        case types.GET_ALL_PURCHASE_ORDER_SUCCESS:
            return {
                ...state,
                fetchingPoList: false,
                poList: action.payload,
            };
        case types.GET_ALL_PURCHASE_ORDER_FAILURE:
            return {
                ...state,
                fetchingPoList: false,
                fetchingPoListError: true,
            };

        case types.HNADLE_PO_TRACK_MODAL:
            return { ...state, showTrackingOrderItem: action.payload }

        case types.HNADLE_PO_SUMMARY_MODAL:
            return { ...state, showSummaryList: action.payload }

        case types.GET_PO_LIST_REQUEST:
            return { ...state, fetchingPoListDetails: true };
        case types.GET_PO_LIST_SUCCESS:
            return {
                ...state,
                fetchingPoListDetails: false,
                poDetails: action.payload,
            };
        case types.GET_PO_LIST_FAILURE:
            return {
                ...state,
                fetchingPoListDetails: false,
                fetchingPoListDetailsError: true,
            };


        case types.GET_PO_STAGE_REQUEST:
            return { ...state, fetchinpoStageDetails: true };
        case types.GET_PO_STAGE_SUCCESS:
            return {
                ...state,
                fetchinpoStageDetails: false,
                poStageDetails: action.payload,
            };
        case types.GET_PO_STAGE_FAILURE:
            return {
                ...state,
                fetchinpoStageDetails: false,
                fetchinpoStageDetailsError: true,
            };

        case types.HNADLE_ITEM_TRACK_MODAL:
            return { ...state, addItemLocation: action.payload }

        case types.GET_LOCATION_DETAILS_FOR_PO_UPDATE_REQUEST:
            return { ...state, fetchingLocationDetailsForPO: true };
        case types.GET_LOCATION_DETAILS_FOR_PO_UPDATE_SUCCESS:
            return {
                ...state,
                fetchingLocationDetailsForPO: false,
                poLocationDetails: action.payload,
            };
        case types.GET_LOCATION_DETAILS_FOR_PO_UPDATE_FAILURE:
            return {
                ...state,
                fetchingLocationDetailsForPO: false,
                fetchingLocationDetailsForPOError: true,
            };

        case types.GET_PO_DETAILS_LIST_REQUEST:
            return { ...state, fetchinpoDetailsList: true };
        case types.GET_PO_DETAILS_LIST_SUCCESS:
            return {
                ...state,
                fetchinpoDetailsList: false,
                poDetailsList: action.payload,
            };
        case types.GET_PO_DETAILS_LIST_FAILURE:
            return {
                ...state,
                fetchinpoDetailsList: false,
                fetchinpoDetailsListError: true,
            };

        default:
            return state;
    }
};
