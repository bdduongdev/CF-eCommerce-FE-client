import React from "react";

const Footer = () => {
  return (
<>
  {/* footer  */}
  <footer>
    {/* FOOTER - T  */}
    <div className="container max-w-screen-2xl px-4 grid grid-cols-11 gap-8 pt-[80px] pb-[60px]">
      <div className="col-span-3">
        <h3 className="font-bold text-[18px] mb-[30px]">
          SWOO - 1ST NYC TECH ONLINE MARKET
        </h3>
        <p className="text-[14px]">HOTLINE 24/7</p>
        <p className="text-[30px] font-bold text-[#1ABA1A] mb-[30px]">
          (025) 3686 25 16
        </p>
        <p className="text-[14px]">
          257 Thatcher Road St, Brooklyn, Manhattan, NY 10092
        </p>
        <p className="text-[14px]">contact@Swootechmart.com</p>
        {/* Icon mạng xã hội */}
        <div className="flex gap-4 mt-[40px]">
          <a
            href="#"
            className="hover:text-white flex items-center justify-center w-[35px] h-[35px] rounded-full bg-[#E1E3EB] text-[14px]"
          >
            <i className="fa-brands fa-twitter" />
          </a>
          <a
            href="#"
            className="hover:text-white flex items-center justify-center w-[35px] h-[35px] rounded-full bg-[#E1E3EB] text-[14px]"
          >
            <i className="fa-brands fa-facebook-f" />
          </a>
          <a
            href="#"
            className="hover:text-white flex items-center justify-center w-[35px] h-[35px] rounded-full bg-[#E1E3EB] text-[14px]"
          >
            <i className="fa-brands fa-instagram" />
          </a>
          <a
            href="#"
            className="hover:text-white flex items-center justify-center w-[35px] h-[35px] rounded-full bg-[#E1E3EB] text-[14px]"
          >
            <i className="fa-brands fa-youtube" />
          </a>
          <a
            href="#"
            className="hover:text-white flex items-center justify-center w-[35px] h-[35px] rounded-full bg-[#E1E3EB] text-[14px]"
          >
            <i className="fa-brands fa-pinterest" />
          </a>
        </div>
      </div>
      <div className="col-span-2">
        <h3 className="font-bold text-[18px] mb-[30px]">TOP CATEGORIES</h3>
        <ul>
          <li className="text-[14] text-[#666666] mb-1 ">
            <a href="">Laptops</a>
          </li>
          <li className="text-[14] text-[#666666] mb-1">
            <a href="">PC &amp; Computers</a>
          </li>
          <li className="text-[14] text-[#666666] mb-1">
            <a href="">Cell Phones</a>
          </li>
          <li className="text-[14] text-[#666666] mb-1">
            <a href="">Tablets</a>
          </li>
          <li className="text-[14] text-[#666666] mb-1">
            <a href="">Gaming &amp; VR</a>
          </li>
          <li className="text-[14] text-[#666666] mb-1">
            <a href="">Networks</a>
          </li>
          <li className="text-[14] text-[#666666] mb-1">
            <a href="">Cameras</a>
          </li>
          <li className="text-[14] text-[#666666] mb-1">
            <a href="">Sounds</a>
          </li>
          <li className="text-[14] text-[#666666]">
            <a href="">Office</a>
          </li>
        </ul>
      </div>
      <div className="col-span-2">
        <h3 className="font-bold text-[18px] mb-[30px]">COMPANY</h3>
        <ul>
          <li className="text-[14] text-[#666666] mb-1">
            <a href="">About Swoo</a>
          </li>
          <li className="text-[14] text-[#666666] mb-1">
            <a href="">Contact</a>
          </li>
          <li className="text-[14] text-[#666666] mb-1">
            <a href="">Career</a>
          </li>
          <li className="text-[14] text-[#666666] mb-1">
            <a href="">Blog</a>
          </li>
          <li className="text-[14] text-[#666666] mb-1">
            <a href="">Sitemap</a>
          </li>
          <li className="text-[14] text-[#666666] ">
            <a href="">Store Locations</a>
          </li>
        </ul>
      </div>
      <div className="col-span-2">
        <h3 className="font-bold text-[18px] mb-[30px]">HELP CENTER</h3>
        <ul>
          <li className="text-[14] text-[#666666] mb-1">
            <a href="">Customer Service</a>
          </li>
          <li className="text-[14] text-[#666666] mb-1">
            <a href="">Policy</a>
          </li>
          <li className="text-[14] text-[#666666] mb-1">
            <a href="">Terms &amp; Conditions</a>
          </li>
          <li className="text-[14] text-[#666666] mb-1">
            <a href="">Trach Order</a>
          </li>
          <li className="text-[14] text-[#666666] mb-1">
            <a href="">FAQs</a>
          </li>
          <li className="text-[14] text-[#666666] mb-1">
            <a href="">My Account</a>
          </li>
          <li className="text-[14] text-[#666666] ">
            <a href="">Product Support</a>
          </li>
        </ul>
      </div>
      <div className="col-span-2">
        <h3 className="font-bold text-[18px] mb-[30px]">PARTNER</h3>
        <ul>
          <li className="text-[14] text-[#666666] mb-1">
            <a href="">Become Seller</a>
          </li>
          <li className="text-[14] text-[#666666] mb-1">
            <a href="">Affiliate</a>
          </li>
          <li className="text-[14] text-[#666666] mb-1">
            <a href="">Advertise</a>
          </li>
          <li className="text-[14] text-[#666666] mb-1">
            <a href="">Partnership</a>
          </li>
        </ul>
      </div>
    </div>
    <hr className="container max-w-screen-xl m-auto" />
    {/* FOOTER - B  */}
    <div className=" flex justify-between items-center h-[104px] px-4 ">
      <div>
        <p className="text-[#666666]">
          {" "}
          © 2024 Shawonetc3 . All Rights Reserved
        </p>
      </div>
      <div className="flex gap-x-6">
        <img src="./assets/images/pay1_footer.png" alt="" />
        <img src="./assets/images/pay2_footer.png" alt="" />
        <img src="./assets/images/pay3_footer.png" alt="" />
        <img src="./assets/images/pay4_footer.png" alt="" />
        <img src="./assets/images/pay5_footer.png" alt="" />
      </div>
      <div className="text-[#0D6EFD]">
        <a href=""> Mobile Site</a>
      </div>
    </div>
  </footer>
</>
  );
};

export default Footer;
