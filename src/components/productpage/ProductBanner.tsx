import React from 'react'

const ProductBanner = () => {
  return (
    <>
      <section className="bg-white rounded-lg mb-4">
        {/* Tiêu đề */}
        <div className="flex justify-between mb-[30px] pt-[30px] flex-wrap px-[30px]">
          <h2 className="text-[18px] font-bold">TOP CELLPHONE & TABLETS</h2>
          <a className="text-[13px] text-[#666666]">View All</a>
        </div>
        {/* Hình ảnh Banner */}
        <div className="flex flex-col sm:flex-row gap-2 px-[30px] pb-[30px]">
          <img
            src="assets/images/banner_product1.png"
            alt=""
            className="w-full sm:w-2/3 h-auto sm:h-[310px] object-cover rounded-lg"
          />
          <img
            src="assets/images/banner_product2.png"
            alt=""
            className="w-full sm:w-1/3 h-auto sm:h-[310px] object-cover rounded-lg"
          />
        </div>
      </section>
    </>
  )
}

export default ProductBanner