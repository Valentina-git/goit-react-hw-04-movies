import React from 'react';
import { fetchTrending } from './services/tvApi';
import Content from './components/content/Content';
import Navigation from './components/navigation/Navigation';

const App = () => {
  return (
    <div>
      <Navigation />
      <Content />
    </div>
  );
};

export default App;
