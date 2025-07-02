import React from 'react'
import ProductGrid from '../../components/productpage/ProductGrid'
import SidebarFilter from '../../components/productpage/SidebarFilter'
import ProductBanner from '../../components/productpage/ProductBanner'
import PopularCate from '../../components/productpage/PopularCate'
import SidebarCate from '../../components/productpage/SidebarCate'
import Pagination from '../../components/productpage/Pagination'

const Product = () => {
    return (
        <>
            <main className="bg-[#e2e4eb] py-4">
                {/* Banner Top Cellphones & Tablets */}
                <ProductBanner />

                {/* Popular Categories */}
                <PopularCate />

                {/* Product of the category */}
                <section className="bg-white rounded-lg shadow py-[30px]">
                    <div className="px-[30px] rounded-md">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                        </div>
                    </div>
                    <hr className="my-2 px-[30px]" />
                    <div className="px-[30px] rounded-md">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                            {/* Sidebar Filter */}
                            <SidebarFilter />
                            {/* Right Content */}
                            <div className="lg:col-span-9 flex flex-col">
                                {/* Title + Show Item Controls */}
                                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                                    <div className="text-sm text-gray-700">
                                        Showing <span className="font-semibold">1 - 40</span> of{" "}
                                        <span className="font-semibold">120</span> results
                                    </div>
                                    <div className="flex items-center space-x-2 text-sm">
                                        <span className="text-gray-700">Show:</span>
                                        <button className="px-3 py-1 border rounded text-gray-700 hover:bg-green-600 hover:text-white transition">
                                            24
                                        </button>
                                        <button className="px-3 py-1 border rounded text-gray-700 hover:bg-green-600 hover:text-white transition">
                                            48
                                        </button>
                                        <button className="px-3 py-1 border rounded text-gray-700 hover:bg-green-600 hover:text-white transition">
                                            72
                                        </button>
                                    </div>
                                </div>
                                {/* Product Grid */}
                                <div>
                                    <ProductGrid />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Product