import RegistrationPage from '../../../routes/Register/components/RegistrationPage';

describe('Registration Index', () => {
  test('Exports a RegistrationPage object', () => {
    const testobj = require('../../../routes/Register/index').default;
    expect(testobj).toBeInstanceOf(RegistrationPage.constructor);
  });
});
