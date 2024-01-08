// components/PortfolioHeader.tsx
import React from 'react';
import styles from '../styles/header.module.css';

interface HeaderProps {
  headerText: string;
  imageUrl: string;
}

const Header: React.FC<HeaderProps> = ({ headerText, imageUrl }) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerText}>
        <h1>{headerText}</h1>
        <p>Your tagline or additional information</p>
      </div>
      <div className={styles.headerImage}>
        <img src={imageUrl} alt="Profile" />
      </div>
    </div>
  );
};

export default Header;