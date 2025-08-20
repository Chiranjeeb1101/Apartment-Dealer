import React from "react";

const Reviews = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-16 py-12 pb-0">
      <h2 className="text-lg font-semibold mb-8">Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="text-center">
          <img
            src="../assets/Group 40.png"
            alt="Anton Khmelnitsky"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        <div className="text-center">
          <img
            src="../assets/Group 41.png"
            alt="Zane Tetere"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        <div className="text-center">
          <img
            src="../assets/Group 42.png"
            alt="Anna Andreeva"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default Reviews;
