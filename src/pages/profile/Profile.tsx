import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AvtAndSideBar from '../../components/profile/AvtAndSideBar'
import FormInfor from '../../components/profile/FormInfor'

const Profile = () => {
    return (
        <>
            <main className="bg-[#e2e4eb] py-5">
                <section className="p-[30px] rounded-xl flex flex-col md:flex-row gap-6 bg-white">
                    {/* Sidebar */}
                    <AvtAndSideBar />
                    {/*Info Form */}
                    <Outlet />
                </section>
            </main>
        </>
    )
}

export default Profile