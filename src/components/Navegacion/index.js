import React from 'react';
import { FaHome, FaInfo, FaEnvelope, FaAd } from 'react-icons/fa';
import styles from './Navegacion.module.css';
import icon from '../../assets/LogoMain.png';
import { Link } from 'react-router-dom';

const Navegacion = () => {
  return (
    <nav className={styles.navbar}>
      <img src={icon} alt="Icono" className={styles.icon} />
      <ul className={styles.navLinks}>
        <li>
          <Link to="/" className={styles.navLink}>
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/agregar-video" className={styles.navLink}>
            <FaAd /> Agregar Video
          </Link>
        </li>
        <li>
          <Link to="/about" className={styles.navLink}>
            <FaInfo /> About
          </Link>
        </li>
        <li>
          <Link to="/contact" className={styles.navLink}>
            <FaEnvelope /> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navegacion;
