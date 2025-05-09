"use client";
import Image from "next/image";
import img from './imgs/support.png';

export default function CustomerSupport() {
  return (
    <div className="bg-white px-4 lg:px-24 py-10 w-full">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-3">
        Customer Support
      </h2>
      <p className="text-center text-gray-500 mb-10">
        Don’t hesitate to contact us! We offer an awesome service rated{" "}
        <span className="text-yellow-500">★★★★★</span> by our customers
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
        {/* Left Image Section */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={img}
            alt="Customer Support Graphic"
            width={400}
            height={300}
            className="rounded-xl object-cover"
          />
        </div>

        {/* Right Contact Info Section */}
        <div className="space-y-6 md:space-y-8">
          <div className="flex items-start gap-4">
            <div className="text-2xl">📞</div>
            <div>
              <p className="font-semibold text-base">Toll Free Customer Care</p>
              <p className="text-sm text-gray-600">+01 123 456 8374</p>
              <p className="text-sm text-gray-500">
                Available hours in France: 07:00 to 22:00
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-2xl">✉️</div>
            <div>
              <p className="font-semibold text-base">Send us an email</p>
              <p className="text-sm text-blue-500">info@ferrytickets.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-2xl">❓</div>
            <div>
              <p className="font-semibold text-base">Frequently Asked Questions</p>
              <p className="text-sm text-blue-500">Find the answers to your questions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}