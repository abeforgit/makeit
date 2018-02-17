import { shallow } from 'enzyme';
import React from 'react';
import Header from '../../../layouts/PageLayout/Header';

describe('<Header />', () => {
  test('renders without crashing', () => {
    shallow(<Header />);
  });
});
