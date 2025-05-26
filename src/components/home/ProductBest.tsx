import React from 'react'
import { Link } from 'react-router-dom'

const ProductBest = () => {
  return (
    <>
        <section className="bg-white rounded-lg mb-4">
          {/* tiêu đề */}
          <div className="flex justify-between mb-[30px] pt-[30px]">
            <h2 className="text-[18px] font-bold ml-[30px]">
              BEST LAPTOPS &amp; COMPUTERS
            </h2>
            <Link to="/all-products" className="text-[13px] text-[#666666] mr-[46px]">
              View All
            </Link>
          </div>
          {/* Top section: 6 small product items + banner */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-[30px] pb-5 border-b border-gray-300">
            {/* Banner */}
            <div>
              <img
                src="assets/images/banner_topcellphone.png"
                alt="Top Cellphones Banner"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* 6 small items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="top-item">
                <div className="text-left">
                  <p className="top-item-title">iPhone (iOS)</p>
                  <p className="top-item-sub">18 items</p>
                </div>
                <img
                  src="assets/images/topcellphone1.png"
                  alt="iPhone Series"
                  className="top-item-img"
                />
              </div>
              <div className="top-item">
                <div className="text-left">
                  <p className="top-item-title">iPhone (iOS)</p>
                  <p className="top-item-sub">18 items</p>
                </div>
                <img
                  src="assets/images/topcellphone1.png"
                  alt="iPhone Series"
                  className="top-item-img"
                />
              </div>
              <div className="top-item">
                <div className="text-left">
                  <p className="top-item-title">iPhone (iOS)</p>
                  <p className="top-item-sub">18 items</p>
                </div>
                <img
                  src="assets/images/topcellphone1.png"
                  alt="iPhone Series"
                  className="top-item-img"
                />
              </div>
              <div className="top-item">
                <div className="text-left">
                  <p className="top-item-title">iPhone (iOS)</p>
                  <p className="top-item-sub">18 items</p>
                </div>
                <img
                  src="assets/images/topcellphone1.png"
                  alt="iPhone Series"
                  className="top-item-img"
                />
              </div>
              <div className="top-item">
                <div className="text-left">
                  <p className="top-item-title">iPhone (iOS)</p>
                  <p className="top-item-sub">18 items</p>
                </div>
                <img
                  src="assets/images/topcellphone1.png"
                  alt="iPhone Series"
                  className="top-item-img"
                />
              </div>
              <div className="top-item">
                <div className="text-left">
                  <p className="top-item-title">iPhone (iOS)</p>
                  <p className="top-item-sub">18 items</p>
                </div>
                <img
                  src="assets/images/topcellphone1.png"
                  alt="iPhone Series"
                  className="top-item-img"
                />
              </div>
            </div>
          </div>
          {/* 5 featured products */}
          <div className="section-grid-30px pt-[30px] pb-[50px]">
            <div className="product-card">
              <div className="badge-save">SAVE $199.00</div>
              <Link to="/product/1">
                <img
                  src="assets/images/topcellphone2.png"
                  alt="BOSO Headphone"
                  className="product-img"
                />
              </Link>
              <p className="product-name">BOSO 2 Wireless On Ear Headphone</p>
              <p className="product-price">
                $569.00 <span className="product-old-price ml-2">$759.00</span>
              </p>
              <div className="flex gap-2 mt-4 text-left">
                <span className="tag-green">FREE SHIPPING</span>
                <span className="tag-red">FREE GIFT</span>
              </div>
            </div>
            <div className="product-card">
              <div className="badge-save">SAVE $199.00</div>
              <Link to="/product/1">
                <img
                  src="assets/images/topcellphone2.png"
                  alt="BOSO Headphone"
                  className="product-img"
                />
              </Link>
              <p className="product-name">BOSO 2 Wireless On Ear Headphone</p>
              <p className="product-price">
                $569.00 <span className="product-old-price ml-2">$759.00</span>
              </p>
              <div className="flex gap-2 mt-4 text-left">
                <span className="tag-green">FREE SHIPPING</span>
                <span className="tag-red">FREE GIFT</span>
              </div>
            </div>
            <div className="product-card">
              <div className="badge-save">SAVE $199.00</div>
              <Link to="/product/1">
                <img
                  src="assets/images/topcellphone2.png"
                  alt="BOSO Headphone"
                  className="product-img"
                />
              </Link>
              <p className="product-name">BOSO 2 Wireless On Ear Headphone</p>
              <p className="product-price">
                $569.00 <span className="product-old-price ml-2">$759.00</span>
              </p>
              <div className="flex gap-2 mt-4 text-left">
                <span className="tag-green">FREE SHIPPING</span>
                <span className="tag-red">FREE GIFT</span>
              </div>
            </div>
            <div className="product-card">
              <div className="badge-save">SAVE $199.00</div>
              <Link to="/product/1">
                <img
                  src="assets/images/topcellphone2.png"
                  alt="BOSO Headphone"
                  className="product-img"
                />
              </Link>
              <p className="product-name">BOSO 2 Wireless On Ear Headphone</p>
              <p className="product-price">
                $569.00 <span className="product-old-price ml-2">$759.00</span>
              </p>
              <div className="flex gap-2 mt-4 text-left">
                <span className="tag-green">FREE SHIPPING</span>
                <span className="tag-red">FREE GIFT</span>
              </div>
            </div>
            <div className="product-card">
              <div className="badge-save">SAVE $199.00</div>
              <Link to="/product/1">
                <img
                  src="assets/images/topcellphone2.png"
                  alt="BOSO Headphone"
                  className="product-img"
                />
              </Link>
              <p className="product-name">BOSO 2 Wireless On Ear Headphone</p>
              <p className="product-price">
                $569.00 <span className="product-old-price ml-2">$759.00</span>
              </p>
              <div className="flex gap-2 mt-4 text-left">
                <span className="tag-green">FREE SHIPPING</span>
                <span className="tag-red">FREE GIFT</span>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default ProductBest