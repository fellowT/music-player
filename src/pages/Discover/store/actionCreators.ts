import * as actionTypes from './constants';
import { getBannerRequest } from '../../../api/discover';

export const changeBannerList = (data:any) => ({
  type: actionTypes.CHANGE_BANNER,
  data,
});
export const getBannerList = ():any => (dispatch:any) => {
  getBannerRequest().then((data:any) => {
    dispatch(changeBannerList(data.banners));
  }).catch(() => {
    console.log('轮播图数据传输错误');
  });
};
