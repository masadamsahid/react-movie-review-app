import {useEffect, useState} from 'react'
import './App.css'
import api from "./api/axiosConfig";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Trailer from "./components/trailer/Trailer";
import Reviews from "./components/reviews/Reviews";

function App() {
  const [movies, setMovies] = useState<any[]>([]);
  const [movie, setMovie] = useState<any>();
  const [reviews, setReviews] = useState<any[]>([]);
  
  const getMovies = async () => {
    
    try {
      const response: any = await api.get("/movies");
      
      setMovies(response.data);
    } catch (err) {
      console.log(err);
    }
    
  }
  
  const getMovieData = async (movieId: string) => {
    try {
      const res = await api.get(`/movies/${movieId}`)
      const singleMovie = res.data;
      setMovie(singleMovie);
      
      setReviews(singleMovie.reviewIds);
    } catch (err) {
      console.log(err);
    }
  }
  
  useEffect(() => {
    const fetchMovies = async () => {
      await getMovies();
    }
    fetchMovies();
  },[]);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home movies={movies}/>}/>
          <Route path='/Trailer/:ytTrailerId' element={<Trailer/>}/>
          <Route path='/Reviews/:movieId' element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews}/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
