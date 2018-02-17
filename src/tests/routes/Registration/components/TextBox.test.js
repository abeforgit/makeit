import React from 'react';
import { shallow } from 'enzyme';
import TextBox from '../../../../routes/Register/components/TextBox';

describe('<TextBox />', () => {
  test('renders without crashing', () => {
    const meta = { touched: false };
    shallow(<TextBox type="text" meta={meta} />);
  });
});
