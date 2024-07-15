import React from 'react';
import styles from './Footer.module.css';
import icon from '../../assets/LogoMain.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={icon} alt="Icono" className={styles.icon} />
      <p>&copy; 2024 Created By Juan Quiroz</p>
    </footer>
  );
};

export default Footer;
