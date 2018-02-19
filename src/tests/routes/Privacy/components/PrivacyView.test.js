import PrivacyView from '../../../../routes/Privacy/components/PrivacyView';
import React from 'react';
import { shallow } from 'enzyme';

describe('<PrivacyView />', () => {
  test('Renders without crashing', () => {
    shallow(<PrivacyView />);
  });
});
