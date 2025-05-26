import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedAndTop = () => {
    return (
        <div>
            <section className="w-full mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* FEATURED BRANDS */}
                    <div className="section-box">
                        <div className="section-header">
                            <h2 className="text-[18px] font-bold">FEATURED BRANDS</h2>
                            <Link className="view-all" to="#">View All</Link>
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
                            <Link className="view-all" to="#">View All</Link>
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
        </div>
    )
}

export default FeaturedAndTop