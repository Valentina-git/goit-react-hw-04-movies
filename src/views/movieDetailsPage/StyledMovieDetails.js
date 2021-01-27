import styled from 'styled-components';

const MovieDetailsWrapper = styled.div`
  padding: 20px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .btn {
    display: inline;
    margin-bottom: 20px;
    padding: 8px 16px;
    border-radius: 2px;
    text-align: center;
    background-color: #3f51b5;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    color: #fff;
    border: 0;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 18px;
    line-height: 24px;
    font-style: normal;
    font-weight: 500;
    min-width: 60px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
  .btn:not(:last-child) {
    margin-right: 10px;
  }
  .btn:hover,
  .btn:focus {
    background-color: #303f9f;
  }
  .movieDetailsContent {
    display: flex;
    margin-bottom: 20px;
  }
  .movieDetailsImg {
    width: 300px;
    height: 450px;
    margin-right: 20px;
  }
  .movieDetailsDescription {
    padding: 20px;
    border: 1px solid lightgrey;
    border-radius: 10px;
  }
  .movieDetailsGenresList {
    display: flex;
  }
  .movieDetailsGenresListItem {
    margin-right: 10px;
  }
  .linkWrapper {
    margin-bottom: 20px;
  }
  .movieDetailsLink {
    font-weight: 700;
    text-decoration: none;
    margin-right: 10px;
    font-size: 20px;
    color: grey;
  }
  .moviDetailsLinkActive {
    color: #303f9f;
  }
`;

export default MovieDetailsWrapper;
