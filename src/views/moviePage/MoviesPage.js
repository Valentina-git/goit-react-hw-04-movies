import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PaginationWrapper from '../../components/pagination/StyledPagination';
import Pagination from '../../components/pagination/Pagination';
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
        movies: [res.results],
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

  const pagination = async e => {
    const page = Number(e.target.textContent);

    await getMovies(state.query, page);
    setState(prev => ({ ...prev, page: page }));
  };

  useEffect(() => {
    if (!location.state) {
      return;
    } else {
      location.state.query &&
        getMovies(location.state.query, location.state.page).then(() =>
          setState(prev => ({ ...prev, page: location.state.page })),
        );
    }
  }, []);

  const { movies, page, query } = state;

  return (
    <>
      <SearchForm getMovies={getMovies} />
      <PaginationWrapper>
        {movies.length > 0 &&
          Array.from({ length: state.maxpages }, (v, k) => k + 1).map(item => (
            <Pagination key={item} onClick={pagination} title={item} />
          ))}
      </PaginationWrapper>

      <MovieGallery movies={movies} page={page} query={query} />

      <PaginationWrapper>
        {movies.length > 0 &&
          Array.from({ length: state.maxpages }, (v, k) => k + 1).map(item => (
            <Pagination key={item} onClick={pagination} title={item} />
          ))}
      </PaginationWrapper>
    </>
  );
};

export default MoviesPage;
