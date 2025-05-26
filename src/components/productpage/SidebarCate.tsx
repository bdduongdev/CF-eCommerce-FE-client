import React from 'react'

const SidebarCate = () => {
    return (
        <>
            <div className="bg-gray-200 rounded-md shadow-sm px-[30px] py-[30px] lg:col-span-3">
                <h2 className="font-bold text-[18px]">CATEGORIES</h2>
                <button className="w-1/2 bg-white text-[12px] font-bold py-2 rounded my-5">
                    All Categories
                </button>
                <ul className="space-y-2 text-sm text-gray-700">
                    <li className="font-bold text-[14px] mb-5">
                        Cell Phones &amp; Tablets
                    </li>
                    <ul className="ml-5 space-y-2">
                        <li>All</li>
                        <li>Iphone</li>
                        <li>Samsung</li>
                        <li>Xiaomi</li>
                        <li>Asus</li>
                        <li>Oppo</li>
                        <li>Gaming Smartphone</li>
                        <li>Ipad</li>
                        <li>Window Tablets</li>
                        <li>eReader</li>
                        <li>Smartphone Chargers</li>
                        <li>5G Support Smartphone</li>
                        <li>Smartphone Accessories</li>
                        <li>Tablets Accessories</li>
                        <li>
                            Cell Phones <span className="text-xs text-gray-500">$200</span>
                        </li>
                    </ul>
                </ul>
            </div>
        </>
    )
}

export default SidebarCate