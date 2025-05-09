"use client";
const Footer = () => {
  return (
    <footer className="bg-[#00B9E0] text-white p-8 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex justify-between items-start flex-wrap gap-8 mb-8">
          <div className="flex items-center">
            <div className="text-2xl font-bold flex items-center">
              <span>ferry</span>
              <span>engine</span>
              <div className="ml-1 w-3 h-4 bg-yellow-400 clip-triangle" />
            </div>
          </div>

          {/* Footer Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
            {/* Company Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-yellow-400">About us</a></li>
                <li><a href="#" className="hover:text-yellow-400">Careers</a></li>
                <li><a href="#" className="hover:text-yellow-400">Press</a></li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-yellow-400">Manage booking</a></li>
                <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
                <li><a href="#" className="hover:text-yellow-400">Legal Notice</a></li>
                <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-yellow-400">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Become a Partner Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Become a partner</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-yellow-400">Affiliate Programs</a></li>
                <li><a href="#" className="hover:text-yellow-400">Travel Agencies</a></li>
                <li><a href="#" className="hover:text-yellow-400">Bloggers</a></li>
                <li><a href="#" className="hover:text-yellow-400">Get the API</a></li>
              </ul>
            </div>

            {/* Newsletter and Apps Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Get Updates and Special Offers</h3>
                <div className="flex flex-col sm:flex-row">
                  <input 
                    type="email" 
                    placeholder="Type your email" 
                    className="px-4 py-2 rounded-l text-gray-900 w-full bg-white mb-2 sm:mb-0 sm:w-72"
                  />
                  <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-r font-medium hover:bg-yellow-500 w-full sm:w-auto">
                    Subscribe
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Get our Apps</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-yellow-400">iOS</a>
                  <a href="#" className="hover:text-yellow-400">Android</a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Follow-us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-yellow-400">Facebook</a>
                  <a href="#" className="hover:text-yellow-400">Twitter</a>
                  <a href="#" className="hover:text-yellow-400">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-white mb-4 md:mb-0">
            © 2023, ferryengine.com. All rights reserved
          </div>
          
          <div className="flex space-x-4">
            <span className="text-white">VISA</span>
            <span className="text-white">Power</span>
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
