import * as actionTypes from './constants';
import { getBannerRequest, getPlayListRequest, getNewsongRequest } from '../../../api/discover';

export const changeBannerList = (data:any) => ({
  type: actionTypes.CHANGE_BANNER,
  data,
});
export const changePlayList = (data:any) => ({
  type: actionTypes.PLAYLIST,
  data,
});
export const changeNewSong = (data:any) => ({
  type: actionTypes.NEWSONG,
  data,
});
export const getBannerList = ():any => (dispatch:any) => {
  getBannerRequest().then((data:any) => {
    dispatch(changeBannerList(data.banners));
  }).catch(() => {
    console.log('轮播图数据传输错误');
  });
};

export const getPlayList = ():any => (dispatch:any) => {
  getPlayListRequest().then((data:any) => {
    dispatch(changePlayList(data.result));
  }).catch(() => {
    console.log('推荐歌曲数据传输错误');
  });
};

export const getNewSong = ():any => (dispatch:any) => {
  getNewsongRequest().then((data:any) => {
    dispatch(changeNewSong(data.result));
  }).catch(() => {
    console.log('最新歌曲数据传输错误');
  });
};
