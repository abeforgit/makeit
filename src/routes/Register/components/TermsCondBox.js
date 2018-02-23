import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from './CheckBox';
import { Link } from 'react-router-dom';

const TermsCondBox = ({ input, meta }) => {
  const mylabel = (
    <span>
      <span>I agree to Viber Music </span>
      <Link to="/terms-of-use">Terms of Use</Link>
      <span>, and </span>
      <Link to="/privacy">Privacy Policy</Link>
    </span>
  );

  return (
    <div>
      <CheckBox input={input} label={mylabel} meta={meta} />
    </div>
  );
};

export default TermsCondBox;

TermsCondBox.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
};
