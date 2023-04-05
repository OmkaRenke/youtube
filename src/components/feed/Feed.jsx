import React, { useContext, useEffect, useState } from 'react'
import "./style.scss"

import { Context } from '../../context/contextApi'
import LeftNav from "./leftnavbar/LeftNav"
import Video from "./Video/Video"
import { useLocation } from 'react-router-dom'
const Feed = () => {
  const {loading,searchResults}=useContext(Context)
  // const handlescroll=()=>{
  //   offset(window.scrollY)
  // }
  // useEffect(()=>{
  //   window.addEventListener("scroll",handlescroll)
  // },[offset])
  const loaction=useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[loaction])
  return (
    <div className='maincontainer'>
      <div className="content">
        <div className="leftnavbarContent" >
          <div className="scroll-div">  
             <LeftNav/>
          </div>
        </div>
        <div className="allvideos">
          <div className="videoSection">
            {!loading  && searchResults &&
              searchResults?.map((item)=>{
                if(item?.type !== "video")return false;
                return(
                  <Video key={item?.video?.videoId} video={item?.video}/>
                )

              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feed