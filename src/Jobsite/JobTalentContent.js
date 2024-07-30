import React, { useEffect, Suspense } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage } from "react-intl";
import { BundleLoader } from '../Components/Placeholder';
import { Button } from "antd";
import { MainWrapper } from "../Components/UI/Elements";
import { FlexContainer } from "../Components/UI/Layout";


function JobTalentContent(props) {
  useEffect(() => {

  }, [])
  const {
    setJobViewType,
    viewType,
  } = props;

  return (
    <React.Fragment>

      <div class=" flex flex-col mt-margin60 justify-end flex-wrap items-center max-sm:mt-0">
        <div class=" flex flex-col w-8/12 justify-center mt-28 ">
          <h2 class=" max-sm: text-3xl md:text-5xl  ">
            What does our platform offer?
            {/* <FormattedMessage
                  id="app.whyjoinus"
                  defaultMessage="whyjoinus"
                /> */}
          </h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock,
            a Latin professor at Hampden-Sydney College in Virginia,
            looked up one of the more obscure Latin words, consectetur,
            from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
            {/* <FormattedMessage
                  id="app.networkingisthemostimportantlinktogettingopportunitiesnowandinthefuturewithselectiontoworkweoffercompaniesandprofessionalstheopportunitytocometogetherinoneplacewematchthesuitablevacancyforyouandallyouhavetodoisfillinourformandwaituntilasuitableemployeecomesalongregisteringwithselectiontoworkiscompletelyfreeandefficientwekeepyouuptodatewiththelatestworkplacessoyoucandecideifsomethingsuitsyoutryitforfreeandseethebenefits"
                  defaultMessage="networkingisthemostimportantlinktogettingopportunitiesnowandinthefuturewithselectiontoworkweoffercompaniesandprofessionalstheopportunitytocometogetherinoneplacewematchthesuitablevacancyforyouandallyouhavetodoisfillinourformandwaituntilasuitableemployeecomesalongregisteringwithselectiontoworkiscompletelyfreeandefficientwekeepyouuptodatewiththelatestworkplacessoyoucandecideifsomethingsuitsyoutryitforfreeandseethebenefits"
                /> */}
          </p>
        </div>
        <div class="w-8/12 mt-12">
          <h2 class=" max-sm: text-3xl md:text-5xl ">
            What is our differentiator!
            {/* <FormattedMessage
                  id="app.whatweoffer"
                  defaultMessage="whatweoffer"
                /> */}
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            {/* <FormattedMessage
                  id="app.areyoucurrentlywithoutajobhavesparetimeandwanttoputittogooduseorareyoulookingforanadditionalincomestreamthroughselectiontoworkweoffertheseopportunitiessoyoucaneasilyfindnewjobsextraworkorinternshipswithusinrecentyearswehavebuiltupalargenetworkofpartnersandclientswhooftenfindthemselveswithtoomuchworkandtoofewstaffhereourtalentsgetthechancetoputtheirexpertisetogooduse"
                  defaultMessage="areyoucurrentlywithoutajobhavesparetimeandwanttoputittogooduseorareyoulookingforanadditionalincomestreamthroughselectiontoworkweoffertheseopportunitiessoyoucaneasilyfindnewjobsextraworkorinternshipswithusinrecentyearswehavebuiltupalargenetworkofpartnersandclientswhooftenfindthemselveswithtoomuchworkandtoofewstaffhereourtalentsgetthechancetoputtheirexpertisetogooduse"
                /> */}
          </p>
        </div>
        <div class="mt-12 max-sm:w-8/12 md:flex flex-col items-center ">
          <h2 class=" max-sm: text-3xl md:text-5xl ">
            Reach out to us
            {/* <FormattedMessage
                  id="app.haveanyquestions"
                  defaultMessage="haveanyquestions"
                /> */}
          </h2>
          <p class="md:w-9/12">
            {/* <FormattedMessage
                  id="app.wewillhelpyouwithallyourquestionstoclearupanyconfusionorambiguity"
                  defaultMessage="wewillhelpyouwithallyourquestionstoclearupanyconfusionorambiguity"
                /> */}
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in their infancy
          </p>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(JobTalentContent);