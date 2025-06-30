import React from 'react';

const ProductCart = ({ item }: { item: any }) => {
  const { variantId, quantity } = item;
  const product = variantId?.productId;
  const price = variantId?.price || 0;

  return (
    <div className="flex gap-4 items-start bg-gray-100 p-4 rounded-lg relative">
      <img
        src={product?.image_url}
        alt={product?.product_name}
        className="w-[90px] md:w-[200px] h-auto object-contain rounded-lg"
      />

      <div className="flex-1">
        <p className="font-bold text-sm">{product?.product_name}</p>
        <p className="text-red-500 font-semibold text-lg my-4">
          {(price * quantity).toLocaleString()}₫
        </p>

        <div className="flex items-center border border-black rounded-lg px-3 py-1 w-fit">
          <button className="text-xl px-1 font-bold">-</button>
          <span className="px-4 font-bold text-sm">{quantity}</span>
          <button className="text-xl px-1 font-bold">+</button>
        </div>

        <div className="flex flex-wrap gap-2 pt-5 pb-3">
          <span className="text-green-600 text-xs font-medium border border-green-500 rounded px-2 py-0.5">
            FREE SHIPPING
          </span>
          <span className="text-red-500 text-xs font-medium border border-red-500 rounded px-2 py-0.5">
            FREE GIFT
          </span>
        </div>

        <p className="text-sm font-medium text-green-600 flex items-center gap-1">
          <i className="fa-solid fa-circle-check text-green-600" />
          In Stock
        </p>
      </div>

      <button className="absolute top-4 right-4 text-gray-500 hover:text-red-600">
        <i className="fa-solid fa-trash text-lg" />
      </button>
    </div>
  );
};

export default ProductCart;
