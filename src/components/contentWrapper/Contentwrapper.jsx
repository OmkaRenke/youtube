import React from 'react'
import "./style.scss"
const Contentwrapper = ({children}) => {
  return (
    <div className='contentwrapper'>
            {children}
    </div>
  )
}

export default Contentwrapper