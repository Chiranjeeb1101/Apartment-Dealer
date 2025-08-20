import React from "react";

const Hero3 = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white text-center">
      <div className="absolute inset-0">
        <img
          src="../assets/hero-3.png"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-100"
        />
      </div>

      <div className="relative z-10 max-w-4xl px-6 md:px-16">
        <h1 className="text-5xl md:text-6xl font-bold">
          Apartment №2
        </h1>
      </div>
    </section>
  );
};

export default Hero3;
