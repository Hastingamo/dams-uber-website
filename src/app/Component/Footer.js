"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function Footer() {
  return (
    <div className='fixed bottom-0 grid grid-cols-3'>

           <Link href="/">
          {/* <Image src={/image/home.png} width={20} height={20} alt='home'/> */}
           <h1>Home</h1>
           </Link>
      {/* <Link href="/Login"><h1>login</h1></Link>
      <Link href="/Signup"><h1>signup</h1></Link> */}
      <Link href="/Services"><h1>Services</h1></Link>
      <Link href="/Account"><h1>Account</h1></Link>
    </div>
  )
}

export default Footer
