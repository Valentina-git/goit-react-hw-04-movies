import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import mainRoutes from '../../routes/mainRoutes';
import MovieDetailsPage from '../../views/movieDetailsPage/MovieDetailsPage';
import NotFound from '../../views/notFound/NotFound';

const Content = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Switch>
        {mainRoutes.map(({ path, exact, name, component: MyComponent }) => (
          <Route
            path={path}
            exact={exact}
            key={path}
            render={() => <MyComponent name={name} />}
          />
        ))}
        <Route path="/movies/:id" component={MovieDetailsPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default Content;
