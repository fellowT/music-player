import produce from 'immer';
import * as actionTypes from './constants';

export interface DiscoverStoreState{
  bannerList:any[]
}
const defaultState:DiscoverStoreState = {
  bannerList: [],
};
export default produce((state = defaultState, action):void => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      state.bannerList = action.data;
      break;
    default:
      return state;
  }
});
