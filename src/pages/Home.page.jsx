import React, { useEffect, useState } from 'react'
import axios from 'axios'

//Components
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component"
import PosterSlider from "../components/PosterSlider/PosterSlider.Component"

//Layout Hoc
import DefaultLayoutHoc from '../layout/Default.layout'

const HomePage = () => {

  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  // Popular Movies
  useEffect(()=>{
    const requestPopularMovies = async() =>{
      const getPopularMovies = await axios.get('/movie/popular');
      setRecommendedMovies(getPopularMovies.data.results);
    }

    requestPopularMovies();
  },[])

  //Top Rated Movies
  useEffect(()=>{
    const requestTopRatedMovies = async() =>{
      const getTopRatedMovies = await axios.get('/movie/top_rated');
      setPremierMovies(getTopRatedMovies.data.results);
    }
  
    requestTopRatedMovies();
  },[])

  //upcoming
  useEffect(()=>{
    const requestUpcomingMovies = async() =>{
      const getUpcomingMovies = await axios.get('/movie/upcoming');
      setOnlineStreamEvents(getUpcomingMovies.data.results);
    }
  
    requestUpcomingMovies();
  },[])

  return (
    <>
      <HeroCarousel />

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider 
        title="Recommended Movies" 
        subtitle="List of recommend movies"
        posters={recommendedMovies}
        isDark={false}/>
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Rupay" className="w-full h-full"/>
          </div>
          <PosterSlider 
        title="Premier" 
        subtitle="Brand new releases every Friday"
        posters={premierMovies}
        isDark={true}/>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider 
        title="Online Streaming Event" 
        subtitle=""
        posters={onlineStreamEvents}
        isDark={false}/>
      </div>
    </>
  )
}

export default DefaultLayoutHoc(HomePage)