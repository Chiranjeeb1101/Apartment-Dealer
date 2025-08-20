import React from "react";

const Hero4 = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-[7rem]">
        <div className="md:flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800">Apartments</h1>
        </div>

        <div className="relative w-full">
          <img
            src="../assets/NewsHero.png"
            alt="Modern Apartment Interior"
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="md:flex justify-between item-center ">
          <p className="text-gray-600 mt-4">
            <strong>Explore our</strong> latest news and updates on modern apartment living. From
            design trends to lifestyle tips, <br />stay informed with our curated
            articles.
          </p>
        <div className="item-right pt-4">
            <h5>18/August/2025</h5>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero4;
