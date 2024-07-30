import React, { useEffect, Suspense } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import JobTab from "./JobTab";
import JobHeader from "./JobHeader";
import JobUploadForm from "./JobUploadForm";
import JobCard from "./JobCard";
import { setJobViewType } from "./JobAction";
import { BundleLoader } from '../Components/Placeholder';
import { handleCandidateApplyModal, handleEmailFormModal } from "./JobAction";
import CandidateJobApplyModal from "./CandidateJobApplyModal";
import AddEmailFormModal from "./AddEmailFormModal";
import JobVendorForm from "./JobVendorForm";
import JobHire from "./JobHire";
import JobVendor from "./JobVendor";
import JobTalent from "./JobTalent";
function Job(props) {
  useEffect(() => {

  }, [])
  const {
    setJobViewType,
    viewType,
  } = props;

  return (
    <div class="bg-gray-200">
      <React.Fragment>
        <div class="max-sm:m-0 md:w-w7 m-auto bg-white">
          <JobHeader setJobViewType={setJobViewType}
            viewType={viewType} />
          <div class="max-sm:flex flex-col" style={{height:"89vh"}}>
            <Suspense fallback={<BundleLoader />}>
              <JobTalent />
              {/* {viewType === "jobvendor" ? 
            // <JobCard 
            // addEmailformModal={props.addEmailformModal}
            // handleEmailFormModal={props.handleEmailFormModal}
            // />
          //  : viewType === "jobtalent" ? 
          <JobVendor/>
         
          :  viewType === "jobtalent" ? 
            <JobTalent/>
          :  viewType === "jobhire" ? 
            <JobHire/>
                    : null} */}
            </Suspense>
          </div>
          <AddEmailFormModal
            addEmailformModal={props.addEmailformModal}
            handleEmailFormModal={props.handleEmailFormModal}
          />
        </div>
      </React.Fragment>
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
      handleCandidateApplyModal,
      handleEmailFormModal
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Job);