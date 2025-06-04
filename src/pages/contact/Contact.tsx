import React from 'react'
import { Link } from 'react-router-dom'
import FormContact from '../../components/contact/FormContact'
import CompanyInfor from '../../components/contact/CompanyInfor'
import GoogleMap from '../../components/contact/GoogleMap'

const Contact = () => {
    return (
        <>
            <main className="bg-[#e2e4eb] py-5">
                <section className="p-[30px] bg-white rounded-xl flex flex-col md:flex-row gap-[30px] mb-4">
                    {/* Left Side: Contact Form */}
                    <div className="w-full md:w-3/5">
                        <h2 className="text-[18px] font-bold mb-12">READY TO WORK WITH US</h2>
                        <p className="text-gray-500 text-[16px] mb-7">
                            Contact us for all your questions and opinions
                        </p>
                        <form className="space-y-6">
                            {/* Name */}
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="w-full md:w-1/2">
                                    <label className="block text-[14px] mb-2">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <label className="block text-[14px] mb-2">
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>
                            </div>
                            {/* Email */}
                            <div>
                                <label className="block text-[14px] mb-2">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                            {/* Phone */}
                            <div>
                                <label className="block text-[14px] mb-2">
                                    Phone Number <span className="text-gray-400">(Optional)</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                            {/* Country */}
                            <div>
                                <label className="block text-[14px] mb-2">
                                    Country / Region <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <select className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-green-500">
                                        <option>United States (US)</option>
                                        <option>United Kingdom (UK)</option>
                                        <option>Vietnam (VN)</option>
                                    </select>
                                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                                        <i className="fa-solid fa-chevron-down" />
                                    </div>
                                </div>
                            </div>
                            {/* Subject */}
                            <div>
                                <label className="block text-[14px] mb-2">
                                    Subject <span className="text-gray-400">(Optional)</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                            {/* Message */}
                            <div>
                                <label className="block text-[14px] mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Note about your order, e.g. special note for delivery"
                                    defaultValue={""}
                                />
                            </div>
                            {/* Terms */}
                            <div className="flex space-x-2 text-[14px]">
                                <input type="checkbox" id="news" className="accent-green-500" />
                                <label htmlFor="news">
                                    I want to receive news and updates once in a while. By submitting, I'm agreed to the{' '}
                                    <Link to="/terms" className="text-[#1ABA1A] underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </label>
                            </div>
                            {/* Button */}
                            <div>
                                <button
                                    type="submit"
                                    className="mt-4 bg-[#1ABA1A] text-white px-7 py-4 rounded-md hover:bg-green-600 text-sm"
                                >
                                    SEND MESSAGE
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* Right Side: Company Info */}
                    <CompanyInfor />
                </section>

                <GoogleMap />

            </main>
        </>
    )
}

export default Contact