import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProductCart from '../../components/cart/ProductCart';

const Cart = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const token = localStorage.getItem('accessToken');
      if (!token) return;

      try {
        const res = await axios.get('http://localhost:8888/api/cart/items', {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = res.data.data;
        if (Array.isArray(data)) {
          setCartItems(data);
        } else {
          setCartItems([]); // fallback nếu data không phải array
        }
      } catch (err) {
        console.error('❌ Lỗi lấy giỏ hàng:', err);
      }
    };

    fetchCartItems();
  }, []);

  const total = cartItems.reduce((acc, item) => {
    const price = item.variantId?.price || 0;
    return acc + price * item.quantity;
  }, 0);

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
            <ProductCart key={item._id} item={item} />
          ))}
        </div>

        <div className="relative">
          <div className="sticky top-7 bg-white border border-green-400 rounded-xl p-6 shadow-sm">
            <h2 className="font-bold text-lg mb-4">Order Summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Sub Total:</span>
                <span className="font-semibold">{total.toLocaleString()}₫</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping estimate:</span>
                <span className="font-semibold">0₫</span>
              </div>
              <div className="flex justify-between">
                <span>Tax estimate:</span>
                <span className="font-semibold">0₫</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-bold text-green-600">
                <span>ORDER TOTAL:</span>
                <span>{total.toLocaleString()}₫</span>
              </div>
            </div>
            <button className="mt-5 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold">
              CHECKOUT
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
