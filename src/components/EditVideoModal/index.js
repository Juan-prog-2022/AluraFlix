import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './EditVideoModal.module.css';

const EditVideoModal = ({ isOpen, closeModal, video, categories }) => {
  const [formData, setFormData] = useState({
    title: video.title,
    category: video.category,
    imageUrl: video.imageUrl,
    videoUrl: video.videoUrl,
    description: video.description,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Implementa la lógica para guardar los cambios aquí
  };

  const handleReset = () => {
    setFormData({
      title: '',
      category: '',
      imageUrl: '',
      videoUrl: '',
      description: '',
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={styles['edit-modal']}
      overlayClassName={styles['edit-overlay']}
    >
      <h2>Editar Video</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Categoría:
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          URL de la Imagen:
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
          />
        </label>
        <label>
          URL del Video:
          <input
            type="text"
            name="videoUrl"
            value={formData.videoUrl}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Descripción:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="¿De qué se trata este video?"
          />
        </label>
        <button type="submit">Guardar</button>
        <button type="button" onClick={handleReset}>Limpiar</button>
      </form>
      <button onClick={closeModal}>Cerrar</button>
    </Modal>
  );
};

export default EditVideoModal;
