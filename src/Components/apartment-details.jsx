import React from "react";

const ApartmentPlan = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10">
      <button className="mb-6 inline-flex items-center text-gray-700 hover:text-black">
        <span className="mr-2 text-xl leading-none">←</span>
        Go Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-6">
        <div className="text-sm text-gray-500 pt-1">Master Plan</div>
        <p className="text-gray-700 leading-relaxed">
        The ORDYINKA project is an architectural fusion where historic mansions harmoniously coexist with modern buildings. Cutting-edge technologies and innovative interior solutions blend seamlessly with the timeless charm of old Moscow, creating a unique and inspiring environment.
        </p>
      </div>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-2 items-start">
        <div className="relative">
          <img
            src="../assets/image 14.png"
            alt="Apartment floor plan"
            className="rounded border border-gray-200 shadow-sm py-4"
          />
        </div>

        <div className="space-y-2">
          <img
            src="../assets/image 15.png"
            alt="Site overview"
            className="w-full rounded border border-gray-200 shadow-sm"
          />
        </div>
      </div>

    <div className="mt-12 grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-6">
      <div className="text-sm text-gray-500 pt-1">Parameters</div>

      <div className="border-y border-gray-200 py-8">
        <div className="grid grid-cols-2 gap-y-8 gap-x-12">
          <div>
            <div className="text-2xl font-semibold text-amber-800 leading-none">7</div>
            <div className="text-xs uppercase tracking-wide text-gray-500 mt-1">
              Building
            </div>
          </div>

          <div>
            <div className="text-2xl font-semibold text-amber-800 leading-none">
              116.1 m²
            </div>
            <div className="text-xs uppercase tracking-wide text-gray-500 mt-1">
              Area
            </div>
          </div>

          <div>
            <div className="text-2xl font-semibold text-amber-800 leading-none">2</div>
            <div className="text-xs uppercase tracking-wide text-gray-500 mt-1">
              Floor
            </div>
          </div>

          <div>
            <div className="text-2xl font-semibold text-amber-800 leading-none">2</div>
            <div className="text-xs uppercase tracking-wide text-gray-500 mt-1">
              Bedrooms
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block" />
      <div className="flex justify-end pt-8">
        <button className="group inline-flex items-center gap-4 px-6 py-4 border border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition">
          <span className="font-medium">Request Price</span>
          <span className="relative inline-flex items-center justify-center w-10 h-10 rounded-full border border-current">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
    </section>
  );
};

export default ApartmentPlan;
