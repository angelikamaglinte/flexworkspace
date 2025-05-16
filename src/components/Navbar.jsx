import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="bg-white">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* logo */}
                <div className="flex items-center">
                    <img src={assets.logo} alt="FlexWorkspace Logo" className="mr-2" />
                    <span className="text-xl font-bold text-gray-800">FlexWorkspace</span>
                </div>

                {/* navigation links */}
                <div className="hidden md:flex space-x-6">
                    <a href="#workspaces" className="text-gray-600 hover:text-gray-800">Workspaces</a>
                    <a href="#experiences" className="text-gray-600 hover:text-gray-800">Experiences</a>
                </div>

                {/* Flex Your Space and Dropdown Button */}
                <div className="flex items-center space-x-4">
                    <a
                        href="#flex-your-space"
                        className="hidden md:block text-gray-600 hover:text-gray-800 font-medium"
                    >
                        Flex Your Space
                    </a>
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center bg-gray-100 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 focus:outline-none"
                        >
                            {/* custom hamburger icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            Work With Us
                        </button>
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                                <a
                                    href="#login"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    Log In
                                </a>
                                <a
                                    href="#signup"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    Sign Up
                                </a>
                                <a
                                    href="#flex-your-space"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    Flex Your Space
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;