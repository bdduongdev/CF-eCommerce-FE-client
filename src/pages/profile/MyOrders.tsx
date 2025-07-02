import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { Eye, Package, Truck, CheckCircle, XCircle, Clock } from 'lucide-react';

interface Order {
  _id: string;
  order_number: string;
  status: string;
  payment_method: string;
  subtotal: number;
  discount_amount: number;
  shipping_fee: number;
  total_amount: number;
  created_at: string;
  shipping_address: {
    fullname: string;
    phone: string;
    city: string;
  };
  coupon_id?: {
    code: string;
    discount_value: number;
    discount_type: string;
  };
}

interface OrderDetail {
  _id: string;
  product_info: {
    product_name: string;
    color_name: string;
    storage_name: string;
    sku: string;
    image_url: string;
  };
  quantity: number;
  unit_price: number;
  total_price: number;
}

const MyOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [orderDetails, setOrderDetails] = useState<OrderDetail[]>([]);
  const [showOrderDetail, setShowOrderDetail] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [statusFilter, setStatusFilter] = useState('');

  const fetchOrders = async (page = 1, status = '') => {
    setLoading(true);
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        toast.error('Bạn cần đăng nhập để xem đơn hàng');
        return;
      }

      const params = new URLSearchParams();
      params.append('page', page.toString());
      params.append('limit', '10');
      if (status) params.append('status', status);

      const response = await axios.get(`http://localhost:8888/api/orders?${params}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.data.success) {
        setOrders(response.data.data.orders);
        setTotalPages(response.data.data.pagination.totalPages);
        setCurrentPage(response.data.data.pagination.page);
      }
    } catch (error: unknown) {
      console.error('Lỗi khi lấy đơn hàng:', error);
      const errorMessage = error instanceof Error ? error.message : 'Có lỗi xảy ra khi lấy đơn hàng';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const fetchOrderDetail = async (orderId: string) => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios.get(`http://localhost:8888/api/orders/${orderId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.data.success) {
        setOrderDetails(response.data.data.order_details);
        setShowOrderDetail(true);
      }
    } catch (error: unknown) {
      console.error('Lỗi khi lấy chi tiết đơn hàng:', error);
      const errorMessage = error instanceof Error ? error.message : 'Có lỗi xảy ra khi lấy chi tiết đơn hàng';
      toast.error(errorMessage);
    }
  };

  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order);
    fetchOrderDetail(order._id);
  };

  const handleCancelOrder = async (orderId: string) => {
    if (!window.confirm('Bạn có chắc chắn muốn hủy đơn hàng này?')) {
      return;
    }

    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios.patch(
        `http://localhost:8888/api/orders/${orderId}/cancel`,
        { reason: 'Khách hàng hủy' },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        toast.success('Hủy đơn hàng thành công');
        fetchOrders(currentPage, statusFilter);
      }
    } catch (error: unknown) {
      console.error('Lỗi khi hủy đơn hàng:', error);
      const errorMessage = error instanceof Error ? error.message : 'Có lỗi xảy ra khi hủy đơn hàng';
      toast.error(errorMessage);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'processing':
        return <Package className="h-4 w-4 text-blue-600" />;
      case 'shipped':
        return <Truck className="h-4 w-4 text-purple-600" />;
      case 'delivered':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'cancelled':
        return <XCircle className="h-4 w-4 text-red-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Chờ xử lý';
      case 'processing':
        return 'Đang xử lý';
      case 'shipped':
        return 'Đang giao';
      case 'delivered':
        return 'Đã giao';
      case 'cancelled':
        return 'Đã hủy';
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleStatusFilter = (status: string) => {
    setStatusFilter(status);
    setCurrentPage(1);
    fetchOrders(1, status);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchOrders(page, statusFilter);
  };

  return (
    <div className="w-full md:w-4/5">
      <div className="flex flex-col space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Đơn hàng của tôi</h2>
            <p className="text-gray-600 mt-1">Quản lý và theo dõi đơn hàng của bạn</p>
          </div>
        </div>

        {/* Status Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleStatusFilter('')}
            className={`px-4 py-2 text-sm font-medium rounded-lg border ${
              statusFilter === '' 
                ? 'bg-blue-600 text-white border-blue-600' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            Tất cả
          </button>
          <button
            onClick={() => handleStatusFilter('pending')}
            className={`px-4 py-2 text-sm font-medium rounded-lg border ${
              statusFilter === 'pending' 
                ? 'bg-yellow-600 text-white border-yellow-600' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            Chờ xử lý
          </button>
          <button
            onClick={() => handleStatusFilter('processing')}
            className={`px-4 py-2 text-sm font-medium rounded-lg border ${
              statusFilter === 'processing' 
                ? 'bg-blue-600 text-white border-blue-600' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            Đang xử lý
          </button>
          <button
            onClick={() => handleStatusFilter('shipped')}
            className={`px-4 py-2 text-sm font-medium rounded-lg border ${
              statusFilter === 'shipped' 
                ? 'bg-purple-600 text-white border-purple-600' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            Đang giao
          </button>
          <button
            onClick={() => handleStatusFilter('delivered')}
            className={`px-4 py-2 text-sm font-medium rounded-lg border ${
              statusFilter === 'delivered' 
                ? 'bg-green-600 text-white border-green-600' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            Đã giao
          </button>
        </div>

        {/* Orders List */}
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-2">Đang tải đơn hàng...</p>
          </div>
        ) : orders.length === 0 ? (
          <div className="text-center py-8">
            <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Chưa có đơn hàng nào</h3>
            <p className="text-gray-600">Bạn chưa có đơn hàng nào trong hệ thống.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order._id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  {/* Order Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">
                        #{order.order_number}
                      </h3>
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        {getStatusText(order.status)}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Ngày đặt:</span>
                        <p>{formatDate(order.created_at)}</p>
                      </div>
                      <div>
                        <span className="font-medium">Thanh toán:</span>
                        <p className="capitalize">{order.payment_method}</p>
                      </div>
                      <div>
                        <span className="font-medium">Tổng tiền:</span>
                        <p className="font-semibold text-green-600">{formatCurrency(order.total_amount)}</p>
                      </div>
                      <div>
                        <span className="font-medium">Địa chỉ:</span>
                        <p>{order.shipping_address.city}</p>
                      </div>
                    </div>

                    {order.coupon_id && (
                      <div className="mt-2">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          Đã áp dụng mã giảm giá: {order.coupon_id.code}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={() => handleViewOrder(order)}
                      className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <Eye className="h-4 w-4" />
                      Xem chi tiết
                    </button>
                    
                    {order.status === 'pending' && (
                      <button
                        onClick={() => handleCancelOrder(order._id)}
                        className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors"
                      >
                        <XCircle className="h-4 w-4" />
                        Hủy đơn
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 text-sm border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Trước
            </button>
            
            <span className="px-3 py-2 text-sm text-gray-700">
              Trang {currentPage} / {totalPages}
            </span>
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 text-sm border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Sau
            </button>
          </div>
        )}
      </div>

      {/* Order Detail Modal */}
      {showOrderDetail && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Chi tiết đơn hàng #{selectedOrder.order_number}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  {formatDate(selectedOrder.created_at)}
                </p>
              </div>
              <button
                onClick={() => setShowOrderDetail(false)}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
              >
                <XCircle className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Order Status */}
              <div className="flex items-center gap-3">
                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedOrder.status)}`}>
                  {getStatusIcon(selectedOrder.status)}
                  {getStatusText(selectedOrder.status)}
                </span>
              </div>

              {/* Shipping Address */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Địa chỉ giao hàng</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium">{selectedOrder.shipping_address.fullname}</p>
                  <p className="text-gray-600">{selectedOrder.shipping_address.phone}</p>
                  <p className="text-gray-600">{selectedOrder.shipping_address.city}</p>
                </div>
              </div>

              {/* Order Items */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Sản phẩm đã đặt</h3>
                <div className="space-y-4">
                  {orderDetails.map((detail) => (
                    <div key={detail._id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                      <img
                        src={detail.product_info.image_url || '/assets/images/default-product.jpg'}
                        alt={detail.product_info.product_name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{detail.product_info.product_name}</h4>
                        <p className="text-sm text-gray-600">
                          {detail.product_info.color_name} | {detail.product_info.storage_name}
                        </p>
                        <p className="text-sm text-gray-500">SKU: {detail.product_info.sku}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{formatCurrency(detail.unit_price)}</p>
                        <p className="text-sm text-gray-600">x{detail.quantity}</p>
                        <p className="font-semibold text-green-600">{formatCurrency(detail.total_price)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="border-t border-gray-200 pt-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Tạm tính:</span>
                    <span>{formatCurrency(selectedOrder.subtotal)}</span>
                  </div>
                  {selectedOrder.discount_amount > 0 && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Giảm giá:</span>
                      <span>-{formatCurrency(selectedOrder.discount_amount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span>Phí vận chuyển:</span>
                    <span>{formatCurrency(selectedOrder.shipping_fee)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold border-t border-gray-200 pt-2">
                    <span>Tổng cộng:</span>
                    <span className="text-green-600">{formatCurrency(selectedOrder.total_amount)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
