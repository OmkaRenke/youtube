import React from 'react'
import "./videodetails.scss"
import { abbreviateNumber } from 'js-abbreviation-number'
const VideoDetails = ({img,title,channelName,views,publishedTime}) => {
  return (
    <div className='videoDetails'>
      <div className="content">
        <div className="profileImg">
            <img src={img} alt="" />
        </div>
        <div className="textInfo">
          <div className="title">{title}</div>
          <div className="name">{channelName}</div>
          <div className="viewsandYear">
            <div>{abbreviateNumber(views,2)} views </div>
            <div className='dot'> . </div>
            <div>{publishedTime}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoDetails