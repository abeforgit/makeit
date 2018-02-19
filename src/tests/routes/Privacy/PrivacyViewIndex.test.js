import PrivacyView from '../../../routes/Privacy/components/PrivacyView';

describe('PrivacyView Index', () => {
  test('Exports a PrivacyView object', () => {
    const testobj = require('../../../routes/Privacy').default;
    expect(testobj).toBeInstanceOf(PrivacyView.constructor);
  });
});
