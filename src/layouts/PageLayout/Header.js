import React from 'react';
import HeaderNavLink from './components/HeaderNavLink';

const Header = () => (
  <ul className="nav nav-justified">
    <HeaderNavLink to="/">Home</HeaderNavLink>
    <HeaderNavLink to="/tracksubmit">Submit a track</HeaderNavLink>
    <HeaderNavLink to="/register">Create an account</HeaderNavLink>
    <HeaderNavLink to="/about">How it works</HeaderNavLink>
    <HeaderNavLink to="/pricing">Pricing</HeaderNavLink>
    <HeaderNavLink to="/login">Sign in</HeaderNavLink>
  </ul>
);

export default Header;
