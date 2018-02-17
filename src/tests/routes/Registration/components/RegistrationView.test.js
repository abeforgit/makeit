import { shallow } from 'enzyme';
import RegistrationView from '../../../../routes/Register/components/RegistrationView';
import React from 'react';

describe('<RegistrationView />', () => {
  test('Renders without crashing', () => {
    shallow(<RegistrationView />);
  });
});
