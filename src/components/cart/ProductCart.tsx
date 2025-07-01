import React from 'react';
import axios from 'axios';
import { toast } from 'sonner';

const ProductCart = ({ item, onQuantityChange, checked, onCheckChange }: {
  item: any,
  onQuantityChange: () => void,
  checked: boolean,
  onCheckChange: (id: string, checked: boolean) => void
}) => {
  const variant = item.variant_id;
  const product = variant?.product_id;
  const originalPrice = item.price || variant?.price || 0;
  let finalPrice = originalPrice;
  const quantity = item.quantity;

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

  const handleUpdateQuantity = async (newQuantity: number) => {
    if (newQuantity < 1) return;
    const token = localStorage.getItem('accessToken');
    try {
      await axios.put(
        `http://localhost:8888/api/cart/update/${item._id}`,
        { quantity: newQuantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const res = await axios.get('http://localhost:8888/api/cart/', {
        headers: { Authorization: `Bearer ${token}` }
      });
      localStorage.setItem('cartItems', JSON.stringify(res.data.data.items || []));
      window.dispatchEvent(new Event('cartUpdated'));
      toast.success('Cập nhật số lượng thành công!');
      onQuantityChange();
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Cập nhật thất bại!');
    }
  };

  const handleRemove = async () => {
    const token = localStorage.getItem('accessToken');
    try {
      await axios.delete(`http://localhost:8888/api/cart/remove/${item._id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const res = await axios.get('http://localhost:8888/api/cart/', {
        headers: { Authorization: `Bearer ${token}` }
      });
      localStorage.setItem('cartItems', JSON.stringify(res.data.data.items || []));
      window.dispatchEvent(new Event('cartUpdated'));
      toast.success('Đã xóa sản phẩm khỏi giỏ hàng!');
      onQuantityChange();
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Xóa sản phẩm thất bại!');
    }
  };

  return (
    <div className="flex gap-4 items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100 relative">
      <input
        type="checkbox"
        checked={checked}
        onChange={e => onCheckChange(item._id, e.target.checked)}
        className="mr-3 mt-1 accent-green-500 w-5 h-5"
      />
      <img
        src={variant?.image_url}
        alt={product?.product_name}
        className="w-[90px] md:w-[120px] h-[90px] md:h-[120px] object-contain rounded-lg border"
      />

      <div className="flex-1 flex flex-col justify-between min-h-[90px]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <p className="font-bold text-base">{product?.product_name}</p>
            {discountBadge && (
              <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                {discountBadge}
              </span>
            )}
          </div>
          <div className="text-xs text-gray-500 mb-1">
            Màu: {variant?.color_id?.color_name} | Dung lượng: {variant?.storage_id?.storage_name}
          </div>
          <div className="text-xs text-gray-400 mb-1">SKU: {variant?.sku}</div>
        </div>

        <div className="flex items-center gap-3 mt-2">
          <div className="text-sm">
            <span className="font-semibold text-green-700">{finalPrice.toLocaleString()}₫</span>
            {originalPrice !== finalPrice && (
              <span className="ml-2 line-through text-gray-400">{originalPrice.toLocaleString()}₫</span>
            )}
          </div>
          <span className="text-xs text-gray-500">x {quantity}</span>
          <span className="text-red-500 font-bold text-base ml-auto">
            {(finalPrice * quantity).toLocaleString()}₫
          </span>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <button className="text-xl px-2 font-bold border rounded bg-gray-100 hover:bg-gray-200" onClick={() => handleUpdateQuantity(quantity - 1)}>-</button>
          <span className="px-3 font-bold text-sm">{quantity}</span>
          <button className="text-xl px-2 font-bold border rounded bg-gray-100 hover:bg-gray-200" onClick={() => handleUpdateQuantity(quantity + 1)}>+</button>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          <span className="text-green-600 text-xs font-medium border border-green-500 rounded px-2 py-0.5">
            FREE SHIPPING
          </span>
          <span className="text-red-500 text-xs font-medium border border-red-500 rounded px-2 py-0.5">
            FREE GIFT
          </span>
          <span className="text-sm font-medium text-green-600 flex items-center gap-1">
            <i className="fa-solid fa-circle-check text-green-600" />
            In Stock
          </span>
        </div>
      </div>

      <button onClick={handleRemove} className="absolute top-3 right-3 text-gray-400 hover:text-red-600 transition-colors">
        <i className="fa-solid fa-trash text-lg" />
      </button>
    </div>
  );
};

export default ProductCart;
