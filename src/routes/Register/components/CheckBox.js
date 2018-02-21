import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({ input, label, meta: { touched, error, warning } }) => (
  <div>
    <span className="form-group">
      <input {...input} type="checkbox" className="form-control" />
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
