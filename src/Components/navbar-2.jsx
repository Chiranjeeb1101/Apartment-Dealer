import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center py-6">
          <div className="text-white font-bold text-xl tracking-widest">
            <Link to="/">
              <img src="../assets/logo-2.png" alt="Logo" className="h-10 w-auto" />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 text-black font-medium">
            <Link to="/" className="hover:opacity-80">Home</Link>
            <Link to="/about" className="hover:opacity-80">About</Link>
            <Link to="/location" className="hover:opacity-80">Location</Link>
            <Link to="/apartments" className="hover:opacity-80">Apartments</Link>
            <Link to="/penthouses" className="hover:opacity-80">Penthouses</Link>
            <Link to="/news" className="hover:opacity-80">News</Link>
            <Link to="/contacts" className="hover:opacity-80">Contacts</Link>
          </div>

          <div className="hidden md:block">
            <Link
              to="/request-call"
              className="border border-black px-4 py-2 text-#956A4C hover:bg-black hover:text-white transition"
            >
              Request a Call
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white opacity-80 text-black px-6 pb-6 space-y-4">
          <Link to="/" className="block hover:opacity-80" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block hover:opacity-80" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/location" className="block hover:opacity-80" onClick={() => setIsOpen(false)}>Location</Link>
          <Link to="/apartments" className="block hover:opacity-80" onClick={() => setIsOpen(false)}>Apartments</Link>
          <Link to="/penthouses" className="block hover:opacity-80" onClick={() => setIsOpen(false)}>Penthouses</Link>
          <Link to="/news" className="block hover:opacity-80" onClick={() => setIsOpen(false)}>News</Link>
          <Link to="/contacts" className="block hover:opacity-80" onClick={() => setIsOpen(false)}>Contacts</Link>

          <Link
            to="/request-call"
            className="block border border-black px-4 py-2 text-center hover:opacity-80 hover:text-black transition"
            onClick={() => setIsOpen(false)}
          >
            Request a Call
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
