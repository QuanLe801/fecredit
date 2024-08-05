import Image from 'next/image';
import React from 'react';

export default function IntroContainer() {
  return (
    <section className="flex pt-[12.25rem]">
      <div className="ml-[6.24rem]">
        <p className="font-svn600 text-[1.125rem] leading-[1.4625rem] text-black3">
          THỰC TRẠNG
        </p>
        <p className="font-svn600 text-[3.125rem] leading-[4.0625rem] text-blackPrimary mb-[1.5rem]">
          Công ty tài chính tiêu dùng <br /> lớn nhất tại Việt Nam.
        </p>
        <p className="font-svn400 text-[1.125rem] leading-[1.4825rem] text-black3 mb-[4.5rem]">
          FE CREDIT đang nỗ lực để cải thiện chất lượng sản phẩm và dịch vụ của{' '}
          <br />
          mình, tăng cường sự hiệu quả nâng cao trải nghiệm khách hàng.
        </p>
        <div>
          <div className="introGgroup text-black3 hover:text-[white] hover:font-[700] hover:bg-gradient-to-b from-[#45DB84] to-[#CBF542] flex flex-col justify-center items-center w-[20rem] h-[20rem] rounded-[17.75rem] bg-[#FDFFEF] cursor-pointer">
            <div className="relative flex font-svn600 pb-[0.8rem]">
              <p className="after:content-['+'] after:absolute after:ml-[0.4rem] after:text-[2.625rem] after:top-[-1.7rem] text-[4.5rem] leading-[6.75rem]">
                13
              </p>
              <span className="mb-[1.2rem] self-end text-[1.375rem] ml-[1.0875rem]">
                triệu
              </span>
            </div>

            <p className="text-center introGroup>&:text-[white] text-black3 text-[1.5rem] font-[600] leading-[1.95rem]">
              Khách hàng tại <br /> Việt Nam
            </p>
          </div>
          <div>
            <p>Cạnh tranh khốc liệt với nhiều cty tài chính</p>
          </div>
          <div>
            <p>Cung cấp dịch vụ tiêu dùng đa dạng</p>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={'/images/intro-rightContent.png'}
          alt="intro-rightContent"
          width={1200}
          height={1200}
          className="w-[46.25rem] h-[41.5625rem] bg-contain"
        />
      </div>
    </section>
  );
}
