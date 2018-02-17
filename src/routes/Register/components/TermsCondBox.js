import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from './CheckBox';

const TermsCondBox = ({ input, meta }) => {
  const mylabel = (
    <span>I agree to Viber Music Terms of Use, and Privacy Policy</span>
  );

  return (
    <div>
      <CheckBox label={mylabel} meta={meta} />
    </div>
  );
};

export default TermsCondBox;

TermsCondBox.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
};
