import Link from 'next/link'
import React from 'react'

function header() {
  return (
    <div>
      <Link href="/"><h1>dams</h1></Link>
      <Link href="/login"><h1>login</h1></Link>
      <Link href="/signup"><h1>signup</h1></Link>
      <Link href="/Dispatch"><h1>dispatch</h1></Link>
      <Link href="/Uber"><h1>cars</h1></Link>
    </div>
  )
}

export default header
