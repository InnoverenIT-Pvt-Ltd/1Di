import { createSelector } from "reselect";
import moment from "moment";
const hourList = (planner) => planner.hourListByUserId;
// export const hoursSelector = createSelector([hourList], (hours) => {
//   console.log("inside event selector");
//   return hours.map((hour) => {
//     console.log(hour)
//     console.log(hour.projectName)
//     var d = new Date();
//     console.log(`local sysytem date ${d}`);
//     var eventDate = moment.utc(hour.startDate);
//     var eventendDate = moment.utc(hour.endDate);
//     console.log(`event start date ${eventDate}`);
//     console.log(`event end date ${eventendDate}`);

//     if (moment().isBetween(eventDate, eventendDate)) {
//       var value = "orange";
//     } else {
//       var value = "white";
//     }

//     return {
//       title: hour.projectName,
//       start: hour.startDate,
//     end: hour.endDate,
//  color: "#3174ad",
     
//   fontColor: value,
//       // animation: value,
//       type: "event",

//       data: hour,
//     };
//   });
// });

export const hoursSelector = createSelector([hourList], (hours) => {
  console.log("inside event selector");
  return hours.map((hour) => {
    console.log(hour);
    console.log(hour.projectName);

    // Parse UTC dates and convert to local timezone
    const eventDate = moment.utc(hour.startDate).local().toDate();
    const eventendDate = moment.utc(hour.endDate).local().toDate();

    // Handle date boundary issue (if needed)
    // Example: If date shifts unexpectedly due to timezone offset, adjust accordingly
    if (eventDate.getDate() !== moment.utc(hour.startDate).local().toDate().getDate()) {
      eventDate.setHours(eventDate.getHours() - 1); // Example adjustment
    }

    // Determine color based on current time
    const value = moment().isBetween(eventDate, eventendDate) ? "orange" : "white";

    return {
      title: hour.projectName,
      start: eventDate,
      end: eventendDate,
      color: "#3174ad",
      fontColor: value,
      type: "event",
      data: hour,
    };
  });
});



