import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Discount {
  discount_type: string;
  discount_value: number;
  description?: string;
}

interface Product {
  _id: string;
  price: number;
  image_url?: string;
  product: {
    product_name: string;
    slug: string; 
  };
  color: {
    color_name: string;
  };
  storage: {
    storage_name: string;
  };
  discounts?: Discount[];
}

const ProductHome = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:8888/api/variant');
        setProducts(res.data.data.products);
      } catch (error) {
        console.error('Lỗi khi lấy sản phẩm:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="best-seller-grid">
      {products.slice(0, 5).map((product) => {
        // Lấy discount lớn nhất (nếu có nhiều discount)
        const discount = product.discounts && product.discounts.length > 0
          ? product.discounts.reduce((max, d) =>
              d.discount_type === 'percentage' && max.discount_type === 'percentage'
                ? d.discount_value > max.discount_value ? d : max
                : d.discount_type === 'percentage' ? d : max
            , product.discounts[0])
          : null;

        let finalPrice = product.price;
        let discountBadge = null;

        if (discount) {
          if (discount.discount_type === 'percentage') {
            finalPrice = Math.round(product.price * (1 - discount.discount_value / 100));
            discountBadge = `SALE -${discount.discount_value}%`;
          } else if (discount.discount_type === 'fixed') {
            finalPrice = Math.max(0, product.price - discount.discount_value);
            discountBadge = `SAVE $${discount.discount_value}`;
          }
        }

        return (
          <div className="best-seller-item" key={product._id}>
            {discount && (
              <div className="best-seller-badge">{discountBadge}</div>
            )}
            {/* Truyền variantId lên URL */}
            <Link to={`/products/${product.product.slug}?variantId=${product._id}`}>
              <img
                src={product.image_url || 'assets/images/default.png'}
                alt={`${product.product.product_name} ${product.color.color_name} ${product.storage.storage_name}`}
                className="best-seller-image"
              />
            </Link>
            <p className="best-seller-name">
              {product.product.product_name} {product.color.color_name} {product.storage.storage_name}
            </p>
            <p className="best-seller-price">
              {discount ? (
                <>
                  <span style={{ color: 'red', fontWeight: 'bold' }}>${finalPrice}</span>
                  <span style={{ textDecoration: 'line-through', marginLeft: 8, color: '#888' }}>${product.price}</span>
                </>
              ) : (
                <>${product.price}</>
              )}
            </p>
            <div className="best-seller-tags">
              <span className="best-seller-tag-green">FREE SHIPPING</span>
              <span className="best-seller-tag-red">FREE GIFT</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductHome;