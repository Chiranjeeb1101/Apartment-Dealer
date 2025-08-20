import React from "react";

const AdvantagesSection = () => {
  return (
    <section className="bg-white  md:py-8 px-6 md:px-16 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        <div className="col-span-1">
          <p className="text-gray-400 text-sm mb-4">Advantages</p>
          <h2 className="text-2xl font-semibold leading-snug mb-4">
           Here, actions are just <br /> as important as emotions
          </h2>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            Crafted from well-thought-out details, the home’s atmosphere is formed 
            in such a way that you may not yet be inside your apartment — but you 
            already feel at home.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            The lobby interiors speak of human values connected to home: love, 
            harmony, happiness, friendship, respect, trust, and comfort.
          </p>
        </div>

    <div className="bg-white py-4 flex justify-center">
      <div className="p-4 border rounded-lg shadow-lg bg-white">
        <img
          src="../assets/about-2.png"
          alt="Architecture, Landscaping, Lobby"
          className="w-full h-full md:h-[350px] rounded-md"
        />


        </div>
      </div>
    </div>
    </section>
  );
};

export default AdvantagesSection;
