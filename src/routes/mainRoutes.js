import { lazy } from 'react';

const mainRoutes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: lazy(() =>
      import('../views/homePage/HomePage' /* webpackChunkName: 'HomePage' */),
    ),
    renderLink: true,
  },
  {
    path: '/movies',
    name: 'Movie ',
    exact: false,
    component: lazy(() =>
      import(
        '../views/moviePage/MoviesPage' /* webpackChunkName: 'MoviesPage' */
      ),
    ),
    renderLink: true,
  },
  {
    path: '/movies/:movieId',
    name: 'Movies details',
    exact: false,
    component: lazy(() =>
      import(
        '../views/movieDetailsPage/MovieDetailsPage' /* webpackChunkName: 'MoviesPage' */
      ),
    ),
    renderLink: false,
  },
];

export default mainRoutes;
