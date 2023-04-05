import React, { useContext, useEffect, useState } from 'react'
import "./SearchResult.scss"
import LeftNav from '../feed/leftnavbar/LeftNav'
import VideoDetails from '../feed/Video/VideoDetails'
import VideoLength from '../shared/VideoLength'
import fetchDataFromApi from '../../utils/api'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Context } from '../../context/contextApi'
import { abbreviateNumber } from 'js-abbreviation-number'

const SearchResult = () => {
	const[searchResultData,setSearchResultData]=useState()
	const{setLoding,loading}=useContext(Context)
	const{query}=useParams()
	const navigate=useNavigate()

	useEffect(()=>{
		fetchSearchResultDataApi()
	},[query])
	
	const fetchSearchResultDataApi=()=>{
		fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
			setLoding(true)
			console.log(contents)
			setSearchResultData(contents)
			setLoding(false)
		})
	}
  return (
    <div className='main-container'>
      	<div className="con-tent">
			<div className="left-navbar-Content">
				<div className="scrolldiv">
					<LeftNav/>
				</div>
			</div>
			<div className="all-videos">	
				<div className='video-Section'>
					{!loading  && searchResultData &&
					searchResultData?.map((item)=>{
						if(item?.type !== "video")return false;
						return(
						//   <Video key={item?.video?.videoId} video={item?.video}/>
								<div className="all-content" key={item?.video?.videoId} onClick={()=>navigate(`/video/${item?.video?.videoId}`)}>
									<div className="cont-ent">
										<div className="thum-bnail">
											<img src={item?.video?.thumbnails[1]?.url} alt="" className="img" />
										</div>
										<div className="time">
											{/* <VideoLength time={item?.video?.lengthSeconds}/> */}
										</div>
									</div>
									<div className="detailss">
										<div className='video-Details'>
												<div className="text-Info">
													<div className="tit-le">{item?.video?.title}</div>
													<div className="views-and-Year">
														<div>{abbreviateNumber(item?.video?.stats?.views,2)} views </div>
														<div className='dot'> . </div>
														<div>{item?.video?.publishedTimeText}</div>
													</div>
												</div>
												<div className="profile-Img">
													<img src={item?.video?.author?.avatar[0]?.url} alt="" />
													<div className="na-me">{item?.video?.author?.title}</div>
												</div>
												<div className="descrip-tion">
													{item?.video?.descriptionSnippet}
												</div>
										</div>
									</div>
								</div>
						)
						
					})}
					
				</div>
			</div>
		</div>
    </div>
  )
}

export default SearchResult
{/* <VideoDetails
	img={}
	title={}
	channelName={}
	views={}
	publishedTime={}
/> */}