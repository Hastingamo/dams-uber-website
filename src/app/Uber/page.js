import React from 'react'

function page() {
  return (
    <div>
      <h1>
        uber  
    </h1>
    <input placeholder='where to?' className='border p-1 w-full rounded-2xl'/>
      <div className='grid grid-cols-3 mt-4'>
        <button>trip</button>
        <button>send item</button>
        <button>reserve</button>
      </div>
    </div>
  )
}

export default page
