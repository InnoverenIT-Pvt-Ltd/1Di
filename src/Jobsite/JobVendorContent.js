import React, { useEffect,Suspense} from "react";
import { bindActionCreators } from 'redux';
import { FormattedMessage } from "react-intl";
import { connect } from 'react-redux';
import { BundleLoader } from '../Components/Placeholder';
import { Button } from "antd";
import { MainWrapper } from "../Components/UI/Elements";
import { FlexContainer } from "../Components/UI/Layout";



function JobVendorContent(props) {
  useEffect(() => {
    
  }, [])
  const {
    setJobViewType,
    viewType,
  } = props;

  return (
    <React.Fragment>
{/* <div class="flex-col mt-96" style={{display:"flex",justifyContent:"center",flexDirection:"column",flexWrap:"wrap"}}> */}
<div class=" flex flex-col mt-margin40 justify-end flex-wrap items-center max-sm:mt-0">
  {/* <div class="flex-col w-8/12" style={{display:"flex",justifyContent:"center",flexDirection:"column",alignContent:"stretch",alignItems:"flex-end"}}> */}
    <div class=" flex flex-col w-8/12 justify-center mt-12 ">
     <h2 class=" max-sm: text-3xl md:text-5xl  ">
      {/* Why join us? */}
      <FormattedMessage
                  id="app.whyjoinus"
                  defaultMessage="whyjoinus"
                />
      </h2>
        <p class="mt-5">
          {/* Networking is the most important link to getting opportunities, now and in the future.
           With Selection to Work we offer companies and professionals the opportunity to come together in one place.
            We match the suitable vacancy for you and all you have to do is fill in our form and wait until a suitable employee comes along.
             Registering with Selection To Work is completely free and efficient.
              You will also get acces to our system with all its benefits.
               Try it for free and see what we can do for you! */}
                <FormattedMessage
                  id="app.networkingisthemostimportantlinktogettingopportunitiesnowandinthefuturewithselectiontoworkweoffercompaniesandprofessionalstheopportunitytocometogetherinoneplacewematchthesuitablevacancyforyouandallyouhavetodoisfillinourformandwaituntilasuitableemployeecomesalongregisteringwithselectiontoworkiscompletelyfreeandefficientyouwillgetaccesstooursystemwithallitsbenefitstryitforfreeandseewhatwecandoforyou"
                  defaultMessage="networkingisthemostimportantlinktogettingopportunitiesnowandinthefuturewithselectiontoworkweoffercompaniesandprofessionalstheopportunitytocometogetherinoneplacewematchthesuitablevacancyforyouandallyouhavetodoisfillinourformandwaituntilasuitableemployeecomesalongregisteringwithselectiontoworkiscompletelyfreeandefficientyouwillgetaccesstooursystemwithallitsbenefitstryitforfreeandseewhatwecandoforyou"
                />
               </p>
               </div>
               <div class="w-8/12 mt-12">
                
               <h2 class=" max-sm: text-3xl md:text-5xl ">
               <FormattedMessage
                  id="app.whatweoffer"
                  defaultMessage="whatweoffer"
                />
                {/* What we offer! */}
                </h2>
        <p  class="mt-5">
        <FormattedMessage
                  id="app.isyourcompanyinneedofadditionalprojectsareyoulookingforadditionalrevenuestreamsorsimplywanttobroadenyournetworkorisyourcompanyfacingstaffshortagesdoyouhavealargeprojectwhereyoulackmanpowerorareyoulookingforspecificexpertsatselectiontoworkwesolvetheseproblemsforyouyoucansignupandthentheteamwillgothroughtheonboardingstepswithyou"
                  defaultMessage="isyourcompanyinneedofadditionalprojectsareyoulookingforadditionalrevenuestreamsorsimplywanttobroadenyournetworkorisyourcompanyfacingstaffshortagesdoyouhavealargeprojectwhereyoulackmanpowerorareyoulookingforspecificexpertsatselectiontoworkwesolvetheseproblemsforyouyoucansignupandthentheteamwillgothroughtheonboardingstepswithyou"
                />
          {/* Is your company in need of additional projects, are you looking for additional revenue streams or simply want to broaden your network? Or is your company facing staff shortages, do you have a large project where you lack manpower or are you looking for specific experts? At Selection to Work, we solve these problems for you! You can sign up and then the team will go through the onboarding steps with you. */}
          </p>
        </div>
        <div class="mt-12 max-sm:w-8/12 md:flex flex-col items-center ">
        <h2 class=" max-sm: text-3xl md:text-5xl ">
         <FormattedMessage
                  id="app.haveanyquestions"
                  defaultMessage="haveanyquestions"
                />
          </h2>
        <p  class="mt-5 md:w-9/12">
          {/* We will help you with all your questions to clear up any confusion or ambiguity! */}
        
          
          <FormattedMessage
                  id="app.wewillhelpyouwithallyourquestionstoclearupanyconfusionorambiguity"
                  defaultMessage="wewillhelpyouwithallyourquestionstoclearupanyconfusionorambiguity"
                />
                  </p>
        </div>
        <div class="w-1/6 mt-4 max-sm:mr-margin25 md:mr-margin50">
        <a href="https://selectiontowork.com/contact/"></a>
        <Button 
        className="abtnn text-white "
                >
                  <a href="https://selectiontowork.com/contact/" target="_blank">Contact us</a>
               
                </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(JobVendorContent);