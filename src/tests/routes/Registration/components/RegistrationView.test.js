import { shallow } from 'enzyme';
import RegistrationView from '../../../../routes/Register/components/RegistrationPage';
import React from 'react';

describe('<RegistrationView />', () => {
  test('Renders without crashing', () => {
    shallow(<RegistrationView />);
  });
});
