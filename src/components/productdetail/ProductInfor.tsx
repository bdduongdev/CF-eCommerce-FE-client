// src/components/ProductInfor.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  product_name: string;
  price: number;
  description: string;
  category_id: {
    category_name: string;
  };
  color_id?: {
    color_name: string;
    price?: number;
  };
  storage_id?: {
    storage_name: string;
    price?: number;
  };
  image_url: string;
  stock_quantity: number;
  status: string;
  total_price: number;
}

interface ProductInforProps {
  product: Product;
}

const ProductInfor = ({ product }: ProductInforProps) => {
  if (!product) return null;

  const {
    product_name,
    price,
    description,
    category_id,
    color_id,
    storage_id,
    image_url,
    stock_quantity,
    status,
    total_price,
  } = product;

  const socialLinks = [
    { icon: 'fa-twitter', color: '#1DA1F2' },
    { icon: 'fa-facebook-f', color: '#1877F2' },
    { icon: 'fa-instagram', color: '#C13584' },
    { icon: 'fa-youtube', color: '#FF0000' },
    { icon: 'fa-pinterest', color: '#E60023' },
  ];

  return (
    <section className="bg-white rounded-xl px-4 py-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="flex justify-center items-center">
        <img
          src={image_url}
          alt={product_name}
          className="w-[70%] h-auto max-h-[400px] object-contain rounded-md"
        />
      </div>

      <div>
        <h3 className="text-lg font-bold mb-2">{product_name}</h3>
        <p className="text-2xl font-semibold text-black mb-4">
          {total_price.toLocaleString()}₫
        </p>

        <p className="text-sm text-gray-600 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 py-5 border-b border-gray-300">
          <span className="text-green-600 text-xs font-medium border border-green-500 rounded px-2 py-0.5">
            FREE SHIPPING
          </span>
          <span className="text-red-500 text-xs font-medium border border-red-500 rounded px-2 py-0.5">
            FREE GIFT
          </span>
        </div>

        <div className="my-6 flex flex-wrap items-center gap-3">
          <button className="text-[#1ABA1A] border border-[#1ABA1A] px-4 py-2 rounded text-sm font-semibold hover:bg-[#1ABA1A] hover:text-white">
            <i className="fa-solid fa-plus mr-1" /> Thêm vào giỏ
          </button>
          <button className="text-[#262626] border border-[#262626] px-4 py-2 rounded text-sm font-semibold hover:bg-[#262626] hover:text-white">
            <i className="fa-solid fa-heart mr-1" /> Yêu thích
          </button>
        </div>

        <div className="my-5 text-sm text-gray-700">
          <p>
            <span className="font-bold">Danh mục:</span>{' '}
            {category_id?.category_name}
          </p>
          <p>
            <span className="font-bold">Tình trạng:</span>{' '}
            <span className="capitalize">{status}</span>
          </p>
          <p>
            <span className="font-bold">Kho còn:</span> {stock_quantity}
          </p>
        </div>

        <div className="flex gap-3 mt-8">
          {socialLinks.map(({ icon, color }, index) => (
            <Link
              key={index}
              to="#"
              className="group w-9 h-9 flex justify-center items-center rounded-full bg-[#E1E3EB] transition-all"
              style={{ color }}
            >
              <i
                className={`fa-brands ${icon} group-hover:text-white`}
                style={{ transition: 'color 0.3s' }}
              />
              <style>
                {`
                  .group:hover i.fa-brands.${icon} {
                    color: white !important;
                  }
                  .group:hover {
                    background-color: ${color} !important;
                  }
                `}
              </style>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductInfor;
