import React from 'react'
import { Link } from 'react-router-dom'
import AvtAndSideBar from '../../components/profile/AvtAndSideBar'
import FormInfor from '../../components/profile/FormInfor'

const Profile = () => {
    return (
        <>
            <main className="bg-[#e2e4eb] py-5">
                <section className="p-[30px] rounded-xl shadow-md flex flex-col md:flex-row gap-6 bg-white">
                    {/* Sidebar */}
                    <AvtAndSideBar />
                    {/*Info Form */}
                    <FormInfor />
                </section>
            </main>
        </>
    )
}

export default Profile