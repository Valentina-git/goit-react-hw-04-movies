import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import StyledMovieGallery from './StyledMovieGallery';

const MovieGallery = ({ movies, page, query }) => {
  const location = useLocation;
  const match = useRouteMatch;

  return (
    <StyledMovieGallery>
      {/* <ul className="movieGallery">
        {movies.map(item => (
          <li className="movieGalleryItem" key={item}>
            
            <Link
              className="movieGalleryLink"
              to={{
                pathname: `${match.url}${item.id}`,
                state: {
                  from: location.pathname,
                  movieId: item.id,
                  page: page,
                  query: query,
                },
              }}
            >
              <img
                className="movieGalleryImg"
                src={
                  item.poster_path
                    ? `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`
                    : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
                }
                alt={item.name ? item.name : item.title}
                width="220"
                height="330"
              />
              <h3>{item.name ? item.name : item.title}</h3>
            </Link>
            <p className="movieGalleryText">{item.release_date}</p>
          </li>
        ))}
      </ul> */}
    </StyledMovieGallery>
  );
};

MovieGallery.propTypes = {
  movies: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  query: PropTypes.string.isRequired,
};

export default MovieGallery;
