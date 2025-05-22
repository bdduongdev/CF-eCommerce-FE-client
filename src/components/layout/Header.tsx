import { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronDown, Heart, Menu, Search, ShoppingBag, User } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full">
      {/* HEADER TOP */}
      <section className="h-[100px] flex justify-between items-center relative z-10 px-4 md:px-[30px]">
        {/* LOGO */}
        <div className="mr-4 md:mr-[68px]">
          <Link to="/">
            <img
              src="/assets/images/logo.png"
              alt="Logo"
              width={120}
              height={40}
              className="h-10 md:h-auto"
            />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-black"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* MENU */}
        <nav
          className={`${
            mobileMenuOpen
              ? "block absolute top-full left-0 right-0 bg-white shadow-lg z-20 py-4"
              : "hidden"
          } md:block text-black font-bold text-[15px] mr-4 md:mr-[158px]`}
        >
          <ul
            className={`${
              mobileMenuOpen
                ? "flex flex-col space-y-4 px-4"
                : "flex space-x-5 items-center"
            }`}
          >
            <li className="relative group">
              <Link to="#" className="flex items-center whitespace-nowrap">
                Homes
              </Link>
            </li>
            <li className="relative group">
              <Link to="#" className="flex items-center whitespace-nowrap">
                Pages
              </Link>
            </li>
            <li className="relative group">
              <Link to="#" className="flex items-center whitespace-nowrap">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <ul className="absolute top-full left-0 hidden group-hover:flex flex-col bg-[#EEEEEE] text-black w-[200px] max-w-[100vw] shadow-lg rounded-md z-20">
                <li>
                  <Link to="#" className="block px-4 py-2 hover:bg-gray-300">
                    Product A
                  </Link>
                </li>
                <li>
                  <Link to="#" className="block px-4 py-2 hover:bg-gray-300">
                    Product B
                  </Link>
                </li>
                <li>
                  <Link to="#" className="block px-4 py-2 hover:bg-gray-300">
                    Product C
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#" className="flex items-center whitespace-nowrap">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* ICONS */}
        <div className="hidden md:flex items-center space-x-[15px]">
          <div className="icon-btn">
            <User className="h-5 w-5" />
          </div>
          <div className="icon-btn">
            <Heart className="h-5 w-5" />
          </div>
          <div className="icon-btn">
            <Search className="h-5 w-5" />
          </div>
          <div className="mr-5">
            <p className="text-[11px] text-[#666666]">WELCOME</p>
            <p className="text-[14px] font-bold text-black">
              LOG IN / REGISTER
            </p>
          </div>
          <div className="icon-btn">
            <ShoppingBag className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[11px] text-[#666666]">CART</p>
            <p className="text-[14px] font-bold text-black">$1,689.00</p>
          </div>
        </div>
      </section>

      {/* HEADER BOTTOM */}
      <section className="h-auto py-2 flex flex-col md:flex-row md:items-center justify-between bg-[#1ABA1A] relative z-0 px-4 md:px-[30px] gap-2 md:gap-0">
        {/* Search */}
        <div className="relative w-full md:w-[517px]">
          <div className="flex bg-white rounded-full overflow-hidden shadow-md">
            {/* Dropdown */}
            <div className="relative group flex items-center">
              <div className="px-4 py-[12px] text-[13px] text-black whitespace-nowrap flex items-center cursor-pointer">
                All Categories
                <ChevronDown className="ml-1 h-4 w-4" />
              </div>
              <ul className="absolute left-0 top-full hidden group-hover:flex flex-col bg-[#EEEEEE] text-black mt-1 w-[180px] max-w-[100vw] shadow-lg rounded-md z-50">
                <li>
                  <Link to="#" className="block px-4 py-2 hover:bg-gray-300">
                    Category A
                  </Link>
                </li>
                <li>
                  <Link to="#" className="block px-4 py-2 hover:bg-gray-300">
                    Category B
                  </Link>
                </li>
                <li>
                  <Link to="#" className="block px-4 py-2 hover:bg-gray-300">
                    Category C
                  </Link>
                </li>
              </ul>
            </div>
            {/* Input */}
            <div className="flex-1 relative">
              <input
                type="text"
                className="w-full text-[13px] py-[12px] pl-5 pr-10 focus:outline-none"
                placeholder="Search anything..."
              />
              <Search className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Info Texts */}
        <div className="text-white text-[13px] text-center md:text-left">
          Free shipping over $199
        </div>
        <div className="text-white text-[13px] text-center md:text-left">
          30 days money back
        </div>
        <div className="text-white text-[13px] text-center md:text-left">
          100% secure payment
        </div>
      </section>
    </header>
  )
}
