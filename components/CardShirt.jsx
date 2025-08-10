'use client'
import React, { useState } from 'react';
import { Star } from 'lucide-react';

const CardShirt = () => {
    const [showMore, setShowMore] = useState(false);

    const ProductCard = ({ delay = 0 }) => (
        <div
            className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 ease-out ${showMore ? 'translate-y-0 opacity-100' : ''
                }`}
            style={{
                transitionDelay: showMore ? `${delay}ms` : '0ms',
                transform: showMore ? 'translateY(0)' : 'translateY(20px)',
                opacity: showMore ? 1 : 0
            }}
        >
            <div className="overflow-hidden">
                <img
                    src="/shirt1.webp"
                    alt="T-shirt"
                    className="h-64 w-full object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Gradient Graphic T-shirt</h3>
                <div className="flex items-center gap-2 mb-2">
                    {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-gray-600">4.5/5</span>
                </div>
                <p className="text-xl font-bold">$30</p>
            </div>
        </div>
    );

    const ProductSection = ({ title, showViewAll = false }) => (
        <section className="pt-16">
            <h1 className="text-center text-5xl font-bold mb-10">{title}</h1>

            {/* Initial 4 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto gap-6 px-4">
                {[1, 2, 3, 4].map((_, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="overflow-hidden">
                            <img
                                src="/shirt1.webp"
                                alt="T-shirt"
                                className="h-64 w-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">Gradient Graphic T-shirt</h3>
                            <div className="flex items-center gap-2 mb-2">
                                {[...Array(4)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                                <span className="text-gray-600">4.5/5</span>
                            </div>
                            <p className="text-xl font-bold">$30</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            {showViewAll && !showMore && (
                <div className="flex items-center justify-center py-16">
                    <button
                        className="bg-white text-black rounded-full px-8 py-3 font-medium hover:bg-gray-100 transition-all duration-300 cursor-pointer border border-gray-300 hover:border-gray-400 hover:shadow-md transform hover:scale-105"
                        onClick={() => setShowMore(true)}
                    >
                        View All
                    </button>
                </div>
            )}

            {/* Additional 4 cards with staggered animation */}
            {showViewAll && (
                <div
                    className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto gap-6 px-4 mt-8 transition-all duration-500 ${showMore ? 'max-h-full opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                        }`}
                >
                    {[1, 2, 3, 4].map((_, idx) => (
                        <ProductCard key={`extra-${idx}`} delay={idx * 100} />
                    ))}
                </div>
            )}
        </section>
    );

    return (
        <div className="bg-gray-50 min-h-screen">
            <ProductSection title="NEW ARRIVALS" showViewAll={true} />
            <ProductSection title="TOP SELLING" showViewAll={false} />
        </div>
    );
};

export default CardShirt;