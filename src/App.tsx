import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import store from './store/index';
import './assets/styles/index.scss';
import routes from './routes';
import './assets/icons';

const App = () => (
  <Provider store={store}>
    <HashRouter>
      { renderRoutes(routes) }
    </HashRouter>
  </Provider>

);

export default App;
