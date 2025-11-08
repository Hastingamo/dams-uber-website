import Link from 'next/link'
import React from 'react'

function Headerss () {
  return (
    <>
        <div className='grid-cols-2 grid '>
 
      <Link href="/Dispatch"><h1>Courier</h1></Link>
      <Link href="/Uber"><h1>cars</h1></Link>
    </div></>

  )
}

export default Headerss
