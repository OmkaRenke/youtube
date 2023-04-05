import React, { useContext, useState } from 'react'
import "./LeftNavbarMenuItem.scss"
import { Context } from '../../../context/contextApi'
const LeftNavbarMenuItem = ({text,handleCategorychange,data,className}) => {
 const {mobileMenu,setMobileMenu} =useContext(Context)
 const handleclick=()=>{
  setMobileMenu(!mobileMenu)
 }
  return (
    <div className={`menuItems ${mobileMenu ? "m":""}`} onClick={handleclick}>
      <div className={`menuitem ${className}`}
        title={text}
        onClick={handleCategorychange}
        
      >
        <div className="icon"><span>{data?.icon}</span></div>
        <div className="name">{text}</div>
      </div>
        {data.divider ? <hr/> :""}
    </div>
  )
}

export default LeftNavbarMenuItem