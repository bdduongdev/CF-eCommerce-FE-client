import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Product {
  _id: string;
  product_name: string;
  price: number;
  image_url?: string;
}

const ProductHome = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:8888/api/products');
        setProducts(res.data.data.products); 
      } catch (error) {
        console.error('Lỗi khi lấy sản phẩm:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="best-seller-grid">
      {products.slice(0, 5).map((product) => (
        <div className="best-seller-item" key={product._id}>
          <div className="best-seller-badge">SAVE ${199}</div>
          <Link to={`/products/${product._id}`}>
            <img
              src={product.image_url || 'assets/images/default.png'}
              alt={product.product_name}
              className="best-seller-image"
            />
          </Link>
          <p className="best-seller-name">{product.product_name}</p>
          <p className="best-seller-price">
            ${product.price - 1000}
            <span className="best-seller-old-price">${product.price}</span>
          </p>
          <div className="best-seller-tags">
            <span className="best-seller-tag-green">FREE SHIPPING</span>
            <span className="best-seller-tag-red">FREE GIFT</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductHome;
