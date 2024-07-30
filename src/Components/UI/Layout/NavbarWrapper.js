import styled from "styled-components";
import { Layout } from "antd";
const { Header } = Layout;
const NavbarWrapper = styled(Header)`
  background: white !important;
  box-shadow: 0 0.0625em 4px 0.0625em grey;
  padding: 0px !important;
  position:sticky;
  top:0;
  height: 60%;
  z-index:1;
  width: 100%;
    display: flex;
    flex-flow: row nowrap;
    -webkit-box-pack: justify;
    place-content: center space-between;
    -webkit-box-align: center;
    align-items: center;
    margin: 0em;
    box-shadow: rgb(170 170 170) 0px 0.0625em 0.25em 0.0625em;
    color: rgb(68, 68, 68);
    background-color: rgb(255, 255, 255);
    height: 4rem;
    padding: 0em;
    line-height: 4em
  .ant-layout-header {
    background: white !important;

    
  }
`;
export default NavbarWrapper;
