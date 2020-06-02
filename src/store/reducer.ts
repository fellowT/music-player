// 默认数据
import { combineReducers } from 'redux';
import { reducer as discoverReducer } from '../pages/Discover/store/index';

export default combineReducers({
  // 之后开发具体功能模块的时候添加 reducer
  discover: discoverReducer,
});
