import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

// --- INTERFACES ---
interface DiscountInfo {
  badge: string;
  description?: string;
}

interface Product {
  _id: string;
  product_name: string;
  price: number;
  total_price: number;
  original_price?: number;
  discount_info?: DiscountInfo;
  description: string;
  category_id: {
    category_name: string;
  };
  image_url: string;
  stock_quantity: number;
  status: string;
}

interface Variant {
  _id: string;
  color_id: string;
  storage_id: string;
  // ... các trường khác nếu cần
}

interface ProductInforProps {
  product: Product;
  colors: any[];
  storages: any[];
  variants: Variant[]; // Thêm mảng variants
  selectedColor: string | null;
  selectedStorage: string | null;
  setSelectedColor: (id: string) => void;
  setSelectedStorage: (id: string) => void;
  variantId: string | null;
  setVariantId: (id: string) => void;
}

const ProductInfor = ({
  product,
  colors,
  storages,
  variants,
  selectedColor,
  selectedStorage,
  setSelectedColor,
  setSelectedStorage,
  variantId,
  setVariantId,
}: ProductInforProps) => {
  const {
    product_name,
    price,
    total_price,
    original_price,
    discount_info,
    description,
    category_id,
    image_url,
    stock_quantity,
    status,
  } = product;

  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

  // Lấy variantId từ URL nếu có
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlVariantId = params.get("variantId");
    if (urlVariantId && variants && variants.length > 0) {
      const variant = variants.find(v => v._id === urlVariantId);
      if (variant) {
        setSelectedColor(variant.color_id);
        setSelectedStorage(variant.storage_id);
        setVariantId(variant._id);
      }
    }
    // eslint-disable-next-line
  }, [location.search, variants]);

  const increaseQuantity = () => {
    if (quantity < stock_quantity) {
      setQuantity(quantity + 1);
    } else {
      toast.warning(`Tối đa ${stock_quantity} sản phẩm.`);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleBuyNow = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      toast.error("Bạn cần đăng nhập để mua hàng!");
      return;
    }
    if (!variantId) {
      toast.error("Vui lòng chọn màu sắc và dung lượng!");
      return;
    }
    if (quantity > stock_quantity) {
      toast.error(`Số lượng tồn kho không đủ. Chỉ còn ${stock_quantity} sản phẩm.`);
      return;
    }
    const productToBuy = {
      variantId,
      quantity,
      product_name,
      image_url,
      price: total_price,
    };
    navigate("/checkout", { state: { items: [productToBuy], from: "buyNow" } });
  };

  const handleAddToCart = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      toast.error("Bạn cần đăng nhập để thêm vào giỏ hàng!");
      return;
    }
    if (!variantId) {
      toast.error("Vui lòng chọn màu sắc và dung lượng!");
      return;
    }
    if (quantity > stock_quantity) {
      toast.error(`Số lượng tồn kho không đủ. Chỉ còn ${stock_quantity} sản phẩm.`);
      return;
    }
    try {
      await axios.post(
        "http://localhost:8888/api/cart/add",
        { variantId, quantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const res = await axios.get('http://localhost:8888/api/cart/', {
        headers: { Authorization: `Bearer ${token}` }
      });
      localStorage.setItem('cartItems', JSON.stringify(res.data.data.items || []));
      window.dispatchEvent(new Event('cartUpdated'));
      toast.success("Đã thêm vào giỏ hàng!");
      navigate("/cart");
    } catch (error: any) {
      console.error("Lỗi thêm vào giỏ hàng:", error?.response?.data || error);
      toast.error(`Thêm vào giỏ hàng thất bại! ${error?.response?.data?.message || "Vui lòng thử lại."}`);
    }
  };

  return (
    <section className="bg-white rounded-xl px-4 py-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="flex justify-center items-center">
        <img
          src={image_url || '/default-image.png'}
          alt={product_name}
          className="w-[70%] h-auto max-h-[400px] object-contain rounded-md"
        />
      </div>

      <div>
        <h3 className="text-lg font-bold mb-2">{product_name}</h3>
        <div className="flex items-baseline gap-3 mb-4">
          <p className="text-2xl font-semibold text-red-600">
            {price.toLocaleString()}₫
          </p>
          {original_price && original_price !== price && (
            <p className="text-lg font-normal text-gray-500 line-through">
              {original_price.toLocaleString()}₫
            </p>
          )}
        </div>
        {discount_info && (
          <div className="mb-4">
            <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-1 rounded-full">
              {discount_info.badge}
            </span>
          </div>
        )}
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
          <p className="font-bold mb-2">Chọn màu sắc:</p>
          <div className="flex gap-2 flex-wrap">
            {colors.map((color) => (
              <button
                key={color._id}
                onClick={() => setSelectedColor(color._id)}
                className={`px-3 py-2 border rounded text-sm transition-colors ${
                  selectedColor === color._id
                    ? "border-green-600 text-green-600 bg-green-50"
                    : "border-gray-400 hover:border-gray-600"
                }`}
              >
                {color.color_name}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <p className="font-bold mb-2">Chọn dung lượng:</p>
          <div className="flex gap-2 flex-wrap">
            {storages.map((storage) => (
              <button
                key={storage._id}
                onClick={() => setSelectedStorage(storage._id)}
                className={`px-3 py-2 border rounded text-sm transition-colors ${
                  selectedStorage === storage._id
                    ? "border-green-600 text-green-600 bg-green-50"
                    : "border-gray-400 hover:border-gray-600"
                }`}
              >
                {storage.storage_name}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 py-5 border-b border-gray-300">
          <span className="text-green-600 text-xs font-medium border border-green-500 rounded px-2 py-0.5">
            FREE SHIPPING
          </span>
          <span className="text-red-500 text-xs font-medium border border-red-500 rounded px-2 py-0.5">
            FREE GIFT
          </span>
        </div>
        <div className="my-6 flex flex-wrap items-center gap-3">
          <div className="flex items-center border rounded overflow-hidden">
            <button
              onClick={decreaseQuantity}
              className="px-3 py-1 text-lg font-bold bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              -
            </button>
            <span className="px-4 py-1">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="px-3 py-1 text-lg font-bold bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              +
            </button>
          </div>
          <button
            onClick={handleBuyNow}
            className="text-[#1ABA1A] border border-[#1ABA1A] px-4 py-2 rounded text-sm font-semibold hover:bg-[#1ABA1A] hover:text-white transition-colors"
          >
            <i className="fa-solid fa-credit-card mr-1" /> Mua ngay
          </button>
          <button
            onClick={handleAddToCart}
            className="text-white bg-[#1ABA1A] border border-[#1ABA1A] px-4 py-2 rounded text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <i className="fa-solid fa-cart-plus mr-1" /> Thêm vào giỏ
          </button>
        </div>
        <div className="my-5 text-sm text-gray-700">
          <p>
            <span className="font-bold">Danh mục:</span>{" "}
            {category_id?.category_name}
          </p>
          <p>
            <span className="font-bold">Tình trạng:</span>{" "}
            <span className="capitalize">{status}</span>
          </p>
          <p>
            <span className="font-bold">Kho còn:</span> {stock_quantity}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductInfor;