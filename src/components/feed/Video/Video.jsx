import "./video.scss";
import React from "react";
import VideoDetails from "./VideoDetails";
import { useNavigate } from "react-router-dom";
import VideoLength from "../../shared/VideoLength";
const Video = ({ video }) => {
  // console.log(video);
  const navigate = useNavigate();

  return (
    <div
      className="allcontent"
      onClick={() => navigate(`/video/${video?.videoId}`)}
    >
      <div className="content">
        <div className="thumbnail">
          <img src={video?.thumbnails[1]?.url} alt="" className="img" />
        </div>
        <div className="time">
          {!!video && video && <VideoLength time={video?.lengthSeconds} />}
        </div>
      </div>
      <div className="details">
        <div className="textContent">
          <VideoDetails
            img={video?.author?.avatar[0]?.url}
            title={video?.title}
            channelName={video?.author?.title}
            views={video?.stats?.views}
            publishedTime={video?.publishedTimeText}
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
