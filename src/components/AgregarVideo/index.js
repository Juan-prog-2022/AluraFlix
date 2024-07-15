import React, { useState, useEffect } from 'react';
import ListaCategorias from '../ListaCategorias';
import axios from 'axios';
import styles from './AgregarVideo.module.css';

const AgregarVideo = ({ categorias }) => {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [urlImagen, setUrlImagen] = useState('');
  const [urlVideo, setUrlVideo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  useEffect(() => {
    // Aquí podrías mantener la lógica para obtener categorías si es necesario
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoVideo = {
      titulo,
      categoria,
      urlImagen,
      urlVideo,
      descripcion
    };

    // Aquí iría tu lógica para guardar el nuevo video usando Axios o fetch

    console.log('Video guardado', nuevoVideo);
    handleClear();
  };

  const handleClear = () => {
    setTitulo('');
    setCategoria('');
    setUrlImagen('');
    setUrlVideo('');
    setDescripcion('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h4>Crear Tarjeta</h4>
      <div>
        <label htmlFor="titulo">Título:</label>
        <input
          type="text"
          id="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </div>
      <ListaCategorias
        categorias={categorias}
        selectedCategoria={categoria}
        handleChange={(e) => setCategoria(e.target.value)}
      />
      <div>
        <label htmlFor="urlImagen">URL de la imagen:</label>
        <input
          type="text"
          id="urlImagen"
          value={urlImagen}
          onChange={(e) => setUrlImagen(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="urlVideo">Enlace del video:</label>
        <input
          type="text"
          id="urlVideo"
          value={urlVideo}
          onChange={(e) => setUrlVideo(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="descripcion">Descripción:</label>
        <textarea
          id="descripcion"
          value={descripcion}
          placeholder="¿De qué se trata este video?"
          onChange={(e) => setDescripcion(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Guardar Video</button>
      <button type="button" onClick={handleClear}>Limpiar</button>
    </form>
  );
};

export default AgregarVideo;







