// import React, { Component, lazy, Suspense } from "react";
// import { connect } from "react-redux";
// import {Route,Routes} from "react-router-dom"

// import './App.css';
//  import Login from "./Container/Auth/Login";
//  import PrivateRoute from "./Helpers/Auth/PrivateRoute"
//  import { BundleLoader } from "./Components/Placeholder";
// import Job from './Jobsite/Job';
// import JobCard from "./Jobsite/JobCard";
// import JobTalent from "./Jobsite/JobTalent";
// import JobVendor from "./Jobsite/JobVendor";
// import MainApp from "./Main/MainApp";


// function App(props) {
//   return (
//     <React.Fragment>
//       {/* <Suspense fallback={<></>}> */}
//       <Routes>
//       <Route exact path="/login" element={<Login />}/>
//         <Route exact path="/" element={<Job />}/>
//         <Route exact path="/jobCard" element={<JobCard />}/>
//         <Route exact path="/jobVendor" element={<JobVendor />}/>
//         <Route exact path="/jobTalent" element={<JobTalent/>}/>




// {props.fetchingUserDetails ? (
//   <BundleLoader />
// ) : (

//   <Route exact path="/" element={MainApp} />
// )}
// </Routes>

//       {/* </Suspense> */}
//     </React.Fragment>
//   );
// }

// const mapStateToProps = ({ auth }) => ({
//   fetchingUserDetails: auth.fetchingUserDetails,
// });
// export default connect(mapStateToProps)(App);



import React, { Component, lazy, Suspense } from "react";
import 'antd/dist/reset.css';
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import Job from './Jobsite/Job';
import JobCard from "./Jobsite/JobCard";
import JobTalent from "./Jobsite/JobTalent";
import JobVendor from "./Jobsite/JobVendor";
import MainApp from "./Main/MainApp";
import Login from "./Container/Auth/Login";
import axios from "axios";
import "./App.css";
import OrderSuccessFullTemplate from "./Container/Order/OrderSuccessFullTemplate";
import CancellationMainContentForm from "./Container/Customer/Cart/Child/Cancellation/CancellationMainContentForm";
import OrderCancelTemplate from "./Container/Order/OrderCancelTemplate";
import OrderMainContentDetails from "./Container/Customer/Cart/Child/Order/OrderMainContentDetails";
import Cart from "./Container/Customer/Cart/Cart";
import CustomerCart from "./Container/Customer/CustomerCart";
import Payment from "./Container/Customer/Cart/Child/Payment/Payment";
import Track from "./Container/Customer/Cart/Child/Order/Track"; 
import { BundleLoader } from "./Components/Placeholder";
import PrivateRoute from "./Helpers/Auth/PrivateRoute";
import SuccessTemplate from "./Container/Successfull/SuccessTemplate";
import PartnerSuccessTemplate from "./Container/Successfull/PartnerSuccessTemplate";
import BeforeLogin from "./Jobsite/BeforeLogin";
import Stepper from "./Jobsite/Stepper";
// import AppErrorBoundary from "./Helpers/ErrorBoundary/AppErrorBoundary"; 
import Contact from "./Container/Contact/Contact";
import Registration from "./Jobsite/Registrations";

// const ProductDetails=lazy(()=>import("./Main/ProductDetails"));
const CustomerMainApp = lazy(() => import("./Main/CustomerMainApp"));


/**
 * lazy loaded compenents
 */


class App extends Component {
  render() {
    const { fetchingUserDetails } = this.props;
    return (
      <div>

        {/* <AppErrorBoundary> */}
        <Suspense fallback={<BundleLoader />}>
          <Switch>
            {/* https://wallpaperaccess.com/full/2757704.jpg */}
            {/* <Route exact path="/login" component={Login} /> */}
            {/* <Route exact path="/" component={BeforeLogin} /> */}
            <Route exact path="/stepper" component={Stepper} />
            <Route exact path="/login" component={Job} />
            <Route exact path="/jobCard" component={JobCard} />
            <Route exact path="/partnerSuccess" component={PartnerSuccessTemplate} />
            <Route exact path="/success" component={SuccessTemplate} />
            <Route exact path="/jobVendor" component={JobVendor} />
            <Route exact path="/jobTalent" component={JobTalent} />
            <Route exact path="/contactus" component={Contact} />

            <Route exact path="/:shopName/cart" component={Cart} />
              <Route exact path="/:shopName/payment" component={Payment} />
              <Route exact path="/:shopName/ordersucess" component={OrderSuccessFullTemplate} />
              {/* <Route exact path="/homeproductsDetails/:id" component={ProductDetails} /> */}
              <Route exact path="/:shopName/ordermaincontent" component={OrderMainContentDetails} />
              <Route exact path="/:shopName/ordercancellationmaincontent/:orderId" component={CancellationMainContentForm} />
              <Route exact path="/:shopName/ordercancelltemplate" component={OrderCancelTemplate} />
              <Route exact path="/:shopName/customercart" component={CustomerCart} />
              <Route exact path="/:shopName/track" component={Track} />
              {/* <Route exact path="/contactus" component={ContactUs} /> */}
            <Route exact path="/" component={CustomerMainApp}/>
            <Route exact path="/registration" component={Registration}/>
            
            {fetchingUserDetails ? (
                <BundleLoader />
              ) : (
            <PrivateRoute path="/" component={MainApp} />
             )} 
          </Switch>
        </Suspense>
        {/* </AppErrorBoundary> */}
        {/* </Online> */}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  fetchingUserDetails: auth.fetchingUserDetails,
});
export default connect(mapStateToProps)(App);

