import Link from 'next/link'
import React from 'react'
import { Input } from './ui/input'
import { Search, ShoppingCart, User2 } from 'lucide-react'

const Navbar = () => {
    return (
        <div>
            <nav className='h-24 border border-red-500 flex items-center justify-between fixed w-full max-w-7xl mx-auto'>
                <div>
                    <h1 className='text-2xl font-bold'>SHOP.CO</h1>
                </div>
                <div>
                    <ul className='flex items-center gap-4'>
                        <li>
                            <Link href={'#'}>Shop </Link>
                        </li>
                        <li>
                            <Link href={'#'}>On Sale</Link>
                        </li>
                        <li>
                            <Link href={'#'}>New Arrivals</Link>
                        </li>
                        <li>
                            <Link href={'#'}>Brands</Link>
                        </li>
                    </ul>
                </div>
                <div className='relative'>
                    <Search className='absolute top-3 left-2' size={15} color='gray' />
                    <Input type={'string'} placeholder="Search for products..." className={'rounded-3xl py-2 px-8'} />
                </div>
                <div className='flex items-center gap-2'>
                    <ShoppingCart />
                    <User2 />
                </div>
            </nav>
        </div>
    )
}

export default Navbar