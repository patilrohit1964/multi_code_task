'use client'
import React, { useState } from 'react';
import { Search, ShoppingCart, User, ChevronDown, Menu, X, UserCircle } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-[1000] overflow-hidden">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 overflow-hidden">
                <div className="flex items-center justify-between h-24 px-2">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold text-black">SHOP.CO</h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <div className="relative group">
                                <button className="flex items-center text-gray-700 hover:text-black font-medium transition-colors duration-200">
                                    Shop
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </button>
                                {/* Dropdown menu  */}
                            </div>
                            <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors duration-200">
                                On Sale
                            </a>
                            <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors duration-200">
                                New Arrivals
                            </a>
                            <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors duration-200">
                                Brands
                            </a>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="hidden md:block flex-1 max-w-md mx-8">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-500" />
                            </div>
                            <input
                                type="text"
                                className="block  pl-10 pr-3 py-3 border border-gray-300 rounded-full leading-5 bg-[#f0f0f0] placeholder-gray-400 focus:outline-none focus:placeholder-gray-400 transition-all duration-200"
                                placeholder="Search for products..."
                            />
                        </div>
                    </div>

                    {/* Action Icons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="p-2 text-gray-700 hover:text-black transition-colors duration-200">
                            <ShoppingCart className="h-6 w-6 text-black" />
                        </button>
                        <button className="p-2 text-gray-700 hover:text-black transition-colors duration-200">
                            <UserCircle className="h-6 w-6 text-black" />
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex">
                        <div className="md:flex items-center">
                            <button className="p-2 text-gray-700 hover:text-black transition-colors duration-200">
                                <ShoppingCart className="h-6 w-6 text-black" />
                            </button>
                            <button className="p-2 text-gray-700 hover:text-black transition-colors duration-200">
                                <UserCircle className="h-6 w-6 text-black" />
                            </button>
                        </div>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black transition-all duration-200"
                        >
                            {isMenuOpen ? (
                                <X className="block h-6 w-6" />
                            ) : (
                                <Menu className="block h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="md:hidden h-screen">
                        <div className="px-10 pt-2 pb-3 h-screen w-full space-y-1 absolute bg-[#cdcdcd] sm:px-3">
                            {/* Mobile Navigation Links */}
                            <div className="flex items-center justify-between py-4">
                                <span className="text-gray-700 font-medium">Shop</span>
                            </div>
                            <a href="#" className="block px-0 py-4 text-gray-700 font-medium">
                                On Sale
                            </a>
                            <a href="#" className="block px-0 py-4 text-gray-700 font-medium">
                                New Arrivals
                            </a>
                            <a href="#" className="block px-0 py-4 text-gray-700 font-medium">
                                Brands
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;