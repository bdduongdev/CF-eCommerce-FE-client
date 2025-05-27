import React from 'react'
import { Link } from 'react-router-dom'
import FormContact from '../../components/contact/FormContact'
import CompanyInfor from '../../components/contact/CompanyInfor'

const Contact = () => {
    return (
        <>
            <main className="bg-[#e2e4eb] py-5">
                <section className="p-[30px] bg-white rounded-xl shadow-md flex flex-col md:flex-row gap-[30px]">
                    {/* Left Side: Contact Form */}
                    <FormContact />
                    {/* Right Side: Company Info */}
                    <CompanyInfor />
                </section>
            </main>
        </>
    )
}

export default Contact