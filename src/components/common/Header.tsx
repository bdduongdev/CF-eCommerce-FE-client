import React from 'react';

const Header = () => {
  return (
    <>
      {/* header  */}
      <header>
        {/* HEADER T */}
        <section className=" h-[100px] flex justify-between items-center relative z-10">
          {/* LOGO  */}
          <div className="mr-[68px] ml-[30px]">
            <img src="./assets/images/logo.png" alt="" />
          </div>
          {/* MENU */}
          <nav className="text-black font-bold text-[15px] mr-[158px]">
            <ul className="flex space-x-5">
              {/* Homes */}
              <li className="relative group">
                <a href="#" className="flex items-center whitespace-nowrap">
                  Homes
                </a>
              </li>
              {/* Pages */}
              <li className="relative group">
                <a href="#" className="flex items-center whitespace-nowrap">
                  Pages
                </a>
              </li>
              {/* Products */}
              <li className="relative group">
                <a href="#" className="flex items-center whitespace-nowrap">
                  Products{" "}
                  <span className="material-icons-outlined ml-1">expand_more</span>
                </a>
                <ul className="absolute top-full left-0 hidden group-hover:flex flex-col bg-[#EEEEEE] text-black mt-2 w-[200px] shadow-lg rounded-md z-20">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-300">
                      A
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-300">
                      B
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-300">
                      C
                    </a>
                  </li>
                </ul>
              </li>
              {/* Contact */}
              <li>
                <a href="#" className="flex items-center whitespace-nowrap">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          {/* Icons bên phải */}
          <div className="flex items-center space-x-[15px] mr-[30px]">
            <div className="w-[40px] h-[40px] rounded-full bg-[#EBEEF6] flex items-center justify-center">
              {/* icon */}
            </div>
            <div className="w-[40px] h-[40px] rounded-full bg-[#EBEEF6] flex items-center justify-center">
              <span className="material-icons-outlined">favorite_border</span>
            </div>
            <div className="w-[40px] h-[40px] rounded-full bg-[#EBEEF6] flex items-center justify-center">
              {/* icon */}
            </div>
            <div className="mr-5">
              <p className="text-[11px] text-[#666666]">WELCOME</p>
              <p className="text-[14px] font-bold text-black">LOG IN / REGISTER</p>
            </div>
            <div className="w-[40px] h-[40px] rounded-full bg-[#EBEEF6] flex items-center justify-center">
              {/* icon */}
            </div>
            <div className="">
              <p className="text-[11px] text-[#666666]">CART</p>
              <p className="text-[14px] font-bold text-black">$1,689.00</p>
            </div>
          </div>
        </section>
        {/* HEADER B */}
        <section className=" h-[75px] flex items-center justify-between bg-[#1ABA1A] relative z-0 overflow-visible px-[30px]">
          {/* search  */}
          <div className="relative w-[517px] overflow-visible">
            <div className="flex bg-white rounded-full overflow-hidden shadow-md">
              {/* Dropdown All Categories */}
              <div className="relative group flex items-center">
                <div className="px-4 py-[12px] text-[13px] text-black whitespace-nowrap flex items-center cursor-pointer">
                  All Categories
                  <span className="material-icons-outlined ml-1">expand_more</span>
                </div>
                <ul className="absolute left-0 top-full hidden group-hover:flex flex-col bg-[#EEEEEE] text-black mt-1 w-[180px] shadow-lg rounded-md z-50">
                  {/* tăng z-index */}
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-300">
                      A
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-300">
                      B
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-300">
                      C
                    </a>
                  </li>
                </ul>
              </div>
              {/* Search Input */}
              <div className="flex-1 relative">
                <input
                  type="text"
                  className="w-full text-[13px] py-[12px] pl-5 pr-10 focus:outline-none"
                  placeholder="Search anything..."
                />
                <span className="material-icons-outlined absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500">
                  search
                </span>
              </div>
            </div>
          </div>
          <div className="text-white text-[13px]">
            <p>Free shipping over $199</p>
          </div>
          <div className="text-white text-[13px]">
            <p>30 days money back</p>
          </div>
          <div className="text-white text-[13px]">
            <p>100% secure payment</p>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
