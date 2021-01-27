import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import SearchForm from '../../components/searchForm/SearchForm';
import { fetchSearchMovies } from '../../services/tvApi';
import MovieGallery from '../../components/movieGallery/MovieGallery';

const InitialState = {
  movies: [],
  page: 1,
  query: '',
  error: null,
  maxpages: 1,
};

const MoviesPage = () => {
  const [state, setState] = useState({ ...InitialState });

  const history = useHistory();
  const location = useLocation();

  const getMovies = async (query, page = 1) => {
    try {
      if (query === '') return;
      const res = await fetchSearchMovies(query, page);

      await setState(prev => ({
        ...prev,
        movies: [...res],
        page: 1,
        query: query,
        maxpages: res.total_pages,
      }));
      history.push({
        ...history,
        search: `?query=${query}`,
      });
    } catch (error) {
      setState(prev => ({ ...prev, error: error }));
    }
  };

  // useEffect(() => {
  //   location.state.query &&
  //     getMovies(location.state.query, location.state.page).then(() =>
  //       setState(prev => ({ ...prev, page: location.state.page })),
  //     );
  // }, [getMovies, location]);

  const { movies, page, query } = state;

  return (
    <>
      <SearchForm getMovies={getMovies} />
      <MovieGallery movies={movies} page={page} query={query} />
    </>
  );
};

export default MoviesPage;
