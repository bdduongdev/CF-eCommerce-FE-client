import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'sonner';

type ProfileData = {
  fullname: string;
  email: string;
  phone: string;
  address: string;
};

const FormInfor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfileData>();

  // Lấy user từ localStorage
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const userId = user?._id;

  // Gán dữ liệu ban đầu
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      reset({
        fullname: user.fullname || '',
        email: user.email || '',
        phone: user.phone || '',
        address: user.address || '',
      });
    }
  }, []);

const onSubmit = async (data: ProfileData) => {
  try {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const token = localStorage.getItem("accessToken");

    if (!token || !user._id) {
      throw new Error("Không tìm thấy token hoặc userId");
    }

    const response = await axios.put(
      `http://localhost:8888/api/profile/${user._id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    localStorage.setItem("user", JSON.stringify(response.data.data));
    toast.success("Cập nhật thành công!");
    // window.location.reload();
    // Phát sự kiện custom để sidebar biết mà cập nhật lại user
    window.dispatchEvent(new Event("userUpdated"));
  } catch (err: any) {
    console.error("Lỗi cập nhật:", err.response?.data || err.message);
    toast.error(err.response?.data?.message || "Cập nhật thất bại");
  }
};


  return (
    <div className="w-full md:w-4/5">
      <h2 className="text-[24px] font-bold mb-7">Account Info</h2>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name */}
        <div>
          <label htmlFor="fullname" className="labelCommon">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullname"
            type="text"
            className="inputCommon"
            {...register('fullname', { required: 'Tên là bắt buộc' })}
          />
          {errors.fullname && (
            <p className="text-red-500 text-sm">{errors.fullname.message}</p>
          )}
        </div>

        {/* Email - chỉ đọc */}
        <div>
          <label htmlFor="email" className="labelCommon">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className="inputCommon bg-gray-100 cursor-not-allowed"
            {...register('email')}
            readOnly
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="labelCommon">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="text"
            className="inputCommon"
            {...register('phone', {
              required: 'Số điện thoại là bắt buộc',
              pattern: {
                value: /^[0-9+\s]{9,15}$/,
                message: 'Số điện thoại không hợp lệ',
              },
            })}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="labelCommon">
            Address <span className="text-red-500">*</span>
          </label>
          <input
            id="address"
            type="text"
            className="inputCommon"
            {...register('address', { required: 'Địa chỉ là bắt buộc' })}
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>

        {/* Save button */}
        <div>
          <button
            type="submit"
            className="text-[14px] mt-4 bg-green-500 text-white px-10 py-3 rounded-md hover:bg-green-600"
          >
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormInfor;
