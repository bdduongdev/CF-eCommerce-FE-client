import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProductCart from '../../components/cart/ProductCart';

const Cart = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  const fetchCartItems = async () => {
    const token = localStorage.getItem('accessToken');
    if (!token) return;
    try {
      const res = await axios.get('http://localhost:8888/api/cart/', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = res.data.data;
      if (Array.isArray(data?.items)) {
        setCartItems(data.items);
        // Nếu lần đầu vào trang, mặc định tick hết
        if (selectedIds.length === 0) {
          setSelectedIds(data.items.map((item: any) => item._id));
        }
        // Đồng bộ localStorage cartItems và phát sự kiện cartUpdated
        localStorage.setItem('cartItems', JSON.stringify(data.items || []));
        window.dispatchEvent(new Event('cartUpdated'));
      } else {
        setCartItems([]);
        setSelectedIds([]);
      }
    } catch (err) {
      console.error('Lỗi lấy giỏ hàng:', err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCartItems();
    // eslint-disable-next-line
  }, []);

  const handleQuantityChange = () => {
    fetchCartItems();
  };

  const handleCheckChange = (id: string, checked: boolean) => {
    setSelectedIds((prev) =>
      checked ? [...prev, id] : prev.filter((itemId) => itemId !== id)
    );
  };

  const selectedItems = cartItems.filter((item) => selectedIds.includes(item._id));
  const total = selectedItems.reduce((acc, item) => {
    const variant = item.variant_id;
    const originalPrice = item.price || variant?.price || 0;
    let finalPrice = originalPrice;
    // Lấy discount từ item.discount
    const discount = item.discount;
    if (discount) {
      if (discount.discount_type === 'percentage') {
        finalPrice = Math.round(originalPrice * (1 - discount.discount_value / 100));
      } else if (discount.discount_type === 'fixed') {
        finalPrice = Math.max(0, originalPrice - discount.discount_value);
      }
    }
    return acc + finalPrice * item.quantity;
  }, 0);

  const handleCheckout = () => {
    if (selectedItems.length === 0) return;
    navigate('/checkout', { state: { items: selectedItems } });
  };

  return (
    <main className="bg-[#e2e4eb] py-5">
      <section className="bg-white flex items-center rounded-md h-[80px] mb-4">
        <div className="ml-[30px]">
          <Link to="/" className="text-[14px] font-bold text-[#999999]">
            Home
          </Link>{' '}
          /{' '}
          <Link to="/cart" className="text-[14px] font-bold text-black">
            Cart
          </Link>
        </div>
      </section>

      <section className="bg-white rounded-xl grid grid-cols-1 md:grid-cols-3 gap-6 py-12 px-6 md:px-12">
        <div className="md:col-span-2 space-y-4 max-h-[500px] overflow-y-auto pr-2 scroll-smooth">
          {cartItems.map((item: any) => (
            <ProductCart
              key={item._id}
              item={item}
              onQuantityChange={handleQuantityChange}
              checked={selectedIds.includes(item._id)}
              onCheckChange={handleCheckChange}
            />
          ))}
        </div>

        <div className="relative">
          <div className="sticky top-7 bg-white border border-green-400 rounded-xl p-6 shadow-sm">
            <h2 className="font-bold text-lg mb-4">Order Summary</h2>
            <div className="space-y-3 text-sm">
              {selectedItems.length === 0 && (
                <div className="text-gray-400 text-center py-4">Chưa chọn sản phẩm nào</div>
              )}
              {selectedItems.map((item) => {
                const variant = item.variant_id;
                const product = variant?.product_id;
                const originalPrice = item.price || variant?.price || 0;
                let finalPrice = originalPrice;
                // Lấy discount từ item.discount
                const discount = item.discount;
                let discountBadge: string | null = null;
                if (discount) {
                  if (discount.discount_type === 'percentage') {
                    finalPrice = Math.round(originalPrice * (1 - discount.discount_value / 100));
                    discountBadge = `SALE ${discount.discount_value}%`;
                  } else if (discount.discount_type === 'fixed') {
                    finalPrice = Math.max(0, originalPrice - discount.discount_value);
                    discountBadge = `SAVE ${discount.discount_value.toLocaleString()}₫`;
                  }
                }
                return (
                  <div key={item._id} className="flex items-center border-b py-3 last:border-b-0 gap-3">
                    <img
                      src={variant?.image_url}
                      alt={product?.product_name}
                      className="w-14 h-14 object-contain rounded border"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 font-medium">
                        {product?.product_name}
                        {discountBadge && (
                          <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                            {discountBadge}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-gray-500">
                        Màu: {variant?.color_id?.color_name} | Dung lượng: {variant?.storage_id?.storage_name}
                      </div>
                      <div className="text-xs text-gray-400">SKU: {variant?.sku}</div>
                      <div className="text-xs text-gray-500">
                        Giá: <span className="font-semibold">{finalPrice.toLocaleString()}₫</span>
                        {originalPrice !== finalPrice && (
                          <span className="ml-1 line-through text-gray-400">{originalPrice.toLocaleString()}₫</span>
                        )}
                        {' '}| SL: {item.quantity}
                      </div>
                    </div>
                    <div className="font-bold text-green-700 min-w-[80px] text-right">{(finalPrice * item.quantity).toLocaleString()}₫</div>
                  </div>
                );
              })}
              <div className="flex justify-between pt-3 font-bold text-green-600 border-t mt-3">
                <span>ORDER TOTAL:</span>
                <span>{total.toLocaleString()}₫</span>
              </div>
            </div>
            <button
              className="mt-5 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold disabled:bg-gray-300"
              onClick={handleCheckout}
              disabled={selectedItems.length === 0}
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;