import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const HeaderNavLink = props => (
  <li className="nav-item">
    <NavLink
      to={props.to}
      className="HeaderNavLink nav-link"
      activeClassName="HeaderNav-active"
    >
      {props.children}
    </NavLink>
  </li>
);

HeaderNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default HeaderNavLink;
