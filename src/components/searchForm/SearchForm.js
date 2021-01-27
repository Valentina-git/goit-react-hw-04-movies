import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StyledSearchForm from './StyledSearchForm';

const SearchForm = ({ getMovies }) => {
  const [query, setQuery] = useState('');

  const onHandleInput = e => {
    setQuery(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    getMovies(query);
  };

  return (
    <StyledSearchForm>
      <form className="SearchForm" onSubmit={onFormSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
        <label>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={onHandleInput}
            value={query}
          />
        </label>
      </form>
    </StyledSearchForm>
  );
};

SearchForm.propTypes = {
  getMovies: PropTypes.func.isRequired,
};

export default SearchForm;
