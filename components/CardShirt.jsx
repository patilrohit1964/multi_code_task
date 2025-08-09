import React from 'react'
import { Card, CardHeader } from './ui/card'
import Image from 'next/image'

const CardShirt = () => {
    return (
        <div className='bg-white'>
            <div className='grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-4'>
                {
                    [1, 2, 3, 4, 5].map((el) => (
                        <Card>
                            <CardHeader>
                                <Image src={'/shirt1.jpeg'} height={300} width={300} />
                            </CardHeader>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default CardShirt