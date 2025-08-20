import React from "react";

const LocationArea = () => {
  return (
    <div className="bg-white flex flex-col md:flex-row items-center md:items-start justify-between px-6 md:px-16 py-10 md:py-8 pb-0">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <p className="text-gray-500 text-sm font-semibold mb-4">Location</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
           Location — <br /> “The Art of Connecting”
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The ORDYINKA project is an architectural fusion where historic mansions
          harmoniously coexist with modern buildings. Cutting-edge technologies
          and innovative interior solutions blend seamlessly with the timeless
          charm of old Moscow, creating a unique and inspiring environment.
        </p>
      </div>


      <div className="md:w-1/2 flex justify-center">
        <img
          src="../assets/location.png"
          alt="ORDYNKA Building"
          className="w-full max-w-xl md-h:[80px]rounded-lg"
        />
      </div>
    </div>
  );
};

export default LocationArea;
