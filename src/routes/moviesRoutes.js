import { lazy } from 'react';

const moviesRoutes = [
  {
    path: '/cast',
    name: 'Movie cast',
    exact: true,
    component: lazy(() =>
      import(
        '../components/moviesList/cast/Cast' /* ebpackChunkName: 'Cast' */
      ),
    ),
  },
  {
    path: '/reviews',
    name: 'Movie reviews',
    exact: true,
    component: lazy(() =>
      import(
        '../components/moviesList/reviews/Reviews' /* ebpackChunkName: 'Cast' */
      ),
    ),
  },
];

export default moviesRoutes;
