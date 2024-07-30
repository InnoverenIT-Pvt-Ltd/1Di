import React, { Component } from "react";
import { ViewEditCard } from "../../../../Components/UI/Elements";
import ViewEditCard1 from "../../../../Components/UI/Elements/ViewEditCard1";
import ProfileDistanceView from "./ProfileDistanceView";

class ProfileDistanceCard extends Component {
  render() {
    const { user } = this.props;
    // console.log(user);
    return (
      <div>
        <ViewEditCard1>
          {({ viewType }, toggleViewType) =>
            viewType === "view" ? (
              <ProfileDistanceView
                 user={user}
                // toggleViewType={toggleViewType}
              />
            ) : (
                ""
            //   <ProfileOverviewEdit
            //     // user={user}
            //     // toggleViewType={toggleViewType}
            //   />
            )
          }
        </ViewEditCard1>
      </div>
    );
  }
}

export default ProfileDistanceCard;