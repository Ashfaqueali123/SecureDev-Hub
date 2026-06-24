import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, LayoutDashboard, Home as HomeIcon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-cardBg border-b border-gray-800 sticky top-0 z-50 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <ShieldCheck className="text-accentRed w-8 h-8" />
          <span>SECURE<span className="text-accentRed">DEV</span></span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="hover:text-accentRed transition">Home</Link>
          <Link to="/dashboard" className="hover:text-accentRed transition">Dashboard</Link>
          <Link to="/login" className="hover:text-accentRed transition">Login</Link>
          <Link to="/signup" className="bg-accentRed px-5 py-2 rounded-md font-bold hover:bg-red-700 transition">Get Started</Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={28} /> : <Menu size={28} />}</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cardBg border-b border-gray-800 p-6 flex flex-col gap-4">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
          <Link to="/signup" onClick={() => setIsOpen(false)} className="bg-accentRed p-3 rounded-md text-center">Get Started</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;