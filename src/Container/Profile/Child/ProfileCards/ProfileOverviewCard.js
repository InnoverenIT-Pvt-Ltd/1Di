import React, { Component } from "react";
import { ViewEditCard } from "../../../../Components/UI/Elements";
import ProfileOverviewView from "./ProfileOverviewView";
import ProfileOverviewEdit from "./ProfileOverviewEdit";
import ViewEditCard1 from "../../../../Components/UI/Elements/ViewEditCard1";

class ProfileOverviewCard extends Component {
  render() {
    const { user } = this.props;
    // console.log(user);
    return (
      <div>
        <ViewEditCard1>
          {({ viewType }, toggleViewType) =>
            viewType === "view" ? (
              <ProfileOverviewView
                 user={user}
                // toggleViewType={toggleViewType}
              />
            ) : (
              <ProfileOverviewEdit
                // user={user}
                // toggleViewType={toggleViewType}
              />
            )
          }
        </ViewEditCard1>
      </div>
    );
  }
}

export default ProfileOverviewCard;