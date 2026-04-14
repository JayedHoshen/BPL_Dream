import React from "react";
import footerLogo from "../../assets/logo-footer.png";
import footerBg from "../../assets/footer-shadow.png";

const Footer = () => {
  return (
    <footer className="bg-[#06091A] mt-65 relative">
      <div className="container mx-auto">
        <div className=" border-14 border-transparent outline-1 outline-gray-100 rounded-2xl container mx-auto absolute  -top-40 ">
          <div
            style={{
              backgroundImage: ` url(${footerBg})`,
            }}
            className={`bg-cover bg-center px-4 py-22 space-y-4 rounded-2xl text-center`}
          >
            <h2 className="text-3xl font-bold">Subscribe to our Newsletter</h2>
            <p className="text-xl text-[#131313b2]">
              Get the latest updates and news right in your inbox!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <input
                className="w-full md:w-4/12 text-sm py-2 px-4 rounded-xl outline-2 outline-gray-100 shadow-lg"
                type="text"
                placeholder="Enter your email"
              />
              <button className="btn rounded-lg border-0 bg-linear-to-r from-pink-300 via-yellow-200 to-yellow-400 hover:bg-linear-to-l join-item">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="pt-85 md:pt-50">
          <img className="mx-auto max-w-30" src={footerLogo} alt="footer" />
        </div>
        <div className="footer text-white/60 sm:footer-horizontal py-16 flex flex-col md:flex-row gap-6 justify-between">
          <div className="px-4 md:max-w-4/12">
            <h6 className="footer-title">About Us</h6>
            <p className="leading-7">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <nav className="px-4 md:max-w-4/12">
            <h6 className="footer-title">Quick Links</h6>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Services</a>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <form className="px-4 md:max-w-4/12">
            <h6 className="footer-title">Subscribe</h6>
            <fieldset className="flex flex-col gap-4">
              <label className="leading-7">
                Subscribe to our newsletter for the latest updates.
              </label>
              <div className="join">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input border-0 outline-0 join-item text-black"
                />
                <button className="btn border-0 bg-linear-to-r from-pink-300 via-yellow-200 to-yellow-400 hover:bg-linear-to-l join-item">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>
        <div className="divider divider-info"></div>
        <p className="text-center pb-8 text-white/60">
          &copy;2024 Your Company All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
