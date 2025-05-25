import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <>
            <main className="bg-[#e2e4eb] py-5">
                {/* chuyển hướng trang */}
                <section className="bg-white flex items-center rounded-md shadow-md h-[80px] mb-4">
                    <div className="ml-[30px]">
                        <Link to="/" className="text-[14px] font-bold text-[#999999]">
                            Home
                        </Link>{" "}
                        /
                        <Link to="/pages" className="text-[14px] font-bold text-[#999999]">
                            Pages
                        </Link>{" "}
                        /
                        <Link to="/login" className="text-[14px] font-bold text-black">
                            Cart
                        </Link>
                    </div>
                </section>
                {/* giỏ hàng  */}
                <section className="bg-white rounded-xl shadow-md grid grid-cols-1 md:grid-cols-3 gap-6 py-12 px-6 md:px-12">
                    {/* Product List */}
                    <div className="md:col-span-2 space-y-4">
                        {/* Product 1 */}
                        <div className="flex flex-col md:flex-row gap-5 justify-between items-start bg-gray-100 p-4 rounded-lg relative">
                            <img
                                src="assets/images/topcellphone2.png"
                                alt="SROK Smart Phone"
                                className="w-full md:w-[200px] h-auto object-contain rounded-lg"
                            />
                            <div className="flex-1">
                                <p className="font-bold text-sm">SROK Smart Phone 128GB, Oled Retina</p>
                                <p className="text-red-500 font-semibold text-lg my-4">$579.00</p>

                                <div className="flex items-center border border-black rounded-lg px-3 py-1 w-fit">
                                    <button className="text-xl px-1 font-bold">-</button>
                                    <span className="px-4 font-bold text-sm">1</span>
                                    <button className="text-xl px-1 font-bold">+</button>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-5 pb-3">
                                    <span className="text-green-600 text-xs font-medium border border-green-500 rounded px-2 py-0.5">
                                        FREE SHIPPING
                                    </span>
                                    <span className="text-red-500 text-xs font-medium border border-red-500 rounded px-2 py-0.5">
                                        FREE GIFT
                                    </span>
                                </div>

                                <p className="text-sm font-medium text-green-600 flex items-center gap-1">
                                    <i className="fa-solid fa-circle-check text-green-600" />
                                    In Stock
                                </p>
                            </div>
                            <button className="absolute top-4 right-4 text-gray-500 hover:text-red-600">
                                <i className="fa-solid fa-trash text-lg" />
                            </button>
                        </div>

                        {/* Product 2 - tương tự Product 1, chỉ khác ảnh, trạng thái hoặc giá trị nếu cần */}
                        <div className="flex flex-col md:flex-row gap-5 justify-between items-start bg-gray-100 p-4 rounded-lg relative">
                            <img
                                src="assets/images/topcellphone2.png"
                                alt="SROK Smart Phone"
                                className="w-full md:w-[200px] h-auto object-contain rounded-lg"
                            />
                            <div className="flex-1">
                                <p className="font-bold text-sm">SROK Smart Phone 128GB, Oled Retina</p>
                                <p className="text-red-500 font-semibold text-lg my-4">$579.00</p>
                                <div className="flex items-center border border-black rounded-lg px-3 py-1 w-fit">
                                    <button className="text-xl px-1 font-bold">-</button>
                                    <span className="px-4 font-bold text-sm">1</span>
                                    <button className="text-xl px-1 font-bold">+</button>
                                </div>
                                <div className="flex flex-wrap gap-2 pt-5 pb-3">
                                    <span className="text-green-600 text-xs font-medium border border-green-500 rounded px-2 py-0.5">
                                        FREE SHIPPING
                                    </span>
                                    <span className="text-red-500 text-xs font-medium border border-red-500 rounded px-2 py-0.5">
                                        FREE GIFT
                                    </span>
                                </div>
                                <p className="text-sm font-medium text-green-600 flex items-center gap-1">
                                    <i className="fa-solid fa-circle-check text-green-600" />
                                    In Stock
                                </p>
                            </div>
                            <button className="absolute top-4 right-4 text-gray-500 hover:text-red-600">
                                <i className="fa-solid fa-trash text-lg" />
                            </button>
                        </div>

                        {/* Product 3 - Out of stock */}
                        <div className="flex flex-col md:flex-row gap-5 justify-between items-start bg-gray-100 p-4 rounded-lg relative">
                            <img
                                src="assets/images/topcellphone2.png"
                                alt="SROK Smart Phone"
                                className="w-full md:w-[200px] h-auto object-contain rounded-lg"
                            />
                            <div className="flex-1">
                                <p className="font-bold text-sm">SROK Smart Phone 128GB, Oled Retina</p>
                                <p className="text-red-500 font-semibold text-lg my-4">$579.00</p>
                                <div className="flex items-center border border-black rounded-lg px-3 py-1 w-fit">
                                    <button className="text-xl px-1 font-bold">-</button>
                                    <span className="px-4 font-bold text-sm">1</span>
                                    <button className="text-xl px-1 font-bold">+</button>
                                </div>
                                <div className="flex flex-wrap gap-2 pt-5 pb-3">
                                    <span className="text-green-600 text-xs font-medium border border-green-500 rounded px-2 py-0.5">
                                        FREE SHIPPING
                                    </span>
                                    <span className="text-red-500 text-xs font-medium border border-red-500 rounded px-2 py-0.5">
                                        FREE GIFT
                                    </span>
                                </div>
                                <p className="text-sm font-medium text-red-600 flex items-center gap-1">
                                    <i className="fa-solid fa-circle-xmark text-red-600" />
                                    Out of Stock
                                </p>
                            </div>
                            <button className="absolute top-4 right-4 text-gray-500 hover:text-red-600">
                                <i className="fa-solid fa-trash text-lg" />
                            </button>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="relative">
                        <div className="sticky top-7 bg-white border border-green-400 rounded-xl p-6 shadow-sm">
                            <h2 className="font-bold text-lg mb-4">Order Summary</h2>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span>Sub Total:</span>
                                    <span className="font-semibold">$1,000.00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping estimate:</span>
                                    <span className="font-semibold">$600.00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Tax estimate:</span>
                                    <span className="font-semibold">$137.00</span>
                                </div>
                                <div className="border-t pt-3 flex justify-between font-bold text-green-600">
                                    <span>ORDER TOTAL:</span>
                                    <span>$1,737.00</span>
                                </div>
                            </div>
                            <button className="mt-5 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold">
                                CHECKOUT
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Cart