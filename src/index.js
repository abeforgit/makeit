import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

const MOUNT_NODE = document.getElementById('root');

let render = () => {
  const App = require('./components/App').default;
  const routes = require('./routes/index').default(store);

  ReactDOM.render(<App store={store} routes={routes} />, MOUNT_NODE);
};

render();
registerServiceWorker();
