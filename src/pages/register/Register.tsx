import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

type FormData = {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  address: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post('http://localhost:8888/api/auth/register', data);
      alert('Đăng ký thành công') ; 
      console.log('Đăng ký thành công:', response.data);
      reset();
    } catch (error: any) {
      console.error('Lỗi đăng ký:', error.response?.data || error.message);
    }
  };

  return (
    <main className="bg-[#e2e4eb] py-4">
      {/* Breadcrumb */}
      <section className="bg-white flex items-center rounded-md h-[80px] mb-4">
        <div className="ml-[20px] text-[14px] font-bold text-[#999999]">
          <Link to="/">Home</Link> / <Link to="/pages">Pages</Link> /{' '}
          <Link to="/register" className="text-black">Register</Link>
        </div>
      </section>

      {/* Register section */}
      <section className="bg-white rounded-md flex flex-col md:flex-row overflow-hidden">
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
          <form
            className="w-full max-w-[507px] px-4 md:px-0"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="text-[28px] font-bold text-[#1ABA1A] mb-[10px]">Register</h2>
            <p className="text-[14px] text-[#999999] mb-[30px]">JOIN TO US</p>

            {/* Fullname */}
            <div className="mb-6">
              <label className="labelCommon" htmlFor="fullname">Your Name</label>
              <input
                type="text"
                id="fullname"
                placeholder="John Doe"
                className="inputCommon"
                {...register("fullname", { required: "Họ tên là bắt buộc" })}
              />
              {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname.message}</p>}
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="labelCommon" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Example@gmail.com"
                className="inputCommon"
                {...register("email", {
                  required: "Email là bắt buộc",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Email không hợp lệ",
                  },
                })}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Phone */}
            <div className="mb-6">
              <label className="labelCommon" htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                placeholder="0987654321"
                className="inputCommon"
                {...register("phone", {
                  required: "Số điện thoại là bắt buộc",
                  pattern: {
                    value: /^[0-9]{9,11}$/,
                    message: "Số điện thoại không hợp lệ",
                  },
                })}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>

            {/* Address */}
            <div className="mb-6">
              <label className="labelCommon" htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                placeholder="Hà Nội, Việt Nam"
                className="inputCommon"
                {...register("address", {
                  required: "Địa chỉ là bắt buộc",
                })}
              />
              {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="labelCommon" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="..."
                className="inputCommon"
                {...register("password", {
                  required: "Mật khẩu là bắt buộc",
                  minLength: {
                    value: 6,
                    message: "Mật khẩu phải có ít nhất 6 ký tự",
                  },
                })}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            {/* Confirm Password */}
            <div className="mb-10">
              <label className="labelCommon" htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="..."
                className="inputCommon"
                {...register("confirmPassword", {
                  required: "Xác nhận mật khẩu là bắt buộc",
                  validate: (value) =>
                    value === watch("password") || "Mật khẩu không khớp",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
              )}
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
  );
};

export default Register;
