import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Apartments = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedRooms, setSelectedRooms] = useState(null);
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [areaRange, setAreaRange] = useState([78, 231]);

  const navigate = useNavigate();

  const propertyTypes = [
    "Classic Apartments",
    "Modern Design Apartments",
    "Single-level Penthouses",
    "Duplex Penthouses",
    "Apartments with Patio",
    "All",
  ];

  const resetFilters = () => {
    setSelectedType(null);
    setSelectedRooms(null);
    setSelectedFloor(null);
    setSelectedHouse(null);
    setAreaRange([78, 231]);
  };


  return (
    <div className="max-w-7xl mx-auto px-2 py-6">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4">
          Live in the heart of the city with the comfort of a suburban home
        </h1>
        <p className="text-gray-600 max-w-3xl mb-6">
          Our planning solutions provide the opportunity to create a personalized living space 
          that meets your needs and lifestyle.
        </p>

        <div className="flex gap-6 border-b">
          <button className="pb-2 border-b-2 border-black font-medium">
            Classic Apartments
          </button>
          <button className="pb-2 text-gray-600 hover:text-black transition">
            Apartments with modern design
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 shadow rounded-xl border">
          <h2 className="text-lg font-bold mb-4">What are you looking for?</h2>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Property Type</h3>
            <div className="flex flex-wrap gap-2">
              {propertyTypes.map((type, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedType(type)}
                  className={`px-3 py-1 rounded-md border transition ${
                    selectedType === type
                      ? "bg-black text-white"
                      : "bg-gray-100 hover:bg-black hover:text-white"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Area (sq.m)</h3>
            <div className="flex justify-between text-sm">
              <span>{areaRange[0]}</span>
              <span>{areaRange[1]}</span>
            </div>
            <input
              type="range"
              min="50"
              max="300"
              value={areaRange[0]}
              onChange={(e) => setAreaRange([+e.target.value, areaRange[1]])}
              className="w-full"
            />
            <input
              type="range"
              min="50"
              max="300"
              value={areaRange[1]}
              onChange={(e) => setAreaRange([areaRange[0], +e.target.value])}
              className="w-full"
            />
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Number of Rooms</h3>
            <div className="flex gap-2 flex-wrap">
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  onClick={() => setSelectedRooms(num)}
                  className={`px-3 py-1 rounded-md border transition ${
                    selectedRooms === num
                      ? "bg-black text-white"
                      : "bg-gray-100 hover:bg-black hover:text-white"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Floor</h3>
            <div className="flex gap-2 flex-wrap">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <button
                  key={num}
                  onClick={() => setSelectedFloor(num)}
                  className={`px-3 py-1 rounded-md border transition ${
                    selectedFloor === num
                      ? "bg-black text-white"
                      : "bg-gray-100 hover:bg-black hover:text-white"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">House Number</h3>
            <div className="flex gap-2 flex-wrap">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <button
                  key={num}
                  onClick={() => setSelectedHouse(num)}
                  className={`px-3 py-1 rounded-md border transition ${
                    selectedHouse === num
                      ? "bg-black text-white"
                      : "bg-gray-100 hover:bg-black hover:text-white"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Apply Filters
            </button>
            <button
              onClick={resetFilters}
              className="w-full py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
            >
              Reset Filters
            </button>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-2xl font-bold mb-6">6 Apartments Available</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 1, name: "Apartment №2", rooms: "2 rooms", area: "75 m²", floor: 3, img: "../assets/layout01.png" },
              { id: 2, name: "Apartment №6", rooms: "3 rooms", area: "110 m²", floor: 4, img: "../assets/layout02.png" },
              { id: 3, name: "Apartment №8", rooms: "2 rooms", area: "90 m²", floor: 5, img: "../assets/layout03.png" },
              { id: 4, name: "Apartment №12", rooms: "4 rooms", area: "150 m²", floor: 6, img: "../assets/layout04.png" },
              { id: 5, name: "Apartment №7", rooms: "2 rooms", area: "80 m²", floor: 2, img: "../assets/layout05.png" },
              { id: 6, name: "Apartment №3", rooms: "3 rooms", area: "95 m²", floor: 3, img: "../assets/layout06.png" },
            ].map((apt) => (
              <div
                key={apt.id}
                onClick={() => navigate(`/apartments/details`)}
                className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <img src={apt.img} alt={apt.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{apt.name}</h3>
                  <p>{apt.rooms} • {apt.area} • Floor {apt.floor}</p>
                  <p className="text-gray-600">Price on request</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apartments;
