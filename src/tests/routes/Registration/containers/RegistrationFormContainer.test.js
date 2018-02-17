import RegistrationFormContainer from '../../../../routes/Register/containers/RegistrationFormContainer';
import { reduxForm } from 'redux-form';
describe('RegistrationForm Container', () => {
  test('Returns a ReduxForm object', () => {
    expect(RegistrationFormContainer).toBeInstanceOf(reduxForm.constructor);
  });
});
