import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type ResetForm = {
  token: string;
  password: string;
  confirmPassword: string;
};

const schema = Yup.object({
  token: Yup.string().required("Vui lòng nhập mã xác thực"),
  password: Yup.string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .required("Vui lòng nhập mật khẩu mới"),
  confirmPassword: Yup.string()
    .required("Xác nhận mật khẩu là bắt buộc")
    .oneOf([Yup.ref("password")], "Mật khẩu xác nhận không khớp"),
});

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sendingToken, setSendingToken] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const storedUser = localStorage.getItem("user");
  const email = storedUser ? JSON.parse(storedUser).email : "";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ResetForm>({
    resolver: yupResolver(schema),
  });

  // Countdown logic
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // Gửi mã xác thực
  const handleSendToken = async () => {
    if (!email) return;
    setSendingToken(true);
    setMessage(null);
    try {
      await axios.post("http://localhost:8888/api/auth/forgot-password", { email });
      setMessage({
        text: `✅ Mã xác thực đã được gửi đến email: ${email}`,
        type: "success",
      });
      setCountdown(180); // Khóa gửi lại trong 3 phút
    } catch (err: any) {
      setMessage({
        text: err.response?.data?.message || "❌ Gửi email thất bại.",
        type: "error",
      });
    } finally {
      setSendingToken(false);
    }
  };

  // Đổi mật khẩu
  const onSubmit = async (data: ResetForm) => {
    setIsSubmitting(true);
    setMessage(null);
    try {
      await axios.post(`http://localhost:8888/api/auth/reset-password/${data.token}`, {
        password: data.password,
        confirmPassword: data.confirmPassword,
      });

      setMessage({
        text: "✅ Đặt lại mật khẩu thành công! Đang chuyển hướng...",
        type: "success",
      });
      reset();

      localStorage.removeItem("user"); // Xoá thông tin đăng nhập

      // chuyển hướng
      setTimeout(() => {
        navigate("/login");
        setTimeout(() => {
          window.location.reload(); 
        }, 100); 
      }, 4000);

    } catch (err: any) {
      setMessage({
        text: err.response?.data?.message || "❌ Có lỗi xảy ra khi đặt lại mật khẩu.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Đặt lại mật khẩu</h2>
      <p className="text-sm mb-4">
        Email: <strong>{email}</strong>
      </p>

      <button
        onClick={handleSendToken}
        disabled={sendingToken || countdown > 0}
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mb-4 text-sm"
      >
        {sendingToken
          ? "Đang gửi..."
          : countdown > 0
            ? `Gửi lại sau ${countdown}s`
            : "Gửi mã xác thực"}
      </button>

      {message && (
        <div
          className={`text-sm mb-4 ${message.type === "success" ? "text-green-600" : "text-red-600"
            }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Mã xác thực</label>
          <input
            {...register("token")}
            placeholder="Nhập mã xác thực"
            className="w-full px-3 py-2 border rounded text-sm"
          />
          {errors.token && <p className="text-red-500 text-sm">{errors.token.message}</p>}
        </div>

        <div>
          <label className="block text-sm mb-1">Mật khẩu mới</label>
          <input
            type="password"
            {...register("password")}
            placeholder="Nhập mật khẩu mới"
            className="w-full px-3 py-2 border rounded text-sm"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <div>
          <label className="block text-sm mb-1">Xác nhận mật khẩu</label>
          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="Xác nhận mật khẩu"
            className="w-full px-3 py-2 border rounded text-sm"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded text-sm w-full"
        >
          {isSubmitting ? "Đang xử lý..." : "Đổi mật khẩu"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
