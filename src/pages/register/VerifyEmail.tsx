import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type VerifyData = {
  email: string;
  token: string;
};

const VerifyEmail = () => {
    const navigate = useNavigate() ; 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyData>();

  const onSubmit = async (data: VerifyData) => {
    try {
      // ✅ Chỉ gửi verificationToken
      const res = await axios.post("http://localhost:8888/api/auth/verify-email", {
        verificationToken: data.token,
      });

      alert("Xác thực email thành công!");
      navigate("/login")
      console.log(res.data);
    } catch (error: any) {
      alert("Xác thực thất bại: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-[#1ABA1A]">Xác thực email</h2>

        {/* Trường email chỉ để hiển thị, không gửi về BE */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Email</label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded"
            {...register("email", { required: "Email là bắt buộc" })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-1">Mã xác thực</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            {...register("token", { required: "Token là bắt buộc" })}
          />
          {errors.token && <p className="text-red-500 text-sm">{errors.token.message}</p>}
        </div>

        <button
          type="submit"
          className="bg-[#1ABA1A] text-white w-full py-2 rounded hover:bg-green-600"
        >
          Xác thực
        </button>
      </form>
    </div>
  );
};

export default VerifyEmail;
