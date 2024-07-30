// import { Button, Tooltip } from 'antd';
// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import styled from 'styled-components';
// import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
// import { bindActionCreators } from "redux";
// import RotateRightIcon from '@mui/icons-material/RotateRight';
// import StopCircleIcon from '@mui/icons-material/StopCircle';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// import { addNote,getNotesListByOpportunityId } from "../Task/TaskAction";
// import { FlexContainer, MainWrapper } from '../../Components/UI/Layout';

// const options = {
//   autoStart: false,
//   continous: false
// };

// const NoteForm = (props) => {
  
//     useEffect(()=> {
//         props.getNotesListByOpportunityId(props.rowDataPass.taskId);
//       },[])  
//   const {
//     transcript,
//     listening,
//     resetTranscript,
//     browserSupportsSpeechRecognition
//   } = useSpeechRecognition();

//   if (!browserSupportsSpeechRecognition) {
//     return <span>Browser doesn't support speech recognition.</span>;
//   }

//   function callback(){
//     props.getNotesListByOpportunityId(props.rowDataPass.taskId)
//   }

//   function handleReactSpeech(){
//     let data={
//         comment:transcript,
//       taskId:props.rowDataPass.taskId,
//       providerId:props.candidateId,
//       orgId:props.organizationId,
//     }
//     props.addNote(data,callback)
//   }
// console.log(props.notesListByOpportunityId.comment)
//   return (
//     <div>
//       <p>Microphone: {listening ? 'on' : 'off'}</p>
//       <div>
//       <span
//       onClick={SpeechRecognition.startListening}
//       > 
//       <Tooltip title="Start">
//          <span style={{ fontSize: "1.5em",
//     color: "red" }}>
//         {/* <FontAwesomeIcon icon={solid("record-vinyl")} /> */}
//          <PlayCircleFilledIcon/>
//         </span>
//         </Tooltip>
//       </span>
     
//       <span
//     //   onClick={()=>{
//     //   SpeechRecognition.stopListening
//     //   }}
//       onClick={SpeechRecognition.stopListening}
//       >
//          <Tooltip title="Stop">
//          <span style={{ fontSize: "1.5em",color:"green",marginLeft:"3px" }}>
         
//         {/* <FontAwesomeIcon icon={solid("stop")} /> */}
//         <StopCircleIcon/>
       
//         </span>
//         </Tooltip>
//       </span>
    
//       <button onClick={SpeechRecognition.stopListening}>Stop</button>
//       <span
//       onClick={resetTranscript}
//       >
//           <Tooltip title="Clear">
//              <span style={{ fontSize: "1.5em",marginLeft:"3px" }}>
//         {/* <FontAwesomeIcon icon={solid("rotate-right")} /> */}
//         <RotateRightIcon/>
//         </span>
//         </Tooltip>
//         </span>
//         </div>
//         <div>
//         <textarea
//         className="textarea"
//         type="text"
//         value={transcript}
//         >
        
//         </textarea>
//       {/* <p>{transcript}</p> */}
//       </div>
//       <FlexContainer justifyContent="flex-end">
//       <Button 
//       type='primary'
//       htmlType='submit'
//       onClick={handleReactSpeech}
//       >
//         Submit
//       </Button>
//       </FlexContainer>
//       <MainWrapper>
//         <div>
//         {props.notesListByOpportunityId.comment}
//         {props.notesListByOpportunityId.creationDate}
//         {props.notesListByOpportunityId.providerName}
//         </div>
//       </MainWrapper>
//     </div>
   
//   );
// };

// const mapStateToProps = ({ auth, team, task }) => ({
//   user: auth.userDetails,
//   notesListByOpportunityId:task.notesListByOpportunityId,
//   organizationId: auth.userDetails.organizationId,
//   candidateId:auth.userDetails.candidateId,
//   fetchingNotesListByOpportunityId: task.fetchingNotesListByOpportunityId,

//   //   team: team.user,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       addNote,
//       getNotesListByOpportunityId
//     },
//     dispatch
//   );

// export default  connect(mapStateToProps, mapDispatchToProps)(NoteForm);



// const textarea = styled.div`
// width: 100%;
// min-height: 11.5em;
// // border-radius: 0.1875em;
// border: 0.0625em solid gainsboro;
// background-color: #fff;
// color: #444;
// display: block;
// margin: 0.3rem 0;
// // border-radius: 0.3rem;
// outline: none;
// box-shadow: 0em 0.25em 0.625em -0.25em #aaa;
// padding: 0.3rem 1rem;
// `

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Timeline } from "antd";
//import { BorderBox } from "../../../../Components/UI/Layout";
import {getNotesListByOpportunityId } from "../Task/TaskAction";

import NoteFile from "./NoteFile";
import { BundleLoader } from "../../Components/Placeholder";
import SingleNote from "./SingleNote";

class NoteForm extends Component {
  componentDidMount() {
   this.props.getNotesListByOpportunityId(this.props.rowDataPass.taskId);
  }

  render() {
    const { fetchingNotesListByOpportunityId, notesListByOpportunityId } = this.props;

    return (
      <>
        <div style={{ backgroundColor: "#dcdcdc", height: "14.375em" }}>
          <NoteFile
            type={"opportunity"}
            taskId={this.props.rowDataPass.taskId}
            callback={() =>
              this.props.getNotesListByOpportunityId(this.props.rowDataPass.taskId)
            }
          />
        </div>
        <br />

        <div class="border-spacing-2 rounded-md shadow-2xl mb-1 mt-9">
          <div style={{ height: 200, overflow: "auto", padding: "1rem" }}>
            {fetchingNotesListByOpportunityId ? (
              <BundleLoader />
            ) : (
                <Timeline>
                  {notesListByOpportunityId &&
                    notesListByOpportunityId.map((item, index) => (
                      <Timeline.Item
                        key={index}
                        style={{ paddingBottom: "0.625em" }}
                      >
                        <SingleNote {...item} userId={this.props.userId} />
                      </Timeline.Item>
                    ))}
                </Timeline>
              )}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ auth, task }) => ({
  userId: auth.userDetails.userId,
  notesListByOpportunityId: task.notesListByOpportunityId,
  fetchingNotesListByOpportunityId: task.fetchingNotesListByOpportunityId,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getNotesListByOpportunityId,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);