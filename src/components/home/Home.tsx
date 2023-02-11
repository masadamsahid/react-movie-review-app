import React from 'react';
import Hero from "../hero/Hero";

const Home = ({movies}: {movies: any[]}) => {
  return (
    <Hero movies={movies}/>
  );
};

export default Home;