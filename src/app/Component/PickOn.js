import Image from 'next/image';
import React, { useState } from 'react'

function PickOn() {
     const [isOpen, setIsOpen] = useState(false);
     const Open = () =>{
      setIsOpen(true);
     }
     const close = () =>{
      setIsOpen(false)
     }
     const handleOutSideClick = () =>{
        
     }
  return (

    <div>
      <div className='flex flex-row ml-6 gap-2 border w-fit px-4 border-black rounded-2xl mb-5'  onClick={Open}>
        <Image src="/Image/time-left.png" width={20} height={10} alt='modal'/>                       
        <h1>pick on</h1>
      <Image src="/Image/arrow-down-sign-to-navigate.png" width={20} height={10} alt='modal'/>                       

      </div>
      {
        isOpen &&(
        <div className="fixed top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 inset-0 w-2/4 h-1/3 flex shadow-2xl flex-col items-center justify-center bg-amber-50 bg-opacity-70 z-[9]">
            <button onClick={close}>close</button>
            <h1>deliver now</h1> 
                         <h1>deliver later</h1>            
           
          </div>
        )
      }
    </div>
  )
}

export default PickOn
