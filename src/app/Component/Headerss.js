import Link from 'next/link'
import React from 'react'

function Headerss () {
  return (
    <div className='grid grid-cols-5'>
      <Link href="/"><h1>dams</h1></Link>
      <Link href="/Login"><h1>login</h1></Link>
      <Link href="/Signup"><h1>signup</h1></Link>
      <Link href="/Dispatch"><h1>dispatch</h1></Link>
      <Link href="/Uber"><h1>cars</h1></Link>
    </div>
  )
}

export default Headerss
