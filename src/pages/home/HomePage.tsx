const HomePage = () => {
  return (
    <div>
      <main className="bg-[#e2e4eb] py-5">
        {/* SALE & BANNER SECTION */}
        <section className="flex flex-col lg:flex-row gap-4 mb-4">
          {/* Sidebar menu */}
          <div className="w-full lg:w-1/4 sidebar-menu">
            <p className="sale-title">SALE 40% OFF</p>
            <ul className="menu-list">
              <li><a href="#">Laptops</a></li>
              <li><a href="#">PC &amp; Computers</a></li>
              <li><a href="#">Cell Phones</a></li>
              <li><a href="#">Tablets</a></li>
              <li><a href="#">Gaming &amp; VR</a></li>
              <li><a href="#">Networking</a></li>
              <li><a href="#">Cameras</a></li>
              <li><a href="#">Sounds</a></li>
              <li><a href="#">Office</a></li>
              <li><a href="#">Storage, USB</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Clearance</a></li>
            </ul>
          </div>

          {/* Right content */}
          <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Left column */}
            <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
              <div className="relative banner-box h-[200px] md:h-[250px] lg:h-[310px]">
                <img src="assets/images/banner1.png" alt="Headphone" className="w-full h-full object-cover" />
                <button className="btn-banner">BUY NOW</button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-[100px] md:h-[120px] banner-box">
                  <img src="assets/images/banner4.png" alt="Watch" className="w-full h-full object-cover" />
                </div>
                <div className="h-[100px] md:h-[120px] banner-box">
                  <img src="assets/images/banner5.png" alt="Gamepad" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-4">
              <div className="h-[150px] md:h-[200px] lg:h-[215px] banner-box">
                <img src="assets/images/banner2.png" alt="Keyboard" className="w-full h-full object-cover" />
              </div>
              <div className="h-[150px] md:h-[200px] lg:h-[215px] bg-[#1a1a1a] rounded-lg overflow-hidden">
                <img src="assets/images/banner3.png" alt="Camera" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* BRAND & TOP CATEGORIES SECTION */}
        <section className="w-full mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* FEATURED BRANDS */}
            <div className="section-box">
              <div className="section-header">
                <h2 className="text-[18px] font-bold">FEATURED BRANDS</h2>
                <a className="view-all">View All</a>
              </div>
              <div className="brand-grid mb-4">
                <img src="assets/images/brand1.png" alt="brand1" />
                <img src="assets/images/brand2.png" alt="brand2" />
                <img src="assets/images/brand3.png" alt="brand3" />
                <img src="assets/images/brand4.png" alt="brand4" />
                <img src="assets/images/brand5.png" alt="brand5" />
              </div>
              <div className="brand-grid">
                <img src="assets/images/brand6.png" alt="brand6" />
                <img src="assets/images/brand7.png" alt="brand7" />
                <img src="assets/images/brand8.png" alt="brand8" />
                <img src="assets/images/brand9.png" alt="brand9" />
                <img src="assets/images/brand10.png" alt="brand10" />
              </div>
            </div>

            {/* TOP CATEGORIES */}
            <div className="section-box">
              <div className="section-header">
                <h2 className="text-[18px] font-bold">TOP CATEGORIES</h2>
                <a className="view-all">View All</a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="category-box">
                  <img src="assets/images/top_cate1.png" alt="Headphones" className="mb-2" />
                  <p className="text-[14px] font-semibold">Headphones</p>
                </div>
                <div className="category-box">
                  <img src="assets/images/top_cate2.png" alt="Keyboard" className="mb-2" />
                  <p className="text-[14px] font-semibold">Keyboard</p>
                </div>
                <div className="category-box">
                  <img src="assets/images/top_cate3.png" alt="Mouse" className="mb-2" />
                  <p className="text-[14px] font-semibold">Mouse</p>
                </div>
                <div className="category-box">
                  <img src="assets/images/top_cate4.png" alt="Smartwatch" className="mb-2" />
                  <p className="text-[14px] font-semibold">Smartwatch</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DEALS OF THE DAY SECTION */}
        <section className="deal-section">
          {/* Phần bên trái (deal) */}
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
                  <img
                    src="/assets/images/dealsp1.png"
                    alt=""
                  />
                </div>
              </div>
              {/* Cột phải: Thông tin sản phẩm */}
              <div className="deal-info">
                {/* Tên sản phẩm */}
                <h3 className="deal-name">
                  Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone
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
          {/* Phần bên phải (ảnh deal) */}
          <div className="deal-right">
            {/* Box 1 */}
            <div className="deal-banner bg-white">
              <img
                src="assets/images/deal1.png"
                alt="Banner 1"
              />
            </div>
            {/* Box 2 */}
            <div className="deal-banner bg-[#1a1a1a]">
              <img
                src="assets/images/deal2.png"
                alt="Banner 2"
              />
            </div>
            {/* Box 3 */}
            <div className="deal-banner bg-white">
              <img
                src="assets/images/deal3.png"
                alt="Banner 3"
              />
            </div>
          </div>
        </section>

        {/* MEMBER FREE SHIPPING BANNER */}
        <section
          className="member-freeshipping"
          style={{ backgroundImage: "url('/assets/images/freeshipping.png')" }}
        >
          <p className="member-text">
            <span>⭐ Member get </span>
            <span className="member-highlight">FREE SHIPPING*</span> with no order
            minimum! <span className="member-note">*Restrictions apply</span>.
          </p>
        </section>

        {/* sản phẩm best seller  */}
        <section className="bg-white rounded-xl px-[30px] pt-[30px] pb-[50px] shadow-md mb-4">
          {/* loại sp and view all */}
          <div className="best-seller-header">
            <div className="best-seller-tabs">
              <a href="" className="best-seller-tab">
                BEST SELLER
              </a>
              <a href="" className="best-seller-tab inactive">
                NEW IN
              </a>
              <a href="" className="best-seller-tab inactive">
                POPULAR
              </a>
            </div>
            <div>
              <a className="best-seller-viewall" href="">
                View All
              </a>
            </div>
          </div>
          {/* best seller */}
          <div className="best-seller-grid">
            {/* Product 1 */}
            <div className="best-seller-item">
              {/* SAVE $ Badge */}
              <div className="best-seller-badge">SAVE $199.00</div>
              <a href="">
                <img
                  src="assets/images/bestsl1.png"
                  alt="BOSO Headphone"
                  className="best-seller-image"
                />
              </a>
              <p className="best-seller-name">
                BOSO 2 Wireless On Ear Headphone
              </p>
              <p className="best-seller-price">
                $569.00
                <span className="best-seller-old-price">$759.00</span>
              </p>
              <div className="best-seller-tags">
                <span className="best-seller-tag-green">FREE SHIPPING</span>
                <span className="best-seller-tag-red">FREE GIFT</span>
              </div>
            </div>

            {/* Product 2 */}
            <div className="best-seller-item">
              <div className="best-seller-badge">SAVE $199.00</div>
              <a href="">
                <img
                  src="assets/images/bestsl1.png"
                  alt="BOSO Headphone"
                  className="best-seller-image"
                />
              </a>
              <p className="best-seller-name">
                BOSO 2 Wireless On Ear Headphone
              </p>
              <p className="best-seller-price">
                $569.00
                <span className="best-seller-old-price">$759.00</span>
              </p>
              <div className="best-seller-tags">
                <span className="best-seller-tag-green">FREE SHIPPING</span>
                <span className="best-seller-tag-red">FREE GIFT</span>
              </div>
            </div>

            {/* Product 3 */}
            <div className="best-seller-item">
              <div className="best-seller-badge">SAVE $199.00</div>
              <a href="">
                <img
                  src="assets/images/bestsl1.png"
                  alt="BOSO Headphone"
                  className="best-seller-image"
                />
              </a>
              <p className="best-seller-name">
                BOSO 2 Wireless On Ear Headphone
              </p>
              <p className="best-seller-price">
                $569.00
                <span className="best-seller-old-price">$759.00</span>
              </p>
              <div className="best-seller-tags">
                <span className="best-seller-tag-green">FREE SHIPPING</span>
                <span className="best-seller-tag-red">FREE GIFT</span>
              </div>
            </div>

            {/* Product 4 */}
            <div className="best-seller-item">
              <div className="best-seller-badge">SAVE $199.00</div>
              <a href="">
                <img
                  src="assets/images/bestsl1.png"
                  alt="BOSO Headphone"
                  className="best-seller-image"
                />
              </a>
              <p className="best-seller-name">
                BOSO 2 Wireless On Ear Headphone
              </p>
              <p className="best-seller-price">
                $569.00
                <span className="best-seller-old-price">$759.00</span>
              </p>
              <div className="best-seller-tags">
                <span className="best-seller-tag-green">FREE SHIPPING</span>
                <span className="best-seller-tag-red">FREE GIFT</span>
              </div>
            </div>

            {/* Product 5 */}
            <div className="best-seller-item">
              <div className="best-seller-badge">SAVE $199.00</div>
              <a href="">
                <img
                  src="assets/images/bestsl1.png"
                  alt="BOSO Headphone"
                  className="best-seller-image"
                />
              </a>
              <p className="best-seller-name">
                BOSO 2 Wireless On Ear Headphone
              </p>
              <p className="best-seller-price">
                $569.00
                <span className="best-seller-old-price">$759.00</span>
              </p>
              <div className="best-seller-tags">
                <span className="best-seller-tag-green">FREE SHIPPING</span>
                <span className="best-seller-tag-red">FREE GIFT</span>
              </div>
            </div>
          </div>
        </section>

        {/* Top Cellphones & Tablets */}
        <section className="bg-white rounded-lg mb-4">
          {/* tiêu đề */}
          <div className="flex justify-between mb-[30px] pt-[30px]">
            <h2 className="text-[18px] font-bold ml-[30px]">TOP CELLPHONE &amp; TABLES</h2>
            <a className="text-[13px] text-[#666666] mr-[46px]">View All</a>
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
              {/* Item 1–6 */}
              <div className="top-item">
                <div className="text-left">
                  <p className="top-item-title">iPhone (iOS)</p>
                  <p className="top-item-sub">18 items</p>
                </div>
                <img src="assets/images/topcellphone1.png" alt="iPhone Series" className="top-item-img" />
              </div>

              <div className="top-item">
                <div className="text-left">
                  <p className="top-item-title">iPhone (iOS)</p>
                  <p className="top-item-sub">18 items</p>
                </div>
                <img src="assets/images/topcellphone1.png" alt="iPhone Series" className="top-item-img" />
              </div>

              <div className="top-item">
                <div className="text-left">
                  <p className="top-item-title">iPhone (iOS)</p>
                  <p className="top-item-sub">18 items</p>
                </div>
                <img src="assets/images/topcellphone1.png" alt="iPhone Series" className="top-item-img" />
              </div>

              <div className="top-item">
                <div className="text-left">
                  <p className="top-item-title">iPhone (iOS)</p>
                  <p className="top-item-sub">18 items</p>
                </div>
                <img src="assets/images/topcellphone1.png" alt="iPhone Series" className="top-item-img" />
              </div>

              <div className="top-item">
                <div className="text-left">
                  <p className="top-item-title">iPhone (iOS)</p>
                  <p className="top-item-sub">18 items</p>
                </div>
                <img src="assets/images/topcellphone1.png" alt="iPhone Series" className="top-item-img" />
              </div>

              <div className="top-item">
                <div className="text-left">
                  <p className="top-item-title">iPhone (iOS)</p>
                  <p className="top-item-sub">18 items</p>
                </div>
                <img src="assets/images/topcellphone1.png" alt="iPhone Series" className="top-item-img" />
              </div>
            </div>
          </div>

          {/* 5 featured products */}
          <div className="section-grid-30px pt-[30px] pb-[50px]">
            {/* Product 1–5 */}
            <div className="product-card">
              <div className="badge-save">SAVE $199.00</div>
              <a href="">
                <img src="assets/images/topcellphone2.png" alt="BOSO Headphone" className="product-img" />
              </a>
              <p className="product-name">BOSO 2 Wireless On Ear Headphone</p>
              <p className="product-price">
                $569.00
                <span className="product-old-price">$759.00</span>
              </p>
              <div className="flex gap-2 mt-4 text-left">
                <span className="tag-green">FREE SHIPPING</span>
                <span className="tag-red">FREE GIFT</span>
              </div>
            </div>

            <div className="product-card">
              <div className="badge-save">SAVE $199.00</div>
              <a href="">
                <img src="assets/images/topcellphone2.png" alt="BOSO Headphone" className="product-img" />
              </a>
              <p className="product-name">BOSO 2 Wireless On Ear Headphone</p>
              <p className="product-price">
                $569.00
                <span className="product-old-price">$759.00</span>
              </p>
              <div className="flex gap-2 mt-4 text-left">
                <span className="tag-green">FREE SHIPPING</span>
                <span className="tag-red">FREE GIFT</span>
              </div>
            </div>

            <div className="product-card">
              <div className="badge-save">SAVE $199.00</div>
              <a href="">
                <img src="assets/images/topcellphone2.png" alt="BOSO Headphone" className="product-img" />
              </a>
              <p className="product-name">BOSO 2 Wireless On Ear Headphone</p>
              <p className="product-price">
                $569.00
                <span className="product-old-price">$759.00</span>
              </p>
              <div className="flex gap-2 mt-4 text-left">
                <span className="tag-green">FREE SHIPPING</span>
                <span className="tag-red">FREE GIFT</span>
              </div>
            </div>

            <div className="product-card">
              <div className="badge-save">SAVE $199.00</div>
              <a href="">
                <img src="assets/images/topcellphone2.png" alt="BOSO Headphone" className="product-img" />
              </a>
              <p className="product-name">BOSO 2 Wireless On Ear Headphone</p>
              <p className="product-price">
                $569.00
                <span className="product-old-price">$759.00</span>
              </p>
              <div className="flex gap-2 mt-4 text-left">
                <span className="tag-green">FREE SHIPPING</span>
                <span className="tag-red">FREE GIFT</span>
              </div>
            </div>

            <div className="product-card">
              <div className="badge-save">SAVE $199.00</div>
              <a href="">
                <img src="assets/images/topcellphone2.png" alt="BOSO Headphone" className="product-img" />
              </a>
              <p className="product-name">BOSO 2 Wireless On Ear Headphone</p>
              <p className="product-price">
                $569.00
                <span className="product-old-price">$759.00</span>
              </p>
              <div className="flex gap-2 mt-4 text-left">
                <span className="tag-green">FREE SHIPPING</span>
                <span className="tag-red">FREE GIFT</span>
              </div>
            </div>
          </div>
        </section>

        {/* Best Laptops & Computers  */}
        <section className="bg-white rounded-lg mb-4">
          {/* tiêu đề */}
          <div className="flex justify-between mb-[30px] pt-[30px]">
            <h2 className="text-[18px] font-bold ml-[30px]">
              BEST LAPTOPS &amp; COMPUTERS
            </h2>
            <a className="text-[13px] text-[#666666] mr-[46px]">View All</a>
          </div>

          {/* Top section: 6 small product items + banner */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-[30px] pb-5 border-b border-gray-300">
            {/* Banner */}
            <div>
              <img
                src="assets/images/banner_bestlaptop.png"
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
                  src="assets/images/bestlaptop1.png"
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
                  src="assets/images/bestlaptop1.png"
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
                  src="assets/images/bestlaptop1.png"
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
                  src="assets/images/bestlaptop1.png"
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
                  src="assets/images/bestlaptop1.png"
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
                  src="assets/images/bestlaptop1.png"
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
              <a href="">
                <img
                  src="assets/images/bestlaptop2.png"
                  alt="BOSO Headphone"
                  className="product-img"
                />
              </a>
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
              <a href="">
                <img
                  src="assets/images/bestlaptop2.png"
                  alt="BOSO Headphone"
                  className="product-img"
                />
              </a>
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
              <a href="">
                <img
                  src="assets/images/bestlaptop2.png"
                  alt="BOSO Headphone"
                  className="product-img"
                />
              </a>
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
              <a href="">
                <img
                  src="assets/images/bestlaptop2.png"
                  alt="BOSO Headphone"
                  className="product-img"
                />
              </a>
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
              <a href="">
                <img
                  src="assets/images/bestlaptop2.png"
                  alt="BOSO Headphone"
                  className="product-img"
                />
              </a>
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

        {/* BRAND NEW FOR YOU Section */}
        <section className="bg-white rounded-lg">
          {/* Tiêu đề */}
          <div className="flex justify-between mb-[30px] pt-[30px]">
            <h2 className="text-[18px] font-bold ml-[30px]">BRAND NEW FOR YOU</h2>
            <a href="#" className="text-[13px] text-[#666666] mr-[46px]">
              View All
            </a>
          </div>
          {/* Danh sách 4 brand */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 px-6 pb-7">
            {/* Brand Item 1 */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm text-">
              <img
                src="assets/images/brandnew1.png"
                alt="Brand 1"
                className="w-full object-contain mb-5 rounded-md"
              />
              <h3 className="text-[16px] font-bold text-black mb-3">
                Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.
              </h3>
              <p className="text-[13px] text-gray-600 mb-4">
                Limited time offer. Hurry up
              </p>
              <button className="bg-white text-[#1ABA1A] border border-[#1ABA1A] text-[11px] px-[30px] py-2 rounded hover:bg-[#1ABA1A] hover:text-white transition">
                SHOW NOW
              </button>
            </div>
            {/* Brand Item 2 */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm text-">
              <img
                src="assets/images/brandnew1.png"
                alt="Brand 1"
                className="w-full object-contain mb-5 rounded-md"
              />
              <h3 className="text-[16px] font-bold text-black mb-3">
                Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.
              </h3>
              <p className="text-[13px] text-gray-600 mb-4">
                Limited time offer. Hurry up
              </p>
              <button className="bg-white text-[#1ABA1A] border border-[#1ABA1A] text-[11px] px-[30px] py-2 rounded hover:bg-[#1ABA1A] hover:text-white transition">
                SHOW NOW
              </button>
            </div>
            {/* Brand Item 3 */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm text-">
              <img
                src="assets/images/brandnew1.png"
                alt="Brand 1"
                className="w-full object-contain mb-5 rounded-md"
              />
              <h3 className="text-[16px] font-bold text-black mb-3">
                Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.
              </h3>
              <p className="text-[13px] text-gray-600 mb-4">
                Limited time offer. Hurry up
              </p>
              <button className="bg-white text-[#1ABA1A] border border-[#1ABA1A] text-[11px] px-[30px] py-2 rounded hover:bg-[#1ABA1A] hover:text-white transition">
                SHOW NOW
              </button>
            </div>
            {/* Brand Item 4 */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm text-">
              <img
                src="assets/images/brandnew1.png"
                alt="Brand 1"
                className="w-full object-contain mb-5 rounded-md"
              />
              <h3 className="text-[16px] font-bold text-black mb-3">
                Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.
              </h3>
              <p className="text-[13px] text-gray-600 mb-4">
                Limited time offer. Hurry up
              </p>
              <button className="bg-white text-[#1ABA1A] border border-[#1ABA1A] text-[11px] px-[30px] py-2 rounded hover:bg-[#1ABA1A] hover:text-white transition">
                SHOW NOW
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default HomePage;
