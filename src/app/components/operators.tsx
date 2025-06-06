"use client";
import { useState, useEffect } from "react";
import Image from 'next/image';
import {
  FiFilter,
  FiSearch,
  FiChevronDown,
  FiArrowRight,
  FiGlobe,
} from "react-icons/fi";
import Logo1 from '../components/imgs/bs.jpeg';
import Logo2 from '../components/imgs/sj.png';
import Logo3 from '../components/imgs/as.jpeg';
import GreeceFlag from '../components/imgs/Flag_of_Greece.png';
import ItalyFlag from '../components/imgs/Flag_of_Italy.png';


export default function FerryOperators() {
  const [showFilters, setShowFilters] = useState(false); // Start hidden by default
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isNowDesktop = window.innerWidth >= 1024;
      setIsDesktop(isNowDesktop);
      if (isNowDesktop) setShowFilters(true); // Show filters on desktop
      else setShowFilters(false); // Hide filters on mobile
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const operators = [
    {
      name: "Blue Star Ferries",
      logo: Logo1,
      customers: 1342,
      operates: "Greece",
      vessels: 8,
      ferryTypes: "8 normal",
      popularVessels: ["Blue Star Delos", "Blue Star Naxos"],
      description: "Blue Star Ferries is currently the biggest ferry company in Greece...",
      linkText: "About Blue Star Ferries",
      additionalInfo: "Blue Star Ferries is currently the biggest ferry company in Greece. It is a member of Attica Group, one of the most significant companies in the Greek shipping industry. Its fleet consists of vessels of the latest technology and services interlinking the port of Piraeus and heading to the islands of Cyclades (Mykonos, Santorini, Paros etc.) Dodecanese (Rhodes, Kos etc.). Blue Star Ferries serves over 50 destinations in total."
    },
    {
      name: "Seajets",
      logo: Logo2,
      customers: 2467,
      operates: "Greece",
      vessels: 17,
      ferryTypes: "10 normal and 7 high-speed ferries",
      popularVessels: ["WorldChampion jet", "Seajet 2"],
      description: "Seajets is the biggest company of high-speed vessels of the Aegean Sea...",
      linkText: "About Seajets",
      additionalInfo: "Seajets is currently the biggest ferry company in Greece. It is a member of Attica Group, one of the most significant companies in the Greek shipping industry. Its fleet consists of vessels of the latest technology and services interlinking the port of Piraeus and heading to the islands of Cyclades (Mykonos, Santorini, Paros etc.) Dodecanese (Rhodes, Kos etc.). Blue Star Ferries serves over 50 destinations in total."


    },
    {
      name: "Anek-Superfast",
      logo: Logo3,
      customers: 667,
      operates: "Greece, Italy",
      vessels: 6,
      ferryTypes: "Normal ferries",
      popularVessels: ["Superfast XII", "Superfast XI"],
      description: "Anek-Superfast is a joint venture established in June 2011...",
      linkText: "About Anek - Superfast",
      additionalInfo: "Anek Superfast is currently the biggest ferry company in Greece. It is a member of Attica Group, one of the most significant companies in the Greek shipping industry. Its fleet consists of vessels of the latest technology and services interlinking the port of Piraeus and heading to the islands of Cyclades (Mykonos, Santorini, Paros etc.) Dodecanese (Rhodes, Kos etc.). Blue Star Ferries serves over 50 destinations in total."

    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 lg:px-24 py-4">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          {/* Left Section: Title and Controls */}
          <div className="flex flex-col gap-4 w-full">
            {/* Breadcrumb and Title */}
            <div>
              <div className="text-sm text-gray-500">
                <span className="text-cyan-500">Ferrytickets</span> &gt; Ferry Operators
              </div>
              <h1 className="text-2xl font-semibold">Ferry operators</h1>
              <p className="text-sm text-gray-500">
                Discover the <span className="font-semibold text-black">57 ferry operators</span> we work with
              </p>
            </div>

            {/* Controls: Filter, Sort, Search */}
            <div className="flex gap-2">
              <div className="flex gap-2">
                {/* Filters Button */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center border px-4 py-2 rounded-md text-sm w-full sm:w-auto hover:bg-gray-50"
                >
                  <FiFilter className="mr-2" /> Filters
                </button>

                {/* Sort Dropdown */}
                <div className="relative w-full sm:w-auto">
                  <select className="appearance-none border px-4 py-2 rounded-md text-sm w-full sm:w-auto pr-8">
                    <option>Sort by: Reviews number (high first)</option>
                  </select>
                  <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500" />
                </div>
              </div>

              {/* Search Box (Hidden on mobile) */}
              <div className="flex items-center border rounded-md px-2 w-1/6 hidden sm:flex  ">
                <FiSearch className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Search"
                  className="outline-none p-1 text-sm ml-2 w-full sm:w-32"
                />
              </div>
            </div>


            {/* Mobile Filter Panel */}
            {showFilters && !isDesktop && (
              <div className="w-full sm:hidden mt-2 p-4 bg-white border border-gray-200 rounded-md">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold text-lg">Filters</h2>
                  <button onClick={() => setShowFilters(false)} className="text-gray-500 hover:text-black">
                    ✕
                  </button>
                </div>

                <div className="transition-all duration-300 ease-in-out">
                  <div className="mt-4">
                    <label htmlFor="country" className="block text-sm">Operating in</label>
                    <select id="country" className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-white text-sm">
                      <option>Select a country</option>
                      <option>Greece</option>
                      <option>Italy</option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <label htmlFor="ferry-type" className="block text-sm">Ferry types</label>
                    <div className="flex flex-col mt-2 gap-2">
                      <label className="flex items-center text-sm"><input type="checkbox" className="mr-2" /> Normal ferries</label>
                      <label className="flex items-center text-sm"><input type="checkbox" className="mr-2" /> High-speed ferries</label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Section: Action Buttons (Desktop Only) */}
          <div className="hidden sm:flex flex-col gap-2 w-full sm:w-auto">
            <button className="relative inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-cyan-500 rounded-md shadow focus:outline-none">
              <span className="flex items-center z-10 w-max">
                <FiArrowRight className="mr-2" /> Book your tickets
              </span>
              <span className="absolute inset-0 rounded-md ring-2 ring-yellow-300 pointer-events-none"></span>
            </button>

            <button className="flex items-center justify-center border px-4 py-2 rounded-md text-sm hover:bg-gray-50">
              <FiGlobe className="mr-2" /> Live Map View
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 mx-auto px-4 lg:px-24 py-6">
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Filter Box */}
          <div className="hidden sm:block sm:w-1/2 lg:w-1/4 p-4 bg-white border border-gray-200 rounded-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-lg">Filters</h2>
              <button onClick={() => setShowFilters(!showFilters)} className="text-gray-500 hover:text-black">
                {showFilters ? "✕" : <FiChevronDown />}
              </button>
            </div>

            {showFilters && (
              <div className="transition-all duration-300 ease-in-out">
                <div className="mt-4">
                  <label htmlFor="country" className="block text-sm">Operating in</label>
                  <select id="country" className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-white text-sm">
                    <option>Select a country</option>
                    <option>Greece</option>
                    <option>Italy</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label htmlFor="ferry-type" className="block text-sm">Ferry types</label>
                  <div className="flex flex-col mt-2 gap-2">
                    <label className="flex items-center text-sm"><input type="checkbox" className="mr-2" /> Normal ferries</label>
                    <label className="flex items-center text-sm"><input type="checkbox" className="mr-2" /> High-speed ferries</label>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Operators List */}
          <div className="w-full lg:w-3/4 flex flex-col gap-4">
            {operators.map((op, i) => (
              <div key={i} className="p-4 bg-white border border-gray-200 rounded-md flex flex-col md:flex-row md:justify-between">
                <div className="flex flex-col w-full">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gray-100 p-2 rounded-t-md">
                    <Image src={op.logo} alt={op.name} width={260} height={360} />
                    <div className="text-right sm:text-left">
                      <h3 className="text-lg font-semibold text-left sm:text-end text-black">{op.name}</h3>
                      <div className="flex items-center justify-end gap-1 text-yellow-400 text-sm">
                        ★★★★☆
                        <p className="text-xs text-gray-500 text-end">by {op.customers.toLocaleString()} customers</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-col md:flex-row">
                    <div className="mt-1 text-sm text-gray-700 flex-1">
                      <div className="flex flex-col">
                        <p className="mb-1"><strong>Operates in</strong></p>
                        <div className="flex gap-2 items-center mb-3">
                          {i === 2 ? (
                            <>
                              <div className="flex items-center gap-1">
                                <Image src={GreeceFlag} alt="Greece flag" width={30} height={20} />
                                <p>Greece</p>
                              </div>
                              <div className="flex items-center gap-1">
                                <Image src={ItalyFlag} alt="Italy flag" width={30} height={20} />
                                <p>Italy</p>
                              </div>
                            </>
                          ) : (
                            <div className="flex items-center gap-1">
                              <Image src={GreeceFlag} alt="Greece flag" width={30} height={20} />
                              <p>{op.operates}</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="mb-4">
                      <p><strong>Vessels number:</strong> {op.vessels}</p>
                      <p><strong>Ferry types:</strong> {op.ferryTypes}</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <strong>Popular vessels:</strong>
                        <p className="text-blue-500">{op.popularVessels.join(", ")}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mt-2 md:mt-0 md:ml-4 flex-1 mt-2 pt-1">
                      {op.additionalInfo}
                    </p>
                  </div>
                  <hr className="my-2 border-t border-gray-300" />
                  <div className="flex gap-1 justify-end items-center">
                  <a href="#" className="text-cyan-600 text-md font-medium mt-1 inline-block text-right font-semibold	">{op.linkText}</a>
                  <button className="text-sm font-medium mt-1 ml-2 inline-block text-right bg-cyan-600 rounded-full px-2 py-1 text-white">
                      <FiArrowRight className="inline-block text-white" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
