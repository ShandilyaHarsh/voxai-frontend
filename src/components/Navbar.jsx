// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../components/PrimaryButton';

const Navbar = () => {
  return (
    <div className='sticky top-0  flex flex-row z-50 justify-between bg-deepNavy py-6 px-32 items-center'>
        <Link to="/" className="logo text-white font-inter font-bold text-2xl">Vox.AI</Link>
        <div className="pagesNav">
            <Link to="/" className="text-white font-montserrat hover:text-gray-400 font-semibold text-xl mr-8">Home</Link>
            <Link to="/about" className="text-white font-montserrat hover:text-gray-400 font-semibold text-xl mr-8">About</Link>
            <Link to="/services" className="text-white font-montserrat hover:text-gray-400 font-semibold text-xl mr-8">Services</Link>
            <Link to="/contact" className="text-white font-montserrat hover:text-gray-400 font-semibold text-xl">Contact</Link>
        </div>
        <div className="button">
            <PrimaryButton onClick={() => alert('Login clicked!')}>Login</PrimaryButton>
        </div>
    </div>
  );
};

export default Navbar;