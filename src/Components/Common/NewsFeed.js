import React, { Component } from "react";
import styled from "styled-components";
import moment from "moment";
import PropTypes from "prop-types";
import { FlexContainer } from "../UI/Layout";

const Thumbnail = styled.div`
    margin: 0.2rem;
    padding: 0.3rem;
    border: 0.0625em solid #dfe1e5;
    border-radius: 8px;
    margin-left: 30px;
    width: 250px;
    /* width: calc(33% - 0.6rem); */
    height: 190px;
    display: flex;
    flex-direction:
    align-items: space-between;
    flex-wrap: wrap;
`;
const NewsBody = styled.div`
  height: 100px;
  display: block;
  cursor: pointer;
  margin: 0.2rem;
  padding: 0.3rem;
  font-size: 0.9rem;
  color: #444;
  &p {
    cursor: pointer;
    color: #444;
  }
  &:hover {
    color: ${(props) => props.theme.primaryColor};
  }
`;
const CreatedAt = styled.p`
  margin: 0.2rem;
  padding: 0.3rem;
  color: #999;
  align-self: flex-end;
`;

class NewsFeed extends Component {
  render() {
    const { title, createdAt } = this.props;
    const isLongNews = title.length >= 130;
    return (
      <>
        <Thumbnail>
          <div>
            <NewsBody>
              <p>{isLongNews ? `${title.slice(0, 130)}...` : `${title}`}</p>
            </NewsBody>
          </div>
          <FlexContainer justifyContent="space-between">
            <CreatedAt>{moment(createdAt).fromNow()}</CreatedAt>
            {/* <CreatedAt>{sourceName}</CreatedAt> */}
          </FlexContainer>
        </Thumbnail>
      </>
    );
  }
}

NewsFeed.propTypes = {
  title: PropTypes.string,
  createdAt: PropTypes.instanceOf(Date),
  imgUrl: PropTypes.string,
};

export default NewsFeed;
