import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import { FaTrash, FaEdit, FaPlay } from 'react-icons/fa';
import styles from './VideoCard.module.css';
import EditVideoModal from '../EditVideoModal';

const VideoCard = ({ video, categories }) => {
  const { id, title, videoUrl } = video;
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoUrl.split('v=')[1]}/hqdefault.jpg`;

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleDelete = () => {
    console.log(`Eliminando video con ID ${id}`);
    // Implementa lógica para eliminar el video aquí
  };

  return (
    <div className={styles['video-card']}>
      <img className={styles['video-image']} src={thumbnailUrl} alt={title} />
      <div className={styles['video-actions']}>
        <button onClick={openVideoModal} className={styles['play-button']}>
          <FaPlay />
        </button>
        <button onClick={handleDelete}>
          <FaTrash /> Borrar
        </button>
        <button onClick={openEditModal}>
          <FaEdit /> Editar
        </button>
      </div>

      <Modal
        isOpen={isVideoModalOpen}
        onRequestClose={closeVideoModal}
        className={styles['modal']}
        overlayClassName={styles['overlay']}
      >
        <button onClick={closeVideoModal} className={styles['close-button']}>
          Cerrar
        </button>
        <div className={styles['video-container']}>
          <ReactPlayer
            url={videoUrl}
            width='100%'
            height='100%'
            controls
            playing={isVideoModalOpen}
            className={styles['react-player']}
          />
        </div>
      </Modal>

      <EditVideoModal
        isOpen={isEditModalOpen}
        closeModal={closeEditModal}
        video={video}
        categories={categories}
      />
    </div>
  );
};

export default VideoCard;




