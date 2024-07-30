import React from "react";
import Avatar from "antd/lib/avatar";
import { ProgressiveImage } from "../../Utils";
import { base_url,base_url2 } from "../../../Config/Auth";
import ProfilePreview from "../../../Assests/Images/ProfilePreview.png";
const Image = ({
  imageId,
  imageURL,
  primaryTitle,
  imgWidth,
  imgHeight,
  smallAvatar,
  imgRadius,
  // bgcolor,
  minAvatarWidth,
}) => {
  const size = smallAvatar && !imageId && !imageURL ? "small" : "large";
  // const fontSize = size === "large" ? 18 : 12;
  const color = size === "large" ? "#fff" : "#fff";
  // const backgroundColor = size === "large" ? "#337df4" : "#337df4";
  const backgroundColor = size === "large" ? "#337df4" : "#337df4";
  const borderWidth = size === "large" ? "0.0625em" : "0.0625em";
  const borderColor = size === "large" ? "#337df4" : "#337df4";
  const borderStyle = size === "large" ? "solid" : "solid";
  return (
    <>
      {imageId || imageURL ? (
        imageId ? (
          <div style={{  }}>
            <ProgressiveImage
            class="w-36 h-28"
             // preview={ProfilePreview}
              image={`${base_url2}/image/${imageId}`}
              //width={imgWidth || "9rem"}
              //height={imgHeight || "7rem"}
              // borderRadius={imgRadius}
              borderRadius={'0.1rem'}
            />
          </div>
        ) : (
            <ProgressiveImage
            class="w-36 h-28"
           //   preview={ProfilePreview}
              image={imageURL}
              //width={imgWidth || "9rem"}
              //height={imgHeight || "7rem"}
              // borderRadius={imgRadius}
             borderRadius={'0.1rem'}
            />
          )
      ) : (
          <Avatar
            size={size || "large"}
            style={{
              color,
              // backgroundColor: bgcolor ? "red" : backgroundColor,
              backgroundColor,
              // fontSize,
              borderWidth,
              borderColor,
              borderStyle,
              minWidth: minAvatarWidth,
            }}
          >
            {primaryTitle && primaryTitle.split("")[0].toUpperCase()}
          </Avatar>
        )}
    </>
  );
};

export default Image;
