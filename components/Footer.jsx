import { Facebook, Instagram } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='w-[500px] h-[300px] bg-black mx-auto absolute left-0 bottom-0'>
                <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                <div>
                    
                </div>
            </div>
            <footer className='bg-[#F0F0F0] flex justify-around items-center py-16 relative'>
                <div className='flex flex-col items-start gap-3'>
                    <h1 className="text-2xl font-bold text-black">SHOP.CO</h1>
                    <p className='w-64'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                    <div className='flex items-center gap-3'>
                        <Facebook />
                        <Instagram />
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className="text-xl text-black">HELP</h1>
                    <p className='w-64'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                    <div className='flex items-center gap-3'>
                        <Facebook />
                        <Instagram />
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer