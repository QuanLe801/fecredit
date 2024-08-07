'use client';
import Image from 'next/image';
import React from 'react';

export default function CompetiorContainer() {
  return (
    <>
      <div className="mb-[3.13rem] flex mt-[4.31rem] mx-[0.62rem] md:mx-0 md:flex-row flex-col-reverse relative md:mt-[-9rem] md:items-end md:mb-[5rem]">
        <div className="md:me-[11.4rem]">
          <Image
            src={'/images/competior.jpg'}
            alt="competior"
            width={1000}
            height={1000}
            className="md:w-[39.5rem] md:h-[44.625rem] rounded-[1rem] md:rounded-e-3xl"
          />
        </div>
        <div className="md:w-full md:max-w-[42.8125rem]">
          <p className="font-svn600 leading-[1.3rem] md:text-[1rem] text-black3 mb-[0.88rem] md:mb-[1.5rem]">
            ĐỐI THỦ CẠNH TRANH CỦA FE CREDIT
          </p>
          <p className="font-svn600 text-[2rem] leading-[2.6rem] md:text-[3.125rem] md:leading-[4.0625rem] text-blackPrimary mb-[1.5rem] md:mb-0">
            FE CREDIT nghiên cứu về các đối thủ cạnh tranh trong ngành
          </p>
          <div className="flex md:mt-[1rem] mb-[1rem]">
            <Image
              src={'/arrow.svg'}
              alt="arrow"
              width={34}
              height={34}
              className="mr-[1rem] w-[2.125rem] h-[2.125rem] md:mr-[1.38rem]"
            />
            <p className="text-[0.875rem] leading-[1.4875rem] w-full md:max-w-[36.1875rem] md:text-[0.875rem] md:leading-[1.3125rem] text-black3 font-svn400">
              Đối thủ chính của FE CREDIT là các công ty tài chính khác như HD
              Saison, Home Credit, và các ngân hàng như Vietcombank,
              Techcombank, VPBank, v.v.
            </p>
          </div>
          <div className="flex md:mb-0 mb-[3.13rem]">
            <Image
              src={'/arrow.svg'}
              alt="arrow"
              width={34}
              height={34}
              className="mr-[1rem] w-[2.125rem] h-[2.125rem] md:mr-[1.38rem]"
            />
            <p className="text-[0.875rem] leading-[1.3125rem] md:text-[1.125rem] md:leading-[1.6875rem] text-black3 font-svn400">
              Đối thủ cạnh tranh của FE CREDIT cung cấp các sản phẩm tài chính
              tương tự như FE CREDIT, nhưng có thể có điểm khác biệt về lãi
              suất, hạn mức và quy trình xét duyệt.
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex justify-between md:ml-[6.24rem] items-center">
        <div className="md:mr-[3.13rem] md:w-full md:max-w-[48.1875rem] mx-[0.62rem] md:mx-0 mb-[2.37rem] md:mb-0">
          <Image
            src={'/quote.svg'}
            alt="quote"
            width={91}
            height={91}
            className="md:w-[5.6875rem] md:h-[5.6875rem] md:mb-[1rem]"
          />
          <p className=" md:ml-[2.62rem] font-svn600 text-[1.6875rem] md:text-[2.9375rem] text-blackPrimary">
            FE CREDIT cam kết cung cấp các sản phẩm tài chính với{' '}
            <span className="text-[#2F9C01]">lãi suất cạnh tranh</span> và
            <span className="text-[#2F9C01]">dịch vụ tốt nhất</span> để mang lại
            giá trị cao nhất cho khách hàng.
          </p>
        </div>
        <div>
          <Image
            src={'/images/competior-rightContent.jpg'}
            alt="competior"
            width={1000}
            height={1000}
            className="md:w-[41rem] md:h-[47.9375rem] w-[21.875rem] h-[27.25rem] bg-cover"
          />
        </div>
      </div>
    </>
  );
}
