import * as types from './AchievementActionTypes'
import dayjs from "dayjs";
import moment from "moment"; 
const initialState = {
    viewType: "table",

    fetchingDatewiseAchievement: false,
    fetchingDatewiseAchievementError: false,
    showAchievement:[],

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
]
}
export const achievementReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ACHIEVEMENT_VIEW_TYPE:
            return { ...state, viewType: action.payload };


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

      case types.GET_DATE_WISE_ACHIEVEMENT_REQUEST:
  return { ...state, fetchingDatewiseAchievement: true };
case types.GET_DATE_WISE_ACHIEVEMENT_SUCCESS:
  return {
    ...state,
    fetchingDatewiseAchievement: false,
    fetchingDatewiseAchievementError: false,
    showAchievement: action.payload,
  };
case types.GET_DATE_WISE_ACHIEVEMENT_FAILURE:
  return {
    ...state,
    fetchingDatewiseAchievement: false,
    fetchingDatewiseAchievementError: true,
    selectedReportType: "table"
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