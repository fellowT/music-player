import React from 'react';
import style from './style.scss';

const Menu = () => {
  const list:string[] = ['发现音乐', '私人FM', '最新视频'];
  return (
    <div className={style.menu}>
      <p className={style.title}>MUSIC PLAYER</p>
      <ul className={style.list}>
        <p className={style.title}>推荐</p>
        {
          list.map((item) => <li key={item} className="item">{item}</li>)
        }

      </ul>
      <ul className={style.list}>
        <p className={style.title}>我的音乐</p>
        {
          list.map((item) => <li key={item} className="item">{item}</li>)
        }

      </ul>
    </div>
  );
};
export default Menu;
