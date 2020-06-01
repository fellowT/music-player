// import { Redirect } from 'react-router-dom';
import Discover from '../pages/Discover';

interface RouteType {
  path:string;
  component:any;
  childrens?:any[];
  exact?:boolean;
  render?:any
}
const routes:RouteType[] = [
  {
    path: '/',
    component: Discover,
    childrens: [
      {
        path: '/',
        exact: true,
        // render: () => (
        //   // <Redirect to={"/discover"}/>
        // )
      },
    ],
  },
];

export default routes;
