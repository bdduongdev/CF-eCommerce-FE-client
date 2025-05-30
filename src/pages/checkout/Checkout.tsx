
const Checkout = () => {
  return (
    <>
      <main className="bg-[#e2e4eb] py-5">
        <section className="p-[30px] bg-white rounded-xl flex flex-col md:flex-row gap-[30px] min-h-screen">
          {/* Left Side: Checkout Form */}
          <div className="w-full md:w-3/5">
            <h2 className="text-[16px] sm:text-[18px] font-bold mb-12">CHECKOUT</h2>
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
              {/* Company Name */}
              <div>
                <label className="block text-[14px] mb-2">Company Name (Optional)</label>
                <input
                  type="text"
                  className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              {/* Country */}
              <div>
                <label className="block text-[14px] mb-2">Country / Region <span className="text-red-500">*</span></label>
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
              {/* Street Address */}
              <div>
                <label className="block text-[14px] mb-2">Street Address</label>
                <input
                  placeholder="House number and street name ..."
                  type="text"
                  className="mb-2 w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  placeholder="Apartment, suite, unit, etc (Optional)"
                  type="text"
                  className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              {/* Town / City */}
              <div>
                <label className="block text-[14px] mb-2">Town / City <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              {/* State / County */}
              <div>
                <label className="block text-[14px] mb-2">State / County <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>Washington</option>
                    <option>California</option>
                    <option>New York</option>
                  </select>
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                    <i className="fa-solid fa-chevron-down" />
                  </div>
                </div>
              </div>
              {/* Zip Code */}
              <div>
                <label className="block text-[14px] mb-2">Zip Code <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              {/* Phone */}
              <div>
                <label className="block text-[14px] mb-2">Phone Number <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              {/* Email */}
              <div>
                <label className="block text-[14px] mb-2">Email Address <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              {/* Terms */}
              <div className="flex space-x-2 text-[14px]">
                <input type="checkbox" id="news" className="accent-green-500" />
                <label htmlFor="news">Create an account?</label>
              </div>
              {/* Order Notes */}
              <div>
                <label className="block text-[14px] mb-2">Order Notes (Optional)</label>
                <textarea
                  rows={4}
                  className="w-full border text-[14px] border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Note about your order, e.g. special note for delivery"
                />
              </div>
            </form>
          </div>

          {/* Right Side: Your Order */}
          <div className="w-full md:w-2/5 flex flex-col md:justify-end">
            <h3 className="text-[15px] sm:text-[16px] font-bold mb-[30px]">Your Order</h3>
            <div className="bg-gray-100 p-6 rounded-xl">
              <div className="text-gray-600 flex justify-between text-[12px] pb-4 border-b border-b-gray-300 mb-2">
                <p>PRODUCT</p>
                <p>SUB TOTAL</p>
              </div>
              {/* Product List */}
              <div className="space-y-4 mb-4">
                <div className="flex items-center justify-between gap-4">
                  <img src="assets/images/bestlaptop2.png" alt="Product 1" className="w-14 h-14 object-cover rounded sm:w-16 sm:h-16" />
                  <div className="flex-1">
                    <p className="text-[14px] font-medium">Pinnaeple Macbook Pro 2022 M1/ 512GB</p>
                    <p className="text-[14px] text-gray-500">x2</p>
                  </div>
                  <div className="text-[14px] font-semibold">1.200.000đ</div>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <img src="assets/images/bestlaptop2.png" alt="Product 2" className="w-14 h-14 object-cover rounded sm:w-16 sm:h-16" />
                  <div className="flex-1">
                    <p className="text-[14px] font-medium">Pinnaeple Macbook Pro 2022 M1/ 512GB</p>
                    <p className="text-[14px] text-gray-500">x2</p>
                  </div>
                  <div className="text-[14px] font-semibold">1.200.000đ</div>
                </div>
              </div>
              <div className="flex justify-between text-[14px] mb-2">
                <p>Worldwide Standard Shipping Free</p>
                <p className="text-red-500 font-semibold">+ $9.50</p>
              </div>
              <div className="flex justify-between text-[16px] font-bold border-t pt-4 mb-10">
                <span>Order Total</span>
                <span className="text-green-500">$1,746.50</span>
              </div>
              <div className="space-y-3 text-[14px] font-bold">
                <div className="flex items-center">
                  <input type="checkbox" id="bank" name="payment" className="mr-2 w-4 h-4 accent-green-500" />
                  <label htmlFor="bank">Direct Bank Transfer</label>
                </div>
                <p className="text-gray-500 font-normal">
                  Make your payment directly into our bank account. Please use your
                  Order ID as the payment reference. Your order will not be shipped
                  until the funds have cleared in our account.
                </p>
                <div className="flex items-center">
                  <input type="checkbox" id="cod" name="payment" className="mr-2 w-4 h-4 accent-green-500" />
                  <label htmlFor="cod">Cash on Delivery</label>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input type="checkbox" id="paypal" name="payment" className="mr-2 w-4 h-4 accent-green-500" />
                    <label htmlFor="paypal">Paypal</label>
                  </div>
                  <img src="/assets/images/pay3_footer.png" alt="Paypal Logo" className="h-4" />
                </div>
              </div>
              <button className="w-full mt-7 bg-green-500 hover:bg-green-600 text-white text-[14px] font-medium py-4 rounded-md transition duration-300">
                Place Order
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Checkout;
