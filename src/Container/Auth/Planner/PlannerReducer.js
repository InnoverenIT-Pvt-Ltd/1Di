import * as types from './PlannerActionTypes'
import dayjs from "dayjs";
import moment from "moment"; 

const initialState = {
    viewType: "dashboard",

    plannerStartDate: '',
    plannerEndDate: '',
    plannerStartTime: '',
    plannerEndTime: '',
    chooserModal: false,

    addjobDetailModal:false,

    fetchingCandidateTask:false,
    fetchingCandidateTaskError:false,
    candidateTask:[],

    fetchingCandidateProject:false,
    fetchingCandidateProjectError:false,
    candidateProject:[],

    fetchingCandidateCustomer:false,
    fetchingCandidateCustomerError:false,
    candidateCustomer:[],

    fetchingTaskList: false,
    fetchingTaskListError: false,
    Tasklist:[],

    fetchingHourListByUserId:false,
    fetchingHourListByUserId:false,
    hourListByUserId:[],

    addingPlannerHour:false,
    addingPlannerHourError:false,

    addingPlannerLeaves:false,
    addingPlannerLeavesError:false,

    fetchingDatewiseReport: false,
    fetchingDatewiseReportError: false,
    showDatelist: [],
//     viewEditModal: false,
//     selectedEvent: {},
//     openedFormModal: 'event',

//     fetchingPermissionsList: false,
//     fetchingPermissionsListError: false,
//     permissionsDataList: [],

//     addingSharingPlanner: false,
//   addingSharingPlannerError: false,
isCustomSelected: false,
startDate: dayjs().toISOString(),
endDate: dayjs().toISOString(),

dateRangeList: [

  // {
  //   id: 8,
  //   type: "All",
  //   value: "All",
  //   starter: true,
  //   isSelected: true,
  //   startDate: dayjs()
  //     .toISOString(),
  //   endDate: dayjs().toISOString(),
  // },
  {
    id: 1,
    type: "Today",
    value: "Today",
    starter: true,
    isSelected: true,
    startDate: dayjs()
      // .subtract(1, "days")
      .toISOString(),
    endDate: dayjs().toISOString(),
  },
  // {
  //   id: 2,
  //   type: "Yesterday",
  //   value: "Yesterday",
  //   starter: false,
  //   isSelected: false,
  //   endDate: dayjs()
  //     .subtract(1, "days")

  //     .toISOString(),
  //   startDate: dayjs().toISOString(),
  // },
  {
    id: 3,
    type: "Last7days",
    value: "Last 7 days",
    starter: false,
    isSelected: false,
    endDate: dayjs()
    .subtract(7, "days")

    .toISOString(),
  startDate: dayjs().toISOString(),
    // startDate: dayjs()
    //   .subtract(7, "days")

    //   .toISOString(),
    // endDate: dayjs().toISOString(),
  },

  {
    id: 4,
    type: "Last30days",
    value: "Last 30 days",
    starter: false,
    isSelected: false,
    endDate: dayjs()
    .subtract(30, "days")

    .toISOString(),
  startDate: dayjs().toISOString(),
    // startDate: dayjs()
    //   .subtract(30, "days")

    //   .toISOString(),
    // endDate: dayjs().toISOString(),
  },
  {
    id: 5,
    type: "Thismonth",
    value: "This month",
    starter: false,
    isSelected: false,
  endDate:moment.utc().startOf('month').toISOString(),
  startDate:moment().toISOString()
  },
  {
    id: 6,
    type: "Lastmonth",
    value: "Last month",
    starter: false,
    isSelected: false,
    endDate:moment().subtract(1, 'month').startOf('month').toISOString(),
    startDate:moment.utc().subtract(1, 'month').endOf('month').toISOString() 
  },
  // {
  //   id: 8,
  //   type: "DateRange",
  //   value: "Date Range",
  //   starter: false,
  //   isSelected: false,
  //   startDate: dayjs().startOf("year").toISOString,
  //   endDate: dayjs().endOf("year").toISOString(),
  // },
],

fetchingDepartmentList: false,
fetchingDepartmentListError: false,
departmentList: [],

fetchingDepartmentRoleData: false,
fetchingDepartmentRoleDataError: false,
departmentRoleData: [],

fetchingUSerByIds: false,
fetchingUSerByIdsError:false,
USerByIds:[],

}
export const plannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_PLANNER_VIEW_TYPE:
            return { ...state, viewType: action.payload };

        case types.SET_PLANNER_DATE:
            const { startDate, endDate, startTime, endTime } = action.payload;
            return { ...state, plannerStartDate: startDate, plannerEndDate: endDate, plannerStartTime: startTime, plannerEndTime: endTime };
        // case types.HANDLE_EVENT_MODAL:
        //     return { ...state, addEventModal: action.payload };
        // case types.HANDLE_VIEW_EDIT_MODAL:
        //     return { ...state, viewEditModal: action.payload.visible, selectedEvent: action.payload.event };
        // case types.SET_DATE_AND_TIME:
        //     return { ...state };
        // case types.SET_FORM_MODAL_TYPE:
        //     return { ...state, chooserModal: false };
        case types.HANDLE_CHOOSER_MODAL:
            return { ...state, chooserModal: action.payload };

    

//     case types.GET_PERMISSIONS_LIST_REQUEST:
//     return { ...state, fetchingPermissionsList: true };
//   case types.GET_PERMISSIONS_LIST_SUCCESS:
//     return {
//       ...state,
//       fetchingPermissionsList: false,
//       permissionsDataList: action.payload,
//     };
//   case types.GET_PERMISSIONS_LIST_FAILURE:
//     return {
//       ...state,
//       fetchingPermissionsList: false,
//       fetchingPermissionsListError: false,
//     };

    case types.GET_CANDIDATE_PROJECT_REQUEST:
    return { ...state, fetchingCandidateProject: true };
  case types.GET_CANDIDATE_PROJECT_SUCCESS:
    return {
      ...state,
      fetchingCandidateProject: false,
      candidateProject: action.payload,
    };
  case types.GET_CANDIDATE_PROJECT_FAILURE:
    return {
      ...state,
      fetchingCandidateProject: false,
      fetchingCandidateProjectError: false,
    };

    case types.SET_TIME_INTERVAL_REPORT:
      return {
        ...state,
        isCustomSelected: true,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
      };


    case types.CHANGE_SELECTED_TIME_INTERVAL_REPORT:
      return {
        ...state,
        dateRangeList: newDateRange(state.dateRangeList, action.payload),
        isCustomSelected: false,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        type: action.payload.type
      };


    
    case types.ADD_PLANNER_HOUR_REQUEST:
        return { ...state, addingPlannerHour: true };
      case types.ADD_PLANNER_HOUR_SUCCESS:
        return {
          ...state,
          addingPlannerHour: false,
          chooserModal:false,
          // hourListByUserId: state.hourListByUserId.map((item) => {
          //   if (item.hourId === action.payload.hourId) {
          //     return action.payload;
          //   } else {
          //     return item;
          //   }
          // }),
        };
      case types.ADD_PLANNER_HOUR_FAILURE:
        return {
          ...state,
          addingPlannerHour: false,
          addingPlannerHourError: true,
          // addOpportunityModal: false,
        };

//     case types.SHARE_PLANNER_PERMISSION_REQUEST:
//         return { ...state, addingSharingPlanner: true };
    
//       case types.SHARE_PLANNER_PERMISSION_SUCCESS:
//         return { ...state, addingSharingPlanner: false, sharingPlanner: action.payload };
    
//       case types.SHARE_PLANNER_PERMISSION_FAILURE:
//         return {
//           ...state,
//           addingSharingPlanner: false,
//           addingSharingPlannerError: true,
//         };


case types.GET_DATE_WISE_REPORT_REQUEST:
  return { ...state, fetchingDatewiseReport: true };
case types.GET_DATE_WISE_REPORT_SUCCESS:
  return {
    ...state,
    fetchingDatewiseReport: false,
    fetchingDatewiseReportError: false,
    showDatelist: action.payload,
  };
case types.GET_DATE_WISE_REPORT_FAILURE:
  return {
    ...state,
    fetchingDatewiseReport: false,
    fetchingDatewiseReportError: true,
    selectedReportType: "dashboard"
  };

  case types.GET_TASK_LIST_REQUEST:
    return { ...state, fetchingTaskList: true };
  case types.GET_TASK_LIST_SUCCESS:
    return {
      ...state,
      fetchingTaskList: false,
      Tasklist: action.payload,
    };
  case types.GET_TASK_LIST_FAILURE:
    return {
      ...state,
      fetchingTaskList: false,
      fetchingTaskListError: false,
    };

  case types.GET_CANDIDATE_CUSTOMER_REQUEST:
    return { ...state, fetchingCandidateCustomer: true };
  case types.GET_CANDIDATE_CUSTOMER_SUCCESS:
    return {
      ...state,
      fetchingCandidateCustomer: false,
      candidateCustomer: action.payload,
    };
  case types.GET_CANDIDATE_CUSTOMER_FAILURE:
    return {
      ...state,
      fetchingCandidateCustomer: false,
      fetchingCandidateCustomerError: false,
    };


     
    case types.ADD_PLANNER_LEAVES_REQUEST:
        return { ...state, addingPlannerLeaves: true };
      case types.ADD_PLANNER_LEAVES_SUCCESS:
        return {
          ...state,
          addingPlannerLeaves: false,
          // addOpportunityModal: false,
          // opportunityByUserId:[action.payload,...state.opportunityByUserId]
          // clearbit: null,
        };
      case types.ADD_PLANNER_LEAVES_FAILURE:
        return {
          ...state,
          addingPlannerLeaves: false,
          addingPlannerLeavesError: true,
          // addOpportunityModal: false,
        };


        case types.GET_CANDIDATE_TASK_REQUEST:
          return { ...state, fetchingCandidateTask: true };
        case types.GET_CANDIDATE_TASK_SUCCESS:
          return {
            ...state,
            fetchingCandidateTask: false,
            candidateTask: action.payload,
          };
        case types.GET_CANDIDATE_TASK_FAILURE:
          return {
            ...state,
            fetchingCandidateTask: false,
            fetchingCandidateTaskError: false,
          };
      
    
          case types.HANDLE_ADD_JOB_DETAIL_MODAL:
            return { ...state, addjobDetailModal: action.payload };

            case types.GET_HOUR_LIST_BY_USER_ID_REQUEST:
              return { ...state, fetchingHourListByUserId: true };
            case types.GET_HOUR_LIST_BY_USER_ID_SUCCESS:
              return {
                ...state,
                fetchingHourListByUserId: false,
                hourListByUserId: action.payload,
              };
            case types.GET_HOUR_LIST_BY_USER_ID_FAILURE:
              return {
                ...state,
                fetchingHourListByUserId: false,
                fetchingHourListByUserIdError: true,
              };

              case types.GET_DEPARTMENT_LIST_REQUEST:
                return { ...state, fetchingDepartmentList: true };
              case types.GET_DEPARTMENT_LIST_SUCCESS:
                return {
                  ...state,
                  fetchingDepartmentList: false,
                  departmentList: action.payload,
                };
              case types.GET_DEPARTMENT_LIST_FAILURE:
                return {
                  ...state,
                  fetchingDepartmentList: false,
                  fetchingDepartmentListError: true,
                };
                case types.GET_DEPARTMENT_ROLE_DATA_REQUEST:
                  return { ...state, fetchingDepartmentRoleData: true };
                case types.GET_DEPARTMENT_ROLE_DATA_SUCCESS:
                  return {
                    ...state,
                    fetchingDepartmentRoleData: false,
                    departmentRoleData: action.payload,
                  };
                case types.GET_DEPARTMENT_ROLE_DATA_FAILURE:
                  return {
                    ...state,
                    fetchingDepartmentRoleData: false,
                    fetchingDepartmentRoleDataError: true,
                  };
                  case types.GET_USER_BY_IDS_REQUEST:
                    return { ...state, fetchingUSerByIds: true };
                  case types.GET_USER_BY_IDS_SUCCESS:
                    return {
                      ...state,
                      fetchingUSerByIds: false,
                      USerByIds: action.payload,
                    };
                  case types.GET_USER_BY_IDS_FAILURE:
                    return {
                      ...state,
                      fetchingUSerByIds: false,
                      fetchingUSerByIdsError: true,
                    };

    default:
    return state;
}
};


const newDateRange = (dateRange, newDate) =>
  dateRange.map((range) => {
    console.log(newDate);
    if (range.id === newDate.id) {
      return { ...range, isSelected: true };
    } else {
      return { ...range, isSelected: false };
    }
  });