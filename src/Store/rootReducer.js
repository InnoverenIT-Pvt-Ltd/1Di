import { combineReducers } from "redux";
import { authReducer } from "../Container/Auth/AuthReducer";
import { languageReducer } from "../../src/Language/LanguageReducer";
// import { LOGOUT } from "../Containers/Auth/AuthTypes";
/**
 *  All of application reducers import goes here...
 */
import { myorderReducer } from "../Container/MyOrder/MyOrderReducer"
import { plannerReducer } from "../Container/Auth/Planner/PlannerReducer";
import { poReducer } from "../Container/PO/PoReducer";
import { jobReducer } from "../Jobsite/JobReducer";
import { coursesReducer } from "../Container/Courses/CoursesReducer";
import { taskReducer } from "../Container/Task/TaskReducer";
import { notificationReducer } from "../Container/Notification/NotificationReducer";
import { achievementReducer } from "../Main/Achievement/AchievementReducer";
import { inventoryReducer } from "../Container/Inventory/InventoryReducer";
import { customerReducer } from "../Container/Customer/CustomerReducer";

const appReducer = combineReducers({
  job: jobReducer,
  auth: authReducer,
  planner: plannerReducer,
  achievement: achievementReducer,
  myorder: myorderReducer,
  po: poReducer,
  notification: notificationReducer,
  language: languageReducer,
  courses: coursesReducer,
  task: taskReducer,
  inventory:inventoryReducer,
  customer: customerReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    sessionStorage.clear();
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
