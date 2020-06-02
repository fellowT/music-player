import React from 'react';
import { renderRoutes } from 'react-router-config';
import LayoutMenu from './menu';
import LayoutHeader from './header';
import LayoutFooter from './footer';
import style from './style.scss';
import { RoutesType } from '../routes';


interface PropsType {
  route: RoutesType
}
const Layout = (props: PropsType) => {
  const { route } = props;
  return (
    <div className={style.wrap}>
      <div className={style.container}>
        <LayoutMenu />
        <div className={style.main}>
          <LayoutHeader />
          <div className={style.content}>
            {renderRoutes(route.childrens)}
          </div>
        </div>
      </div>
      <LayoutFooter>1111</LayoutFooter>
    </div>
  );
};

export default Layout;
