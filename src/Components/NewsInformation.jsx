import React from "react";
import { useNavigate } from "react-router-dom";

const NewsInfo = () => {
  const navigate = useNavigate();

  const otherNews = [
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

  return (
    <section className="max-w-7xl mx-auto py-12 px-6 md:px-16 mt-20">
      <div className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="border border-gray-400 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100 transition"
        >
          <span className="text-lg">←</span>
          Go Back
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
          <img
            src="../assets/News1.png"
            alt="Construction at Ordynka"
            className="rounded-lg shadow-lg w-full h-45 object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-2">
            Landscaping Begins at ORDYINKA
          </h2>
          <p className="text-sm text-gray-500 mb-6">June 24, 2020, 15:35</p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            On May 12, after the relevant decree by Moscow Mayor Sergey Sobyanin,
            Insigma resumed work on the “Ordynka Clubhouse Collection” project. 
            The maximum number of workers was deployed to the site.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            All necessary safety measures are being observed: construction areas 
            and rest zones are disinfected, workers are provided with masks, gloves, 
            and antiseptics. Staff temperatures are regularly monitored with 
            contactless thermometers.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Insigma has all the necessary resources to minimize delays caused by 
            restrictions. The developer expects that no more than two weeks will 
            be required to regain momentum. Currently, the project is at the final 
            stage of construction. The previously announced commissioning deadline 
            — Q2 2020 — remains unchanged. Permission to occupy the building will 
            be obtained in the near future.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Sales offices continue to operate remotely, and managers are ready 
            to consult clients online regarding all project details.
          </p>

          <p className="font-semibold text-gray-900 mt-6">
            With care for you,  
            <br />
            Insigma Company
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-8">Other News</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherNews.map((news, index) => (
            <div key={index} className="flex flex-col">
              <img
                src={news.img}
                alt={news.title}
                className=" shadow-md w-64 h-56 object-cover mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-900 mb-2 w-64">
                {news.title}
              </h4>
              <p className="text-sm text-gray-500">{news.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsInfo;
