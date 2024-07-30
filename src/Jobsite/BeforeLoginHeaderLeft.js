import { Tooltip } from 'antd'
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { Button } from 'antd';
import { FormattedMessage } from "react-intl";
import LogoNew from "../Assests/Images/nuboxnew.jpg"
import { MenuUnfoldOutlined } from "@ant-design/icons";
const BeforeLoginHeaderLeft = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div class=" flex flex-row items-center w-[75rem]  max-sm:leading-3 justify-between " >
      <div class="w-[11rem]">
        <img
          className="big-logo"
          src={LogoNew}
          style={{ width: 100 }}
          alt="Tekorero logo"
        />
      </div>

      <MenuUnfoldOutlined className="block md:hidden  " onClick={() => setOpen(!open)} />
      <div>
      <Link to="afterLogin"><label class="text-black cursor-pointer">Login</label></Link>
          <Link to="stepper">
      <Button><label class="text-black cursor-pointer mr-3">Create Order</label></Button>
      </Link>
      </div>
    </div>
  );
}
const mapStateToProps = ({ }) => ({

});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {


    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeforeLoginHeaderLeft);