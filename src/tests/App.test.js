import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import store from './teststore/index';
import routes from '../routes/index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App store={store} routes={routes(store)} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
