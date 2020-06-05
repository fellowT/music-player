
import React from 'react';
import styles from './style.module.scss';

const PargressBar = () => (
  <div className={styles.barInner}>
    <div className={styles.progress} />
    <div className={styles.btnWrapper}>
      <div className={styles.btn} />
    </div>
  </div>
);
export default PargressBar;
