import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { loginSchema } from '../Schemas/login.jsx'
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header.jsx'

export default function Login({getUser}) {

  let [error,setError] = useState([])
  let navigate = useNavigate()
  let {errors , values , handleChange , handleSubmit , touched , handleBlur} = useFormik({
    initialValues:{
      email:"",
      password:"",
    }, 
    validationSchema:loginSchema,
    onSubmit:login
  })

  async function login(values){
    let {data} = await axios.post("http://localhost:3000/auth/login",values)
    if (data.message === "success"){
      console.log("Signed in Successfully")
      localStorage.setItem('token',data.token)
      getUser()
      navigate('/movie')
    }else{
      setError(data.err[0])
    }
    console.log(data)
  }


  return (
<>
    <Header 
    title="Login to see our movies"
    height="40"
    />

    <div className="container w-50 text-center mt- pt-5">

    {
      error.map( (err)=>{
        return (
          <div className='alert alert-danger'>
            {err.message}
          </div>
        )
      } )
    }

      <form className='mt-5' onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
    <input type="email"      
    value={values.email}
    onChange={handleChange}
    onBlur={handleBlur}
     name='email' id="exampleInputEmail1" aria-describedby="emailHelp"
     className={`form-control ${errors.email && touched.email?"is-invalid":""}`}
     />
     {errors.email && touched.email?<div className='small text-danger'>{errors.email}</div>: <></>}
  </div>
 
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
    <input type="password" 
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
    name='password' id="exampleInputPassword1"
    className={`form-control ${errors.password && touched.password?"is-invalid":""}`}
    />
     {errors.password && touched.password?<div className='small text-danger'>{errors.password}</div>: <></>}

  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
    </>
  )
}
