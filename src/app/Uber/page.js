"use client";
import { useRouter } from 'next/navigation';
import React from 'react'

function Page() {
  const routes = useRouter();

  const search = () => {
    routes.push("Uber/Details")
  } 
  return (
    <div>
      <h1>
        uber  
    </h1>
    <input placeholder='where to?' onClick={search} className='border p-1 w-full rounded-2xl'/>
      <div className='grid grid-cols-3 mt-4'>
        <button>trip</button>
        <button>send item</button>
        <button>reserve</button>
      </div>
    </div>
  )
}

export default Page
