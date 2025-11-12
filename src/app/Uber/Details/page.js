// "use client"
// import React from 'react'
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
// import next from 'next'
// import { useState, useCallback } from 'react'
// export default function Page() {
//     const containerStyle = {
//   width: '400px',
//   height: '400px',
// }

// const center = {
//   lat: 9.413421458685326, 
//   lng: 8.363154124091412,
// }
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//   })

//   const [map, setMap] = useState(null)

//   const onLoad = useCallback(function callback(map) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(center)
//     map.fitBounds(bounds)

//     setMap(map)
//   }, [])

//   const onUnmount = useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={10}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     >
//       {/* Child components, such as markers, info windows, etc. */}
//       <></>
//     </GoogleMap>
//   ) : (
//     <></>
//   )
// }
"use client";
import PickOn from '@/app/Component/PickOn'
import React from 'react'

function page() {
  return (
<>
    <div className='w-full justify-center items-center flex'>
       <h1>where to</h1>
    </div>
    <PickOn/>
    <div className='w-full border border-black rounded-2xl'>
      <input placeholder='from where' type='string' className=' w-full'></input> 
      <input placeholder='from where' type='string' className=' w-full'></input>
       </div>
    </>
  )
}

export default page
