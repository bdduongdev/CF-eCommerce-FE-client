import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
          <Link to={`/products/${product.product.slug}`}>
            <img
              src={product.image_url || 'assets/images/default.png'}
              alt={`${product.product.product_name} ${product.color.color_name} ${product.storage.storage_name}`}
              className="best-seller-image"
            />
          </Link>
          <p className="best-seller-name">
            {product.product.product_name} {product.color.color_name} {product.storage.storage_name}
          </p>
          <p className="best-seller-price">${product.price}</p>
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
