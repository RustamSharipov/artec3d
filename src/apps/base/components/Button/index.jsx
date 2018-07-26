import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style.css';


const Button = ({ children, onClick, link }) => {
  return link
    ? (
      <Link
        to={link}
        className={styles.button}
        onClick={onClick}>
        {children}
      </Link>
    )
    : (
      <button
        className={styles.button}
        onClick={onClick}>
        {children}
      </button>
    );
}

export default Button;