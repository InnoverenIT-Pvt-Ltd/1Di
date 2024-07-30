import React, { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import StageColumns from "../PoDetails/StageColumns";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { StyledTabs, StyledModal } from "../../../Components/UI/Antd";

import { MainWrapper, FlexContainer } from "../../../Components/UI/Layout";


import { Spin, message, notification, Button } from "antd";
import { BundleLoader } from "../../../Components/Placeholder";

import { CurrencySymbol } from "../../../Components/Common";
import { wrap } from "lodash";
const TabPane = StyledTabs.TabPane;


const ProductDetails = [

  {
    stageId: "STAGEDB98464308577212023",
    suppliesFullName: "HEPA FILTER WITH BOX",
    quotationSuppliesId: "QSDG560527045562023"
  },
  {
    stageId: "STAGEDB98464308577212023",
    suppliesFullName: "LG",
    quotationSuppliesId: "QSDG560527035562023"
  },
  {
    stageId: "STAGEDB98464308577212023",
    suppliesFullName: "samsung",
    quotationSuppliesId: "QSDG560527095562023"
  }

]

const ParentContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  height: ${({ height }) => height};
  overflow-x: hidden;
  overflow-y: auto;
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  display: flex;
  border-bottom: 0.06em solid lightgrey;
  position: absolute;

  // overflow-x: auto;
`;

const StageColumn = styled.div`
  background-color: whitesmoke;
  color: ${(props) => props.theme.color};
  float: left;
  overflow-x: scroll;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 30em;
  width: 235px;
  margin-top: 3.75em;
  overflow-y: auto;
  border-right: 0.06em solid #d2cfcf;
  /* background-color: ${(props) => props.theme.applicationBackground}; */
  /* color: ${(props) => props.theme.color}; */
  /* min-height: 43.12em; */
`;

const WonColumn = styled.div`
  position: fixed;
  bottom: 0;
  display: ${(props) => (props.isDraggingOver ? "flex" : "flex")};
  /* width: 43.12em; */
  height: 5em;
  /* background-color: lightgreen; */
  color: #fff;
  /* border: 0.06em solid ${(props) => props.theme.backgroundColor}; */
  transition: 0.3s all linear;
  margin-bottom:2.5em;
`;

const LossColumn = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  display: ${(props) => (props.isDraggingOver ? "flex" : "flex")};
  /* width: 43.12em; */
  height: 5em;
  /* background-color: tomato; */
  color: #fff;
  margin-right:0.62em;
  /* border: 0.06em solid ${(props) => props.theme.backgroundColor}; */
  transition: 0.3s all linear;
  margin-bottom:2.5em;
`;

const StageHeader = styled.div`
  background-color: rgb(24, 144, 255);
  color: white;
  font-size: 0.93em;
  width: 235px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 0.06em solid ${(props) => props.theme.backgroundColor};
  padding: 0.5rem;
  border-bottom: 2px solid ${(props) => props.theme.borderColor};
  /* position:fixed; */
`;
const DragDropContextDiv = styled.div`
  background-color: whitesmoke;
  color: ${(props) => props.theme.color};
  font-size: 1.2em;
  height: 600px;
  width: 56.25em;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  border-bottom: 2px solid ${(props) => props.theme.borderColor};
  /* position:fixed; */
`;

function StagesView(props) {
  const [isDragging, setIsDragging] = useState(false);
  const { userId, opportunities, process, ProcessStages, udatingOpp } = props;

  function onDragEnd(result) {
    console.log(result);
    setIsDragging(false);

    if (!navigator.onLine) {
      return;
    }

    if (!result.destination) {
      return;
    }

    const { draggableId, destination, source } = result;
    console.log(destination);
    // did not move anywhere - can bail early
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    console.log("PO", ProductDetails)

    const {
      updateRequirementStage,
      getOpportunityRelatedData,
      userId,
      startDate,
      endDate,
    } = props;
    // updateRequirementStage(
    //   source.droppableId,
    //   destination.droppableId,
    //   draggableId,

    // );
  }

  function dragStart() {
    setIsDragging(true);
  }
  function dragUpdate() {
    setIsDragging(false);
  }

  console.log(props.poDetails)
  console.log(ProductDetails)

  return (
    <FlexContainer flexWrap="nowrap">
      <MainWrapper
        style={{
          width: "100%",
          color: "#FFFAFA",
          height: "100vh",
        }}
      >


        <FlexContainer flexWrap="no-wrap">
          <DragDropContext
            onDragEnd={onDragEnd}
            type="stage"
            onDragStart={dragStart}
          >
            <Container style={{ marginTop: "0.75em" }}>
              <>
                {props.poStageDetails

                  .map((stage, index) => (
                    <Droppable
                      key={index}
                      droppableId={stage.stageId}
                      type="stage"

                    >
                      {(provided, snapshot) => (
                        <>
                          <div
                            style={{
                              display: "flex",
                            }}
                          >

                            <StageHeader
                              style={{ position: "absolute" }}
                            >
                              <div>{stage.stageName} ({stage.probability}%)</div>


                            </StageHeader>

                            <StageColumn
                              ref={provided.innerRef}
                              isDraggingOver={snapshot.isDraggingOver}
                              {...provided.droppableProps}
                              droppableProps={{ hello: "world" }}
                              className="scrollbar"
                              id="style-3"
                            >
                              {props.poDetails.filter(
                                (item, index) =>
                                  item.stageId === stage.stageId
                              )

                                .map((item, index) => {
                                  console.log("item1", item)
                                  return (
                                    <StageColumns
                                      key={index}
                                      candidate={item}
                                      index={index}
                                      quotationSupplierSuppliesId={props.quotationSupplierSuppliesId}
                                    />
                                  );
                                })}
                            </StageColumn>

                          </div>
                        </>
                      )}



                    </Droppable>


                  ))}

              </>
            </Container>
          </DragDropContext>
        </FlexContainer>


      </MainWrapper>
    </FlexContainer>
  );
}

const mapStateToProps = ({
  opportunity,
  account,
  dashboard,
  auth,
  settings,
}) => ({
  organizationId: auth.userDetails.organizationId,
  // recruitProcess: settings.recruitProcess,
  //   fetchingOpportunities: opportunity.fetchingOpportunities,
  //   startDate: dashboard.startDate,
  //   endDate: dashboard.endDate,
  //   userId: auth.userDetails.userId,
  //   process: settings.Process,
  //   tradeCurrency: auth.userDetails.tradeCurrency,
  //   opportunities: opportunitySelector(opportunity, account),
  //   ProcessStages: settings.ProcessStages,
  //   stages: opportunity.stages,
  //   fetchingProcessStages: settings.fetchingProcessStages,
  //   udatingOpp: opportunity.udatingOpp,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      //   updateRequirementStage
      // getProcessForRecruit
      //   updateOpportunityStage,
      //   getOpportunityRelatedData,
      //   getOpportunities,
      //   getAccounts,
      //   getStages,
      //   getProcess,
      //   getProcessStages,
      //   addReson,
    },
    dispatch
  );
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StagesView)
);






