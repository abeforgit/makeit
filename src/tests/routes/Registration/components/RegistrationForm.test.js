import React from 'react';
import { shallow } from 'enzyme';
import RegistrationForm from '../../../../routes/Register/components/RegistrationForm';

const mockHandler = jest.fn();

describe('<RegistrationForm />', () => {
  test('Renders without crashing', () => {
    shallow(<RegistrationForm handleSubmit={mockHandler} />);
  });
});
