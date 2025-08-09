import React from 'react'
import { CardHeader } from './ui/card'
import Image from 'next/image'

const Card = () => {
    return (
        <div className='bg-white'>
            <div className='grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <Card>
                    <CardHeader>
                        <Image src={'./shirt1.jpeg'} height={300} width={300} />
                    </CardHeader>
                </Card>
            </div>
        </div>
    )
}

export default Card