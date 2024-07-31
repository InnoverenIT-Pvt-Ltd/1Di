import { Tooltip } from 'antd'
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import KoreroLogo from "../Assests/Images/Logo_new.png"; // korero logo
import NuboxLogo from "../Assests/Images/nuboxnew.jpg";// Nubox logo
import { setLanguage } from "../../src/Language/LanguageAction";
import { Select,Button } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
const { Option } = Select;
const JobHeaderLeft = (props) => {
  const [open, setOpen] = useState(false);
  function handleLanguageSelect(selectType) {
    
    props.setLanguage(selectType)
    
  
    //message.success(`Language sucessfully changed to ${selectType} `);
  }
  return (
    <div class=" flex flex-row items-center md:w-[75rem] max-sm:w-wk  max-sm:leading-3 justify-between " >
      <Link to="/">
      <div>
        <img
          className="big-logo"
           src={KoreroLogo}
          // src={NuboxLogo}
          style={{ width: "8vw",height:"8vh"  }}
          alt="Tekorero logo"
        />
      </div>
      </Link>
      {/* <MenuUnfoldOutlined className="block md:hidden  " onClick={() => setOpen(!open)} /> */}
      {/* <div class="flex items-baseline md:mr-4 ">
        <Select 
        className="max-sm:hidden "
                    value={props.language}
                     style={{fontFamily:"sans-serif",height:"2.1rem"}}
                    //  onChange={(value) => handleLanguageSelect(value)}
                    onChange={(e) => handleLanguageSelect(e)}
                  >
                    <Option value="English" style={{fontFamily:"sans-serif"}}>English</Option>
                    <Option value="Dutch" style={{fontFamily:"sans-serif"}}>Dutch</Option>
                  </Select>
                  
      <Link to="stepper">
      <Button><label class="text-black cursor-pointer mr-4">Create Order</label></Button>
      </Link>

      <Link to="contactus">
      <label class="text-black cursor-pointer mr-4 flex w-20">Contact Us</label>
      </Link>
      </div> */}

    </div>
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
)(JobHeaderLeft);