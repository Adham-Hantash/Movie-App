import React from 'react'
import style from './PageNotFound.module.css'
export default function PageNotFound() {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      {/* <img src="/assets/img/255-2550411_404-error-images-free-png-transparent-png.png" alt="" /> */}
      <img className='w-75 h-75' src={require("./255-2550411_404-error-images-free-png-transparent-png.png")} height="400px" />
    </div>
  )
}
