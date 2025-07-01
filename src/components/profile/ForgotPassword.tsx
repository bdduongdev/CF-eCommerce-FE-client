import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type ResetForm = {
  email: string;
  token: string;
  password: string;
  confirmPassword: string;
};

const schema = Yup.object({
  email: Yup.string().email("Email không hợp lệ").required("Vui lòng nhập email"),
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sendingToken, setSendingToken] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm<ResetForm>({
    resolver: yupResolver(schema),
  });

  // Countdown gửi lại mã
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // Gửi mã xác thực
  const handleSendToken = async () => {
    const email = getValues("email");
    if (!email) {
      toast.error(" Vui lòng nhập email trước khi gửi mã xác thực.");
      return;
    }

    setSendingToken(true);
    try {
      await axios.post("http://localhost:8888/api/auth/forgot-password", { email });
      toast.success(` Mã xác thực đã được gửi đến email: ${email}`);
      setCountdown(180); // Khóa gửi lại trong 3 phút
    } catch (err: any) {
      toast.error(err.response?.data?.message || " Gửi email thất bại.");
    } finally {
      setSendingToken(false);
    }
  };

  // Gửi form đặt lại mật khẩu
  const onSubmit = async (data: ResetForm) => {
    setIsSubmitting(true);
    try {
      await axios.post(`http://localhost:8888/api/auth/reset-password/${data.token}`, {
        password: data.password,
        confirmPassword: data.confirmPassword,
      });

      toast.success(" Đặt lại mật khẩu thành công! Đang chuyển hướng...");
      reset();

      setTimeout(() => {
        navigate("/login");
        setTimeout(() => {
          window.location.reload();
        }, 100);
      }, 4000);
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Có lỗi xảy ra khi đặt lại mật khẩu.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Quên mật khẩu</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            {...register("email")}
            placeholder="Nhập email"
            className="w-full px-3 py-2 border rounded text-sm"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Gửi mã xác thực */}
        <div>
          <button
            type="button"
            onClick={handleSendToken}
            disabled={sendingToken || countdown > 0}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm"
          >
            {sendingToken
              ? "Đang gửi..."
              : countdown > 0
              ? `Gửi lại sau ${countdown}s`
              : "Gửi mã xác thực"}
          </button>
        </div>

        {/* Mã xác thực */}
        <div>
          <label className="block text-sm mb-1">Mã xác thực</label>
          <input
            {...register("token")}
            placeholder="Nhập mã xác thực"
            className="w-full px-3 py-2 border rounded text-sm"
          />
          {errors.token && <p className="text-red-500 text-sm">{errors.token.message}</p>}
        </div>

        {/* Mật khẩu mới */}
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

        {/* Xác nhận mật khẩu */}
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
          {isSubmitting ? "Đang xử lý..." : "Đặt lại mật khẩu"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
