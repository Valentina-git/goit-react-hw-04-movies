import React, { Suspense, useEffect, useState } from 'react';
import {
  NavLink,
  Route,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch,
} from 'react-router-dom';
import { fetchMovieDetails } from '../../services/tvApi';
import moviesRoutes from '../../routes/moviesRoutes';
import MovieDetailsWrapper from './StyledMovieDetails';

const MovieDetailsPage = () => {
  const [state, setState] = useState({});
  const match = useRouteMatch;
  const location = useLocation;
  const history = useHistory;

  const getMovieDetails = async id => {
    const res = await fetchMovieDetails(id);
    setState({ ...res });
  };

  useEffect(() => {
    getMovieDetails(history.location.state.movieId);
  }, []);

  const goBack = () => {
    history.push({
      pathname: history.location.state.from,
      search: '',
      hash: '',
      state: {
        from: location.pathname,
        query: location.state.query,
        page: location.state.page,
      },
      page: history.location.state.page,
    });
  };

  const {
    name,
    title,
    release_date,
    poster_path,
    vote_average,
    genres,
  } = state;

  return (
    <MovieDetailsWrapper>
      <button className="btn" type="button" onClick={goBack}>
        Go back
      </button>
      <div className="movieDetailsContent">
        <img
          className="movieDetailsImg"
          src={
            poster_path
              ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`
              : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
          }
          alt={title ? title : name}
          width="600"
          height="900"
        />
        <div className="movieDetailsDescription">
          <h2>
            {title ? title : name}({release_date && release_date.slice(0, 4)})
          </h2>
          <p>User score: {vote_average * 10}%</p>
          <h3>Genres</h3>
          <ul className="list movieDetailsGenresList">
            {genres &&
              genres.map(item => (
                <li className="movieDetailsGenresListItem" key={item.id}>
                  {item.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="linkWrapper">
        <NavLink
          to={{
            pathname: `${match.url}/cast`,
            state: { ...location.state },
          }}
          exact
          className="movieDetailsLink"
          activeClassName="moviDetailsLinkActive"
        >
          Cast
        </NavLink>
        <NavLink
          to={{
            pathname: `${match.url}/reviews`,
            state: { ...location.state },
          }}
          exact
          className="movieDetailsLink"
          activeClassName="moviDetailsLinkActive"
        >
          Reviews
        </NavLink>
      </div>
      <div>
        <Suspense fallback={<div>... Loading</div>}>
          <Switch>
            {moviesRoutes.map(({ path, exact, component: MyComponent }) => (
              <Route
                path={`${match.url}${path}`}
                exact={exact}
                key={path}
                render={() => <MyComponent />}
              />
            ))}
          </Switch>
        </Suspense>
      </div>
    </MovieDetailsWrapper>
  );
};

export default MovieDetailsPage;
