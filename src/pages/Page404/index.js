import React from 'react';
import styles from './Page404.module.css';
import notFoundImage from '../../assets/404.gif'; // Ruta a tu imagen

const Page404 = () => {
  return (
    <div className={styles.page404}>
      <img src={notFoundImage} alt="Error 404" className={styles.errorImage} />
      <h2>Error 404 - Página no encontrada</h2>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
    </div>
  );
};

export default Page404;
