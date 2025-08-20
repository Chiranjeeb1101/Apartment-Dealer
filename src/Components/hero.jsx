import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center text-white">
      <div className="absolute inset-0">
        <img
          src="../assets/hero.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 py-4 bg-opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-4xl px-6 md:px-16">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Prime
        </h1>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          apartments
        </h1>
      </div>
    </section>
  );
};

export default Hero;
