import React from "react";

const CityLife = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 md:px-16">
      <div className="relative">
        <img
          src="../assets/about-5.png"
          alt="City Living"
          className="w-full md:h-[500px] rounded-lg shadow-lg"
        />

        <div className="absolute top-4 right-4 bg-white bg-opacity-80 text-gray-800 text-sm px-3 py-1 rounded-full">
          1 | 4
        </div>
      </div>


      <p className="mt-6 text-gray-700 text-lg leading-relaxed">
        <span className="font-semibold">This is a place for those who want to live the best life in the city.</span> 
        Here, every resident or guest gains a unique experience of interacting with the urban environment 
        and a personalized set of opportunities for harmonious development and personal growth.
      </p>

    </div>
  );
};

export default CityLife;
