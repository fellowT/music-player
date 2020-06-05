import React from 'react';
import { renderRoutes } from 'react-router-config';
import LayoutMenu from './menu';
import LayoutHeader from './header';
import LayoutFooter from './footer';
import styles from './style.module.scss';
import { RoutesType } from '../routes';
import MiniPlayer from '../components/mini-player';


interface PropsType {
  route: RoutesType
}
const Layout = (props: PropsType) => {
  const { route } = props;
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <LayoutMenu />
        <div className={styles.main}>
          <LayoutHeader />
          <div className={styles.content}>
            {renderRoutes(route.childrens)}
          </div>
        </div>
      </div>
      <LayoutFooter><MiniPlayer /></LayoutFooter>
    </div>
  );
};

export default Layout;
