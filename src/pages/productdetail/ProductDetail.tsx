import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductInfor from '../../components/productdetail/ProductInfor';
import axios from 'axios';
import Tab from '../../components/productdetail/Tab';

// --- Type definitions for better readability ---
interface Discount {
  discount_type: 'percentage' | 'fixed';
  discount_value: number;
  description?: string;
}

interface Variant {
  _id: string;
  price: number;
  stock_quantity: number;
  status: string;
  image_url?: string;
  color: { _id: string; color_name: string };
  storage: { _id: string; storage_name: string };
  discounts?: Discount[];
}

interface ProductData {
  product_name: string;
  description: string;
  category_id: any; // You can define a Category interface if needed
  variants: Variant[];
  options: {
    colors: any[];
    storages: any[];
  };
}


const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<ProductData | null>(null);
  const [variants, setVariants] = useState<Variant[]>([]);
  const [colors, setColors] = useState<any[]>([]);
  const [storages, setStorages] = useState<any[]>([]);
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedStorage, setSelectedStorage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // --- Fetch product data from API ---
  useEffect(() => {
    const fetchProduct = async () => {
      if (!slug) return;
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:8888/api/products/group/${slug}`);
        const data = res.data.data;
        setProduct(data);
        setVariants(data.variants || []);
        setColors(data.options?.colors || []);
        setStorages(data.options?.storages || []);

        if (data.variants && data.variants.length > 0) {
          const defaultVariant = data.variants[0];
          setSelectedVariant(defaultVariant);
          setSelectedColor(defaultVariant.color._id);
          setSelectedStorage(defaultVariant.storage._id);
        }
      } catch (err) {
        console.error('❌ Lỗi lấy sản phẩm:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [slug]);

  // --- Update variant when color or storage changes ---
  useEffect(() => {
    if (!selectedColor || !selectedStorage || !variants.length) return;
    const matched = variants.find(
      (v) => v.color._id === selectedColor && v.storage._id === selectedStorage
    );
    if (matched) {
        setSelectedVariant(matched);
    } else {
        // Optional: handle cases where the combination doesn't exist
        setSelectedVariant(null);
    }
  }, [selectedColor, selectedStorage, variants]);


  if (loading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  if (!product || !selectedVariant) {
    return <div className="p-10 text-center text-red-500">Product not found or variant unavailable.</div>;
  }

  // --- Discount Calculation Logic ---
  const originalPrice = selectedVariant.price;
  let finalPrice = originalPrice;
  let discountInfo: { badge: string; description: string | undefined; } | undefined = undefined;

  const bestDiscount = selectedVariant.discounts?.length
    ? selectedVariant.discounts.reduce((max, d) =>
        (d.discount_value > max.discount_value) ? d : max
      )
    : null;

  if (bestDiscount) {
    if (bestDiscount.discount_type === 'percentage') {
      finalPrice = Math.round(originalPrice * (1 - bestDiscount.discount_value / 100));
      discountInfo = {
        badge: `SALE ${bestDiscount.discount_value}%`,
        description: bestDiscount.description,
      };
    } else if (bestDiscount.discount_type === 'fixed') {
      finalPrice = Math.max(0, originalPrice - bestDiscount.discount_value);
      discountInfo = {
        badge: `SAVE $${new Intl.NumberFormat().format(bestDiscount.discount_value)}`,
        description: bestDiscount.description,
      };
    }
  }

  return (
    <main className="bg-[#e2e4eb] py-5">
      <section className="bg-white flex items-center rounded-md shadow-md h-[80px] mb-4">
        <div className="ml-[30px]">
          <Link to="/" className="text-[14px] font-bold text-[#999999]">Home</Link> /
          <Link to="/shop" className="text-[14px] font-bold text-[#999999]"> Shop</Link> /
          <span className="text-[14px] font-bold text-black">
            {` ${product.product_name}`}
          </span>
        </div>
      </section>

      <ProductInfor
        product={{
          product_name: `${product.product_name} ${selectedVariant.color.color_name} ${selectedVariant.storage.storage_name}`,
          price: finalPrice,
          total_price: finalPrice,
          original_price: originalPrice,
          discount_info: discountInfo,
          description: product.description,
          image_url: selectedVariant.image_url || "",
          category_id: product.category_id,
          stock_quantity: selectedVariant.stock_quantity,
          status: selectedVariant.status,
        }}
        colors={colors}
        storages={storages}
        selectedColor={selectedColor}
        selectedStorage={selectedStorage}
        setSelectedColor={setSelectedColor}
        setSelectedStorage={setSelectedStorage}
        variantId={selectedVariant._id}
      />

      <section className="bg-white rounded-xl px-4 md:px-6 lg:px-[30px] py-6 md:py-8 lg:py-[30px] shadow-sm mb-4">
        <Tab description={product.description} />
      </section>

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