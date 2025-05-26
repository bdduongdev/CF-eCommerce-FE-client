import React from 'react'
import { Link } from 'react-router-dom'

const ProductHome = () => {
    return (
        <>
            <div className="best-seller-grid">
                {/* Product 1 */}
                <div className="best-seller-item">
                    {/* SAVE $ Badge */}
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
                </div>

                {/* Product 4 */}
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
                </div>
                {/* Product 5 */}
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
                </div>
            </div>
        </>
    )
}

export default ProductHome