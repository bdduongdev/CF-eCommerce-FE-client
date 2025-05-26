import React from 'react'

const SidebarFilter = () => {
    return (
        <>
            <div className="lg:col-span-3 bg-gray-200 rounded-md shadow-sm px-6 py-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                    <h2 className="font-bold text-[18px]">CATEGORIES</h2>
                    <button className="text-[14px] hover:underline">Reset All</button>
                </div>
                {/* By Brands */}
                <div className="my-10">
                    <h3 className="font-bold text-[14px] mb-3">By Brands</h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                        <li>
                            <label>
                                <input type="checkbox" className="accent-green-600 mr-2" />
                                Elemento (14)
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" className="accent-green-600 mr-2" />
                                Apple (36)
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" className="accent-green-600 mr-2" />
                                Microsoft (12)
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" className="accent-green-600 mr-2" />
                                Samsung (20)
                            </label>
                        </li>
                    </ul>
                </div>
                {/* By Price */}
                <div className="mb-10">
                    <h3 className="font-bold text-[14px] mb-2">By Price</h3>
                    <input
                        type="range"
                        min={0}
                        max={10000}
                        defaultValue={5000}
                        className="w-full accent-green-600"
                    />
                    <div className="flex items-center gap-2 mt-3">
                        <input
                            type="text"
                            placeholder="$0"
                            className="w-1/2 border rounded px-2 py-1 text-sm"
                        />
                        <span>-</span>
                        <input
                            type="text"
                            placeholder="$10000"
                            className="w-1/2 border rounded px-2 py-1 text-sm"
                        />
                    </div>
                    <button className="mt-3 bg-green-600 font-bold text-white text-[14px] px-4 py-1 rounded hover:bg-green-700 transition">
                        GO
                    </button>
                </div>
                {/* By Rating */}
                <div className="mb-10">
                    <h3 className="font-bold text-[14px] mb-3">By Rating</h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                        <li>
                            <label>
                                <input type="checkbox" className="accent-green-600 mr-2" />★ ★ ★ ★
                                ★ (8)
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" className="accent-green-600 mr-2" />★ ★ ★ ★
                                ☆ (15)
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" className="accent-green-600 mr-2" />★ ★ ★ ☆
                                ☆ (11)
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" className="accent-green-600 mr-2" />★ ★ ☆ ☆
                                ☆ (6)
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" className="accent-green-600 mr-2" />★ ☆ ☆ ☆
                                ☆ (3)
                            </label>
                        </li>
                    </ul>
                </div>
                {/* By Color */}
                <div className="mb-10">
                    <h3 className="font-bold text-[14px] mb-3">By Color</h3>
                    <div className="flex flex-wrap gap-2">
                        <div className="w-7 h-7 rounded-full bg-black border" />
                        <div className="w-7 h-7 rounded-full bg-red-600 border" />
                        <div className="w-7 h-7 rounded-full bg-blue-600 border" />
                        <div className="w-7 h-7 rounded-full bg-green-600 border" />
                        <div className="w-7 h-7 rounded-full bg-gray-600 border" />
                    </div>
                </div>
                {/* By Memory */}
                <div className="mb-10">
                    <h3 className="font-bold text-[14px] mb-2">By Memory</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li>
                            <label>
                                <input type="checkbox" className="accent-green-600 mr-2" />1 GB
                                (2)
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" className="accent-green-600 mr-2" />8 GB
                                (10)
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" className="accent-green-600 mr-2" />
                                16 GB (6)
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" className="accent-green-600 mr-2" />
                                128 GB (20)
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SidebarFilter