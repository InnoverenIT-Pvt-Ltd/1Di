import * as types from "./PoActionType";
import axios from "axios";
import { base_url } from "../../Config/Auth";

export const getAllPurchaseOrder = () => (dispatch) => {
    dispatch({
        type: types.GET_ALL_PURCHASE_ORDER_REQUEST,
    });
    axios
        .get(`${base_url}/quotation/AllQuotationSupplierSupplies`, {
        })
        .then((res) => {
            dispatch({
                type: types.GET_ALL_PURCHASE_ORDER_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: types.GET_ALL_PURCHASE_ORDER_FAILURE,
            });
        });
};

export const handlePoTrackModal = (typeProps) => (dispatch) => {
    dispatch({
        type: types.HNADLE_PO_TRACK_MODAL,
        payload: typeProps
    })
}

export const handlePoSummaryModal = (typeProps) => (dispatch) => {
    dispatch({
        type: types.HNADLE_PO_SUMMARY_MODAL,
        payload: typeProps
    })
}

export const getPoListDetails = (quotationSupplierSuppliesId) => (dispatch) => {
    dispatch({
        type: types.GET_PO_LIST_REQUEST,
    });
    axios
        .get(`${base_url}/quotation/quotationSupplierSupplies/materials/${quotationSupplierSuppliesId}`, {
        })
        .then((res) => {
            dispatch({
                type: types.GET_PO_LIST_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: types.GET_PO_LIST_FAILURE,
            });
        });
};


export const getPoStageDetails = () => (dispatch) => {
    dispatch({
        type: types.GET_PO_STAGE_REQUEST,
    });
    axios
        .get(`${base_url}/orderstage/all-Stages`, {
        })
        .then((res) => {
            dispatch({
                type: types.GET_PO_STAGE_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: types.GET_PO_STAGE_FAILURE,
            });
        });
};

export const handleItemTrackModal = (typeProps) => (dispatch) => {
    dispatch({
        type: types.HNADLE_ITEM_TRACK_MODAL,
        payload: typeProps
    })
}

export const getlocationDetailsForPo = (quotationSupplierSuppliesId) => (dispatch) => {
    dispatch({
        type: types.GET_LOCATION_DETAILS_FOR_PO_UPDATE_REQUEST,
    });
    axios
        .get(`${base_url}/quotation/quotationAnalysisLocation/${quotationSupplierSuppliesId}`)
        .then((res) => {
            console.log(res);
            dispatch({
                type: types.GET_LOCATION_DETAILS_FOR_PO_UPDATE_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: types.GET_LOCATION_DETAILS_FOR_PO_UPDATE_FAILURE,
                payload: err,
            });
        });
};

export const getPoDetailsList = (quotationSupplierSuppliesId) => (dispatch) => {
    dispatch({
        type: types.GET_PO_DETAILS_LIST_REQUEST,
    });
    axios
        .get(`${base_url}/quotation/poData/${quotationSupplierSuppliesId}`)
        .then((res) => {
            console.log(res);
            dispatch({
                type: types.GET_PO_DETAILS_LIST_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: types.GET_PO_DETAILS_LIST_FAILURE,
                payload: err,
            });
        });
};