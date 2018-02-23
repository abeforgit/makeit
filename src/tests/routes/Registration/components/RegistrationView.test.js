import { shallow } from 'enzyme';
import RegistrationView from '../../../../routes/Register/containers/RegistrationView';
import React from 'react';

describe('<RegistrationView />', () => {
  test('Renders without crashing', () => {
    shallow(<RegistrationView />);
  });
});
