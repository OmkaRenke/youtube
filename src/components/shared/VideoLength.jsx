import React from "react";
import moment from "moment/moment";
const VideoLength = ({ time }) => {
  let videoLengthInseconds;
  if (time) {
    videoLengthInseconds = moment()
      .startOf("day")
      .seconds(time)
      .format("H:mm:ss");
  }
  return <div>{videoLengthInseconds}</div>;
};

export default VideoLength;
