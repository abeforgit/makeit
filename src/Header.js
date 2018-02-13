import React from 'react'
import { Route, Link } from 'react-router-dom'


const Header = () => (
    <div>
      <Link to="/" >Home</Link>
      <div>
        <Link to="/tracksubmit">Submit a track</Link>
        <Link to="/register">Create an account</Link>
        <Link to="/about">How it works</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/login">Sign in</Link>
      </div>
    </div>
);

export default Header