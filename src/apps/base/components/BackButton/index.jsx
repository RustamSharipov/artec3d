import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style.css';


const BackButton = ({ children, link }) => {
  return (
    <Link to={link} className={styles.backButton}>← {children}</Link>
  );
};

export default BackButton;