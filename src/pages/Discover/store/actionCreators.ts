import * as actionTypes from './constants';
import { getBannerRequest } from '../../../api/discover';

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data,
});
export const getBannerList = () => (dispatch) => {
  getBannerRequest().then((data) => {
    dispatch(changeBannerList(data.banners));
  }).catch(() => {
    console.log('轮播图数据传输错误');
  });
};
