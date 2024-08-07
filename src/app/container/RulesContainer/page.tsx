import Image from 'next/image';
import React from 'react';

export default function RulesContainer() {
  return (
    <>
      <section className="md:pb-[9.06rem] py-[4.38rem] bg-gradient-to-l from-[#45DB84] to-[#CBF542]">
        <p className="md:pl-[6.2rem] px-[0.65rem] md:px-0 md:text-[3.125rem] md:leading-[4.0625rem] font-svn600 text-[2rem] text-black3 leading-[2.6rem] md:pb-[6.13rem] pb-[2.5rem]">
          Quy tắc xây dựng <br className="hidden md:block" /> giao diện website
        </p>
        <div className="md:flex md:justify-between md:pl-[6.2rem]">
          <div className="px-[0.65rem] md:px-0 md:pr-[4.69rem]">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col md:flex-col-reverse md:w-full md:max-w-[15.8125rem]">
                <div className="md:pb-[1.38rem]">
                  <p className="md:pb-[0.62rem] md:text-[1.1875rem] md:leading-normal font-svn600 text-[1rem] text-black3 text-right pb-[0.75rem]">
                    Grid system
                  </p>
                  <p className="md:text-[1.125rem] md:leading-[1.6875rem] font-svn400 leading-[1.21875rem] text-[0.8125rem] text-blackPrimary text-opacity-80 text-right">
                    Với cấu trúc thông tin đã định, chúng tôi tiến hành xây dựng
                    grid các trang. Grid này cụ thể hoá việc sắp xếp các cột
                    theo kích thước PC và mobile
                  </p>
                </div>
                <Image
                  src={'/curved-arrow.svg'}
                  alt="curved arrow"
                  width={44}
                  height={44}
                  className="w-[2.75rem] h-[2.75rem] ml-[13.31rem] md:ml-[15.3rem] md:scale-150 mb-[0.38rem] md:mb-[1.06rem]"
                />
              </div>
              <Image
                src={'/images/rules1.jpg'}
                alt="rules1"
                width={1000}
                height={1000}
                className="rounded-2xl md:w-[40.4375rem] md:h-[28.75rem] md:ml-[2.7rem] bg-contain"
              />
            </div>
          </div>
          <div className="flex md:flex-col md:max-w-[30.4375rem] md:w-full pt-[3.7rem] md:pt-0">
            <div className="md:pl-[1.44rem] pl-[0.65rem] md:pr-0 pr-[0.65rem] md:pt-0 pt-[1.87rem] md:mt-[-8rem]">
              <p className="md:text-[1.1875rem] md:leading-normal font-svn600 text-[1rem] text-black3 pb-[0.75rem]">
                Form & Button
              </p>
              <p className="md:text-[1.125rem] md:leading-[1.6875rem] font-svn400 leading-[1.21875rem] text-[0.8125rem] text-blackPrimary text-opacity-80">
                Chúng tôi xây dựng các form và button{' '}
                <br className="hidden md:block" /> theo chiều hướng tối giản
                nhất cho website
              </p>
              <Image
                src={'/curved-arrow2.svg'}
                alt="curved arrow"
                width={24}
                height={51}
                className="w-[1.5rem] h-[3.1875rem] scale-150 ml-[6.5rem] md:ml-[16.6rem] md:rotate-[-10deg] md:scale-x-[-1] md:scale-[2]"
              />
            </div>
            <Image
              src={'/images/rules2.jpg'}
              alt="rules2"
              width={1000}
              height={1000}
              className="rounded-s-2xl w-[14.75rem] h-[14rem] md:w-[35.4375rem] md:h-[27.3125rem]"
            />
          </div>
        </div>
        <div className="md:flex md:flex-row-reverse md:mt-[6.5rem]">
          <div className="md:mt-[-1.44rem] flex pt-[3.7rem] md:pt-0">
            <Image
              src={'/images/rules3.jpg'}
              alt="rules3"
              width={1000}
              height={1000}
              className="rounded-e-2xl md:rounded-2xl md:w-[21.9375rem] md:h-[28.6875rem] w-[13.3125rem] h-[18.3125rem] md:mr-0 mr-[0.5rem] object-contain"
            />
            <div className="md:pt-[7.25rem] pt-[3.06rem] md:text-left text-right md:pr-0 pr-[0.65rem]">
              <p className="md:text-[1.1875rem] md:leading-normal font-svn600 text-[1rem] text-black3 pb-[0.75rem] md:pl-[1.75rem] md:pr-[6.31rem]">
                Màu sắc, icon
              </p>
              <p className="md:text-[1.125rem] md:leading-[1.6875rem] font-svn400 leading-[1.21875rem] text-[0.8125rem] md:pl-[1.75rem] md:pr-[6.31rem] text-blackPrimary text-opacity-80 w-full md:max-w-full  max-w-[9.4375rem]">
                Màu sắc kết hợp hòa, icon mới mẻ hiện đại tạo cảm giác thích thú
                cho khách hàng khám phá website
              </p>
              <Image
                src={'/curved-arrow3.svg'}
                alt="curved arrow"
                width={120}
                height={57}
                className="w-[7.5rem] h-[3.5625rem] relative md:-rotate-12 md:-translate-x-8 -translate-x-12 md:-translate-y-1 -translate-y-5 mt-[0.69rem]"
              />
            </div>
          </div>
          <div className="md:flex md:px-0 md:pt-0 px-[2rem] pt-[2.5rem] md:pr-[2.63rem]">
            <Image
              src={'/images/rules4.jpg'}
              alt="rules3"
              width={1000}
              height={1000}
              className=" md:w-[36.6875rem] md:h-[28.3125rem] w-[19.4375rem] h-[17.0625rem] object-cover md:rounded-e-2xl md:rounded-s-none rounded-2xl"
            />
            <div>
              <Image
                src={'/curved-arrow4.svg'}
                alt="curved arrow"
                width={120}
                height={57}
                className="w-[7.5rem] h-[3.5625rem] relative mt-[-0.5rem] mb-[1rem] md:scale-x-[-1] md:scale-125 md:mt-[3.7rem] md:-rotate-12 md:ml-[-3rem]"
              />
              <p className="md:mt-[2rem] md:ml-[1.5rem] md:text-[1.1875rem] md:leading-normal font-svn600 text-[1rem] text-black3 pb-[0.75rem]">
                Typography
              </p>
              <p className="md:max-w-[72.375rem] md:w-full md:ml-[1.5rem] md:text-[1.125rem] md:leading-[1.6875rem] font-svn400 leading-[1.21875rem] text-[0.8125rem] text-blackPrimary text-opacity-80 ">
                Font SVN Gilroy là một font chữ hiện đại, phổ biến trong thiết
                kế đồ họa và trang web. Nó được thiết kế để đem lại sự tươi mới
                và độc đáo, với những đường nét sắc sảo và các kí tự đơn giản,
                dễ đọc.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
