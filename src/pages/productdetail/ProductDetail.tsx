import React from 'react'
import { Link } from 'react-router-dom'
import Tab from '../../components/productdetail/Tab'
import ProductInfor from '../../components/productdetail/ProductInfor'

const ProductDetail = () => {
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
                        <Link to="" className="text-[14px] font-bold text-[#999999]">
                            Shop
                        </Link>{" "}
                        /
                        <Link to="" className="text-[14px] font-bold text-[#999999]">
                            Top Cell Phones & Tablets
                        </Link>{" "}
                        /
                        <Link to="/login" className="text-[14px] font-bold text-black">
                            Somseng Galatero X6 Ultra LTE 4G/128 GB Black Smartphone
                        </Link>
                    </div>
                </section>
                {/* thông tin chi tiết sp  */}
                <ProductInfor />
                {/* description and review  */}
                <section className="bg-white rounded-xl px-4 md:px-6 lg:px-[30px] py-6 md:py-8 lg:py-[30px] shadow-sm mb-4">
                <Tab />
                </section>
                {/* related products */}
                <section className="bg-white rounded-lg">
                    {/* tiêu đề  */}
                    <div className="mb-[30px] pt-[30px]">
                        <h2 className="text-[18px] font-bold ml-[30px]">RELATED PRODUCTS</h2>
                    </div>
                    {/* 5 related products */}
                    <div className="best-seller-grid px-[30px] pb-[50px]">
                        {/* Product 1 */}
                        <div className="best-seller-item">
                            <div className="best-seller-badge">SAVE $199.00</div>
                            <Link to="/">
                                <img
                                    src="assets/images/topcellphone2.png"
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
                        </div>
                        {/* Product 2 */}
                        <div className="best-seller-item">
                            <div className="best-seller-badge">SAVE $199.00</div>
                            <Link to="/">
                                <img
                                    src="assets/images/topcellphone2.png"
                                    alt="BOSO Headphone"
                                    className="best-seller-image"
                                />
                            </Link>
                            <p className="best-seller-name">BOSO 2 Wireless On Ear Headphone</p>
                            <p className="best-seller-price">
                                $569.00
                                <span className="best-seller-old-price">$759.00</span>
                            </p>
                            <div className="best-seller-tags">
                                <span className="best-seller-tag-green">FREE SHIPPING</span>
                                <span className="best-seller-tag-red">FREE GIFT</span>
                            </div>
                        </div>
                        {/* Product 3 */}
                        <div className="best-seller-item">
                            <div className="best-seller-badge">SAVE $199.00</div>
                            <Link to="/">
                                <img
                                    src="assets/images/topcellphone2.png"
                                    alt="BOSO Headphone"
                                    className="best-seller-image"
                                />
                            </Link>
                            <p className="best-seller-name">BOSO 2 Wireless On Ear Headphone</p>
                            <p className="best-seller-price">
                                $569.00
                                <span className="best-seller-old-price">$759.00</span>
                            </p>
                            <div className="best-seller-tags">
                                <span className="best-seller-tag-green">FREE SHIPPING</span>
                                <span className="best-seller-tag-red">FREE GIFT</span>
                            </div>
                        </div>
                        {/* Product 4 */}
                        <div className="best-seller-item">
                            <div className="best-seller-badge">SAVE $199.00</div>
                            <Link to="/">
                                <img
                                    src="assets/images/topcellphone2.png"
                                    alt="BOSO Headphone"
                                    className="best-seller-image"
                                />
                            </Link>
                            <p className="best-seller-name">BOSO 2 Wireless On Ear Headphone</p>
                            <p className="best-seller-price">
                                $569.00
                                <span className="best-seller-old-price">$759.00</span>
                            </p>
                            <div className="best-seller-tags">
                                <span className="best-seller-tag-green">FREE SHIPPING</span>
                                <span className="best-seller-tag-red">FREE GIFT</span>
                            </div>
                        </div>
                        {/* Product 5 */}
                        <div className="best-seller-item">
                            <div className="best-seller-badge">SAVE $199.00</div>
                            <Link to="/">
                                <img
                                    src="assets/images/topcellphone2.png"
                                    alt="BOSO Headphone"
                                    className="best-seller-image"
                                />
                            </Link>
                            <p className="best-seller-name">BOSO 2 Wireless On Ear Headphone</p>
                            <p className="best-seller-price">
                                $569.00
                                <span className="best-seller-old-price">$759.00</span>
                            </p>
                            <div className="best-seller-tags">
                                <span className="best-seller-tag-green">FREE SHIPPING</span>
                                <span className="best-seller-tag-red">FREE GIFT</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ProductDetail