import React from "react"; 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-white text-xl font-bold">ORDYNKA</h2>
          <p className="text-gray-400 text-sm mt-2">Collection of Club Houses</p>
        </div>

        <div>
          <h3 className="text-white font-medium mb-2">Sales Department</h3>
          <p className="text-sm text-gray-400">
            Sundarpada, Web bocket <br />
            +91 6371850005 <br />
            Mon–Sat: 10:00 – 21:00
          </p>
        </div>

        <div>
          <h3 className="text-white font-medium mb-2">Social Media</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-white">Facebook</a></li>
            <li><a href="#" className="hover:text-white">Instagram</a></li>
          </ul>
        </div>


        <div>
          <h3 className="text-white font-medium mb-2">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to receive special offers
          </p>
          <div className="flex items-center border-b border-gray-500">
            <input
              type="email"
              placeholder="Your e-mail"
              className="bg-transparent w-full py-2 text-sm text-gray-200 placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Location</a>
          <a href="#" className="hover:text-white">Apartments</a>
          <a href="#" className="hover:text-white">Penthouses</a>
          <a href="#" className="hover:text-white">News</a>
          <a href="#" className="hover:text-white">Contacts</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
