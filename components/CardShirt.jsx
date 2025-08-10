'use client'
import React, { useState } from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { Button } from './ui/button'

const CardShirt = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <section className='bg-white pt-16'>
                <h1 className='text-center text-5xl font-bold mb-10'>NEW ARRIVALS</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center lg:grid-cols-4 max-w-7xl mx-auto gap-4'>
                    {
                        [1, 2, 3, 4].map((el, idx) => (
                            <Card key={idx} className={'border-0 shadow'}>
                                <CardHeader className={'overflow-hidden p-0 rounded-2xl'}>
                                    <Image src={'/shirt1.webp'} height={300} width={300} className='h-full w-full' />
                                </CardHeader>
                                <CardContent>
                                    <div className='flex flex-col gap-1'>
                                        <h3 className='text-xl font-semibold'>Gradient Graphic T-shirt</h3>
                                        <div className='flex gap-2'>
                                            {[...Array(4)].map((el, i) => (
                                                <Star key={i} className='fill-yellow-400 text-yellow-400' />
                                            ))}
                                            4.5/5
                                        </div>
                                        <p className='text-xl font-bold'>$30</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
                {!toggle &&
                    <div className='flex items-center justify-center py-16'>
                        <Button className={'py-2 px-4 border border-gray-300 '} onClick={() => setToggle(true)} variant={'ghost'}>View All</Button>
                    </div>
                }
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center lg:grid-cols-4 max-w-7xl mx-auto gap-4'>
                    {
                        toggle && [1, 2, 3, 4].map((el, idx) => (
                            <Card key={idx} className={'border-0 transition-all delay-300'}>
                                <CardHeader className={'overflow-hidden p-0 rounded-2xl'}>
                                    <Image src={'/shirt1.webp'} height={300} width={300} className='h-full w-full' />
                                </CardHeader>
                                <CardContent>
                                    <div className='flex flex-col gap-1'>
                                        <h3 className='text-xl font-semibold'>Gradient Graphic T-shirt</h3>
                                        <div className='flex gap-2'>
                                            {[...Array(4)].map((el, i) => (
                                                <Star key={i} className='fill-yellow-400 text-yellow-400' />
                                            ))}
                                            4.5/5
                                        </div>
                                        <p className='text-xl font-bold'>$30</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </section>
            <section className='pt-16'>
                <h1 className='text-center text-5xl font-bold mb-10'>TOP SELLING</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center lg:grid-cols-4 max-w-7xl mx-auto gap-4'>
                    {
                        [1, 2, 3, 4].map((el, idx) => (
                            <Card key={idx} className={'border-0 shadow'}>
                                <CardHeader className={'overflow-hidden p-0 rounded-2xl'}>
                                    <Image src={'/shirt1.webp'} height={300} width={300} className='h-full w-full' />
                                </CardHeader>
                                <CardContent>
                                    <div className='flex flex-col gap-1'>
                                        <h3 className='text-xl font-semibold'>Gradient Graphic T-shirt</h3>
                                        <div className='flex gap-2'>
                                            {[...Array(4)].map((el, i) => (
                                                <Star key={i} className='fill-yellow-400 text-yellow-400' />
                                            ))}
                                            4.5/5
                                        </div>
                                        <p className='text-xl font-bold'>$30</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default CardShirt