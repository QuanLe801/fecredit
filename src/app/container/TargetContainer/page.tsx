import Image from 'next/image';
import React from 'react';

export default function TargetContainer() {
  return (
    <section className="overflow-x-hidden flex md:flex-row flex-col-reverse md:justify-center md:items-center bg-[#FDFFEF] md:pt-[8.12rem] pt-[4.37rem]">
      <div className="flex md:mr-[6.56rem] -translate-x-[1.5rem]">
        <Image
          className="w-[10.5rem] h-[20.9375rem] md:w-[16rem] md:h-[32.0625rem] mt-[4.38rem] md:mt-[6.62rem] mr-[1.12rem] md:mr-[2.75rem]"
          src={'/images/target-small.jpg'}
          alt="target-small"
          width={310}
          height={646}
        />
        <Image
          className="w-[12.625rem] h-[26.375rem] md:w-[19.375rem] md:h-[40.375rem]"
          src={'/images/target-big.jpg'}
          alt="target-big"
          width={310}
          height={646}
        />
      </div>
      <div className="md:w-full md:max-w-[42.8125rem] px-[0.65rem] md:px-0 pb-[3.75rem] md:pb-0">
        <p className="font-svn600 text-[1rem] leading-[1.3rem] md:text-[1.125rem] md:leading-[1.4625rem] text-black3 mb-[0.88rem] md:mb-[1.5rem]">
          MỤC TIÊU DỰ ÁN
        </p>
        <p className="font-svn600 text-[2rem] leading-[2.6rem] md:text-[3.125rem] md:leading-[4.0625rem] text-blackPrimary">
          Giới thiệu ứng dụng, thúc đẩy khách hàng đăng ký và sử dụng app. Tăng
          khả năng tiếp cận và tương tác với khách hàng
        </p>
      </div>
    </section>
  );
}
