import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <main className="bg-[#e2e4eb] py-4">
        {/* chuyển hướng trang */}
        <section className="bg-white flex items-center rounded-md shadow-md h-[80px] mb-4">
          <div className="ml-[30px]">
            <Link to="/" className="text-[14px] font-bold text-[#999999]">
              Home
            </Link>{" "}
            /
            <Link to="/pages" className="text-[14px] font-bold text-[#999999]">
              Pages
            </Link>{" "}
            /
            <Link to="/login" className="text-[14px] font-bold text-black">
              Login
            </Link>
          </div>
        </section>

        {/* login */}
        <section className="bg-white rounded-md shadow-md flex flex-col md:flex-row overflow-hidden h-[560px]">
          {/* Cột ảnh - ẩn trên mobile */}
          <div className="w-full md:w-1/2 hidden md:block">
            <img
              src="./assets/images/login.png"
              alt="Login"
              className="py-[98px] pl-[128px] object-cover"
            />
          </div>

          {/* Cột form */}
          <div className="w-full md:w-1/2 py-[47px] flex justify-center">
            <form className="w-full max-w-[507px] px-4 md:px-0">
              <h2 className="text-[28px] font-bold text-[#1ABA1A] mb-[10px]">
                Welcome Back
              </h2>
              <p className="text-[14px] text-[#999999] mb-[30px]">
                LOGIN TO CONTINUE
              </p>
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
              <div className="mb-2">
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
              <div className="mb-10">
                <Link
                  to="/forgot-password"
                  className="text-[14px] text-[#999999] underline"
                >
                  Forget Password ?
                </Link>
              </div>
              <button
                type="submit"
                className="bg-[#1ABA1A] text-white w-[140px] h-[50px] rounded mb-[15px]"
              >
                Login
              </button>
              <div>
                <span className="text-[14px] text-[#999999]">NEW USER ?</span>
                <Link to="/register" className="text-[14px] text-[#1ABA1A] ml-1">
                  SIGN UP
                </Link>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

export default Login
