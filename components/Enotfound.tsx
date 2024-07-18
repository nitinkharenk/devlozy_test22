import React from 'react'
import Image from 'next/image'
import Link from 'next/link'




const enotfound = () => {
  return (
    <>
    <div className="font-['Montserrat'] my-20 text-center grid col-span-1 justify-items-center">
      <Image src={"/404.svg"} alt={""} width={400} height={400} />
      <div className="lg:mx-52 px-4">
        <h1 className="text-4xl lg:text-5xl mx-4 lg:mx-52 mb-10 font-bold">
          The page you’re looking for isn’t available.
        </h1>
        <p className="lg:mx-20">
          This could be due to maintenance, updates, or other technical
          issues. Our team is actively working to resolve the issue and
          restore access as soon as possible.
        </p>
      </div>
      <div className="fade-in-bottom2 pt-14 lg:text-center text-xl lg:flex gap-6 ">
        <Link
          href="/"
          className=" px-12 py-4 rounded-full font-medium hover:bg-cyan-500 text-white bg-orange-600"
        >
          Back To Home
        </Link>
      </div>
    </div>
  </>
  )
}

export default enotfound