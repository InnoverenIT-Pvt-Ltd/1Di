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
 <div class="flex"> 
      <div class="md:mr-4">
        <Select 
        className=" max-sm:hidden "
                    value={props.language}
                    // style={{ width: 120 }}
                    //  onChange={(value) => handleLanguageSelect(value)}
                    onChange={(e) => handleLanguageSelect(e)}
                  >
                    <Option value="English">English</Option>
                    <Option value="Dutch">Dutch</Option>
                  </Select>
                  </div>

                  <Link to="/login">
          <Button className='yourshop ' 
          style={{height:"2.3rem"}}
          type="primary">
            <h4 class="text-white">Log in</h4>
          </Button>
        </Link>
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