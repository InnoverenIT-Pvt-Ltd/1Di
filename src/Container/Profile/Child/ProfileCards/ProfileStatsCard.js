import React, { Component } from 'react';
import { ViewEditCard } from "../../../../Components/UI/Elements";
import ProfileStatsView from "./ProfileStatsView";
import ProfileStatsEdit from "./ProfileStatsEdit";
import ViewEditCard1 from '../../../../Components/UI/Elements/ViewEditCard1';

class ProfileAboutCard extends Component {
    render() {
        const { user } = this.props;
        // console.log(user)
        return (
            <div>
                <ViewEditCard1>
                    {({ viewType }, toggleViewType) => (
                        viewType === 'view'
                            ? <ProfileStatsView
                             user={user}
                                // toggleViewType={toggleViewType}
                            />
                            : <ProfileStatsEdit
                                // user={user}
                                // toggleViewType={toggleViewType}
                            />
                    )}
                </ViewEditCard1>
            </div>
        )
    }
}

export default ProfileAboutCard;