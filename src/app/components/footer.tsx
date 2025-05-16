"use client";
import {
  FaApple,
  FaGooglePlay,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#00B9E0] text-white px-6 py-10 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-10">
          {/* Left columns */}
          <div className="flex  flex-wrap gap-16">
            {/* Logo + Company/Support/Partner Links */}
            <div className="space-y-6">
              {/* Logo with triangle */}
              <div className="flex items-center text-white text-2xl font-bold">
                <span>ferry</span>
                <span>engine</span>
                <div className="ml-1 w-3 h-4 bg-yellow-400 clip-triangle" />
              </div>
               <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-yellow-400">About us</a></li>
                <li><a href="#" className="hover:text-yellow-400">Careers</a></li>
                <li><a href="#" className="hover:text-yellow-400">Press</a></li>
              </ul>
            </div>
            </div>


            <div>
              <h3 className="text-lg font-bold mb-4 mt-1 sm:mt-14">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-yellow-400">Manage booking</a></li>
                <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
                <li><a href="#" className="hover:text-yellow-400">Legal Notice</a></li>
                <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-yellow-400">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 mt-1 sm:mt-14">Become a partner</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-yellow-400">Affiliate Programs</a></li>
                <li><a href="#" className="hover:text-yellow-400">Travel Agencies</a></li>
                <li><a href="#" className="hover:text-yellow-400">Bloggers</a></li>
                <li><a href="#" className="hover:text-yellow-400">Get the API</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter and social section */}
          <div className="flex flex-col gap-6 w-full max-w-md mt-1 sm:mt-14">
            <div>
              <h3 className="text-lg font-bold mb-2">Get Updates and Special Offers</h3>
              <div className="flex rounded overflow-hidden">
                <input
                  type="email"
                  placeholder="Type your email"
                  className="px-4 py-2 text-gray-800 flex-grow w-full bg-white"
                />
                <button className="bg-yellow-300 text-white font-semibold px-4 py-2 whitespace-nowrap hover:bg-gray-600">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col gap-4 sm:gap-50">

            <div>
              <h3 className="text-lg font-bold mb-2">Get our Apps</h3>
              <div className="flex space-x-4 text-2xl">
                <FaApple className="hover:text-yellow-400 cursor-pointer" />
                <FaGooglePlay className="hover:text-yellow-400 cursor-pointer" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Follow-us</h3>
              <div className="flex space-x-4 text-2xl">
                <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
                <FaFacebook className="hover:text-yellow-400 cursor-pointer" />
                <FaTwitter className="hover:text-yellow-400 cursor-pointer" />
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/30 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2023, ferryengine.com, All rights reserved</p>
          <div className="flex space-x-4 text-2xl mt-4 md:mt-0">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcPaypal />
          </div>
        </div>
      </div>

      {/* Triangle CSS */}
      <style jsx>{`
        .clip-triangle {
          clip-path: polygon(100% 0, 0 50%, 100% 100%);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
