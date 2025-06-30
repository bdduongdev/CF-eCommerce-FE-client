import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";

interface Product {
  product_name: string;
  price: number;
  description: string;
  category_id: {
    category_name: string;
  };
  color_id?: {
    _id: string;
    color_name: string;
    price?: number;
  };
  storage_id?: {
    _id: string;
    storage_name: string;
    price?: number;
  };
  image_url: string;
  stock_quantity: number;
  status: string;
  total_price: number;
}

interface ProductInforProps {
  product: Product;
  variants: any[];
  colors: any[];
  storages: any[];
  selectedColor: string | null;
  selectedStorage: string | null;
  setSelectedColor: (id: string) => void;
  setSelectedStorage: (id: string) => void;
  variantId: string;
}

const ProductInfor = ({
  product,
  variants,
  colors,
  storages,
  selectedColor,
  selectedStorage,
  setSelectedColor,
  setSelectedStorage,
  variantId,
}: ProductInforProps) => {
  const {
    product_name,
    total_price,
    description,
    category_id,
    image_url,
    stock_quantity,
    status,
  } = product;

  const [quantity, setQuantity] = useState(1);
  const [availableStock, setAvailableStock] = useState(stock_quantity);

  const increaseQuantity = () => {
    if (quantity < availableStock) {
      setQuantity(quantity + 1);
    } else {
      toast.warning(`⚠️ Tối đa ${availableStock} sản phẩm.`);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = async () => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      toast.error("❌ Bạn cần đăng nhập để thêm vào giỏ hàng!");
      return;
    }

    if (quantity > availableStock) {
      toast.error(`❌ Số lượng tồn kho không đủ. Chỉ còn ${availableStock} sản phẩm.`);
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:8888/api/cart/add",
        {
          variantId,
          quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      //  Thêm thành công
      toast.success(" Đã thêm vào giỏ hàng!");
      setAvailableStock((prev) => prev - quantity);
    } catch (error: any) {
      console.error("❌ Lỗi thêm vào giỏ hàng:", error?.response?.data || error);
      toast.error(
        `❌ Thêm vào giỏ hàng thất bại! ${
          error?.response?.data?.message || "Vui lòng thử lại."
        }`
      );
    }
  };

  return (
    <section className="bg-white rounded-xl px-4 py-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="flex justify-center items-center">
        <img
          src={image_url}
          alt={product_name}
          className="w-[70%] h-auto max-h-[400px] object-contain rounded-md"
        />
      </div>

      <div>
        <h3 className="text-lg font-bold mb-2">{product_name}</h3>
        <p className="text-2xl font-semibold text-black mb-4">
          {total_price.toLocaleString()}₫
        </p>

        <p className="text-sm text-gray-600 mb-4">{description}</p>

        {/* COLOR SELECTION */}
        <div className="mb-4">
          <p className="font-bold mb-2">Chọn màu sắc:</p>
          <div className="flex gap-2 flex-wrap">
            {colors.map((color) => (
              <button
                key={color._id}
                onClick={() => setSelectedColor(color._id)}
                className={`px-3 py-2 border rounded text-sm ${
                  selectedColor === color._id
                    ? "border-green-600 text-green-600"
                    : "border-gray-400"
                }`}
              >
                {color.color_name}
              </button>
            ))}
          </div>
        </div>

        {/* STORAGE SELECTION */}
        <div className="mb-6">
          <p className="font-bold mb-2">Chọn dung lượng:</p>
          <div className="flex gap-2 flex-wrap">
            {storages.map((storage) => (
              <button
                key={storage._id}
                onClick={() => setSelectedStorage(storage._id)}
                className={`px-3 py-2 border rounded text-sm ${
                  selectedStorage === storage._id
                    ? "border-green-600 text-green-600"
                    : "border-gray-400"
                }`}
              >
                {storage.storage_name}
              </button>
            ))}
          </div>
        </div>

        {/* LABELS */}
        <div className="flex flex-wrap gap-2 py-5 border-b border-gray-300">
          <span className="text-green-600 text-xs font-medium border border-green-500 rounded px-2 py-0.5">
            FREE SHIPPING
          </span>
          <span className="text-red-500 text-xs font-medium border border-red-500 rounded px-2 py-0.5">
            FREE GIFT
          </span>
        </div>

        {/* QUANTITY + ACTION */}
        <div className="my-6 flex flex-wrap items-center gap-3">
          <div className="flex items-center border rounded overflow-hidden">
            <button
              onClick={decreaseQuantity}
              className="px-3 py-1 text-lg font-bold bg-gray-200"
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="px-3 py-1 text-lg font-bold bg-gray-200"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="text-[#1ABA1A] border border-[#1ABA1A] px-4 py-2 rounded text-sm font-semibold hover:bg-[#1ABA1A] hover:text-white"
          >
            <i className="fa-solid fa-plus mr-1" /> Thêm vào giỏ
          </button>

          <button className="text-[#262626] border border-[#262626] px-4 py-2 rounded text-sm font-semibold hover:bg-[#262626] hover:text-white">
            <i className="fa-solid fa-heart mr-1" /> Yêu thích
          </button>
        </div>

        {/* INFO */}
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
            <span className="font-bold">Kho còn:</span> {availableStock}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductInfor;
