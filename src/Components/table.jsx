import React from "react";

const FeaturesTable = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 py-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        Our Residential Complex Uses Only the Most Advanced Technologies
      </h2>

      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-200 bg-white">
          <div className="p-4 font-semibold">Service</div>
          <div className="p-4 text-gray-700">24/7 concierge service</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-200 bg-gray-50">
          <div className="p-4 font-semibold">Parking</div>
          <div className="p-4 text-gray-700">
            Free parking spaces available for all residents
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-200 bg-white">
          <div className="p-4 font-semibold">Security</div>
          <div className="p-4 text-gray-700">
            Flawless security system ensures your safety at all times
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-200 bg-gray-50">
          <div className="p-4 font-semibold">Territory</div>
          <div className="p-4 text-gray-700">Private, gated community</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-200 bg-white">
          <div className="p-4 font-semibold">Windows</div>
          <div className="p-4 text-gray-700">
            Panoramic windows with high-quality soundproofing
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-200 bg-gray-50">
          <div className="p-4 font-semibold">Fire Alarm</div>
          <div className="p-4 text-gray-700">
            Automatic system installed around the entire complex
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-200 bg-white">
          <div className="p-4 font-semibold">Air Conditioning</div>
          <div className="p-4 text-gray-700">
            Available in all apartments and penthouses
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-50">
          <div className="p-4 font-semibold">Finishing</div>
          <div className="p-4 text-gray-700">
            Choose from ready-made designs or request a custom project
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesTable;
