import React from 'react'
import { Link } from 'react-router-dom'

const Wishlist = () => {
    return (
        <>
            <main className="bg-[#e2e4eb] py-5">
                <section className="bg-white rounded-xl px-[30px] pt-[30px] pb-[50px]">
                    <h2 className="text-2xl font-semibold mb-4">Wishlist</h2>
                    <div className="best-seller-grid">
                        {/* Product 1 */}
                        <div className="best-seller-item">
                            <div className="best-seller-badge">SAVE $199.00</div>
                            <Link to="">
                                <img
                                    src="assets/images/bestsl1.png"
                                    alt="BOSO Headphone"
                                    className="best-seller-image"
                                />
                            </Link>
                            <p className="best-seller-name">
                                BOSO 2 Wireless On Ear Headphone
                            </p>
                            <p className="best-seller-price">
                                $569.00
                                <span className="best-seller-old-price">$759.00</span>
                            </p>
                            <div className="best-seller-tags">
                                <span className="best-seller-tag-green">FREE SHIPPING</span>
                                <span className="best-seller-tag-red">FREE GIFT</span>
                            </div>
                            <button className="text-red-500 border border-red-500 px-4 py-2 rounded text-sm hover:text-white hover:bg-red-500 mt-4">
                                Remove
                            </button>
                        </div>

                        {/* Product 2 */}
                       <div className="best-seller-item">
                            <div className="best-seller-badge">SAVE $199.00</div>
                            <Link to="">
                                <img
                                    src="assets/images/bestsl1.png"
                                    alt="BOSO Headphone"
                                    className="best-seller-image"
                                />
                            </Link>
                            <p className="best-seller-name">
                                BOSO 2 Wireless On Ear Headphone
                            </p>
                            <p className="best-seller-price">
                                $569.00
                                <span className="best-seller-old-price">$759.00</span>
                            </p>
                            <div className="best-seller-tags">
                                <span className="best-seller-tag-green">FREE SHIPPING</span>
                                <span className="best-seller-tag-red">FREE GIFT</span>
                            </div>
                            <button className="text-red-500 border border-red-500 px-4 py-2 rounded text-sm hover:text-white hover:bg-red-500 mt-4">
                                Remove
                            </button>
                        </div>

                        {/* Product 3 */}
                       <div className="best-seller-item">
                            <div className="best-seller-badge">SAVE $199.00</div>
                            <Link to="">
                                <img
                                    src="assets/images/bestsl1.png"
                                    alt="BOSO Headphone"
                                    className="best-seller-image"
                                />
                            </Link>
                            <p className="best-seller-name">
                                BOSO 2 Wireless On Ear Headphone
                            </p>
                            <p className="best-seller-price">
                                $569.00
                                <span className="best-seller-old-price">$759.00</span>
                            </p>
                            <div className="best-seller-tags">
                                <span className="best-seller-tag-green">FREE SHIPPING</span>
                                <span className="best-seller-tag-red">FREE GIFT</span>
                            </div>
                            <button className="text-red-500 border border-red-500 px-4 py-2 rounded text-sm hover:text-white hover:bg-red-500 mt-4">
                                Remove
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Wishlist