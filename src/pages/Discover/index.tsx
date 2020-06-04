import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Slider from '../../components/slider';
import * as actionTypes from './store/actionCreators';
import styles from './style.module.scss';
import { IStoreState } from '../../store/type';
import Icon from '../../components/icon';
import { transformDuration } from '../../utils';

interface PropsType {
  bannerList:any[];
  playList:any[];
  newSong:any[];
  getBannerDataDispatch():void
  getPlayListDataDispatch():void
  getNewSongDataDispatch():void
}
const Discover = (props:PropsType) => {
  const { bannerList, playList, newSong } = props;
  const { getBannerDataDispatch, getPlayListDataDispatch, getNewSongDataDispatch } = props;
  const [hoverMusic, setHoverMusic] = useState<number>(0);
  useEffect(() => {
    getBannerDataDispatch();
    getPlayListDataDispatch();
    getNewSongDataDispatch();
  }, []);
  return (
    <div className={styles.wrap}>
      <Slider bannerList={bannerList} />
      <div className={styles.content}>
        <div className={styles.recommended}>
          <p className={styles.title}>推荐歌单</p>
          <ul className={styles.list}>
            {playList.map((item) => (
              <li key={item.id}>
                <img className={styles.img} src={item.picUrl} alt="" />
                <p className={styles.name}>{item.name}</p>
              </li>
            ))}

          </ul>
        </div>
        <div className={styles.newsong}>
          <p className={styles.title}>最新音乐</p>
          <ul className={styles.list}>
            {
              newSong.map((item) => (
                <li key={item.id} className={styles.item} onMouseLeave={() => setHoverMusic(0)} onMouseMove={() => setHoverMusic(item.id)}>
                  <img className={styles.img} src={item.picUrl} alt="" />
                  <div className={styles.info}>
                    <p>{item.name}</p>
                    <span>{item.song.artists[0].name}</span>
                  </div>
                  {
                    hoverMusic === item.id
                      ? <Icon className={styles.play} size="20px" iconClass="play" />
                      : <div className={styles.play} />

                  }
                  <span className={styles.time}>{transformDuration(item.song.duration / 1000)}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state:IStoreState) => ({
  bannerList: state.discover.bannerList,
  playList: state.discover.playList,
  newSong: state.discover.newSong,
});
// 映射 dispatch 到 props 上
const mapDispatchToProps = (dispatch:Dispatch) => ({
  getBannerDataDispatch() {
    dispatch(actionTypes.getBannerList());
  },
  getPlayListDataDispatch() {
    dispatch(actionTypes.getPlayList());
  },
  getNewSongDataDispatch() {
    dispatch(actionTypes.getNewSong());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Discover));
