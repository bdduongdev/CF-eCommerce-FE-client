import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

// --- INTERFACES ---
interface CheckoutItem {
  _id?: string;
  variantId: string;
  product_name: string;
  price: number;
  quantity: number;
  image_url: string;
  discount?: {
    _id: string;
    discount_type: string;
    discount_value: number;
    description?: string;
  } | null;
}

interface FormData {
  fullname: string;
  country: string;
  street: string;
  ward: string;
  district: string;
  city: string;
  phone: string;
  email: string;
}

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [items, setItems] = useState<CheckoutItem[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [shippingFee] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [note, setNote] = useState("");
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    country: "Việt Nam",
    street: "",
    ward: "",
    district: "",
    city: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    if (location.state?.items) {
      const checkoutItems: CheckoutItem[] = location.state.items;
      setItems(checkoutItems);
      // Tính tổng tạm tính (chưa giảm giá)
      const newSubtotal = checkoutItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setSubtotal(newSubtotal);
    } else {
      toast.warning("⚠️ Không có sản phẩm để thanh toán. Đang chuyển về trang chủ.");
      navigate("/");
    }
  }, [location.state, navigate]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Tính tổng tiền đã giảm giá
  const totalAmount = items.reduce((acc, item) => {
    let finalPrice = item.price;
    if (item.discount) {
      if (item.discount.discount_type === 'percentage') {
        finalPrice = Math.round(item.price * (1 - item.discount.discount_value / 100));
      } else if (item.discount.discount_type === 'fixed') {
        finalPrice = Math.max(0, item.price - item.discount.discount_value);
      }
    }
    return acc + finalPrice * item.quantity;
  }, shippingFee);

  const handlePlaceOrder = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      toast.error("❌ Bạn cần đăng nhập để đặt hàng.");
      return;
    }

    const requiredFields: (keyof FormData)[] = ['fullname', 'street', 'ward', 'district', 'city', 'phone'];
    const emptyField = requiredFields.find(field => !formData[field]);
    if (emptyField) {
      toast.error(`❌ Vui lòng điền đầy đủ thông tin: ${emptyField.replace('_', ' ')}`);
      return;
    }

    if (items.length === 0) {
      toast.error("❌ Không có sản phẩm trong đơn hàng của bạn.");
      return;
    }

    setIsPlacingOrder(true);

    const shipping_address = {
      fullname: formData.fullname,
      phone: formData.phone,
      street: formData.street,
      ward: formData.ward,
      district: formData.district,
      city: formData.city,
      country: formData.country,
    };

    try {
      let res;
      if (items[0]?._id) {
        const cartItemIds = items.map(item => item._id);
        res = await axios.post(
          "http://localhost:8888/api/cart/checkout",
          {
            cartItemIds,
            shipping_address,
            payment_method: paymentMethod,
            note,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        res = await axios.post(
          "http://localhost:8888/api/orders",
          {
            shipping_address,
            payment_method: paymentMethod,
            note,
            items: items.map(item => ({
              product_variant_id: item.variantId,
              quantity: item.quantity,
            })),
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }

      if (res.data.success) {
        toast.success("🎉 Đặt hàng thành công!");
        navigate("/checkout/success", { 
          state: { 
            order: res.data.data,
            displayTotal: totalAmount
          } 
        });
      }
    } catch (error: any) {
      console.error("❌ Đặt hàng thất bại:", error?.response?.data || error);
      toast.error(`❌ Đặt hàng thất bại: ${error?.response?.data?.message || "Vui lòng thử lại."}`);
    } finally {
      setIsPlacingOrder(false);
    }
  };

  return (
    <main className="bg-[#e2e4eb] py-5">
      <section className="p-4 md:p-[30px] bg-white rounded-xl flex flex-col md:flex-row gap-[30px] min-h-screen">
        {/* Left Side: Checkout Form */}
        <div className="w-full md:w-3/5">
          <h2 className="text-lg font-bold mb-8">THÔNG TIN THANH TOÁN</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* ... giữ nguyên các trường form ... */}
            <div>
                <label htmlFor="fullname" className="block text-[14px] mb-2">
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <input
                  type="text" id="fullname" name="fullname" value={formData.fullname} onChange={handleInputChange}
                  className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>
            <div>
                <label htmlFor="country" className="block text-[14px] mb-2">Quốc gia <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select id="country" name="country" value={formData.country} onChange={handleInputChange} className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>Việt Nam</option>
                  </select>
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                    <i className="fa-solid fa-chevron-down" />
                  </div>
                </div>
            </div>
            <div>
                <label htmlFor="street" className="block text-[14px] mb-2">Địa chỉ <span className="text-red-500">*</span></label>
                <input
                  placeholder="Số nhà, tên đường..."
                  type="text" id="street" name="street" value={formData.street} onChange={handleInputChange}
                  className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <label htmlFor="ward" className="block text-[14px] mb-2">Phường/Xã <span className="text-red-500">*</span></label>
                <input
                  type="text" id="ward" name="ward" value={formData.ward} onChange={handleInputChange}
                  className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label htmlFor="district" className="block text-[14px] mb-2">Quận/Huyện <span className="text-red-500">*</span></label>
                <input
                  type="text" id="district" name="district" value={formData.district} onChange={handleInputChange}
                  className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="city" className="block text-[14px] mb-2">Tỉnh/Thành phố <span className="text-red-500">*</span></label>
              <input
                type="text" id="city" name="city" value={formData.city} onChange={handleInputChange}
                className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-[14px] mb-2">Số điện thoại <span className="text-red-500">*</span></label>
              <input
                type="text" id="phone" name="phone" value={formData.phone} onChange={handleInputChange}
                className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[14px] mb-2">Địa chỉ email <span className="text-red-500">*</span></label>
              <input
                type="email" id="email" name="email" value={formData.email} onChange={handleInputChange}
                className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-[14px] mb-2">Ghi chú (Tùy chọn)</label>
              <textarea
                rows={4} name="note" value={note} onChange={(e) => setNote(e.target.value)}
                className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Ghi chú về đơn hàng của bạn, ví dụ: thời gian giao hàng mong muốn."
              />
            </div>
          </form>
        </div>

        {/* Right Side: Your Order */}
        <div className="w-full md:w-2/5 flex flex-col">
          <h3 className="text-lg font-bold mb-8">ĐƠN HÀNG CỦA BẠN</h3>
          <div className="bg-gray-100 p-6 rounded-xl">
            <div className="text-gray-600 flex justify-between font-semibold text-sm pb-4 border-b border-gray-300 mb-2">
              <p>SẢN PHẨM</p>
              <p>TẠM TÍNH</p>
            </div>
            {/* Product List */}
            <div className="space-y-4 my-4 border-b border-gray-300 pb-4">
              {items.map((item) => {
                const originalPrice = item.price;
                let finalPrice = originalPrice;
                let discountBadge: string | null = null;
                if (item.discount) {
                  if (item.discount.discount_type === 'percentage') {
                    finalPrice = Math.round(originalPrice * (1 - item.discount.discount_value / 100));
                    discountBadge = `SALE ${item.discount.discount_value}%`;
                  } else if (item.discount.discount_type === 'fixed') {
                    finalPrice = Math.max(0, originalPrice - item.discount.discount_value);
                    discountBadge = `SAVE ${item.discount.discount_value.toLocaleString()}₫`;
                  }
                }
                return (
                  <div
                    key={item.variantId}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 border-b last:border-b-0 pb-2 last:pb-0"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.product_name}</p>
                      {discountBadge && (
                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded-full ml-2">
                          {discountBadge}
                        </span>
                      )}
                      <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                        <span>Giá: <span className="font-semibold text-black">{finalPrice.toLocaleString()}₫</span></span>
                        {originalPrice !== finalPrice && (
                          <span className="ml-1 line-through text-gray-400">{originalPrice.toLocaleString()}₫</span>
                        )}
                        <span>Số lượng: <span className="font-semibold text-black">{item.quantity}</span></span>
                      </div>
                    </div>
                    <div className="text-sm font-bold text-green-700">
                      {(finalPrice * item.quantity).toLocaleString()}₫
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="space-y-3 border-b border-gray-300 pb-4">
                <div className="flex justify-between text-sm">
                    <p>Tạm tính</p>
                    <span className="text-green-600">{totalAmount.toLocaleString()}₫</span>
                 </div>
                <div className="flex justify-between text-sm">
                    <p>Giao hàng</p>
                    <p className="font-semibold text-green-600">
                    {shippingFee > 0 ? `+ ${shippingFee.toLocaleString()}₫` : "Miễn phí"}
                    </p>
                 </div>
            </div>
            <div className="flex justify-between text-lg font-bold pt-4 mb-8">
              <span>Tổng cộng</span>
              <span className="text-green-600">{totalAmount.toLocaleString()}₫</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center p-4 border rounded-lg">
                <input type="radio" id="cod" name="payment" value="cod" checked={paymentMethod === "cod"} onChange={(e) => setPaymentMethod(e.target.value)} className="mr-3 w-4 h-4 accent-green-500" />
                <label htmlFor="cod" className="font-semibold text-sm">Thanh toán khi nhận hàng (COD)</label>
              </div>
              <div className="flex items-center p-4 border rounded-lg">
                <input type="radio" id="bank" name="payment" value="bank_transfer" checked={paymentMethod === "bank_transfer"} onChange={(e) => setPaymentMethod(e.target.value)} className="mr-3 w-4 h-4 accent-green-500" />
                <label htmlFor="bank" className="font-semibold text-sm">Chuyển khoản ngân hàng</label>
              </div>
              <div className="text-xs text-gray-500 p-3 bg-gray-200 rounded-md">
                Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi. Vui lòng sử dụng Mã đơn hàng của bạn trong phần Nội dung thanh toán. Đơn hàng sẽ được giao sau khi tiền đã chuyển.
              </div>
            </div>
            <button
              onClick={handlePlaceOrder}
              disabled={isPlacingOrder}
              className="w-full mt-7 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-md transition-all duration-300 disabled:bg-gray-400"
            >
              {isPlacingOrder ? "Đang xử lý..." : "ĐẶT HÀNG"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Checkout; 