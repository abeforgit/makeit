import EmailSubBox from '../../../../routes/Register/components/EmailSubBox';
import React from 'react';
import { shallow } from 'enzyme';

describe('<EmailSubBox />', () => {
  test('Renders without crashing', () => {
    shallow(<EmailSubBox meta={{ touched: false }} />);
  });
});
