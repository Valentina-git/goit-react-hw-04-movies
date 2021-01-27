import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMovieReviews } from '../../../services/tvApi';
import ReviewsStyled from './StyledReviews';

const Reviews = () => {
  const [state, setState] = useState([]);
  const location = useLocation();

  const getMovieReview = async id => {
    const res = await fetchMovieReviews(id);

    setState([...res]);
  };

  useEffect(() => {
    getMovieReview(location.state.movieId);
  }, [location]);

  return (
    <ReviewsStyled>
      <ul className="list">
        {!!state.length ? (
          state.map(item => (
            <li className="listItem" key={item.id}>
              <h3>{item.author}</h3>
              <p>{item.content}</p>
            </li>
          ))
        ) : (
          <p>'Not info'</p>
        )}
      </ul>
    </ReviewsStyled>
  );
};

export default Reviews;
