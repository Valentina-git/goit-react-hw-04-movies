import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ onClick, title }) => {
  return (
    <button className="Btn" type="button" onClick={onClick}>
      {title}
    </button>
  );
};

Pagination.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Pagination;
