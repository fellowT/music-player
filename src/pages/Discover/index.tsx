import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Slider from '../../components/slider';
import * as actionTypes from './store/actionCreators';
import styles from './style.module.scss';
import { IStoreState } from '../../store/type';

interface PropsType {
  bannerList:any[];
  getBannerDataDispatch():void
}
const Discover = (props:PropsType) => {
  const { bannerList } = props;
  const { getBannerDataDispatch } = props;
  useEffect(() => {
    getBannerDataDispatch();
  }, []);
  return (
    <div className={styles.wrap}>
      <Slider bannerList={bannerList} />
      <div className={styles.content}>
        <div className={styles.recommended}>
          <p className={styles.title}>推荐歌单</p>
          <ul>
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
        </div>
        <div className={styles.hot}>
          <p className={styles.title}>最新音乐</p>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state:IStoreState) => ({
  bannerList: state.discover.bannerList,
});
// 映射 dispatch 到 props 上
const mapDispatchToProps = (dispatch:Dispatch) => ({
  getBannerDataDispatch() {
    dispatch(actionTypes.getBannerList());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Discover));
