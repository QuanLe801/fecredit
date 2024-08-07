'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import './styles.css';

const totalSlide = [1, 2, 3, 4];

export default function ResultContainer() {
  const [currentSlide, setCurrenSlide] = useState(0);
  const sliderRef = useRef<any>(null);

  const handleChangeSlide = (index: number) => {
    setCurrenSlide(index - 1);
    sliderRef.current.swiper.slideTo(index - 1);
  };

  const handleNext = () => {
    if (currentSlide < 4) {
      setCurrenSlide(currentSlide + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrenSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    sliderRef.current.swiper.slideTo(currentSlide, 500, false);
  }, [currentSlide]);

  return (
    <section>
      <Swiper
        ref={sliderRef}
        style={{ height: '200px' }}
        initialSlide={currentSlide}
        onActiveIndexChange={swiper => {
          setCurrenSlide(swiper.activeIndex);
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      {totalSlide.map((item: any, key: number) => {
        return (
          <div key={key}>
            <div
              id="countdown"
              className="-rotate-90"
              onClick={() => handleChangeSlide(item)}
            >
              <div id="countdown-number" className="rotate-90">
                {item}
              </div>
              <svg>
                <circle
                  style={{
                    animation:
                      currentSlide === key
                        ? `countdown 2.5s linear forwards`
                        : 'none',
                    fill: currentSlide > key ? 'red' : 'none',
                  }}
                  r="18"
                  cx="20"
                  cy="20"
                />
              </svg>
            </div>
          </div>
        );
      })}
    </section>
  );
}
