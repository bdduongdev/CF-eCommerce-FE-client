import { Link } from "react-router-dom";

interface Discount {
  discount_type: "percentage" | "fixed";
  discount_value: number;
  description?: string;
}

interface ProductItemProps {
  product: {
    _id: string;
    price: number;
    image_url?: string;
    discounts?: Discount[];
    product?: {
      product_name: string;
      slug: string;
    };
    color?: {
      color_name: string;
    };
    storage?: {
      storage_name: string;
    };
  };
}

const ProductItem = ({ product }: ProductItemProps) => {
  const name =
    product?.product?.product_name ||
    "Sản phẩm chưa có tên";

  const slug =
    product?.product?.slug || "san-pham";

  const color =
    product?.color?.color_name || "";

  const storage =
    product?.storage?.storage_name || "";

  const price = Number(product?.price || 0);
  const thumbnail =
    product?.image_url || "/assets/images/default.png";

  // Tính giảm giá
  const discount = product.discounts?.[0];
  let finalPrice = price;
  let discountBadge = "";

  if (discount) {
    if (discount.discount_type === "percentage") {
      finalPrice = Math.round(price * (1 - discount.discount_value / 100));
      discountBadge = `SALE -${discount.discount_value}%`;
    } else if (discount.discount_type === "fixed") {
      finalPrice = Math.max(0, price - discount.discount_value);
      discountBadge = `SAVE $${discount.discount_value}`;
    }
  }

  return (
    <div className="border p-4 bg-white rounded-lg shadow hover:shadow-lg transition relative">
      {discount && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          {discountBadge}
        </div>
      )}

      <Link to={`/products/${slug}?variantId=${product._id}`}>
        <img
          src={thumbnail}
          alt={`${name} ${color} ${storage}`}
          className="w-full h-40 object-cover rounded mb-3"
        />
      </Link>

      <p className="text-sm font-semibold mb-1 line-clamp-2">
        {name} {color} {storage}
      </p>

      <p className="text-green-600 font-bold text-sm">
        ${finalPrice.toFixed(2)}
        {discount && (
          <span className="text-gray-500 line-through ml-2 text-xs">
            ${price.toFixed(2)}
          </span>
        )}
      </p>

      <div className="mt-2 space-x-2 text-xs">
        <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded">
          FREE SHIPPING
        </span>
        <span className="inline-block bg-red-100 text-red-600 px-2 py-1 rounded">
          FREE GIFT
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
