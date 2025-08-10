import React from 'react';
import { Mail, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <div className='mt-40'>
            {/* Newsletter Section */}
            <div className='mx-4 lg:mx-auto lg:w-[80%] lg:absolute lg:left-[10%] lg:top-[85%] z-50'>
                <div className='bg-black rounded-2xl lg:rounded-4xl px-6 py-8 lg:px-14 lg:py-9 lg:h-[180px] flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 lg:gap-0'>
                    <div className='lg:flex-1'>
                        <h1 className='text-white text-2xl lg:text-5xl font-bold leading-tight'>
                            STAY UPTO DATE ABOUT <br className='hidden lg:block' />
                            OUR LATEST OFFERS
                        </h1>
                    </div>

                    <div className='lg:max-w-md lg:ml-8'>
                        <div className='relative mb-4'>
                            <Mail
                                color='gray'
                                className='absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-5 h-5'
                            />
                            <input
                                className='w-full md:w-[240px] bg-white rounded-full py-3 pl-12 pr-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50'
                                placeholder='Enter your email address'
                                type="email"
                            />
                        </div>
                        <button className=' w-full md:w-[240px] bg-white text-black rounded-full px-6 py-3 font-medium hover:bg-gray-100 transition-colors cursor-pointer'>
                            Subscribe to Newsletter
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <footer className='bg-[#F0F0F0] pt-20 lg:pt-36 pb-8 lg:pb-12 px-6 lg:px-0'>
                <div className='max-w-6xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
                        {/* Brand Section */}
                        <div className='lg:col-span-2'>
                            <div className='flex flex-col gap-5'>
                                <h1 className="text-2xl lg:text-3xl font-bold text-black">SHOP.CO</h1>
                                <p className='text-gray-600 text-sm lg:text-base max-w-64 leading-relaxed'>
                                    We have clothes that suits your style and which you're proud to wear. From women to men.
                                </p>
                                <div className='flex items-center gap-3 mt-2'>
                                    <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer'>
                                        <Facebook className='w-5 h-5 text-gray-700' />
                                    </div>
                                    <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer'>
                                        <Instagram className='w-5 h-5 text-gray-700' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Help Links */}
                        <div className='flex flex-col gap-4'>
                            <h2 className="text-lg font-semibold text-black tracking-wide">HELP</h2>
                            <ul className='space-y-3'>
                                {['Privacy statement', 'Terms & Conditions', 'Cookie Policy'].map(item => (
                                    <li key={item} className='text-gray-600 hover:text-gray-900 cursor-pointer transition-colors text-sm lg:text-base'>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;