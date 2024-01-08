import React from 'react';
import styles from '../styles/navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navLogo}>MARIAM YUSUF</div>
        <div className={styles.resumeLink}>
          <a href="/path-to-resume" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;