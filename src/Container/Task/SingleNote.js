import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
// import { SubTitle } from "../UI/Elements";

import moment from "moment";
import { Spacer,SubTitle } from "../../Components/UI/Elements";
const NotesWrapper = styled.div``;
export default function SingleNote(props) {
  console.log(props);
  const {
    comment,
    creationDate,
    userId,
    creatorId,
    // metaData: {
    //   creatorDetails: { firstName, lastName }
    // }
  } = props;
  return (
    <NotesWrapper>
      {/* <SubTitle fontSize='1.125em' whiteSpace='normal' fontFamily='Abel' style={{ color: '#393a3a' }}>
                {description}
            </SubTitle> */}
      <div dangerouslySetInnerHTML={{ __html: comment }} />
      <SubTitle
        fontSize="0.875em"
        fontFamily="Karla"
        style={{ color: "#a7b2bc", marginTop: "-0.75em" }}
      >
        <Spacer />
        {new Date().toLocaleString() + ""}
        {/* <b>
          {userId !== creatorId
            ? ` by ${firstName || ""} ${lastName || ""}`
            : ""}
        </b> */}
        <div>
        {props.providerName}
        </div>
      </SubTitle>
    </NotesWrapper>
  );
}
