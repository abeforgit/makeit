import HomeView from '../../../routes/Home/components/HomeView';

describe('HomeView index', () => {
  test('exports a HomeView object', () => {
    const testobj = require('../../../routes/Home/index').default;
    expect(testobj).toBeInstanceOf(HomeView.constructor);
  });
});
