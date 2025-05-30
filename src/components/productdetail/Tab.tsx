import React, { useState } from "react";
import { Link } from "react-router-dom";
import Review from "../../pages/review/Review";

function Tab() {
    // Giữ trạng thái active tab để đánh dấu css (nếu bạn muốn)
    const [activeTab, setActiveTab] = useState("description");

    return (
        <section className="bg-white rounded-xl px-4 md:px-6 lg:px-[30px] py-6 md:py-8 lg:py-[30px] mb-4">
            {/* Tabs */}
            <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-[30px] text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] mb-6 md:mb-8 overflow-x-auto">
                <button
                    className={`font-bold whitespace-nowrap ${activeTab === "description"
                            ? "text-black border-b-2 border-black"
                            : "text-[#666666] font-normal"
                        }`}
                    onClick={() => setActiveTab("description")}
                >
                    Description
                </button>
                <button
                    className={`whitespace-nowrap ${activeTab === "reviews"
                            ? "text-black border-b-2 border-black font-bold"
                            : "text-[#666666] font-normal"
                        }`}
                    onClick={() => setActiveTab("reviews")}
                >
                    Reviews [5]
                </button>
                <button
                    className={`whitespace-nowrap ${activeTab === "additional"
                            ? "text-black border-b-2 border-black font-bold"
                            : "text-[#666666] font-normal"
                        }`}
                    onClick={() => setActiveTab("additional")}
                >
                    Additional Information
                </button>
            </div>

            {/* Content */}
            <div className="text-[14px]">
                {activeTab === "description" && (
                    <>
                        <p className="mb-6">
                            Built for ultra-fast performance, the thin and lightweight Samsung Galaxy
                            Tab S2 goes anywhere you go. Photos, movies and documents pop on a crisp,
                            clear Super AMOLED display. Expandable memory lets you enjoy more of your
                            favorite content. And connecting and sharing between all your Samsung
                            devices is easier than ever. Welcome to life with the reimagined Samsung
                            Galaxy Tab S2. Watch the world come to life on your tablet's Super AMOLED
                            display*. With deep contrast, rich colors and crisp details, you won't
                            miss a thing.
                        </p>
                        <img
                            className="w-full rounded-md h-auto mb-6"
                            src="assets/images/productdetail4.png"
                            alt=""
                        />
                        <h3 className="font-bold text-[16px] md:text-[18px] mb-3">From the manufacturer</h3>
                        <p className="mb-4">
                            Dive into the blockbuster movies you can't wait to see. Switch between
                            your favorite apps quickly and easily. The new and improved octa-core
                            processor gives you the power and speed you need to see more and do more.
                            Expand your tablet's memory from 32GB to up to an additional 128GB and
                            enjoy more of your favorite music, photos, movies and games on the go with
                            a microSD card. With Quick Connect, start a show on your Smart TV and,
                            with the touch of a button, take it with you by moving it to your Galaxy
                            Tab S2.
                        </p>
                        <p className="mb-6">
                            Or send videos and photos from your tablet screen to your TV screen to
                            share with everyone in the room. Work effortlessly between your Samsung
                            tablet and Samsung smartphone with SideSync. Quickly drag and drop photos
                            between devices. And even respond to a call from your smartphone right on
                            your tablet screen.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-6">
                            <img
                                src="assets/images/productdetail5.png"
                                alt=""
                                className="w-full sm:w-1/2 rounded-md h-auto"
                            />
                            <img
                                src="assets/images/productdetail6.png"
                                alt=""
                                className="w-full sm:w-1/2 rounded-md h-auto"
                            />
                        </div>
                        <Link to="" className="text-[#0D6EFD] text-[13px]">
                            SHOW MORE
                        </Link>
                    </>
                )}
                {activeTab === "reviews" && (
                    <div>
                        {/* Reviews content */}
                        <Review />
                    </div>
                )}
                {activeTab === "additional" && (
                    <div>
                        {/* Additional info content */}
                        <p>Additional Information content goes here...</p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Tab;
