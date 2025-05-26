import React from 'react'
import { Link } from 'react-router-dom'

const DealsBanner = () => {
    return (
        <>
            <div className="deal-right">
                {/* Box 1 */}
                <div className="deal-banner bg-white">
                    <Link to="/promo/deal-1">
                        <img src="assets/images/deal1.png" alt="Banner 1" />
                    </Link>
                </div>
                {/* Box 2 */}
                <div className="deal-banner bg-[#1a1a1a]">
                    <Link to="/promo/deal-2">
                        <img src="assets/images/deal2.png" alt="Banner 2" />
                    </Link>
                </div>
                {/* Box 3 */}
                <div className="deal-banner bg-white">
                    <Link to="/promo/deal-3">
                        <img src="assets/images/deal3.png" alt="Banner 3" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default DealsBanner