import React, { useEffect, useState,useRef } from "react";
import { Button, Tooltip, Badge,Icon,Input } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import FWLogo from "../../../Assests/Images/Logo_new.png";
import {ClearReducerDataOfInvestor,searchInvestorName} from "../CustomerAction";
import { AudioOutlined } from "@ant-design/icons";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
const { Search } = Input;

function CustomerContentHeaderActionCenter (props) {

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
      // if (props.teamsAccessInd) {
      //   props.searchInvestorName(currentData, 'team');
      // } else {
      //   if (props.viewType === "list") {
      //     props.searchInvestorName(currentData, 'user');
      //   } else if (props.viewType === "teams") {
      //     props.searchInvestorName(currentData, 'team');
      //   } else if (props.viewType === "all") {
      //     props.searchInvestorName(currentData, 'All');
      //   } else {
      //     console.error("Invalid viewType. Please provide a valid value.");
      //   }
      // }
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
      // if (props.teamsAccessInd) {
      //   props.searchInvestorName(transcript, 'team');
      // } else {
      //   if (props.viewType === "list") {
      //     props.searchInvestorName(transcript, 'user');
      //   } else if (props.viewType === "teams") {
      //     props.searchInvestorName(transcript, 'team');
      //   } else if (props.viewType === "all") {
      //     props.searchInvestorName(transcript, 'All');
      //   } else {
      //     console.error("Invalid viewType. Please provide a valid value.");
      //   }
      // }
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
        <>
        <div class="flex">
          {/* <div>
      <img src={FWLogo} style={{ width: "10em" }} alt="img" />
      </div> */}
        <div>
        <div class = "flex">
        <div class=" w-72 md:ml-4 max-sm:w-16 ml-0">
          <Input
            placeholder="Search by Name,Tag, UPC"
            class="w-96"
            suffix={suffix}
            onPressEnter={handleSearch}
            onChange={handleChange}
            value={currentData}
          />
        </div>
      {/* <Button
      // className="adhBtN"
        type="primary"
        // onClick={() => {
        //   props.searchCustomerName(props.currentData,props.serviceId);
        // }}
      >
         <label class="text-white">
         Submit
        </label>
      </Button> */}
      </div>
      </div>
      </div>
        </>
    );

}
const mapStateToProps = ({ customer, auth }) => ({
    // viewType:customer.viewType,  
    // serviceUser:auth.serviceDetails,
    // serviceId:auth.serviceDetails.serviceId,
    // serviceDetails:auth.serviceDetails,
    // recordData:customer.recordData
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
    connect(mapStateToProps, mapDispatchToProps)(CustomerContentHeaderActionCenter));


