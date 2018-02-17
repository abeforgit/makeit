import React from 'react';
import App from '../../components/App';
import routes from '../../routes/index';
import rootReducer from '../../store/reducers/index';
import { createStore } from 'redux';
import { shallow } from 'enzyme';

const store = createStore(rootReducer);

it('renders without crashing', () => {
  shallow(<App store={store} routes={routes(store)} />);
});
