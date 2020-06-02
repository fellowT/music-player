import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Slider from '../../components/slider';
import * as actionTypes from './store/actionCreators';
import style from './style.scss';

const Discover = (props) => {
  const { bannerList } = props;
  const { getBannerDataDispatch } = props;
  useEffect(() => {
    getBannerDataDispatch();
  }, []);
  return (
    <div className={style.wrap}>
      <Slider bannerList={bannerList} />

    </div>
  );
};
// 映射 Redux 全局的 state 到组件的 props 上
const mapStateToProps = (state) => ({
  // 不要在这里将数据 toJS
  // 不然每次 diff 比对 props 的时候都是不一样的引用，还是导致不必要的重渲染，属于滥用 immutable
  bannerList: state.discover.bannerList,
});
// 映射 dispatch 到 props 上
const mapDispatchToProps = (dispatch) => ({
  getBannerDataDispatch() {
    dispatch(actionTypes.getBannerList());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Discover));
