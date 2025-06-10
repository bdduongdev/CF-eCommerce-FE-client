import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type ChangePasswordData = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ChangePasswordData>();
  const navigate = useNavigate();

  const onSubmit = (data: ChangePasswordData) => {
    console.log("Password change submitted:", data);
    alert("Password changed successfully!");
    // TODO: Gọi API backend đổi mật khẩu
  };

  return (
    <div className="w-full md:w-4/5">
      <h2 className="text-[24px] font-bold mb-7">Change Password</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* Current Password */}
        <div>
          <label htmlFor="currentPassword" className="labelCommon">
            Current Password <span className="text-red-500">*</span>
          </label>
          <input
            id="currentPassword"
            type="password"
            className="inputCommon"
            {...register('currentPassword', {
              required: 'Current password is required',
            })}
          />
          {errors.currentPassword && (
            <p className="text-red-500 text-sm">{errors.currentPassword.message}</p>
          )}
        </div>

        {/* New Password */}
        <div>
          <label htmlFor="newPassword" className="labelCommon">
            New Password <span className="text-red-500">*</span>
          </label>
          <input
            id="newPassword"
            type="password"
            className="inputCommon"
            {...register('newPassword', {
              required: 'New password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
          />
          {errors.newPassword && (
            <p className="text-red-500 text-sm">{errors.newPassword.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label htmlFor="confirmPassword" className="labelCommon">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <input
            id="confirmPassword"
            type="password"
            className="inputCommon"
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: (value) =>
                value === watch('newPassword') || 'Passwords do not match',
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between mt-6">
          <button
            type="submit"
            className="bg-[#1ABA1A] text-white px-6 py-2 rounded-md text-sm hover:bg-green-600"
          >
            SAVE PASSWORD
          </button>
          <button
            type="button"
            onClick={() => navigate('/profile/forgot-password')}
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
