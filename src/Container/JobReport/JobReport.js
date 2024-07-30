import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//import { handleCandidateApplyModal,handleEmailFormModal } from "./JobAction";
import moment from "moment";
import {getJobCardDetails,addApply} from "../../Jobsite/JobAction";

function JobReport(props) {
  const [jobData, setJobData] = useState([]);
  // window.location.hostname
  // useEffect(() => {
  //   fetch(
  //     `https://develop.tekorero.com/employeePortal/api/v1/recruitment/publish/website?url=talent.tekorero.com`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setJobData(data));
  // }, []);

useEffect(()=>{props.getJobCardDetails(props.candidateId)},[])

function handledata(item){
  setJobData(item)
  let data={
    emailId:props.emailId,
    opportunityId:jobData.opportunityId,
    recruitmentId:jobData.recruitmentId,
    recruitmentprocessId:jobData.recruitmentProcessId
    // opportunityId:"",
    // recruitmentId:"",
    // recruitmentprocessId:jobData.recruitmentProcessId

  }
  props.addApply(data)
  console.log(jobData.recruitmentProcessId)
}
console.log(jobData)

console.log(props.candidateId)

  const data = props.jobData.sort((a, b) => {
    const indA = a.pingInd;
    const indB = b.pingInd;
    if (indA < indB) {
      return 1;
    }
    if (indA > indB) {
      return -1;
    }

    // ind must be equal
    return 0;
  });

  
  return (
    <React.Fragment>
      <div className="wrapper">

      
      {data.map((item) => {
        return ( 
          <div className="main-card">
            <div className="card-part1">
              <h3 className="job" ><b>Job Id</b>
              {item.jobOrder}
              </h3>
            <h3 className="req"><b>Recruitment</b>
            {item.requirementName}
            </h3>
            <h3 className="req"><b>Skills</b>
            {item.skillName}
            </h3>
            </div>
            <div className="card-part2">
              <h3 className="crd"><b>Preference</b>
              {item.workPreference}
              </h3>
          
            <h3 className="loc"><b>Location</b>
            {item.location}
            </h3>
                
              <h3 className="avl"><b>Start Date</b>
              {` ${moment(item.avilableDate).format("ll")}`}
              </h3>
              
            </div>
            <div className="card-part3">
            <h3><b>Description:</b></h3>
              <h3 className="description">{item.description}</h3>
            </div>
            <Button
              type="primary"
              htmlType="submit"
              className="aply"
              onClick={() => {
                handledata(item)
              // props.setCardData(item)
              }}
              style={{position: "static"}}
              
             
            >
              Easy Apply
            </Button>
          </div>
      );
       })}
      </div>
    </React.Fragment>
  );
}
const mapStateToProps = ({ job ,auth}) => ({
//   addCandidateApply: job.addCandidateApply,
candidateId:auth.userDetails.candidateId,
emailId:auth.userDetails.emailId,
//   addEmailformModal:job.addEmailformModal,
  jobData:job.jobData,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
    //   handleCandidateApplyModal,
    //   handleEmailFormModal,
      getJobCardDetails,
      addApply
    //   setCardData
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(JobReport);
