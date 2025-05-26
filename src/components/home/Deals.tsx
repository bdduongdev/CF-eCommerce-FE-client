import React from 'react'
import { Link } from 'react-router-dom'

const Deals = () => {
    return (
        <>
            <div className="deal-left">
            {/* Tiêu đề deal */}
            <div className="deal-title">
              <h2>DEALS OF THE DAY</h2>
            </div>
            {/* Nội dung sản phẩm */}
            <div className="deal-box">
              {/* Cột trái: ảnh sản phẩm */}
              <div className="deal-img-col">
                {/* Nhóm ảnh nhỏ */}
                <div className="deal-thumbnails">
                  <img
                    src="/assets/images/dealsp1.png"
                    alt=""
                    className="w-[35px] h-[60px] object-cover rounded"
                  />
                  <img
                    src="/assets/images/dealsp2.png"
                    alt=""
                    className="w-[35px] h-[60px] object-cover rounded"
                  />
                  <img
                    src="/assets/images/dealsp3.png"
                    alt=""
                    className="w-[35px] h-[60px] object-cover rounded"
                  />
                  <img
                    src="/assets/images/dealsp4.png"
                    alt=""
                    className="w-[35px] h-[60px] object-cover rounded"
                  />
                </div>
                {/* Ảnh lớn bên phải */}
                <div className="deal-main-img">
                  <img src="/assets/images/dealsp1.png" alt="" />
                </div>
              </div>
              {/* Cột phải: Thông tin sản phẩm */}
              <div className="deal-info">
                {/* Tên sản phẩm */}
                <h3 className="deal-name">
                  <Link to="/product/xioma-redmi-note-11-pro">
                    Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone
                  </Link>
                </h3>
                {/* Giá */}
                <div className="deal-prices">
                  <span className="deal-price">$569.00</span>
                  <span className="deal-old-price">$759.00</span>
                </div>
                {/* Mô tả sản phẩm */}
                <ul className="deal-description">
                  <li>Intel LGA 1700 Socket: Supports 13th &amp; 12th Gen Intel Core</li>
                  <li>DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
                  <li>Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
                </ul>
                {/* FREE SHIPPING / FREE GIFT */}
                <div className="deal-tags">
                  <span className="deal-tag-green">FREE SHIPPING</span>
                  <span className="deal-tag-red">FREE GIFT</span>
                </div>
                {/* Hurry up + Countdown */}
                <div className="deal-hurry">
                  <span className="deal-hurry-text">
                    Hurry up! Promotion will expires in:
                  </span>
                  <div className="deal-countdown">
                    <div className="deal-countdown-box">03d</div>
                    <div className="deal-countdown-box">03h</div>
                    <div className="deal-countdown-box">15m</div>
                    <div className="deal-countdown-box">46s</div>
                  </div>
                </div>
                {/* Thanh Sold */}
                <div className="deal-progress">
                  <div className="deal-progress-bar">
                    <div
                      className="deal-progress-fill"
                      style={{ width: "34.67%" }}
                    />
                  </div>
                  <div className="deal-progress-text">
                    <span className="deal-progress-sold">Sold: </span>
                    <span className="deal-progress-amount">26/75</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default Deals