import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({ input, label, meta: { touched, error, warning } }) => (
  <div>
    <span>
      <input {...input} type="checkbox" />
      <label>{label}</label>
    </span>
    {touched &&
      ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

CheckBox.propTypes = {
  input: PropTypes.object,
  label: PropTypes.any.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
    warning: PropTypes.string,
  }).isRequired,
};

export default CheckBox;
