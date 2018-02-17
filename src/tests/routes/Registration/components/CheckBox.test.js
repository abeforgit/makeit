import { shallow } from 'enzyme';
import CheckBox from '../../../../routes/Register/components/CheckBox';
import React from 'react';

describe('<Checkbox />', () => {
  test('Renders without crashing', () => {
    shallow(<CheckBox label="test" meta={{ touched: false }} />);
  });
});
