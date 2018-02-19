import TermsCondBox from '../../../../routes/Register/components/TermsCondBox';
import React from 'react';
import { render, shallow } from 'enzyme';
import { Link, Route, MemoryRouter as Router } from 'react-router-dom';
describe('<TermsCondBox />', () => {
  test('Renders without crashing', () => {
    shallow(<TermsCondBox meta={{ touched: false }} />);
  });

  test('Contains link to terms of use', () => {
    const TestBox = () => <TermsCondBox meta={{ touched: false }} />;
    const wrapper = render(
      <Router>
        <Route path="/" component={TestBox} />
      </Router>,
    );

    expect(wrapper.find('a[href="/terms-of-use"]')).toHaveLength(1);
  });
});
