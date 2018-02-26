import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../mockup_logo.png';

const Logo = props => {
  return <img src={logo} alt={props.alt} />;
};

Logo.propTypes = {
  alt: PropTypes.string.isRequired,
};

export default Logo;
