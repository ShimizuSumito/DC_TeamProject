import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
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

  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/Timeline/Get`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched data:', data); // 取得したデータをコンソールに表示
        setTimeline(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  const handleSlideChange = async (location) => {
    try {
      console.log(location);
      const response = await fetch(`http://localhost:8080/Timeline/Find/location/${location}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTimeline(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
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
      onSlideChange={(swiper) => handleSlideChange(slides[swiper.realIndex])}
    >
      {slides.map((slideContent, index) => (
        <SwiperSlide key={index}>
          <div className="each-slide">
            <section className="timeline">
              <p className="city-name">{slideContent}</p>
              {timeline.map((item, itemIndex) => (
                <div className="timeline-item" key={itemIndex}>
                  <img src={`data:image/jpeg;base64,${item.image}`} alt="sampleImg" />
                  <div className="tag">
                    <span>場所：{item.location}</span>
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
  );
}
