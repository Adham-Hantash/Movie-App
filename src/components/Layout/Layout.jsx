import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer.jsx'

export default function Layout({user , setUser}) {
  let navigate = useNavigate()
  function logout(){
    localStorage.removeItem('token')
    setUser(null)
    navigate('/login')
  }
  return (
    <div>
     <Navbar user={user} logout={logout}/>
    <Outlet/>
    <Footer/>
    </div>
  )
}
