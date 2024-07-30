import styled from "styled-components";
import { Layout } from "antd";
const LayoutWrapper = styled(Layout)`

  .ant-layout {
    /* background: white !important; */
    padding: 0px !important;
    min-height:100vh;
 
  }
  .ant-layout-sider {
    background: white !important ;
  }
  .ant-layout-sider-children {
position:fixed;
  }
`;
export default LayoutWrapper;
