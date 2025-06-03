const ChangePassword = () => {
  return (
    <div className="w-full md:w-4/5">
      <h2 className="text-[24px] font-bold mb-7">Change Password</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-[14px] mb-2">
            Current Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            placeholder="Enter current password"
            className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-[14px] mb-2">
            New Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-[14px] mb-2">
            Confirm New Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            placeholder="Re-enter new password"
            className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <button
            type="submit"
            className="text-[14px] mt-4 bg-[#1ABA1A] text-white px-10 py-3 rounded-md hover:bg-green-600"
          >
            SAVE PASSWORD
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
