import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import routes from '../routes/index';
import rootReducer from '../store/reducers';
import { createStore } from 'redux';

const store = createStore(rootReducer);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App store={store} routes={routes(store)} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
