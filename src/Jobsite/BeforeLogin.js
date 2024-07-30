import { Button } from 'antd';
import React from 'react'
import { Link } from "react-router-dom";
import { setJobViewType } from "./JobAction";
import JobHeader from "./JobHeader";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BeforeLoginHeader from './BeforeLoginHeader';
import CoverLogo from "../../src/images/dsdde.jpg";

const BeforeLogin = (props) => {
    const {
        setJobViewType,
        viewType,
      } = props;
  return (
    <div>
     
      <div class="bg-gray-200">
      <React.Fragment>
        <div class="max-sm:m-0 md:w-w7 m-auto bg-white">
          <BeforeLoginHeader setJobViewType={setJobViewType}
            viewType={viewType} />
            <div class="w-wk h-18 flex justify-around mt-4 max-sm:h-96">
        <img
          class=" w-full h-[86vh]"
          src={CoverLogo}
          alt="Tekorero logo"
        />
      

</div>
        </div>
      </React.Fragment>
    </div>
    </div>
  )
}
const mapStateToProps = ({ job }) => ({
    viewType: job.viewType,
    addCandidateApply: job.addCandidateApply,
    addEmailformModal: job.addEmailformModal,
  });
  const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setJobViewType,
      
    },
    dispatch
  );
  export default connect(mapStateToProps, mapDispatchToProps) (BeforeLogin)
