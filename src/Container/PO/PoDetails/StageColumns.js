import React, { Component } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

import PoStagesCard from "../PoDetails/PoSTagesCard"
import { MainWrapper, FlexContainer } from "../../../Components/UI/Layout";
const StageContainer = styled.div`
  padding: 0.8rem 1.5rem;
  margin: 0.2rem;
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "#1890ff")}
  border: 0.06em solid ${(props) => props.theme.borderColor};
  border-radius: 0.2rem;
`;
const Stage = styled.h3`
  color: #fff;
  font-size: 1.46em;;
`;
class StageColumns extends Component {
  render() {
    const { candidate, index, quotationSupplierSuppliesId } = this.props;
    console.log(candidate);
    // let opportunityValue;
    // if (tradeCurrency) {
    //     if (tradeCurrency === 'USD') {
    //         opportunityValue = USD
    //     }
    //     else if (tradeCurrency === 'INR') {
    //         opportunityValue = INR
    //     }
    //     else if (tradeCurrency === 'GBP') {
    //         opportunityValue = GBP
    //     }
    //     else {
    //         opportunityValue = EUR
    //     }
    // } else {
    //     opportunityValue = EUR
    // }
    return (
      <Draggable
        draggableId={candidate.quotationSuppliesId}
        index={index}
        type="stage"
      >
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >

            <PoStagesCard
              isDragging={snapshot.isDragging}
              date={`${candidate.creationDate}`}
              weight={`${candidate.weightage}`}
              primaryTitle={`${candidate.suppliesFullName || ""}`}
              quotationSupplierSuppliesId={quotationSupplierSuppliesId}
            />
          </div>
        )}
      </Draggable>

    );
  }
}
export default StageColumns;
