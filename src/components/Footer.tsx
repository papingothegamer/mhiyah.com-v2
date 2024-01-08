// components/Footer.tsx
import React from 'react';
import styles from '../styles/footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Connect with Me</h3>
          <ul className={styles.socialIcons}>
            <li>
              <i className="bi-linkedin"></i>
              <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <i className="bi-twitter"></i>
              <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <i className="bi-tiktok"></i>
              <a href="https://www.tiktok.com/@yourtiktok" target="_blank" rel="noopener noreferrer">
                TikTok
              </a>
            </li>
            <li>
              <i className="bi-behance"></i>
              <a href="https://www.behance.net/yourbehance" target="_blank" rel="noopener noreferrer">
                Behance
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Contact Me</h3>
          <ul className={styles.contactList}>
            <li>
              <i className="bi-envelope"></i>
              <a href="mailto:your.email@example.com">Email</a>
            </li>
          </ul>
          <p>Phone: +123 456 789</p>
        </div>
      </div>
      <p className={styles.copyRight}>&copy; 2024 Your Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;