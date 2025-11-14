"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function Footer() {
  return (
    <div className='fixed bottom-0 grid grid-cols-3 w-full border'>

           <Link className='flex flex-row' href="/">
     <Image src="/Image/home.png" alt='taxi' width={20} height={10}/>           <h1>Home</h1>
           </Link>
      {/* <Link href="/Login"><h1>login</h1></Link>
      <Link href="/Signup"><h1>signup</h1></Link> */}
      <Link className='flex flex-row'  href="/Services">      <Image src="/Image/customer-service.png" alt='taxi' width={20} height={10}/><h1>Services</h1></Link>
      <Link className='flex flex-row' href="/Account">     <Image src="/Image/user.png" alt='taxi' width={20} height={10}/><h1>Account</h1></Link>
    </div>
  )
}

export default Footer
