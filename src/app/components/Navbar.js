import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
    <nav className='flex justify-between px-16 h-16 bg-black text-white items-center'>
            <div className=''>
                <ul className='flex'>
                    <li><Image
                src={"/Zafari_logo.png"}
                width={60}
                height={10}
                alt='logo'>   
                </Image></li>
                    <li><Link href={'/'}>
                    <h1 className='font-semibold text-3xl  '>Zafari</h1>
                </Link></li>
                </ul>
            </div>

            <div>
                <ul className='flex list-none gap-4 font-semibold text-lg'>
                    <li><Link href={'/'}>Rides</Link></li>
                    <li><Link href={'/about'}>About</Link></li>
                    <li><Link href={'/contact'}>Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar