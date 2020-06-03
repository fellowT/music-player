import axios from '../utils/axios';

// 获取banner
export const getBannerRequest = () => axios.get('/banner?type=0');

// 获取推荐歌单
export const getPlaylistRequest = () => axios.get('/personalized?limit=9');

// 获取推荐新音乐
export const getNewsongRequest = () => axios.get('/personalized/newsong');
