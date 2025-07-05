import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

type Category = {
  _id: string;
  category_name: string;
  slug?: string;
};

const PopularCate = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const location = useLocation();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:8888/api/categories");
        setCategories(res.data?.data?.categories || []);
      } catch (error) {
        console.error("Lỗi khi lấy danh mục:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="bg-white rounded-lg shadow mb-4 py-6">
      <div className="flex justify-between items-center px-6 mb-4 flex-wrap gap-2">
        <h2 className="text-lg font-bold">POPULAR CATEGORIES</h2>
        <Link to="/products" className="text-sm text-gray-600 hover:underline">View All</Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-6">
        {categories
          .filter(cat => !location.pathname.includes(`/products/category/${cat.slug || cat._id}`))
          .map(cat => (
            <Link
              to={`/products/category/${cat.slug || cat._id}`}
              key={cat._id}
              className="border rounded-lg px-4 py-3 bg-gray-50 hover:bg-green-100 transition-colors shadow-sm flex items-center justify-center text-sm font-medium text-gray-800 text-center h-[80px]"
            >
              {cat.category_name}
            </Link>
          ))}
      </div>
    </section>
  );
};

export default PopularCate;
