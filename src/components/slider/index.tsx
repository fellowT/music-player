import React, { useState, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import styles from './style.scss';

const Slider = (props) => {
  const [sliderSwiper, setSliderSwiper] = useState(null);
  const { bannerList } = props;

  useEffect(() => {
    if (bannerList.length && !sliderSwiper) {
      console.log(123);

      let sliderSwiper = new Swiper('.slider-container', {
        loop: true,
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: { el: '.swiper-pagination' },
      });
      console.log(sliderSwiper);

      setSliderSwiper(sliderSwiper);
    }
  }, [bannerList.length, sliderSwiper]);

  return (
    <div className={styles.wrap}>
      <div className={`slider-container ${styles.container}`}>
        <div className="swiper-wrapper">
          {
            bannerList.map((slider, index) => (
              <div className={styles['swiper-slide']} key={index}>
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
