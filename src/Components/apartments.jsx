import React from "react";

const ApartmentOptions = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start max-w-9xl mx-auto py-12 px-6 md:px-16 gap-10">
      <div className="lg:w-1/2 w-full">
        <img
          src="../assets/about-4.png"
          alt="Modern Apartment Interior"
          className="rounded-lg shadow-lg w-full align-object-left-cover"
        />
      </div>

      <div className="lg:w-1/2 w-full">
        <h2 className="text-2xl font-bold mb-4">
          Absolute Comfort in Every Detail
        </h2>
        <p className="text-gray-600 mb-8">
          Our floor plan solutions give you the opportunity to create a
          personalized space that matches your lifestyle and preferences.
        </p>

        <div className="divide-y divide-gray-300">
          <div className="flex justify-between py-4">
            <div>
              <p className="text-lg font-semibold text-orange-700">Apartments</p>
              <p className="text-sm text-gray-500">78 m² — small apartments</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">179.8 m²</p>
              <p className="text-sm text-gray-500">for large families</p>
            </div>
          </div>

          <div className="flex justify-between py-4">
            <div>
              <p className="text-lg font-semibold text-orange-700">Suites</p>
              <p className="text-sm text-gray-500">88 m² — compact suites</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">175.4 m²</p>
              <p className="text-sm text-gray-500">spacious suites</p>
            </div>
          </div>

          <div className="flex justify-between py-4">
            <div>
              <p className="text-lg font-semibold text-orange-700">Penthouses</p>
              <p className="text-sm text-gray-500">73 m² — small penthouses</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">294 m²</p>
              <p className="text-sm text-gray-500">large penthouses</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button className="border border-gray-400 px-6 py-3 rounded-md flex items-center gap-2 hover:bg-gray-100 transition">
            Buy an apartment online: 6 easy steps
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ApartmentOptions;
