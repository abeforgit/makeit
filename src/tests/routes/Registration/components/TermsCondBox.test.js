import TermsCondBox from '../../../../routes/Register/components/TermsCondBox';
import React from 'react';
import { shallow } from 'enzyme';

describe('<TermsCondBox />', () => {
  test('Renders without crashing', () => {
    shallow(<TermsCondBox meta={{ touched: false }} />);
  });
});
