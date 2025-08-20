import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const newsData = [
  
  {
    img: "../assets/News1.png",
    title: "Construction Work Resumed",
    date: "May 12, 2020, 16:39",
  },
  {
    img: "../assets/News2.png",
    title: "Temporary Suspension of Construction",
    date: "April 13, 2020, 13:24",
  },
  {
    img: "../assets/News3.png",
    title: "Remote Office Work Mode from March 28",
    date: "March 29, 2020, 17:54",
  },
  {
    img: "../assets/News4.png",
    title: "Office Working Hours from March 23",
    date: "March 23, 2020, 12:04",
  },
  {
    img: "../assets/News2.png",
    title: "Facade Installation Completed in Clubhouses",
    date: "February 26, 2020, 17:54",
  },
  {
    img: "../assets/News5.png",
    title: "ORDYNKA – Urban Awards 2019 Nominee",
    date: "December 25, 2019, 12:45",
  },
];

const NewsDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.map((item, index) => (
          <div key={index} onClick={() => navigate(`/news-details`)} className="group">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover border shadow-md mb-4 group-hover:opacity-90 transition"
            />
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-600 transition">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500">{item.date}</p>
          </div>
        ))}
      </div>

      <div>
        <p className="text-center text-gray-600 pt-6 font-bold">Showing 1-6 of 12 results</p>
      </div>
      <div className="flex justify-center mt-5 space-x-2 text-gray-600">
        <button className="px-3 py-1 border rounded hover:bg-gray-100">&lt;</button>
        <button className="px-3 py-1 border rounded bg-black text-white">1</button>
        <button className="px-3 py-1 border rounded hover:bg-gray-100">2</button>
        <button className="px-3 py-1 border rounded hover:bg-gray-100">3</button>
        <span className="px-3 py-1">...</span>
        <button className="px-3 py-1 border rounded hover:bg-gray-100">6</button>
        <button className="px-3 py-1 border rounded hover:bg-gray-100">&gt;</button>
      </div>
    </div>
  );
};
export default NewsDetails;
