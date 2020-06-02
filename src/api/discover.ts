import axios from '../utils/axios';


export const getBannerRequest = () => axios.get('/banner?type=0');
