const Address = () => {
  return (
    <div className="w-full md:w-4/5">
      <h2 className="text-[24px] font-bold mb-7">My Address</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-[14px] mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="+84 912 345 678"
            className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-[14px] mb-2">
            Street Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="123 Main St, District 1"
            className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="w-full md:w-1/2">
            <label className="block text-[14px] mb-2">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Ho Chi Minh City"
              className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="block text-[14px] mb-2">
              District <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="District 1"
              className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-[14px] mb-2">Notes (Optional)</label>
          <textarea
            rows={3}
            placeholder="Near the park or any special delivery instruction..."
            className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <button
            type="submit"
            className="text-[14px] mt-4 bg-[#1ABA1A] text-white px-10 py-3 rounded-md hover:bg-green-600"
          >
            SAVE ADDRESS
          </button>
        </div>
      </form>
    </div>
  );
};

export default Address;
