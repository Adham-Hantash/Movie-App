import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { regSchema } from '../Schemas/register.jsx'
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header.jsx'

export default function Register() {

  let [error,setError] = useState([])
  let navigate = useNavigate()

  let {errors , values , handleChange , handleSubmit , touched , handleBlur} = useFormik({
    initialValues:{
      email:"",
      name:"",
      password:"",
      cPassword:""
    }, 
    validationSchema:regSchema,
    onSubmit:register
  })

  async function register(values){
    let {data} = await axios.post("https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signup",values)
    if (data.message === "success"){
      console.log("Registered Successfully")
      navigate("/login")
    }else{
      setError(data.err[0])
    }
    console.log(data)
  }


  return (

<>
    <Header 
    title="Signup for free"
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
    <label htmlFor="exampleInputName" className="form-label fw-bold">Name</label>
    <input type="text"  
            value={values.name}
            onChange={handleChange} 
            onBlur={handleBlur}
    name='name' id="exampleInputName" aria-describedby="emailHelp"
    className={`form-control ${errors.name && touched.name?"is-invalid":""}`}
    />
     {errors.name && touched.name?<div className='small text-danger'>{errors.name}</div>: <></>}

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
  <div className="mb-3">
    <label htmlFor="exampleInputPassword2"  className="form-label fw-bold">Confirm Password</label>
    <input type="password"  
            value={values.cPassword}
            onChange={handleChange}
            onBlur={handleBlur}
    name='cPassword' id="exampleInputPassword2" 
    className={`form-control ${errors.cPassword && touched.cPassword?"is-invalid":""}`}
    />
     {errors.cPassword && touched.cPassword?<div className='small text-danger'>{errors.cPassword}</div>: <></>}

  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
    </>
  )
}
