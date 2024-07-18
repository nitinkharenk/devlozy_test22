import Contact from '@/components/Contact'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <div className="lg:grid grid-cols-5 font-['Montserrat'] lg:text-start text-center  lg:px-28 px-4 py-20 lg:pt-28 lg:pb-14 bg-stone-950">
        <div className="col-span-3">
          <h1 className=" text-4xl lg:text-6xl text-white font-bold leading-tight">
            Contact
          </h1>
          <div className="flex justify-center lg:justify-start my-8">
            <Link className=" hover:text-orange-600 text-white" href={"/"}>
              Home
            </Link>
            <p className="text-white px-2">/</p>
            <p className="text-green-600">Contact Us</p>
          </div>
        </div>
        <div className="grid col-span-2 content-end  mx-4   ">
          <p className="text-xl text-white leading-2 ">
            At DeveloZy, we are dedicated to delivering unparalleled IT services
            with a commitment to excellence. We understand that in today's
            dynamic business.
          </p>
        </div>
      </div>
      
    <Contact />
    </>
  )
}

export default page