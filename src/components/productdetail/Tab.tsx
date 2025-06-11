import React, { useState } from "react";
import { Link } from "react-router-dom";
import Review from "../../pages/review/Review";

type TabProps = {
  description?: string;
}

const Tab = ({ description = "" }: TabProps) => {
    const [activeTab, setActiveTab] = useState("description");
    const [showMore, setShowMore] = useState(false);

    const shortDescription = description?.slice(0, 300);
    const shouldShowToggle = description?.length > 300;

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
            <div className="text-[14px] whitespace-pre-line">
                {activeTab === "description" && (
                    <>
                        <p className="mb-6">
                            {showMore || !shouldShowToggle ? description : `${shortDescription}...`}
                        </p>

                        {shouldShowToggle && (
                            <button
                                className="text-[#0D6EFD] text-[13px]"
                                onClick={() => setShowMore(!showMore)}
                            >
                                {showMore ? "SHOW LESS" : "SHOW MORE"}
                            </button>
                        )}
                    </>
                )}

                {activeTab === "reviews" && (
                    <div>
                        <Review />
                    </div>
                )}

                {activeTab === "additional" && (
                    <div>
                        <p>Additional Information content goes here...</p>
                    </div>
                )}
            </div>
        </section>
    );
}


export default Tab;
