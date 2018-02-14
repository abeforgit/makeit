import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App';
import { Provider } from 'react-redux';
import store from '../src/store/Store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});