import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from '../../services/tvApi';
import StyledHome from './StyledHome';

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies().then(res => setTrendMovies([...res]));
  }, []);

  return (
    <StyledHome>
      <ul className="trending_list list">
        {trendMovies.map((movie, index) => (
          <li key={`${movie.id}${index}`} className="trending_listItem">
            <NavLink
              className="trending_listLink"
              to={{
                pathname: `movies/${movie.id}`,
                state: {
                  from: location.pathname,
                  movieId: movie.id,
                },
              }}
            >
              <img
                className="homePageImg"
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                alt={movie.name ? movie.name : movie.title}
              />
              <h3>{movie.name ? movie.name : movie.title}</h3>
            </NavLink>
            <p className="homePageText">{movie.release_date}</p>
          </li>
        ))}
      </ul>
    </StyledHome>
  );
};

export default HomePage;
