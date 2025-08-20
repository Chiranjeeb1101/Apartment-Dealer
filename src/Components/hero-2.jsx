import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Hero2 = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 pt-[7rem]">
        <div className="md:flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800">Apartments</h1>
          <div className="flex space-x-3">
            <button className="px-4 py-2  border rounded-lg text-sm font-medium hover:bg-gray-100 transition">
              Floor Plan
            </button>
            <button className="px-4 py-2 border rounded-lg text-sm font-medium hover:bg-gray-100 transition">
              By Parameters
            </button>
          </div>
        </div>

        <div className="relative w-full">
          <img
            src="../assets/apartmentPage-Hero.png"
            alt="Modern Apartment Interior"
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />

          <div className="absolute top-4 right-6 bg-white px-3 py-1 rounded-md shadow text-sm font-medium">
            1 / 4
          </div>

          <div className="absolute bottom-6 right-6 flex space-x-4">
            <button className="p-2 rounded-full bg-white shadow hover:bg-gray-100">
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-2 rounded-full bg-white shadow hover:bg-gray-100">
              <ArrowRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
