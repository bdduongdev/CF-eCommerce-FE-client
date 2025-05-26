import React from 'react'

const PopularCate = () => {
    return (
        <>
            <section className="bg-white rounded-lg shadow mb-4 py-[30px]">
                {/* Tiêu đề */}
                <div className="flex justify-between items-center mb-[30px] px-[30px] flex-wrap gap-2">
                    <h2 className="text-[18px] font-bold">POPULAR CATEGORIES</h2>
                    <a className="text-[13px] text-[#666666]" href="#">View All</a>
                </div>

                {/* Grid Items */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-[30px]">
                    {/* Item 1 */}
                    <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                        <div className="text-left flex-1">
                            <p className="text-sm font-semibold">iPhone (iOS)</p>
                            <p className="text-xs text-gray-500">18 items</p>
                        </div>
                        <img src="assets/images/topcellphone1.png" alt="iPhone Series" className="h-16 w-16 object-contain" />
                    </div>

                    {/* Item 2 */}
                    <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                        <div className="text-left flex-1">
                            <p className="text-sm font-semibold">Samsung</p>
                            <p className="text-xs text-gray-500">24 items</p>
                        </div>
                        <img src="assets/images/topcellphone1.png" alt="Samsung" className="h-16 w-16 object-contain" />
                    </div>

                    {/* Item 3 */}
                    <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                        <div className="text-left flex-1">
                            <p className="text-sm font-semibold">Xiaomi</p>
                            <p className="text-xs text-gray-500">12 items</p>
                        </div>
                        <img src="assets/images/topcellphone1.png" alt="Xiaomi" className="h-16 w-16 object-contain" />
                    </div>

                    {/* Item 4 */}
                    <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                        <div className="text-left flex-1">
                            <p className="text-sm font-semibold">Tablet</p>
                            <p className="text-xs text-gray-500">9 items</p>
                        </div>
                        <img src="assets/images/topcellphone1.png" alt="Tablet" className="h-16 w-16 object-contain" />
                    </div>

                    {/* Item 5 */}
                    <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                        <div className="text-left flex-1">
                            <p className="text-sm font-semibold">Accessories</p>
                            <p className="text-xs text-gray-500">30 items</p>
                        </div>
                        <img src="assets/images/topcellphone1.png" alt="Accessories" className="h-16 w-16 object-contain" />
                    </div>

                    {/* Item 6 */}
                    <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                        <div className="text-left flex-1">
                            <p className="text-sm font-semibold">OPPO</p>
                            <p className="text-xs text-gray-500">14 items</p>
                        </div>
                        <img src="assets/images/topcellphone1.png" alt="OPPO" className="h-16 w-16 object-contain" />
                    </div>

                    {/* Item 7 */}
                    <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                        <div className="text-left flex-1">
                            <p className="text-sm font-semibold">Realme</p>
                            <p className="text-xs text-gray-500">11 items</p>
                        </div>
                        <img src="assets/images/topcellphone1.png" alt="Realme" className="h-16 w-16 object-contain" />
                    </div>

                    {/* Item 8 */}
                    <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                        <div className="text-left flex-1">
                            <p className="text-sm font-semibold">Vivo</p>
                            <p className="text-xs text-gray-500">16 items</p>
                        </div>
                        <img src="assets/images/topcellphone1.png" alt="Vivo" className="h-16 w-16 object-contain" />
                    </div>

                    {/* Item 9 */}
                    <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                        <div className="text-left flex-1">
                            <p className="text-sm font-semibold">Huawei</p>
                            <p className="text-xs text-gray-500">7 items</p>
                        </div>
                        <img src="assets/images/topcellphone1.png" alt="Huawei" className="h-16 w-16 object-contain" />
                    </div>

                    {/* Item 10 */}
                    <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                        <div className="text-left flex-1">
                            <p className="text-sm font-semibold">Nokia</p>
                            <p className="text-xs text-gray-500">5 items</p>
                        </div>
                        <img src="assets/images/topcellphone1.png" alt="Nokia" className="h-16 w-16 object-contain" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default PopularCate