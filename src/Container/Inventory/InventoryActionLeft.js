import React, { useEffect, useState,useRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { Button, Tooltip, Badge,Icon,Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import {ClearReducerDataOfInvestor,searchInvestorName} from "../Customer/CustomerAction";

const InventoryActionLeft = (props) => {
    const [currentData, setCurrentData] = useState("");
    const [searchOnEnter, setSearchOnEnter] = useState(false);  //Code for Search
    const [pageNo, setPage] = useState(0);
    const [startTime, setStartTime] = useState(null);
      const [isRecording, setIsRecording] = useState(false); 
      const minRecordingTime = 3000; // 3 seconds
      const timerRef = useRef(null);   

      const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition,
      } = useSpeechRecognition();
      console.log(transcript);
      useEffect(() => {
        // props.getCustomerRecords();
        if (transcript) {
          console.log(">>>>>>>", transcript);
          setCurrentData(transcript);
        }
        }, [ transcript]);
      const handleChange = (e) => {
        setCurrentData(e.target.value);
    
        if (searchOnEnter && e.target.value.trim() === "") {
          //setPage(pageNo + 1);
         // props.getInvestorsbyId(props.userId, pageNo, "creationdate");
          props.ClearReducerDataOfInvestor()
          setSearchOnEnter(false);
        }
      };
    
      const handleSearch = () => {
        if (currentData.trim() !== "") {
          props.searchInvestorName(currentData);
          setSearchOnEnter(true);  // Code for Search
        } else {
          console.error("Input is empty. Please provide a value.");
        }
      };
      const handleStartListening = () => {
        setStartTime(Date.now());
        setIsRecording(true);
        SpeechRecognition.startListening();
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
          SpeechRecognition.stopListening();
          setIsRecording(false);
        }, minRecordingTime);
      };
      const dummy = ["cloud", "azure", "fgfdg"];
      const suffix = (
        <AudioOutlined
          onClick={handleStartListening}
          style={{
            fontSize: 16,
            color: '#1890ff',
          }}
    
        />
      );
      const handleStopListening = () => {
        SpeechRecognition.stopListening();
        setIsRecording(false);
        if (transcript.trim() !== "") {
          setCurrentData(transcript);    
          props.searchInvestorName(currentData);
          setSearchOnEnter(true);
        }
      };
      useEffect(() => {
        if (!listening && isRecording) {
          handleStopListening();
        }
      }, [listening]);
      useEffect(() => {
        if (isRecording && !listening) {
          // If recording was stopped but less than 5 seconds have passed, restart listening
          const elapsedTime = Date.now() - startTime;
          if (elapsedTime < minRecordingTime) {
            SpeechRecognition.startListening();
          } else {
            setIsRecording(false);
          }
        }
      }, [listening, isRecording, startTime]);
    
  return (
    <div class=" w-72 md:ml-4 max-sm:w-16 ml-0 ">
    <Input
      placeholder="Search by Name,Tag, UPC"
      className="w-48 text-xs h-6"
      suffix={suffix}
      onPressEnter={handleSearch}
      onChange={handleChange}
      value={currentData}
    />
  </div>
  )
}
const mapStateToProps = ({ customer, auth }) => ({
    
  });
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
      {
        ClearReducerDataOfInvestor,
        searchInvestorName
      },
      dispatch
    );
  
  export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(InventoryActionLeft));
