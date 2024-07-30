import React, { useEffect,Suspense} from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BundleLoader } from '../Components/Placeholder';
import RegistrationStepper from "./RegistrationStepper";


function Registrations(props) {
  useEffect(() => {
    
  }, [])
  const {
    setJobViewType,
    viewType,
  } = props;

  return (
    <React.Fragment>
<div class="flex justify-center mt-16">
<div class="bg-[#DFDFDF] rounded-[2rem] shadow-2xl m-2 p-2 w-[50rem] mt-4 ">
<RegistrationStepper/> 
</div>
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