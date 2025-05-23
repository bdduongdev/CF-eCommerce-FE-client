import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <>
            <main className="bg-[#e2e4eb] py-4">
                {/* Breadcrumb */}
                <section className="bg-white flex items-center rounded-md shadow-md h-[80px] mb-4">
                    <div className="ml-[20px] text-[14px] font-bold text-[#999999]">
                        <Link to="/">Home</Link> / <Link to="/pages">Pages</Link> /{" "}
                        <Link to="/register" className="text-black">Register</Link>
                    </div>
                </section>

                {/* Register section */}
                <section className="bg-white rounded-md shadow-md flex flex-col md:flex-row overflow-hidden">
                    {/* Cột ảnh */}
                    <div className="w-full md:w-1/2 hidden md:block">
                        <img
                            src="./assets/images/login.png"
                            alt="Login"
                            className="py-[98px] pl-[128px] object-cover"
                        />
                    </div>

                    {/* Cột form */}
                    <div className="w-full md:w-1/2 py-10 flex justify-center">
                        <form className="w-full max-w-[507px] px-4 md:px-0">
                            <h2 className="text-[28px] font-bold text-[#1ABA1A] mb-[10px]">
                                Register
                            </h2>
                            <p className="text-[14px] text-[#999999] mb-[30px]">JOIN TO US</p>

                            {/* Your Name */}
                            <div className="mb-6">
                                <label className="labelCommon" htmlFor="name">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    id="name"
                                    className="inputCommon"
                                />
                            </div>

                            {/* Email */}
                            <div className="mb-6">
                                <label className="labelCommon" htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="Example@gmail.com"
                                    id="email"
                                    className="inputCommon"
                                />
                            </div>

                            {/* Password */}
                            <div className="mb-6">
                                <label className="labelCommon" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="..."
                                    id="password"
                                    className="inputCommon"
                                />
                            </div>

                            {/* Confirm Password */}
                            <div className="mb-10">
                                <label className="labelCommon" htmlFor="confirmPassword">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="..."
                                    id="confirmPassword"
                                    className="inputCommon"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-[#1ABA1A] text-white w-full sm:w-[140px] h-[50px] rounded mb-[15px]"
                            >
                                Register
                            </button>

                            <div className="text-[14px] text-center sm:text-left">
                                <span className="text-[#999999]">ALREADY USER?</span>
                                <Link className="text-[#1ABA1A] ml-1" to="/login">LOGIN</Link>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Register
