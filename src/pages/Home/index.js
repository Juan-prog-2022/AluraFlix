import React from 'react';
import VideoCard from '../../components/VideoCard';
import videosData from '../../data/db-api.json';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.videoCardContainer}>
      {videosData.videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default Home;
