import Image from 'next/image';
import React from 'react';

export default function IntroContainer() {
  return (
    <section className="md:flex md:pt-[12.25rem] pt-[5.38rem] md:pb-[9.62rem] pb-[4.31rem]">
      <div className="md:ml-[6.24rem] md:mr-[2.38rem] px-[0.62rem] md:w-full md:max-w-[42.8125rem] mb-[2.81rem] md:mb-0">
        <p className="font-svn600 md:text-[1.125rem] md:leading-[1.4625rem] text-[1rem] leading-[1.3rem] text-black3">
          THỰC TRẠNG
        </p>
        <p className="font-svn600 md:text-[3.125rem] md:leading-[4.0625rem] text-[2rem] leading-[2.6rem] text-blackPrimary mb-[1.5rem]">
          Công ty tài chính tiêu dùng <br className="hidden md:block" /> lớn
          nhất tại Việt Nam.
        </p>
        <p className="font-svn400 text-[0.875rem] leading-[1.3125rem] md:text-[1.125rem] md:leading-[1.4825rem] text-black3 mb-[4.5rem]">
          FE CREDIT đang nỗ lực để cải thiện chất lượng sản phẩm và dịch vụ của{' '}
          <br className="hidden md:block" />
          mình, tăng cường sự hiệu quả nâng cao trải nghiệm khách hàng.
        </p>
        <div className="md:flex flex-wrap relative">
          <div className="group text-black3 hover:text-[white] hover:font-[700] hover:bg-gradient-to-bl from-[#45db84f1] to-[#cbf542ef] flex flex-col justify-center items-center md:w-[20rem] md:h-[20rem] h-[12.3125rem] w-[12.3125rem] rounded-[17.75rem] bg-[#FDFFEF] cursor-pointer">
            <div className="flex font-svn600 md:pb-[0.8rem] relative">
              <p className="after:content-['+'] after:absolute md:after:ml-[0.4rem] after:ml-[0.25rem] md:after:text-[2.625rem] after:text-[2rem] md:after:top-[-1.7rem] after:top-[-1.7rem] text-[3.25rem] leading-[4.875rem] md:text-[4.5rem] md:leading-[6.75rem]">
                13
              </p>
              <span className="md:mb-[1.2rem] mb-[0.95rem] self-end text-[1.125rem] ml-[0.65rem] md:ml-[1.0875rem] md:text-[1.375rem]">
                triệu
              </span>
            </div>

            <p className="px-[2rem] md:px-0 text-center group-hover:text-[white] text-black3 font-[600] text-[1.125rem] leading-[1.4625rem] md:text-[1.5rem] md:leading-[1.95rem]">
              Khách hàng tại <br className="hidden md:block" /> Việt Nam
            </p>
          </div>
          <div className="absolute md:top-0 top-[10.69rem] right-0 md:relative md:ml-[2.94rem] md:mt-[9.94rem] group hover:font-[700] hover:bg-gradient-to-bl from-[#45db84f1] to-[#cbf542ef] flex flex-col justify-center items-center md:w-[17.75rem] md:h-[17.75rem] w-[12.125rem] h-[12.125rem] rounded-[17.75rem] bg-[#FDFFEF] cursor-pointer">
            <p className="px-[1rem] md:px-0 text-center group-hover:text-[white] text-black3 font-[600] text-[1.125rem] leading-[1.4625rem] md:text-[1.5rem] md:leading-[1.95rem]">
              Cạnh tranh khốc <br className="hidden md:block" /> liệt với nhiều
              cty <br className="hidden md:block" /> tài chính
            </p>
          </div>
          <div className="relative mt-[8.5rem] md:mt-[-1.88rem] md:ml-[8.94rem] group hover:font-[700] hover:bg-gradient-to-bl from-[#45db84f1] to-[#cbf542ef] flex flex-col justify-center items-center md:w-[14.9375rem] md:h-[14.9375rem] w-[10.875rem] h-[10.875rem] rounded-[17.75rem] bg-[#FDFFEF] cursor-pointer">
            <p className="px-[1.5rem] md:px-0 text-center group-hover:text-[white] text-black3 font-[600] text-[1.125rem] leading-[1.4625rem] md:text-[1.5rem] md:leading-[1.95rem]">
              Cung cấp dịch <br className="hidden md:block" /> vụ tiêu dùng{' '}
              <br className="hidden md:block" /> đa dạng
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative">
          <Image
            src={'/images/intro-rightContent.png'}
            alt="intro-rightContent"
            width={1200}
            height={1200}
            className="z-[1] relative md:w-[46.25rem] md:h-[41.5625rem] bg-contain object-cover"
          />
          <div className="absolute top-[0.16rem] left-[1.33rem] md:left-[3rem] md:top-[1.1rem] bg-gradient-to-t from-[#45db8443] to-[#cbf54240] rounded-[50%] w-[20.4rem] h-[20.4rem] md:w-[40.375rem] md:h-[40.375rem]" />
        </div>
        <div className="mt-[4.25rem] md:mt-[2.58rem]">
          <Image
            src={'/images/logo-fe.png'}
            alt="intro-rightContent"
            width={1200}
            height={1200}
            className="relative w-[17.3125rem] md:w-[31.6875rem] md:h-[16.625rem] bg-contain object-cover"
          />
        </div>
      </div>
    </section>
  );
}
