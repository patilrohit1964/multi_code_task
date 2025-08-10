
const Review = () => {
    return (
        <div className="py-16">
            <div className='border flex items-center justify-center'>
                <div className="h-52 w-[700px] rounded-tl-4xl rounded-br-4xl overflow-hidden">
                    {[1].map(el => (
                        <div className="flex flex-col gap-2 text-center px-3 py-3 bg-[#F0EEED]">
                            <p>Our experience with your service has been exceptional. The platform provided us with a seamless hiring process, from posting job openings to finding the perfect candidate. The user-friendly interface made it easy for our team to collaborate, review applications, and schedule interviews. Thanks to your service, we were able to hire a highly qualified candidate within a short timeframe. It has become an invaluable tool for our recruitment efforts</p>
                            <p>John Smith</p>
                            <p className="text-gray-500">Seniour HR Manager at Zendesk</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Review