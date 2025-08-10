
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Review = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Two different review content arrays for the slider
    const reviewContent = [
        {
            review: "Our experience with your service has been exceptional. The platform provided us with a seamless hiring process, from posting job openings to finding the perfect candidate. The user-friendly interface made it easy for our team to collaborate, review applications, and schedule interviews. Thanks to your service, we were able to hire a highly qualified candidate within a short timeframe. It has become an invaluable tool for our recruitment efforts",
            name: "John Smith",
            position: "Senior HR Manager at Zendesk"
        },
        {
            review: "The customer support team went above and beyond to help us integrate the platform with our existing systems. Their technical expertise and prompt responses made the transition smooth and efficient. We've seen a 40% improvement in our recruitment timeline since implementing this solution. The analytics dashboard provides valuable insights that help us make data-driven hiring decisions. Highly recommend this service to any organization looking to streamline their hiring process.",
            name: "Sarah Johnson",
            position: "Head of Talent Acquisition at Microsoft"
        }
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
            <div className='border flex items-center justify-center relative'>
                {/* Arrow Navigation */}
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 border border-gray-200"
                        aria-label="Previous review"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>
                </div>
                
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 border border-gray-200"
                        aria-label="Next review"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-700" />
                    </button>
                </div>

                {/* Slide Indicators */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
                    {reviewContent.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                currentSlide === index ? 'bg-gray-700' : 'bg-gray-300'
                            }`}
                            aria-label={`Go to review ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Slider Container */}
                <div className="h-52 w-[700px] max-w-full mx-4 rounded-tl-4xl rounded-br-4xl overflow-hidden">
                    <div 
                        className="flex h-full transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {reviewContent.map((content, slideIndex) => (
                            <div key={slideIndex} className="w-full flex-shrink-0 h-full">
                                <div className="flex flex-col gap-2 text-center px-6 py-6 bg-[#F0EEED] h-full justify-center">
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