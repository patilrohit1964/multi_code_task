import React from 'react'
import { Sparkles } from "lucide-react";
const Hero = () => {
    return (
        <section className="relative bg-[#F2F0F1] min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            {/* Decorative sparkle - top right */}
            <div className="absolute top-20 right-20 hidden lg:block">
                <Sparkles
                    className="w-16 h-16 text-black transform rotate-12"
                    fill="currentColor"
                />
            </div>

            {/* Decorative sparkle - left side */}
            <div className="absolute left-20 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <Sparkles
                    className="w-12 h-12 text-black transform -rotate-12"
                    fill="currentColor"
                />
            </div>

            <div className="max-w-4xl mx-auto text-center">
                {/* Main Headline */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-black leading-tight mb-8">
                    FIND CLOTHES
                    <br />
                    THAT MATCHES
                    <br />
                    YOUR STYLE
                </h1>

                {/* Subtitle */}
                <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                    Browse through our diverse range of meticulously crafted garments,
                    designed to bring out your individuality and cater to your sense of
                    style.
                </p>

                {/* CTA Button */}
                <button className="bg-black text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors duration-200 mb-16">
                    Shop Now
                </button>

                {/* Stats Section */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-3xl mx-auto">
                    <div className="text-center">
                        <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-2">
                            200+
                        </div>
                        <div className="text-gray-600 text-sm sm:text-base">
                            International Brands
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-2">
                            2000+
                        </div>
                        <div className="text-gray-600 text-sm sm:text-base">
                            High-Quality Products
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-2">
                            30,000+
                        </div>
                        <div className="text-gray-600 text-sm sm:text-base">
                            Happy Customers
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero