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
    exact: true,
    component: lazy(() =>
      import(
        '../views/moviePage/MoviesPage' /* webpackChunkName: 'MoviesPage' */
      ),
    ),
    renderLink: true,
  },
];

export default mainRoutes;
