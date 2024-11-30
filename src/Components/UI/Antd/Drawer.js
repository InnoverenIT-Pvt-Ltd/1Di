import Drawer from "antd/lib/drawer";
import styled from "styled-components";

const StyledDrawer = styled(Drawer)`
    .ant-drawer-content-wrapper {
        background-color: ${props =>
        props.theme.applicationBackground} !important;
        color: ${props => props.theme.color};
        border: none !important;
        
    }
    .ant-drawer-content {
        background-color: ${props =>
        props.theme.applicationBackground} !important;
        color: ${props => props.theme.color};
    }
    .ant-drawer-wrapper-body{
      // overflow:hidden !important;
      min-height: 60vh;
    }
    .ant-drawer-body {
        background-color: ${props =>
        props.theme.applicationBackground} !important;
        color: ${props => props.theme.color};
        padding: 0.5rem;
        border: none !important;
    }
    .ant-drawer-header {
       // background-image: linear-gradient(-90deg,#001529,#1890ff);
        background-image: linear-gradient(-90deg, rgb(17 36 170), rgb(17 36 170));
        /* color: ${props => props.theme.color}; */
         color: #fff; 
        
        /* padding: 20px 20px 0px 20px; */
        box-shadow: 0 12px 6px -6px rgb(46,44,44);
        border-bottom:1px solid  #aaa;
      
        
    }
    .ant-drawer-title {
      color: #fff; 
       
    }
    .anticon {
   
    color: white;
    }
    .ant-drawer-header-title {
      display: flex;
      flex: 1 1;
      min-width: 0;
      min-height: 0;
      flex-direction: row-reverse;
      
  }
 

`;
export default StyledDrawer;
