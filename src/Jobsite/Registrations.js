import React, { useEffect,Suspense} from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BundleLoader } from '../Components/Placeholder';
import RegistrationStepper from "./RegistrationStepper";
import MainHeader from "../Container/Customer/Header/MainHeader";
import JobHeader from "./JobHeader";


function Registrations(props) {
  useEffect(() => {
    
  }, [])
  const {
    setJobViewType,
    viewType,
  } = props;

  return (
    <React.Fragment>
      <JobHeader/>
<div class="flex justify-center mt-2">
<div class="bg-[#DFDFDF] rounded-[1rem] shadow-2xl m-2 p-1 w-[50rem] mt-2 ">
<RegistrationStepper/> 
</div>
</div>
<hr class="  w-auto ml-0 h-1 mx-auto  bg-black border-0 rounded " />
      <div class="text-sm flex justify-center  text-gray-700 bottom-0 absolute w-wk items-center" >
         © {new Date().getFullYear()} {` `}, 1Di inc.
        
      </div>
    </React.Fragment>
  )
}
const mapStateToProps = ({job }) => ({
  
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
      {
       
      },
      dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Registrations);