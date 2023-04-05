import React, { useContext, useEffect, useState } from "react";
import "./SingleVideoDetails.scss";
import fetchDataFromApi from "../utils/api";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Context } from "../context/contextApi";
import ReactPlayer from "react-player/youtube";
import ContentWrapper from "../components/contentWrapper/Contentwrapper";
import VideoDetails from "../components/feed/Video/VideoDetails";
import Video from "../components/feed/Video/Video";
import { AiFillLike } from "react-icons/ai";
import {BiLike} from "react-icons/bi"
import {BiDislike} from "react-icons/bi"
import { AiFillDislike } from "react-icons/ai";
import { TbShare3 } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";
import VideoLength from "../components/shared/VideoLength";
import { abbreviateNumber } from "js-abbreviation-number";
const SingleVideoDetails = () => {
  const [relatedVideos, setRelatedVideos] = useState();
  const [selectedVideo, setSelectedVideo] = useState();
  const [show,setShow]=useState(false);
  const [subscribe,setSubscribe]=useState(false)
  const { setLoding } = useContext(Context);
  const navigate = useNavigate();
  const { id } = useParams();
  const location=useLocation()

  useEffect(() => {
    getvideodetails();
	getSingleVideoDetails();
  }, [id]);
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])
  const getSingleVideoDetails=()=>{
	fetchDataFromApi(`video/details/?id=${id}`).then((res)=>{
		setLoding(true);
        console.log(res);
        setSelectedVideo(res);
        setLoding(false);
	})
  }
  const getvideodetails = () => {
    fetchDataFromApi(`video/related-contents/?id=${id}`).then(
      ({ contents }) => {
        setLoding(true);
        console.log(contents);
        setRelatedVideos(contents);
        setLoding(false);
      }
    );
  };
  const handleSubscribe=()=>{
	setSubscribe(!subscribe)
  }

  return (
    <div className="maindiv">
      <ContentWrapper>
        <div className="content">
          <div className="video">
            <div className="singleVideoPlay">
              <ReactPlayer 
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
                width={"100%"}
                style={{ backgroundColor: "#000000" }}
              />
              <div className="videoDetails">
                <div className="details">
                  <div className="videoTitle">
                    {selectedVideo?.title}
                  </div>
                  <div className="channelDetails">
                    {selectedVideo && (
                      <div className="left">
                      <div className="profile">
                        <img
                          src={selectedVideo?.author?.avatar[0].url}
                          alt=""
                        />
                      </div>
                      <div className="nameSubcriberNum">
                        <div className="title">{selectedVideo?.author?.title}</div>
					              <div className="number">{selectedVideo?.author?.stats?.subscribersText}</div>
                      </div>
                      <button className={`subscribebtn ${subscribe ?"sub":""} `} onClick={handleSubscribe}>{!subscribe? "Subscribe" :"Subscribed"}</button>
                    </div>
                    )}
                    <div className="right">
                      <div className="likesection">
                        <div className="likeNum">
							            {selectedVideo && (<>
                            <span className="likeCount">{abbreviateNumber(selectedVideo?.stats?.likes,2)}</span>
                            <span className="likebtn"><BiLike size={"22px"} /></span>
                          </>)}
                        </div>
                        <hr />
                        <div className="dislike">
                          <BiDislike size={"22px"} />
                        </div>
                      </div>
                      <div className="share">
                        <button className="sharebtn">
                          <TbShare3 size={"22px"} />
                          share
                        </button>
                      </div>
                      <div className="threedots">
                        <BsThreeDots size={"22px"} />
                      </div>
                    </div>
                  </div>
                  <div className="textContent">
                    <div className="numberdayviews">
					  	          {selectedVideo && (
                          <>
                            <span className="views">{abbreviateNumber(selectedVideo?.stats?.views,2)} views</span>
                            <span>{selectedVideo?.publishedDate}</span>
                          </>
                        )}
                    </div>
                    <div className={`${show ? "more" :"description"}`}>
                      {selectedVideo?.description}
                    </div>
                    <button className="showBtn" onClick={()=>setShow(!show)}>{`show ${!show ? "more" :"less"}`}</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relatedVideos">
              {relatedVideos &&
                relatedVideos?.map((item) => {
                  if (item?.type !== "video") return false;
                  return (
                    <div className="allcontent" onClick={() => navigate(`/video/${item?.video?.videoId}`)}>
                      	<div className="content">
                        	<div className="thumbnail">
                          		<img
								src={item?.video?.thumbnails[1]?.url}
								alt=""
								className="img"
                          		/>
                        	</div>
                        	<div className="time">
								                {/* <VideoLength time={item?.video?.lengthSeconds}/> */}
                          			{/* {video?.lengthSeconds} */}
                          			{/* {`${h > 0 ? h : ""}${h > 0 ? ":" : ""}${m}:${s}`} */}
                        	</div>
                      	</div>
                      	<div className="details">
                        	<div className="textContent">
                          		<div className="videoDetails">
                            		<div className="content">
                             			<div className="profileImg">
                                			<img
												src={item?.video?.author?.avatar[0]?.url}
												alt=""
											/>
                              			</div>
                              			<div className="textInfo">
											<div className="title">
											{item?.video?.title}
											</div>
											<div className="name">
											{item?.video?.author?.title}
											</div>
                                			<div className="viewsandYear">
                                  				<div>{abbreviateNumber(item?.video?.stats?.views,2)} views </div>
                                  				<div className="dot"> . </div>
                                  				<div>{item?.video?.publishedTimeText}</div>
                                			</div>
                             			 </div>
                            		</div>
                          		</div>
                        	</div>
                      	</div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default SingleVideoDetails;
