import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <div>
      <h1 className='font-bold text-lg '>Similar To</h1>
      <div className='justify-center my-6'>
        <Image src={'/Sabrina.webp'} alt={''} width={100} height={100} className='rounded-full my-2' />
        <Link href={'/sabrina'}>Sabrina</Link>
      </div>
    </div>
    
    </>
  )
}

export default page