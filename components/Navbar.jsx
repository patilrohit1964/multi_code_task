'use client'
import React, { useState } from 'react';
import { Search, ShoppingCart, User, ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-white border-b border-red-200 sticky top-0 z-[1000]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
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
                                {/* Dropdown menu would go here */}
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
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-black focus:border-black transition-all duration-200"
                                placeholder="Search for products..."
                            />
                        </div>
                    </div>

                    {/* Action Icons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="p-2 text-gray-700 hover:text-black transition-colors duration-200">
                            <ShoppingCart className="h-6 w-6" />
                        </button>
                        <button className="p-2 text-gray-700 hover:text-black transition-colors duration-200">
                            <User className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
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
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                            {/* Mobile Search */}
                            <div className="mb-4">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Search className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-black focus:border-black"
                                        placeholder="Search for products..."
                                    />
                                </div>
                            </div>

                            {/* Mobile Navigation Links */}
                            <div className="flex items-center justify-between py-2">
                                <span className="text-gray-700 font-medium">Shop</span>
                                <ChevronDown className="h-4 w-4 text-gray-700" />
                            </div>
                            <a href="#" className="block px-0 py-2 text-gray-700 font-medium">
                                On Sale
                            </a>
                            <a href="#" className="block px-0 py-2 text-gray-700 font-medium">
                                New Arrivals
                            </a>
                            <a href="#" className="block px-0 py-2 text-gray-700 font-medium">
                                Brands
                            </a>

                            {/* Mobile Action Icons */}
                            <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                                <button className="p-2 text-gray-700">
                                    <ShoppingCart className="h-6 w-6" />
                                </button>
                                <button className="p-2 text-gray-700">
                                    <User className="h-6 w-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;