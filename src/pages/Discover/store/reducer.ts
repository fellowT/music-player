import produce from 'immer';
import * as actionTypes from './constants';

const defaultState = {
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
