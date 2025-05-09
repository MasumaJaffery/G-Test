import { FaSearch, FaUserCircle } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-white text-sm border-b">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-2 flex justify-between items-center">
          <div className="text-gray-600">
            📞 <a href="tel:+302120003006" className="text-cyan-600">+30 212 000 3006</a>. Available hours in France: 07:00 to 22:00
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">🇺🇸 English</span>
            <span className="flex items-center gap-1">€ Euro</span>
            <FaSearch className="cursor-pointer" />
            <span className="flex items-center gap-1"><FaUserCircle /> Login - Manage bookings</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-white">ferry</span><span className="text-yellow-400">engine</span>
          </div>
          <div className="flex gap-6 font-medium">
            <a href="#" className="hover:underline">Destinations</a>
            <a href="#" className="hover:underline">Companies</a>
            <a href="#" className="hover:underline">Routes</a>
            <a href="#" className="hover:underline">Reviews</a>
            <a href="#" className="hover:underline">About us</a>
            <a href="#" className="hover:underline">Support</a>
          </div>
        </div>
      </div>
    </div>
  )
}
