import React from "react";

const About = () => {
  return (
    <section className="py-10 md:py-20 md:px-10 bg-white">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start mb-12">
          <div>
            <p className="text-gray-500 uppercase tracking-widest text-sm">About</p>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-3xl lg:text-4xl font-bold leading-snug">
              Where Comfort Meets Elegance
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          <p className="text-gray-700 leading-relaxed">
            At Prime Apartments, we believe that your home should be more than just a place to live  it should be a space where comfort meets elegance. Nestled in the heart of the city, our residential complex offers modern design, premium facilities, and a vibrant community lifestyle.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether you’re looking for a serene escape from the bustling city or a stylish home close to all the action, Prime Apartments has it all. From spacious layouts to top-tier security, every detail is crafted to give you the lifestyle you deserve.
          </p>
        </div>

        <div className="relative">
          <img
            src="../assets/about-1.png" 
            alt="About building"
            className="w-full md:h-[500px] rounded-lg"
          />

          <button className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6 text-black"
                viewBox="0 0 16 16"
              >
                <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l4.5-2.5a.5.5 0 0 0 0-.814l-4.5-2.5z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
