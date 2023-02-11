import React from 'react';
import {useParams} from "react-router-dom";
import ReactPlayer from "react-player";
import './Trailer.css';

const Trailer = () => {
  
  const params =  useParams();
  const key = params.ytTrailerId;
  
  
  return (
    <div className='react-player-container'>
      {
        key !== null
          ? <ReactPlayer controls playing url={`https://www.youtube.com/watch?v=${key}`}/>
          : null
      }
    </div>
  );
};

export default Trailer;