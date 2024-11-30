import React, { useEffect ,useState} from "react";
import { FlexContainer } from '../Components/UI/Layout'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { IntlProvider } from "react-intl";
import English from "../Language/en.json";
import Dutch from "../Language/dutch.json";
import { Select,message,Button } from "antd";
import { Link } from "react-router-dom";
import { setLanguage } from "../../src/Language/LanguageAction";
import Wrapper from "../Wrapper";

const { Option } = Select;

const JobHeaderRight = (props) => {



    

  function handleLanguageSelect(selectType) {
    
    props.setLanguage(selectType)
    
  
    //message.success(`Language sucessfully changed to ${selectType} `);
  }
  // console.log(selectType)
    return (
      <>

 <div className="flex">
            <div className="mr-2">           
            <Link to="/faq">
           FAQ
           </Link>        
            </div> 
            <div className="mr-2">
              
                <Link to="/refund">
            Refund policy
            </Link>
            </div>
            <div className="mr-2">
                <a href="/contactus" target="blank">
                Contact us
                </a>
                </div>
                </div>   
      
</>

    );
    
 
}
const mapStateToProps = ({ language}) => ({
  language:language.language
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      
      setLanguage
    },
    dispatch
  );
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(JobHeaderRight);