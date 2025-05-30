import React from 'react';

const Review = () => {
    return (
        <div className="w-full">
            <div className="space-y-6">
                {/* Review 1 */}
                <div className="flex items-start space-x-4">
                    <img
                        src="https://i.pravatar.cc/40?u=minh"
                        alt="Minh Nguyễn"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <p className="font-medium">Minh Nguyễn</p>
                        <p className="text-yellow-500 text-sm">★★★★★</p>
                        <p className="mt-1 text-gray-700">
                            Sản phẩm chất lượng, giao hàng nhanh, rất hài lòng!
                        </p>
                    </div>
                </div>

                {/* Review 2 */}
                <div className="flex items-start space-x-4">
                    <img
                        src="https://i.pravatar.cc/40?u=linh"
                        alt="Linh Trần"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <p className="font-medium">Linh Trần</p>
                        <p className="text-yellow-500 text-sm">★★★★☆</p>
                        <p className="mt-1 text-gray-700">
                            Mọi thứ ổn nhưng hộp hơi móp nhẹ khi giao.
                        </p>
                    </div>
                </div>

                {/* Review 3 */}
                <div className="flex items-start space-x-4">
                    <img
                        src="https://i.pravatar.cc/40?u=hai"
                        alt="Hải Phạm"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <p className="font-medium">Hải Phạm</p>
                        <p className="text-yellow-500 text-sm">★★★☆☆</p>
                        <p className="mt-1 text-gray-700">
                            Tạm ổn với giá tiền, đóng gói kỹ càng.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
