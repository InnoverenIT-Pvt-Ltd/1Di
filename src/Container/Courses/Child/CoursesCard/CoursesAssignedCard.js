import React, { Component,lazy } from "react";
import { ViewEditCard } from "../../../../Components/UI/Elements";
const CoursesAssignedView=lazy(()=> import("./CoursesAssignedView"));

class CoursesAssignedCard extends Component {
  render() {
    // const { customer } = this.props;
    return (
      <div>
        <ViewEditCard>
          {({ viewType }, toggleViewType) =>
            viewType === "view" ? (
              <CoursesAssignedView 
            //   customer={customer}
               />
            ) : null
          }
        </ViewEditCard>
      </div>
    );
  }
}

export default CoursesAssignedCard;
