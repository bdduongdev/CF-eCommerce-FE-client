import React from 'react'
import { Link } from 'react-router-dom'

const ProductInfor = () => {
    return (
        <>
            <section className="bg-white rounded-xl px-4 sm:px-6 lg:px-[30px] py-6 lg:py-[30px] grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-1 mb-4">
                {/* Hình ảnh sản phẩm */}
                <div>
                    <span className="bg-black text-white text-[10px] px-2 py-1 rounded mb-2 inline-block">
                        NEW
                    </span>
                    <img
                        src="./assets/images/productdetail1.png"
                        alt="Main Product Image"
                        className="w-full h-auto max-h-[500px] sm:max-h-[550px] object-cover rounded-md"
                    />
                    {/* Hình phụ */}
                    <div className="flex flex-wrap gap-3 mt-4">
                        <img
                            src="assets/images/productdetail1.png"
                            className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] border rounded cursor-pointer object-cover"
                        />
                        <img
                            src="assets/images/productdetail2.png"
                            className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] rounded cursor-pointer object-cover"
                        />
                        <img
                            src="assets/images/productdetail3.png"
                            className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] rounded cursor-pointer object-cover"
                        />
                    </div>
                </div>
                {/* Thông tin sản phẩm */}
                <div>
                    <h3 className="text-base sm:text-lg font-bold mt-2 mb-2">
                        Somseng Galatero X6 Ultra LTE 4G/128GB, Black Smartphone
                    </h3>
                    <p className="text-xl sm:text-[22px] font-semibold text-black">$569.00 - $609.00</p>
                    <ul className="text-xs sm:text-sm text-black mt-4 space-y-1 list-disc list-inside">
                        <li>Intel LGA 1700 Socket: Supports 13th &amp; 12th Gen Intel Core</li>
                        <li>DDR5 Compatible: 4×SMD DIMMs with XMP 3.0 Memory</li>
                        <li>Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 py-5 border-b border-gray-300">
                        <span className="text-green-600 text-xs font-medium border border-green-500 rounded px-2 py-0.5">
                            FREE SHIPPING
                        </span>
                        <span className="text-red-500 text-xs font-medium border border-red-500 rounded px-2 py-0.5">
                            FREE GIFT
                        </span>
                    </div>
                    {/* COLOR */}
                    <div className="mt-5">
                        <p className="text-[14px] font-bold mb-3">
                            COLOR:
                            <span className="text-gray-600 font-normal">Midnight Blue</span>
                        </p>
                        <div className="flex gap-2 text-[12px] flex-wrap">
                            {/* Màu 1: Midnight Blue */}
                            <button className="border border-[#1ABA1A] rounded p-2 flex items-center gap-2 text-[12px] min-w-[150px]">
                                <img src="assets/images/productdetail1.png" className="w-[35px] h-[35px] object-contain" />
                                <div>
                                    <p className="">Midnight Blue</p>
                                    <p className="font-bold">$569.00</p>
                                </div>
                            </button>
                            {/* Màu 2: Space Gray */}
                            <button className="border border-gray-300 rounded p-2 flex items-center gap-2 text-[12px] min-w-[150px]">
                                <img src="assets/images/productdetail2.png" className="w-[35px] h-[35px] object-contain" />
                                <div>
                                    <p className="">Space Gray</p>
                                    <p className="font-bold">$589.00</p>
                                </div>
                            </button>
                            {/* Màu 3: Rose Gold */}
                            <button className="border border-gray-300 rounded p-2 flex items-center gap-2 text-[12px] min-w-[150px]">
                                <img src="assets/images/productdetail3.png" className="w-[35px] h-[35px] object-contain" />
                                <div>
                                    <p className="">Rose Gold</p>
                                    <p className="font-bold">$609.00</p>
                                </div>
                            </button>
                        </div>
                    </div>
                    {/* MEMORY SIZE */}
                    <div className="mt-5">
                        <p className="text-sm font-bold mb-3">
                            MEMORY SIZE: <span className="text-gray-600 font-normal">128GB</span>
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <button className="px-3 py-2 text-xs font-bold border rounded text-gray-500">64GB</button>
                            <button className="px-3 py-2 text-xs font-bold border rounded text-black border-[#1ABA1A]">128GB</button>
                            <button className="px-3 py-2 text-xs font-bold border rounded text-black">256GB</button>
                            <button className="px-3 py-2 text-xs font-bold border rounded text-black">512GB</button>
                        </div>
                    </div>
                    {/* Quantity + Add to cart */}
                    <div className="my-6 flex flex-wrap items-center gap-3 sm:gap-4">
                        <div className="flex items-center border border-black rounded px-3 py-1">
                            <button className="text-xl px-2 font-bold">-</button>
                            <span className="px-4">1</span>
                            <button className="text-xl px-2 font-bold">+</button>
                        </div>
                        <button className="text-[#1ABA1A] border border-[#1ABA1A] px-4 sm:px-6 py-2 rounded text-sm font-semibold transition-all duration-300 hover:bg-[#1ABA1A] hover:text-white">
                            <i className="fa-solid fa-plus" /> Add To Cart
                        </button>
                        <button className="text-[#262626] border border-[#262626] px-4 sm:px-6 py-2 rounded text-sm font-semibold transition-all duration-300 hover:bg-[#262626] hover:text-white">
                            <i className="fa-solid fa-heart mr-1" /> Yêu thích
                        </button>
                    </div>
                    {/* Metadata */}
                    <div className="my-5 text-sm">
                        <p className="text-gray-600">
                            <span className="text-black font-bold">SKU:</span> ABC025168
                        </p>
                        <p className="text-gray-600 mt-1">
                            <span className="text-black font-bold">CATEGORY:</span> Cell Phones &amp; Tablets
                        </p>
                        <p className="mt-1">
                            <span className="font-bold">BRAND:</span>{" "}
                            <span className="text-green-600 font-semibold">somsung</span>
                        </p>
                    </div>
                    {/* Social Media Icons */}
                    <div className="flex gap-3 sm:gap-4 mt-8">
                        <Link
                            to="#"
                            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#E1E3EB] text-sm text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white"
                        >
                            <i className="fa-brands fa-twitter" />
                        </Link>
                        <Link
                            to="#"
                            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#E1E3EB] text-sm text-[#1877F2] hover:bg-[#1877F2] hover:text-white"
                        >
                            <i className="fa-brands fa-facebook-f" />
                        </Link>
                        <Link
                            to="#"
                            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#E1E3EB] text-sm text-[#C13584] hover:bg-[#C13584] hover:text-white"
                        >
                            <i className="fa-brands fa-instagram" />
                        </Link>
                        <Link
                            to="#"
                            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#E1E3EB] text-sm text-[#FF0000] hover:bg-[#FF0000] hover:text-white"
                        >
                            <i className="fa-brands fa-youtube" />
                        </Link>
                        <Link
                            to="#"
                            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#E1E3EB] text-sm text-[#E60023] hover:bg-[#E60023] hover:text-white"
                        >
                            <i className="fa-brands fa-pinterest" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductInfor