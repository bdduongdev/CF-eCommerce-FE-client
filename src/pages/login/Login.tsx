import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'sonner';

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const toastId = toast.loading('Đang đăng nhập...'); // 👈 Loading toast
    try {
      const response = await axios.post('http://localhost:8888/api/auth/login', data);
      const { accessToken, user } = response.data.data;

      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('user', JSON.stringify(user));
      }

      toast.success(' Đăng nhập thành công!', { id: toastId }); // Replace loading
      reset();

      setTimeout(() => {
        navigate('/');
        window.location.reload();
      }, 1800); // 👈 Delay trước khi chuyển trang
    } catch (error: any) {
      toast.error(error.response?.data?.message || ' Đăng nhập thất bại', {
        id: toastId,
      });
    }
  };

  return (
    <main className="bg-[#e2e4eb] py-4">
      {/* Breadcrumb */}
      <section className="bg-white flex items-center rounded-md shadow-md h-[80px] mb-4">
        <div className="ml-[30px]">
          <Link to="/" className="text-[14px] font-bold text-[#999999]">Home</Link> /
          <Link to="/pages" className="text-[14px] font-bold text-[#999999]">Pages</Link> /
          <Link to="/login" className="text-[14px] font-bold text-black">Login</Link>
        </div>
      </section>

      {/* Login form */}
      <section className="bg-white rounded-md shadow-md flex flex-col md:flex-row overflow-hidden h-[560px]">
        <div className="w-full md:w-1/2 hidden md:block">
          <img
            src="./assets/images/login.png"
            alt="Login"
            className="py-[98px] pl-[128px] object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 py-[47px] flex justify-center">
          <form className="w-full max-w-[507px] px-4 md:px-0" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-[28px] font-bold text-[#1ABA1A] mb-[10px]">Welcome Back</h2>
            <p className="text-[14px] text-[#999999] mb-[30px]">LOGIN TO CONTINUE</p>

            {/* Email */}
            <div className="mb-6">
              <label className="labelCommon" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="inputCommon"
                placeholder="Example@gmail.com"
                {...register('email', {
                  required: 'Email là bắt buộc',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Email không hợp lệ',
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="mb-2">
              <label className="labelCommon" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="inputCommon"
                placeholder="..."
                {...register('password', {
                  required: 'Mật khẩu là bắt buộc',
                  minLength: {
                    value: 6,
                    message: 'Mật khẩu phải có ít nhất 6 ký tự',
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>

            <div className="mb-10">
              <Link to="/forgot-password" className="text-[14px] text-[#999999] underline">
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
  );
};

export default Login;
