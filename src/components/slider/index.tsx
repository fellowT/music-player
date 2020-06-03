import React, { useState, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import './index.scss';
import styles from './style.module.scss';

interface PropsType {
  bannerList:any[]
}
const Slider = (props:PropsType) => {
  const [sliderSwiper, setSliderSwiper] = useState<Swiper | null>(null);
  const { bannerList } = props;

  useEffect(() => {
    if (bannerList.length && !sliderSwiper) {
      let swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        pagination: { el: '.swiper-pagination' },
      });
      setSliderSwiper(swiper);
    }
  }, [bannerList.length, sliderSwiper]);

  return (
    <div className={styles.wrap}>
      <div className={`swiper-container ${styles.container}`}>
        <div className="swiper-wrapper">
          {
            bannerList.map((slider) => (
              <div className="swiper-slide" key={slider.imageUrl}>
                <div className={styles['slider-nav']}>
                  <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
                </div>
              </div>
            ))
          }
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>

  );
};
export default Slider;
