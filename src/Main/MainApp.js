import React, { lazy, Suspense, useEffect, useState, useContext } from "react";
import { Route, Routes, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Profile from "../Container/Profile/Profile"
import {
  Layout,
  Menu,
  Icon,
  Badge,
  Tag,
  Tooltip,
  message,
  Popconfirm,
} from "antd";
import { ThemeProvider } from "styled-components";
import {
  ApplicationWrapper,
  LayoutWrapper,
  MainWrapper,
  NavbarWrapper,
  FlexContainer,
} from "../Components/UI/Layout";
import { BundleLoader } from "../Components/Placeholder";
import moment from "moment";
import AppErrorBoundary from "../Helpers/ErrorBoundary/AppErrorBoundary";
import NavMenu from "./NavMenu";
import './YourStyles.css';
import OFFRLogo from "../Assests/Images/Logo_new.png";
import { MultiAvatar } from "../Components/UI/Elements";
import Test from "../Container/Test/Test"
import { Select } from "antd";
import { getachivement, handlAchievementDrawerModal } from "../Container/Auth/AuthAction";
// import { setLanguage } from "../../Language/LanguageAction";
import { Button } from "reactstrap";
import dayjs from "dayjs";
import JobReport from "../Container/JobReport/JobReport"
import Dashboard from "../Container/Dashboard/Dashboard";
import PurchaseOrder from "../Container/PO/PurchaseOrder"
import CourseDetails from "../Container/Courses/Child/CourseDetail/CourseDetails";
import AchievementDrawerModal from "./Achievement/AchievementDrawerModal";
import Achievement from "./Achievement/Achievement";
import PoDetails from "../Container/PO/PoDetails/PoDetails";
import Dashboard2 from "../Container/Dashboard2/Dashboard2";
import Project from "../Container/ProjectManagement/Project";
import MyOrder from "../Container/MyOrder/MyOrder";
import KoreroLogo from "../Assests/Images/Logo_new.png"; // korero logo
import NuboxLogo from "../Assests/Images/nuboxnew.jpg";// Nubox logo
import OrderInProgress from "../Container/OrderProgress/OrderInProgress";
import CompletedOrder from "../Container/CompletedOrder/CompletedOrder";
import ProfileDropdown from "./ProfileDropdown";
import CustomerChangePassword from "./CustomerChangePassword";
import { FormattedMessage } from "react-intl";
import Invoice from "../Container/Invoice/Invoice";
import InventoryCart from "../Container/Inventory/InventoryCart";
import InventoryDeliveryInfo from "../Container/Inventory/InventoryDeliveryInfo";
import InvoPayment from "../Container/Inventory/InvoPayment";
import InventoryPaymentLoading from "../Container/Inventory/InventoryPaymentLoading";
import InventoryOrdersuccess from "../Container/Inventory/InventoryOrdersuccess";
import { MenuFoldOutlined, MenuUnfoldOutlined, CloseOutlined } from '@ant-design/icons';
const OrderSupplier =lazy(()=>import("../Container/OrderSupplier/OrderSupplier"));

const NotificationPopover = lazy(() =>
  import("../Container/Notification/NotificationPopover"));
const Inventory = lazy(() => import('../Container/Inventory/Inventory'));

const { Option } = Select;

const { Header, Sider, Content } = Layout;
const Courses = lazy(() => import('../Container/Courses/Courses'))

const Planner = lazy(() => import("../Container/Auth/Planner/Planner"));
const Quotation = lazy(()=>import("../Container/Quotation/Quotation"));
const SupplierInventory =lazy(()=>import("../Container/Inventory/SupplierInventory"))



function MainApp(props) {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [placement, setPlacement] = useState("left");



  function showDrawer() {
    setVisible(true)
  };

  function onClose() {
    setVisible(false)
  };

  function onChange(e) {
    setPlacement(e.target.value)
  };

  useEffect(() => {
    // props.getachivement(props.candidateId, endDate, startDate);
    //props.getOpportunityRecord();
    // props.getRequirementRecord();
    //props.getServiceDetails(props.serviceId)
  }, [])
  const [clickData, setclickData] = useState({});
  const { serviceUser, customerUser } = props;
  const showPopconfirm = () => {
    setVisible(true);
  };
  const firstdate = moment().startOf('month').format('DD-MM-YYYY');
  console.log(firstdate);
  const data = moment.utc()
    .startOf("month").toISOString()
  const startDate = moment(data).toISOString()
  const endDate = dayjs().toISOString()
  console.log(data)
  console.log(startDate)
  console.log(endDate)
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };


  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };


  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState("light");
  const [click, setClick] = useState("dashboard");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const myDate = date => `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getYear()}`;
  function toggle() {
    setCollapsed(!collapsed);
  }

  function handleClick(data) {
    setClick(data)
    setIsMenuOpen(false);
  }
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  function handleClickData(data) {
    setclickData(data)
    setVisible(!visible)
  }
  function toggleTheme(value) {
    setTheme(value ? "light" : "light");
  }
  function handleLanguageSelect(data) {
    props.updateCustomerLanguage(props.customerId, {
      language: data,
    });
    message.success(`Language sucessfully changed to ${data} `);
  }
  function handleLanguageSelectService(data) {
    props.updateServiceLanguage(props.serviceId, {
      language: data,
    });
    message.success(`Language sucessfully changed to ${data} `);
  }
  // render() {
  const background = theme === "light" ? "#fff" : null;
  const { organization, user, imageId, orgImageId, organizationName } = props;
  console.log("Done", props.imageId);
  console.log(user);
  console.log(props.userDetails)
  let path = window.location.href.split("/")[3];
  console.log("paaaaaaaath", path);

  const organizationLogo = (
    <MultiAvatar
      imageId={imageId}
    //marginLeft="30px"
    // primaryTitle={organizationName}
    />
  );
  return (

    <LayoutWrapper
      className="max-sm:w-wk flex  items-center ">
      {/* <Sider className="sider"
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={{ minHeight: "100vh", background }}
          > */}


      {/* <NavMenu
            collapsed={collapsed}
            toggleCollapsed={toggle}
            toggleTheme={toggleTheme}
            theme={theme}
          /> */}

      {/* </Sider> */}
      {/* <LayoutWrapper style={{ backgroundColor: "white", width: "75rem" }}> */}
       <div className="p-0 min-h-screen bg-white fixed w-[75rem] max-sm:w-wk"
       >
        <NavbarWrapper style={{ padding: 0, height: 50,}}>
          {/* <Header> */}
          <div className="flex items-center max-sm:flex-row-reverse p-1">
          <Link to="/dashboard">
          <div class="ml-2" >
            {/* <MultiAvatar
             
              src={props.user.imageId}
              imageId={props.orgImgId}
            
            /> */}
            
            <img
              className="big-logo"
               src={KoreroLogo}
              // src={NuboxLogo}
              style={{width: "8vw",height:"8vh"  }}
              alt="Tekorero logo"
            />
          </div>
          </Link>
          
          <div>
          <button onClick={handleMenuToggle} className="menu-toggle-button">
        {isMenuOpen ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />} 
      </button>

      <nav className={`menu-container ${isMenuOpen ? 'open' : ''}`}>
      <button className="close-button md:hidden" onClick={handleMenuToggle}><CloseOutlined /></button>
          {props.employee_type==="Customer" || props.employee_type==="external" || props.employee_type==="Distributor" ? 
          <>
          {props.user.moduleMapper.repairInd === true &&
          <Link to="/dashboard" className="dheight">
              <span
                style={{
                  paddingLeft: "1em",
                  color: click == "dashboard" ? "#8dc1f1" : "black"
                }}
                onClick={() => { handleClick("dashboard"); }}
              >
                {/* <label class=" font-bold font-poppins text-base cursor-pointer"> Refurbish</label> */}
              </span>
            </Link> }
            </>
            : null}
           {/* <div class="border border-black"></div> */}
            {props.employee_type==="Customer" || props.employee_type==="external" || props.employee_type==="Distributor" ? 
             <>
          {props.user.moduleMapper.ecomModInd === true &&
            <Link to="/inventory" className="dheight">
              <span
                style={{
                  paddingLeft: "1em",
                  color: click == "inventory" ? "#8dc1f1" : "black"
                }}
                onClick={() => { handleClick("inventory") }}
              >
                <label class="font-poppins font-bold text-base cursor-pointer">  <FormattedMessage
                                   id="app.inventory"
                                  defaultMessage="Inventory"
                                 /></label>
              </span>
            </Link>}
            </>
            :null}
            {props.employee_type==="Customer" || props.employee_type==="external" || props.employee_type==="Distributor" ? 
            <Link to="/orderinprogree" className="dheight">
              <span
                style={{
                  paddingLeft: "1em",
                  color: click == "orderinprogree" ? "#8dc1f1" : "black"
                }}
                onClick={() => { handleClick("orderinprogree") }}
              >
                <label class="font-poppins font-bold text-base cursor-pointer"><FormattedMessage
                                   id="app.procure"
                                  defaultMessage="Procure"
                                 /></label>
              </span>
            </Link>:null}
            {props.employee_type==="Customer" || props.employee_type==="external" || props.employee_type==="Distributor" ? 
            <Link to="/quotation" className="dheight">
              <span
                style={{
                  paddingLeft: "1em",
                  color: click == "quotation" ? "#8dc1f1" : "black"
                }}
                onClick={() => { handleClick("quotation") }}
              >
                <label class="font-poppins font-bold text-base cursor-pointer"><FormattedMessage
                                   id="app."
                                  defaultMessage="Quotation"
                                 /></label>
              </span>
            </Link>:null}
            {/* <Link to="/completedorder">
              <span
                style={{
                  paddingLeft: "1em",
                  color: click == "completedorder" ? "#8dc1f1" : "black"
                }}
                onClick={() => { handleClick("completedorder") }}
              >
                <label class="font-poppins text-base cursor-pointer"> <FormattedMessage
                                   id="app.completeorders"
                                  defaultMessage="completeorders"
                                 /></label>
              </span>
            </Link> */}
 {props.employee_type==="Supplier" ?  
            <Link to="/orderSupplier" className="dheight">
              <span
                style={{
                  paddingLeft: "1em",
                  color: click == "ordersupplier" ? "#8dc1f1" : "black"
                }}
                onClick={() => { handleClick("ordersupplier") }}
              >
                <label class="font-poppins text-base cursor-pointer"> <FormattedMessage
                                   id="app.order"
                                  defaultMessage="Order"
                                 /></label>
              </span>
            </Link>
            :null} 
            {props.employee_type==="Supplier" ?  
            <Link to="/supplierInventory" className="dheight">
              <span
                style={{
                  paddingLeft: "1em",
                  color: click == "supplierInventory" ? "#8dc1f1" : "black"
                }}
                onClick={() => { handleClick("supplierInventory") }}
              >
                <label class=" font-bold font-poppins text-base cursor-pointer"> <FormattedMessage
                                   id="app.inventory"
                                  defaultMessage="Inventory"
                                 /></label>
              </span>
            </Link>
            :null} 
            <Link to="/invoice" className="dheight">
              <span
                style={{
                  paddingLeft: "1em",
                  color: click == "invoice" ? "#8dc1f1" : "black"
                }}
                onClick={() => { handleClick("invoice") }}
              >
                <label class="font-poppins font-bold text-base cursor-pointer"> <FormattedMessage
                                   id="app.invoice"
                                  defaultMessage="Invoice"
                                 /></label>
              </span>
            </Link>
            
            {props.employee_type==="Customer" || props.employee_type==="external" || props.employee_type==="Distributor" ? 
            <Link to="/planner" className="dheight">
              <span
                style={{
                  paddingLeft: "1em",
                  color: click == "planner" ? "#8dc1f1" : "black"
                }}
                onClick={() => { handleClick("planner") }}
              >
                {/* <label class="font-poppins font-bold text-base cursor-pointer"> <FormattedMessage
                                   id="app.appointments"
                                  defaultMessage="Appointments"
                                 /></label> */}
              </span>
            </Link>:null}

            {/* <Link to="/report">
              <span
                style={{
                  paddingLeft: "1em",
                  color: click == "report" ? "#8dc1f1" : "black"
                }}
                onClick={() => { handleClick("report") }}
              >
                <label class="font-poppins text-base">Reports</label>
              </span>
            </Link> */}


</nav>
          </div>
          </div>

          {/* date code */}
          {/* {new Date().toLocaleString("en-US", { day : '2-digit'})} */}
          {/* {serviceUser.userType === "Service Provider" ? ( */}
          {/* <div class="ml-margin28">
            <Select
              value={props.languageService}
              defaultValue={"English"}
            onChange={(value) => handleLanguageSelectService(value)}
            >
              <Option value="English">English</Option>
              <Option value="Dutch">Dutch</Option>
            </Select>
          </div> */}



     

          <div class="flex items-center"  >
          <a href="#" style={{ height: 45 }}>
            <FlexContainer
              alignItems="center"
              style={{ height: "100%" }}
            >
              <NotificationPopover />
            </FlexContainer>
          </a>
            {/* <MultiAvatar
              primaryTitle={`${props.user.firstName} ${props.user.lastName}`}

            /> */}
            <ProfileDropdown/>
            &nbsp;
            {/* <Link to="/">
              <Button
                className="abtnn text-white "
                style={{
                  backgroundColor: "tomato",
                  color: "white",
                  // borderColor: "rgb(251, 133, 0)",
                  border: "1px solid tomato",
                  borderRadius: "5px",
                  position: "relative",
                  height: "27px",
                  textAlign: "center",
                  lineHeight: "24px",
                  padding: "0px 10px",
                  marginLeft: "auto",
                  marginRight: "20px",
                }}
              >Logout</Button>
            </Link> */}

          </div>
        </NavbarWrapper>
        <ApplicationWrapper>
          <AppErrorBoundary>
            <Content>
              <Suspense maxDuration={6000} fallback={<BundleLoader />}>
                <Switch>

                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/myorder" component={MyOrder} />
                  <Route exact path="/inventory" component={Inventory} />
                  <Route exact path="/orderinprogree" component={OrderInProgress} />
                  <Route exact path="/quotation" component={Quotation} />
                  <Route exact path="/orderSupplier" component={OrderSupplier} />
                  <Route exact path="/completedorder" component={CompletedOrder} />
                  <Route exact path="/invoice" component={Invoice} />
                  <Route exact path="/changepassword" component={CustomerChangePassword} />
                  {/* <Route exact path="/report" component={} /> */}
                  <Route exact path="/:shopName/invcartInfo" component={InventoryDeliveryInfo} />
                  <Route exact path="/:shopName/inventorycart" component={InventoryCart} />
                  <Route exact path="/:shopName/invopayment" component={InvoPayment} />
                  <Route exact path="/profile"  component={Profile} />
                  <Route exact path="/:shopName/invOrdersuccess" component={InventoryOrdersuccess}/>
                  <Route exact path="/:shopName/invenloading/:stripePaymentId/:paymentId" component={InventoryPaymentLoading}/>
                  <Route exact path="/planner"  component={Planner} />
                  <Route exact pat="/supplierInventory" component={SupplierInventory}/>
                </Switch>
                <AchievementDrawerModal
                  clickData={props.clickData}
                  AchievementModal={props.AchievementModal}
                  handlAchievementDrawerModal={props.handlAchievementDrawerModal}
                />
              </Suspense>
            </Content>
          </AppErrorBoundary>
        </ApplicationWrapper>
      </div>
    </LayoutWrapper>
  );
}
// }

const mapStateToProps = ({ auth, planner, language }) => ({
  fullName: auth.userDetails.fullName,
  user: auth.userDetails,
  orgImgId: auth.userDetails.orgImgId,
  Achievements: auth.Achievements,
  AchievementModal: auth.AchievementModal,
  candidateId: auth.userDetails.candidateId,
  employee_type:auth.userDetails.employee_type
  //endDate: planner.endDate,
  //startDate: planner.startDate,
  // serviceDetails: auth.serviceDetails,
  // customerUser: auth.userDetails,
  // serviceUser: auth.serviceDetails,
  // serviceId:auth.serviceDetails.serviceId,
  // customerId:auth.userDetails.customerId,
  // language: language.language,
  // user: auth.userDetails,
  // userDetails: auth.userDetails,
  // name: auth.userDetails.name,
  // status:auth.serviceDetails.status,
  // // employeeId: auth.userDetails.employeeId,
  // userId: auth.userDetails.employeeId,
  // theme: theme.theme,
  // organization:
  //   auth.userDetails &&
  //   auth.userDetails.metaData &&
  //   auth.userDetails.metaData.organization,
  // department: auth.userDetails && auth.userDetails.department,
  // role: auth.userDetails && auth.userDetails.role,
  // // orgImageId:auth.userDetails.orgImageId,

  // imageId:
  //   (auth.userDetails &&
  //     auth.userDetails.metaData && 
  //     auth.userDetails.metaData.orgImageId) ||
  //   "",
  // organizationName:
  //   (auth.userDetails &&
  //     auth.userDetails.metaData &&
  //     auth.userDetails.metaData.organization &&
  //     auth.userDetails.metaData.organization.organizationName) ||
  //   "",

  // language: auth.userDetails.language,
  // languageService: auth.serviceDetails.language,
  // organizationDetails: auth.organizationDetails,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getachivement,
      handlAchievementDrawerModal
      // getPresentNotifications,
      // updateCustomerById,
      // setLanguage,
      // getServiceDetails,
      // updateServiceLanguage,
      // updateCustomerLanguage
      // getOpportunityRecord,
      // getRequirementRecord,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(MainApp);







