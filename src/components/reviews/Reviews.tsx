import React, {useEffect, useRef} from 'react';
import {useParams} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";
import api from "../../api/axiosConfig";

const Reviews = ({getMovieData, movie, reviews, setReviews}: any) => {
  
  const revText = useRef();
  let params = useParams();
  const movieId = params.movieId;
  
  useEffect(() => {
    getMovieData(movieId);
  }, [movieId]);
  
  const addReview: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const rev: any = revText.current;
    
    try {
      const response = await api.post("/reviews", {
        reviewBody: rev.value,
        imdbId: movieId,
      });
      
      const updatedReviews = [...reviews, {body: rev.value}];
      
      rev.value = "";
      
      setReviews(updatedReviews);
    } catch (err) {
      console.log(err);
    }
  }
  
  // console.log({reviews})
  
  return (
    <Container>
      <Row>
        <Col><h3>Reviews</h3></Col>
      </Row>
      <Row className='mt-2'>
        <Col>
          <img src={movie?.poster} alt=""/>
        </Col>
        <Col>
          {
            <>
              <Row key='review-form'>
                <Col>
                  <ReviewForm
                    handleSubmit={addReview}
                    revText={revText}
                    labelText="Write a Review?"
                  />
                </Col>
              </Row>
            </>
          }
          {
            reviews?.map((r: any) => {
              return (
                <>
                <Row key={r?.id?.timestamp}>
                  <Col>{r.body}</Col>
                </Row>
                </>
              )
            })
          }
        </Col>
      </Row>
      <Row>
        <Col>
          <hr/>
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;