import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Success = () => {
  const location = useLocation();
  const orderWrapper = location.state?.order;
  const displayTotal = location.state?.displayTotal; // Get total from checkout state

  const [order, setOrder] = useState(orderWrapper?.order || orderWrapper);

  useEffect(() => {
    // If the structure changes, this helps debug.
    console.log("Received data on success page:", location.state);

    if (location.state?.order) {
      // Handle both nested and direct order object structures
      const potentialOrder = location.state.order.order || location.state.order;
      setOrder(potentialOrder);
    }

    if (!order) {
      console.warn("No order data found on success page.");
    }
  }, [location.state, order]);

  if (!order) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center bg-gray-50">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Lỗi</h1>
        <p className="text-gray-700 mb-6">Không tìm thấy thông tin đơn hàng. Có thể bạn đã truy cập trực tiếp trang này.</p>
        <Link
          to="/"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
        >
          Quay về Trang Chủ
        </Link>
      </div>
    );
  }

  // Use the passed total for display; otherwise, fallback to the order's total.
  const finalTotal = displayTotal !== undefined ? displayTotal : order.total_amount;

  return (
    <main className="bg-gray-50 py-10">
      <section className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg text-center">
        <div className="mb-6">
          <svg className="w-20 h-20 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h1 className="text-3xl font-extrabold text-gray-800 mb-3">Đặt Hàng Thành Công!</h1>
        <p className="text-gray-600 mb-6">
          Cảm ơn bạn đã mua sắm! Đơn hàng của bạn đã được nhận và đang được xử lý.
        </p>

        <div className="bg-gray-100 rounded-lg p-6 my-8 text-left text-sm">
          <h2 className="text-lg font-bold mb-4 border-b pb-2">Chi Tiết Đơn Hàng</h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <p className="font-semibold text-gray-700">Mã đơn hàng:</p>
            <p className="font-mono text-gray-900">{order.order_number}</p>

            <p className="font-semibold text-gray-700">Ngày đặt:</p>
            <p className="text-gray-900">{new Date(order.order_date).toLocaleDateString('vi-VN')}</p>

            <p className="font-semibold text-gray-700">Tổng cộng:</p>
            <p className="font-bold text-green-600">{finalTotal.toLocaleString()}₫</p>

            <p className="font-semibold text-gray-700">Phương thức thanh toán:</p>
            <p className="capitalize text-gray-900">{order.payment_method.replace('_', ' ')}</p>
          </div>
        </div>

        <p className="text-gray-600 mb-8">
          Bạn sẽ sớm nhận được email xác nhận với chi tiết đầy đủ.
        </p>

        <Link
          to="/"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
        >
          Tiếp tục Mua Sắm
        </Link>
      </section>
    </main>
  );
};

export default Success; 