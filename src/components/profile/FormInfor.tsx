import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

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
  }, [reset]);

  const onSubmit = (data: ProfileData) => {
    localStorage.setItem('user', JSON.stringify(data));
    console.log('Thông tin đã lưu:', data);
    alert('Cập nhật thành công!');
    window.location.reload();
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
