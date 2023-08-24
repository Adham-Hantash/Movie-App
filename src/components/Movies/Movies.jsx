import React, { useEffect, useState } from 'react'
import Header from '../Header/Header.jsx'
import axios from 'axios'

export default function Movies() {
  let [movies,SetMovies] = useState([])
  async function getTrendingMovies(){
    let {data} = await axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=6bbebaab3d2543e0b22aa3808f58b44d")
    SetMovies(data.results)
  }
  
  useEffect( ()=>{
    getTrendingMovies()
  },[])

  return (
    <div>


    <Header 
    title="Trending Movies"
    height="75"
    />

    <div className="container text-center">
      <h2 className='mt-4 mb-4'>Trending This Week</h2>
      <div className="row">
      {movies.map( (movie, index)=>{
        return (
            <div className="col-md-3">
              <div className="card mb-5">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.overview} />
                <h3>{movie.title.split(" ").slice(0,3).join(" ")}</h3>
                <p>Votes {movie.vote_average}</p>
              </div>
            </div>
        )
      } )}
      </div>
    </div>


    </div>

  )
}
