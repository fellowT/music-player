
import React, { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';

interface PropsType {
  percent: number;
}
const PargressBar = ({ percent = 0 }: PropsType) => {
  const progressBar = useRef<HTMLDivElement>(null);
  const progress = useRef(null);
  const progressBtn = useRef(null);
  return (
    <div className={styles.wrap}>
      <div className={styles.barInner} ref={progressBar}>
        <div className={styles.progress} ref={progress} />
        <div className={styles.btnWrapper}>
          <div className={styles.progressBtn} ref={progressBtn} />
        </div>
      </div>
    </div>

  );
};
export default PargressBar;
