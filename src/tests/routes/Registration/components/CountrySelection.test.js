import CountrySelection from '../../../../routes/Register/components/CountrySelection';
import React from 'react';
import { shallow } from 'enzyme';
import { CountryDropdown } from 'react-country-region-selector';

const mockHandler = jest.fn();

describe('<CountrySelection/>', () => {
  test('Renders without crashing', () => {
    const input = { value: 'Belgium', onChange: () => mockHandler };
    const meta = { touched: false, error: '', warning: false };
    shallow(<CountrySelection input={input} meta={meta} />);
  });

  test('Renders one CountryDropdown component', () => {
    const input = { value: 'Belgium', onChange: () => mockHandler };
    const meta = { touched: false, error: '', warning: false };
    const wrapper = shallow(<CountrySelection input={input} meta={meta} />);
    expect(wrapper.find(CountryDropdown)).toHaveLength(1);
  });

  test('Renders the error string in a span when error given and touched', () => {
    const input = { value: 'Belgium', onChange: () => mockHandler };
    const meta = { touched: true, error: 'testerror', warning: false };
    const wrapper = shallow(<CountrySelection input={input} meta={meta} />);
    expect(wrapper.find('span')).toHaveLength(1);
    expect(wrapper.find('span').text()).toBe('testerror');
  });

  test('Doesnt render the error string when not touched', () => {
    const input = { value: 'Belgium', onChange: () => mockHandler };
    const meta = { touched: false, error: 'testerror', warning: false };
    const wrapper = shallow(<CountrySelection input={input} meta={meta} />);
    expect(wrapper.find('span')).toHaveLength(0);
  });
});
