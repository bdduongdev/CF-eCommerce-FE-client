import { Link } from "react-router-dom";
import SaleAndBanner from "../../components/home/SaleAndBanner";
import FeaturedAndTop from "../../components/home/FeaturedAndTop";
import Deals from "../../components/home/Deals";
import DealsBanner from "../../components/home/DealsBanner";
import ProductHome from "../../components/home/ProductHome";
import ProductBest from "../../components/home/ProductBest";
import BrandNew from "../../components/home/BrandNew";

const HomePage = () => {
  return (
    <div>
      <main className="bg-[#e2e4eb] py-5">

        {/* SALE & BANNER SECTION */}
        <SaleAndBanner />

        {/* BRAND & TOP CATEGORIES SECTION */}
        <FeaturedAndTop />

        {/* DEALS OF THE DAY SECTION */}
        <section className="deal-section">
          {/* Phần bên trái (deal) */}
          <Deals />

          {/* Phần bên phải (ảnh deal) */}
          <DealsBanner />
        </section>

        {/* MEMBER FREE SHIPPING BANNER */}
        <section
          className="member-freeshipping"
          style={{ backgroundImage: "url('/assets/images/freeshipping.png')" }}
        >
          <p className="member-text">
            <span>⭐ Member get </span>
            <span className="member-highlight">FREE SHIPPING*</span> with no order
            minimum! <span className="member-note">*Restrictions apply</span>.
          </p>
        </section>

        {/* sản phẩm best seller  */}
        <section className="bg-white rounded-xl px-[30px] pt-[30px] pb-[50px] mb-4">
          {/* loại sp and view all */}
          <div className="best-seller-header">
            <div className="best-seller-tabs">
              <Link to="" className="best-seller-tab">
                BEST SELLER
              </Link>
              <Link to="" className="best-seller-tab inactive">
                NEW IN
              </Link>
              <Link to="" className="best-seller-tab inactive">
                POPULAR
              </Link>
            </div>
            <div>
              <Link className="best-seller-viewall" to="">
                View All
              </Link>
            </div>
          </div>
          {/* best seller */}
          <ProductHome />
        </section>

        {/* Top Cellphones & Tablets */}
        <ProductBest />

        {/* Best Laptops & Computers  */}
        <ProductBest />

        {/* BRAND NEW FOR YOU Section */}
        <BrandNew />
      </main>
    </div>
  );
};
export default HomePage;
