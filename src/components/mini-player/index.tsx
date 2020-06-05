import React, { useState } from 'react';
import styles from './style.module.scss';
import Icon from '../icon';

const MiniPlayer = () => {
  const [play, setPlay] = useState<Boolean>(false);
  return (
    <div className={styles.player}>
      <div className={styles.btns}>
        <Icon className="pointer" iconClass="prev-music" />
        <div className={`pointer ${styles.playBtn}`}><Icon className={styles.playIcon} iconClass="play" /></div>
        <Icon className="pointer" iconClass="next-music" />
      </div>
      <div className={styles.play}>
        <img src="" alt="" />
        <div className={styles.playInfo}>
          <p>
            <span className={styles.songname}>Woman Like a man</span>
            <span className={styles.singer}>刘雨欣</span>
          </p>
          <div className={styles.progressBar} />
        </div>
      </div>
      <div className={styles.ctrl}>
        <Icon iconClass="collect" />
        <Icon iconClass="sound" />
      </div>
    </div>
  );
};


export default MiniPlayer;
