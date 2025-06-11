import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductInfor from '../../components/productdetail/ProductInfor'
import axios from 'axios'
import Tab from '../../components/productdetail/Tab';

interface Product {
    product_name: string;
    price: number;
    description: string;
    category_id: {
        category_name: string;
    };
    color_id?: {
        color_name: string;
        price: number;
    };
    storage_id?: {
        storage_name: string;
        price: number;
    };
    image_url: string;
    stock_quantity: number;
    status: string;
    total_price: number;
}

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:8888/api/products/show/${id}`);
                console.log("🎯 Product detail:", res.data.data);
                setProduct(res.data.data);
            } catch (err) {
                console.error("❌ Lỗi lấy sản phẩm:", err);
            } finally {
                setLoading(false); // Đảm bảo cập nhật loading kể cả khi lỗi
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <div className="p-10 text-center">Loading...</div>;
    if (!product) return <div className="p-10 text-center text-red-500">Product not found.</div>;

    return (
        <>
            <main className="bg-[#e2e4eb] py-5">
                {/* Breadcrumbs */}
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
                        <span className="text-[14px] font-bold text-black">
                            tên sản phẩm
                        </span>
                    </div>
                </section>

                {/* Product Information */}
                <ProductInfor product={product} />

                {/* Tabs Section */}
                <section className="bg-white rounded-xl px-4 md:px-6 lg:px-[30px] py-6 md:py-8 lg:py-[30px] shadow-sm mb-4">
                    <Tab description={product.description} />
                </section>

                {/* Related Products */}
                <section className="bg-white rounded-lg">
                    <div className="mb-[30px] pt-[30px]">
                        <h2 className="text-[18px] font-bold ml-[30px]">RELATED PRODUCTS</h2>
                    </div>

                    <div className="best-seller-grid px-[30px] pb-[50px]">
                        {/* Product 1 */}
                        <div className="best-seller-item">
                            <div className="best-seller-badge">SAVE $199.00</div>
                            <Link to="/">
                                <img src="assets/images/topcellphone2.png" alt="BOSO Headphone" className="best-seller-image" />
                            </Link>
                            <p className="best-seller-name">BOSO 2 Wireless On Ear Headphone</p>
                            <p className="best-seller-price">
                                $569.00 <span className="best-seller-old-price">$759.00</span>
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
                                <img src="assets/images/topcellphone2.png" alt="BOSO Headphone" className="best-seller-image" />
                            </Link>
                            <p className="best-seller-name">BOSO 2 Wireless On Ear Headphone</p>
                            <p className="best-seller-price">
                                $569.00 <span className="best-seller-old-price">$759.00</span>
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
                                <img src="assets/images/topcellphone2.png" alt="BOSO Headphone" className="best-seller-image" />
                            </Link>
                            <p className="best-seller-name">BOSO 2 Wireless On Ear Headphone</p>
                            <p className="best-seller-price">
                                $569.00 <span className="best-seller-old-price">$759.00</span>
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
                                <img src="assets/images/topcellphone2.png" alt="BOSO Headphone" className="best-seller-image" />
                            </Link>
                            <p className="best-seller-name">BOSO 2 Wireless On Ear Headphone</p>
                            <p className="best-seller-price">
                                $569.00 <span className="best-seller-old-price">$759.00</span>
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
                                <img src="assets/images/topcellphone2.png" alt="BOSO Headphone" className="best-seller-image" />
                            </Link>
                            <p className="best-seller-name">BOSO 2 Wireless On Ear Headphone</p>
                            <p className="best-seller-price">
                                $569.00 <span className="best-seller-old-price">$759.00</span>
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
    );
};

export default ProductDetail;
