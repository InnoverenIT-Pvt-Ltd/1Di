import * as types from "./MyOrderActionType";
import moment from "moment";

const initialState = {
  addreviewOffer: false,
  addOrderModal: false,
  orderedPhoneModal: false,
  seeDetailsModal: false,

  ConfirmingOrderData: false,
  ConfirmingOrderDataError: false,

  addingPickUpAddress: false,
  addingPickUpAddressError: false,

  addingOrder: false,
  addingOrderError: false,
  orderDetailsId: {},

  addStatusOfOrder: false,

  addPickUp: false,

  fetchingOrderData: false,
  fetchingOrderDataError: false,
  orderListData: [],

  fetchingPhoneData: false,
  fetchingPhoneDataError: false,
  phoneListData: [],

  addingPhone: false,
  addingPhoneError: false,

  phonListNoteModal: false,
  fetchingNotesInOrders: false,
  fetchingNotesInOrdersError: false,
  notesInOrders: [],

  fetchingStatusofORder: false,
  fetchingStatusofORderError: false,
  statusOrders: {},

  openFeedbackOrDrawer: false,

  postingFeedback: false,

  openFeedbackpHnOrDrawer: false,

  fetchingFeedbackOrder: false,
  fetchingFeedbackOrderError: false,
  showFeedbackOrder: [],

  fetchingOrderCount: false,
  fetchingOrderCountError: false,
  orderListCount: [],

  fetchingCompletedOrders: false,
  fetchingCompletedOrdersError: true,
  completedOrders: [],

  fetchingInCompletedOrders: false,
  fetchingInCompletedOrdersError: false,
  IncompletedOrders: [],

  fetchingCancelOrders: false,
  fetchingCancelOrdersError: false,
  cancelsOrders: [],

  fetchingTotalOrders: false,
  fetchingTotalOrdersError: false,
  totalOrders: [],

  orderedoPENModal: false,

  fetchingTaskByPhoneId: false,
  fetchingTaskByPhoneIdError: false,
  taskByPhone: [],

  clickStrOrDrwr: false,

  fetchingProcureOrderData: false,
  fetchingProcureOrderDataError: false,
  orderProcureData: [],

  viewItemDrwr: false,
  showStatusDrwr: false,

  fetchingProcureQuotation: false,
  fetchingProcureQuotationError: false,
  orderProcureQuoatation: [],

  fetchingProcureOrderDetails: false,
  fetchingProcureOrderDetailsError: false,
  orderProcureDetails: [],

  fetchingProcureStatusItem: false,
  fetchingProcureStatusItemError: false,
  statusItems: {},

  fetchingOrderSupplierslist: false,
  fetchingOrderSupplierslistError: false,
  orderSupplierList: [],

  fetchingOdrSuppliersItem: false,
  fetchingOdrSuppliersItemError: false,
  odrSupplierItems: [],

  fetchingOdrSuppliers: false,
  fetchingOdrSuppliersError: false,
  odrSupplier: [],

  fetchingTopSell: false,
  fetchingTopSellError: false,
  topSell: [],

  fetchingLeastSell: false,
  fetchingLeastSellError: false,
  leastSell: [],
  repeatingOrderSuccess: false,
  repeatingOrderSuccessError: false,

  updatingOrdrSuplrItems: false,
  updatingOrdrSuplrItemsError: false,

  fetchingOrdrSuplrDetails: false,
  fetchingOrdrSuplrDetailsError: false,

  fetchingOrdrSuplrDetails: false,
  fetchingOrdrSuplrDetailsError:false,
  ordrSuplrItem:[],
};

export const myorderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_REVIEW_OFFER_MODAL:
      return { ...state, addreviewOffer: action.payload };

    case types.HANDLE_ADD_ORDER_MODAL:
      return { ...state, addOrderModal: action.payload };

    case types.HANDLE_ORDERED_PHONE_MODAL:
      return { ...state, orderedPhoneModal: action.payload };

    case types.HANDLE_SEE_DETAILS_MODAL:
      return { ...state, seeDetailsModal: action.payload };

    case types.ADD_ORDER_REQUEST:
      return { ...state, addingOrder: true };
    case types.ADD_ORDER_SUCCESS:
      return {
        ...state,
        addingOrder: false,

        orderDetailsId: action.payload,
        // addDriverModal: false,
      };
    case types.ADD_ORDER_FAILURE:
      return {
        ...state,
        addingOrder: false,
        addingOrderError: true,
        // addCustomerModal: false
      };

    case types.GET_PHONE_DETAILS_REQUEST:
      return { ...state, fetchingPhoneData: true };
    case types.GET_PHONE_DETAILS_SUCCESS:
      return {
        ...state,
        fetchingPhoneData: false,
        phoneListData: action.payload,
        //showReqTable: [...state.showReqTable, ...action.payload],
      };
    case types.GET_PHONE_DETAILS_FAILURE:
      return {
        ...state,
        fetchingPhoneData: false,
        fetchingPhoneDataError: true,
      };

    case types.GET_ORDER_DATA_REQUEST:
      return { ...state, fetchingOrderData: true };

    case types.GET_ORDER_DATA_SUCCESS:
      const neworderlist = action.payload.filter(
        (item) =>
          !state.orderListData.some(
            (existingItem) => existingItem.orderId === item.orderId
          )
      );
      return {
        ...state,
        fetchingOrderData: false,
        // orderListData: action.payload,
        orderListData: [...state.orderListData, ...neworderlist],
      };
    case types.GET_ORDER_DATA_FAILURE:
      return {
        ...state,
        fetchingOrderData: false,
        fetchingOrderDataError: true,
      };

    case types.ADD_PHONE_REQUEST:
      return { ...state, addingPhone: true };
    case types.ADD_PHONE_SUCCESS:
      return {
        ...state,
        addingPhone: false,
        //addLinkDistributorOrderConfigureModal: false,
        //showReqTable:[action.payload,...state.showReqTable]
        addOrderModal: false,
      };
    case types.ADD_PHONE_FAILURE:
      return {
        ...state,
        addingPhone: false,
        // addCustomerModal: false
      };
    case types.HANDLE_PHONE_LIST_ORDER_NOTE_MODAL:
      return { ...state, phonListNoteModal: action.payload };

    case types.GET_NOTES_LIST_IN_ORDER_REQUEST:
      return { ...state, fetchingNotesInOrders: true };
    case types.GET_NOTES_LIST_IN_ORDER_SUCCESS:
      return {
        ...state,
        fetchingNotesInOrders: false,
        notesInOrders: action.payload,
      };
    case types.GET_NOTES_LIST_IN_ORDER_FAILURE:
      return {
        ...state,
        fetchingNotesInOrders: false,
        fetchingNotesInOrdersError: true,
      };

    case types.CONFIRM_BUTTON_CLICK_REQUEST:
      return { ...state, ConfirmingOrderData: true };
    case types.CONFIRM_BUTTON_CLICK_SUCCESS:
      return {
        ...state,
        ConfirmingOrderData: false,
        // orderListData:[action.payload,...state.orderListData],
        // orderListData: state.orderListData.map((item) => {
        //   if (item.orderId === action.payload.orderId) {
        //     return action.payload;
        //   } else {
        //     return item;
        //   }
        // }),
      };
    case types.CONFIRM_BUTTON_CLICK_FAILURE:
      return {
        ...state,
        ConfirmingOrderData: false,
        ConfirmingOrderDataError: true,
      };
    // case types.HANDLE_PHONE_LIST_ORDER_TASK_MODAL:
    //     return { ...state, phonListTaskModal: action.payload }

    case types.HANDLE_PICK_UP_MODAL:
      return { ...state, addPickUp: action.payload };

    case types.ADD_PICKUP_ADDRESS_REQUEST:
      return { ...state, addingPickUpAddress: true };
    case types.ADD_PICKUP_ADDRESS_SUCCESS:
      return {
        ...state,
        addingPickUpAddress: false,
        addPickUp: false,
        orderListData: state.orderListData.map((item) => {
          if (item.orderId === action.payload.orderId) {
            return action.payload;
          } else {
            return item;
          }
        }),
      };
    case types.ADD_PICKUP_ADDRESS_FAILURE:
      return {
        ...state,
        addingPickUpAddress: false,
        addingPickUpAddressError: true,
      };

    case types.HANDLE_STATUS_OF_ORDER_MODAL:
      return { ...state, addStatusOfOrder: action.payload };

    case types.GET_STATUS_OF_ORDER_REQUEST:
      return { ...state, fetchingStatusofORder: true };
    case types.GET_STATUS_OF_ORDER_SUCCESS:
      return {
        ...state,
        fetchingStatusofORder: false,
        statusOrders: action.payload,
      };
    case types.GET_STATUS_OF_ORDER_FAILURE:
      return {
        ...state,
        fetchingStatusofORder: false,
        fetchingStatusofORderError: true,
      };

    case types.HANDLE_FEEDBACK_ORDER_DRAWER:
      return { ...state, openFeedbackOrDrawer: action.payload };

    case types.POST_FEEDBACK_REQUEST:
      return { ...state, postingFeedback: true };
    case types.POST_FEEDBACK_SUCCESS:
      return {
        ...state,
        postingFeedback: false,
      };
    case types.POST_FEEDBACK_FAILURE:
      return {
        ...state,
        postingFeedback: false,
      };

    case types.GET_FEEDBACK_REQUEST:
      return { ...state, fetchingFeedbackOrder: true };
    case types.GET_FEEDBACK_SUCCESS:
      return {
        ...state,
        fetchingFeedbackOrder: false,
        showFeedbackOrder: action.payload,
      };
    case types.GET_FEEDBACK_FAILURE:
      return {
        ...state,
        fetchingFeedbackOrder: false,
        fetchingFeedbackOrderError: true,
      };

    case types.HANDLE_FEEDBACK_PHONE_ORDER_DRAWER:
      return { ...state, openFeedbackpHnOrDrawer: action.payload };

    case types.GET_ORDER_COUNT_REQUEST:
      return { ...state, fetchingOrderCount: true };
    case types.GET_ORDER_COUNT_SUCCESS:
      return {
        ...state,
        fetchingOrderCount: false,
        orderListCount: action.payload,
        //showReqTable: [...state.showReqTable, ...action.payload],
      };
    case types.GET_ORDER_COUNT_FAILURE:
      return {
        ...state,
        fetchingOrderCount: false,
        fetchingOrderCountError: true,
      };

    case types.GET_COMPLETED_ORDER_REQUEST:
      return { ...state, fetchingCompletedOrders: true };
    case types.GET_COMPLETED_ORDER_SUCCESS:
      return {
        ...state,
        fetchingCompletedOrders: false,
        completedOrders: action.payload,
      };
    case types.GET_COMPLETED_ORDER_FAILURE:
      return {
        ...state,
        fetchingCompletedOrders: false,
        fetchingCompletedOrdersError: true,
      };
    case types.GET_INCOMPLETED_ORDER_REQUEST:
      return { ...state, fetchingInCompletedOrders: true };
    case types.GET_INCOMPLETED_ORDER_SUCCESS:
      return {
        ...state,
        fetchingInCompletedOrders: false,
        IncompletedOrders: action.payload,
      };
    case types.GET_INCOMPLETED_ORDER_FAILURE:
      return {
        ...state,
        fetchingInCompletedOrders: false,
        fetchingInCompletedOrdersError: true,
      };

    case types.GET_CANCEL_ORDER_REQUEST:
      return { ...state, fetchingCancelOrders: true };
    case types.GET_CANCEL_ORDER_SUCCESS:
      return {
        ...state,
        fetchingCancelOrders: false,
        cancelsOrders: action.payload,
      };
    case types.GET_CANCEL_ORDER_FAILURE:
      return {
        ...state,
        fetchingCancelOrders: false,
        fetchingCancelOrdersError: true,
      };
    case types.GET_TOTAL_ORDER_REQUEST:
      return { ...state, fetchingTotalOrders: true };
    case types.GET_TOTAL_ORDER_SUCCESS:
      return {
        ...state,
        fetchingTotalOrders: false,
        totalOrders: action.payload,
      };
    case types.GET_TOTAL_ORDER_FAILURE:
      return {
        ...state,
        fetchingTotalOrders: false,
        fetchingTotalOrdersError: true,
      };

    case types.HANDLE_ORDER_OPEN_MODAL:
      return { ...state, orderedoPENModal: action.payload };

    case types.GET_TASK_BY_PHONEID_REQUEST:
      return { ...state, fetchingTaskByPhoneId: true };
    case types.GET_TASK_BY_PHONEID_SUCCESS:
      return {
        ...state,
        fetchingTaskByPhoneId: false,
        taskByPhone: action.payload,
      };
    case types.GET_TASK_BY_PHONEID_FAILURE:
      return {
        ...state,
        fetchingTaskByPhoneId: false,
        fetchingTaskByPhoneIdError: true,
      };

    case types.HANDLE_STAR_ORDER_DRAWER:
      return { ...state, clickStrOrDrwr: action.payload };

    case types.GET_PROCURE_ORDER_DATA_REQUEST:
      return { ...state, fetchingProcureOrderData: true };
    case types.GET_PROCURE_ORDER_DATA_SUCCESS:
      return {
        ...state,
        fetchingProcureOrderData: false,
        orderProcureData: action.payload,
      };
    case types.GET_PROCURE_ORDER_DATA_FAILURE:
      return {
        ...state,
        fetchingProcureOrderData: false,
        fetchingProcureOrderDataError: true,
      };

    case types.HANDLE_ITEM_VIEW_DRAWER:
      return { ...state, viewItemDrwr: action.payload };

    case types.HANDLE_STATUS_SHOW_DRAWER:
      return { ...state, showStatusDrwr: action.payload };

    case types.GET_PROCURE_QUOTATION_REQUEST:
      return { ...state, fetchingProcureQuotation: true };
    case types.GET_PROCURE_QUOTATION_SUCCESS:
      return {
        ...state,
        fetchingProcureQuotation: false,
        orderProcureQuoatation: action.payload,
      };
    case types.GET_PROCURE_QUOTATION_FAILURE:
      return {
        ...state,
        fetchingProcureQuotation: false,
        fetchingProcureQuotationError: true,
      };

    case types.GET_PROCURE_ORDER_DETAILS_REQUEST:
      return { ...state, fetchingProcureOrderDetails: true };
    case types.GET_PROCURE_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        fetchingProcureOrderDetails: false,
        orderProcureDetails: action.payload,
      };
    case types.GET_PROCURE_ORDER_DETAILS_FAILURE:
      return {
        ...state,
        fetchingProcureOrderDetails: false,
        fetchingProcureOrderDetailsError: true,
      };

    case types.GET_PROCURE_STATUS_ITEM_REQUEST:
      return { ...state, fetchingProcureStatusItem: true };
    case types.GET_PROCURE_STATUS_ITEM_SUCCESS:
      return {
        ...state,
        fetchingProcureStatusItem: false,
        statusItems: action.payload,
      };
    case types.GET_PROCURE_STATUS_ITEM_FAILURE:
      return {
        ...state,
        fetchingProcureStatusItem: false,
        fetchingProcureStatusItemError: true,
      };

    case types.GET_ORDER_SUPPLIER_LIST_REQUEST:
      return { ...state, fetchingOrderSupplierslist: true };
    case types.GET_ORDER_SUPPLIER_LIST_SUCCESS:
      return {
        ...state,
        fetchingOrderSupplierslist: false,
        orderSupplierList: action.payload,
      };
    case types.GET_ORDER_SUPPLIER_LIST_FAILURE:
      return {
        ...state,
        fetchingOrderSupplierslist: false,
        fetchingslistError: true,
      };
    case types.GET_ODR_SUPPLIER_ITEMS_REQUEST:
      return { ...state, fetchingOdrSuppliersItem: true };
    case types.GET_ODR_SUPPLIER_ITEMS_SUCCESS:
      return {
        ...state,
        fetchingOdrSuppliersItem: false,
        odrSupplierItems: action.payload,
      };
    case types.GET_ODR_SUPPLIER_ITEMS_FAILURE:
      return {
        ...state,
        fetchingOdrSuppliersItem: false,
        fetchingOdrSuppliersItemError: true,
      };

    case types.GET_ODR_SUPPLIER_REQUEST:
      return { ...state, fetchingOdrSuppliers: true };
    case types.GET_ODR_SUPPLIER_SUCCESS:
      return {
        ...state,
        fetchingOdrSuppliers: false,
        odrSupplier: action.payload,
      };
    case types.GET_ODR_SUPPLIER_FAILURE:
      return {
        ...state,
        fetchingOdrSuppliers: false,
        fetchingOdrSuppliersError: true,
      };

    case types.GET_TOP_SELL_REQUEST:
      return { ...state, fetchingTopSell: true };
    case types.GET_TOP_SELL_SUCCESS:
      return {
        ...state,
        fetchingTopSell: false,
        topSell: action.payload,
      };
    case types.GET_TOP_SELL_FAILURE:
      return {
        ...state,
        fetchingTopSell: false,
        fetchingTopSellError: true,
      };

    case types.GET_LEAST_SELL_REQUEST:
      return { ...state, fetchingLeastSell: true };
    case types.GET_LEAST_SELL_SUCCESS:
      return {
        ...state,
        fetchingLeastSell: false,
        leastSell: action.payload,
      };
    case types.GET_LEAST_SELL_FAILURE:
      return {
        ...state,
        fetchingLeastSell: false,
        fetchingLeastSellError: true,
      };

    case types.REPEAT_ORDER_REQUEST:
      return { ...state, repeatingOrderSuccess: true };
    case types.REPEAT_ORDER_SUCCESS:
      return {
        ...state,
        repeatingOrderSuccess: false,
        repeatOrderlist:{},
        // orderListData: state.orderListData.map((item) => {
        //   if (item.orderId === action.payload.orderId) {
        //     return action.payload;
        //   } else {
        //     return item;
        //   }
        // }),
      };
    case types.REPEAT_ORDER_FAILURE:
      return {
        ...state,
        repeatingOrderSuccess: false,
        repeatingOrderSuccessError: true,
      };

    case types.UPDATE_ORDR_SUPLR_ITEMS_REQUEST:
      return {
        ...state,
        updatingOrdrSuplrItems: true,
      };

    case types.UPDATE_ORDR_SUPLR_ITEMS_SUCCESS:
      return {
        ...state,
        updatingOrdrSuplrItems: false,
        // orderListData: state.orderListData.map((item) => {
        //   if (item.orderId === action.payload.orderId) {
        //     return action.payload;
        //   } else {
        //     return item;
        //   }
        // }),
      };
    case types.UPDATE_ORDR_SUPLR_ITEMS_FAILURE:
      return {
        ...state,
        updatingOrdrSuplrItems: false,
        updatingOrdrSuplrItemsError: true,
      };

    case types.GET_ORDR_SUPLR_DETAILS_REQUEST:
      return { ...state, fetchingOrdrSuplrDetails: true };
    case types.GET_ORDR_SUPLR_DETAILS_SUCCESS:
      return {
        ...state,
        fetchingOrdrSuplrDetails: false,
        ordrSuplrItem: action.payload,
      };
    case types.GET_ORDR_SUPLR_DETAILS_FAILURE:
      return {
        ...state,
        fetchingOrdrSuplrDetails: false,
        fetchingOrdrSuplrDetailsError: true,
      };

    default:
      return state;
  }
};
