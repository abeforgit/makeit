import { shallow } from 'enzyme';
import HomeView from '../../../../routes/Home/components/HomeView';
import React from 'react';

describe('<HomeView />', () => {
  test('Renders without crashing', () => {
    shallow(<HomeView />);
  });
});
