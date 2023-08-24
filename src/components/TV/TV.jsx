import React, { useEffect, useState } from 'react'
import Header from '../Header/Header.jsx'
import axios from 'axios'

export default function TV() {
  let [tv,SetTV] = useState([])
  async function getTv(){
    let {data} = await axios.get("https://api.themoviedb.org/3/trending/tv/week?api_key=6bbebaab3d2543e0b22aa3808f58b44d")
    SetTV(data.results)
  }
  
  useEffect( ()=>{
    getTv()
  },[])

  return (
    <div>


    <Header 
    title="Trending TV Shows" 
    height="75"
    />

    <div className="container text-center">
      <h2 className='mt-4 mb-4'>Trending TV Shows</h2>
      <div className="row">
      {tv.map( (tvs, index)=>{
        return (
            <div className="col-md-3">
              <div className="card mb-5">
                <img src={`https://image.tmdb.org/t/p/w500/${tvs.poster_path}`} alt={tvs.overview} />
                <p>Votes {tvs.vote_average}</p>
              </div>
            </div>
        )
      } )}
      </div>
    </div>


    </div>

  )
}
