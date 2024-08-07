import React from 'react';

export default function OurClientContainer() {
  return (
    <section className="px-[0.65rem] pt-[8.81rem] md:pt-[14rem] bg-[#FDFFEF] md: pb-[14.53rem] md:flex justify-center md:px-[6.19rem]">
      <div className="w-full max-w-[42.8125rem] md:mr-[14.87rem]">
        <p className="font-svn600 text-[1rem] leading-[1.3rem] md:text-[1.125rem] md:leading-[1.4625rem] text-black3 mb-[0.88rem] md:mb-[1.5rem]">
          KHÁCH HÀNG CỦA FE
        </p>
        <p className="font-svn600 text-[2rem] leading-[2.6rem] md:text-[3.125rem] md:leading-[4.0625rem] text-blackPrimary">
          Tệp khách hàng đa <br className="hidden md:block" /> dạng tin tưởng
        </p>
        <p className="md:mt-[1rem] mt-[1rem] text-[0.875rem] leading-[1.3125rem] md:text-[1.125rem] md:leading-[1.6875rem] text-black3 font-svn400">
          FE CREDIT tiến hành khảo sát và phân tích các thông tin liên quan đến
          khách hàng, bao gồm độ tuổi, giới tính, thu nhập, nhu cầu tài chính,
          thói quen sử dụng sản phẩm tài chính, v.v. Đây là những thông tin quan
          trọng giúp FE CREDIT hiểu rõ hơn về đối tượng khách hàng và tạo ra các
          sản phẩm và dịch vụ phù hợp với nhu cầu của họ.
        </p>
      </div>

      <div className="px-[0.2rem] md:px-0 grid grid-cols-2 grid-rows-2 max-h-[19.31rem] md:max-h-full mt-[3.13rem] md:mt-0">
        <div className="h-[9.67044rem] py-[2.8rem] md:h-full text-[1rem] hover:font-[600] hover:bg-gradient-to-bl from-[#45db84f1] to-[#cbf542ef] hover:border hover:rounded-3xl py-auto transition-all ease-in-out delay-150 hover:scale-[1.1] md:hover:scale-[1.2] duration-300 border-[#7BCB18] bg-[#ffffff4d] w-full max-w-[27.80194rem] max-h-[24.90625rem] border-r-0 border-b-0 rounded-ss-3xl text-center px-[1rem] md:py-[4.3rem] border border-slate-700 ">
          Các cá nhân có nhu cầu vay vốn tiêu dùng
        </div>
        <div className="h-[9.67044rem] py-[2.8rem] md:h-full text-[1rem] hover:font-[600] hover:bg-gradient-to-bl from-[#45db84f1] to-[#cbf542ef] hover:border hover:rounded-3xl transition-all ease-in-out delay-150 hover:scale-[1.1] md:hover:scale-[1.2] duration-300 border-[#7BCB18] bg-[#ffffff4d] w-full max-w-[27.80194rem] max-h-[24.90625rem] border-b-0 rounded-se-3xl text-center md:px-[1rem] md:py-[4.3rem] border border-slate-700 ">
          Doanh nghiệp vừa và <br className="hidden md:block" /> nhỏ (SMEs) cần
          tài chính <br className="hidden md:block" /> để phát triển
        </div>
        <div className="h-[9.67044rem] py-[2rem] md:h-full text-[1rem] hover:font-[600] hover:bg-gradient-to-bl from-[#45db84f1] to-[#cbf542ef] hover:border hover:rounded-3xl transition-all ease-in-out delay-150 hover:scale-[1.1] md:hover:scale-[1.2] duration-300 border-[#7BCB18] bg-[#ffffff4d] w-full max-w-[27.80194rem] max-h-[24.90625rem] border-r-0 rounded-es-3xl text-center px-[1rem] md:py-[4.3rem] border border-slate-700 ">
          Khách hàng mong
          <br className="text-[1rem] hidden md:block" /> muốn trải nghiệm dịch
          <br className="hidden md:block" /> vụ tài chính thuận tiện
        </div>
        <div className="h-[9.67044rem] py-[2.5rem] md:h-full text-[1rem] hover:font-[600] hover:bg-gradient-to-bl from-[#45db84f1] to-[#cbf542ef] hover:border hover:rounded-3xl transition-all ease-in-out delay-150 hover:scale-[1.1] md:hover:scale-[1.2] duration-300 border-[#7BCB18] bg-[#ffffff4d] w-full max-w-[27.80194rem] max-h-[24.90625rem] rounded-ee-3xl text-center px-[1rem] md:py-[4.3rem] border border-slate-700 ">
          Người Việt Nam
          <br className="hidden md:block" /> có thu nhập trung
          <br className="hidden md:block" /> bình và thấp.
        </div>
      </div>
    </section>
  );
}
