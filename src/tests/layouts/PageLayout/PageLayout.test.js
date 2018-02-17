import { shallow } from 'enzyme';
import PageLayout from '../../../layouts/PageLayout/PageLayout';
import React from 'react';

describe('<PageLayout />', () => {
  test('Renders without crashing', () => {
    shallow(<PageLayout />);
  });
});
