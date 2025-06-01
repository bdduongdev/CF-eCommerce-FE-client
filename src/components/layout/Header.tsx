import { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronDown, Heart, Menu, Search, ShoppingBag, User } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full">
      {/* HEADER TOP */}
      <section className="h-[100px] flex items-center justify-between md:justify-normal px-4 md:px-[30px] gap-4 md:gap-8 relative z-10">
        {/* LOGO - ẩn ở mobile */}
        {/* LOGO chỉ hiển thị trên md trở lên */}
        {window.innerWidth >= 768 && (
          <div className="mr-[68px]">
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
        )}



        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-black"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* MENU - CHỈ CHO MÀN HÌNH LỚN */}
        <nav className="hidden md:flex items-center text-black font-bold text-[15px] flex-1 justify-center">
          <ul className="flex space-x-5 items-center">
            <li><Link to="/" className="flex items-center whitespace-nowrap">Home</Link></li>
            <li><Link to="#" className="flex items-center whitespace-nowrap">Pages</Link></li>
            <li className="relative group">
              <Link to="#" className="flex items-center whitespace-nowrap">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <ul className="absolute top-full left-0 hidden group-hover:flex flex-col bg-[#EEEEEE] text-black w-[200px] shadow-lg rounded-md z-20">
                <li><Link to="/products" className="block px-4 py-2 hover:bg-gray-300">Product A</Link></li>
                <li><Link to="#" className="block px-4 py-2 hover:bg-gray-300">Product B</Link></li>
                <li><Link to="#" className="block px-4 py-2 hover:bg-gray-300">Product C</Link></li>
              </ul>
            </li>
            <li><Link to="/contact" className="flex items-center whitespace-nowrap">Contact</Link></li>
          </ul>
        </nav>

        {/* ICONS */}
        <div className="hidden md:flex items-center space-x-[15px] flex-shrink-0">
          <div className="icon-btn"><Search className="h-5 w-5" /></div>
          <Link to="/wishlist"><div className="icon-btn"><Heart className="h-5 w-5" /></div></Link>
          <Link to="/profile"><div className="icon-btn"><User className="h-5 w-5" /></div></Link>
          <div className="mr-5">
            <p className="text-[11px] text-[#666666]">WELCOME</p>
            <div className="flex space-x-2 text-[14px] font-bold text-black">
              <Link to="/login">LOG IN</Link>
              <span>/</span>
              <Link to="/register">REGISTER</Link>
            </div>
          </div>
          <div className="icon-btn">
            <Link to="/cart"><ShoppingBag className="h-5 w-5" /></Link>
          </div>
          <div>
            <p className="text-[11px] text-[#666666]">CART</p>
            <p className="text-[14px] font-bold text-black">$1,689.00</p>
          </div>
        </div>
      </section>

      {/* HEADER BOTTOM */}
      <section className="h-auto py-2 flex flex-col md:flex-row md:items-center justify-between bg-[#1ABA1A] px-4 md:px-[30px] gap-2 md:gap-0">
        {/* Search */}
        <div className="relative w-full md:w-[517px]">
          <div className="flex bg-white rounded-full overflow-hidden shadow-md">
            <div className="relative group flex items-center">
              <div className="px-4 py-[12px] text-[13px] text-black whitespace-nowrap flex items-center cursor-pointer">
                All Categories
                <ChevronDown className="ml-1 h-4 w-4" />
              </div>
              <ul className="absolute left-0 top-full hidden group-hover:flex flex-col bg-[#EEEEEE] text-black mt-1 w-[180px] max-w-[100vw] shadow-lg rounded-md z-50">
                <li><Link to="#" className="block px-4 py-2 hover:bg-gray-300">Category A</Link></li>
                <li><Link to="#" className="block px-4 py-2 hover:bg-gray-300">Category B</Link></li>
                <li><Link to="#" className="block px-4 py-2 hover:bg-gray-300">Category C</Link></li>
              </ul>
            </div>
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
        <div className="text-white text-[13px] text-center md:text-left">Free shipping over $199</div>
        <div className="text-white text-[13px] text-center md:text-left">30 days money back</div>
        <div className="text-white text-[13px] text-center md:text-left">100% secure payment</div>
      </section>

      {/* SIDEBAR MOBILE MENU */}
      <aside className={`fixed top-0 left-0 h-full w-[250px] bg-white z-50 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden shadow-lg`}>
        <div className="flex justify-between items-center p-4 border-b">
          <p className="text-xl font-bold">Menu</p>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            className="text-black"
          >✕</button>
        </div>
        <ul className="flex flex-col space-y-4 p-4 font-semibold text-[15px] text-black">
          <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="#" onClick={() => setMobileMenuOpen(false)}>Pages</Link></li>
          <li>
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer">
                <span>Products</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </summary>
              <ul className="ml-4 mt-2 space-y-2">
                <li><Link to="/products" onClick={() => setMobileMenuOpen(false)}>Product A</Link></li>
                <li><Link to="#" onClick={() => setMobileMenuOpen(false)}>Product B</Link></li>
                <li><Link to="#" onClick={() => setMobileMenuOpen(false)}>Product C</Link></li>
              </ul>
            </details>
          </li>
          <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
        </ul>
      </aside>

      {/* OVERLAY */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  )
}
