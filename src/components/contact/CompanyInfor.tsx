import React from 'react'
import { Link } from 'react-router-dom'

const CompanyInfor = () => {
    return (
        <>
            <div className="w-full md:w-2/5 flex flex-col justify-between mt-20">
                <div className="bg-gray-100 p-[30px] rounded-lg mb-2">
                    {/* United States */}
                    <div className="mb-12">
                        <p className="text-gray-600 uppercase text-[12px] mb-5">
                            United States (Head Quater)
                        </p>
                        <div className="text-[16px] space-y-2">
                            <p>152 Thatcher Road St, Mahattan, 10463, US</p>
                            <p>(+025) 3886 25 16</p>
                            <p>
                                <a
                                    href="mailto:hello@swatechmart.com"
                                    className="text-[#1ABA1A] hover:underline"
                                >
                                    hello@swatechmart.com
                                </a>
                            </p>
                        </div>
                    </div>
                    {/* United Kingdom */}
                    <div className="mb-12">
                        <p className="text-gray-600 uppercase text-[12px] mb-5">
                            United Kingdom (Branch)
                        </p>
                        <div className="text-[16px] space-y-2">
                            <p>12 Buckingham Rd, Thornthwaite, HG3 4TY, UK</p>
                            <p>(+718) 895-5350</p>
                            <p>
                                <a
                                    href="mailto:contact@swattechmart.co.uk"
                                    className="text-[#1ABA1A] hover:underline"
                                >
                                    contact@swattechmart.co.uk
                                </a>
                            </p>
                        </div>
                    </div>
                    {/* Icons */}
                    <div className="flex gap-4 mt-[40px]">
                        <Link
                            to="#"
                            className="hover:text-white flex items-center justify-center w-[35px] h-[35px] rounded-full bg-[#E1E3EB] text-[14px]"
                        >
                            <i className="fa-brands fa-twitter" />
                        </Link>
                        <Link
                            to="#"
                            className="hover:text-white flex items-center justify-center w-[35px] h-[35px] rounded-full bg-[#E1E3EB] text-[14px]"
                        >
                            <i className="fa-brands fa-facebook-f" />
                        </Link>
                        <Link
                            to="#"
                            className="hover:text-white flex items-center justify-center w-[35px] h-[35px] rounded-full bg-[#E1E3EB] text-[14px]"
                        >
                            <i className="fa-brands fa-instagram" />
                        </Link>
                        <Link
                            to="#"
                            className="hover:text-white flex items-center justify-center w-[35px] h-[35px] rounded-full bg-[#E1E3EB] text-[14px]"
                        >
                            <i className="fa-brands fa-youtube" />
                        </Link>
                        <Link
                            to="#"
                            className="hover:text-white flex items-center justify-center w-[35px] h-[35px] rounded-full bg-[#E1E3EB] text-[14px]"
                        >
                            <i className="fa-brands fa-pinterest" />
                        </Link>
                    </div>
                </div>
                {/* Image */}
                <div className="mt-6 md:mt-auto">
                    <img
                        src="assets/images/contact.png"
                        alt="Contact Image"
                        className="rounded-lg w-full h-auto"
                    />
                </div>
            </div>
        </>
    )
}

export default CompanyInfor