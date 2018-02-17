import CountrySelection from '../routes/Register/components/CountrySelection';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import { CountryDropdown } from 'react-country-region-selector';

Enzyme.configure({ adapter: new Adapter() });

describe('<CountrySelection/>', () => {
  test('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render();
  });

  test('Renders one CountryDropdown component', () => {
    const input = { value: 'Belgium', onChange: () => undefined };
    const meta = { touched: false, error: '', warning: false };
    const wrapper = shallow(<CountrySelection input={input} meta={meta} />);
    expect(wrapper.find(CountryDropdown)).toHaveLength(1);
  });

  test('Renders the error string in a span when error given and touched', () => {
    const input = { value: 'Belgium', onChange: () => undefined };
    const meta = { touched: true, error: 'testerror', warning: false };
    const wrapper = shallow(<CountrySelection input={input} meta={meta} />);
    expect(wrapper.find('span')).toHaveLength(1);
    expect(wrapper.find('span').text()).toBe('testerror');
  });

  test('Doesnt render the error string when not touched', () => {
    const input = { value: 'Belgium', onChange: () => undefined };
    const meta = { touched: false, error: 'testerror', warning: false };
    const wrapper = shallow(<CountrySelection input={input} meta={meta} />);
    expect(wrapper.find('span')).toHaveLength(0);
  });
});
