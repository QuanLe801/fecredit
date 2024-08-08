'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import CountdownCircle from '@/app/component/CountdownCircle/page';
import Image from 'next/image';
import { tutotialStep } from '@/app/util/constants';
import { useInView } from 'react-intersection-observer';

export default function ResultContainer() {
  const [count, setCount] = useState<{
    agency: number;
    wareHouse: number;
    province: number;
  }>({
    agency: 827000,
    wareHouse: 573000,
    province: 424000,
  });

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const [currentSlide, setCurrenSlide] = useState(0);
  const sliderRef = useRef<any>(null);

  const handleChangeSlide = (index: number) => {
    setCurrenSlide(index);
    sliderRef.current.slideToLoop(index, 500, false);
  };

  useEffect(() => {
    if (!inView) return;
    // Interval for agency counter
    const intervalId1 = setInterval(() => {
      setCount(prevCount => {
        if (prevCount.agency >= 829290) {
          clearInterval(intervalId1);
          return prevCount;
        }
        return { ...prevCount, agency: prevCount.agency + 1 };
      });
    }, 0.01);

    // Interval for wareHouse counter
    const intervalId2 = setInterval(() => {
      setCount(prevCount => {
        if (prevCount.wareHouse >= 575523) {
          clearInterval(intervalId2);
          return prevCount;
        }
        return { ...prevCount, wareHouse: prevCount.wareHouse + 1 };
      });
    }, 0.01);

    // Interval for province counter
    const intervalId3 = setInterval(() => {
      setCount(prevCount => {
        if (prevCount.province >= 426281) {
          clearInterval(intervalId3);
          return prevCount;
        }
        return { ...prevCount, province: prevCount.province + 1 };
      });
    }, 0.01);

    // Cleanup the intervals on component unmount
    return () => {
      clearInterval(intervalId1);
      clearInterval(intervalId2);
      clearInterval(intervalId3);
    };
  }, [inView]);

  const formatNumber = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // const handleNext = () => {
  //   if (currentSlide < 4) {
  //     setCurrenSlide(currentSlide + 1);
  //   }
  // };

  // const handlePrevious = () => {
  //   if (currentSlide > 0) {
  //     setCurrenSlide(currentSlide - 1);
  //   }
  // };

  const SlideDetail = ({
    step,
    title,
    description,
  }: {
    step: string;
    title: string;
    description: string;
  }) => {
    return (
      <div className="flex items-center">
        <Image
          src={'/tutorial.jpg'}
          alt="tutorial"
          width={1000}
          height={1000}
          className="md:w-[15.125rem] md:h-[32.9375rem] w-[4rem] h-[8rem]"
        />
        <div className="ml-[1rem] md:ml-[8.31rem]">
          <p className="text-[0.5rem] leading-[1rem] md:text-[1.5rem] md:leading-[1.8rem] font-svn500 text-[#788079]">
            {step}
          </p>
          <p className="w-full max-w-[7rem] md:max-w-full my-[0.5rem] md:my-[1.56rem] text-blackPrimary font-svn500 text-[1rem] leading-[1.1rem] md:text-[3.75rem] md:leading-[4.5rem]">
            {title}
          </p>
          <p className="text-[0.35rem] leading-[0.5rem] md:text-[1.125rem] md:leading-[1.575rem] text-[#2E332E] font-svn400">
            {description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="px-[0.62rem] md:px-[6.2rem] pt-[4.37rem] pb-[4.5] md:pt-[8.75rem] md:pb-[7.25rem] bg-[#FDFFEF]">
      <div className="md:flex justify-between md:pb-[3.88rem] pb-[1.5rem]">
        <p className="mb-[1rem] md:mb-0 font-svn600 text-blackPrimary leading-[2.6rem] text-[2rem] md:leading-[5.2rem] md:text-[4rem]">
          Kết quả dự án
        </p>
        <p className="font-svn400 text-blackPrimary leading-[1.3125rem] text-[0.875rem] md:leading-[1.9125rem] md:text-[1.125rem] w-full max-w-[40.5625rem] align-bottom self-center">
          Sau khi phân tích các vấn đề thực trạng của FE CREDIT và xây dựng hệ
          thống các quy tắc chung chúng tôi đã hoàn thiện được ý tưởng cho
          website
        </p>
      </div>
      <div className="pb-[1.06rem] w-full max-h-[13.5rem] md:max-h-full customSlider border-[0.31rem] md:border-[0.81rem] border-[#E8F3E5] rounded-[2rem] md:px-[4rem] pt-[1.06rem] px-[0.69rem] md:px-0 md:pt-[5.19rem] md:pb-[4.44rem] bg-[white] mb-[5.81rem]">
        <p className="pb-[1rem] font-svn500 text-[0.75rem] leading-[1rem] md:text-[2.8125rem] md:leading-[3.65625rem] text-[#2F9C01] md:pb-[3.5rem]">
          Hướng dẫn sử dụng
        </p>
        <div className="flex items-center">
          <div className="md:pl-[0.81rem] pr-[2rem] md:pr-[11.94rem]">
            {tutotialStep.map((item: any, key: number) => {
              return (
                <div key={key} className="flex flex-col items-center">
                  <CountdownCircle
                    onClick={() => handleChangeSlide(key)}
                    isAnimation={currentSlide === key}
                    hasBackGround={currentSlide > key}
                  >
                    0{item.step}
                  </CountdownCircle>
                  {key < tutotialStep.length - 1 && (
                    <span className="h-[0.5rem] md:h-[3.21606rem] w-[1px] my-[0.01rem] md:my-[0.75rem] border-l-[1px] border-dashed border-[#788079]" />
                  )}
                </div>
              );
            })}
          </div>
          <div className="overflow-hidden">
            <Swiper
              // loop
              onBeforeInit={swiper => {
                sliderRef.current = swiper;
              }}
              allowTouchMove={false}
              allowSlideNext
              initialSlide={currentSlide}
              onActiveIndexChange={swiper => {
                setCurrenSlide(swiper.realIndex);
              }}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
              }}
              pagination={false}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {tutotialStep.map((item: any, key: number) => (
                <SwiperSlide key={key}>
                  <SlideDetail
                    step={item.stepTitle}
                    title={item.title}
                    description={item.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="md:flex pb-[4.5rem] md:pb-0">
        <div className="md:mr-[7.25rem] md:mt-[8.63rem]">
          <div className="font-svn600 text-[1.25rem] leading-[1.625rem] md:text-[3.125rem] md:leading-[4.0625rem] text-blackPrimary w-full max-w-[56.125rem] ">
            Để sử dụng app Fe online quý khách hàng thực hiện{' '}
            <span className="text-[#2F9C01]">4 bước vô cùng đơn giản</span>{' '}
            thuận tiện và nhanh chóng
          </div>
          <div className="flex md:block mt-[2rem] md:mt-0">
            <div
              className="ml-[0.72rem] md:ml-0 md:grid md:grid-cols-3 md:mt-[6.41rem] md:w-full md:max-w-[56.125rem] mr-[3.28rem] md:mr-0"
              ref={ref}
            >
              <div className="md:mr-[5rem] mb-[2.12rem] md:mb-0  mt-[1.5rem] md:mt-0">
                <p className="font-svn600 leading-[1.8rem] text-[1.5rem] md:leading-[4.65rem] md:text-[3.875rem] text-[#2F9C01] mb-[0.5rem] md:mb-[1.7rem]">
                  {formatNumber(count.agency)}
                </p>
                <p className="font-svn500 md:text-[1.375rem] md:leading-[2.0625rem] text-[0.75rem] leading-[1.05rem] text-[#2E332E]">
                  Lượt tải ứng dụng
                </p>
              </div>
              <div className="md:mr-[5rem]  mb-[2.12rem] md:mb-0">
                <p className="font-svn600 leading-[1.8rem] text-[1.5rem] md:leading-[4.65rem] md:text-[3.875rem] text-[#2F9C01] mb-[0.5rem] md:mb-[1.7rem]">
                  {formatNumber(count.wareHouse)}
                </p>
                <p className="font-svn500 md:text-[1.375rem] md:leading-[2.0625rem] text-[0.75rem] leading-[1.05rem] text-[#2E332E]">
                  Lượt đăng ký ứng dụng
                </p>
              </div>
              <div className=" mb-[2.12rem] md:mb-0">
                <p className="font-svn600 leading-[1.8rem] text-[1.5rem] md:leading-[4.65rem] md:text-[3.875rem] text-[#2F9C01] mb-[0.5rem] md:mb-[1.7rem]">
                  {formatNumber(count.province)}
                </p>
                <p className="font-svn500 md:text-[1.375rem] md:leading-[2.0625rem] text-[0.75rem] leading-[1.05rem] text-[#2E332E]">
                  Hợp đồng điện tử đã đăng ký
                </p>
              </div>
            </div>
            <div className="block md:hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-[12.0625rem] h-[24.1875rem] object-cover rounded-2xl"
                width={193}
                height={387}
              >
                <source src={'/videos/tutorial.mp4'} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-[24.3125rem] h-[48.9375rem] md:w-[24.3125rem] md:h-[48.9375rem] object-cover rounded-2xl"
            width={389}
            height={783}
          >
            <source src={'/videos/tutorial.mp4'} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
