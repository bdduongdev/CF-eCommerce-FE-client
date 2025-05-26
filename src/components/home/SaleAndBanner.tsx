import React from 'react'
import { Link } from 'react-router-dom'

const SaleAndBanner = () => {
    return (
        <div>
            <section className="flex flex-col lg:flex-row gap-4 mb-4">
                {/* Sidebar menu */}
                <div className="w-full lg:w-1/4 sidebar-menu">
                    <p className="sale-title">SALE 40% OFF</p>
                    <ul className="menu-list">
                        <li><Link to="#">Laptops</Link></li>
                        <li><Link to="#">PC &amp; Computers</Link></li>
                        <li><Link to="#">Cell Phones</Link></li>
                        <li><Link to="#">Tablets</Link></li>
                        <li><Link to="#">Gaming &amp; VR</Link></li>
                        <li><Link to="#">Networking</Link></li>
                        <li><Link to="#">Cameras</Link></li>
                        <li><Link to="#">Sounds</Link></li>
                        <li><Link to="#">Office</Link></li>
                        <li><Link to="#">Storage, USB</Link></li>
                        <li><Link to="#">Accessories</Link></li>
                        <li><Link to="#">Clearance</Link></li>
                    </ul>
                </div>

                {/* Right content */}
                <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Left column */}
                    <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
                        <div className="relative banner-box h-[200px] md:h-[250px] lg:h-[310px]">
                            <img src="assets/images/banner1.png" alt="Headphone" className="w-full h-full object-cover" />
                            <button className="btn-banner">BUY NOW</button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-[100px] md:h-[120px] banner-box">
                                <img src="assets/images/banner4.png" alt="Watch" className="w-full h-full object-cover" />
                            </div>
                            <div className="h-[100px] md:h-[120px] banner-box">
                                <img src="assets/images/banner5.png" alt="Gamepad" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="flex flex-col gap-4">
                        <div className="h-[150px] md:h-[200px] lg:h-[215px] banner-box">
                            <img src="assets/images/banner2.png" alt="Keyboard" className="w-full h-full object-cover" />
                        </div>
                        <div className="h-[150px] md:h-[200px] lg:h-[215px] bg-[#1a1a1a] rounded-lg overflow-hidden">
                            <img src="assets/images/banner3.png" alt="Camera" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SaleAndBanner