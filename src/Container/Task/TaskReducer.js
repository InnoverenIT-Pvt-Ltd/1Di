import * as types from "./TaskActionTypes";
import moment from "moment";

const initialState = {
    fetchingTaskbyCandidateId: false,
    fetchingTaskbyCandidateIdError: false,
    taskTab:[],

    addingNotesByOpportunityId: false,
    addingNotesByOpportunityIdError: false,
    
  fetchingNotesListByOpportunityId: false,
  fetchingNotesListByOpportunityIdError: false,
  notesListByOpportunityId: [],

  fetchingTaskName: false,
  fetchingTaskNameError: false,
  TaskName:[],

    clickTaskDrawerModal:false,

    clickNoteDrawerModal:false,

    clickTaskNameDrawerModal:false,
    
    updatingTaskStatus: false,
    updatingTaskStatusError: false,

    addingTaskHour: false,
    addingTaskHourError: false,
};

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
   case types.GET_TASK_BY_CANDIDATE_ID_REQUEST:
            return { ...state, fetchingTaskbyCandidateId: true };
          case types.GET_TASK_BY_CANDIDATE_ID_SUCCESS:
            return {
              ...state,
              fetchingTaskbyCandidateId: false,
              fetchingTaskbyCandidateIdError: false,
              taskTab: action.payload,
            };
          case types.GET_TASK_BY_CANDIDATE_ID_FAILURE:
            return {
              ...state,
              fetchingTaskbyCandidateId: false,
              fetchingTaskbyCandidateIdError: true,
            //   selectedReportType: "dashboard"
            };

            case types.HANDLE_TASK_DRAWER_MODAL:
              return { ...state, clickTaskDrawerModal: action.payload };
       
              case types.HANDLE_NOTE_DRAWER_MODAL:
                return { ...state, clickNoteDrawerModal: action.payload };

                case types.HANDLE_TASKNAME_DRAWER_MODAL:
                return { ...state, clickTaskNameDrawerModal: action.payload };

              case types.UPDATE_TASK_STATUS_REQUEST:
                return { ...state, updatingTaskStatus: true };
              case types.UPDATE_TASK_STATUS_SUCCESS:
                return {
                  ...state, updatingTaskStatus: false,
                  taskTab: state.taskTab.map((item) => {
                    if (item.taskId === action.payload.taskId) {
                      return action.payload
                    } else {
                      return item
                    }
                  })
                };
              case types.UPDATE_TASK_STATUS_FAILURE:
                return {
                  ...state,
                  updatingTaskStatus: false,
                  updatingTaskStatusError: true,
                  // addCurdleModal: false,
                };
                case types.ADD_TASK_HOUR_REQUEST:
                  return { ...state, addingTaskHour: true };
                case types.ADD_TASK_HOUR_SUCCESS:
                  return {
                    ...state,
                    addingTaskHour: false,
                    clickTaskDrawerModal:false
                  };
                case types.ADD_TASK_HOUR_FAILURE:
                  return {
                    ...state,
                    addingTaskHour: false,
                    addingTaskHourError: true,
                  };


                  case types.ADD_OPPORTUNITY_NOTES_REQUEST:
                    return {
                      ...state,
                      addingNotesByOpportunityId: true,          
                    };
                  case types.ADD_OPPORTUNITY_NOTES_SUCCESS:
                    return {
                      ...state,
                      addingNotesByOpportunityId: false,
          
                    };
                  case types.ADD_OPPORTUNITY_NOTES_FAILURE:
                    return {
                      ...state,
                      addingNotesByOpportunityId: false,
                      addingNotesByOpportunityIdError: true,
                    };  

                    case types.GET_NOTES_LIST_BY_OPPORTUNITY_ID_REQUEST:
                      return { ...state, fetchingNotesListByOpportunityId: true };
                    case types.GET_NOTES_LIST_BY_OPPORTUNITY_ID_SUCCESS:
                      return {
                        ...state,
                        fetchingNotesListByOpportunityId: false,
                        notesListByOpportunityId: action.payload,
                      };
                    case types.GET_NOTES_LIST_BY_OPPORTUNITY_ID_FAILURE:
                      return {
                        ...state,
                        fetchingNotesListByOpportunityId: false,
                        fetchingNotesListByOpportunityIdError: true,
                      };

                      case types.GET_TASK_NAME_REQUEST:
                        return { ...state, fetchingTaskName: true };
                      case types.GET_TASK_NAME_SUCCESS:
                        return {
                          ...state,
                          fetchingTaskName: false,
                          TaskName: action.payload,
                        };
                      case types.GET_TASK_NAME_FAILURE:
                        return {
                          ...state,
                          fetchingTaskName: false,
                          fetchingTaskNameError: true,
                        };


              default:
            return state;
    }
    
};