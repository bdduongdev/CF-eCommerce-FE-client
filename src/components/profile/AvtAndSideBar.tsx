import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AvtAndSideBar = () => {
    const location = useLocation(); // 👈 lấy đường dẫn hiện tại

    // Hàm hỗ trợ: trả về class tương ứng tùy theo URL hiện tại
    const getLinkClasses = (path: string) => {
        const isActive = location.pathname === path;
        return `
            w-full flex items-center justify-between px-4 py-3 text-[14px] rounded-md
            ${isActive ? 'bg-[#1ABA1A] text-white' : 'bg-white text-black'}
        `;
    };

    return (
        <div className="w-full md:w-1/5 bg-gray-100 p-5 rounded-lg shadow-sm md:mr-20">
            <div className="items-center text-center md:text-left">
                <img
                    src="assets/images/avatar.png"
                    alt="Avatar"
                    className="w-full h-auto mx-auto md:mx-0 rounded-md mb-4"
                />
                <h2 className="font-bold text-[20px] my-4">Mark Cole</h2>
                <p className="text-[14px] text-gray-500 mb-6">swoo@gmail.com</p>
            </div>
            <nav className="space-y-2">
                <Link to="/profile" className={getLinkClasses('/profile')}>
                    Account info
                    <span className="text-xl">➜</span>
                </Link>
                <Link to="/profile/order" className={getLinkClasses('/profile/order')}>
                    My order
                    <span className="text-xl">➜</span>
                </Link>
                <Link to="/profile/address" className={getLinkClasses('/profile/address')}>
                    My address
                    <span className="text-xl">➜</span>
                </Link>
                <Link to="/profile/change-password" className={getLinkClasses('/profile/change-password')}>
                    Change password
                    <span className="text-xl">➜</span>
                </Link>
            </nav>
        </div>
    );
};

export default AvtAndSideBar;
