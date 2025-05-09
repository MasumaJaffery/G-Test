"use client";
import Image from "next/image";

export default function CustomerSupport() {
  return (
    <div className="bg-white mx-auto px-4 lg:px-24 py-3  w-full mx-auto my-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
        Customer Support
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Don’t hesitate to contact us! We offer an awesome service rated{" "}
        <span className="text-yellow-500">★★★★★</span> by our customers
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Image Section */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/customer-support.png"
            alt="Customer Support Graphic"
            width={400}
            height={300}
            className="rounded-xl"
          />
        </div>

        {/* Right Contact Info Section */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="text-xl">📞</div>
            <div>
              <p className="font-semibold">Toll Free Customer Care</p>
              <p className="text-sm text-gray-600">+01 123 456 8374</p>
              <p className="text-sm text-gray-500">
                Available hours in France: 07:00 to 22:00
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-xl">✉️</div>
            <div>
              <p className="font-semibold">Send us an email</p>
              <p className="text-sm text-blue-500">info@ferrytickets.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-xl">❓</div>
            <div>
              <p className="font-semibold">Frequently Asked Questions</p>
              <p className="text-sm text-blue-500">
                Find the answers to your questions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
