import React from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import PropTypes from 'prop-types';

const CountrySelection = ({
  input: { value, onChange },
  meta: { touched, error, warning },
}) => (
  <div>
    <CountryDropdown
      value={value}
      onChange={onChange}
      defaultOptionLabel="Country of Residence"
    />
    {touched &&
      ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

CountrySelection.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
    warning: PropTypes.bool,
  }).isRequired,
};

export default CountrySelection;
