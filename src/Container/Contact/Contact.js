import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ContactusForm from './ContactusForm';

import JobHeader from '../../Jobsite/JobHeader';

function Contact(props) {

    return (
        <div class="bg-gray-200">
<>
<div class="max-sm:m-0 md:w-w7 m-auto bg-white">
<JobHeader/>
<ContactusForm/>
</div>
</>
</div>
    );
};

const mapStateToProps = ({  }) => ({
   
});
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Contact);