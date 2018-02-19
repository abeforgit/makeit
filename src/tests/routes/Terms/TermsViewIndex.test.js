import TermsView from '../../../routes/Terms/components/TermsView';

describe('TermsView index.js', () => {
  test('Exports a TermsView object', () => {
    const testobj = require('../../../routes/Terms').default;
    expect(testobj).toBeInstanceOf(TermsView.constructor);
  });
});
