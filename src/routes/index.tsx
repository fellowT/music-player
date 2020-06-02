import { Redirect } from 'react-router-dom';
import React from 'react';
import Discover from '../pages/Discover';
import Layout from '../layout';

export interface RoutesType {
  path:string;
  name?:string;
  component:any;
  childrens?:any[];
  exact?:boolean;
  render?():any;
}
const routes:RoutesType[] = [
  {
    path: '/',
    component: Layout,
    childrens: [
      {
        path: '/',
        name: '发现音乐',
        exact: true,
        render: () => (
          <Redirect to="/discover" />
        ),
      },
      {
        path: '/discover',
        component: Discover,
      },
    ],
  },
];

export default routes;
