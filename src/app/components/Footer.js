import React from 'react'
import Link from 'next/link'
import { FaLinkedin } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

const Footer = () => {
  return (
    <>
    <div className='flex justify-around bg-black text-gray-400 w-full px-6 pt-4 pb-10 z-10'>
            <div className='w-[200px]'>
                <h1 className='text-lg font-semibold text-white py-2'>Zafari</h1>
                <h3>Zafari is a quirky ride-hailing service where animals replace cars — hop on a horse, camel, or elephant and experience travel the wild way. It’s not just a ride, it’s an adventure!</h3>
            </div>

            <div>
                <h1 className='text-lg font-semibold text-white py-2'>Quick Links</h1>
                <ul>
                    <li><Link href={'/'}>Rides</Link></li>
                    <li><Link href={'/about'}>About</Link></li>
                </ul>
            </div>

            <div>
                <h1 className='text-lg font-semibold text-white py-2'>Contact Us</h1>
                <ul>
                    <li>hello@Zafari.in</li>
                    <li>+91 1234567890</li>
                    <li>New Delhi, India</li>
                </ul>
            </div>

            <div className=''>
                <h1 className='text-lg font-semibold text-white py-2'>Follow Us</h1>
                <a href={'/'}><button className='text-2xl cursor-pointer'><FaLinkedin /></button></a>
                <a href={`/`}><button className='p-2 text-2xl cursor-pointer'><MdOutgoingMail /></button></a>
            </div>

        </div>
    </>
  )
}

export default Footer