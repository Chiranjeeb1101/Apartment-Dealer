import React from "react";

const SimilarApartments = () => {
  const apartments = [
    {
      id: "A1",
      image: "/assets/demoCard1.png",
      building: 7,
      floor: 1,
      bedrooms: 2,
      size: "92.5 m²",
      price: "Price on request",
    },
    {
      id: "7",
      image: "/assets/demoCard2.png",
      building: 7,
      floor: 5,
      bedrooms: 2,
      size: "91.7 m²",
      price: "Price on request",
    },
    {
      id: "10",
      image: "/assets/demoCard3.png",
      building: 6,
      floor: 5,
      bedrooms: 2,
      size: "109.3 m²",
      price: "Price on request",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-8">Similar Apartments</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {apartments.map((apt) => (
          <div
            key={apt.id}
            className="border rounded-xl shadow hover:shadow-lg transition bg-white"
          >
            <img
              src={apt.image}
              alt={`Apartment ${apt.id}`}
              className="w-full h-52 object-contain p-4"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">
                Apartment №{apt.id}
              </h3>
              <p className="text-gray-600">Building {apt.building}, Floor {apt.floor}</p>
              <p className="text-gray-600">{apt.bedrooms} Bedrooms</p>
              <p className="text-gray-600">{apt.size}</p>
              <p className="mt-3 font-medium text-gray-800">{apt.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimilarApartments;
