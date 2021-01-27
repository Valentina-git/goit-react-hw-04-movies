import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: `17287c6674d1b15c587a1bb0f4802156`,
};

export const fetchTrendingMovies = () => {
  try {
    return axios.get(`/trending/movie/day`).then(res => res.data.results);
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchSearchMovies = search => {
  try {
    return axios
      .get(`/search/movie?query=${search}`)
      .then(res => res.data.results);
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchMovieDetails = movieId => {
  try {
    return axios.get(`/movie/${movieId}`).then(res => res.data.results);
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchMovieCredits = movieId => {
  try {
    return axios.get(`/movie/${movieId}/credits`).then(res => res.data.results);
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchMovieReviews = movieId => {
  try {
    return axios.get(`/movie/${movieId}/reviews`).then(res => res.data.results);
  } catch (error) {
    throw new Error(error);
  }
};
