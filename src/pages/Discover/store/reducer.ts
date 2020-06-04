import produce from 'immer';
import * as actionTypes from './constants';

export interface DiscoverStoreState{
  bannerList:any[];
  playList:any[];
  newSong:any[];
}
const defaultState:DiscoverStoreState = {
  bannerList: [],
  playList: [],
  newSong: [],
};
export default produce((state = defaultState, action):void => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      state.bannerList = action.data;
      break;
    case actionTypes.PLAYLIST:
      state.playList = action.data;
      break;
    case actionTypes.NEWSONG:
      state.newSong = action.data;
      break;
    default:
      return state;
  }
});
