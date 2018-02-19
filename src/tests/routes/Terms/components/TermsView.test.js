import React from 'react';
import { shallow } from 'enzyme';
import TermsView from '../../../../routes/Terms/components/TermsView';

describe('<TermsView />', () => {
  test('Renders without crashing', () => {
    shallow(<TermsView />);
  });

  test('Shows some text', () => {
    expect(shallow(<TermsView />)).toHaveText('Terms and Conditions');
  });
});
