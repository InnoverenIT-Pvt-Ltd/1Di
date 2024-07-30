import React from "react";
import styled from "styled-components";
import moment from "moment";

const Thumbnail = styled.div`
  margin: 0.2rem auto;
  padding: 0.3rem;
  border-radius: 8px;
  width: 250px;
  height: 150px;
  // margin-left: 30px;
  // border: 0.0625em solid yellow;
  display: flex;
  align-items: space-between;
  flex-wrap: wrap;
  position: relative;
  .fab {
    position: absolute;
    font-size: 50px;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    color: red;
    &:hover {
      color: #870b02;
    }
  }
  .behind-play {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
  }
`;
const VideoWrapper = styled.div`
  // position: relative;
  height: 260px;

  display: block;
  // border: 0.0625em solid red;
  border: 0.0625em solid #dfe1e5;
  border-radius: 8px;
  cursor: pointer;
  margin: 1.2rem;
  padding: 0.3rem;
  background: #fff;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  font-size: 0.9rem;
  color: #444;
  p {
    font-size: 0.7rem;
    margin: 0.8rem;
  }
`;
const CreatedAt = styled.p`
  // position: absolute;
  bottom: 0px;
  margin: 0.2rem;
  padding: 0.3rem;
  color: #999;
  align-self: flex-end;
`;
const YoutubeThumbnail = (props) => {
  const { title, imgUrl, publishedAt } = props;
  const isLongTitle = title.length >= 100;
  return (
    <VideoWrapper>
      <Thumbnail>
        <img
          src={imgUrl}
          style={{ width: "100%", height: "100%" }}
          alt="youtube"
        />
        <span className="behind-play"></span>
        <i className="fab fa-youtube"></i>
      </Thumbnail>
      <p>{isLongTitle ? `${title.slice(0, 100)}...` : `${title}`}</p>
      <CreatedAt>{moment(publishedAt).fromNow()}</CreatedAt>
    </VideoWrapper>
  );
};

export default YoutubeThumbnail;
