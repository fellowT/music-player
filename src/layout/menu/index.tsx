import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './style.module.scss';
import Icon from '../../components/icon';

const Menu = () => {
  const list:string[] = ['发现音乐', '私人FM', '最新视频'];
  return (
    <div className={style.menu}>
      <p className={style.title}>MUSIC PLAYER</p>
      <div className={style.list}>
        <p className={style.title}>推荐</p>
        <NavLink to="/discover" activeClassName={style.selected}>
          <Icon className={style.selected} iconClass="music" />
          <span> 发现音乐 </span>
        </NavLink>


      </div>
      <div className={style.list}>
        <p className={style.title}>我的音乐</p>
        {
          list.map((item) => <a key={item} className="item">{item}</a>)
        }

      </div>
    </div>
  );
};
export default Menu;
