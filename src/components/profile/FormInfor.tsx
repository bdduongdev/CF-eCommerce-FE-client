import React from 'react'

const FormInfor = () => {
    return (
        <>
            <div className="w-full md:w-4/5">
                <h2 className="text-[24px] font-bold mb-7">Account Info</h2>
                <form className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                        <div className="w-full md:w-1/2">
                            <label className="block text-[14px] mb-2">
                                First Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                defaultValue="Mark"
                                className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <label className="block text-[14px] mb-2">
                                Last Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                defaultValue="Cole"
                                className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-[14px] mb-2">
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            defaultValue="swoo@gmail.com"
                            className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div>
                        <label className="block text-[14px] mb-2">
                            Phone Number (Optional)
                        </label>
                        <input
                            type="text"
                            defaultValue="+1 0231 4554 452"
                            className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
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
        </>
    )
}

export default FormInfor