import React, { useEffect, useState } from 'react'
import Header from '../Header/Header.jsx'
import axios from 'axios'

export default function Home() {
  let [all,SetAll] = useState([])

async function getAllMovies(){
  let {data} = await axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=6bbebaab3d2543e0b22aa3808f58b44d")
  SetAll(data.results)
}

useEffect( ()=>{
  getAllMovies()
},[])

  return (

    <div>


    <Header
    title="Welcome to movies world"
    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus, temporibus magni magnam deleniti tempora non repellat provident quisquam, et ipsa nostrum molestiae odit eveniet molestias itaque error excepturi sapiente cum iste, nesciunt mollitia. 
    Est quae ullam eos tempore voluptatum maiores dolores cum nam, qui molestiae facere laboriosam numquam laborum."
    height="100"
    />
    </div>

    
  )
}
