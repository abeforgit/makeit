import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Header.style.css';
import Logo from './Logo';

const Header = () => (
  <div className={styles.header}>
    <Link to="/" className={styles.homelink}>
      <Logo alt="Home" />
    </Link>

    <div className={styles.otherlinks}>
      <Link to="/tracksubmit" className={styles.link}>
        Submit a track
      </Link>
      <Link to="/register" className={styles.link}>
        Create an account
      </Link>
      <Link to="/about" className={styles.link}>
        How it works
      </Link>
      <Link to="/pricing" className={styles.link}>
        Pricing
      </Link>
      <Link to="/login" className={styles.link}>
        Sign in
      </Link>
    </div>
  </div>
);

export default Header;
