import React, { useState } from 'react';
import styles from './style.module.scss';
import Icon from '../../components/icon';

const Header = () => {
  const [search, setSearch] = useState<string>('');
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Icon className={styles.leftIcon} iconClass="left" />
        <Icon className={styles.rightIcon} iconClass="left" />
        <Icon className={styles.refreshIcon} iconClass="refresh" />

        <div className={styles.search}>
          <input type="text" value={search} id="" />
          <Icon className={styles.searchIcon} iconClass="search" />
        </div>
      </div>
      <div className={styles.right}>
        <span className={styles.name}>蜡笔小新</span>
      </div>
    </div>

  );
};
export default Header;
