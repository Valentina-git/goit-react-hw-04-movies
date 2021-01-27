import { lazy } from 'react';

const moviesRoutes = [
  {
    path: '/cast',
    name: 'Movie cast',
    exact: true,
    component: lazy(() =>
      import(
        '../components/moviesList/cast/CastListItem' /* ebpackChunkName: 'Cast' */
      ),
    ),
  },
  {
    path: '/reviews',
    name: 'Movie reviews',
    exact: true,
    component: lazy(() =>
      import(
        '../components/moviesList/reviews/ReviewsListItem' /* ebpackChunkName: 'Cast' */
      ),
    ),
  },
];

export default moviesRoutes;
