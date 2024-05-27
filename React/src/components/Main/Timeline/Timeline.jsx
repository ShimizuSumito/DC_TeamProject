import "./Timeline.css";
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import sampleImg from '././../../../commons/img/notclothes.png';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Timeline() {
  const slides = [
    '札幌',
    '仙台',
    '東京',
    '長野',
    '名古屋',
    '大阪',
    '広島',
    '福岡',
    '沖縄'
  ];
  const timeline=[
    {
      city: '東京',
      situation: '仕事',
      content: '今日は仕事が忙しい日でした。今日は仕事が忙しい日でした。今日は仕事が忙しい日でした。今日は仕事が忙しい日でした。今日は仕事が忙しい日でした。今日は仕事が忙しい日でした。今日は仕事が忙しい日でした。今日は仕事が忙しい日でした。今日は仕事が忙しい日でした。今日は仕事が忙しい日でした。今日は仕事が忙しい日でした。',
      img: sampleImg,
    },
    {
      city: '東京',
      situation: '仕事',
      content: '今日は仕事が忙しい日でした。',
      img: sampleImg,
    },
        {
      city: '東京',
      situation: '仕事',
      content: '今日は仕事が忙しい日でした。',
      img: sampleImg,
    }
  ];

  useEffect(() => {
    const handleSlideChange = () => {
      window.scrollTo(0, 0);
    };

    const swiperEl = document.querySelector('.mySwiper').swiper;
    swiperEl.on('slideChange', handleSlideChange);

    return () => {
      swiperEl.off('slideChange', handleSlideChange);
    };
  }, []);

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={index}>
            <div className="each-slide">
              <section className="timeline">
                <p className="city-name">{slideContent}</p>
                {timeline.map((item, index) => (

                  <div className="timeline-item" key={index}>
                    <img src={item.img} alt="sampleImg" />
                    <div className="tag">
                        <span>場所：{item.city}</span>
                        <span>シチュエーション：{item.situation}</span>
                    </div>
                    <div className="timeline-content">{item.content}</div>
                  </div>
                ))}
              </section>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
