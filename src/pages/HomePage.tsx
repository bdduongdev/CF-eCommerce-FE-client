const HomePage = () => {
  return (
    <div>
        <main className="bg-[#e2e4eb] py-5">
  {/* sale và banner  */}
  <section className="flex gap-4 max-h-[450px] mb-4">
    {/* Sidebar menu */}
    <div className="w-1/4 bg-white rounded-lg pl-[54px]">
      <p className="text-red-500 text-[14px] font-bold mb-4 mt-5">
        SALE 40% OFF
      </p>
      <ul className="space-y-3 text-[13px] font-semibold text-black">
        <li>
          <a href="#">Laptops</a>
        </li>
        <li>
          <a href="#">PC &amp; Computers</a>
        </li>
        <li>
          <a href="#">Cell Phones</a>
        </li>
        <li>
          <a href="#">Tablets</a>
        </li>
        <li>
          <a href="#">Gaming &amp; VR</a>
        </li>
        <li>
          <a href="#">Networking</a>
        </li>
        <li>
          <a href="#">Cameras</a>
        </li>
        <li>
          <a href="#">Sounds</a>
        </li>
        <li>
          <a href="#">Office</a>
        </li>
        <li>
          <a href="#">Storage, USB</a>
        </li>
        <li>
          <a href="#">Accessories</a>
        </li>
        <li>
          <a href="#">Clearance</a>
        </li>
      </ul>
    </div>
    {/* Right content */}
    <div className="w-3/4 grid grid-cols-3 gap-4">
      {/* Cột trái (Banner lớn + Box 3 + Box 4) */}
      <div className="col-span-2 flex flex-col gap-4">
        {/* Banner lớn */}
        <div className="relative bg-white rounded-lg overflow-hidden h-[310px]">
          <img
            src="assets/images/banner1.png"
            alt="Headphone"
            className="w-full h-full object-cover"
          />
          <button className="absolute left-[60px] bottom-[50px] bg-white text-black text-[12px] font-medium px-4 py-2 rounded">
            BUY NOW
          </button>
        </div>
        {/* Hàng dưới: Box 3 + Box 4 */}
        <div className="grid grid-cols-2 gap-4">
          {/* Box 3 */}
          <div className="h-[120px] bg-white rounded-lg overflow-hidden">
            <img
              src="assets/images/banner4.png"
              alt="Watch"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Box 4 */}
          <div className="h-[120px] bg-white rounded-lg overflow-hidden">
            <img
              src="assets/images/banner5.png"
              alt="Gamepad"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* Cột phải (Box 1 + Box 2) */}
      <div className="flex flex-col gap-4">
        {/* Box 1 */}
        <div className="h-[215px] bg-white rounded-lg overflow-hidden">
          <img
            src="assets/images/banner2.png"
            alt="Keyboard"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Box 2 */}
        <div className="h-[215px] bg-[#1a1a1a] rounded-lg overflow-hidden">
          <img
            src="assets/images/banner3.png"
            alt="Camera"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
  {/* brand and top categories  */}
  <section className="w-full mb-4">
    <div className="grid grid-cols-2 gap-4">
      {/* Cột trái */}
      <div className="bg-white rounded-lg h-[240px] shadow py-[30px]">
        {/* tiêu đề  */}
        <div className="flex justify-between mb-[38px]">
          <h2 className="text-[18px] font-bold ml-[30px]">FEATURED BRANDS</h2>
          <a className="text-[13px] text-[#666666] mr-[46px]">View All</a>
        </div>
        {/* ảnh brand  */}
        <div className="flex items-center mx-[30px] gap-16 mb-10">
          <img src="assets/images/brand1.png" alt="" />
          <img src="assets/images/brand2.png" alt="" />
          <img src="assets/images/brand3.png" alt="" />
          <img src="assets/images/brand4.png" alt="" />
          <img src="assets/images/brand5.png" alt="" />
        </div>
        <div className="flex items-center mx-[30px] gap-16">
          <img src="assets/images/brand6.png" alt="" />
          <img src="assets/images/brand7.png" alt="" />
          <img src="assets/images/brand8.png" alt="" />
          <img src="assets/images/brand9.png" alt="" />
          <img src="assets/images/brand10.png" alt="" />
        </div>
      </div>
      {/* Cột phải */}
      <div className="bg-white rounded-lg h-[240px] shadow py-[30px]">
        {/* tiêu đề */}
        <div className="flex justify-between mb-[38px]">
          <h2 className="text-[18px] font-bold ml-[30px]">TOP CATEGORIES</h2>
          <a className="text-[13px] text-[#666666] mr-[46px]">View All</a>
        </div>
        {/* ảnh CATEGORIES */}
        <div className="flex items-center mx-[30px] gap-[75px] mb-10">
          {/* Category 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="assets/images/top_cate1.png"
              alt="Category 1"
              className="mb-2"
            />
            <p className="text-[14px] text-black font-semibold">Headphones</p>
          </div>
          {/* Category 2 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="assets/images/top_cate2.png"
              alt="Category 2"
              className="mb-2"
            />
            <p className="text-[14px] text-black font-semibold">Keyboard</p>
          </div>
          {/* Category 3 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="assets/images/top_cate3.png"
              alt="Category 3"
              className="mb-2"
            />
            <p className="text-[14px] text-black font-semibold">Mouse</p>
          </div>
          {/* Category 4 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="assets/images/top_cate4.png"
              alt="Category 4"
              className="mb-2"
            />
            <p className="text-[14px] text-black font-semibold">Smartwatch</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Deals of the day */}
  <section className="flex gap-4 w-full">
    {/* Phần bên trái (deal) */}
    <div className="w-3/4 flex flex-col">
      {/* Tiêu đề deal */}
      <div className="bg-[#1ABA1A] text-white text-[18px] font-bold rounded-lg h-[62px] flex items-center px-[30px]">
        <h2>DEALS OF THE DAY</h2>
      </div>
      {/* Nội dung sản phẩm */}
      <div className="bg-white rounded-lg shadow h-[504px] flex pt-[54px] gap-6">
        {/* Cột trái: ảnh sản phẩm */}
        <div className="w-1/2 flex gap-4 ">
          {/* Nhóm ảnh nhỏ  */}
          <div className="flex flex-col gap-5 pl-[30px]">
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
          <div className="flex-1 flex items-center justify-center">
            <img
              src="/assets/images/dealsp1.png"
              alt=""
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        {/* Cột phải: Thông tin sản phẩm */}
        <div className="w-1/2 flex flex-col justify-start gap-5 px-4 py-2">
          {/* Tên sản phẩm */}
          <h3 className="text-[16px] font-bold text-black">
            Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone
          </h3>
          {/* Giá */}
          <div className="flex items-center gap-4">
            <span className="text-[22px] text-[#FF0000] font-semibold">
              $569.00
            </span>
            <span className="text-[16px] text-[#999] font-semibold line-through">
              $759.00
            </span>
          </div>
          {/* Mô tả sản phẩm */}
          <ul className="list-disc list-inside text-[12px] text-black leading-relaxed">
            <li>
              Intel LGA 1700 Socket: Supports 13th &amp; 12th Gen Intel Core
            </li>
            <li>DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
            <li>Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
          </ul>
          {/* FREE SHIPPING / FREE GIFT */}
          <div className="flex gap-3">
            <span className="px-3 py-1 bg-[#f4fcf4] text-[#1ABA1A] text-[12px] rounded-sm transition duration-300 hover:bg-[#1ABA1A] hover:text-white">
              FREE SHIPPING
            </span>
            <span className="px-3 py-1 bg-[#fef5f4] text-[#F1352B] text-[12px] rounded-sm transition duration-300 hover:bg-[#F1352B] hover:text-white">
              FREE GIFT
            </span>
          </div>
          {/* Hurry up + Countdown */}
          <div className="flex flex-col gap-2 mt-2">
            <span className="text-[#1a1a1a] text-[14px] font-semibold uppercase">
              Hurry up! Promotion will expires in:
            </span>
            <div className="flex gap-2">
              {/* ngày */}
              <div className="bg-[#f2f2f2] text-[#1a1a1a] text-[14px] font-semibold w-[50px] h-[50px] rounded flex items-center justify-center">
                03d
              </div>
              {/* Giờ */}
              <div className="bg-[#f2f2f2] text-[#1a1a1a] text-[14px] font-semibold w-[50px] h-[50px] rounded flex items-center justify-center">
                03h
              </div>
              {/* Phút */}
              <div className="bg-[#f2f2f2] text-[#1a1a1a] text-[14px] font-semibold w-[50px] h-[50px] rounded flex items-center justify-center">
                15m
              </div>
              {/* Giây */}
              <div className="bg-[#f2f2f2] text-[#1a1a1a] text-[14px] font-semibold w-[50px] h-[50px] rounded flex items-center justify-center">
                46s
              </div>
            </div>
          </div>
          {/* Thanh Sold */}
          <div className="w-full mt-6">
            <div className="w-[450px] bg-gray-200 rounded-full h-[10px] overflow-hidden">
              <div
                className="bg-[#1ABA1A] h-full rounded-full"
                style={{ width: "34.67%" }}
              />
            </div>
            <div className="text-[13px] mt-2">
              <span className="text-[#666666]">Sold: </span>
              <span className="text-black font-bold">26/75</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Phần bên phải (ảnh deal) */}
    <div className="w-1/4 flex flex-col gap-4">
      {/* Box 1 */}
      <div className="h-[177px] bg-white rounded-lg overflow-hidden">
        <img
          src="assets/images/deal1.png"
          alt="Banner 1"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Box 2 */}
      <div className="h-[177px] bg-[#1a1a1a] rounded-lg overflow-hidden">
        <img
          src="assets/images/deal2.png"
          alt="Banner 2"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Box 3 */}
      <div className="h-[177px] bg-white rounded-lg overflow-hidden">
        <img
          src="assets/images/deal3.png"
          alt="Banner 3"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
  {/* member free shipping  */}
  <section className="my-4 h-[110px] bg-[url('/assets/images/freeshipping.png')] bg-cover bg-center rounded-lg flex items-center justify-center">
    <p className="text-white text-center px-4 text-[18px]">
      <span>⭐ Member get</span>{" "}
      <span className="text-[#FFE400]">FREE SHIPPING*</span> with no order
      minimum!
      <span className="italic">*Restrictions apply</span>.
    </p>
  </section>
  {/* sản phẩm best seller  */}
  <section className="bg-white rounded-xl px-[30px] pt-[30px] pb-[50px] shadow-md mb-4">
    {/* loại sp and view all */}
    <div className="mb-6 flex justify-between">
      <div className="flex gap-10">
        <a href="" className="text-[18px] font-semibold ">
          BEST SELLER
        </a>
        <a href="" className="text-[18px] text-[#666666] ">
          NEW IN
        </a>
        <a href="" className="text-[18px] text-[#666666] ">
          POPULAR
        </a>
      </div>
      <div>
        <a className="text-[13px] text-[#666666] " href="">
          View All
        </a>
      </div>
    </div>
    {/* best seller */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {/* Product 1 */}
      <div className="bg-white rounded-lg border p-4 relative">
        {/* SAVE $ Badge */}
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded">
          SAVE $199.00
        </div>
        <a href="">
          <img
            src="assets/images/bestsl1.png"
            alt="BOSO Headphone"
            className="mx-auto h-28 object-contain"
          />
        </a>
        <p className="text-[14px] font-bold text-black mt-4 text-left">
          BOSO 2 Wireless On Ear Headphone
        </p>
        <p className="text-red-500 font-semibold text-[18px] mt-3 text-left">
          $569.00
          <span className="text-gray-400 font-semibold line-through text-[15px]">
            $759.00
          </span>
        </p>
        <div className="flex gap-2 mt-4 text-left">
          <span className="text-green-600 text-xs font-medium border border-green-500 rounded px-2 py-0.5">
            FREE SHIPPING
          </span>
          <span className="text-red-500 text-xs font-medium border border-red-500 rounded px-2 py-0.5">
            FREE GIFT
          </span>
        </div>
      </div>
      {/* Product 2 */}
      <div className="bg-white rounded-lg border p-4 relative">
        {/* SAVE $ Badge */}
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded">
          SAVE $199.00
        </div>
        <a href="">
          <img
            src="assets/images/bestsl1.png"
            alt="BOSO Headphone"
            className="mx-auto h-28 object-contain"
          />
        </a>
        <p className="text-[14px] font-bold text-black mt-4 text-left">
          BOSO 2 Wireless On Ear Headphone
        </p>
        <p className="text-red-500 font-semibold text-[18px] mt-3 text-left">
          $569.00
          <span className="text-gray-400 font-semibold line-through text-[15px]">
            $759.00
          </span>
        </p>
        <div className="flex gap-2 mt-4 text-left">
          <span className="text-green-600 text-xs font-medium border border-green-500 rounded px-2 py-0.5">
            FREE SHIPPING
          </span>
          <span className="text-red-500 text-xs font-medium border border-red-500 rounded px-2 py-0.5">
            FREE GIFT
          </span>
        </div>
      </div>
      {/* Product 3 */}
      <div className="bg-white rounded-lg border p-4 relative">
        {/* SAVE $ Badge */}
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded">
          SAVE $199.00
        </div>
        <a href="">
          <img
            src="assets/images/bestsl1.png"
            alt="BOSO Headphone"
            className="mx-auto h-28 object-contain"
          />
        </a>
        <p className="text-[14px] font-bold text-black mt-4 text-left">
          BOSO 2 Wireless On Ear Headphone
        </p>
        <p className="text-red-500 font-semibold text-[18px] mt-3 text-left">
          $569.00
          <span className="text-gray-400 font-semibold line-through text-[15px]">
            $759.00
          </span>
        </p>
        <div className="flex gap-2 mt-4 text-left">
          <span className="text-green-600 text-xs font-medium border border-green-500 rounded px-2 py-0.5">
            FREE SHIPPING
          </span>
          <span className="text-red-500 text-xs font-medium border border-red-500 rounded px-2 py-0.5">
            FREE GIFT
          </span>
        </div>
      </div>
      {/* Product 4 */}
      <div className="bg-white rounded-lg border p-4 relative">
        {/* SAVE $ Badge */}
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded">
          SAVE $199.00
        </div>
        <a href="">
          <img
            src="assets/images/bestsl1.png"
            alt="BOSO Headphone"
            className="mx-auto h-28 object-contain"
          />
        </a>
        <p className="text-[14px] font-bold text-black mt-4 text-left">
          BOSO 2 Wireless On Ear Headphone
        </p>
        <p className="text-red-500 font-semibold text-[18px] mt-3 text-left">
          $569.00
          <span className="text-gray-400 font-semibold line-through text-[15px]">
            $759.00
          </span>
        </p>
        <div className="flex gap-2 mt-4 text-left">
          <span className="text-green-600 text-xs font-medium border border-green-500 rounded px-2 py-0.5">
            FREE SHIPPING
          </span>
          <span className="text-red-500 text-xs font-medium border border-red-500 rounded px-2 py-0.5">
            FREE GIFT
          </span>
        </div>
      </div>
      {/* Product 5 */}
      <div className="bg-white rounded-lg border p-4 relative">
        {/* SAVE $ Badge */}
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded">
          SAVE $199.00
        </div>
        <a href="">
          <img
            src="assets/images/bestsl1.png"
            alt="BOSO Headphone"
            className="mx-auto h-28 object-contain"
          />
        </a>
        <p className="text-[14px] font-bold text-black mt-4 text-left">
          BOSO 2 Wireless On Ear Headphone
        </p>
        <p className="text-red-500 font-semibold text-[18px] mt-3 text-left">
          $569.00
          <span className="text-gray-400 font-semibold line-through text-[15px]">
            $759.00
          </span>
        </p>
        <div className="flex gap-2 mt-4 text-left">
          <span className="text-green-600 text-xs font-medium border border-green-500 rounded px-2 py-0.5">
            FREE SHIPPING
          </span>
          <span className="text-red-500 text-xs font-medium border border-red-500 rounded px-2 py-0.5">
            FREE GIFT
          </span>
        </div>
      </div>
    </div>
  </section>
  {/* Top Cellphones & Tablets */}
  <section className="bg-white rounded-lg mb-4">
    {/* tiêu đề  */}
    <div className="flex justify-between mb-[30px] pt-[30px]">
      <h2 className="text-[18px] font-bold ml-[30px]">
        TOP CELLPHONE &amp; TABLES
      </h2>
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
        {/* Small Item 1 */}
        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
          <div className="text-left">
            <p className="text-sm font-semibold">iPhone (iOS)</p>
            <p className="text-xs text-gray-500">18 items</p>
          </div>
          <img
            src="assets/images/topcellphone1.png"
            alt="iPhone Series"
            className="h-16 w-16 object-contain"
          />
        </div>
        {/* Small Item 2 */}
        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
          <div className="text-left">
            <p className="text-sm font-semibold">iPhone (iOS)</p>
            <p className="text-xs text-gray-500">18 items</p>
          </div>
          <img
            src="assets/images/topcellphone1.png"
            alt="iPhone Series"
            className="h-16 w-16 object-contain"
          />
        </div>
        {/* Small Item 3 */}
        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
          <div className="text-left">
            <p className="text-sm font-semibold">iPhone (iOS)</p>
            <p className="text-xs text-gray-500">18 items</p>
          </div>
          <img
            src="assets/images/topcellphone1.png"
            alt="iPhone Series"
            className="h-16 w-16 object-contain"
          />
        </div>
        {/* Small Item 4 */}
        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
          <div className="text-left">
            <p className="text-sm font-semibold">iPhone (iOS)</p>
            <p className="text-xs text-gray-500">18 items</p>
          </div>
          <img
            src="assets/images/topcellphone1.png"
            alt="iPhone Series"
            className="h-16 w-16 object-contain"
          />
        </div>
        {/* Small Item 5 */}
        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
          <div className="text-left">
            <p className="text-sm font-semibold">iPhone (iOS)</p>
            <p className="text-xs text-gray-500">18 items</p>
          </div>
          <img
            src="assets/images/topcellphone1.png"
            alt="iPhone Series"
            className="h-16 w-16 object-contain"
          />
        </div>
        {/* Small Item 6 */}
        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
          <div className="text-left">
            <p className="text-sm font-semibold">iPhone (iOS)</p>
            <p className="text-xs text-gray-500">18 items</p>
          </div>
          <img
            src="assets/images/topcellphone1.png"
            alt="iPhone Series"
            className="h-16 w-16 object-contain"
          />
        </div>
      </div>
    </div>
    {/*  5 featured products */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-[30px] pt-[30px] pb-[50px]">
      {/* Product 1 */}
      <div className="bg-white rounded-lg border p-4 relative">
        {/* SAVE $ Badge */}
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded">
          SAVE $199.00
        </div>
        <a href="">
          <img
            src="assets/images/topcellphone2.png"
            alt="BOSO Headphone"
            className="mx-auto h-28 object-contain"
          />
        </a>
        <p className="text-[14px] font-bold text-black mt-4 text-left">
          BOSO 2 Wireless On Ear Headphone
        </p>
        <p className="text-red-500 font-semibold text-[18px] mt-3 text-left">
          $569.00
          <span className="text-gray-400 font-semibold line-through text-[15px]">
            $759.00
          </span>
        </p>
        <div className="flex gap-2 mt-4 text-left">
          <span className="text-green-600 text-xs font-medium border border-green-500 rounded px-2 py-0.5">
            FREE SHIPPING
          </span>
          <span className="text-red-500 text-xs font-medium border border-red-500 rounded px-2 py-0.5">
            FREE GIFT
          </span>
        </div>
      </div>
      {/* Product 2 */}
      <div className="bg-white rounded-lg border p-4 relative">
        {/* SAVE $ Badge */}
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded">
          SAVE $199.00
        </div>
        <a href="">
          <img
            src="assets/images/topcellphone2.png"
            alt="BOSO Headphone"
            className="mx-auto h-28 object-contain"
          />
        </a>
        <p className="text-[14px] font-bold text-black mt-4 text-left">
          BOSO 2 Wireless On Ear Headphone
        </p>
        <p className="text-red-500 font-semibold text-[18px] mt-3 text-left">
          $569.00
          <span className="text-gray-400 font-semibold line-through text-[15px]">
            $759.00
          </span>
        </p>
        <div className="flex gap-2 mt-4 text-left">
          <span className="text-green-600 text-xs font-medium border border-green-500 rounded px-2 py-0.5">
            FREE SHIPPING
          </span>
          <span className="text-red-500 text-xs font-medium border border-red-500 rounded px-2 py-0.5">
            FREE GIFT
          </span>
        </div>
      </div>
      {/* Product 3 */}
      <div className="bg-white rounded-lg border p-4 relative">
        {/* SAVE $ Badge */}
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded">
          SAVE $199.00
        </div>
        <a href="">
          <img
            src="assets/images/topcellphone2.png"
            alt="BOSO Headphone"
            className="mx-auto h-28 object-contain"
          />
        </a>
        <p className="text-[14px] font-bold text-black mt-4 text-left">
          BOSO 2 Wireless On Ear Headphone
        </p>
        <p className="text-red-500 font-semibold text-[18px] mt-3 text-left">
          $569.00
          <span className="text-gray-400 font-semibold line-through text-[15px]">
            $759.00
          </span>
        </p>
        <div className="flex gap-2 mt-4 text-left">
          <span className="text-green-600 text-xs font-medium border border-green-500 rounded px-2 py-0.5">
            FREE SHIPPING
          </span>
          <span className="text-red-500 text-xs font-medium border border-red-500 rounded px-2 py-0.5">
            FREE GIFT
          </span>
        </div>
      </div>
      {/* Product 4 */}
      <div className="bg-white rounded-lg border p-4 relative">
        {/* SAVE $ Badge */}
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded">
          SAVE $199.00
        </div>
        <a href="">
          <img
            src="assets/images/topcellphone2.png"
            alt="BOSO Headphone"
            className="mx-auto h-28 object-contain"
          />
        </a>
        <p className="text-[14px] font-bold text-black mt-4 text-left">
          BOSO 2 Wireless On Ear Headphone
        </p>
        <p className="text-red-500 font-semibold text-[18px] mt-3 text-left">
          $569.00
          <span className="text-gray-400 font-semibold line-through text-[15px]">
            $759.00
          </span>
        </p>
        <div className="flex gap-2 mt-4 text-left">
          <span className="text-green-600 text-xs font-medium border border-green-500 rounded px-2 py-0.5">
            FREE SHIPPING
          </span>
          <span className="text-red-500 text-xs font-medium border border-red-500 rounded px-2 py-0.5">
            FREE GIFT
          </span>
        </div>
      </div>
      {/* Product 5 */}
      <div className="bg-white rounded-lg border p-4 relative">
        {/* SAVE $ Badge */}
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded">
          SAVE $199.00
        </div>
        <a href="">
          <img
            src="assets/images/topcellphone2.png"
            alt="BOSO Headphone"
            className="mx-auto h-28 object-contain"
          />
        </a>
        <p className="text-[14px] font-bold text-black mt-4 text-left">
          BOSO 2 Wireless On Ear Headphone
        </p>
        <p className="text-red-500 font-semibold text-[18px] mt-3 text-left">
          $569.00
          <span className="text-gray-400 font-semibold line-through text-[15px]">
            $759.00
          </span>
        </p>
        <div className="flex gap-2 mt-4 text-left">
          <span className="text-green-600 text-xs font-medium border border-green-500 rounded px-2 py-0.5">
            FREE SHIPPING
          </span>
          <span className="text-red-500 text-xs font-medium border border-red-500 rounded px-2 py-0.5">
            FREE GIFT
          </span>
        </div>
      </div>
    </div>
  </section>
  {/* Best Laptops & Computers  */}
  <section className="bg-white rounded-lg mb-4">
    {/* tiêu đề  */}
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
        {/* Small Item 1 */}
        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
          <div className="text-left">
            <p className="text-sm font-semibold">iPhone (iOS)</p>
            <p className="text-xs text-gray-500">18 items</p>
          </div>
          <img
            src="assets/images/bestlaptop1.png"
            alt="iPhone Series"
            className="h-16 w-16 object-contain"
          />
        </div>
        {/* Small Item 2 */}
        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
          <div className="text-left">
            <p className="text-sm font-semibold">iPhone (iOS)</p>
            <p className="text-xs text-gray-500">18 items</p>
          </div>
          <img
            src="assets/images/bestlaptop1.png"
            alt="iPhone Series"
            className="h-16 w-16 object-contain"
          />
        </div>
        {/* Small Item 3 */}
        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
          <div className="text-left">
            <p className="text-sm font-semibold">iPhone (iOS)</p>
            <p className="text-xs text-gray-500">18 items</p>
          </div>
          <img
            src="assets/images/bestlaptop1.png"
            alt="iPhone Series"
            className="h-16 w-16 object-contain"
          />
        </div>
        {/* Small Item 4 */}
        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
          <div className="text-left">
            <p className="text-sm font-semibold">iPhone (iOS)</p>
            <p className="text-xs text-gray-500">18 items</p>
          </div>
          <img
            src="assets/images/bestlaptop1.png"
            alt="iPhone Series"
            className="h-16 w-16 object-contain"
          />
        </div>
        {/* Small Item 5 */}
        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
          <div className="text-left">
            <p className="text-sm font-semibold">iPhone (iOS)</p>
            <p className="text-xs text-gray-500">18 items</p>
          </div>
          <img
            src="assets/images/bestlaptop1.png"
            alt="iPhone Series"
            className="h-16 w-16 object-contain"
          />
        </div>
        {/* Small Item 6 */}
        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
          <div className="text-left">
            <p className="text-sm font-semibold">iPhone (iOS)</p>
            <p className="text-xs text-gray-500">18 items</p>
          </div>
          <img
            src="assets/images/bestlaptop1.png"
            alt="iPhone Series"
            className="h-16 w-16 object-contain"
          />
        </div>
      </div>
    </div>
    {/*  5 featured products */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-[30px] pt-[30px] pb-[50px]">
      {/* Product 1 */}
      <div className="bg-white rounded-lg border p-4 relative">
        {/* SAVE $ Badge */}
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded">
          SAVE $199.00
        </div>
        <a href="">
          <img
            src="assets/images/bestlaptop2.png"
            alt="BOSO Headphone"
            className="mx-auto h-28 object-contain"
          />
        </a>
        <p className="text-[14px] font-bold text-black mt-4 text-left">
          BOSO 2 Wireless On Ear Headphone
        </p>
        <p className="text-red-500 font-semibold text-[18px] mt-3 text-left">
          $569.00
          <span className="text-gray-400 font-semibold line-through text-[15px]">
            $759.00
          </span>
        </p>
        <div className="flex gap-2 mt-4 text-left">
          <span className="text-green-600 text-xs font-medium border border-green-500 rounded px-2 py-0.5">
            FREE SHIPPING
          </span>
          <span className="text-red-500 text-xs font-medium border border-red-500 rounded px-2 py-0.5">
            FREE GIFT
          </span>
        </div>
      </div>
      {/* Product 2 */}
      <div className="bg-white rounded-lg border p-4 relative">
        {/* SAVE $ Badge */}
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded">
          SAVE $199.00
        </div>
        <a href="">
          <img
            src="assets/images/bestlaptop2.png"
            alt="BOSO Headphone"
            className="mx-auto h-28 object-contain"
          />
        </a>
        <p className="text-[14px] font-bold text-black mt-4 text-left">
          BOSO 2 Wireless On Ear Headphone
        </p>
        <p className="text-red-500 font-semibold text-[18px] mt-3 text-left">
          $569.00
          <span className="text-gray-400 font-semibold line-through text-[15px]">
            $759.00
          </span>
        </p>
        <div className="flex gap-2 mt-4 text-left">
          <span className="text-green-600 text-xs font-medium border border-green-500 rounded px-2 py-0.5">
            FREE SHIPPING
          </span>
          <span className="text-red-500 text-xs font-medium border border-red-500 rounded px-2 py-0.5">
            FREE GIFT
          </span>
        </div>
      </div>
      {/* Product 3 */}
      <div className="bg-white rounded-lg border p-4 relative">
        {/* SAVE $ Badge */}
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded">
          SAVE $199.00
        </div>
        <a href="">
          <img
            src="assets/images/bestlaptop2.png"
            alt="BOSO Headphone"
            className="mx-auto h-28 object-contain"
          />
        </a>
        <p className="text-[14px] font-bold text-black mt-4 text-left">
          BOSO 2 Wireless On Ear Headphone
        </p>
        <p className="text-red-500 font-semibold text-[18px] mt-3 text-left">
          $569.00
          <span className="text-gray-400 font-semibold line-through text-[15px]">
            $759.00
          </span>
        </p>
        <div className="flex gap-2 mt-4 text-left">
          <span className="text-green-600 text-xs font-medium border border-green-500 rounded px-2 py-0.5">
            FREE SHIPPING
          </span>
          <span className="text-red-500 text-xs font-medium border border-red-500 rounded px-2 py-0.5">
            FREE GIFT
          </span>
        </div>
      </div>
      {/* Product 4 */}
      <div className="bg-white rounded-lg border p-4 relative">
        {/* SAVE $ Badge */}
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded">
          SAVE $199.00
        </div>
        <a href="">
          <img
            src="assets/images/bestlaptop2.png"
            alt="BOSO Headphone"
            className="mx-auto h-28 object-contain"
          />
        </a>
        <p className="text-[14px] font-bold text-black mt-4 text-left">
          BOSO 2 Wireless On Ear Headphone
        </p>
        <p className="text-red-500 font-semibold text-[18px] mt-3 text-left">
          $569.00
          <span className="text-gray-400 font-semibold line-through text-[15px]">
            $759.00
          </span>
        </p>
        <div className="flex gap-2 mt-4 text-left">
          <span className="text-green-600 text-xs font-medium border border-green-500 rounded px-2 py-0.5">
            FREE SHIPPING
          </span>
          <span className="text-red-500 text-xs font-medium border border-red-500 rounded px-2 py-0.5">
            FREE GIFT
          </span>
        </div>
      </div>
      {/* Product 5 */}
      <div className="bg-white rounded-lg border p-4 relative">
        {/* SAVE $ Badge */}
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded">
          SAVE $199.00
        </div>
        <a href="">
          <img
            src="assets/images/bestlaptop2.png"
            alt="BOSO Headphone"
            className="mx-auto h-28 object-contain"
          />
        </a>
        <p className="text-[14px] font-bold text-black mt-4 text-left">
          BOSO 2 Wireless On Ear Headphone
        </p>
        <p className="text-red-500 font-semibold text-[18px] mt-3 text-left">
          $569.00
          <span className="text-gray-400 font-semibold line-through text-[15px]">
            $759.00
          </span>
        </p>
        <div className="flex gap-2 mt-4 text-left">
          <span className="text-green-600 text-xs font-medium border border-green-500 rounded px-2 py-0.5">
            FREE SHIPPING
          </span>
          <span className="text-red-500 text-xs font-medium border border-red-500 rounded px-2 py-0.5">
            FREE GIFT
          </span>
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
