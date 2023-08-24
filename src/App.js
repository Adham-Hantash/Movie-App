import React, { useState } from 'react'
import Home from './components/Home/Home.jsx'
import Layout from './components/Layout/Layout.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import Movies from './components/Movies/Movies.jsx'
import TV from './components/TV/TV.jsx'
import PageNotFound from './components/PageNotFound/PageNotFound.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import Protected from './components/Protected/Protected.jsx'

export default function App() {

  let [user,setUser] = useState([])
  function getUser(){
    let token = localStorage.getItem('token')
    let usr = jwtDecode(token)
    setUser(usr)
  }
  const routes = createBrowserRouter([
    { 
      path:'', element:<Layout user={user} setUser={setUser}/> , children:[
      {index:true, element:<Home/>},
      {path:'movie', element:<Protected><Movies/></Protected>},
      {path:'tv', element:<TV/>},
      {path:'login', element:<Login getUser={getUser}/>},
      {path:'register', element:<Register/>},
      {path:'*', element:<PageNotFound/>}
    ]}
  ])

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}
