import React from 'react';
import App from '../../components/App';
import routes from '../../routes/index';
import rootReducer from '../../store/reducers/index';
import { createStore } from 'redux';
import { mount, shallow } from 'enzyme';

const store = createStore(rootReducer);

describe('<App />', () => {
  test('shallow renders without crashing', () => {
    shallow(<App store={store} routes={routes(store)} />);
  });

  test('full renders without crashing', () => {
    mount(<App store={store} routes={routes(store)} />);
  });
});
