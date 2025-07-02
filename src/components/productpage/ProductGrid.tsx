import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface Discount {
  discount_type: string;
  discount_value: number;
  description?: string;
}

interface ProductVariant {
  _id: string;
  price: number;
  image_url?: string;
  product: {
    product_name: string;
    slug: string;
  };
  color?: { color_name: string };
  storage?: { storage_name: string };
  discounts?: Discount[];
}

interface Pagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Hàm chuẩn hóa đường dẫn ảnh
function getPreviewImageUrl(url: string) {
  if (!url) return '/assets/images/default.png';
  if (url.startsWith('http') || url.startsWith('data:')) return url;
  if (url.startsWith('/uploads/')) return `http://localhost:8888${url}`;
  return `http://localhost:8888/uploads/products/${url}`;
}

const ProductGrid = () => {
  const [products, setProducts] = useState<ProductVariant[]>([])
  const [pagination, setPagination] = useState<Pagination>({ total: 0, page: 1, limit: 12, totalPages: 1 })
  const [loading, setLoading] = useState(false)

  const fetchProducts = async (page = 1) => {
    setLoading(true)
    try {
      const res = await fetch(`http://localhost:8888/api/variant?page=${page}&limit=${pagination.limit}`)
      const data = await res.json()
      setProducts(data.data.products)
      setPagination(data.data.pagination)
    } catch (err) {
      setProducts([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts(1)
    // eslint-disable-next-line
  }, [])

  const handlePageChange = (page: number) => {
    if (page < 1 || page > pagination.totalPages) return
    fetchProducts(page)
  }

  return (
    <div>
      {loading ? (
        <div className="text-center py-10">Loading...</div>
      ) : (
        <div className="best-seller-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.length === 0 && <div className="col-span-full text-center py-10">No products found.</div>}
          {products.map(product => {
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
              <div className="best-seller-item w-[220px] min-w-[220px] max-w-[220px] bg-white rounded-xl shadow-sm p-4 flex flex-col items-center relative">
                {discount && (
                  <div className="best-seller-badge absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">{discountBadge}</div>
                )}
                <Link to={`/products/${product.product.slug}?variantId=${product._id}`} className="w-full flex justify-center">
                  <img
                    src={getPreviewImageUrl(product.image_url || '')}
                    alt={`${product.product.product_name} ${product.color?.color_name || ''} ${product.storage?.storage_name || ''}`}
                    className="best-seller-image w-[160px] h-[160px] object-contain bg-gray-100 rounded mb-2"
                  />
                </Link>
                <p className="best-seller-name font-semibold text-center mt-2">
                  {product.product.product_name} {product.color?.color_name} {product.storage?.storage_name}
                </p>
                <p className="best-seller-price mt-1">
                  {discount ? (
                    <>
                      <span style={{ color: 'red', fontWeight: 'bold' }}>${finalPrice}</span>
                      <span style={{ textDecoration: 'line-through', marginLeft: 8, color: '#888' }}>${product.price}</span>
                    </>
                  ) : (
                    <>${product.price}</>
                  )}
                </p>
                <div className="best-seller-tags flex gap-2 mt-2">
                  <span className="best-seller-tag-green border border-green-500 text-green-600 px-2 py-1 rounded text-xs">FREE SHIPPING</span>
                  <span className="best-seller-tag-red border border-red-400 text-red-500 px-2 py-1 rounded text-xs">FREE GIFT</span>
                </div>
              </div>
            )
          })}
        </div>
      )}
      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-2">
        <button
          className="px-3 py-1 rounded border bg-white"
          disabled={pagination.page === 1}
          onClick={() => handlePageChange(pagination.page - 1)}
        >
          &laquo;
        </button>
        { 
          (() => {
            const pages = [];
            const total = pagination.totalPages;
            const current = pagination.page;
            const windowSize = 5;
            let start = Math.max(1, current - Math.floor(windowSize / 2));
            let end = start + windowSize - 1;
            if (end > total) {
              end = total;
              start = Math.max(1, end - windowSize + 1);
            }
            for (let i = start; i <= end; i++) pages.push(i);
            return pages.map((page) =>
              <button
                key={page}
                className={`px-3 py-1 rounded border ${page === current ? 'bg-green-500 text-white' : 'bg-white'}`}
                onClick={() => handlePageChange(Number(page))}
              >
                {page}
              </button>
            );
          })()
        }
        <button
          className="px-3 py-1 rounded border bg-white"
          disabled={pagination.page === pagination.totalPages}
          onClick={() => handlePageChange(pagination.page + 1)}
        >
          &raquo;
        </button>
      </div>
    </div>
  )
}

export default ProductGrid
