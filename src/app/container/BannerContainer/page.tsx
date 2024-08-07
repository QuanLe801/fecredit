import Image from 'next/image';
import React from 'react';

export default function BannerContainer() {
  return (
    <section className="pt-[6.5rem] md:pt-[11.2rem] md:pb-[9.25rem] flex flex-col-reverse md:relative bg-[url('/images/bg-banner.jpg')] bg-[top_center] bg-cover bg-no-repeat">
      <div className="md:absolute top-[7.13rem] right-0">
        <Image
          src={'/images/banner.png'}
          alt="banner"
          width={1014.055}
          height={767.247}
          className="md:w-[63.37rem] md:h-[46rem] w-[26.34119rem] h-[22.23119rem] bg-cover object-contain"
        />
      </div>
      <div className="md:ml-[7.56rem] w-full md:max-w-[50.25rem] md:px-0 px-[0.62rem] ">
        <p className="font-svn500 text-[1rem] leading-[1.5rem] md:text-2xl md:leading-[2.25rem] text-greenLight uppercase md:mb-4">
          FE ONLINE
        </p>
        <h1 className="font-svn800 text-greenBold md:text-[4.0625rem] md:leading-[5.28125rem] text-[1.6875rem] leading-[2.53125rem]">
          FE - Ứng dụng tài chính. <br className="block md:hidden" /> Trải
          nghiệm tuyệt đỉnh
        </h1>
        <section className="grid md:max-w-[35rem] grid-rows-2 grid-cols-2 gap-x-[1.37rem] md:gap-x-[3.75rem] mt-[1.5rem] md:mt-[4.06rem]">
          <div className="order-1">
            <p className="font-svn500 md:text-black1 text-black0 text-[0.75rem] leading-[1.375rem] md:text-[0.825rem] uppercase mb-2">
              Khách hàng
            </p>
            <p className="font-svn500 text-black2 md:text-xl md:leading-[1.65625rem] text-[0.875rem] leading-[1.3125rem]">
              Công ty Tài chính TNHH <br /> MTV FE Credit
            </p>
          </div>
          <div className="order-3 md:order-2">
            <p className="font-svn500 md:text-black1 text-black0 text-[0.75rem] leading-[1.375rem] md:text-[0.825rem] uppercase mb-2">
              thời gian
            </p>
            <p className="font-svn500 text-black2 md:text-xl md:leading-[1.65625rem] text-[0.875rem] leading-[1.3125rem]">
              19/10/2022
            </p>
          </div>
          <div className="order-2 md:order-3">
            <p className="font-svn500 md:text-black1 text-black0 text-[0.75rem] leading-[1.375rem] md:text-[0.825rem] uppercase mb-2">
              dịch vụ
            </p>
            <p className="font-svn500 text-black2 md:text-xl md:leading-[1.65625rem] text-[0.875rem] leading-[1.3125rem]">
              UI/UX Design
            </p>
            <p className="font-svn500 text-black2 md:text-xl md:leading-[1.65625rem] text-[0.875rem] leading-[1.3125rem]">
              Development
            </p>
          </div>
          <div className="order-4">
            <p className="font-svn500 md:text-black1 text-black0 text-[0.75rem] leading-[1.375rem] md:text-[0.825rem] uppercase mb-2">
              thành viên
            </p>
            <p className="font-svn500 text-black2 md:text-xl md:leading-[1.65625rem] text-[0.875rem] leading-[1.3125rem]">
              Xuân Trinh
            </p>
            <p className="font-svn500 text-black2 md:text-xl md:leading-[1.65625rem] text-[0.875rem] leading-[1.3125rem]">
              Trang Nguyễn
            </p>
            <p className="font-svn500 text-black2 md:text-xl md:leading-[1.65625rem] text-[0.875rem] leading-[1.3125rem]">
              Chương phạm
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
