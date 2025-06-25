import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductInfor from '../../components/productdetail/ProductInfor'
import axios from 'axios'
import Tab from '../../components/productdetail/Tab';

const ProductDetail = () => {
    const { slug } = useParams();
    const [product, setProduct] = useState<any>(null);
    const [variants, setVariants] = useState<any[]>([]);
    const [colors, setColors] = useState<any[]>([]);
    const [storages, setStorages] = useState<any[]>([]);
    const [selectedVariant, setSelectedVariant] = useState<any>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedStorage, setSelectedStorage] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:8888/api/products/group/${slug}`);
                console.log("🎯 Product detail:", res.data.data);
                setProduct(res.data.data);
            } catch (err) {
                console.error("❌ Lỗi lấy sản phẩm:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [slug]);


    useEffect(() => {
        if (!selectedColor || !selectedStorage) return;

        const matched = variants.find(v =>
            v.color._id === selectedColor && v.storage._id === selectedStorage
        );
        if (matched) setSelectedVariant(matched);
    }, [selectedColor, selectedStorage, variants]);

    if (loading) return <div className="p-10 text-center">Loading...</div>;
    if (!product || !selectedVariant) return <div className="p-10 text-center text-red-500">Product not found.</div>;

    return (
        <main className="bg-[#e2e4eb] py-5">
            {/* Breadcrumbs */}
            <section className="bg-white flex items-center rounded-md shadow-md h-[80px] mb-4">
                <div className="ml-[30px]">
                    <Link to="/" className="text-[14px] font-bold text-[#999999]">Home</Link> /
                    <Link to="" className="text-[14px] font-bold text-[#999999]"> Shop</Link> /
                    <Link to="" className="text-[14px] font-bold text-[#999999]"> Top Cell Phones</Link> /
                    <span className="text-[14px] font-bold text-black">
                        {product.product_name}
                    </span>
                </div>
            </section>

            {/* Product Info */}
            <ProductInfor
                product={{
                    product_name: `${product.product_name} ${selectedVariant.color.color_name} ${selectedVariant.storage.storage_name}`,
                    price: selectedVariant.price,
                    total_price: selectedVariant.price,
                    description: product.description,
                    image_url: selectedVariant.image_url,
                    category_id: product.category_id,
                    color_id: selectedVariant.color,
                    storage_id: selectedVariant.storage,
                    stock_quantity: selectedVariant.stock_quantity,
                    status: selectedVariant.status,
                }}
            />

            {/* COLOR SELECTION */}
            <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                <p className="font-bold mb-2">Chọn màu sắc:</p>
                <div className="flex gap-2 flex-wrap">
                    {colors.map((color) => (
                        <button
                            key={color._id}
                            onClick={() => setSelectedColor(color._id)}
                            className={`px-3 py-2 border rounded text-sm ${selectedColor === color._id
                                    ? 'border-green-600 text-green-600'
                                    : 'border-gray-400'
                                }`}
                        >
                            {color.color_name}
                        </button>
                    ))}
                </div>
            </div>

            {/* STORAGE SELECTION */}
            <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                <p className="font-bold mb-2">Chọn dung lượng:</p>
                <div className="flex gap-2 flex-wrap">
                    {storages.map((storage) => (
                        <button
                            key={storage._id}
                            onClick={() => setSelectedStorage(storage._id)}
                            className={`px-3 py-2 border rounded text-sm ${selectedStorage === storage._id
                                    ? 'border-green-600 text-green-600'
                                    : 'border-gray-400'
                                }`}
                        >
                            {storage.storage_name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tabs */}
            <section className="bg-white rounded-xl px-4 md:px-6 lg:px-[30px] py-6 md:py-8 lg:py-[30px] shadow-sm mb-4">
                <Tab description={product.description} />
            </section>

            {/* Related Products (có thể fetch thêm sau) */}
            <section className="bg-white rounded-lg">
                <div className="mb-[30px] pt-[30px]">
                    <h2 className="text-[18px] font-bold ml-[30px]">RELATED PRODUCTS</h2>
                </div>
                <div className="best-seller-grid px-[30px] pb-[50px]">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="best-seller-item">
                            <div className="best-seller-badge">SAVE $199.00</div>
                            <Link to="/">
                                <img src="/assets/images/topcellphone2.png" alt="BOSO Headphone" className="best-seller-image" />
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
                    ))}
                </div>
            </section>
        </main>
    );
};

export default ProductDetail;
