import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: `17287c6674d1b15c587a1bb0f4802156`,
};

export const fetchTrendingMovies = async () => {
  try {
    return await axios.get(`/trending/movie/day`).then(res => res.data.results);
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchSearchMovies = async search => {
  try {
    return await axios
      .get(`/search/movie?query=${search}`)
      .then(res => res.data.results);
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    return await axios.get(`/movie/${movieId}`).then(res => res.data);
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchMovieCredits = async movieId => {
  try {
    return await axios
      .get(`/movie/${movieId}/credits`)
      .then(res => res.data.cast);
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    return await axios
      .get(`/movie/${movieId}/reviews`)
      .then(res => res.data.results);
  } catch (error) {
    throw new Error(error);
  }
};
