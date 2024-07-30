import React, { Component } from "react";
import { FlexContainer, MainWrapper } from "../../../Components/UI/Layout";
import {
  MultiAvatar,
  Title,
  SubTitle,
} from "../../../Components/UI/Elements";
import moment from "moment";
import { handleItemTrackModal } from "../PoAction"
import PoTrackingModal from "./PoItemTrack/PoItemTrackModal";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// const menu = (
//   <Menu>
//     <Menu.Item>
//       <a target="_blank" rel="noopener noreferrer" href="#">
//         {/* Call */}
//         <FormattedMessage
//           id="app.calls"
//           defaultMessage="Call"
//         />,
//       </a>
//     </Menu.Item>
//     <Menu.Item>
//       <a target="_blank" rel="noopener noreferrer" href="#">
//         {/* Email */}
//         <FormattedMessage
//           id="app.email"
//           defaultMessage="Email"
//         />,
//       </a>
//     </Menu.Item>
//   </Menu>
// );

const PoStagesCard = (props) => {
  const {
    handleClick,
    handlePreview,
    imageId,
    imageURL,
    primaryTitle,
    secondaryTitle,
    date,
    weight,
    subtitle1,
    subtitle2,
    currencyType,
    currency,
  } = props;
  //   console.log("...>>>>>>>>>>>.......<<<<<<<<<<<<<<", imageURL);
  const PlannedDate = `${moment(date).format("DD-MM-YYYY")}`
  console.log(PlannedDate)
  return (
    <>
      <FlexContainer flexDirection="column" style={{ borderRadius: 3 }}>
        <MainWrapper>
          <FlexContainer
            alignItems="center"
            flexWrap="no-wrap"
            style={{ height: "4.5em", width: "170px" }}
          >
            <FlexContainer style={{ flexBasis: "20%" }}>
              <MultiAvatar
                primaryTitle={`${weight}%`}
                //   imageId={imageId}
                //   imageURL={imageURL}
                imgHeight={"1.56em"}
                imgWidth={"1.56em"}
              />
            </FlexContainer>
            <FlexContainer
              flexDirection="column"
              style={{ flexBasis: "70%", overflow: "hidden" }}
            >
              <Title
                fontSize="0.875em"
                overflow="hidden"
                textOverflow="ellipsis"
                style={{ color: "#337df4", cursor: "pointer" }}
              //onClick={handleClick}
              >
                <span onClick={() => props.handleItemTrackModal(true)}>
                  {primaryTitle || ""}
                </span>
              </Title>
              <SubTitle>
                {/* <UserOutlined theme="filled" /> */}
                {/* <i class="far fa-address-book"></i> */}
                &nbsp;&nbsp;
                {/* {currencyType && <CurrencySymbol currencyType={currencyType} />}
              &nbsp;
              {secondaryTitle || ""} */}
                <b>Planned-{PlannedDate}</b>
                <br />
                <b>ForeCast-{PlannedDate}</b>
                <br />
                <b>Actual Date-{PlannedDate}</b>
              </SubTitle>
            </FlexContainer>
            <FlexContainer
              style={{ flexBasis: "10%", alignSelf: "flex-start" }}
            >



            </FlexContainer>
          </FlexContainer>
        </MainWrapper>
      </FlexContainer>
      <PoTrackingModal
        primaryTitle={primaryTitle}
        handleItemTrackModal={props.handleItemTrackModal}
        addItemLocation={props.addItemLocation}
        quotationSupplierSuppliesId={props.quotationSupplierSuppliesId}
      />
    </>
  );
};
const mapStateToProps = ({ po }) => ({
  addItemLocation: po.addItemLocation
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      handleItemTrackModal
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PoStagesCard);

