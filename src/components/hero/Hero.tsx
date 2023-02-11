import React from 'react';
import './Hero.css';
import {Paper} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlay} from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";

const Hero = ({ movies }: {movies: any[]}) => {
  const navigate = useNavigate();
  
  function navigateToReviewsPage(movieId: string) {
    navigate(`/Reviews/${movieId}`);
  }
  
  return (
    <div className="movie-carousel-container">
      <Carousel>
        {
          movies?.map((movie) => {
            return (
              <Paper key={movie?.id?.timestamp}>
                <div className='movie-card-container'>
                  <div
                    className="movie-card"
                    // @ts-ignore
                    style={{"--img": `url(${movie?.backdrops[0]})`}}
                  >
                    <div className="movie-detail">
                      <div className="movie-poster">
                        <img src={movie.poster} alt=""/>
                      </div>
                      <div className="movie-title">
                        <h4>{movie.title}</h4>
                      </div>
                      <div className="movie-buttons-container">
                        <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                          <div className="play-button-icon-container">
                            <FontAwesomeIcon
                              className="play-button-icon"
                              icon={faCirclePlay}
                            />
                          </div>
                        </Link>
                        <div className="movie-review-button-container">
                          <Button variant='info' onClick={() => navigateToReviewsPage(movie.imdbId)}>
                            Reviews
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>
            );
          })
        }
      </Carousel>
    </div>
  );
};

export default Hero;