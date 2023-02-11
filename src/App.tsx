import {useEffect, useState} from 'react'
import './App.css'
import api from "./api/axiosConfig";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import Header from "./components/header/Header";

function App() {
  const [movies, setMovies] = useState<any>();
  
  const getMovies = async () => {
    
    try {
      const response: any = await api.get("/movies");
      console.log(response.data);
      setMovies(response.data);
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
        </Route>
      </Routes>
    </div>
  )
}

export default App
