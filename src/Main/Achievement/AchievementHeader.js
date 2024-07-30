import React, { Component } from 'react'
import AchievementActionLeft from './AchievementActionLeft';
import AchievementActionRight from './AchievementActionRight';
import { ActionHeader } from '../../Components/Utils';
class AchievementHeader extends Component {
    render() {
        const { viewType, setAchievementViewType } = this.props;
        return (
            <div>
                <ActionHeader
                    leftComponent={<AchievementActionLeft
                         viewType={viewType}
                         setAchievementViewType={setAchievementViewType}
                    />}
                    rightComponent={<AchievementActionRight
                    />}
                />
            </div>
        )
    }
}

export default AchievementHeader;