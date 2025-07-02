import React, { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { toast } from "sonner";
import classNames from "classnames";

const MyOrder = () => {
    const [orders, setOrders] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedOrder, setSelectedOrder] = useState<any | null>(null);

    useEffect(() => {
        const fetchOrders = async () => {
            const token = localStorage.getItem("accessToken");
            if (!token) return;

            try {
                const res = await axios.get("http://localhost:8888/api/orders", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setOrders(res.data.data.orders || []);
            } catch (error) {
                console.error("Lỗi lấy đơn hàng:", error);
                toast.error("Không thể lấy đơn hàng");
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    // Tính tổng tiền của một đơn hàng
    const totalOf = (order: any) =>
        order.order_details?.reduce(
            (sum: number, item: any) => sum + item.total_price,
            0
        );

    if (loading)
        return <div className="p-4 text-center">Đang tải đơn hàng...</div>;

    if (!orders.length)
        return (
            <div className="p-4 text-center text-gray-500">
                Bạn chưa có đơn hàng nào.
            </div>
        );

    return (
        <div className="w-full overflow-x-auto">
            <table className="min-w-[700px] w-full table-auto border border-gray-300 rounded-md">
                <thead className="bg-gray-100">
                    <tr className="text-left text-sm">
                        <th className="p-3">Mã đơn</th>
                        <th className="p-3">Ngày đặt</th>
                        <th className="p-3">Tổng tiền</th>
                        <th className="p-3">Trạng thái</th>
                        <th className="p-3">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr
                            key={order._id}
                            className="border-t border-gray-200 text-sm hover:bg-gray-50"
                        >
                            <td className="p-3 font-semibold text-green-700">
                                #{order._id.slice(-6).toUpperCase()}
                            </td>
                            <td className="p-3 text-gray-600">
                                {dayjs(order.created_at).format("HH:mm DD/MM/YYYY")}
                            </td>
                            <td className="p-3 font-medium text-green-600">
                                {totalOf(order)?.toLocaleString()}₫
                            </td>
                            <td
                                className={classNames(
                                    "p-3 capitalize font-semibold",
                                    order.status === "pending" && "text-yellow-600",
                                    order.status === "completed" && "text-green-600",
                                    order.status === "cancelled" && "text-red-500"
                                )}
                            >
                                {order.status}
                            </td>
                            <td className="p-3">
                                <button
                                    className="text-blue-600 hover:underline"
                                    onClick={() => setSelectedOrder(order)}
                                >
                                    Xem chi tiết
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Popup chi tiết */}
            {selectedOrder && (
                <div
                    className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
                    onClick={() => setSelectedOrder(null)} // Click nền để đóng
                >
                    <div
                        className="bg-white w-[90%] max-w-2xl p-6 rounded shadow-lg relative"
                        onClick={(e) => e.stopPropagation()} // Ngăn lan click từ nội dung ra nền
                    >
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
                            onClick={() => setSelectedOrder(null)}
                        >
                            &times;
                        </button>
                        <h2 className="text-lg font-bold mb-4">Chi tiết đơn hàng</h2>
                        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                            {selectedOrder.order_details.map((item: any) => (
                                <div
                                    key={item._id}
                                    className="flex items-center gap-4 border-b pb-3"
                                >
                                    <img
                                        src={item.product_info?.image_url}
                                        alt={item.product_info?.product_name}
                                        className="w-16 h-16 object-cover border rounded"
                                    />
                                    <div className="flex-1">
                                        <div className="font-medium">
                                            {item.product_info?.product_name}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            SKU: {item.product_info?.sku}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            SL: {item.quantity} | Giá:{" "}
                                            {item.total_price.toLocaleString()}₫
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 text-right text-green-600 font-bold">
                            Tổng: {totalOf(selectedOrder)?.toLocaleString()}₫
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default MyOrder;
