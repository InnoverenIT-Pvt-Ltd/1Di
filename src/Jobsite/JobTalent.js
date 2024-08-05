import React, { useEffect, Suspense } from "react";
import { bindActionCreators } from 'redux';
import { FormattedMessage } from "react-intl";
import { connect } from 'react-redux';
import KoreroLogo from "../Assests/Images/Logo_new.png"; // korero logo
import NuboxLogo from "../Assests/Images/nuboxnew.jpg";// Nubox logo
import JobUploadForm from "./JobUploadForm";
import JobTalentContent from "./JobTalentContent";
import FWLogo from "../images/Picture.jpg";
import Login from "../Container/Auth/Login";

function JobTalent(props) {
  useEffect(() => {

  }, [])
  const {
    setJobViewType,
    viewType,
  } = props;

  return (

    <React.Fragment>
      {/* <FlexContainer  style={{justifyContent:"space-evenly"}} >
        
        <JobTalentContent/>
        <JobUploadForm/>
 
        </FlexContainer> */}

      <div class="w-wk h-[31rem] flex justify-around mt-4 max-sm:h-96">
       {/* <div class=" mt-[13rem]">
        <img
          className="big-logo"
          src={NuboxLogo}
          // src={KoreroLogo}
          style={{ width: 300 }}
          alt="Tekorero logo"
        />
      </div> */}
      
<div class="w-2/4 flex flex-col justify-center max-sm:w-wk max-sm:m-4">
  <Login/>
</div>
</div>

      {/* <div class=" max-sm:flex flex-wrap flex-col xl:flex-row flex justify-between  mt-6  h-auto">
        <div class="flex-col max-sm:w-wk  -mt-80 md:-mt-margin25 ml-20 flex w-w51  ">
          <h2 class="text-white max-sm: text-sm md:text-5xl">
            VISIBILITY REDEFINED
          </h2>
          <hr class=" max-sm:h-0 mt-0 md:mt-4 w-w47 ml-0 h-1 mx-auto  bg-gray-100 border-0 rounded " />


        </div>
      </div> */}
      {/* <div class=" grid grid-cols-2 gap-4 max-sm:flex flex-col-reverse mt-0 md:-mt-96">
        <div class="flex-col justify-center">
          <JobTalentContent />
        </div>
        <div class="flex flex-col justify-center max-sm:mt-0 md:mt-36">
          <div class=" max-sm:  md:border-l-border-l-5 h-h8 ml-margin18 -mt-margin5.6 md:w-2/3"></div>
          <JobUploadForm />
        </div>
      </div> */}
      <hr class=" mt-24 w-auto ml-0 h-1 mx-auto  bg-black border-0 rounded " />
      <div class="text-sm flex justify-center  text-gray-700 bottom-0 absolute w-wk items-center" >
         © {new Date().getFullYear()} {` `}, 1Di inc.
        
      </div>
    </React.Fragment>
  )
}
const mapStateToProps = ({ job }) => ({

});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {

    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(JobTalent);