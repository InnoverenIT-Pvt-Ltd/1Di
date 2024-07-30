import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import moment from "moment";
import { Spacer,SubTitle } from "../../../Components/UI/Elements";

const NotesWrapper = styled.div``;

export default function FeebackSingleOrder (props) {

  const {
    feedback,

  } = props;
  return (
    <NotesWrapper>

      <div dangerouslySetInnerHTML={{ __html: feedback }} />
      <SubTitle
        fontSize="0.875em"
        fontFamily="Karla"
        style={{ color: "#a7b2bc", marginTop: "-0.75em" }}
      >
        <Spacer />
        {new Date().toLocaleString() + ""}

        <div>

        </div>
      </SubTitle>
    </NotesWrapper>
  );
}

                   