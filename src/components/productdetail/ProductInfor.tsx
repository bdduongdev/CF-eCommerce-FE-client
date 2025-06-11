import React from 'react'
import { Link } from 'react-router-dom'

interface Product {
    product_name: string;
    price: number;
    description: string ; 
    category_id: {
        category_name: string;
    };
    color_id?: {
        color_name: string;
        price: number;
    };
    storage_id?: {
        storage_name: string;
        price: number;
    };
    image_url: string;
    stock_quantity: number;
    status: string;
    total_price: number;
}

interface ProductInforProps {
    product: Product;
}

const ProductInfor = ({ product }: ProductInforProps) => {
    if (!product) return null

    const {
        product_name,
        price,
        description,
        category_id,
        color_id,
        storage_id,
        image_url,
        stock_quantity,
        status,
        total_price,
    } = product

    const socialLinks = [
        { icon: 'fa-twitter', color: '#1DA1F2' },
        { icon: 'fa-facebook-f', color: '#1877F2' },
        { icon: 'fa-instagram', color: '#C13584' },
        { icon: 'fa-youtube', color: '#FF0000' },
        { icon: 'fa-pinterest', color: '#E60023' }
    ]

    return (
        <section className="bg-white rounded-xl px-4 sm:px-6 lg:px-[30px] py-6 lg:py-[30px] grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-1 mb-4">
            {/* Hình ảnh sản phẩm */}
            <div className="flex justify-center items-center">
                <img
                    src={image_url}
                    alt={product_name}
                    className="w-[70%] h-auto max-h-[400px] object-contain rounded-md"
                />
            </div>

            {/* Thông tin sản phẩm */}
            <div>
                <h3 className="text-base sm:text-lg font-bold mt-2 mb-2">{product_name}</h3>
                <p className="text-xl sm:text-[22px] font-semibold text-black">${total_price}</p>

                <div className="flex flex-wrap gap-2 py-5 border-b border-gray-300">
                    <span className="text-green-600 text-xs font-medium border border-green-500 rounded px-2 py-0.5">
                        FREE SHIPPING
                    </span>
                    <span className="text-red-500 text-xs font-medium border border-red-500 rounded px-2 py-0.5">
                        FREE GIFT
                    </span>
                </div>

                {/* COLOR VARIANT */}
                {color_id && (
                    <div className="mt-5">
                        <p className="text-[14px] font-bold mb-3">
                            COLOR: <span className="text-gray-600 font-normal">{color_id.color_name}</span>
                        </p>
                        <div className="flex gap-2 text-[12px] flex-wrap">
                            <button className="border border-[#1ABA1A] rounded p-2 flex items-center gap-2 min-w-[150px]">
                                <div>
                                    <p>{color_id.color_name}</p>
                                    <p className="font-bold">${color_id.price}</p>
                                </div>
                            </button>
                        </div>
                    </div>
                )}

                {/* STORAGE VARIANT */}
                {storage_id && (
                    <div className="mt-5">
                        <p className="text-sm font-bold mb-3">
                            MEMORY SIZE: <span className="text-gray-600 font-normal">{storage_id.storage_name}</span>
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <button className="px-3 py-2 text-xs font-bold border border-[#1ABA1A] rounded text-black">
                                {storage_id.storage_name} - ${storage_id.price}
                            </button>
                        </div>
                    </div>
                )}

                {/* Quantity + Add to Cart */}
                <div className="my-6 flex flex-wrap items-center gap-3 sm:gap-4">
                    <div className="flex items-center border border-black rounded px-3 py-1">
                        <button className="text-xl px-2 font-bold">-</button>
                        <span className="px-4">1</span>
                        <button className="text-xl px-2 font-bold">+</button>
                    </div>
                    <button className="text-[#1ABA1A] border border-[#1ABA1A] px-4 sm:px-6 py-2 rounded text-sm font-semibold transition-all duration-300 hover:bg-[#1ABA1A] hover:text-white">
                        <i className="fa-solid fa-plus" /> Add To Cart
                    </button>
                    <button className="text-[#262626] border border-[#262626] px-4 sm:px-6 py-2 rounded text-sm font-semibold transition-all duration-300 hover:bg-[#262626] hover:text-white">
                        <i className="fa-solid fa-heart mr-1" /> Yêu thích
                    </button>
                </div>

                {/* Metadata */}
                <div className="my-5 text-sm">
                    <p className="text-gray-600">
                        <span className="text-black font-bold">CATEGORY:</span> {category_id?.category_name}
                    </p>
                    <p className="mt-1">
                        <span className="font-bold">Quantity:</span>{" "}
                        <span className="text-gray-700">{stock_quantity}</span>
                    </p>
                    <p className="mt-1">
                        <span className="font-bold">Status:</span>{" "}
                        <span className="text-gray-700 capitalize">{status}</span>
                    </p>
                </div>

                {/* Social Media */}
                <div className="flex gap-3 sm:gap-4 mt-8">
                    {socialLinks.map(({ icon, color }, index) => (
                        <Link
                            key={index}
                            to="#"
                            className="group flex items-center justify-center w-9 h-9 rounded-full bg-[#E1E3EB] text-sm transition-all duration-300"
                            style={{ color }}
                        >
                            <i
                                className={`fa-brands ${icon} group-hover:text-white`}
                                style={{ transition: 'color 0.3s' }}
                            />
                            <style>
                                {`
                                    .group:hover i.fa-brands.${icon} {
                                        color: white !important;
                                    }
                                    .group:hover {
                                        background-color: ${color} !important;
                                    }
                                `}
                            </style>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductInfor
