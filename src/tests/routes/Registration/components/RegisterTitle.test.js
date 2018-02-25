import React from 'react';
import { shallow } from 'enzyme';
import RegisterTitle from '../../../../routes/Register/components/RegisterTitle';

describe('<RegisterTitle />', () => {
  test('Renders without crashing', () => {
    shallow(<RegisterTitle />);
  });
});
