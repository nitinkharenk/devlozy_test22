import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
        <div className=' bg-neutral-900 gap-y-6 grid grid-cols-2 lg:grid-cols-4 justify-items-center font-medium text-sm py-20  text-white  place-content-center'>
            <div className='grid content-start grid-cols-1 gap-2'>
                <h1 className='text-gray-400'>COMPANY</h1>
            <Link href="/error" >About LOS</Link>
            <Link href="/error" >Contact Us</Link>
            
            </div>
            <div className='grid grid-cols-1 gap-2'>
                <h1 className='text-gray-400'>HELP</h1>
            <Link href="/error" >Track My Music</Link>
            <Link href="/error" >Community Support</Link>
            <Link href="/error" >Community Guidelines</Link>
            <Link href="/error" >Help</Link>
            </div>
           
            <div className='grid grid-cols-1 gap-2'>
                <h1 className='text-gray-400'>ACCOUNT</h1>
            <Link href="/error" >Sign Up</Link>
            <Link href="/error" >Log In</Link>
            <Link href="/error" >Subscribe</Link>
            </div>
            <div className='grid grid-cols-1 gap-2'>
                <h1 className='text-gray-400'>FOLLOW US</h1>
            <Link href="/error" >Facebook</Link>
            <Link href="/error" >Twitter</Link>
            <Link href="/error" >Instagram</Link>
            <Link href="/error" >YouTube</Link>
            </div>
        </div>

            
           


        </>
    )
}

export default Footer