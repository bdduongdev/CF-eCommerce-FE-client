import React from 'react'
import { Link } from 'react-router-dom'

const BrandNew = () => {
    return (
        <>
            <section className="bg-white rounded-lg">
                {/* Tiêu đề */}
                <div className="flex justify-between mb-[30px] pt-[30px]">
                    <h2 className="text-[18px] font-bold ml-[30px]">BRAND NEW FOR YOU</h2>
                    <Link to="#" className="text-[13px] text-[#666666] mr-[46px]">
                        View All
                    </Link>
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
        </>
    )
}

export default BrandNew