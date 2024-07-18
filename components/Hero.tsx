import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <div id='hero' className='mx-auto max-w-full    text-center bg-black '>

            <div className=' px-4 lg:px-28  pt-10 pb-20'>
                <div className=''>
                    <div className=' flex lg:flex-row flex-col-reverse ui-not-focus-visible:outline-none  sm:gap-y-16 '>
                        <div className=" my-auto font-bold font-['Montserrat']">
                            <div className='bg-sky-300 fade-in-bottom bg-opacity-20 rounded-full lg:w-44 lg:mx-0 mx-20 text-center p-2 mb-8 text-sky-300 font-medium   '>
                            <p className=' '>Best IT Solution</p>
                            </div>
                            <h1 className='lg:text-7xl fade-in-bottom1 text-white text-shadow text-center lg:text-start  text-3xl'>
                                Unleashing the power of your brand in the digital realm.
                            </h1>
                            <div className='fade-in-bottom2 pt-14 lg:text-center text-xl lg:flex gap-6 '>
                            <Link href="#service" className=" px-12 py-4 rounded-full font-medium hover:bg-cyan-500 text-white bg-orange-600">
                            Get Started
                            </Link>
                            
                            </div>
                            <br />
                            <div className=" lg:w-3/4   font-normal lg:text-xl text-xs text-white text-center lg:text-start font-['Montserrat'] pt-8">
                                <p>Build world-class digital products with a team of design,

                                    development & strategy experts. All in one place.

                                </p>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 mx-4  my-10 gap-4'>
                            <Image src="/hero1.webp" alt='profile' width={600} height={600} className='  mx-auto slide-in-left rounded-tl-3xl' />
                            <Image src="/hero3.webp" alt='profile' width={600} height={600} className='  mx-auto slide-in-right rounded-tr-3xl' />
                            <Image src="/hero2.webp" alt='profile' width={600} height={600} className=' mx-auto slide-in-bottom rounded-b-3xl col-span-2' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero
