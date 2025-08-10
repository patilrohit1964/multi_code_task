'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Review = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const reviewContent = [
        {
            review: "Our experience with your service has been exceptional. The platform provided us with a seamless hiring process, from posting job openings to finding the perfect candidate. The user-friendly interface made it easy for our team to collaborate, review applications, and schedule interviews. Thanks to your service, we were able to hire a highly qualified candidate within a short timeframe. It has become an invaluable tool for our recruitment efforts",
            name: "John Smith",
            position: "Senior HR Manager at Zendesk"
        },
        {
            review: "Our experience with your service has been exceptional. The platform provided us with a seamless hiring process, from posting job openings to finding the perfect candidate. The user-friendly interface made it easy for our team to collaborate, review applications, and schedule interviews. Thanks to your service, we were able to hire a highly qualified candidate within a short timeframe. It has become an invaluable tool for our recruitment efforts",
            name: "John Smith",
            position: "Senior HR Manager at Zendesk"
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % reviewContent.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + reviewContent.length) % reviewContent.length);
    };

    const currentContent = reviewContent[currentSlide];

    return (
        <div className="py-16 relative">
            <h1 className="text-center text-5xl font-bold mb-10">OUR HAPPY CUSTOMERS</h1>
            <div className='flex items-center justify-center relative'>
                {/* Arrow Navigation */}
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 bg-[#0050C7] rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 border border-gray-200"
                        aria-label="Previous review"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-700" color='white' />
                    </button>
                </div>

                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 bg-[#0050C7] rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 border border-gray-200"
                        aria-label="Next review"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-700" color='white' />
                    </button>
                </div>

                {/* Slider Container */}
                <div className="w-[700px] max-w-full mx-4 rounded-tl-[100px] rounded-br-[100px] overflow-hidden">
                    <div
                        className="flex h-full transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {reviewContent.map((content, slideIndex) => (
                            <div key={slideIndex} className="w-full flex-shrink-0 h-full">
                                <div className="flex flex-col gap-2 text-center px-6 bg-[#F0EEED] py-5 justify-center">
                                    <p className="text-sm md:text-base leading-relaxed text-gray-800 mb-4">
                                        {content.review}
                                    </p>
                                    <p className="font-semibold text-gray-900 text-lg">
                                        {content.name}
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        {content.position}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;