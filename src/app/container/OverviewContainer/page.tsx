'use client';
import CountdownCircle from '@/app/component/CountdownCircle/page';
import { overview, tutotialStep } from '@/app/util/constants';
import Image from 'next/image';
import React, { useMemo, useRef, useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function OverviewContainer() {
  const [currentSlide, setCurrenSlide] = useState(0);
  const sliderRef = useRef<any>(null);

  const handleChangeSlide = (index: number) => {
    setCurrenSlide(index);
    sliderRef.current.slideTo(index, 2000, false);
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

  const listBenefit = useMemo(() => {
    const result = overview.find(
      (value: any) => value.key === currentSlide + 1,
    );
    return result;
  }, [currentSlide]);

  return (
    <section className="md:pt-[9.38rem] md:mb-[11.81rem] md:px-[4.11rem]">
      <p>Tổng quan page</p>
      <div className="flex md:ml-[2.12rem] justify-between">
        <div className="border-[0.375rem] rounded-3xl border-[#45DB84] md:h-[33.79838rem] md:pb-[2rem] md:pt-[2rem] md:pr-[1rem] md:w-full md:max-w-[57.6875rem]">
          <div className="font-svn500 text-[#2F9C01] text-[2.5rem] leading-[3rem]">
            Khám phá tiện ích
          </div>
          <div className="flex items-end pb-[2rem] h-full">
            <div className="overflow-hidden scale-x-[-1]">
              <Swiper
                cssMode
                loop
                onBeforeInit={swiper => {
                  sliderRef.current = swiper;
                }}
                slidesPerView={4}
                initialSlide={0}
                allowTouchMove={false}
                allowSlideNext
                onActiveIndexChange={swiper => {
                  setCurrenSlide(swiper.realIndex);
                }}
                spaceBetween={0}
                // autoplay={{
                //   // delay: 5000,
                //   disableOnInteraction: false,
                //   // reverseDirection: true,
                // }}
                pagination={false}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {overview.map((item: any, key: number) => (
                  <SwiperSlide key={key}>
                    <Image
                      src={item.image}
                      alt="overview1"
                      width={1000}
                      height={1000}
                      className="h-[15rem] w-[full] scale-x-[-1]"
                    />
                    <p className="scale-x-[-1]">{key + 1}</p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="flex">
              {overview.map((item: any, key: number) => {
                return (
                  <div key={key} className="flex items-center">
                    <CountdownCircle
                      onClick={() => handleChangeSlide(key)}
                      isAnimation={currentSlide === key}
                      hasBackGround={currentSlide > key}
                      small
                    >
                      0{item.key}
                    </CountdownCircle>
                    {key < overview.length - 1 && (
                      <span className="w-[0.5rem] md:w-[1.5rem] h-[1px] border-t-[1px] border-dashed border-[#788079]" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="border-[0.375rem] rounded-3xl border-[#45DB84] overflow-y-scroll no-scrollbar md:h-[47.9375rem] shadow-[0_4px_50px_0px_rgba(94, 207, 110, 0.15)]">
          <Image
            src={'/overview.jpg'}
            alt="overview"
            width={1000}
            height={1000}
            className="object-cover md:w-[23.0625rem] rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
