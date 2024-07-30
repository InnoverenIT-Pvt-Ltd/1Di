import React, { Component,lazy } from "react";
import { ViewEditCard } from "../../../../Components/UI/Elements";
const CoursesOverView=lazy(()=> import("./CoursesOverView"));

class CoursesOverviewCard extends Component {
  render() {
    const { course } = this.props;
    return (
      <div>
        <ViewEditCard>
          {({ viewType }, toggleViewType) =>
            viewType === "view" ? (
              <CoursesOverView 
              course={course}
            //   customer={customer}
               />
            ) : null
          }
        </ViewEditCard>
      </div>
    );
  }
}

export default CoursesOverviewCard;
