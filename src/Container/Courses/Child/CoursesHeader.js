import React, { Component } from 'react'
import { ActionHeader } from '../../../Components/Utils';
import CoursesActionLeft from "./CoursesActionLeft";
import CoursesActionRight from './CoursesActionRight';
class  CoursesHeader extends Component {
    render() {
        const { viewType, setCoursesViewType } = this.props;
        return (
            <div >
            {/* <div class="w-w77r bg-slate-100"> */}
                <ActionHeader
                    leftComponent={<CoursesActionLeft
                          viewType={viewType}
                          setCoursesViewType={setCoursesViewType}
                    />}
                    rightComponent={<CoursesActionRight
                        viewType={viewType}
                        setCoursesViewType={setCoursesViewType}
                    />}
                />
            {/* </div> */}
            </div>
        )
    }
}

export default CoursesHeader;