import React from "react";

const Footer = () => {
  return (
    <>
      {/* footer  */}
      <footer className="bg-white">
        {/* FOOTER - T  */}
        <div className="container max-w-screen-2xl px-4 pt-20 pb-14 grid gap-8
                        grid-cols-1
                        sm:grid-cols-2
                        md:grid-cols-4
                        lg:grid-cols-11
                        ">
          <div className="lg:col-span-3">
            <h3 className="font-bold text-lg mb-8">
              SWOO - 1ST NYC TECH ONLINE MARKET
            </h3>
            <p className="text-sm">HOTLINE 24/7</p>
            <p className="text-2xl font-bold text-[#1ABA1A] mb-8">
              (025) 3686 25 16
            </p>
            <p className="text-sm">
              257 Thatcher Road St, Brooklyn, Manhattan, NY 10092
            </p>
            <p className="text-sm">contact@Swootechmart.com</p>
            {/* Icon mạng xã hội */}
            <div className="flex gap-4 mt-10">
              {["twitter", "facebook-f", "instagram", "youtube", "pinterest"].map(icon => (
                <a
                  key={icon}
                  href="#"
                  className="hover:text-white flex items-center justify-center w-9 h-9 rounded-full bg-[#E1E3EB] text-sm"
                >
                  <i className={`fa-brands fa-${icon}`} />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-8">TOP CATEGORIES</h3>
            <ul className="text-sm text-[#666666] space-y-1">
              {["Laptops", "PC & Computers", "Cell Phones", "Tablets", "Gaming & VR", "Networks", "Cameras", "Sounds", "Office"].map(item => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-8">COMPANY</h3>
            <ul className="text-sm text-[#666666] space-y-1">
              {["About Swoo", "Contact", "Career", "Blog", "Sitemap", "Store Locations"].map(item => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-8">HELP CENTER</h3>
            <ul className="text-sm text-[#666666] space-y-1">
              {["Customer Service", "Policy", "Terms & Conditions", "Track Order", "FAQs", "My Account", "Product Support"].map(item => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-8">PARTNER</h3>
            <ul className="text-sm text-[#666666] space-y-1">
              {["Become Seller", "Affiliate", "Advertise", "Partnership"].map(item => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="container max-w-screen-xl mx-auto" />
        {/* FOOTER - B  */}
        <div className="container max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center h-[104px] px-4 gap-4 sm:gap-0">
          <div>
            <p className="text-[#666666] text-center sm:text-left">
              © 2024 Shawonetc3. All Rights Reserved
            </p>
          </div>
          <div className="flex gap-6 flex-wrap justify-center sm:justify-start">
            <img src="./assets/images/pay1_footer.png" alt="" />
            <img src="./assets/images/pay2_footer.png" alt="" />
            <img src="./assets/images/pay3_footer.png" alt="" />
            <img src="./assets/images/pay4_footer.png" alt="" />
            <img src="./assets/images/pay5_footer.png" alt="" />
          </div>
          <div className="text-[#0D6EFD]">
            <a href="">Mobile Site</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
