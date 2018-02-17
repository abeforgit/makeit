import React from 'react';
import PropTypes from 'prop-types'
import CheckBox from './CheckBox';

const EmailSubBox = ({ input, meta }) => {
  const mylabel = (
    <span>
      I'd like to receive news, promotions, and updates via email about
      ViberMusic and its partners. You can unsubscribe anytime
    </span>
  );
  return (
    <div>
      <CheckBox input={input} label={mylabel} meta={meta} />
    </div>
  );
};

export default EmailSubBox;

EmailSubBox.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
};
