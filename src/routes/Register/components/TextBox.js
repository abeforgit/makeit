import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="textBoxGroup form-group">
    <input
      {...input}
      placeholder={label}
      type={type}
      className="textBoxControl form-control"
    />
    {touched &&
      ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

TextBox.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
    warning: PropTypes.string,
  }).isRequired,
};

export default TextBox;
