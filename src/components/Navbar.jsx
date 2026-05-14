import React from 'react';
import cartIcon from '../assets/icon5.png'; 
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-5 bg-white border-b">
      <div className="flex items-center gap-2">
        
        <span className="text-3xl font-bold text-blue-600">DigiTools</span>
      </div>
      <div className="hidden gap-8 font-medium text-gray-600 md:flex">
        <a href="#products" className="transition hover:text-purple-600">Products</a>
        <a href="#features" className="transition hover:text-purple-600">Features</a>
        <a href="#pricing" className="transition hover:text-purple-600">Pricing</a>
        <a href="#faq" className="transition hover:text-purple-600">FAQ</a>
      </div>
      <div className="flex items-center gap-4">
  {/* Cart Icon */}
  <button className="transition-opacity hover:opacity-80">
    <img src={cartIcon} alt="Cart" className="w-6 h-6" />
  </button>

  {/* Login Button (Existing) */}
  <button className="px-2 py-2 font-semibold text-gray-700">Login</button>
  
  {/* Get Started Button (Existing) */}
  <button className="px-6 py-2 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-900">
    Get Started
  </button>
</div>
    </nav>
  );
};

export default Navbar;