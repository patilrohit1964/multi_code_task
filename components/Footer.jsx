import { Facebook, Instagram, Mail } from 'lucide-react'
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Footer = () => {
    return (
        <div className='mt-40'>
            <div className='flex justify-between items-center lg:w-[80%] left-[10%] lg:h-[180px] py-9 px-14 bg-black mx-auto lg:absolute bottom-[9%] z-50 rounded-2xl lg:rounded-4xl flex-col'>
                <h1 className='text-white lg:text-5xl font-bold'>STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</h1>
                <div>
                    <div>
                        <Mail color='gray' className='absolute z-50 top-14' />
                        <Input className={'bg-white rounded-full py-5 relative'} placeholder='enter your email address' />
                    </div>
                    <Button className={'bg-white text-black rounded-full px-10 py-5 mt-2 hover:bg-white cursor-pointer'}>Send Us For Notification</Button>
                </div>
            </div>
            <footer className='bg-[#F0F0F0] flex flex-col lg:justify-around lg:items-center pl-8 relative lg:h-[380px]'>
                <div className='flex flex-col items-start gap-5 mt-10 lg:mt-36'>
                    <h1 className="text-2xl font-bold text-black">SHOP.CO</h1>
                    <p className='w-64 text-gray-600'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                    <div className='flex items-center gap-3'>
                        <Facebook />
                        <Instagram />
                    </div>
                </div>
                <div className='flex flex-col gap-3 mt-10 lg:mt-36'>
                    <h1 className="text-xl text-black">HELP</h1>
                    <ul>
                        {["Privacy statement", 'Terms & Conditions', 'Cookie Policy'].map(el => (
                            <li className='mb-2'>{el}</li>
                        ))}
                    </ul>
                </div>
            </footer >
        </div >
    )
}

export default Footer