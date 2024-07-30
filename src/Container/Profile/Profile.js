import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BundleLoader } from "../../Components/Placeholder";
import { MainWrapper, FlexContainer } from "../../Components/UI/Layout";
import styled from "styled-components";
const ProfileDetailLeft = lazy(() => import("./Child/ProfileDetailLeft"));
// const ProfileDetailRight = lazy(() => import("./Child/ProfileDetailRight"));

class Profile extends Component {
//   componentDidMount() {
//     const {
//       user: { userId },
//     } = this.props;
//   }
  render() {
    console.log(this.props.user)
    return (
      <>
        {/* {false ? ( */}
          {/* <MainWrapper>
            <BundleLoader />
          </MainWrapper> */}
        {/* ) : ( */}
            <div>
              <Suspense fallback={"Loading..."}>
                <div class="max-sm: flex-nowrap w-full">
                  <div>
                  <div  class="max-sm:h-full m-auto md:w-1/2">
                    <ProfileDetailLeft />
                  </div>
                  </div>
                </div>
              </Suspense>
            </div>
          {/* )} */}
      </>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth.userDetails,
});
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);